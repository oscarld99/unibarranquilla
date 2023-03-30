/* eslint-disable prettier/prettier */
import { COLORS_APP } from '@Constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    menu__body: {
        height: 50,
        width: '100%'
    },
    menu__bodyOpen: {
        bottom:0,
        height: '100%',
        top: 0,
        width: '100%'
    },
    menu__container: {
        alignItems: 'center',
        backgroundColor: COLORS_APP.PRIMARY,
        flexDirection: 'row',
        height: 50,
        padding: 10,
    },
    menu__tittle: {
        color: COLORS_APP.WHITE,
        fontSize: 16,
        fontWeight: '600',
        paddingLeft: 20,
        textAlign: 'center'
    }
});