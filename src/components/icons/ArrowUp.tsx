/* eslint-disable prettier/prettier */
import { COLORS_APP } from "@Constants/colors";
import { IconProps } from "@interfaces/Icons.interface";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowUp = ({
  color = COLORS_APP.PRIMARY,
  customSize = '24',
  ...props
}: IconProps) => {
  return (
    <Svg
      width={`${customSize}pt`}
      height={`${customSize}pt`}
      viewBox="0 0 1024 1024"
      {...props}
    >
      <Path
        d="M104.704 685.248a64 64 0 0090.496 0l316.8-316.8 316.8 316.8a64 64 0 0090.496-90.496L557.248 232.704a64 64 0 00-90.496 0L104.704 594.752a64 64 0 000 90.496z"
        fill={color}
      />
    </Svg>
  );
};
export default ArrowUp;
