/* eslint-disable prettier/prettier */
import { COLORS_APP } from '@Constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    buttonImage__container: {
        alignItems: 'center'
    },
    buttonImage__image: {
        borderRadius: 80,
        borderColor: COLORS_APP.GRAY,
        borderWidth: 2,
        height: 80,
        width: 80
    },
    buttonImage__text: {
        color: COLORS_APP.BLACK,
        fontSize: 12,
        fontWeight: '600'
    }
});