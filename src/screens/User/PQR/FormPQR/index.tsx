/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { TextInput, Text, View, ScrollView } from 'react-native'
import styles from './FormPQR.styles'

const FormPQR = () => {

    const [dataForm, setDataForm] = useState({
        tipoSolicitud: '',
        tipoDocumento: '',
        identificacion: '',
        direccion: '',
        nombreRazonSocial: '',
        apellidoTipoEmpresa: '',
        telefono: '',
        email: '',
        tema: '',
        comentario: ''
    })

    const handleForm = (key: string, value: string) => {
        setDataForm({
            ...dataForm,
            [key]: value
        })
    }


    return (
        <ScrollView>
            <View style={styles.form__container}>
                <View>
                    <Text>Tipo de solicitud</Text>
                    <TextInput
                        style={styles.form__inputText}
                        keyboardType='default'
                        onChangeText={(text) => handleForm('tipoSolicitud', text)}
                        value={dataForm.tipoSolicitud}
                    />
                </View>
                <View>
                    <Text>Tipo de documento</Text>
                    <TextInput
                        style={styles.form__inputText}
                        keyboardType='default'
                        onChangeText={(text) => handleForm('tipoDocumento', text)}
                        value={dataForm.tipoDocumento}
                    />
                </View>
                <View>
                    <Text>Identificación</Text>
                    <TextInput
                        style={styles.form__inputText}
                        keyboardType='default'
                        onChangeText={(text) => handleForm('identificacion', text)}
                        value={dataForm.identificacion}
                    />
                </View>
                <View>
                    <Text>Dirección</Text>
                    <TextInput
                        style={styles.form__inputText}
                        keyboardType='default'
                        onChangeText={(text) => handleForm('direccion', text)}
                        value={dataForm.direccion}
                    />
                </View>
                <View>
                    <Text>Nombre del remitente o razón social</Text>
                    <TextInput
                        style={styles.form__inputText}
                        keyboardType='default'
                        onChangeText={(text) => handleForm('nombreRazonSocial', text)}
                        value={dataForm.nombreRazonSocial}
                    />
                </View>
                <View>
                    <Text>Apellidos o tipo de empresa</Text>
                    <TextInput
                        style={styles.form__inputText}
                        keyboardType='default'
                        onChangeText={(text) => handleForm('apellidoTipoEmpresa', text)}
                        value={dataForm.apellidoTipoEmpresa}
                    />
                </View>
                <View>
                    <Text>Telefono</Text>
                    <TextInput
                        style={styles.form__inputText}
                        keyboardType='default'
                        onChangeText={(text) => handleForm('telefono', text)}
                        value={dataForm.telefono}
                    />
                </View>
                <View>
                    <Text>Email</Text>
                    <TextInput
                        style={styles.form__inputText}
                        keyboardType='email-address'
                        onChangeText={(text) => handleForm('email', text)}
                        value={dataForm.email}
                    />
                </View>
                <View>
                    <Text>Tema de su petición</Text>
                    <TextInput
                        style={styles.form__inputText}
                        keyboardType='default'
                        numberOfLines={3}
                        onChangeText={(text) => handleForm('tema', text)}
                        value={dataForm.tema}
                    />
                </View>
                <View>
                    <Text>Comentario</Text>
                    <TextInput
                        style={styles.form__inputText}
                        keyboardType='default'
                        numberOfLines={3}
                        onChangeText={(text) => handleForm('comentario', text)}
                        value={dataForm.comentario}
                    />
                </View>
            </View>
        </ScrollView>

    )
}

export default FormPQR