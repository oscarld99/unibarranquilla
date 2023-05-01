/* eslint-disable prettier/prettier */
import React, { useRef, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Fab, LocationFilters } from '@components/ui'
import {
    Cancel,
    Info,
    Minus,
    Plus,
    Search
} from '@components/icons'
import { COLORS_APP } from '@Constants/colors'
import Floor1 from './Layers/Floor1'
import { IGeometricPlace } from '@interfaces/data/geometrycPlace.interface'
import styles from './Location.styles'
import ModalLocationDetail from './ModalLocationDetail'

const Location = () => {

    const [scale, setScale] = useState(0.25)
    const [activeFloor, setActiveFloor] = useState(1)
    const [showButtons, setShowButtons] = useState(false)
    const [searchedPlace, setSearchedPlace] = useState(null as unknown as IGeometricPlace)
    const [searchedEndPlace, setSearchedEndPlace] = useState(null as unknown as IGeometricPlace)
    const [showModal, setShowModal] = useState(false)
    const bottomButton = scale === 1 ? 70 : 130
    const scrollRefHorizontal = useRef<ScrollView | null>(null)
    const scrollRefVertical = useRef<ScrollView | null>(null)
    const showMinusButton = scale > 0.2 && showButtons
    const showPlusButton = scale < 1 && showButtons

    const isFloor1Active = activeFloor === 1

    const handleScale = (direction: number) => {
        if (direction > 0) return setScale(scale + 0.15)
        return setScale(scale - 0.15)
    }


    const handleWalk = (startLocation: IGeometricPlace | null, endLocation: IGeometricPlace | null) => {
        if (startLocation && endLocation) {
            setSearchedPlace(startLocation)
            setSearchedEndPlace(endLocation)
        }
    }

    const handleSearch = (item: IGeometricPlace | null) => {
        if (item && searchedPlace?.id !== item?.id) {
            scrollRefHorizontal.current?.scrollTo({
                x: item.position.x - 100,
                animated: true
            })
            scrollRefVertical.current?.scrollTo({
                y: item.position.y - 100,
                animated: true
            })
            setSearchedPlace(item)
            setScale(1)
        } else {
            cancelZoomView()
        }
    }

    const cancelZoomView = () => {
        setScale(0.7)
        scrollRefHorizontal.current?.scrollTo({
            x: 0,
            animated: true
        })
        scrollRefVertical.current?.scrollTo({
            y: 0,
            animated: true
        })
        return setSearchedPlace(null as unknown as IGeometricPlace)
    }

    return (
        <View style={styles.location__container}>
            <View style={styles.location__autocomplete}>
                <LocationFilters
                    onCancel={cancelZoomView}
                    onSearhLocation={handleSearch}
                    onWalk={handleWalk}
                />
            </View>
            <View style={styles.location__map}>
                <View style={styles.location__streets}>
                    <Text style={styles.location__streetsText}>Carrera 45</Text>
                </View>
                <ScrollView ref={scrollRefVertical}>
                    <ScrollView horizontal ref={scrollRefHorizontal}>
                        <Floor1
                            activeFloor={activeFloor}
                            onPressPlace={handleSearch}
                            scale={scale}
                            searchedPlace={searchedPlace}
                            searchedEndPlace={searchedEndPlace}
                        />
                    </ScrollView>
                </ScrollView>
                <View style={styles.location__streets}>
                    <Text style={styles.location__streetsText}>Carrera 44</Text>
                </View>
            </View>
            <View style={styles.location__buttonsContainer}>
                <TouchableOpacity
                    style={isFloor1Active ? {
                        ...styles.location__floorButon,
                        ...styles.location__floorButonActive
                    }
                        : styles.location__floorButon}
                    onPress={() => setActiveFloor(1)}
                >
                    <Text style={isFloor1Active ? {
                        ...styles.location__floorButonText,
                        ...styles.location__floorButonTextActive
                    }
                        : styles.location__floorButonText}>
                        PISO 1
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={!isFloor1Active ? {
                        ...styles.location__floorButon,
                        ...styles.location__floorButonActive
                    }
                        : styles.location__floorButon}
                    onPress={() => setActiveFloor(2)}
                >
                    <Text style={!isFloor1Active ? {
                        ...styles.location__floorButonText,
                        ...styles.location__floorButonTextActive
                    }
                        : styles.location__floorButonText}>
                        PISO 2
                    </Text>
                </TouchableOpacity>
            </View>

            <ModalLocationDetail
                location={searchedPlace}
                isShow={showModal}
                onClose={() => setShowModal(!showModal)}
            />

            <Fab
                icon={showButtons ? (
                    <Cancel color={COLORS_APP.WHITE} />
                ) : (
                    <Search color={COLORS_APP.WHITE} />
                )}
                onPress={() => setShowButtons(!showButtons)}
            />
            {
                showMinusButton && (
                    <Fab
                        icon={<Minus color={COLORS_APP.WHITE} />}
                        onPress={() => handleScale(-1)}
                        bottom={70}
                    />
                )
            }
            {
                showPlusButton && (
                    <Fab
                        icon={<Plus color={COLORS_APP.WHITE} />}
                        onPress={() => handleScale(1)}
                        bottom={bottomButton}
                    />
                )
            }
            {
                searchedPlace !== null && (
                    <Fab
                        icon={<Info color={COLORS_APP.WHITE} />}
                        onPress={() => setShowModal(true)}
                        right={70}
                    />
                )
            }

        </View >

    )
}

export default Location