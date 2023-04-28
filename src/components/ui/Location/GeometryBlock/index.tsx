/* eslint-disable prettier/prettier */
import React, { ReactNode } from 'react'
import { Text, TouchableOpacity } from "react-native"
import styles from './GeometryBlock.styles'
import { University, WC } from '@components/icons';

interface GeometryBlockProps {
    borderWidth?: number;
    children: ReactNode;
    type: 'PLACE' | 'COMMON_AREA' | 'STAIRS' | 'GREEN_AREA' | 'WC';
    subType: 'CLASSROOM' | 'COFFE SHOP' | 'LIBRARY' | 'ADMIN' | 'HALL' | 'ENTRANCE';
    elevation?: number;
    height: number;
    id?: string;
    scale?: number;
    tittle: string;
    width: number;
    x?: number;
    y?: number;
    onPress: () => void
}

const GeometryBlock = ({
    borderWidth = 2,
    children,
    elevation = 1,
    height,
    scale = 1,
    tittle,
    type,
    width,
    x = 0,
    y = 0,
    onPress
}: GeometryBlockProps) => {

    const geometryColors = {
        PLACE: {
            backgroundColor: '#ADD8E6',
            borderColor: '#2BE6EE',
        },
        STAIRS: {
            backgroundColor: '#C7CBCA',
            borderColor: '#3C3C3B',
        },
        GREEN_AREA: {
            backgroundColor: '#70FF8B',
            borderColor: '#008F39',
        },
        COMMON_AREA: {
            backgroundColor: '#C7CBCA',
            borderColor: '#3C3C3B',
        },
        WC: {
            backgroundColor: '#FDFD96',
            borderColor: '#E5BE01'
        }
    }
    const showText = scale > 0.6
    const showIcon = (!showText && !['STAIRS', 'COMMON_AREA'].includes(type))

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                ...geometryColors[type],
                ...styles.geometryBlock__container,
                borderWidth,
                height: height * scale,
                left: x * scale,
                top: y * scale,
                width: width * scale,
                zIndex: elevation
            }}>
            {showText && <Text style={styles.geometryBlock__text} numberOfLines={2}>{tittle}</Text>}
            {showIcon && (
                type === 'WC' ? <WC customSize='16' /> : <University customSize='16' />
            )}
            {children}
        </TouchableOpacity>
    )
}

export default GeometryBlock