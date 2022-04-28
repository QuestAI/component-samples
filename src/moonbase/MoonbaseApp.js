import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';

import styled from '@emotion/styled';

import {
  Routes,
  Route,
} from "react-router-dom";

import moonbaseLightTheme from "./dashboard/MoonbaseDesignSystemLightTheme";
import Dashboard from "./dashboard/Dashboard";
import NavbarPage from "./dashboard/NavbarPage";
import FeedbackBarPage from "./dashboard/FeedbackBarPage";
import ProductsPage from "./payment/ProductsPage";
import Q404 from "./dashboard/Q404";


const MainDiv = styled("div")({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
});

function MoonbaseApp() {
  return (
    <ThemeProvider theme={moonbaseLightTheme}>
      <StyledEngineProvider injectFirst>
        <MainDiv>
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="navbar" element={<NavbarPage />} />
            <Route path="feedbackbar" element={<FeedbackBarPage />} />
            <Route path="payment" element={<ProductsPage />} />
            <Route path="/" element={<NavbarPage />} />
            <Route path="*" element={<Q404 />} />
          </Routes>
        </MainDiv>
      </StyledEngineProvider>
    </ThemeProvider >
  );
}

export default MoonbaseApp;
