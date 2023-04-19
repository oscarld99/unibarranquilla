/* eslint-disable prettier/prettier */
import { COLORS_APP } from "@Constants/colors";
import { IconProps } from "@interfaces/Icons.interface";
import * as React from "react";
import Svg, { Path } from "react-native-svg";


const Teacher = ({
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
      <Path
        fill={color}
        d="M16.831 15.64a1 1 0 0 1 1.55.84v1.29c0 1.27-.99 2.63-2.18 3.03l-3.19 1.06c-.56.19-1.47.19-2.02 0l-3.19-1.06c-1.2-.4-2.18-1.76-2.18-3.03v-1.3c0-.79.88-1.27 1.54-.84l2.06 1.34c.79.53 1.79.79 2.79.79s2-.26 2.79-.79l2.03-1.33Z"
      />
      <Path
        fill={color}
        d="m19.98 6.459-5.99-3.93c-1.08-.71-2.86-.71-3.94 0l-6.02 3.93c-1.93 1.25-1.93 4.08 0 5.34l1.6 1.04 4.42 2.88c1.08.71 2.86.71 3.94 0l4.39-2.88 1.37-.9v3.06c0 .41.34.75.75.75s.75-.34.75-.75v-4.92c.4-1.29-.01-2.79-1.27-3.62Z"
      />
    </Svg>
  );
};
export default Teacher;
