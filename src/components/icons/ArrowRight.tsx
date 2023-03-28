/* eslint-disable prettier/prettier */
import { COLORS_APP } from "@Constants/colors";
import { IconProps } from "@interfaces/Icons.interface";
import * as React from "react";
import Svg, { Path } from "react-native-svg";


const ArrowRight = ({
  color = COLORS_APP.PRIMARY,
  customSize = '12',
  ...props
}: IconProps) => {
  return (
    <Svg
      height={`${customSize}pt`}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 1024 1024"
      width={`${customSize}pt`}
      {...props}
    >
      <Path
        d="M338.752 104.704a64 64 0 000 90.496l316.8 316.8-316.8 316.8a64 64 0 0090.496 90.496l362.048-362.048a64 64 0 000-90.496L429.248 104.704a64 64 0 00-90.496 0z"
        fill={color}
      />
    </Svg>
  );
};
export default ArrowRight;
