import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

// componentes://
import Inicio from './pages/Inicio';
import Tic from './pages/Tic';
import Gsap from './components/Gsap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/tic" element={<Tic />} />
        <Route path="/gsap" element={<Gsap />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
