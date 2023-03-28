/* eslint-disable prettier/prettier */
import TabNavigation from '@screens/AppNavigator/TabNavigation'
import React from 'react'
import { View, Text } from "react-native"
import styles from "./Home.styles"

const Home = () => {


    return (
        <View style={styles.home__body}>
            <TabNavigation />
        </View>
    )
}

export default Home