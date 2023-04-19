/* eslint-disable prettier/prettier */
import { COLORS_APP } from "@Constants/colors";
import { IconProps } from "@interfaces/Icons.interface";
import * as React from "react";
import Svg, { Path } from "react-native-svg";


const Cancel = ({
  color = COLORS_APP.PRIMARY,
  customSize = '24',
  ...props
}: IconProps) => {
  return (
    <Svg
      width={customSize}
      height={customSize}
      viewBox="0 0 32 32"
      {...props}
    >
      <Path
        fill={color}
        d="M16 29C8.82 29 3 23.18 3 16S8.82 3 16 3s13 5.82 13 13-5.82 13-13 13zm5.961-16.791a.626.626 0 0 0 0-.885l-1.328-1.327a.626.626 0 0 0-.885 0l-3.761 3.761-3.761-3.761a.626.626 0 0 0-.885 0l-1.328 1.327a.626.626 0 0 0 0 .885l3.762 3.762-3.762 3.76a.626.626 0 0 0 0 .885l1.328 1.328a.626.626 0 0 0 .885 0l3.761-3.762 3.761 3.762a.626.626 0 0 0 .885 0l1.328-1.328a.626.626 0 0 0 0-.885l-3.762-3.76 3.762-3.762z"
      />
    </Svg>
  );
};
export default Cancel;
