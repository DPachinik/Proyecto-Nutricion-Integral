import React from "react";
import ContenedorImagen from "../componentes/ContenedorImagen";
const Frase = () => {
  return (
    <section className="bg-black h-[150px] justify-between">
      <div className="flex">
        <div className="flex w-1/4 pl-16  items-center">
          <ContenedorImagen imagen="comillaInicio" />
        </div>
        <div className="flex w-1/2  items-center">
          <h2 className="text-white">
            No debemos comportarnos como si el cuerpo fuera el propósito de
            nuestra vida, sino como si no pudiéramos vivir sin cuidarlo.
          </h2>
        </div>
        <div className="w-1/4">
          <ContenedorImagen imagen="comillaCierre" />
        </div>
      </div>
    </section>
  );
};

export default Frase;
