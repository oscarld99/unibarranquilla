/* eslint-disable prettier/prettier */
import { COLORS_APP } from '@Constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    autoComplete__container: {
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        zIndex: 5
    }, autoComplete__input: {
        borderRadius: 8,
        color: COLORS_APP.BLACK,
        width: '100%',
        position: 'relative',
        zIndex: 6
    }, autoComplete__inputContainer: {
        borderColor: COLORS_APP.PRIMARY,
        borderWidth: .5,
        borderRadius: 8
    }, autoComplete__item: {
        backgroundColor: COLORS_APP.LIGHT_GRAY,
        borderColor: COLORS_APP.GRAY,
        borderWidth: 2,
        padding: 10
    }, autoComplete__button: {
        alignItems: 'center',
        backgroundColor: COLORS_APP.PRIMARY,
        borderTopEndRadius: 8,
        borderBottomEndRadius: 8,
        height: '100%',
        justifyContent: 'center',
        width: '20%'
    }
});