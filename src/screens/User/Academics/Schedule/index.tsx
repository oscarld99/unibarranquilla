/* eslint-disable prettier/prettier */
import { Group, University } from '@components/icons'
import Accordion from '@components/ui/Accordion/Accordion'
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { shedule } from '__mocks__'
import styles from './Shedule.styles'

const Schedule = () => {

    const [expandedShedule, setExpandedShedule] = useState('')

    const handleExpanded = (newExpanded: string) => {
        if (newExpanded === expandedShedule) return setExpandedShedule('')
        setExpandedShedule(newExpanded)
    }

    return (
        <View style={styles.shedule__container}>
            <Text>Shedule</Text>
            {shedule.map(({ day, modules }) => (
                <Accordion
                    expanded={expandedShedule === day}
                    key={`sheduleDay__${day}`}
                    component={
                        <View style={styles.shedule__containerDay}>
                            <View style={styles.shedule__day}>
                                <Text>{day}</Text>
                            </View>
                            <View style={styles.shedule__moduleCounts}>
                                <Text>{`${modules.length} Modulos`}</Text>
                            </View>
                        </View>
                    }
                    onPress={() => handleExpanded(day)}
                >
                    <View style={{ backgroundColor: 'white', padding: 10 }}>
                        {modules.map((module) => (
                            <View key={`day__${day}__module__${module.id}`}>
                                <Text style={styles.shedule__moduleText}>
                                    <Text style={styles.shedule__moduleName}>
                                        {module.moduleName}
                                    </Text>
                                    {` (${module.startTime}-${module.endTime})`}
                                </Text>
                                <View>
                                    <Text>
                                        <Group customSize='20' />
                                        <Text style={styles.shedule__moduleBold}>
                                            Sede:
                                        </Text>
                                        {module.sede}
                                    </Text>
                                </View>
                                <View>
                                    <Text>
                                        <University />
                                        <Text style={styles.shedule__moduleBold}>
                                            Sede:
                                        </Text>
                                        {module.sede}
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </Accordion>
            ))}

        </View>
    )
}

export default Schedule