/* eslint-disable prettier/prettier */
import { COLORS_APP } from "@Constants/colors";
import { IconProps } from "@interfaces/Icons.interface";
import * as React from "react";
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg";


const News = ({
    color = COLORS_APP.PRIMARY,
    customSize = '24',
    ...props
}: IconProps) => {
    return (
        <Svg
            width={`${customSize}px`}
            height={`${customSize}px`}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <G
                clipPath="url(#clip0_429_11031)"
                stroke={color}
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <Path d="M3 4v14a2 2 0 002 2h14a2 2 0 002-2V8h-4" />
                <Path d="M3 4h14v14a2 2 0 002 2v0M13 8H7M13 12H9" />
            </G>
            <Defs>
                <ClipPath id="clip0_429_11031">
                    <Path fill="#fff" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};
export default News;