/* eslint-disable prettier/prettier */
import { COLORS_APP } from "@Constants/colors";
import { IconProps } from "@interfaces/Icons.interface";
import * as React from "react";
import Svg, { Path } from "react-native-svg";


const Book = ({
  color = COLORS_APP.PRIMARY,
  customSize = '24',
  ...props
}: IconProps) => {
  return (

    <Svg
      height={`${customSize}pt`}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 512.000000 512.000000"
      width={`${customSize}pt`}
      {...props}
    >
      <Path
        d="M175.703 0l37.63 18.795L250.963 0h175.704v320H261.013l-47.68 23.851L165.632 320H0V0h175.703zm-10.071 42.667H42.667v234.666h133.036l16.297 8.14V55.851l-26.368-13.184zm218.368 0H261.013l-26.347 13.179v229.627l16.298-8.14H384V42.667zm-21.333 128v32H256v-32h106.667zm-192 0v32H64v-32h106.667zm192-85.334v32H256v-32h106.667zm-192 0v32H64v-32h106.667z"
        transform="translate(42.667 106.667)"
        fill={color}
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </Svg>
  );
};
export default Book;
