/* eslint-disable prettier/prettier */
import { COLORS_APP } from "@Constants/colors";
import { IconProps } from "@interfaces/Icons.interface";
import * as React from "react";
import Svg, { Path } from "react-native-svg";


const Telephone = ({
  color = COLORS_APP.PRIMARY,
  customSize = '24',
  ...props
}: IconProps) => {
  return (
    <Svg
      width={customSize}
      height={customSize}
      viewBox="0 0 512 512"
      {...props}
    >
      <Path
        d="M94.811 21.696c-35.18 22.816-42.091 94.135-28.809 152.262 10.344 45.266 32.336 105.987 69.42 163.165 34.886 53.79 83.557 102.022 120.669 129.928 47.657 35.832 115.594 58.608 150.774 35.792 17.789-11.537 44.218-43.058 45.424-48.714l-18.899-29.14-51.972-80.135c-3.862-5.955-28.082-.512-40.386 6.457-16.597 9.404-31.882 34.636-31.882 34.636-11.38 6.575-20.912.024-40.828-9.142-24.477-11.262-51.997-46.254-73.9-77.947-20.005-32.923-40.732-72.322-41.032-99.264-.247-21.922-2.341-33.296 8.304-41.006 0 0 29.272-3.666 44.627-14.984 11.381-8.392 26.228-28.286 22.366-34.242l-51.972-80.134L157.816.088c-5.657-1.205-45.216 10.071-63.005 21.608z"
        fill={color}
      />
    </Svg>
  );
};
export default Telephone;
