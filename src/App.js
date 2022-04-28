import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MoonBaseApp from "./moonbase/MoonbaseApp";
import Q404 from "./moonbase/dashboard/Q404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/moonbase/*" element={<MoonBaseApp />} />
        <Route path="*" element={<Q404 />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
