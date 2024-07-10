
import React from 'react';
import Productos from '../componentes/Productos';

function Tienda({ isAuthenticated }) {
  return (
    <div>
      <h2>Store</h2>
        <div className="productos">
            <Productos
            imagen="kiwi"
            producto="Kiwi Deshidratado"
            descripcion=""
            precio="12.000 gs."
            />
            <Productos
            imagen="banana"
            producto="Banana deshidratada"
            descripcion=""
            precio="5.000 gs."
            />
            <Productos
            imagen="arandano"
            producto="arandano Deshidratado"
            descripcion=""
            precio="12.000 gs."
            />
            <Productos
            imagen="mix"
            producto="Tuti fruti"
            descripcion="Mix de frutas deshidratadas"
            precio="10.000 gs"
            />
            <Productos
            imagen="canela"
            producto="Canela"
            descripcion="Palitos de Canela"
            precio="5.000 gs."
            />
            <Productos
            imagen="mate"
            producto="Mate Completo"
            descripcion="Hierbas medicinales para mate"
            precio="4.000 gs."
            />
        </div>
      <button disabled={!isAuthenticated}>
        Contactar por WhatsApp
      </button>
      {!isAuthenticated && <p className='text-white'>Inicia sesión para contactar por WhatsApp</p>}
    </div>
  );
}

export default Tienda;
