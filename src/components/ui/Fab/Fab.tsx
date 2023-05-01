/* eslint-disable prettier/prettier */
import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './Fab.styles'

interface FabProps {
    bottom?: number;
    icon: JSX.Element;
    right?: number;
    onPress: () => void;
}

const Fab = ({
    bottom = 10,
    icon,
    right = 10,
    onPress
}: FabProps) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                ...styles.fab__button,
                bottom,
                right
            }}
        >
            {icon}
        </TouchableOpacity>
    )
}

export default Fab