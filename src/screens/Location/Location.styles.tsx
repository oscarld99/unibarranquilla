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
    marginLeft: '5%',
    width: '90%',
    zIndex: 5
  }, location__map: {
    alignItems: 'center',
    borderColor: COLORS_APP.PRIMARY,
    borderWidth: 2,
    height: 400,
    justifyContent: 'center',
    marginTop: 10,
    position: 'relative',
    overflow: 'scroll',
    width: '100%'
  }, location__mapContainer: {
    backgroundColor: COLORS_APP.LIGHT_GRAY
  }, location__buttonsContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent:'center',
    marginTop: 10,
    padding: 10,
    width: '100%'
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
  }, location__modal: {
    backgroundColor: COLORS_APP.WHITE,
    borderRadius: 8,
    elevation: 20,
    height: '50%',
    marginTop: '25%',
    marginLeft: '5%',
    width: '90%'
  }, location__floor: {
    color: COLORS_APP.BLACK,
    fontSize: 16,
    fontWeight: '600'
  }, location__modalBody: {
    gap: 10,
    padding: 2,
  }, location__modalBodyInline: {
    flexDirection: 'row'
  }, location__floorButon: {
    alignItems: 'center',
    backgroundColor: COLORS_APP.LIGHT_GRAY,
    borderColor: COLORS_APP.PRIMARY,
    borderRadius: 40,
    borderWidth: 2,
    justifyContent: 'center',
    width: '45%',
    height: 40
  }, location__floorButonActive: {
    backgroundColor: COLORS_APP.PRIMARY
  }, location__floorButonText: {
    color: COLORS_APP.PRIMARY,
    fontSize: 16,
    fontWeight: '600'
  }, location__floorButonTextActive: {
    color: COLORS_APP.WHITE
  }, location__text: {
    color: COLORS_APP.BLACK
  }
});