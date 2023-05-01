/* eslint-disable prettier/prettier */
import React from 'react'
import { View } from 'react-native'
import { activeMonitoring } from '../../../../__mocks__'
import { CardMonitoring } from '@components/ui'
import styles from './Monitoring.styles'

const Monitoring = () => {
  return (
    <View style={styles.monitoring__container}>
      {activeMonitoring.map((monitoring) => (
        <CardMonitoring key={monitoring.id} monitoring={monitoring} />
      ))}
    </View>
  )
}

export default Monitoring