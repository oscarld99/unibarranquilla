/* eslint-disable prettier/prettier */
import ListItem from '@components/ui/List/ListItem/Listitem'
import { Programs } from '@interfaces/data/oldGrades.interface'
import React from 'react'
import { Text, View } from 'react-native'
import styles from './OldGradeDetails.styles'

const OldGradeDetails = ({ route }) => {

    const program: Programs = route?.params?.program

    return (
        <View style={styles.oldGrades__container}>
            <Text>{program?.program}</Text>
            <View>
                {program?.periods.map(({ id, modules, period, year }) => (
                    <View key={`period_${year}-${period}__${id}`}>
                        <Text>{`Periodo ${year}-${period}`}</Text>
                        {
                            modules.map((module) => (
                                <ListItem
                                    additionalText={module.grade}
                                    key={`module__${module.grade}__program__${id}`}
                                    noIcon={true}
                                    text={module.module} />
                            ))
                        }

                    </View>
                ))}
            </View>
        </View>
    )
}

export default OldGradeDetails