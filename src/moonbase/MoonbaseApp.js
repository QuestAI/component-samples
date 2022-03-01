import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';

import styled from '@emotion/styled';

import moonbaseTheme from "./MoonbaseDesignSystemTheme";
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
    <ThemeProvider theme={moonbaseTheme}>
      <StyledEngineProvider injectFirst>
        <MainDiv>
          <Dashboard />
        </MainDiv>
      </StyledEngineProvider>
    </ThemeProvider >
  );
}

export default MoonbaseApp;
