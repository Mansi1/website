import React from "react"
import { makeStyles } from "@mui/styles"

const useStyle = makeStyles({
  root: {
    marginTop: 25,
    marginBottom: 25,
    borderTop: "1px solid rgba(0, 0, 0, 0.12)",
    height: 1,
  },
})

export const Divider = () => {
  const classes = useStyle()
  return <div className={classes.root} />
}
