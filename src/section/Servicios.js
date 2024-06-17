import React from "react";
import FaseConsulta from "../componentes/FaseConsulta";
import ElementoColumna from "../componentes/ElementoColumna";
import Tratamientos from "../componentes/Tratamiento";
import FaseConsultaDos from "../componentes/FaseConsultaDos";

const Services = () => {
  return (
    <div id="Servicios">
      <div>
        <FaseConsulta />
        <ElementoColumna />
        <FaseConsultaDos />
      </div>
      <div>
        <Tratamientos
          imagen=""
          tratamiento="REEDUCACIÓN ALIMENTAR"
          parrafoUno="Si tienes dificultades para adaptar una dieta saludable a tu rutina, tienes muchas dudas sobre cómo comer mejor y qué alimentos elegir para estar verdaderamente saludable."
          parrafoDos="Te ayudaré a simplificar tu dieta para que se ajuste a tu rutina exactamente como es."
        />
        <Tratamientos
          imagen=""
          tratamiento="PÉRDIDA DE PESO"
          parrafoUno="Perder peso va mucho más allá de una Dieta. Cuidar tu cuerpo, mente y emociones es el camino hacia el cambio real y ser más ligero en la vida y en la balanza."
          parrafoDos="Y, si sientes que hay un bloqueo o saboteador mental que te lo está poniendo difícil, tengo trabajo muy enfocado en ayudarte a desbloquear estos saboteadores para acelerar tu pérdida de peso."
        />
        <Tratamientos
          imagen=""
          tratamiento="TOLERANCIA Y ALERGIAS A LOS ALIMENTOS"
          parrafoUno="Si te sientes hinchado, con gases, heces blandas o muy secas, reflujo, dolor abdominal y otros síntomas en el intestino o el estómago, esto no es normal."
          parrafoDos="El tratamiento nutricional te ayuda a comprender y afrontar de la mejor forma posible las intolerancias alimentarias o los problemas de digestión."
        />
        <Tratamientos
          imagen=""
          tratamiento="ESTÉTICA"
          parrafoUno="Si buscas mejorar la calidad de tu piel, reducir espinillas, manchas y envejecimiento, tener un cabello sano sin caída y unas uñas fuertes, fuertes sin imperfecciones, sin estrías, sin roturas, reducir la celulitis, previniendo el envejecimiento, sabes que Nutrición de El interior hacia fuera es el principal aliado de la estética."
        />
        <Tratamientos
          imagen=""
          tratamiento="CALIDAD DE VIDA"
          parrafoUno="Sentirse muy cansado, falta de energía, dolor de cabeza, mala digestión, cambios de humor, falta de energía… Son algunas de las señales de que tu calidad de vida es baja."
          parrafoDos=" Mereces vivir con plena energía y vitalidad. Para tratar estos síntomas, planifico una dieta y suplementación (si es necesario) según las necesidades de su cuerpo."
        />
      </div>
      <div>
        <button>CONTACTO</button>
      </div>
    </div>
  );
};

export default Services;
