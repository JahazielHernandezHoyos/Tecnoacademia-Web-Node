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
import Blogs from "./pages/Blogs";
import Design from './pages/Design';
import Galeria from './pages/Galeria';
import Biotecnologia from './pages/Biotecnologia';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/tic" element={<Tic />} />
        <Route path="/gsap" element={<Gsap />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/design" element={<Design />} />
        <Route path="/biotecnologia" element={<Biotecnologia />} />
        <Route path="/galeria" element={<Galeria />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
