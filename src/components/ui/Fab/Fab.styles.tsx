/* eslint-disable prettier/prettier */
import { COLORS_APP } from '@Constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    fab__button: {
        alignItems: 'center',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        flex: 1,
        justifyContent: 'center',
        width: 50,
        position: 'absolute',
        right: 10,
        height: 50,
        backgroundColor: COLORS_APP.PRIMARY,
        zIndex:10
    }
});