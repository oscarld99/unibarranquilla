/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { IMonitoring } from '__mocks__'
import styles from './CardMonitoring.styles'
import { Clock, Teacher, University } from '@components/icons'
import Modal from '../Modal/Modal'

interface CardMonitoringProps {
  monitoring: IMonitoring
  showButton?: boolean
}

const CardMonitoring = ({
  monitoring,
  showButton = false
}: CardMonitoringProps) => {

  const [showModal, setShowModal] = useState(false)

  return (
    <View style={styles.cardMonitoring__container}>
      <View style={styles.cardMonitoring__header}>
        <Text style={styles.cardMonitoring__headerText}>{monitoring.module}</Text>
      </View>
      <View style={styles.cardMonitoring__inline}>
        <Teacher />
        <Text style={styles.cardMonitoring__text}>{monitoring.monitor}</Text>
      </View>
      <View style={styles.cardMonitoring__inline}>
        <Clock />
        <Text style={styles.cardMonitoring__text}>{`${monitoring.day} de ${monitoring.startTime} - ${monitoring.endTime}`}</Text>
      </View>
      <View style={styles.cardMonitoring__inline}>
        <University />
        <Text style={styles.cardMonitoring__text}>{`Sede ${monitoring.sede}`}</Text>
      </View>
      {showButton && (
        <TouchableOpacity
          style={styles.cardMonitoring__button}
          onPress={() => setShowModal(true)}
        >
          <Text style={styles.cardMonitoring__buttonText}>Inscribirse</Text>
        </TouchableOpacity>
      )}
      {
        showModal && (
          <Modal
            height={20}
            marginTop={70}
            tittle='Inscripción exitosa'
            isShow={showModal}
            onClose={() => setShowModal(false)}
          >
            <Text style={styles.cardMonitoring__name}>{`Se ha inscrito a la monitoria de ${monitoring.module} de manera exitosa.`}</Text>
          </Modal>

        )
      }
    </View>
  )
}

export default CardMonitoring