import React from "react";
import ContedorImagen from '../componentes/ContenedorImagen'
const About = () => {
  return (
    <section id="SobreMi" className=" pt-[50px] p-12 ">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 mx-4">
        <div>
          <ContedorImagen 
          imagen = 'jessy1'
          />
        </div>
        <div className=" flex flex-col items-center text-justify space-y-4 lg:pt-[50px] text-sm md:text-md lg:text-lg text-amber-50">
          <h2>
            <span className="text-lg font-semibold font-inter">Hola, como estamos? </span><br /> <span className="font-inter font-semibold text-[26px] text-orange-500">Soy Jessica Pachinik </span>- <span className="text-amber-300">Nutricionista clínica, deportiva y estética.</span>
          </h2>
          <p>
            Apasionada por un estilo de vida saludable, que involucra y defiende
            el concepto <span className="text-amber-300">tricotómico = cuerpo, mente y alma.</span> Mi vida está
            dedicada a estudiar resoluciones para cada paciente con el fin de
            facilitar su proceso de búsqueda de una mejor calidad de vida,
            autoestima y evolución.
            <br />
            <span className="text-amber-300">¡Las metas de mis pacientes se convierten en mis metas!</span>
          </p>
          <p>
            Cada enfoque es 100% individualizado y tiene en cuenta no sólo la
            composición corporal actual, sino también la historia, el entorno y
            las posibilidades.
          </p>
          <p>
            Atiendo cada perfil de paciente, y modalidad deportiva... la idea es
            ayudar a quienes buscan un mejor rendimiento, cambios en la
            composición corporal, ya sea pérdida de peso, definición,
            hipertrofia o una mejor performance deportiva.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
