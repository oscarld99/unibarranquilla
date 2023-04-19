/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import styles from './CardNews.styles'
import { useNavigation } from '@react-navigation/native';


const imgNews = require('@assets/images/news.png');

const CardNews = () => {

  const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detalle de noticias')} style={styles.cardNews__container}>
      <Image
        alt='logo__unibarranquilla__itsa'
        source={imgNews}
        style={styles.cardNews__image}
      />
      <View style={styles.cardNews__body}>
        <Text style={styles.cardNews__tittle} numberOfLines={1}>Institución Universitaria de Barranquilla tendrá nueva sede en barrio Prado</Text>
        <Text style={styles.cardNews__description} numberOfLines={3}>
          En el barrio El Prado se ubicará la sede de posgrados de la Institución Universitaria de Barranquilla. Así lo confirmó el alcalde Jaime Pumarejo, quien indicó que dicho espacio abrirá sus puertas en los próximos meses.
        </Text>
        <Text style={styles.cardNews__date}>2023 03 06</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CardNews