/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { Alert, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Modal } from '@components/ui'
import styles from './Grades.styles'
import { Info } from '@components/icons'

interface CalcGradeProps {
    open: boolean
    onClose: () => void
}

const CalcGrade = ({
    open,
    onClose
}: CalcGradeProps) => {

    const [grade1, setGrade1] = useState('')
    const [grade2, setGrade2] = useState('')
    const [message, setMessage] = useState('')
    const [showMessage, setShowMessage] = useState(false)

    const accumulate1 = parseFloat(grade1) * 0.3
    const accumulate2 = parseFloat(grade2) * 0.3
    //const grade3 = !isNaN(accumulate1) && !isNaN(accumulate2) ? (accumulate1 + accumulate2

    const calcGrade3 = () => {
        Keyboard.dismiss()
        if (isNaN(accumulate1) || isNaN(accumulate2)) {
            Alert.alert('Es necesario que ingreses las notas de los dos primeros cortes')
        } else {
            const grade3 = (3 - (accumulate1 + accumulate2)) / 0.4
            if (grade3 > 5) {
                setMessage(`Necesitas ${grade3.toFixed(2)} para pasar, lo cual es imposible, lo sentimos!`)
            } else {
                setMessage(`Necesitas ${grade3.toFixed(2)} para pasar, Animo, ¡Tu puedes!`)
            }
            setShowMessage(true)
        }
    }

    return (

        <Modal
            height={60}
            isShow={open}
            marginTop={20}
            onClose={onClose}
            tittle='¿ Cuanto me falta ?'
        >
            <View style={styles.calcGrade__container}>
                <Text style={styles.calcGrade__courtText}>Primer corte</Text>
                <View style={styles.calcGrade__inline}>
                    <TextInput
                        editable={false}
                        style={styles.calcGrade__textInput}
                        value='30%'
                    />
                    <TextInput
                        keyboardType='number-pad'
                        onChangeText={setGrade1}
                        placeholder="0.0"
                        style={styles.calcGrade__textInput}
                        value={grade1}
                    />
                    <TextInput
                        editable={false}
                        style={styles.calcGrade__textInput}
                        value={isNaN(accumulate1) ? '0.0' : `${accumulate1.toFixed(2)}`}
                    />
                </View>
                <Text style={styles.calcGrade__courtText}>Segundo corte</Text>
                <View style={styles.calcGrade__inline}>
                    <TextInput
                        editable={false}
                        style={styles.calcGrade__textInput}
                        value='30%'
                    />
                    <TextInput
                        keyboardType='number-pad'
                        onChangeText={setGrade2}
                        placeholder="0.0"
                        style={styles.calcGrade__textInput}
                        value={grade2}
                    />
                    <TextInput
                        editable={false}
                        style={styles.calcGrade__textInput}
                        value={isNaN(accumulate2) ? '0.0' : `${accumulate2.toFixed(2)}`}
                    />
                </View>
                <View style={styles.calcGrade__inline}>
                    <Info />
                    <Text style={styles.calcGrade__messageText}>El tercer corte tiene un valor del 40%</Text>
                </View>

                {showMessage && (
                    <Text style={styles.calcGrade__message}>
                        {message}
                    </Text>
                )}

                <TouchableOpacity style={styles.calcGrade__button} onPress={calcGrade3}>
                    <Text style={styles.calcGrade__buttonText}>CALCULAR</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default CalcGrade