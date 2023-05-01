/* eslint-disable prettier/prettier */
import React from 'react'
import { Book, Clock, Floor, Info, Teacher, University } from '@components/icons'
import { IGeometricPlace } from '@interfaces/data/geometrycPlace.interface'
import { Text, View } from 'react-native'
import styles from '../Location.styles'
import { Modal } from '@components/ui'

interface ModalLocationDetailProps {
  location: IGeometricPlace
  isShow?: boolean
  onClose: () => void
}

const ModalLocationDetail = ({
  location,
  isShow,
  onClose
}: ModalLocationDetailProps) => {
  return (

    <Modal
      tittle={location?.tittle ?? ''}
      isShow={isShow}
      onClose={onClose}
    >
      {location !== null ?
        <View style={styles.location__modalBody}>
          <View style={styles.location__modalBodyInline}>
            <Floor />
            <Text style={styles.location__text}><Text style={styles.location__floor} > Piso: </Text>{location.floor}</Text>
          </View>
          <View style={styles.location__modalBodyInline}>
            <Info />
            <Text style={styles.location__text}><Text style={styles.location__floor} > Descripcion: </Text>{location.description ?? 'N/A'}</Text>
          </View>
          {location.isClassRoom && (
            <View style={{ gap: 10 }}>
              <View style={styles.location__modalBodyInline}>
                <University />
                <Text style={styles.location__text}><Text style={styles.location__floor} > Estado: </Text>{location.classRoomState ? 'En uso' : 'Desocupado'}</Text>
              </View>
              {
                location.classRoomState && (
                  <View style={{ gap: 10 }}>
                    <View style={styles.location__modalBodyInline}>
                      <Book />
                      <Text style={styles.location__text}>
                        <Text style={styles.location__floor} > Modulo:</Text>
                        {`${location?.activeShedule?.moduleName} - ${location?.activeShedule?.id}`}
                      </Text>
                    </View>
                    <View style={styles.location__modalBodyInline}>
                      <Teacher />
                      <Text style={styles.location__text}><Text style={styles.location__floor} > Profesor: </Text>{location?.activeShedule?.teacher}</Text>
                    </View>
                    <View style={styles.location__modalBodyInline}>
                      <Clock />
                      <Text style={styles.location__text}><Text style={styles.location__floor} > Hora:
                      </Text>
                        {`${location?.activeShedule?.startTime} - ${location?.activeShedule?.endTime}`}
                      </Text>
                    </View>

                  </View>
                )
              }
            </View>
          )}
        </View>
        : <Text style={styles.location__text}>Sin informacion</Text>}
    </Modal>
  )
}

export default ModalLocationDetail