/* eslint-disable prettier/prettier */
import { COLORS_APP } from '@Constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    cardUser__data: {
        display: 'flex',
        flexDirection: 'row',
        gap: 12,
        padding: 10
    }, cardUser__image: {
        borderRadius: 100,
        borderColor: COLORS_APP.LIGHT_GRAY,
        borderWidth: 2,
        height: 100,
        width: 100,
    },
    cardUser__detail: {
        justifyContent:'center'
    },
    cardUser__name: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS_APP.PRIMARY
    },
    cardUser__text: {
        fontSize: 14,
        fontWeight: '400',
        color: COLORS_APP.PRIMARY
    }
});