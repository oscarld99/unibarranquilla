/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Image } from "react-native"
import styles from './Radio.styles'

const imgRadio = require('@assets/images/itsa_radio.png');

const Radio = () => {
    return (
        <View style={styles.radio__container}>
            <Image
                alt='logo__radio__itsa'
                source={imgRadio}
                style={styles.radio__image}
            />
        </View>
    )
}

export default Radio