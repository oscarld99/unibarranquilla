/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from "react-native"
import { geometricPlaces } from '__mocks__';
import { IGeometricPlace } from '@interfaces/data/geometrycPlace.interface';
import styles from './LocationFilters.styles'
import { AutoComplete } from '..';
import { ArrowDown, ArrowUp, Cancel, Search } from '@components/icons';
import { COLORS_APP } from '@Constants/colors';

interface LocationFiltersProps {
    onCancel: () => void;
    onSearhLocation: (location: IGeometricPlace) => void;
    onWalk: (startLocation: IGeometricPlace, endLocation: IGeometricPlace) => void
}
const placesFiltered = geometricPlaces.filter(({ type }) => type !== 'COMMON_AREA')

const LocationFilters = ({
    onCancel,
    onSearhLocation,
    onWalk
}: LocationFiltersProps) => {


    const [expandFilters, setExpandFilters] = useState(false)
    const [startLocation, setStartLocation] = useState('')
    const [endLocation, setEndLocation] = useState('')
    const [startPlaces, setStartPlaces] = useState(placesFiltered)
    const [endPlaces, setEndPlaces] = useState(placesFiltered)
    const [startShowList, setStartShowList] = useState(false)
    const [endShowList, setEndShowList] = useState(false)

    const [start, setStart] = useState<IGeometricPlace | undefined>()
    const [end, setEnd] = useState<IGeometricPlace | undefined>()


    useEffect(() => {
        if (!startLocation || startLocation.trim() === '' || startLocation.trim().length < 3) {
            return setStartPlaces(placesFiltered)
        }
        setStartPlaces(placesFiltered.filter(({ tittle }) => tittle?.toLowerCase().includes(startLocation.toLowerCase())))
    }, [startLocation])

    useEffect(() => {
        if (startLocation && startLocation.trim().length >= 3 && (!start || start?.tittle !== startLocation)) {
            return setStartShowList(true)
        }
        return setStartShowList(false)
    }, [start, startLocation])

    useEffect(() => {
        if (!endLocation || endLocation.trim() === '' || endLocation.trim().length < 3) {
            setEndShowList(false)
            return setEndPlaces(placesFiltered)
        }
        setEndShowList(true)
        setEndPlaces(placesFiltered.filter(({ tittle }) => tittle?.toLowerCase().includes(endLocation.toLowerCase())))
    }, [endLocation])

    useEffect(() => {
        if (endLocation && endLocation.trim().length >= 3 && (!end || end?.tittle !== endLocation)) {
            return setEndShowList(true)
        }
        return setEndShowList(false)
    }, [end, endLocation])

    const handlePressLocation = (location: IGeometricPlace, start?: boolean) => {
        if (start) {
            setStartLocation(location?.tittle ?? '')
            setStartShowList(false)
            return setStart(location)
        }
        setEndLocation(location?.tittle ?? '')
        setEndShowList(false)
        return setEnd(placesFiltered.find(({ tittle }) => tittle?.toLowerCase() === endLocation.toLowerCase()))
    }

    const handleSearch = () => {
        setStartShowList(false)
        setEndShowList(false)
        if (!expandFilters) {
            if (!start)
                return Alert.alert('Debe seleccionar un espacio')
            return onSearhLocation(start)
        }
        if (!start || !end)
            return Alert.alert('Debe seleccionar el inicio y el destino')
        return onWalk(start, end)
    }

    const handleCancel = () => {
        setStartLocation('')
        setEndLocation('')
        onCancel()
    }

    return (
        <View style={styles.filterLocations__container}>
            <AutoComplete
                handlePress={(location) => handlePressLocation(location, true)}
                onChange={setStartLocation}
                placeHolder='Ingrese un lugar a buscar'
                places={startPlaces}
                searchInput={startLocation}
                showList={startShowList}
            />
            {expandFilters && (
                <AutoComplete
                    handlePress={(location) => handlePressLocation(location, false)}
                    onChange={setEndLocation}
                    placeHolder='Ingrese un lugar de destino'
                    places={endPlaces}
                    searchInput={endLocation}
                    showList={endShowList}
                />
            )}

            <View style={styles.filterLocations__buttonsContainer}>
                <TouchableOpacity
                    style={styles.filterLocations__button}
                    onPress={handleSearch}
                >
                    <Search color={COLORS_APP.WHITE} customSize='18' />
                    <Text style={styles.filterLocations__buttonText}>Buscar</Text>
                </TouchableOpacity>

                {start && (
                    <TouchableOpacity
                        style={styles.filterLocations__button}
                        onPress={handleCancel}
                    >
                        <Cancel color={COLORS_APP.WHITE} customSize='18' />
                        <Text style={styles.filterLocations__buttonText}>CANCELAR</Text>
                    </TouchableOpacity>
                )}
            </View>

            <TouchableOpacity
                style={styles.filterLocations__buttonExpand}
                onPress={() => setExpandFilters(!expandFilters)}
            >
                {expandFilters && <ArrowUp color={COLORS_APP.WHITE} customSize='16' />}
                {!expandFilters && <ArrowDown color={COLORS_APP.WHITE} customSize='16' />}
            </TouchableOpacity>

        </View>

    )
}

export default LocationFilters