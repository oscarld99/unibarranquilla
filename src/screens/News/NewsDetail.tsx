/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, ScrollView, Text, View } from "react-native"
import styles from './News.styles'

const imgNews = require('@assets/images/news.png');

const NewsDetail = () => {

    return (
        <ScrollView>
            <Image
                alt='logo__unibarranquilla__itsa'
                source={imgNews}
                style={styles.newsDetail__image}
            />
            <View style={styles.newsDetail__container}>
                <Text style={styles.newsDetail__tittle} >Institución Universitaria de Barranquilla tendrá nueva sede en barrio Prado</Text>
                <Text style={styles.newsDetail__body}>
                    {`En el barrio El Prado se ubicará la sede de posgrados de la Institución Universitaria de Barranquilla. Así lo confirmó el alcalde Jaime Pumarejo, quien indicó que dicho espacio abrirá sus puertas en los próximos meses.

“Vamos a estar abriendo la sede de posgrados en el barrio El Prado de la IUB, destinada para maestrías, especializaciones y para otros estudios de posgrado para nuestra gente en Barranquilla”, dijo el mandatario distrital.

De acuerdo con el Distrito, esta nueva sede facilitará la formación en cuanto a especializaciones ya existentes tales como Sistemas Automáticos de Control, Gerencia de Sistemas Integrados de Gestión, Gerencia en Logística Internacional y Administración de Sistemas Telemáticos.
                    `}
                </Text>
            </View>
        </ScrollView>
    )
}

export default NewsDetail