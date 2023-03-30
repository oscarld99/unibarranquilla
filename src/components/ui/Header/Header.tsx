/* eslint-disable prettier/prettier */
import React from 'react'
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import { ArrowLeft } from 'components/icons'
import { COLORS_APP } from '@Constants/colors'
import styles from './Header.styles'
import { useNavigation } from '@react-navigation/native'

const Header = ({ tittle }: { tittle: string }) => {
    const navigation = useNavigation()

    return (
        <View style={styles.header__body}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeft color={COLORS_APP.WHITE} />
            </TouchableOpacity>
            <Text style={styles.header__tittle}>{tittle}</Text>
        </View>
    )
}

export default Header