import React, { useState } from "react";

const Formulario = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    email: "",
    celular: "",
    mensaje: "",
  });

  const [respuesta, setRespuesta] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch("http://localhost:3001/enviar-formulario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      });

      if (resp.ok) {
        setRespuesta("¡Formulario enviado con éxito!");
        setDatos({
          nombre: "",
          apellido: "",
          email: "",
          celular: "",
          mensaje: "",
        });
        setTimeout(() => {
          setRespuesta("");
        }, 5000);
      } else {
        setRespuesta("Hubo un error al enviar el formulario");
        setTimeout(() => {
          setRespuesta("");
        }, 5000);
      }
    } catch (error) {
      console.log("Error al enviar el formulario");
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center p-8 shadow-lg rounded-lg max-w-4xl mx-auto">
      <div className="w-full md:w-1/2 p-4 space-y-5">
        <h2 className="text-2xl font-bold text-center text-amber-600">CONTACTO</h2>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            name="nombre"
            value={datos.nombre}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-300 transition duration-200"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Apellido"
            name="apellido"
            value={datos.apellido}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-300 transition duration-200"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={datos.email}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-300 transition duration-200"
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            placeholder="Número"
            name="celular"
            value={datos.celular}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-300 transition duration-200"
            onChange={handleChange}
            required
          />
          <textarea
            placeholder="Escriba su mensaje"
            name="mensaje"
            value={datos.mensaje}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-300 transition duration-200"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-gray-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-amber-400 transition duration-200"
          >
            Enviar
          </button>
          {respuesta && (
            <div className="text-gray-800 font-semibold text-center">
              {respuesta}
            </div>
          )}
        </form>
      </div>
      <div className="w-full md:w-1/2 p-6  bg-black rounded-lg shadow-md shadow-amber-300 ">
        <h2 className="text-3xl font-bold text-center text-amber-600 mb-6">
          ATENCIÓN ONLINE
        </h2>
        <ol className="list-none space-y-4 pt-8 text-white">
          <li className="flex items-start">
            <div className="w-2 h-2  bg-amber-300 rounded-full mr-4 mt-1"></div>
            <p className=" text-justify">
              ¡Recibe atención en la comodidad de tu hogar!
            </p>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-amber-300 rounded-full mr-4 mt-1"></div>
            <p className="text-justify">
              ¡Días y horarios más flexibles!
            </p>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-amber-300 rounded-full mr-4 mt-1"></div>
            <p className="text-justify">
              Ahorra tiempo y dinero en tus desplazamientos
            </p>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-amber-300 rounded-full mr-4 mt-1"></div>
            <p className="text-justify">
              Eficacia igual al seguimiento presencial
            </p>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-amber-300 rounded-full mr-4 mt-1"></div>
            <p className="text-justify">
              Sesiones a través de tu Whatsapp o Google Meet
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Formulario;
