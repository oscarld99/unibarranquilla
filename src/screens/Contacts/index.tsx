/* eslint-disable prettier/prettier */
import React from 'react'
import { ScrollView, Text, View } from "react-native"
import styles from './Contacts.styles'
import { contacts } from '__mocks__'
import { Clock, Mail, Telephone, User } from '@components/icons'

const Contacts = () => {

    return (
        <ScrollView >
            <View style={styles.contacts__container}>
                {contacts.map((contact) => (
                    <View key={`contact__${contact.tittle}__${contact.mail}`} style={styles.contacts__card}>
                        <Text style={styles.contacts__tittle}>{contact.tittle}</Text>
                        <View style={styles.contacts__inline}>
                            <User />
                            <Text style={styles.contacts__inlineText}>{contact.name}</Text>
                        </View>
                        <View style={styles.contacts__inline}>
                            <Telephone />
                            <Text style={styles.contacts__inlineText}>{contact.tel}</Text>
                        </View>
                        <View style={styles.contacts__inline}>
                            <Mail />
                            <Text style={styles.contacts__inlineText}>{contact.mail}</Text>
                        </View>
                        <View style={styles.contacts__inline}>
                            <Clock />
                            <Text style={styles.contacts__inlineText}>
                                {`Horario de Atención:${contact.time}`}
                            </Text>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

export default Contacts