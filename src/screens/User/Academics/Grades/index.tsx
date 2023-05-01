/* eslint-disable prettier/prettier */
import Accordion from '@components/ui/Accordion/Accordion'
import ListItem from '@components/ui/List/ListItem/Listitem'
import React, { useState } from 'react'
import { View } from 'react-native'
import { grades } from '__mocks__/grades'
import { calcAverage } from 'utils/helpers/calcAverage'
import { Fab } from '@components/ui'
import { Calc, Cancel } from '@components/icons'
import { COLORS_APP } from '@Constants/colors'
import CalcGrade from './CalcGrade'
import styles from './Grades.styles'

const Grades = () => {

    const [expanded, setExpanded] = useState('')
    const [showCalc, setShowCalc] = useState(false)

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
            ))}
            {showCalc && <CalcGrade open={showCalc} onClose={() => setShowCalc(false)} />}
            <Fab
                icon={showCalc ? <Cancel color={COLORS_APP.WHITE} /> : <Calc color={COLORS_APP.WHITE} />}
                onPress={() => setShowCalc(!showCalc)}
            />
        </View >
    )
}

export default Grades