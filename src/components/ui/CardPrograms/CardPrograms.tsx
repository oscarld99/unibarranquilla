/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { Image, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import styles from './CardPrograms.styles'
import { ArrowLeft } from '@components/icons';
import { COLORS_APP } from '@Constants/colors';

interface CardProgramsProps {
  img: any;
  offers: { [x: string]: string[] }
  text: string;
}

const CardPrograms = ({
  img,
  offers,
  text
}: CardProgramsProps) => {

  const [showOffers, setShowOffers] = useState(false)

  return (
    showOffers ? (
      <View style={styles.cardPrograms__containerInfo}>
        <ScrollView>
          <View style={styles.cardPrograms__header}>
            <TouchableOpacity style={styles.cardPrograms__headerButton} onPress={() => setShowOffers(!showOffers)}>
              <ArrowLeft customSize='24' color={COLORS_APP.WHITE} />
            </TouchableOpacity>
            <Text style={styles.cardPrograms__headerText}>{text}</Text>
          </View>
          {Object.keys(offers).map((offer) => (
            <View key={offer}>
              <Text style={styles.cardPrograms__offer}>
                {offer}
              </Text>
              {offers?.[offer].map((program) => (
                <Text
                  key={program}
                  style={styles.cardPrograms__program}
                  numberOfLines={2}>{program}</Text>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    ) : (
      <TouchableOpacity onPress={() => setShowOffers(!showOffers)} style={styles.cardPrograms__container}>
        <Image
          alt='logo__unibarranquilla__itsa'
          source={img}
          style={styles.cardPrograms__image}
        />
        <View style={styles.cardPrograms__body} />
        <Text style={styles.cardPrograms__tittle} numberOfLines={2}>{text}</Text>
      </TouchableOpacity>
    )

  )
}

export default CardPrograms