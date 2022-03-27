import React from "react";


//componentes
import Nav from "../components/Nav";
import Gsap from "../components/Gsap";
import bannerlogo from "../assets/bannerlogo.png";

const Inicio = () => {
  return (
    <>
      <Nav />
      <section className="banner">
        <div className="banner-content">
          <img height="300" alt="bannerlogo" src={bannerlogo}/>
          <a href="/nosotros">Acerca de nosotros</a>
        </div>
      </section>

      <div>
        <Gsap />
      </div>

      <div className="mt-5 seccion3">
        <h1 class="text-center text-light">Lineas de la Tecnoacadamia</h1>
        <div class="text-center ">
          <a type="button" class="m-3 btn btn-outline-light" href="/tic">
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
