import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MoonBaseApp from "./moonbase/MoonbaseApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/moonbase/*" element={<MoonBaseApp />} />
        <Route path="*" element={<div />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
