/* eslint-disable prettier/prettier */
import { COLORS_APP } from '@Constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    cardMonitoring__container: {
        backgroundColor: COLORS_APP.WHITE,
        borderRadius: 8,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        width: '100%'
    }, cardMonitoring__inline: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 5,
        paddingHorizontal: 10,
        paddingVertical: 3,
        gap: 8
    }, cardMonitoring__header: {
        alignItems: 'center',
        backgroundColor: COLORS_APP.PRIMARY,
        borderTopStartRadius: 8,
        borderTopEndRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        width: '100%'
    }, cardMonitoring__headerText: {
        color: COLORS_APP.WHITE,
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center'
    },
    cardMonitoring__name: {
        color: COLORS_APP.PRIMARY,
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center'
    },
    cardMonitoring__text: {
        fontSize: 16,
        fontWeight: '400',
        color: COLORS_APP.BLACK
    }, cardMonitoring__button: {
        alignItems: 'center',
        backgroundColor: COLORS_APP.PRIMARY,
        borderBottomStartRadius: 8,
        borderBottomEndRadius: 8,
        marginTop: 15,
        paddingVertical: 7,
        width: '100%'
    }, cardMonitoring__buttonText: {
        color: COLORS_APP.WHITE,
        fontSize: 18,
        fontWeight: '600'
    }
});