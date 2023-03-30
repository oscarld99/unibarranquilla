/* eslint-disable prettier/prettier */
import { COLORS_APP } from '@Constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    list__container: {
        backgroundColor: COLORS_APP.LIGHT_GRAY,
        borderRadius: 8,
        elevation: 8,
        gap: 1,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        width: '100%'
    },
    listItem__container: {
        backgroundColor: COLORS_APP.WHITE,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingRight: 16
    },
    listItem__last: {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    },
    listItem__detail: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        maxWidth: '90%'
    },
    listItem__arrow: {
        justifyContent: 'center'
    },
    listItem__divider: {
        borderWidth: 0.5,
        borderColor: COLORS_APP.GRAY,
        marginLeft: '2.5%',
        width: '95%'
    }
});