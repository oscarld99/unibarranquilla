/* eslint-disable prettier/prettier */
import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { ArrowLeft, Menu as MenuIcon } from 'components/icons'
import { COLORS_APP } from '@Constants/colors'
import styles from './Menu.styles'
import { MenuContext } from '@contexts/MenuContext'

const Menu = () => {


    const {
        activeScreen,
        onBack,
        onTouchMenu
    } = useContext(MenuContext);

    //console.log(activeScreen, state)

    return (
        <View style={styles.menu__body}>
            {
                true ? (
                    <TouchableOpacity onPress={onBack}>
                        <MenuIcon color={COLORS_APP.WHITE} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={onTouchMenu}>
                        <ArrowLeft color={COLORS_APP.WHITE} />
                    </TouchableOpacity>
                )
            }
            <Text style={styles.menu__tittle}>{activeScreen ?? 'ITSA APP'}</Text>
        </View>
    )
}

export default Menu