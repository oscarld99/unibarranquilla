/* eslint-disable prettier/prettier */
import React from 'react'
import { TextInput, TextInputProps, View } from 'react-native'
import styles from './InputText.styles'

interface InputTextProps extends TextInputProps {
  
}

const InputText = (props: InputTextProps) => {
  return (
    <View style={styles.textInput__view}>
      <TextInput
        {...props}
        style={styles.textInput__input}
      />
    </View>
  )
}

export default InputText