/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Menu as MenuIcon } from 'components/icons'
import { COLORS_APP } from '@Constants/colors'
import styles from './Menu.styles'
import SideBar from '@components/SideBar'

const Menu = ({ tittle }: { tittle: string }) => {

    const [openSideBar, setOpenSideBar] = useState(false)

    return (
        <View style={openSideBar ? styles.menu__bodyOpen : styles.menu__body}>
            <View style={styles.menu__container}>
                <TouchableOpacity >
                    <MenuIcon color={COLORS_APP.WHITE} onPress={() => setOpenSideBar(!openSideBar)} />
                </TouchableOpacity>
                <Text style={styles.menu__tittle}>{tittle}</Text>
            </View>
            {openSideBar && <SideBar closeMenu={() => setOpenSideBar(false)}/>}
        </View>
    )
}

export default Menu