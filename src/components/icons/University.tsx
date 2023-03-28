/* eslint-disable prettier/prettier */
import { COLORS_APP } from "@Constants/colors";
import { IconProps } from "@interfaces/Icons.interface";
import * as React from "react";
import Svg, { Path } from "react-native-svg";


const University = ({
  color = COLORS_APP.PRIMARY,
  customSize = '24',
  ...props
}: IconProps) => {
  return (
    <Svg
      fill={color}
      height={`${customSize}px`}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 15.36 15.36"
      width={`${customSize}px`}
      {...props}
    >
      <Path d="M14.88 3.84v0.48a0.24 0.24 0 0 1 -0.24 0.24h-0.72v0.36c0 0.199 -0.161 0.36 -0.36 0.36H1.8c-0.199 0 -0.36 -0.161 -0.36 -0.36v-0.36H0.72a0.24 0.24 0 0 1 -0.24 -0.24v-0.48a0.24 0.24 0 0 1 0.148 -0.222l6.96 -2.64a0.24 0.24 0 0 1 0.184 0l6.96 2.64A0.24 0.24 0 0 1 14.88 3.84zm-0.72 9.12H1.2c-0.398 0 -0.72 0.322 -0.72 0.72v0.48a0.24 0.24 0 0 0 0.24 0.24h13.92a0.24 0.24 0 0 0 0.24 -0.24v-0.48c0 -0.398 -0.322 -0.72 -0.72 -0.72zM2.88 5.76v5.76H1.8c-0.199 0 -0.36 0.161 -0.36 0.36v0.6h12.48v-0.6c0 -0.199 -0.161 -0.36 -0.36 -0.36h-1.08V5.76h-1.92v5.76h-1.92V5.76h-1.92v5.76h-1.92V5.76H2.88z" />
    </Svg>
  );
};
export default University;
