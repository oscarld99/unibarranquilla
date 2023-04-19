/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from "react-native"
import AutocompleteInput from 'react-native-autocomplete-input';
import { geometricPlaces } from '__mocks__';
import styles from './AutoComplete.styles'
import { IGeometricPlace } from '@interfaces/data/geometrycPlace.interface';
import { Cancel } from '@components/icons';
import { COLORS_APP } from '@Constants/colors';

interface AutocompleteProps {
    onSearch: (item: IGeometricPlace | null) => void
}

const Autocomplete = ({ onSearch }: AutocompleteProps) => {

    const placesFiltered = geometricPlaces.filter(({ type }) => type !== 'COMMON_AREA')

    const [search, setSearch] = useState('')
    const [places, setPlaces] = useState(placesFiltered)
    const [showList, setShowList] = useState(false)


    useEffect(() => {
        if (!search || search.trim() === '' || search.trim().length < 3) {
            setShowList(false)
            return setPlaces(placesFiltered)
        }
        setShowList(true)
        setPlaces(placesFiltered.filter(({ tittle }) => tittle?.toLowerCase().includes(search.toLowerCase())))
    }, [search])

    const handlePress = (item: IGeometricPlace) => {
        setSearch(item.tittle ?? '')
        setShowList(false)
        return onSearch(item)
    }

    const handleCancel = () => {
        setSearch('')
        setShowList(false)
        return onSearch(null)
    }

    return (
        <View style={styles.autoComplete__container}>
            <AutocompleteInput
                data={places}
                value={search}
                onChangeText={(text) => setSearch(text)}
                placeholder='Ingrese el lugar a buscar'
                style={styles.autoComplete__input}
                listContainerStyle={{ display: showList ? 'flex' : 'none' }}
                flatListProps={{
                    keyExtractor: ({ id }) => id,
                    renderItem: ({ item }) => (
                        <TouchableOpacity
                            onPress={() => handlePress(item)}
                            style={styles.autoComplete__item}
                        >
                            <Text>{item.tittle}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
            <TouchableOpacity style={styles.autoComplete__button} onPress={handleCancel}>
                <Cancel color={COLORS_APP.WHITE} />
            </TouchableOpacity>
        </View>

    )
}

export default Autocomplete