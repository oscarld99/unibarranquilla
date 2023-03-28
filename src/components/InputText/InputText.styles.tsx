/* eslint-disable prettier/prettier */
import { COLORS_APP } from '@Constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  textInput__view: {
    alignItems: 'center',
    backgroundColor: COLORS_APP.PRIMARY,
    borderRadius: 30,
    height: 45,
    marginBottom: 20,
    padding: 2,
    width: '90%'
  },
  textInput__input: {
    backgroundColor: COLORS_APP.LIGHT_GRAY,
    borderRadius: 30,
    flex: 1,
    height: 50,
    padding: 10,
    textAlign: 'center',
    width: '100%'
  }
});