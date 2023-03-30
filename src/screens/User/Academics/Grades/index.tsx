/* eslint-disable prettier/prettier */
import Accordion from '@components/ui/Accordion/Accordion'
import ListItem from '@components/ui/List/ListItem/Listitem'
import React, { useState } from 'react'
import { View } from 'react-native'
import { grades } from '__mocks__/grades'
import styles from './Grades.styles'

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
                        {courts.map(({ courtNumber, grade }, key) => (
                            <ListItem
                                additionalText={grade}
                                key={`module__${module}__court__${courtNumber}`}
                                isLast={key === (courts.length - 1)}
                                noIcon={true}
                                text={`Corte ${courtNumber}`} />
                        ))}
                    </View>
                </Accordion>
            ))
            }
        </View >
    )
}

export default Grades