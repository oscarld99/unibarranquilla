/* eslint-disable prettier/prettier */
import { CardPrograms } from '@components/ui'
import React from 'react'
import { View } from "react-native"
import styles from './Programs.styles'

const imgTecnico = require('@assets/images/tecnico.jpg');
const imgTecnologo = require('@assets/images/tecnologo.jpg');
const imgUniversitario = require('@assets/images/universitario.jpg');

const Programs = () => {
    return (
        <View style={styles.programs__container}>
            <CardPrograms img={imgTecnico} text={'Tecnicos profesionales'} />
            <CardPrograms img={imgTecnologo} text={'Tecnológicos'} />
            <CardPrograms img={imgUniversitario} text={'Universitarios'} />
        </View>
    )
}

export default Programs