/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, Pressable, PressableProps } from 'react-native';

interface ButtonProps extends PressableProps {
  text: string;
  type?: string;
  onPress: () => void
}

const Button = ({
  text,
  type = 'primary',
  onPress
}: ButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <Text>{text}</Text>
    </Pressable>
  )
}

export default Button