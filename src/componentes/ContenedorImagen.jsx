import React from "react";

const ContenedorImagen = ({ imagen }) => {
  return (
    <>
      <img
        className="imagen-testimonio full h-auto object-cover rounded-lg shadow-md hover:opacity-75 gradient-mask"
        src={require(`../imagenes/foto-${imagen}.png`)}
        alt={`foto de ${imagen} `}
      />
    </>
  );
};

export default ContenedorImagen;
