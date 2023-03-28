/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, View, Text } from 'react-native'
import styles from './CardNews.styles'


const imgLogin = require('@assets/images/logo__unibarranquilla__itsa.png');

const CardNews = () => {
  return (
    <View style={styles.cardNews__container}>
      <Image
        alt='logo__unibarranquilla__itsa'
        source={imgLogin}
        style={styles.cardNews__image}
      />
      <View style={styles.cardNews__body}>
        <Text style={styles.cardNews__tittle} numberOfLines={1}>Title</Text>
        <Text style={styles.cardNews__description} numberOfLines={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis, nunc a auctor auctor, arcu tortor faucibus lacus, eget pulvinar tellus dui tristique lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus justo nulla, pretium vitae neque ac, lobortis ultrices purus. Integer magna augue, venenatis a est non, tempor mollis nulla. In accumsan ligula sem, maximus consectetur massa finibus vitae. Etiam maximus ligula est, eget molestie justo malesuada nec. Suspendisse feugiat, mauris in ullamcorper tincidunt, urna dolor tempus est, et vulputate felis libero at ipsum. Sed finibus neque at odio porttitor porta. Suspendisse fringilla ultricies ex, commodo bibendum lorem laoreet ut. Integer scelerisque gravida dolor, pharetra luctus sapien convallis sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec non elementum quam, at porttitor justo.
        </Text>
        <Text style={styles.cardNews__date}>2023 03 06</Text>
      </View>
    </View>
  )
}

export default CardNews