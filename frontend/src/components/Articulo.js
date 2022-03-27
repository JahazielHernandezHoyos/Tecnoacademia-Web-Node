import React from "react";

const Articulo = () => {
  return (
    <>
      <div class="mt-5 shadow-lg p-3 mb-5 bg-body rounded border container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png"
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            ></img>
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">Aprende Python</h1>
            <p class="lead">
              El lenguaje de programación Python es ampliamente utilizado por
              empresas de todo el mundo para construir aplicaciones web,
              analizar datos, automatizar operaciones y crear aplicaciones
              empresariales fiables y escalables..
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <a
                href="https://sites.google.com/misena.edu.co/curso-tic/inicio?authuser=0"
                type="button"
                class="btn btn-primary btn-lg px-4 me-md-2"
              >
                Ver más
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5 shadow-lg p-3 mb-5 bg-body rounded border container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png"
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            ></img>
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">Aprende Javascript</h1>
            <p class="lead">
              ¿Qué es y para qué sirve JavaScript? Resultado de imagen para
              javascript JavaScript es el lenguaje de programación que debes
              usar para añadir características interactivas a tu sitio web, (por
              ejemplo, juegos, eventos que ocurren cuando los botones son
              presionados o los datos son introducidos en los formularios,
              efectos de estilo dinámicos, animación, y mucho más).
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <a
                href="https://sites.google.com/misena.edu.co/curso-tic/actividades-de-aprendizaje?authuser=0"
                type="button"
                class="btn btn-primary btn-lg px-4 me-md-2"
              >
                Ver más
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articulo;
