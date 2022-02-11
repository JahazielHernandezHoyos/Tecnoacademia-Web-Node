import React from "react";

//componentes
import Nav from "../components/Nav";
import Articulo from "../components/Articulo";

const Tic = () => {
  return (
    <>
      <Nav />
      <div class="titulosGsap">
        <div class="banner">
          <div class="banner-content">
            <h1 class="text-light">Tecnologías de la información y la comunicación</h1>
          </div>
        </div>
      </div>
      <Articulo />
    </>
  );
};
export default Tic;
