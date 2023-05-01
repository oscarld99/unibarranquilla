/* eslint-disable prettier/prettier */
import { CardPrograms } from '@components/ui'
import React from 'react'
import { View } from "react-native"
import styles from './Programs.styles'
import { programs } from '__mocks__';

const imgTecnico = require('@assets/images/tecnico.jpg');
const imgTecnologo = require('@assets/images/tecnologo.jpg');
const imgUniversitario = require('@assets/images/universitario.jpg');


const Programs = () => {
    const imgPrograms = [imgTecnologo, imgUniversitario, imgTecnico]



    return (
        <View style={styles.programs__container}>
            {
                Object.keys(programs).map((program, index) => (
                    <CardPrograms
                        key={program}
                        img={imgPrograms[index]}
                        offers={programs[program]}
                        text={program}
                    />
                ))
            }
        </View>
    )
}

export default Programs