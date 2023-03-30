/* eslint-disable prettier/prettier */
import { COLORS_APP } from '@Constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header__body: {
        alignItems: 'center',
        backgroundColor: COLORS_APP.PRIMARY,
        flexDirection: 'row',
        height: 50,
        padding: 10,
    },
    header__tittle: {
        color: COLORS_APP.WHITE,
        fontSize: 16,
        fontWeight: '600',
        paddingLeft: 20,
        textAlign: 'center'
    }
});