/* eslint-disable prettier/prettier */
import { COLORS_APP } from '@Constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    virtualCard__container: {
        overflow: 'scroll',
        height: '100%'
    }, virtualCard__top: {
        alignItems: 'center',
        backgroundColor: COLORS_APP.GRAY,
        height: '25%',
        paddingTop: 20
    }, virtualCard__textId: {
        color: COLORS_APP.BLACK,
        fontSize: 16
    }, virtualCard__textName: {
        color: COLORS_APP.PRIMARY,
        fontSize: 18,
        fontWeight: '600'
    }, virtualCard__bottom: {
        alignItems: 'center',
        backgroundColor: COLORS_APP.PRIMARY,
        height: '75%'
    }, virtualCard__userImage: {
        borderRadius: 100,
        borderColor: COLORS_APP.PRIMARY,
        borderWidth: 2,
        height: 150,
        position: 'absolute',
        top: -75,
        width: 150
    }, virtualCard__qrImage: {
        borderColor: COLORS_APP.PRIMARY,
        borderWidth: 2,
        height: 150,
        marginTop: 120,
        width: 150
    }, virtualCard__containerLogo: {
        backgroundColor: COLORS_APP.LIGHT_GRAY,
        borderRadius: 8,
        marginTop: 50,
        padding: 10,
        width: '70%'
    }, virtualCard__logoImage: {
        height: 100,
        width: 'auto'
    }
});