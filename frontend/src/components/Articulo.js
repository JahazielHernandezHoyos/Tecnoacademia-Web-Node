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
            <h1 class="display-5 fw-bold lh-1 mb-3">
              Python clases
            </h1>
            <p class="lead">
                Python es un lenguaje de programación interpretado, de tipado dinámico, aprende lecciones sobre programación orientada a objetos como tambien Data Science en conjunto con inteligencia artificial.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Ver lecciones
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Lo que puedes hacer
              </button>
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
            <h1 class="display-5 fw-bold lh-1 mb-3">
              Javascript clases
            </h1>
            <p class="lead">
                Javascript es un lenguaje de programación interpretado, de tipado dinámico, aprende lecciones sobre programación orientada a objetos como tambien Data Science en conjunto con inteligencia artificial.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Ver lecciones
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Lo que puedes hacer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articulo;

