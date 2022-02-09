import React, {useEffect} from 'react';
import {gsap, Power4} from 'gsap';
import "./gsap.css";

const Gsap = () => {

    useEffect(() => {
        const timeline = gsap.timeline({
            defaults: {
              opacity: 0,
              duration:2, 
              stagger: 0.5, 
              ease: Power4.easeOut,
            },
        });

        const Imagenes = document.querySelectorAll("#gsap-imagenes");
        const Titulo = document.querySelectorAll("#GsapTitulo");
        const Titulo2 = document.querySelectorAll("#GsapTitulo2");

        

        timeline.from(Titulo, { x:50 ,y: -300})
        .from(Titulo2, {x:-50, y: -20}, "-=1.3")
        .from(Imagenes, {y: 60, stagger:0.3, scrollTrigger: ".trigger"}, "-=1.5");
        
    }, []);



  return (
    <>   
        <div class="Container">
          <div class="Wrapper">
            <div class="Info">
                <div class="CenterInfo">
                    <h2 id="GsapTitulo">Bienvenido a </h2>
                    <h2 id="GsapTitulo">Tecnoacademia del oriente</h2>
                    <h1 id="GsapTitulo2">¿Qué es?</h1>
                    <p>La tecnoacademia genera un escenario de aprendizaje donde los niños y jóvenes de educación básica secundaria y media pueden potenciar en el SENA sus capacidades de apropiación hacia la ciencia y la tecnología. La formación en las tecnoacademias surge de una intervención de alto impacto que busca fomentar el desarrollo de competencias en Ciencia, Tecnología e Innovación en esta población, para generar competitividad e igualdad de oportunidades para los estudiantes, mediante una educación de alta calidad que promueve además sus habilidades de comunicación y familiarización con las tecnologías emergentes. En las tecnoacademias, los estudiantes desarrollan sus competencias a través de la formación y la ejecución de proyectos de investigación y desarrollo experimental en una o varias ramas de las ciencias básicas y aplicadas como:</p>
                    <button>Ver areas</button>
                </div>
            </div>
            <div class="Imagenes">
                <div class="Colum1">
                    <img id="gsap-imagenes" src="https://actuaria.com.ec/wp-content/uploads/2021/01/VECTORES-METODOLOGIA.png" alt=""/>
                </div>
                <div class="Colum2">
                    <img id="gsap-imagenes" src="https://c.tenor.com/NBu8UN5btUoAAAAi/vector-computer.gif" alt=""/>
                </div>
            </div>
          </div>
        </div>
    </>); 
};

export default Gsap;
