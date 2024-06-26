import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export function ArrowDown (props: SvgProps) {
  return(
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      stroke="#4B4B4B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.07 9.297 6 6 6-6"
      style={{
        stroke: "#4b4b4b",
        stroke: "color(display-p3 .2941 .2941 .2941)",
        strokeOpacity: 1,
      }}
    />
  </Svg>
)
}