/* eslint-disable prettier/prettier */
import { COLORS_APP } from '@Constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    radio__container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        gap: 10,
        overflow: 'scroll',
        height: '100%',
    },
    radio__image: {
        height: 200,
        width: '90%'
    },
    radio__button: {
        alignItems: 'center',
        backgroundColor: COLORS_APP.PRIMARY,
        borderRadius: 50,
        height: 50,
        justifyContent: 'center',
        marginTop:50,
        width: 50
    }
});