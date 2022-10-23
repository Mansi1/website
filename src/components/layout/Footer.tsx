import React, { ReactElement } from "react";
import { makeStyles } from "@mui/styles";
import { IMPRINT_ROUTE, TERMS_OF_USE_ROUTE } from "../../routes";
import { useNavigate } from "react-router-dom";
import { Theme } from "@mui/material";

const useStyle = makeStyles(({ palette }: Theme) => ({
  root: {
    paddingTop: 50,
    paddingBottom: 80,
    backgroundColor: palette.primary.main,
  },
  textWrapper: {
    maxWidth: 360,
    textAlign: "center",
    margin: "auto",
  },
  link: {
    cursor: "pointer",
    color: palette.getContrastText(palette.primary.main),
  },
}));

export const Footer = (): ReactElement => {
  const classes = useStyle();
  const navigator = useNavigate();

  return (
    <div className={classes.root}>
      <div className={classes.textWrapper}>
        <div onClick={() => navigator(IMPRINT_ROUTE)} className={classes.link}>
          <a>Impressum</a>
        </div>
        <div
          onClick={() => navigator(TERMS_OF_USE_ROUTE)}
          className={classes.link}
        >
          <a>Datenschutzerklärung</a>
        </div>
      </div>
    </div>
  );
};
