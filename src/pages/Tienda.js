import React from "react";
import Productos from "../componentes/Productos";


const Tienda = () => {
  return (
    <section className="bg-slate-700">
      <div>
        <Productos
        imagen='kiwi'
        producto='Kiwi Deshidratado'
        descripcion=''
        precio='12.000 gs.'
        />
        <Productos
        imagen='banana'
        producto='Banana deshidratada'
        descripcion=''
        precio='5.000 gs.'
        />
        <Productos
        imagen='arandano'
        producto='arandano Deshidratado'
        descripcion=''
        precio='12.000 gs.'
        />
        <Productos
        imagen='mix'
        producto='Tuti fruti'
        descripcion='Mix de frutas deshidratadas'
        precio='10.000 gs'
        />
        <Productos
        imagen='canela'
        producto='Canela'
        descripcion='Palitos de Canela'
        precio='5.000 gs.'
        />
        <Productos
        imagen='mate'
        producto='Mate Completo'
        descripcion='Hierbas medicinales para mate'
        precio='4.000 gs.'
        />
      </div>
    </section>
  );
};

export default Tienda;
