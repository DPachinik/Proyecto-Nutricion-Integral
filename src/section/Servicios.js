import React from "react";
import Contenedor from "../componentes/Contenedor";
import Seguimiento from "../componentes/Seguimiento";

const Services = () => {
  return (
    <div id="Servicios" className="mx-auto p-12">
      <div className="w-full  md:p-20 grid grid-cols-1 md:grid-cols-2 gap-14 ">
        <div className="mb-8 md:col-span-2 text-center">
          <h2 className="text-4xl text-amber-50 font-semibold">
            <span className="text-orange-500">¿</span>Cómo funciona la consulta<span className="text-orange-500">?</span>
          </h2>
        </div>
        <div className="md:col-start-1  md:row-span-2 ">
          <Contenedor
            numeracion="1°"
            fase="CONSULTA PREVIA"
            texto1="Agenda tu cita vía WhatsApp en el mejor día y hora para ti, según la disponibilidad de horarios en tu calendario."
            className="max-w-md mx-auto"
          />
        </div>
        <div className="md:col-start-2 md:col-span-2 md:row-span-2 md:pt-[200px]">
          <Contenedor
            numeracion="2°"
            fase="CONSULTA Y EVALUACIÓN"
            texto1="El día de la consulta te presentaré mi forma de trabajar y ver la nutrición y la historia de algunos pacientes que con el mismo objetivo que el tuyo han tenido resultados increíbles."
            texto2="A continuación, hablaremos de tus objetivos, historial dietético, uso de suplementos, otros recursos y tu historial con el ejercicio físico."
            texto3="Por último y no menos importante, realizaremos tu valoración física completa, donde será posible identificar:"
            lista1="- Fortalezas y debilidades de tu físico."
            lista2="- Circunferencias"
            lista3="- Porcentaje de grasa."
            className="max-w-md mx-auto"
          />
        </div>
        <div className="md:col-start-1 md:row-span-2  pb-[50px]">
          <Contenedor
            numeracion="3°"
            fase="HACER UN SEGUIMIENTO"
            texto1="Luego de enviar tu plan de alimentación con toda la orientación necesaria, tendrás acceso a mi WhatsApp para hacer preguntas y enviar comentarios durante el período de 30 días, tantas veces como quieras."
            texto2="Recibirás tu plan en una aplicación para Android y iPhone y también podrás imprimirlo si lo deseas."
            className="max-w-md mx-auto"
          />
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-4xl text-amber-50 font-semibold text-center pb-8"><span className="text-orange-500">¿</span>Por qué optar por un seguimiento nutricional<span className="text-orange-500">?</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] p-4">
          <Seguimiento 
          imagen="adelgazamiento" 
          texto="Adelgazamiento Saludable" 
          />
          <Seguimiento 
          imagen="nutriologa" 
          texto="Nutrología" 
          />
          <Seguimiento 
          imagen="deporte-nutricion" 
          texto="Nutrición Deportiva" 
          />
          <Seguimiento 
          imagen="hipertrofia" 
          texto="Hipertrofia" 
          />
          <Seguimiento 
          imagen="performance" 
          texto="Performance" 
          />
          <Seguimiento 
          imagen="calidadvida" 
          texto="Calidad de Vida" 
          />
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-md">
          CONTACTO
        </button>
      </div>
    </div>
  );
};

export default Services;
