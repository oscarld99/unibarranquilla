/* eslint-disable prettier/prettier */
import { COLORS_APP } from '@Constants/colors';
import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    autoComplete__container: {
        flexDirection: 'row',
        position: 'absolute',
        width: '100%',
        zIndex: 5
    }, autoComplete__backDrop: {
        backgroundColor: '#00000020',
        height: '100%',
        marginLeft: -20,
        marginTop: -20,
        position: 'absolute',
        top: 0,
        width: Dimensions.get('window').width,
        zIndex: 4
    }, autoComplete__input: {
        height: 40,
        width: '80%',
        zIndex: 6
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