/* eslint-disable prettier/prettier */
import React from 'react'
import { Text, View } from 'react-native'
import List from '../List/List';
import styles from './Module.styles'

interface ModuleProps {
    tittle: string;
    modules: { text: string, path: string }[]
}

const Module = ({ tittle, modules }: ModuleProps) => {

    return (
        <View style={styles.module__container}>
            <Text style={styles.module__title}>{tittle}</Text>
            <List modules={modules} />
        </View>
    )
}

export default Module