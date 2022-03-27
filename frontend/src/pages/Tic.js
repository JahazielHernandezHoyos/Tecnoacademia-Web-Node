import React from "react";

//componentes
import Nav from "../components/Nav";
import Articulo from "../components/Articulo";

const Tic = () => {
  return (
    <>
      <Nav />
      <div className="titulosGsap">
        <div className="banner">
          <div className="banner-content" >
            <h1 className="text-light" >Tecnologías de la información y la comunicación</h1>
          </div>
        </div>
      </div>
      <Articulo />
    </>
  );
};
export default Tic;
