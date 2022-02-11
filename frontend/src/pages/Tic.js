import React from "react";

//componentes
import Nav from "../components/Nav";
import Articulo from "../components/Articulo";

const Tic = () => {
  return (
    <>
      <Nav />
      <section class="bannerm">
        <div class="banner-contentm">
          <h1 class="text-light">Tecnologías de la información y la comunicación</h1>
        </div>
      </section>
      <Articulo />
    </>
  );
};
export default Tic;
