/* eslint-disable prettier/prettier */
import { Book } from '@components/icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View } from 'react-native'
import styles from './List.styles'
import ListItem from './ListItem/Listitem';

interface ListProps {
  modules: { text: string, path: string }[]
}

const List = ({ modules }: ListProps) => {

  const navigation = useNavigation()

  return (
    <View style={styles.list__container}>
      {
        modules.map(({ path, text }, key) => (
          <ListItem
            icon={<Book />}
            isLast={key === (modules.length - 1)}
            key={`module__${text}__${key}`}
            onPress={() => navigation.navigate(path)}
            text={text}
          />
        ))
      }
    </View>
  )
}

export default List