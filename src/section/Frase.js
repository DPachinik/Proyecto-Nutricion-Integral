import React from "react";
import ContenedorImagen from "../componentes/ContenedorImagen";
const Frase = () => {
  return (
    <div className = "flex bg-black h-[200px] items-center justify-center ">
      <div className="flex justify-around items-center p-10 gap-10 md:h-[100px]">
        <div>
          <ContenedorImagen imagen="comillaInicio" />
        </div>
        <div>
          <h2 className="text-white md:text-xl lg:w-max">
            No debemos comportarnos como si el cuerpo fuera el propósito de
            nuestra vida, sino como si no pudiéramos vivir sin cuidarlo.
          </h2>
        </div>
        <div>
          <ContenedorImagen 
          imagen="comillaCierre"
          />
        </div>
      </div>  
    </div>
  );
};

export default Frase;
