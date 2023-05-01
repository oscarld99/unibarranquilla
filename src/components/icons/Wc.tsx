/* eslint-disable prettier/prettier */
import { COLORS_APP } from "@Constants/colors";
import { IconProps } from "@interfaces/Icons.interface";
import * as React from "react";
import Svg, { Path } from "react-native-svg";


const Wc = ({
  color = COLORS_APP.PRIMARY,
  customSize = '24',
  ...props
}: IconProps) => {
  return (
    <Svg
      width={customSize}
      height={customSize}
      viewBox="-16.84 0 122.88 122.88"
      {...props}
    >
      <Path
        d="M10.37 84.59C4.17 79.12.46 71.46 0 60.91h89.19c-.33 9.94-2.94 17.23-8.18 21.45-5.25 4.23-14.02 4.67-20.88 7.81-1.49.68-2.87 1.52-4.12 2.56-7.58 6.3-5.38 15.5 1.61 21.31v8.84H10.6v-15.91H2.71V94.84h7.66V84.59zM.03 54.56V0h20.2l6.95 54.56H.03zm31.35-5.83h57.71v5.83H31.38v-5.83z"
        fill={color}
      />
    </Svg>
  );
};
export default Wc;
