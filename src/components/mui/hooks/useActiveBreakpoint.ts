import { Breakpoint, useMediaQuery } from "@mui/material"
import { useBreakpointDimension } from "./useBreakpointDimension"

export const useActiveBreakpoint = (): Record<Breakpoint, boolean> => {
  const breakpoints = useBreakpointDimension()
  const breakpointEntries = Object.entries(breakpoints)
  const result: { [breakpoint: string]: boolean } = {}
  for (let i = 0; i < breakpointEntries.length; i++) {
    const [dimension, { from, to }] = breakpointEntries[i]
    if (to) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      result[dimension] = useMediaQuery(
        `@media (min-width:${from}px) and (max-width:${to}px)`,
      )
    } else {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      result[dimension] = useMediaQuery(`@media (min-width:${from}px)`)
    }
  }
  return result as Record<Breakpoint, boolean>
}
