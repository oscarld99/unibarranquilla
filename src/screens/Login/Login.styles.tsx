/* eslint-disable prettier/prettier */
import { COLORS_APP } from '@Constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  login__body: {
    alignItems: 'center',
    backgroundColor: COLORS_APP.GRAY,
    flex: 1,
    padding: 20
  },
  login__img: {
    height: 150,
    width: 300
  },
  login__form: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  login__input__view: {
    alignItems: 'center',
    backgroundColor: COLORS_APP.PRIMARY,
    borderRadius: 30,
    height: 45,
    marginBottom: 20,
    padding: 2,
    width: '90%'
  },
  login__textInput: {
    backgroundColor: COLORS_APP.LIGHT_GRAY,
    borderRadius: 30,
    flex: 1,
    height: 50,
    padding: 10,
    textAlign: 'center',
    width: '100%'
  },
  login__button: {
    backgroundColor: COLORS_APP.PRIMARY,
    color: COLORS_APP.WHITE,
    width: '90%',
    borderRadius: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login__buttonText: {
    color: COLORS_APP.LIGHT_GRAY,
    fontWeight: 'bold'
  }
});