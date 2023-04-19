/* eslint-disable prettier/prettier */
import Accordion from '@components/ui/Accordion/Accordion'
import ListItem from '@components/ui/List/ListItem/Listitem'
import React, { useState } from 'react'
import { View } from 'react-native'
import { grades } from '__mocks__/grades'
import styles from './Grades.styles'
import { calcAverage } from 'utils/helpers/calcAverage'

const Grades = () => {

    const [expanded, setExpanded] = useState('')

    const handleExpanded = (newExpanded: string) => {
        if (newExpanded === expanded) return setExpanded('')
        setExpanded(newExpanded)
    }

    return (
        <View style={styles.grade__container}>
            {grades.map(({ courts, module }) => (
                <Accordion
                    expanded={expanded === module}
                    key={`module__${module}`}
                    onPress={() => handleExpanded(module)}
                    tittle={module}
                >
                    <View>
                        {courts.map(({ courtNumber, grade }) => (
                            <ListItem
                                additionalText={grade}
                                key={`module__${module}__court__${courtNumber}`}
                                noIcon={true}
                                text={`Corte ${courtNumber}`} />
                        ))}
                        <ListItem
                            additionalText={calcAverage(courts)}
                            key={`module__${module}__court__average`}
                            isLast={true}
                            noIcon={true}
                            text={'Promedio'} />
                    </View>
                </Accordion>
            ))
            }
        </View >
    )
}

export default Grades