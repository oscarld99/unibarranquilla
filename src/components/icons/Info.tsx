/* eslint-disable prettier/prettier */
import { COLORS_APP } from "@Constants/colors";
import { IconProps } from "@interfaces/Icons.interface";
import * as React from "react";
import Svg, { Circle, G, Path } from "react-native-svg";


const Info = ({
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
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Circle cx={12} cy={12} r={10} data-name="--Circle" />
        <Path d="M12 12v4M12 8h0" />
      </G>
    </Svg>

  );
};
export default Info;
