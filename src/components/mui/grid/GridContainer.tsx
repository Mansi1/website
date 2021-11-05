import React, { PropsWithChildren } from "react"
import { makeStyles } from "@mui/styles"
import { Property } from "csstype"
import { useTheme } from "@mui/material"
import styleFunctionSx from "@mui/system/styleFunctionSx"
import { DivProps } from "../types/DivProps"
import { SystemProps } from "../types/SystemProps"
import {joinClasses} from "@milkscout/react";

const useStyle = (
  wrap: Property.FlexWrap | undefined,
  direction: Property.FlexDirection | undefined,
  justify: Property.JustifyContent | undefined,
  spacing: number,
) => {
  const { spacing: spacingFn } = useTheme()
  const space = spacingFn(spacing)
  return makeStyles({
    root: {
      width: `calc(100% + ${space})`,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: direction,
      flexWrap: wrap,
      marginLeft: `-${space}`,
      marginTop: `-${space}`,
      justifyContent: justify,
      "& div.GridItem": {
        marginTop: space,
        paddingLeft: space,
      },
    },
  })()
}

export type GridContainerProps = DivProps &
  SystemProps & {
    className?: string
    justify?: Property.JustifyContent
    direction?: Property.FlexDirection
    spacing?: number
    wrap?: Property.FlexWrap
  }

export const GridContainer = ({
  children,
  direction,
  wrap = "wrap",
  spacing = 2,
  justify,
  className,
  style,
  sx,
  ...other
}: PropsWithChildren<GridContainerProps>) => {
  const classes = useStyle(wrap, direction, justify, spacing)
  const sxStyle = styleFunctionSx({ sx })

  return (
    <div
      className={joinClasses(classes.root, className)}
      style={{ ...style, ...sxStyle }}
      {...other}
    >
      {children}
    </div>
  )
}
