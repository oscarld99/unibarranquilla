/* eslint-disable prettier/prettier */
import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './Fab.styles'

const Header = ({
    bottom = 10,
    icon,
    onPress
}: {
    bottom?: number;
    icon: JSX.Element;
    onPress: () => void;
}) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                ...styles.fab__button,
                bottom
            }}
        >
            {icon}
        </TouchableOpacity>
    )
}

export default Header