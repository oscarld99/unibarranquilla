/* eslint-disable prettier/prettier */
import { AuthContext } from '@contexts/AuthContext'
import React, { useContext } from 'react'
import { Image, Text, View } from 'react-native'
import styles from './VirtualCard.styles'

const imgUser = require('@assets/images/test.jpg')
const imgQr = require('@assets/images/qr.png')
const imgLogo = require('@assets/images/logo__unibarranquilla__itsa.png')

const VirtualCard = () => {

    const { name, lastName, id } = useContext(AuthContext)
    return (
        <View style={styles.virtualCard__container}>
            <View style={styles.virtualCard__top}>
                <Text style={styles.virtualCard__textId}>{`CC. ${id}`}</Text>
                <Text style={styles.virtualCard__textName}>{`${name} ${lastName}`}</Text>
                <Text style={styles.virtualCard__textId}>Estudiante / Egresado</Text>
            </View>
            <View style={styles.virtualCard__bottom}>
                <Image
                    alt={`${name} ${lastName}`}
                    source={imgUser}
                    style={styles.virtualCard__userImage}
                />
                <Image
                    alt={`${name} ${lastName}`}
                    source={imgQr}
                    style={styles.virtualCard__qrImage}
                />
                <View style={styles.virtualCard__containerLogo}>
                    <Image
                        alt={`${name} ${lastName}`}
                        source={imgLogo}
                        style={styles.virtualCard__logoImage}
                    />
                </View>
            </View>
        </View>
    )
}

export default VirtualCard