import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-pagina sticky-sm-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
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
              {/* <li className="px-2 nav-item">
                <a
                  className="nav-link btn btn-primary"
                  href="#scrollspyHeading1"
                >
                  ¿Quiénes somos?
                </a>
              </li> */}
              {/* <li className="px-2 nav-item">
                <a
                  className="nav-link btn btn-primary"
                  href="#scrollspyHeading1"
                >
                  Modelo pedagógico
                </a>
              </li> */}
              {/* <li className="px-2 nav-item">
                <a className="nav-link btn btn-primary" href="galeria.html">
                  Galería
                </a>
              </li> */}
              {/* <li className="px-2 nav-item">
                <a
                  className="nav-link btn btn-primary"
                  aria-current="page"
                  href="Blog.html"
                >
                  Blog
                </a>
              </li> */}
              {/* <li className="px-2 nav-item">
                <a
                  className="nav-link btn btn-primary"
                  href="#scrollspyHeading3"
                >
                  Participación en eventos
                </a>
              </li> */}
              {/* <li className="px-2 nav-item">
                <a
                  className="nav-link btn btn-primary"
                  href="#scrollspyHeading4"
                >
                  Contacto
                </a>
              </li> */}
              <li className="px-2 nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle btn btn-primary"
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  Nuestras líneas
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/tic">
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
    </>
  );
};
export default Nav;
