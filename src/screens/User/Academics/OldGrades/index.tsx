/* eslint-disable prettier/prettier */
import ListItem from '@components/ui/List/ListItem/Listitem'
import { Programs } from '@interfaces/data/oldGrades.interface'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { olGrades } from '__mocks__'
import styles from './OldGrades.styles'

const OldGrades = () => {


    const navigation = useNavigation()

    const handleNavigate = (program: Programs) => {
        navigation.navigate('OldGradeDetails', { program })
    }
    
    return (
        <View style={styles.oldGrades__container}>
            <Text>old Grades</Text>
            <View>
                {olGrades.map((olGrade) => (
                    <ListItem
                        key={`program__${olGrade.program}__${olGrade.id}`}
                        onPress={() => handleNavigate(olGrade)}
                        text={olGrade.program} />
                ))}
            </View>
        </View>
    )
}

export default OldGrades