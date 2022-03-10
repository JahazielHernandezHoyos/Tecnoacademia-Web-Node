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
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/tic" element={<Tic />} />
        <Route path="/gsap" element={<Gsap />} />
        <Route path="/login" element={<Login />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
