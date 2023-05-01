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
    cardPrograms__containerInfo: {
        backgroundColor: COLORS_APP.WHITE,
        borderRadius: 8,
        elevation: 8,
        height: 200,
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
        opacity: 0.4,
        position: 'absolute',
        width: '100%'
    },
    cardPrograms__tittle: {
        color: COLORS_APP.WHITE,
        fontSize: 18,
        marginLeft: 30,
        fontWeight: '600',
        paddingRight: 20,
        position: 'absolute',
        textTransform: 'uppercase'
    }, cardPrograms__header: {
        alignItems: 'center',
        backgroundColor: COLORS_APP.PRIMARY,
        borderTopStartRadius: 8,
        borderTopEndRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        paddingLeft: 20,
        width: '100%'
    }, cardPrograms__headerText: {
        color: COLORS_APP.WHITE,
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center'
    }, cardPrograms__headerButton: {
        position: 'absolute',
        left: 10
    }, cardPrograms__offer: {
        backgroundColor: COLORS_APP.GRAY,
        color:COLORS_APP.BLACK,
        height: 30,
        padding: 5,
        width: '100%'
    }, cardPrograms__program: {
        borderBottomColor: COLORS_APP.GRAY,
        color:COLORS_APP.BLACK,
        borderBottomWidth: 1,
        padding: 5
    }

});