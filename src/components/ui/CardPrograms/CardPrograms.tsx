/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, View, Text } from 'react-native'
import styles from './CardPrograms.styles'

const CardPrograms = ({ img, text }) => {
  return (
    <View style={styles.cardPrograms__container}>
      <Image
        alt='logo__unibarranquilla__itsa'
        source={img}
        style={styles.cardPrograms__image}
      />
      <View style={styles.cardPrograms__body} />
      <Text style={styles.cardPrograms__tittle} numberOfLines={1}>{text}</Text>
    </View>
  )
}

export default CardPrograms