import React from "react";

const ContenedorTextoIntro = () => {
  return (
    <>
      <div>
        <h2 className="font-inherit font-semibold text-center text-lg">
          <span className=" text-lime-500">
            Acabas de encontrar al Nutricionista con experiencia y conocimiento
            de lo último en el campo, estoy seguro de que puedo ayudarte.
          </span>
        </h2>
        <p className="text-slate-50 pt-6"></p>
        <p className="text-slate-50 pt-6 text-justify text-sm md:text-md lg:text-lg ">
          <span className="text-orange-600">Nutrición Integral </span> +
          <span className="text-lime-500"> Coaching </span>= ¡RESULTADOS PARA
          TI!
          <br />
          Planifico una dieta acorde a las necesidades de tu cuerpo, Tu rutina y
          realidad. Combinado con el cuidado de tu relación con la comida,
          ofrezco apoyo en <span className="text-lime-200">motivación</span>,
          <span className="text-orange-200"> concentración</span> y{" "}
          <span className="text-red-200">actitud </span> durante el proceso de
          reeducación alimentaria.
          <br /> De esta manera podremos conseguir{" "}
          <span className="text-lime-500">MEJORES RESULTADOS</span> manteniendo
          tu cuerpo y mente sanos, con la vitalidad que mereces.
        </p>
      </div>
    </>
  );
};

export default ContenedorTextoIntro;
