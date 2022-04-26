import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';

import styled from '@emotion/styled';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import moonbaseLightTheme from "./MoonbaseDesignSystemLightTheme";
import Dashboard from "./Dashboard";


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
          <BrowserRouter>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/navbar" element={<Dashboard />} />
              <Route path="/feedbackbar" element={<Dashboard />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
        </MainDiv>
      </StyledEngineProvider>
    </ThemeProvider >
  );
}

export default MoonbaseApp;
