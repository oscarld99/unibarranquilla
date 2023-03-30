/* eslint-disable prettier/prettier */
import { COLORS_APP } from '@Constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    sideBar__body: {
        flexDirection: 'row',
        height: '100%',
        position: 'absolute',
    },
    sideBar__container: {
        backgroundColor: COLORS_APP.LIGHT_GRAY,
        height: '100%',
        width: '70%',
    },
    sideBar__backdrop: {
        backgroundColor: 'rgba(0,0,0,0.3);',
        height: '100%',
        width: '30%'
    },
    //user
    sideBar__user: {
        alignItems: 'center',
        backgroundColor: COLORS_APP.PRIMARY,
        flexDirection: 'row',
        gap: 12,
        padding: 10,
        width: '100%'
    },
    sideBar__userImage: {
        borderRadius: 100,
        borderColor: COLORS_APP.LIGHT_GRAY,
        borderWidth: 2,
        height: 70,
        width: 70,
    },
    sideBar__userDetail: {
        width: '100%'
    },
    sideBar__userName: {
        color: COLORS_APP.WHITE,
        fontSize: 18,
        textTransform: 'capitalize'
    },
    sideBar__userDescription: {
        color: COLORS_APP.WHITE
    },
    //item
    sideBar__item: {
        padding: 10
    },
    sideBar__itemMenu: {
        alignItems: 'center',
        color: COLORS_APP.WHITE,
        flexDirection: 'row',
        gap: 10,
        maxWidth: '90%'
    },
    sideBar__itemText: {
        color: COLORS_APP.BLACK,
        fontSize: 16
    },
    sideBar__itemDivider: {
        borderWidth: 0.5,
        borderColor: COLORS_APP.GRAY,
        marginLeft: '2.5%',
        width: '95%'
    }
});