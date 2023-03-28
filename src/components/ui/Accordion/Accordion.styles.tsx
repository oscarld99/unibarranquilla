/* eslint-disable prettier/prettier */
import { COLORS_APP } from '@Constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    accordion__container: {
        borderTopEndRadius: 12,
        borderTopStartRadius: 12,
        elevation: 4,
        flexDirection: 'row',
        minHeight: 56,
        backgroundColor: COLORS_APP.LIGHT_GRAY,
    },
    accordion__containerText: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 25,
        paddingRight: 18,
        width: '100%'
    },
    accordion__bottomRadius: {
        borderBottomEndRadius: 12,
        borderBottomStartRadius: 12
    },
    accordion__tittle: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS_APP.BLACK,
    },
    accordion__spacer: {
        height: 1,
        color: COLORS_APP.WHITE,
        width: '100%'
    },
    accordion__children: {
        backgroundColor: COLORS_APP.LIGHT_GRAY,
        borderRadius: 8
    },
});