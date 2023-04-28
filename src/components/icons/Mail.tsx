/* eslint-disable prettier/prettier */
import { COLORS_APP } from "@Constants/colors";
import { IconProps } from "@interfaces/Icons.interface";
import * as React from "react";
import Svg, { G, Path, Rect } from "react-native-svg";


const University = ({
  color = COLORS_APP.PRIMARY,
  customSize = '24',
  ...props
}: IconProps) => {
  return (
    <Svg
      width={customSize}
      height={customSize}
      viewBox="0 0 24 24"
      {...props}
    >
      <G
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="m4 8.2 8 5.9 8-5.9" fill={color} />
        <Rect width={18} height={14} x={3} y={6.5} rx={2} ry={2} />
      </G>
    </Svg>
  );
};
export default University;
