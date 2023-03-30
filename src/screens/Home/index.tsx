/* eslint-disable prettier/prettier */
import { MenuContextProvider } from '@contexts/MenuContext'
import TabNavigation from '@screens/AppNavigator/TabNavigation'
import React from 'react'
import { View } from "react-native"
import styles from "./Home.styles"

const Home = () => {

    return (
        <View style={styles.home__body}>
            <MenuContextProvider>
                <TabNavigation />
            </MenuContextProvider>
        </View>
    )
}

export default Home