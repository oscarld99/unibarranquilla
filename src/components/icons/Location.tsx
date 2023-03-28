/* eslint-disable prettier/prettier */
import { COLORS_APP } from "@Constants/colors";
import { IconProps } from "@interfaces/Icons.interface";
import * as React from "react";
import Svg, { Path } from "react-native-svg";


const Location = ({
  color = COLORS_APP.PRIMARY,
  customSize = '24',
  ...props
}: IconProps) => {
  return (
    <Svg
      height={`${customSize}px`}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 512.000000 512.000000"
      width={`${customSize}px`}
      {...props}
    >
      <Path
        fill={color}
        d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
      />
      <Path
        fill={color}
        d="M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"
      />
    </Svg>
  );
};
export default Location;
