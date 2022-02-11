import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//elementos
// const principal = document.querySelector("#scrolltrigger")

const Gsap = () => {
  useEffect(() => {

    gsap.to(".titulosGsap", {
      duration: 1,
      opacity: 0,
      y: -100
    });


    gsap.fromTo(
      ".Container1",
      {
        autoAlpha: 0,
      },
      {
        duration: 1,
        autoAlpha: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".Container1",
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".Container1",
      {
        autoAlpha: 0,
      },
      {
        duration: 1,
        autoAlpha: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".Container1",
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".seccion3",
      {
        autoAlpha: 0,
      },
      {
        duration: 1,
        autoAlpha: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".seccion3",
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.from(
      ".banner",
      {
        autoAlpha: 1,
      },
      {
        duration: 1,  autoAlpha: 0,
      }
    );

  }, []);

  return (
    <>
      <div className="Container1">
        <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 class="display-4 fw-bold lh-1">¿Que es?</h1>
            <p class="lead">
              En las tecnoacademias, los estudiantes desarrollan sus
              competencias a través de la formación y la ejecución de proyectos
              de investigación y desarrollo experimental en una o varias ramas
              de las ciencias básicas y aplicadas.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"></div>
          </div>
          <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              class="rounded-lg-3"
              src="https://actuaria.com.ec/wp-content/uploads/2021/01/VECTORES-METODOLOGIA.png"
              alt="metologias"
              width="800"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gsap;
