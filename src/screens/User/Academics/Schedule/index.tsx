/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View } from 'react-native'
import { shedule } from '__mocks__'
import styles from './Shedule.styles'
import { SheduleInfo } from '@components/ui'


const Schedule = () => {

    const [expandedShedule, setExpandedShedule] = useState('')

    const handleExpanded = (newExpanded: string) => {
        if (newExpanded === expandedShedule) return setExpandedShedule('')
        setExpandedShedule(newExpanded)
    }


    return (
        <View style={styles.shedule__container}>
            {shedule.map(({ day, modules }) => (
                <SheduleInfo
                    day={day}
                    isExpanded={expandedShedule === day}
                    key={`sheduleInfo__${day}`}
                    modules={modules}
                    onExpand={handleExpanded}
                />
            ))}
        </View>
    )
}

export default Schedule