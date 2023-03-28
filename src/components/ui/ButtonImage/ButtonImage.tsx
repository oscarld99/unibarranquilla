/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, View, Text, ImageSourcePropType } from 'react-native'
import styles from './ButtonImage.styles'

interface ButtonImageProps {
  text: string
  img: ImageSourcePropType
}

const ButtonImage = ({ img, text }: ButtonImageProps) => {
  return (
    <View style={styles.buttonImage__container}>
      <Image
        alt='logo__unibarranquilla__itsa'
        source={img}
        style={styles.buttonImage__image}
      />
      <Text style={styles.buttonImage__text} numberOfLines={1}>{text}</Text>
    </View>
  )
}

export default ButtonImage