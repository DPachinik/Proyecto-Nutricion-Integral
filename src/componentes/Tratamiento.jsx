import React from "react";

const Tratamiento = ({ imagen, tratamiento, parrafoUno, parrafoDos }) => {
  return (
    <section>
      <div>
        <img></img>
      </div>
      <div>
        <h2>{tratamiento} </h2>
      </div>
      <div>
        <p> {parrafoUno} </p>
        <p> {parrafoDos} </p>
      </div>
    </section>
  );
};

export default Tratamiento;
