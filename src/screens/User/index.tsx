/* eslint-disable prettier/prettier */
import { ButtonImage, CardUser, Module } from '@components/ui';
import React from 'react'
import { View, ScrollView } from "react-native"
import { userModules } from '__mocks__';
import styles from './User.styles'


const imgUser = require('@assets/images/oscar.jpg')
const correo = require('@assets/images/correo.png')
const academusoft = require('@assets/images/academusoft.png')
const aula = require('@assets/images/aula.png')

const User = () => {
    return (
        <ScrollView>
            <View style={styles.user__container}>
                <View style={styles.user__card}>
                    <CardUser
                        aditional='9 Cutrimestre'
                        description='Ingenieria telematica'
                        id='1234567890'
                        img={imgUser}
                        name='Oscar david Lora De Sales'
                    />
                    <View style={styles.user__ctaButtons}>
                        <ButtonImage text={'Academusoft'} img={academusoft} />
                        <ButtonImage text={'Aula virtual'} img={aula} />
                        <ButtonImage text={'Correo'} img={correo} />
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