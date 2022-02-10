import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./gsap.css";
gsap.registerPlugin(ScrollTrigger);

//elementos
// const principal = document.querySelector("#scrolltrigger")

const Gsap = () => {
    
    useEffect(() => {
        

        gsap.fromTo(".Container", {
            autoAlpha: 0,
        },{
            duration: 1,
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: {
                trigger: ".Container",
                start: "top center+=100",
                toggleActions: "play none none reverse",
                markers: true,
        }
    });

    }, []);

    return (
    <>
      <div className="Container">
        <div className="Wrapper">
          <div className="Info">
            <div className="CenterInfo">
              <h2 id="GsapTitulo">Bienvenido a </h2>
              <h2 id="GsapTitulo">Tecnoacademia del oriente</h2>
              <h1 id="GsapTitulo2">¿Qué es?</h1>
              <p>
                La tecnoacademia genera un escenario de aprendizaje donde los
                niños y jóvenes de educación básica secundaria y media pueden
                potenciar en el SENA sus capacidades de apropiación hacia la
                ciencia y la tecnología. La formación en las tecnoacademias
                surge de una intervención de alto impacto que busca fomentar el
                desarrollo de competencias en Ciencia, Tecnología e Innovación
                en esta población, para generar competitividad e igualdad de
                oportunidades para los estudiantes, mediante una educación de
                alta calidad que promueve además sus habilidades de comunicación
                y familiarización con las tecnologías emergentes. En las
                tecnoacademias, los estudiantes desarrollan sus competencias a
                través de la formación y la ejecución de proyectos de
                investigación y desarrollo experimental en una o varias ramas de
                las ciencias básicas y aplicadas como:
              </p>
              <button>Ver areas</button>
            </div>
          </div>
          <div className="Imagenes">
            <div className="Colum1">
              <img
                id="gsap-imagenes"
                src="https://actuaria.com.ec/wp-content/uploads/2021/01/VECTORES-METODOLOGIA.png"
                alt=""
              />
            </div>
            <div className="Colum2">
              <img
                id="gsap-imagenes"
                src="https://c.tenor.com/NBu8UN5btUoAAAAi/vector-computer.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gsap;
