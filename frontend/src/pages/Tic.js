import React from "react";

//componentes
import Nav from "../components/Nav";
import Articulo from "../components/Articulo";

const Tic = () => {
  return (
    <>
      <Nav />
      <div className="titulosGsap">
        <div className="banner" style={{height: "calc(40vh - 50px)"}}>
          <div className="banner-content" >
            <h1 className="text-light" >Tecnologías de la información y la comunicación</h1>
          </div>
        </div>
      </div>
      <Articulo />
      <iframe style={{width:"100%", height: "1000px"}} src="https://sites.google.com/misena.edu.co/curso-tic/actividades-de-aprendizaje?authuser=0" title="diseño"></iframe>
    </>
  );
};
export default Tic;
