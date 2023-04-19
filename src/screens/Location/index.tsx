/* eslint-disable prettier/prettier */
import React, { useRef, useState } from 'react'
import { ScrollView, Text, View } from "react-native"
import styles from './Location.styles'
import { AutoComplete, Fab } from '@components/ui'
import {
    Cancel,
    Minus,
    Plus,
    Search
} from '@components/icons'
import { COLORS_APP } from '@Constants/colors'
import Floor1 from './Layers/Floor1'
import { IGeometricPlace } from '@interfaces/data/geometrycPlace.interface'

const Location = () => {

    const [scale, setScale] = useState(0.25)
    const [showButtons, setShowButtons] = useState(false)
    const [searchedPlace, setSearchedPlace] = useState(null as unknown as IGeometricPlace)
    const bottomButton = scale === 1 ? 70 : 130
    const scrollRefHorizontal = useRef<ScrollView | null>(null)
    const scrollRefVertical = useRef<ScrollView | null>(null)
    const showMinusButton = scale > 0.2 && showButtons
    const showPlusButton = scale < 1 && showButtons

    const handleScale = (direction: number) => {
        if (direction > 0) return setScale(scale + 0.15)
        return setScale(scale - 0.15)
    }

    const handleSearch = (item: IGeometricPlace | null) => {
        if (!item || searchedPlace?.id === item.id) {
            setScale(0.7)
            scrollRefHorizontal.current?.scrollTo(0)
            scrollRefVertical.current?.scrollTo(0)
            return setSearchedPlace(null as unknown as IGeometricPlace)
        }
        scrollRefHorizontal.current?.scrollTo(item.position.x - 100)
        scrollRefVertical.current?.scrollTo(item.position.y - 100)
        setSearchedPlace(item)
        setScale(1)
    }

    return (
        <View style={styles.location__container}>
            <View style={styles.location__autocomplete}>
                <AutoComplete onSearch={handleSearch} />
            </View>
            <View style={styles.location__map}>
                <View style={styles.location__streets}>
                    <Text style={styles.location__streetsText}>Carrera 45</Text>
                </View>
                <ScrollView ref={scrollRefVertical}>
                    <ScrollView horizontal ref={scrollRefHorizontal}>
                        <Floor1
                            onPressPlace={handleSearch}
                            scale={scale}
                            searchedPlace={searchedPlace}
                        />
                    </ScrollView>
                </ScrollView>
                <View style={styles.location__streets}>
                    <Text style={styles.location__streetsText}>Carrera 44</Text>
                </View>
            </View>
            {searchedPlace !== null && (
                <ScrollView style={styles.location__description}>
                    <Text style={styles.location__tittle}>{searchedPlace.tittle}</Text>
                    <Text ><Text style={styles.location__floor} > Piso: </Text>{searchedPlace.floor}</Text>
                    <Text ><Text style={styles.location__floor} > Descripcion: </Text>{searchedPlace.description}</Text>
                </ScrollView>
            )
            }

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

        </View >

    )
}

export default Location