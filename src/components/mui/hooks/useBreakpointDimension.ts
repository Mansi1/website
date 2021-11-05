import { Breakpoint, Theme } from "@mui/material"
import { useTheme } from "@mui/styles"
import { BreakpointDimension } from "../types/BreakpointDimension"
import {compareNumber} from "@milkscout/react";

export const useBreakpointDimension = (): Record<
  Breakpoint,
  BreakpointDimension
> => {
  const {
    breakpoints: { values: breakpointValues },
  }: Theme = useTheme()
  const sortedValues = Object.entries(breakpointValues).sort((a, b) =>
    compareNumber(a[1], b[1]),
  )
  const result: { [breakpoint: string]: BreakpointDimension } = {}
  for (let i = 0; i < sortedValues.length; i++) {
    const [breakpoint, value] = sortedValues[i]
    const nextValue = sortedValues[i + 1]
    result[breakpoint] = {
      from: value,
      to: !!nextValue ? nextValue[1] - 1 : undefined,
    }
  }
  return result as Record<Breakpoint, BreakpointDimension>
}
