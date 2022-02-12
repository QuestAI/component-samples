import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';

import styled from '@emotion/styled';

import './App.css';
import questTheme from "./QuestDesignSystemTheme";

import Form3 from "./Form3";

import EventList from "./EventList";
//import CardList from "./BlingVC/CardList"

const MainDiv = styled("div")({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});


function App() {
  return (
    <ThemeProvider theme={questTheme}>
      <StyledEngineProvider injectFirst>
        <MainDiv>
          <Form3 />
        </MainDiv>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
