/* eslint-disable prettier/prettier */
import { ButtonImage, CardUser, Module } from '@components/ui';
import { AuthContext } from '@contexts/AuthContext';
import React, { useContext } from 'react'
import { View, ScrollView, Linking } from "react-native"
import { userModules } from '__mocks__';
import styles from './User.styles'


const imgUser = require('@assets/images/test.jpg')
const correo = require('@assets/images/correo.png')
const academusoft = require('@assets/images/academusoft.png')
const aula = require('@assets/images/aula.png')

const redirectUrl = (url: string) => {
    return Linking.openURL(url)
}

const User = () => {

    const { name, lastName, id } = useContext(AuthContext)

    return (
        <ScrollView>
            <View style={styles.user__container}>
                <View style={styles.user__card}>
                    <CardUser
                        aditional='9 Cutrimestre'
                        description='Ingenieria telematica'
                        id={id}
                        img={imgUser}
                        name={`${name} ${lastName}`}
                    />
                    <View style={styles.user__ctaButtons}>
                        <ButtonImage
                            img={academusoft}
                            onPress={() => redirectUrl('http://portal.itsa.edu.co:8080/itsa/hermesoft/portal/home_4/htm/cont2014.jsp?rec=not_4290-2014.jsp')}
                            text={'Academusoft'}
                        />
                        <ButtonImage
                            img={aula}
                            onPress={() => redirectUrl('https://aulavirtual.itsa.edu.co/')}
                            text={'Aula virtual'}
                        />
                        <ButtonImage
                            img={correo}
                            onPress={() => redirectUrl('http://www.outlook.com/itsa.edu.co')}
                            text={'Correo'}
                        />
                    </View>
                </View>
                <Module tittle='Academico' modules={userModules.academicos} />
                <Module tittle='Bienestar' modules={userModules.bienestar} />
                <Module tittle='PQRS' modules={userModules.pqr} />
            </View>
        </ScrollView>
    )
}

export default User