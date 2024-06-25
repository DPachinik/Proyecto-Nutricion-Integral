

import React from "react";

const Seguimiento = ({ imagen, texto}) => {
  return (
    <div className="relative flex items-center justify-center sm:w-full h-48 bg-cover bg-center rounded-xl" style={{ backgroundImage: `url(${require(`../imagenes/${imagen}.jpg`)})` }}>
      <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
      <h2 className="text-white sm:text-[10px] md:text-[15px] lg:text-[20px] z-10  p-2  font-semibold">{texto}</h2>
    </div>
  );
};

export default Seguimiento;