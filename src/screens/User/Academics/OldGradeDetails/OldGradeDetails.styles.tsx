/* eslint-disable prettier/prettier */
import { COLORS_APP } from '@Constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    oldGrades__container: {
        padding: 20,
        gap: 10,
        overflow: 'scroll',
        height: '100%'
    }, oldGrades__tittle: {
        backgroundColor: COLORS_APP.PRIMARY,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        marginTop: 10,
        padding: 5
    }, oldGrades__program: {
        color: COLORS_APP.PRIMARY,
        fontWeight: '600',
        fontSize: 16,
        textAlign: 'center'
    }, oldGrades__period: {
        color: COLORS_APP.WHITE,
        fontWeight: '600',
        textAlign: 'center'
    }
});