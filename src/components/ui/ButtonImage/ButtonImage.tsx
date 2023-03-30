/* eslint-disable prettier/prettier */
import React from 'react'
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity
} from 'react-native'
import styles from './ButtonImage.styles'

interface ButtonImageProps {
  img: ImageSourcePropType;
  onPress: () => void
  text: string;
}

const ButtonImage = ({
  img,
  text,
  onPress
}: ButtonImageProps) => {
  return (
    <TouchableOpacity style={styles.buttonImage__container} onPress={onPress}>
      <Image
        alt='logo__unibarranquilla__itsa'
        source={img}
        style={styles.buttonImage__image}
      />
      <Text style={styles.buttonImage__text} numberOfLines={1}>{text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonImage