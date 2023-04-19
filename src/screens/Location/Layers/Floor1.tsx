/* eslint-disable prettier/prettier */
import React from 'react'
import { View } from "react-native"
import styles from '../Location.styles'
import { Divider, GeometryBlock } from '@components/ui'
import { geometricPlaces } from '__mocks__'
import { IGeometricPlace } from '@interfaces/data/geometrycPlace.interface'

interface Floor1Props {
    scale: number;
    searchedPlace?: IGeometricPlace | null
    onPressPlace: (item: IGeometricPlace) => void
}

const Floor1 = ({
    searchedPlace,
    scale,
    onPressPlace
}: Floor1Props) => {

    const containerHeight = 1000 * scale
    const containerWidth = 1000 * scale

    return (
        <View style={{
            ...styles.location__mapContainer,
            height: containerHeight,
            width: containerWidth
        }}>
            {geometricPlaces.map((place) => (
                <GeometryBlock
                    borderWidth={place.border ? 2 : 0}
                    elevation={place.elevation ?? 1}
                    height={place.height}
                    key={place.id}
                    id={place.id}
                    onPress={() => onPressPlace(place)}
                    scale={scale}
                    tittle={place.tittle ?? ''}
                    type={place.id === searchedPlace?.id ? 'GREEN_AREA' : place.type}
                    width={place.width}
                    x={place.position.x}
                    y={place.position.y}
                >
                    <View style={styles.location__stairs}>
                        {place.type === 'STAIRS' ? (
                            Array.from(Array(8)).map((_, index) => {
                                return <Divider
                                    borderWidth={1}
                                    key={index}
                                    marginVertical={4 * scale}
                                    width={100}
                                />
                            })
                        ) : <></>}
                    </View>

                </GeometryBlock>
            ))}
        </View>
    )
}

export default Floor1