import React from 'react';

const Productos = ({ imagen, producto, descripcion, precio }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden w-[90%] max-w-[300px] mx-auto">
      <div className="flex-shrink-0">
        <img
          className="w-full h-[250px] object-cover"
          src={require(`../imagenes/foto-${imagen}.jpeg`)}
          alt={`foto de ${imagen}`}
        />
      </div>
      <div className="flex-grow p-4 text-center">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{producto}</h3>
        <p className="text-sm text-gray-600 mb-4">{descripcion}</p>
        <p className="text-lg font-semibold text-gray-800">{precio}</p>
      </div>
    </div>
  );
};

export default Productos;