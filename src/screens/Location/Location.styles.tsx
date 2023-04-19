/* eslint-disable prettier/prettier */
import { COLORS_APP } from '@Constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  location__container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingTop: 20,
    width: '100%'
  }, location__autocomplete: {
    position: 'relative',
    height: '10%',
    marginLeft: '5%',
    width: '90%',
    zIndex: 5
  }, location__map: {
    alignItems: 'center',
    borderColor: COLORS_APP.PRIMARY,
    borderWidth: 2,
    height: '60%',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'scroll',
    width: '100%'
  }, location__mapContainer: {
    backgroundColor: COLORS_APP.LIGHT_GRAY
  }, location__stairs: {
    width: '100%'
  }, location__streets: {
    alignItems: 'center',
    backgroundColor: COLORS_APP.GRAY,
    borderColor: COLORS_APP.PRIMARY,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    justifyContent: 'center',
    padding: 5,
    width: '100%'
  }, location__streetsText: {
    color: COLORS_APP.BLACK
  }, location__description: {
    backgroundColor: COLORS_APP.WHITE,
    borderRadius: 8,
    height: '25%',
    marginTop: 20,
    padding: 10,
    width: '100%'
  }, location__tittle: {
    color: COLORS_APP.BLACK,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center'
  }, location__floor: {
    color: COLORS_APP.BLACK,
    fontSize: 16,
    fontWeight: '600'
  }
});