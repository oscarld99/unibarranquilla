/* eslint-disable prettier/prettier */
import { COLORS_APP } from '@Constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    grade__container: {
        padding: 20,
        gap: 10,
        overflow: 'scroll',
        height: '100%'
    }, calcGrade__container: {

    }, calcGrade__inline: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
    }, calcGrade__textInput: {
        backgroundColor: COLORS_APP.LIGHT_GRAY,
        borderBottomColor: COLORS_APP.BLACK,
        borderBottomWidth: 1,
        color: COLORS_APP.BLACK,
        fontSize: 16,
        height: 30,
        paddingBottom: 0,
        textAlign: 'center',
        width: '30%'
    }, calcGrade__courtText: {
        color: COLORS_APP.BLACK,
        fontSize: 16,
        fontWeight: '600',
        marginTop: 20
    }, calcGrade__button: {
        alignItems: 'center',
        backgroundColor: COLORS_APP.PRIMARY,
        borderRadius: 40,
        height: 40,
        justifyContent: 'center',
        marginTop: 20,
        width: '100%'
    }, calcGrade__buttonText: {
        color: COLORS_APP.WHITE,
        fontSize: 16,
        fontWeight: '600'
    }, calcGrade__message: {
        color: COLORS_APP.PRIMARY,
        fontSize: 20,
        fontWeight: '600',
        marginTop: 20,
        textAlign: 'center'
    }, calcGrade__messageText: {
        color: COLORS_APP.BLACK,
    }
});