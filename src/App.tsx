import React, { lazy, ReactElement, Suspense } from "react";
import { CssBaseline } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./theme/ThemeProvider";
import { StyledEngineProvider } from "@mui/material/styles";
import { KoFiButton } from "./components/KoFiButton";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { IMPRINT_ROUTE, MAIN_ROUTE, TERMS_OF_USE_ROUTE } from "./routes";
import { SuspenseFallback } from "./components/SuspenseFallback";

const MainPage = lazy(() => import("./page/main/MainPage"));
const ImprintPage = lazy(() => import("./page/ImprintPage"));
const TermsOfUsePage = lazy(() => import("./page/TermsOfUsePage"));

export const App = (): ReactElement => {
  return (
    <HelmetProvider>
      <CssBaseline />
      <StyledEngineProvider injectFirst>
        <ThemeProvider>
          <Suspense fallback={<SuspenseFallback />}>
            <BrowserRouter>
              <Routes>
                <Route path={MAIN_ROUTE} element={<MainPage />} />
                <Route path={IMPRINT_ROUTE} element={<ImprintPage />} />
                <Route path={TERMS_OF_USE_ROUTE} element={<TermsOfUsePage />} />
                <Route path={"*"} element={<Navigate to={MAIN_ROUTE} />} />
              </Routes>
            </BrowserRouter>
          </Suspense>
        </ThemeProvider>
      </StyledEngineProvider>
      <KoFiButton username={"mansi1"} label={"Support me"} />
    </HelmetProvider>
  );
};
