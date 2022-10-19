import React from "react"
import { CssBaseline } from "@mui/material"
import { HelmetProvider } from "react-helmet-async"
import { ThemeProvider } from "./theme/ThemeProvider"
import { StyledEngineProvider } from "@mui/material/styles"
import {MainPage} from "./page/main/MainPage";
import {KoFiButton} from "./components/KoFiButton";


export const App = () => {
  return (
        <HelmetProvider>
          <CssBaseline />
          <StyledEngineProvider injectFirst>
            <ThemeProvider>
                <MainPage />
            </ThemeProvider>
          </StyledEngineProvider>
            <KoFiButton username={"mansi1"} label={"Support me"} />
        </HelmetProvider>
  )
}
