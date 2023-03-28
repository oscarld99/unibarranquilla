/* eslint-disable prettier/prettier */
import { COLORS_APP } from "@Constants/colors";
import { IconProps } from "@interfaces/Icons.interface";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowDown = ({
  color = COLORS_APP.PRIMARY,
  customSize = '24',
  ...props
}: IconProps) => {
  return (
    <Svg
      fill={color}
      width={`${customSize}pt`}
      height={`${customSize}pt`}
      viewBox="0 0 330 330"
      {...props}
    >
      <Path d="M325.607 79.393c-5.857-5.857-15.355-5.858-21.213.001l-139.39 139.393L25.607 79.393c-5.857-5.857-15.355-5.858-21.213.001-5.858 5.858-5.858 15.355 0 21.213l150.004 150a14.999 14.999 0 0021.212-.001l149.996-150c5.859-5.857 5.859-15.355.001-21.213z" />
    </Svg>
  );
};
export default ArrowDown;
