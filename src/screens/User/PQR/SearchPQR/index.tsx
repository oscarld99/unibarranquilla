/* eslint-disable prettier/prettier */
import ListItem from '@components/ui/List/ListItem/Listitem'
import { IPQR, pqrs } from '__mocks__/pqr'
import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import styles from './SearchPQR.styles'
import { Modal } from '@components/ui'

const SearchPQR = () => {

    const [showModal, setShowModal] = useState(false)
    const [pqrModal, setPqrModal] = useState<IPQR | null>(null)

    return (
        <ScrollView style={styles.pqr__container}>
            {
                pqrs.map((pqr, key) => (
                    <ListItem
                        additionalText={pqr.number}
                        additionalTextClassName={styles.pqr__additionalText}
                        isLast={key === (pqrs.length - 1)}
                        key={`pqr__${pqr.id}`}
                        text={pqr.text}
                        noIcon={true}
                        onPress={() => {
                            setPqrModal(pqr)
                            setShowModal(true)
                        }}
                    />
                ))
            }

            {
                showModal && (
                    <Modal
                        height={40}
                        marginTop={40}
                        tittle={`No. ${pqrModal?.number}`}
                        isShow={showModal}
                        onClose={() => setShowModal(false)}
                    >
                        <View>
                            <Text style={styles.pqr__textValue}><Text style={styles.pqr__text}>Tipo:</Text>{pqrModal?.type}</Text>
                            <Text style={styles.pqr__textValue}><Text style={styles.pqr__text}>Fecha:</Text>{pqrModal?.date}</Text>
                            <Text style={styles.pqr__textValue}><Text style={styles.pqr__text}>Estado:</Text>{pqrModal?.status}</Text>
                            <Text style={styles.pqr__textValue}><Text style={styles.pqr__text}>Asunto:</Text>{pqrModal?.text}</Text>
                        </View>
                    </Modal>

                )
            }
        </ScrollView>
    )
}

export default SearchPQR