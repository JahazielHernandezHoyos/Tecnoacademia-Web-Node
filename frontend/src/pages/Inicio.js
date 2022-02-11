import React from "react";

//componentes
import Nav from "../components/Nav";
import Gsap from "../components/Gsap";

const Inicio = () => {
  return (
    <>
      <Nav />
      <section className="banner">
        <div className="banner-content">
          <h1 className="text-light">Tecnoacademia del Oriente</h1>
          <a href="/nosotros">Acerca de nosotros</a>
        </div>
      </section>

      <div>
        <Gsap />
      </div>

      <div className="mt-5 seccion3">
        <h1 class="text-center text-light">Lineas de la Tecnoacadamia</h1>
        <div class="text-center ">
          <a type="button" class="m-3 btn btn-outline-light" href="tic.html">
            TIC
          </a>
          <a type="button" class="m-3 btn btn-outline-light" href="diseño.html">
            Diseño y prototipado
          </a>
          <a
            type="button"
            class="m-3 btn btn-outline-light"
            href="https://sites.google.com/misena.edu.co/electrobotica/inicio"
          >
            Electrónica y robótica
          </a>
          <a type="button" class="btn btn-outline-light" href="biotec.html">
            Biotecnología
          </a>
        </div>
      </div>


    </>
  );
};

export default Inicio;
