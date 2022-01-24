import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';

import './App.css';
import questTheme from "./QuestDesignSystemTheme";

import Form3 from "./Form3";


function App() {
  return (
    <ThemeProvider theme={questTheme}>
      <StyledEngineProvider injectFirst>
        <div className="App">
          <Form3 />
        </div>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
