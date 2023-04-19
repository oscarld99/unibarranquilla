/* eslint-disable prettier/prettier */
import { ArrowRight } from '@components/icons'
import { COLORS_APP } from '@Constants/colors';
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../List.styles'

interface ListItemProps {
  additionalText?: string | number;
  icon?: React.ReactElement;
  isLast?: boolean;
  noIcon?: boolean;
  text: string;
  onPress?: () => void;
}

const ListItem = ({
  additionalText,
  icon,
  text,
  isLast = false,
  noIcon = false,
  onPress
}: ListItemProps): React.ReactElement => {

  const itemStyles = isLast ? {
    ...styles.listItem__container,
    ...styles.listItem__last
  } : { ...styles.listItem__container }

  return (
    <View>
      <TouchableOpacity onPress={onPress} style={itemStyles}>
        <View style={styles.listItem__detail}>
          {!noIcon && icon}
          <Text style={styles.listItem__text}>{text}</Text>
        </View>
        <View style={styles.listItem__arrow}>
          {!noIcon && <ArrowRight color={COLORS_APP.BLACK} />}
          {additionalText && <Text style={styles.listItem__text}>{additionalText}</Text>}
        </View>
      </TouchableOpacity>
      {!isLast && <View style={styles.listItem__divider} />}
    </View>
  )
}

export default ListItem