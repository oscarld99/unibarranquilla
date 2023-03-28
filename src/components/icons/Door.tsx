/* eslint-disable prettier/prettier */
import { COLORS_APP } from "@Constants/colors";
import { IconProps } from "@interfaces/Icons.interface";
import * as React from "react";
import Svg, { Path } from "react-native-svg";


const Door = ({
  color = COLORS_APP.PRIMARY,
  customSize = '16',
  ...props
}: IconProps) => {
  return (
    <Svg
      height={`${customSize}pt`}
      preserveAspectRatio="xMidYMid meet"
      viewBox="-96 0 512 512"
      width={`${customSize}pt`}
      {...props}
    >
      <Path
        d="M96 512l224-51.2V51.2L96 0v48H0v416h96v48zM32 80h64v352H32V80zm112 208c8.837 0 16-10.745 16-24s-7.163-24-16-24-16 10.745-16 24 7.163 24 16 24z"
        fill={color}
      />
    </Svg>
  );
};
export default Door;
