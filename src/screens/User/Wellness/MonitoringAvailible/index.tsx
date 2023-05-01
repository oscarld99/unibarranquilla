/* eslint-disable prettier/prettier */
import React from 'react'
import { CardMonitoring } from '@components/ui'
import { activeMonitoring } from '__mocks__'
import { View } from 'react-native'
import styles from './MonitoringAvailible.styles'


const MonitoringAvailible = () => {
  return (
    <View style={styles.monitoringAvailible__container}>
      {activeMonitoring.map((monitoring) => (
        <CardMonitoring
          key={monitoring.id}
          monitoring={monitoring}
          showButton={true}
        />
      ))}
    </View>
  )
}

export default MonitoringAvailible