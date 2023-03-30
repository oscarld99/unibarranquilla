/* eslint-disable prettier/prettier */
import { COLORS_APP } from "@Constants/colors";
import { IconProps } from "@interfaces/Icons.interface";
import * as React from "react";
import Svg, { Path } from "react-native-svg";


const Camera = ({
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
        d="M29 7h-4.599L22 3H10L7.6 7H3C2 7 0 8 0 9.969V26c0 1.657 1.5 3 2.792 3h26.271c1.313 0 2.938-1.406 2.938-2.968V10c0-1-1-3-3-3zm1 19.032c0 .395-.639.947-.937.969H2.798c-.232-.019-.797-.47-.797-1V9.97c0-.634.851-.953 1-.969h5.732l2.4-4h9.802l1.785 3.03.55.97h5.731c.705 0 .99.921 1 1v16.032zM16 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"
        fill={color}
      />
    </Svg>
  );
};
export default Camera;
