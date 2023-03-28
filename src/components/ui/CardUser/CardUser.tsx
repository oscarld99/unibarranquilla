/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, View, Text, ImageSourcePropType } from 'react-native'
import styles from './CardUser.styles'

interface CardUserProps {
  img: ImageSourcePropType;
  name: string;
  id: string;
  description: string
  aditional: string
}

const CardUser = ({
  aditional,
  description,
  id,
  img,
  name
}: CardUserProps) => {
  
  return (
    <View style={styles.cardUser__data}>
      <View>
        <Image
          alt='Oscar Lora De Sales'
          source={img}
          style={styles.cardUser__image}
        />
      </View>
      <View style={styles.cardUser__detail}>
        <Text style={styles.cardUser__name}>{name}</Text>
        <Text style={styles.cardUser__text}>{`CC. ${id}`}</Text>
        <Text style={styles.cardUser__text}>{description}</Text>
        <Text style={styles.cardUser__text}>{aditional}</Text>
      </View>
    </View>
  )
}

export default CardUser