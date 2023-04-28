/* eslint-disable prettier/prettier */
import { COLORS_APP } from '@Constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    modal__container: {
        backgroundColor: COLORS_APP.WHITE,
        borderRadius: 8,
        elevation: 20,
        marginLeft: '5%',
        width: '90%'
    }, modal__header: {
        alignItems: 'center',
        backgroundColor: COLORS_APP.PRIMARY,
        borderTopStartRadius: 8,
        borderTopEndRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        width: '100%'
    }, modal__headerText: {
        color: COLORS_APP.WHITE,
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center'
    }, modal__headerButton: {
        position: 'absolute',
        right: 10
    }, modal__body: {
        gap: 10,
        padding: 20,
    }
});