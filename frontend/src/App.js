import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

// componentes://
import Inicio from './components/Inicio';
import Tic from './components/Tic';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/tic" element={<Tic />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
