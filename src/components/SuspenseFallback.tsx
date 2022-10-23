import React, { ReactElement } from "react";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: "#000",
  },
});

export const SuspenseFallback = (): ReactElement => {
  const classes = useStyle();
  return <div className={classes.root}>Ladevorgang...</div>;
};
