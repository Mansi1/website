import React, { CSSProperties, PropsWithChildren } from "react"
import { Breakpoint } from "@mui/material"
import { makeStyles } from "@mui/styles"
import styleFunctionSx from "@mui/system/styleFunctionSx"
import { useExtractBreakpoints } from "../hooks/useExtractBreakpoints"
import { BreakpointSize } from "../types/BreakpointSize"
import { BreakpointProps } from "../types/BreakpointProps"
import { DivProps } from "../types/DivProps"
import { SystemProps } from "../types/SystemProps"
import { useBreakpointDimension } from "../hooks/useBreakpointDimension"
import {joinClasses} from "@milkscout/react";

const useStyle = (
  breakpoints: Partial<Record<Breakpoint, BreakpointSize>> = {},
) => {
  const breakpointDimensions = useBreakpointDimension()
  const mediaQueries: Array<{ media: string; value: CSSProperties }> =
    Object.entries(breakpoints).map(([breakpoint, value]) => {
      const { from, to } = breakpointDimensions[breakpoint as Breakpoint]
      const width: number = (1 / 12) * value
      return {
        media: `@media (min-width:${from}px)${
          to ? ` and (max-width:${to}px)` : ""
        }`,
        value: {
          width: `${width * 100}%`,
        },
      }
    })

  const styleDef: { [media: string]: CSSProperties } = mediaQueries.reduce(
    (prev, curr) => ({
      ...prev,
      [curr.media]: curr.value,
    }),
    {},
  )

  return makeStyles({
    root: styleDef,
  })()
}

export type GridItemProps = BreakpointProps & DivProps & SystemProps

export const GridItem = ({
  children,
  ...props
}: PropsWithChildren<GridItemProps>) => {
  const [breakpoints, otherProps] = useExtractBreakpoints(props)
  const { className, sx, style, ...other } = otherProps
  const sxStyle = styleFunctionSx({ sx })
  const classes = useStyle(breakpoints)
  return (
    <div
      className={joinClasses("GridItem", classes.root, className)}
      style={{ ...style, ...sxStyle }}
      {...other}
    >
      {children} 
    </div>
  )
}
