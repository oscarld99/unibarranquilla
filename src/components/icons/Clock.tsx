/* eslint-disable prettier/prettier */
import { COLORS_APP } from "@Constants/colors";
import { IconProps } from "@interfaces/Icons.interface";
import * as React from "react";
import Svg, { Path } from "react-native-svg";


const Clock = ({
  color = COLORS_APP.PRIMARY,
  customSize = '24',
  ...props
}: IconProps) => {
  return (
    <Svg
      width={customSize}
      height={customSize}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path fill="#fff" d="M0 0h24v24H0z" />
      <Path
        fill={color}
        fillRule="evenodd"
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.832 2.555a1 1 0 0 1-1.387.277l-2.6-1.733a1.898 1.898 0 0 1-.845-1.58V7a1 1 0 1 1 2 0v4.465l2.555 1.703a1 1 0 0 1 .277 1.387Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
export default Clock;
