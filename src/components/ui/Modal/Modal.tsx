/* eslint-disable prettier/prettier */
import React, { ReactElement } from 'react'
import { Cancel } from '@components/icons'
import { Modal as NativeModal, Text, TouchableOpacity, View } from 'react-native'
import { COLORS_APP } from '@Constants/colors'
import styles from './Modal.styles'

interface ModalProps {
    children: ReactElement
    tittle: string
    height?: number
    marginTop?: number
    isShow?: boolean
    onClose: () => void
}

const Modal = ({
    children,
    tittle,
    height = 50,
    marginTop = 25,
    isShow = true,
    onClose
}: ModalProps) => {
    return (
        <NativeModal
            animationType="slide"
            transparent={true}
            visible={isShow}
            onRequestClose={onClose}
        >
            <View style={{
                ...styles.modal__container,
                height: `${height}%`,
                marginTop: `${marginTop}%`
            }}>
                <View style={styles.modal__header}>
                    <Text style={styles.modal__headerText}>{tittle}</Text>
                    <TouchableOpacity style={styles.modal__headerButton} onPress={onClose}>
                        <Cancel customSize='24' color={COLORS_APP.WHITE} />
                    </TouchableOpacity>
                </View>
                <View style={styles.modal__body}>
                    {children}
                </View>
            </View>
        </NativeModal>
    )
}

export default Modal