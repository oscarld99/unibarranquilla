/* eslint-disable prettier/prettier */
import { COLORS_APP } from "@Constants/colors";
import { IconProps } from "@interfaces/Icons.interface";
import * as React from "react";
import Svg, { Path } from "react-native-svg";


const Plus = ({
  color = COLORS_APP.PRIMARY,
  customSize = '24',
  ...props
}: IconProps) => {
  return (
    <Svg
      width={customSize}
      height={customSize}
      viewBox="0 -0.5 9 9"
      {...props}
    >
      <Path
        fill={color}
        fillRule="evenodd"
        d="M9 3v2H5.625v3h-2.25V5H0V3h3.375V0h2.25v3z"
      />
    </Svg>
  );
};
export default Plus;
