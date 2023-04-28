/* eslint-disable prettier/prettier */
import { COLORS_APP } from '@Constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    sheduleInfo__containerDay: {
        alignItems: 'center',
        backgroundColor: COLORS_APP.PRIMARY,
        borderRadius: 8,
        justifyContent: 'center',
        width: '100%'
    },
    sheduleInfo__containerDayOpen: {
        borderBottomStartRadius: 0,
        borderBottomEndRadius: 0,
    },
    sheduleInfo__textDay: {
        color: COLORS_APP.WHITE,
        fontSize: 18,
        fontWeight: 'bold'
    },
    sheduleInfo__textModules: {
        color: COLORS_APP.WHITE,
        elevation: 8,
        fontSize: 12,
    },
    sheduleInfo__containerClass: {
        alignItems: 'center',
        backgroundColor: COLORS_APP.LIGHT_GRAY,
        borderBottomStartRadius: 8,
        borderBottomEndRadius: 8,
        padding: 10,
        elevation: 8,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
    },
    sheduleInfo__info: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5,
        paddingBottom: 8
    },
    sheduleInfo__moduleName: {
        fontWeight: '700',
        fontSize: 18
    },
    sheduleInfo__moduleBold: {
        color: COLORS_APP.BLACK,
        fontSize: 16,
        fontWeight: '600'
    },
    sheduleInfo__moduleValue: {
        color: COLORS_APP.BLACK
    },
    sheduleInfo__moduleText: {
        color: COLORS_APP.BLACK,
        fontSize: 12
    }
});