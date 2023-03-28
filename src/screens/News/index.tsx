/* eslint-disable prettier/prettier */
import { CardNews } from '@components/ui'
import React from 'react'
import { ScrollView, View } from "react-native"
import styles from './News.styles'

const News = () => {
    return (
        <ScrollView>
            <View style={styles.news__container}>
                <CardNews />
                <CardNews />
                <CardNews />
                <CardNews />
                <CardNews />
            </View>
        </ScrollView>
    )
}

export default News