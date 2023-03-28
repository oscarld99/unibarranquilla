/* eslint-disable prettier/prettier */
import { COLORS_APP } from "@Constants/colors"
import { IconProps } from "@interfaces/Icons.interface"
import * as React from "react"
import { Path, Svg } from "react-native-svg"

const SvgComponent = ({
  color = COLORS_APP.PRIMARY,
  customSize = '24',
  ...props
}: IconProps) => (
  <Svg
    width={`${customSize}pt`}
    height={`${customSize}pt`}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      stroke={color}
      strokeWidth={2}
    />
    <Path
      d="M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      stroke={color}
      strokeWidth={2}
    />
    <Path
      d="M6.164 18.5C6.901 16.591 8.564 16 12 16c3.466 0 5.128.558 5.855 2.5"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
)

export default SvgComponent
