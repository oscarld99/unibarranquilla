/* eslint-disable prettier/prettier */
import { COLORS_APP } from '@Constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    cardPrograms__container: {
        alignItems: 'flex-end',
        backgroundColor: COLORS_APP.WHITE,
        borderRadius: 8,
        elevation: 8,
        height: 200,
        justifyContent: 'center',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        width: '100%'
    },
    cardPrograms__image: {
        borderRadius: 8,
        height: '100%',
        width: '100%'
    },
    cardPrograms__body: {
        alignContent: 'flex-end',
        backgroundColor: COLORS_APP.BLACK,
        borderBottomEndRadius: 8,
        borderBottomStartRadius: 8,
        borderRadius: 8,
        height: '100%',
        opacity: 0.3,
        position: 'absolute',
        width: '100%'
    },
    cardPrograms__tittle: {
        color: COLORS_APP.WHITE,
        fontSize: 24,
        fontWeight: '600',
        paddingRight: 20,
        position: 'absolute',
        textTransform:'uppercase'
    }
});