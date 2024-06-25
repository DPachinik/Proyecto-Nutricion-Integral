import React from "react";

const Contenedor = ({numeracion, fase,texto1, texto2, texto3, lista1, lista2,lista3}) => {
  return (
    <div>
      <div className="p-4 pb-6 flex-row w-auto text-white border bg-black border-amber-300  rounded-md shadow-lg shadow-amber-300 text-sm md:text-md  hover:shadow-amber-500">
        <h2 className="pb-6 text-amber-600 font-semibold  text-xl"><span className="text-5xl font-serif text-slate-600 "> {numeracion}  </span > {fase} </h2>
        <p className=''>{texto1}</p>
        <p>{texto2}</p>
        <p>{texto3}</p>
        <ol className="flex flex-col ">
          <li className="ml-12">{lista1}</li>
          <li className="ml-12">{lista2}</li>
          <li className="ml-12">{lista3}</li>
        </ol>
      </div>
    </div>
  );
};

export default Contenedor;
