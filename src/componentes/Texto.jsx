import React from "react";

const Texto = ({ titulo, texto }) => {
  return (
    <div id="SobreMi" className="flex bg-black h-[100px] items-center w-full">
      <h2 className="font-sans font-Roboto  text-slate-50 text-xl p-4">
        {titulo}
      </h2>
      <p>{}</p>
    </div>
  );
};

export default Texto;
