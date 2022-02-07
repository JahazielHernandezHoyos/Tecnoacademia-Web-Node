import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

// componentes://
import Inicio from './components/Inicio';
import Blog from './components/Blog';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Inicio}/>
        <Route path="/Blog" element={Blog}/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
