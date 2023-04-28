/* eslint-disable prettier/prettier */
import React from 'react'
import { View } from "react-native"
import styles from '../Location.styles'
import { Divider, GeometryBlock } from '@components/ui'
import { geometricPlaces } from '__mocks__'
import { IGeometricPlace } from '@interfaces/data/geometrycPlace.interface'

interface Floor1Props {
    activeFloor?: number;
    scale: number;
    searchedPlace?: IGeometricPlace | null
    searchedEndPlace?: IGeometricPlace | null
    onPressPlace: (item: IGeometricPlace | null) => void
}

const Floor1 = ({
    activeFloor = 1,
    searchedPlace,
    searchedEndPlace,
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
            {geometricPlaces.filter(({ floor }) => floor === activeFloor).map((place) => {
                const typeLocation = (place.id === searchedPlace?.id || place.id === searchedEndPlace?.id) ? 'GREEN_AREA' : place.type
                return (
                    <GeometryBlock
                        borderWidth={place.border ? 2 : 0}
                        elevation={place.elevation ?? 1}
                        height={place.height}
                        key={place.id}
                        id={place.id}
                        onPress={place.type === 'PLACE' ? () => onPressPlace(place) : () => onPressPlace(null)}
                        scale={scale}
                        tittle={place.tittle ?? ''}
                        type={typeLocation}
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
                )
            })}
        </View>
    )
}

export default Floor1