/* eslint-disable prettier/prettier */
import ListItem from '@components/ui/List/ListItem/Listitem'
import { Programs } from '@interfaces/data/oldGrades.interface'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import styles from './OldGradeDetails.styles'
import { calcModuleAverage } from 'utils/helpers/calcAverage'

const OldGradeDetails = ({ route }) => {

    const program: Programs = route?.params?.program

    return (
        <View style={styles.oldGrades__container}>
            <Text style={styles.oldGrades__program}>{program?.program}</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                {program?.periods.map(({ id, modules, period, year }) => (
                    <View key={`period_${year}-${period}__${id}`}>
                        <View style={styles.oldGrades__tittle}>
                            <Text style={styles.oldGrades__period}>{`Periodo ${year}-${period}`}</Text>
                        </View>
                        {
                            modules.map((module) => (
                                <ListItem
                                    additionalText={module.grade}
                                    key={`module__${module.grade}__program__${id}`}
                                    noIcon={true}
                                    text={module.module} />
                            ))
                        }
                        <ListItem
                            additionalText={calcModuleAverage(modules)}
                            key={`module__${program.program}__court__average`}
                            isLast={true}
                            noIcon={true}
                            text={'Promedio'} />
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default OldGradeDetails