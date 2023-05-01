/* eslint-disable prettier/prettier */
import { COLORS_APP } from '@Constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contacts__container: {
    padding: 20,
    gap: 10,
    overflow: 'scroll',
    height: '100%'
  }, contacts__card: {
    backgroundColor: COLORS_APP.LIGHT_GRAY,
    borderRadius: 8,
    elevation: 8,
    padding: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    width: '100%'
  }, contacts__tittle: {
    color: COLORS_APP.PRIMARY,
    fontSize: 20,
    fontWeight: '600'
  }, contacts__inline: {
    flexDirection: 'row',
    marginTop: 5,
    gap: 8
  }, contacts__inlineText: {
    color: COLORS_APP.BLACK,
    fontSize: 16
  }
});