import React, { Fragment } from "react";

const Inicio = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-pagina sticky-sm-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="Index.html">
            Tecnoacademia
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown"></li>
              <li className="px-2 nav-item">
                <a
                  className="nav-link btn btn-primary"
                  href="#scrollspyHeading1"
                >
                  ¿Quiénes somos?
                </a>
              </li>
              <li className="px-2 nav-item">
                <a
                  className="nav-link btn btn-primary"
                  href="#scrollspyHeading1"
                >
                  Modelo pedagógico
                </a>
              </li>
              <li className="px-2 nav-item">
                <a className="nav-link btn btn-primary" href="galeria.html">
                  Galería
                </a>
              </li>
              <li className="px-2 nav-item">
                <a
                  className="nav-link btn btn-primary"
                  aria-current="page"
                  href="Blog.html"
                >
                  Blog
                </a>
              </li>
              <li className="px-2 nav-item">
                <a
                  className="nav-link btn btn-primary"
                  href="#scrollspyHeading3"
                >
                  Participación en eventos
                </a>
              </li>
              <li className="px-2 nav-item">
                <a
                  className="nav-link btn btn-primary"
                  href="#scrollspyHeading4"
                >
                  Contacto
                </a>
              </li>
              <li className="px-2 nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle btn btn-primary"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Nuestras líneas
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="tic.html">
                      TIC
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="diseño.html">
                      Diseño y prototipado
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://sites.google.com/misena.edu.co/electrobotica/inicio"
                    >
                      Electrónica y robótica
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="biotec.html">
                      Biotecnología
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="banner">
        <div className="banner-content">
          <h1 className="text-light">Tecnoacademia del Oriente</h1>
          <a href="#">Acerca de nosotros</a>
        </div>
      </section>

      <div className="pad">
        <h1 className="text-center">¿Qué es?</h1>
        <p className="text-center p">
          La tecnoacademia genera un escenario de aprendizaje donde los niños y
          jóvenes de educación básica secundaria y media pueden potenciar en el
          SENA sus capacidades de apropiación hacia la ciencia y la tecnología.
          La formación en las tecnoacademias surge de una intervención de alto
          impacto que busca fomentar el desarrollo de competencias en Ciencia,
          Tecnología e Innovación en esta población, para generar competitividad
          e igualdad de oportunidades para los estudiantes, mediante una
          educación de alta calidad que promueve además sus habilidades de
          comunicación y familiarización con las tecnologías emergentes. En las
          tecnoacademias, los estudiantes desarrollan sus competencias a través
          de la formación y la ejecución de proyectos de investigación y
          desarrollo experimental en una o varias ramas de las ciencias básicas
          y aplicadas como:
        </p>
      </div>

      <div className="seccion3">
        <h1 class="text-center text-light">Lineas de la Tecnoacadamia</h1>
        <div class="text-center py-6 ">
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

      
    </Fragment>
  );
};

export default Inicio;
