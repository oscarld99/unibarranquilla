/* eslint-disable prettier/prettier */
import {
    Camera,
    LogOut,
    Telephone,
    Web
} from '@components/icons'
import { AuthContext } from '@contexts/AuthContext'
import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native'
import styles from './Sidebar.styles'

/*const importImage = (name: string) => {
    try {
        return require(`@assets/images/users/${name.toLowerCase()}.jpg`)
    } catch (error) {
        return require('@assets/images/oscar.jpg')
    }
}*/

const SideBar = ({ closeMenu }: { closeMenu: () => void }) => {

    const authContext = useContext(AuthContext)
    const navigation = useNavigation()
    const imgUser = require('@assets/images/test.jpg')

    const onCloseSession = () => {
        authContext.signOut()
        navigation.navigate('Login')
    }

    return (
        <View style={styles.sideBar__body}>
            <View style={styles.sideBar__container}>
                <View style={styles.sideBar__user}>
                    <View>
                        <Image
                            alt={`${authContext.name} ${authContext.lastName}`}
                            source={imgUser}
                            style={styles.sideBar__userImage}
                        />
                    </View>
                    <View style={styles.sideBar__userDetail}>
                        <Text style={styles.sideBar__userName} numberOfLines={1}>{`${authContext.name} ${authContext.lastName}`}</Text>
                        <Text style={styles.sideBar__userDescription}>{`CC. ${authContext.id}`}</Text>
                        <Text style={styles.sideBar__userDescription}>Ingenieria Telematica</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.sideBar__item}>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.unibarranquilla.edu.co/')} style={styles.sideBar__itemMenu}>
                            <Web customSize={'20'} />
                            <Text style={styles.sideBar__itemText}>SITIO WEB</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sideBar__itemDivider} />
                    <View style={styles.sideBar__item}>
                        <TouchableOpacity onPress={() => navigation.navigate('Contactos')} style={styles.sideBar__itemMenu}>
                            <Telephone customSize={'20'} />
                            <Text style={styles.sideBar__itemText}>CONTACTOS</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sideBar__itemDivider} />
                    <View style={styles.sideBar__item}>
                        <TouchableOpacity onPress={() => { }} style={styles.sideBar__itemMenu}>
                            <Camera customSize={'20'} />
                            <Text style={styles.sideBar__itemText}>CAMBIAR FOTO</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sideBar__itemDivider} />
                    <View style={styles.sideBar__item}>
                        <TouchableOpacity onPress={onCloseSession} style={styles.sideBar__itemMenu}>
                            <LogOut customSize={'20'} />
                            <Text style={styles.sideBar__itemText}>CERRAR SESSION</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sideBar__itemDivider} />
                </View>
            </View>
            <TouchableOpacity onPress={closeMenu} style={styles.sideBar__backdrop} />
        </View>
    )
}

export default SideBar