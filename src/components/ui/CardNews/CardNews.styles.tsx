/* eslint-disable prettier/prettier */
import { COLORS_APP } from '@Constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    cardNews__container: {
        backgroundColor: COLORS_APP.WHITE,
        borderRadius: 8,
        height: 250,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        width: '100%'
    },
    cardNews__image: {
        borderRadius: 8,
        height: 150,
        width: '100%'
    },
    cardNews__body: {
        backgroundColor: COLORS_APP.LIGHT_GRAY,
        borderBottomEndRadius: 8,
        borderBottomStartRadius: 8,
        height: 100,
        overflow: 'hidden',
        padding: 10
    },
    cardNews__tittle: {
        color: COLORS_APP.BLACK,
        fontSize: 16,
        fontWeight: '600'
    },
    cardNews__description: {
        color: COLORS_APP.BLACK,
        fontWeight: '400'
    },
    cardNews__date: {
        textAlign: 'right',
        fontSize: 12
    }
});