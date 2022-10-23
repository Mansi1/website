import React, { PropsWithChildren, ReactElement } from "react";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Main } from "./Main";
import { Footer } from "./Footer";

const useStyle = makeStyles({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    marginTop: 25,
    paddingBottom: 25,
    flex: 1,
  },
});

export const PageLayout = ({
  children,
}: PropsWithChildren<unknown>): ReactElement => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Main />
      <Container maxWidth={"desktop"} className={classes.content}>
        {children}
      </Container>
      <Footer />
    </div>
  );
};
