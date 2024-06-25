import React from 'react'

const Productos = ({imagen,producto,descripcion,precio}) => {
  return (
    <div className='flex flex-col'>
      <div className=''>
        <div className=''>
          <img
            className="imagen-testimonio full h-[100px] object-cover rounded-lg shadow-md hover:opacity-75 gradient-mask"
            src={require(`../imagenes/foto-${imagen}.jpeg`)}
            alt={`foto de ${imagen} `}
          />
        </div>
        <p>{producto}</p>
        <p>{descripcion}</p>
        <p>{precio}</p>
      </div>
    </div>
  )
}

export default Productos
