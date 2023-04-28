/* eslint-disable prettier/prettier */
import React from 'react'
import {
    Text,
    View
} from 'react-native'
import styles from './SheduleInfo.styles'
import Divider from '../Divider/Divider'
import { sheduleModule } from '@interfaces/data/shedule.interface'
import Accordion from '../Accordion/Accordion'
import { Clock, Location, Teacher, University } from '@components/icons'

interface SheduleInfoProps {
    day: string;
    isExpanded: boolean;
    modules: sheduleModule[];
    onExpand: (day: string) => void
}

const SheduleInfo = ({
    day,
    isExpanded,
    modules,
    onExpand
}: SheduleInfoProps) => {

    const emptyModules = !modules || modules.length === 0
    const accordionStyles = { ...styles.sheduleInfo__containerDay }
    if (isExpanded) Object.assign(accordionStyles, { ...styles.sheduleInfo__containerDayOpen })

    return (
        <Accordion
            expanded={isExpanded}
            key={`sheduleDay__${day}`}
            component={
                <View style={accordionStyles}>
                    <View >
                        <Text style={styles.sheduleInfo__textDay}>{day}</Text>
                    </View>
                    <View >
                        <Text style={styles.sheduleInfo__textModules}>{`${modules.length} Modulos`}</Text>
                    </View>
                </View>
            }
            onPress={() => onExpand(day)}
        >
            <View style={styles.sheduleInfo__containerClass}>
                {emptyModules && (
                    <Text style={styles.sheduleInfo__moduleBold}>
                        NO HAY MODULOS ESTE DIA
                    </Text>
                )}
                {!emptyModules && modules.map((module, key) => (
                    <View key={`day__${day}__module__${module.id}`} style={{ width: '100%' }}>
                        <Text style={styles.sheduleInfo__moduleText
                        }>
                            <Text style={styles.sheduleInfo__moduleName}>
                                {module.moduleName}
                            </Text>
                            {` (${module.id})`}
                        </Text>
                        <View style={styles.sheduleInfo__info}>
                            <University />
                            <Text style={styles.sheduleInfo__moduleValue}>
                                <Text style={styles.sheduleInfo__moduleBold}>
                                    Sede:
                                </Text>
                                {module.sede}
                            </Text>
                        </View>
                        <View style={styles.sheduleInfo__info}>
                            <Location customSize='20' />
                            <Text style={styles.sheduleInfo__moduleValue}>
                                <Text style={styles.sheduleInfo__moduleBold}>
                                    Salon:
                                </Text>
                                {module.salon}
                            </Text>
                        </View>
                        <View style={styles.sheduleInfo__info}>
                            <Teacher customSize='20' />
                            <Text style={styles.sheduleInfo__moduleValue}>
                                <Text style={styles.sheduleInfo__moduleBold}>
                                    Profesor:
                                </Text>
                                {module.teacher}
                            </Text>
                        </View>
                        <View style={styles.sheduleInfo__info}>
                            <Clock customSize='20' />
                            <Text style={styles.sheduleInfo__moduleValue}>
                                <Text style={styles.sheduleInfo__moduleBold}>
                                    Hora:
                                </Text>
                                {`${module.startTime}-${module.endTime}`}
                            </Text>
                        </View>
                        {key !== (modules.length - 1) && (
                            <Divider />
                        )}
                    </View>
                ))}
            </View>
        </Accordion>
    )
}

export default SheduleInfo