import { Theme } from "@mui/material"
import { useTheme } from "@mui/styles"
import { BreakpointProps } from "../types/BreakpointProps"
import { UnknownProps } from "../types/UnknowProps"

export const useExtractBreakpoints = (
  props: BreakpointProps & UnknownProps,
): [BreakpointProps, UnknownProps] => {
  const { breakpoints }: Theme = useTheme()
  const breakpointKeys = Object.keys(breakpoints.values)
  const breakpointProps = Object.entries(props)
    .filter(([key]) => breakpointKeys.indexOf(key) > -1)
    .reduce((prev, [key, value]) => ({ ...prev, [key]: value }), {})
  const noneBreakpointProps = Object.entries(props)
    .filter(([key]) => breakpointKeys.indexOf(key) === -1)
    .reduce((prev, [key, value]) => ({ ...prev, [key]: value }), {})
  return [breakpointProps, noneBreakpointProps]
}
