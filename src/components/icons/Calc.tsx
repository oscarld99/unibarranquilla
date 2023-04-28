/* eslint-disable prettier/prettier */
import { COLORS_APP } from "@Constants/colors";
import { IconProps } from "@interfaces/Icons.interface";
import * as React from "react";
import Svg, { Path } from "react-native-svg";


const Calc = ({
  color = COLORS_APP.PRIMARY,
  customSize = '24',
  ...props
}: IconProps) => {
  return (
    <Svg
      width={customSize}
      height={customSize}
      viewBox="0 0 180 260"
      {...props}
    >
      <Path
        d="M2 2v256h176V2H2zm56 216H26v-24h32v24zm0-40H26v-24h32v24zm0-40H26v-24h32v24zm48 80H74v-24h32v24zm0-40H74v-24h32v24zm0-40H74v-24h32v24zm48 80h-32v-24h32v24zm0-40h-32v-24h32v24zm0-40h-32v-24h32v24zm0-56H26V42h128v40z"
        fill={color}
      />
    </Svg>
  );
};
export default Calc;
