/* eslint-disable prettier/prettier */
import { COLORS_APP } from "@Constants/colors";
import { IconProps } from "@interfaces/Icons.interface";
import * as React from "react";
import Svg, { Path } from "react-native-svg";


const University = ({
  color = COLORS_APP.PRIMARY,
  customSize = '24',
  ...props
}: IconProps) => {
  return (
    <Svg
      width={customSize}
      height={customSize}
      viewBox="-5 0 32 32"
      {...props}
    >
      <Path
        d="M.84 12.96h20.52c.48 0 .84-.36.84-.84 0-.36-.2-.64-.52-.76l-10.2-5.2a.847.847 0 0 0-.76 0L.48 11.36c-.36.16-.52.56-.44.96.12.36.4.64.8.64zm10.28-5.08 6.72 3.4H4.4l6.72-3.4zm10.24 16.36h-1.64v-9.36c0-.48-.36-.84-.84-.84s-.84.36-.84.84v9.36h-3.52v-9.36a.82.82 0 0 0-.84-.84c-.44 0-.84.36-.84.84v9.36H9.32v-9.36c0-.48-.36-.84-.84-.84s-.84.36-.84.84v9.36H4.16v-9.36c0-.48-.36-.84-.84-.84s-.8.36-.8.84v9.36H.88c-.48 0-.84.36-.84.84s.36.84.84.84H21.4c.48 0 .84-.36.84-.84s-.4-.84-.88-.84z"
        fill={color}
      />
    </Svg>
  );
};
export default University;
