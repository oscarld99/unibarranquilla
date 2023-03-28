/* eslint-disable prettier/prettier */
import { COLORS_APP } from '@Constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    module__container: {
        backgroundColor: COLORS_APP.WHITE,
        borderRadius: 12,
        elevation: 8,
        gap: 8,
        paddingTop: 10,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
    },module__title:{
        color:COLORS_APP.PRIMARY,
        fontWeight:'600',
        paddingLeft:15
    }
});