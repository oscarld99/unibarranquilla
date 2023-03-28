/* eslint-disable prettier/prettier */
import { COLORS_APP } from '@Constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    user__container: {
        justifyContent: 'center',
        padding: 20,
        gap: 10,
        overflow: 'scroll',
        height: '100%'
    },
    user__card: {
        backgroundColor: COLORS_APP.WHITE,
        borderRadius: 12,
        elevation: 8,
        gap: 10,
        paddingBottom: 10,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
    },
    user__ctaButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
});