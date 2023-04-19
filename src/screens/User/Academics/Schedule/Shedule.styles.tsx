/* eslint-disable prettier/prettier */
import { COLORS_APP } from '@Constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    shedule__container: {
        padding: 20,
        gap: 10,
        overflow: 'scroll',
        height: '100%'
    }, shedule__containerDay: {
        backgroundColor: COLORS_APP.GRAY,
        borderRadius: 12,
        width: '100%',
    }, shedule__day: {
        backgroundColor: COLORS_APP.WHITE,
        borderRadius: 12,
        padding: 5,
        paddingLeft: 10
    }, shedule__moduleCounts: {
        backgroundColor: COLORS_APP.GRAY,
        color: COLORS_APP.BLACK,
        paddingLeft: 15
    }

});