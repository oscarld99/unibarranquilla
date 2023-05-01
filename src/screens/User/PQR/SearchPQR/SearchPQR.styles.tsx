/* eslint-disable prettier/prettier */
import { COLORS_APP } from '@Constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    pqr__container: {
        padding: 20,
        gap: 10,
        overflow: 'scroll',
        height: '100%'
    }, pqr__additionalText: {
        color: COLORS_APP.BLACK,
        fontSize: 12
    }, pqr__text: {
        color: COLORS_APP.BLACK,
        fontSize: 16,
        fontWeight: '600'
    }, pqr__textValue: {
        color: COLORS_APP.BLACK,
        fontSize: 16,
        paddingTop: 10
    }
});