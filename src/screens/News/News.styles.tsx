/* eslint-disable prettier/prettier */
import { COLORS_APP } from '@Constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  news__container: {
    padding: 20,
    gap: 10,
    overflow: 'scroll'
  },
  newsDetail__image: {
    height: 200,
    width: '100%'
  },
  newsDetail__container: {
    padding: 10
  },
  newsDetail__tittle: {
    color: COLORS_APP.PRIMARY,
    fontSize: 18,
    fontWeight: '600'
  },
  newsDetail__body: {
    color: COLORS_APP.BLACK,
    fontSize: 12
  }
});