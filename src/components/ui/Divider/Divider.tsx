/* eslint-disable prettier/prettier */
import React from 'react'
import {
  View
} from 'react-native'
import { COLORS_APP } from '@Constants/colors';

interface DividerProps {
  borderColor?: string;
  borderWidth?: number;
  marginVertical?: number;
  width?: number;
}

const Divider = ({
  borderColor = COLORS_APP.PRIMARY,
  borderWidth = 0.5,
  marginVertical = 10,
  width = 90
}: DividerProps) => {

  const calcMarginLeft = (100 - width) / 2

  return (
    <View
      style={{
        borderWidth,
        borderColor,
        marginLeft: `${calcMarginLeft}%`,
        marginVertical,
        width: `${width}%`
      }} />
  )
}

export default Divider