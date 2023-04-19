/* eslint-disable prettier/prettier */
import React from 'react'
import { View } from "react-native"
import styles from '../Location.styles'
import { GeometryBlock } from '@components/ui'

const Floor2 = () => {
    return (
        <View style={styles.location__mapContainer}>
            <GeometryBlock
                color='YELLOW'
                height={600}
                tittle='ENTRADA'
                width={150}
                x={0}
                y={0}
            />
            <GeometryBlock
                color='GRAY'
                height={600}
                tittle='PARQUEADERO'
                width={200}
                x={150}
                y={0}
            />
            <GeometryBlock
                color='BLUE'
                height={400}
                tittle='BLOQUE DE AULAS 1'
                width={120}
                x={0}
                y={600}
            />
            <GeometryBlock
                color='YELLOW'
                height={400}
                tittle='PASILLO 1'
                width={30}
                x={120}
                y={600}
            />
            <GeometryBlock
                color='YELLOW'
                elevation={2}
                height={30}
                tittle='PASILLO Y'
                width={100}
                x={270}
                y={450}
            />
            <GeometryBlock
                color='YELLOW'
                elevation={2}
                height={120}
                tittle='PASILLO X'
                width={20}
                x={270}
                y={480}
            />
            <GeometryBlock
                color='BLUE'
                elevation={2}
                height={140}
                tittle='BLOQUE DE AULAS'
                width={80}
                x={290}
                y={480}
            />
            <GeometryBlock
                color='YELLOW'
                height={30}
                tittle='PASILLO 4'
                width={140}
                x={150}
                y={600}
            />
            <GeometryBlock
                color='YELLOW'
                height={30}
                tittle='PASILLO 5'
                width={200}
                x={150}
                y={690}
            />
            <GeometryBlock
                color='PURPLE'
                height={60}
                tittle='BAÑOS'
                width={120}
                x={150}
                y={630}
            />
            <GeometryBlock
                color='YELLOW'
                elevation={2}
                height={60}
                tittle='PASILLO'
                width={20}
                x={270}
                y={630}
            />
            <GeometryBlock
                color='RED'
                height={70}
                tittle='BIENESTAR'
                width={80}
                x={290}
                y={620}
            />
            <GeometryBlock
                color='GREEN'
                height={150}
                tittle='AREA COMUN 1'
                width={200}
                x={150}
                y={720}
            />
            <GeometryBlock
                color='ORANGE'
                height={80}
                tittle='ESCALERAS'
                width={100}
                x={150}
                y={920}
            />
            <GeometryBlock
                color='YELLOW'
                height={50}
                tittle='PASILLO 2'
                width={100}
                x={150}
                y={870}
            />
            <GeometryBlock
                color='GRAY'
                height={160}
                tittle='CAFETERIA'
                width={400}
                x={600}
                y={710}
            />
            <GeometryBlock
                color='YELLOW'
                height={30}
                tittle='PASILLO 3'
                width={750}
                x={250}
                y={870}
            />
            <GeometryBlock
                color='BLUE'
                height={100}
                tittle='BLOQUE DE AULAS 2'
                width={750}
                x={250}
                y={900}
            />
            <GeometryBlock
                color='GREEN'
                height={100}
                tittle='AREA COMUN 2'
                width={650}
                x={350}
                y={0}
            />
            <GeometryBlock
                color='YELLOW'
                elevation={2}
                height={50}
                tittle='PASILLO'
                width={50}
                x={475}
                y={50}
            />
            <GeometryBlock
                color='YELLOW'
                height={30}
                tittle='PASILLO'
                width={650}
                x={350}
                y={100}
            />
            <GeometryBlock
                color='YELLOW'
                height={350}
                tittle='PASILLO'
                width={30}
                x={350}
                y={130}
            />
            <GeometryBlock
                color='RED'
                height={100}
                tittle='ADMIN'
                width={300}
                x={380}
                y={130}
            />
            <GeometryBlock
                color='YELLOW'
                height={100}
                tittle='PASILLO'
                width={30}
                x={680}
                y={130}
            />
            <GeometryBlock
                color='RED'
                height={100}
                tittle='ADMIN'
                width={50}
                x={710}
                y={130}
            />
            <GeometryBlock
                color='BLUE'
                height={100}
                tittle='BLOQUE AULAS'
                width={230}
                x={760}
                y={130}
            />
            <GeometryBlock
                color='BLUE'
                height={480}
                tittle='BLOQUE AULAS'
                width={80}
                x={900}
                y={230}
            />
        </View>
    )
}

export default Floor2