import React, { useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Productos from "../componentes/Productos";

function Tienda({ isAuthenticated, setIsAuthenticated }) {
  const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre login y registro
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Estado de carga

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    setLoading(true); // Iniciar el estado de carga
    const url = isLogin
      ? "http://localhost:5000/api/login"
      : "http://localhost:5000/api/register";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        if (isLogin) {
          localStorage.setItem("token", data.token);
          setIsAuthenticated(true);
        } else {
          alert("Usuario registrado correctamente");
          setIsLogin(true); // Cambiar a login después del registro exitoso
        }
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); // Finalizar el estado de carga
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = process.env.NUM_WHATS;
    const message = "Hola, estoy interesado en sus productos.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <h2 className="text-center font-semibold p-4 my-4 text-amber-300 md:text-2xl">
        ¡BIENVENIDOS A MI TIENDA!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-20">
        <Productos
          imagen="kiwi"
          producto="Kiwi Deshidratado"
          descripcion="Delicioso kiwi deshidratado"
          precio="12.000 gs."
        />
        <Productos
          imagen="banana"
          producto="Banana Deshidratada"
          descripcion="Banana deshidratada natural"
          precio="5.000 gs."
        />
        <Productos
          imagen="arandano"
          producto="Arándano Deshidratado"
          descripcion="Arándanos secos y saludables"
          precio="12.000 gs."
        />
        <Productos
          imagen="mix"
          producto="Tuti Fruti"
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
      <div>
        {!isAuthenticated && (
          <div className="flex justify-center">
            <form
              className="bg-black p-8 rounded-lg shadow-md shadow-amber-300 w-full max-w-md"
              onSubmit={handleSubmit}
            >
              <h2 className="text-amber-300 text-2xl mb-6 text-center">
                {isLogin ? "Iniciar Sesión" : "Registrar"}
              </h2>
              <div className="flex flex-col space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="p-3 rounded bg-gray-800 text-white placeholder-gray-400"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="p-3 rounded bg-gray-800 text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="text-white bg-amber-300 p-3 rounded hover:bg-amber-400"
                  disabled={loading}
                >
                  {loading
                    ? "Cargando..."
                    : isLogin
                    ? "Iniciar Sesión"
                    : "Registrar"}
                </button>
              </div>
            </form>
          </div>
        )}
        {!isAuthenticated && (
          <p className="text-center text-white mt-4">
            {isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}{" "}
            <span
              className="text-amber-300 cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Registrar" : "Iniciar Sesión"}
            </span>
          </p>
        )}
        <div className="flex items-center justify-center gap-8 my-8">
          {!isAuthenticated && (
            <p className="text-white mb-4">
              Inicia sesión para contactar con la Tienda
            </p>
          )}
          <button
            disabled={!isAuthenticated}
            className={`text-white flex items-center justify-center ${
              !isAuthenticated ? "bg-gray-500" : "bg-green-500"
            } p-2 rounded mb-4`}
            onClick={handleWhatsAppClick}
          >
            Contactar por WhatsApp
            <AiOutlineWhatsApp className="h-[30px] w-[30px] ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tienda;
