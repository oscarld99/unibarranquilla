/* eslint-disable prettier/prettier */
import { COLORS_APP } from '@Constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    filterLocations__container: {
        alignItems: 'center',
        backgroundColor: COLORS_APP.LIGHT_GRAY,
        borderColor: COLORS_APP.PRIMARY,
        borderRadius: 8,
        borderWidth: 2,
        flexDirection: 'column',
        padding: 10,
        paddingBottom: 0,
        width: '100%'
    }, filterLocations__button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS_APP.PRIMARY,
        borderRadius: 8,
        gap: 8,
        justifyContent: 'center',
        padding: 10,
        width: '45%'
    }, filterLocations__buttonExpand: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS_APP.PRIMARY,
        borderTopStartRadius: 8,
        borderTopEndRadius: 8,
        gap: 8,
        justifyContent: 'center',
        marginTop: 5,
        padding: 2,
        width: 100
    }, filterLocations__buttonText: {
        color: COLORS_APP.WHITE,
        fontSize: 16,
        fontWeight: '600',
        textTransform: 'uppercase'
    }, filterLocations__buttonsContainer: {
        flexDirection: 'row',
        gap: 8
    }
});