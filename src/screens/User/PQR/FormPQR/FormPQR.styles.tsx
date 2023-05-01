/* eslint-disable prettier/prettier */
import { COLORS_APP } from '@Constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    form__container: {
        padding: 20,
        gap: 10,
        overflow: 'scroll',
        height: '100%'
    },
    form__inputText: {
        borderWidth: 1,
        borderRadius: 8
    },form__textext:{
        color:COLORS_APP.BLACK
    }
});