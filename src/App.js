import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import A3 from './scenes/A3';
import A1 from './scenes/A1';
import A2 from './scenes/A2';
import A4 from './scenes/A4';
import A5 from './scenes/A5';
import B1 from './scenes/B1';
import B2 from './scenes/B2';
import B3 from './scenes/B3';
import B4 from './scenes/B4';
import B6 from './scenes/B6';
import B7 from './scenes/B7';
import B8 from './scenes/B8';
import B9 from './scenes/B9';
import B10 from './scenes/B10';
import B11 from './scenes/B11';
import B12 from './scenes/B12';
import C1 from './scenes/C1';
import C2 from './scenes/C2';
import C3 from './scenes/C3';
import C4 from './scenes/C4';
import C5 from './scenes/C5';
import C6 from './scenes/C6';
import Kios from './scenes/KIOS';
import NPKL from './scenes/NPKL';
import Reactec from './scenes/Reactec';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Routes>
              <Route
                path="/"
                element={<Dashboard />}
              />
              <Route
                path="/8"
                element={<NPKL />}
              />
              <Route
                path="/4"
                element={<Reactec />}
              />
               <Route
                path="/ki"
                element={<Kios />}
              />
               <Route
                path="/A1"
                element={<A1 />}
              />
              <Route
                path="/A2"
                element={<A2 />}
              />
              <Route
                path="/A3"
                element={<A3 />}
              />
              <Route
                path="/A4"
                element={<A4 />}
              />
              <Route
                path="/A5"
                element={<A5 />}
              />
              <Route
                path="/B1"
                element={<B1 />}
              />
            <Route
                path="/B2"
                element={<B2 />}
              /><Route
                path="/B3"
                element={<B3 />}
              /><Route
                path="/B4"
                element={<B4 />}
              /><Route
                path="/B6"
                element={<B6 />}
              /><Route
                path="/B7"
                element={<B7 />}
              /><Route
                path="/B8"
                element={<B8 />}
              /><Route
                path="/B9"
                element={<B9 />}
              /><Route
                path="/B10"
                element={<B10 />}
              /><Route
                path="/B11"
                element={<B11 />}
              /><Route
                path="/B12"
                element={<B12 />}
              /><Route
                path="/C1"
                element={<C1 />}
              /><Route
                path="/C2"
                element={<C2 />}
              /><Route
                path="/C3"
                element={<C3 />}
              /><Route
                path="/C4"
                element={<C4 />}
              />
              <Route
                path="/C5"
                element={<C5 />}
              /><Route
                path="/C6"
                element={<C6 />}
              />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
