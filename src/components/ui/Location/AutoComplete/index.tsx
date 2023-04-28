/* eslint-disable prettier/prettier */
import React from 'react'
import { Text, TouchableOpacity, View } from "react-native"
import AutocompleteInput from 'react-native-autocomplete-input';
import styles from './AutoComplete.styles'
import { IGeometricPlace } from '@interfaces/data/geometrycPlace.interface';

interface AutocompleteProps {
    placeHolder: string;
    places: IGeometricPlace[];
    searchInput: string;
    showList: boolean;
    handlePress: (location: IGeometricPlace) => void;
    onChange: (text: string) => void;
}

const Autocomplete = ({
    placeHolder,
    places,
    searchInput,
    showList,
    handlePress,
    onChange
}: AutocompleteProps) => {


    return (
        <View style={styles.autoComplete__container}>
            <AutocompleteInput
                data={places}
                value={searchInput}
                onChangeText={onChange}
                placeholder={placeHolder}
                style={styles.autoComplete__input}
                listContainerStyle={{ display: showList ? 'flex' : 'none' }}
                containerStyle={styles.autoComplete__inputContainer}
                inputContainerStyle={styles.autoComplete__inputContainer}
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
        </View>

    )
}

export default Autocomplete