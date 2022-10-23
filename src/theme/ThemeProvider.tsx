import React, { PropsWithChildren, ReactElement } from "react";
import { createTheme, ThemeProvider as ThemeProviderMat } from "@mui/material";
import { globalStyles, themeOptions } from "./themeOptions";
import GlobalStyles from "@mui/material/GlobalStyles";

export const ThemeProvider = ({
  children,
}: PropsWithChildren<unknown>): ReactElement => {
  return (
    <ThemeProviderMat theme={createTheme(themeOptions)}>
      <GlobalStyles styles={globalStyles} />
      {children}
    </ThemeProviderMat>
  );
};
