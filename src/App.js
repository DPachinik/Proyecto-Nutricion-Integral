import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from '../src/pages/Home';
import Tienda from '../src/pages/Tienda';
import Servicios from "./section/Servicios";
import SobreMi from "./section/SobreMi";
import Frase from "./section/Frase";
import CambioFisico from "./section/CambioFisico";
import Contacto from "./section/Contacto";
import Footer from './section/Footer';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/home');
  };

  const handleNavigation = (hash) => {
    navigate('/home');
    setTimeout(() => {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };

  return (
    <div className="">
      <nav className="flex flex-wrap shadow-lg shadow-amber-300 p-6">
        <div className="flex items-center flex-shrink-0 text-amber-300 mr-6">
          <span className="font-semibold text-xl tracking-tight">
            Nutrición Integral
          </span>
        </div>
        <div className="flex lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-orange-500 hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="flex w-full flex-grow lg:flex lg:items-center lg:w-auto justify-evenly">
          <div className="text-sm lg:flex-grow">
            <Link
              to="/home"
              className="mt-4 lg:inline-block lg:mt-0 text-white transition-colors hover:text-orange-500 mr-4 focus:ring-1 focus:ring-orange-500 focus:ring-opacity-75 rounded-md p-2"
            >
              Inicio
            </Link>
            <span
              className="mt-4 lg:inline-block lg:mt-0 text-white transition-colors hover:text-orange-500 mr-4 cursor-pointer"
              onClick={() => handleNavigation('SobreMi')}
            >
              Sobre Mi
            </span>
            <span
              className="mt-4 lg:inline-block lg:mt-0 text-white transition-colors hover:text-orange-500 mr-4 cursor-pointer"
              onClick={() => handleNavigation('Servicios')}
            >
              Servicios
            </span>
            <span
              className="mt-4 lg:inline-block lg:mt-0 text-white transition-colors hover:text-orange-500 mr-4 cursor-pointer"
              onClick={() => handleNavigation('Contacto')}
            >
              Contacto
            </span>
            <Link
              to="/tienda"
              className="mt-4 lg:inline-block lg:mt-0 text-white transition-colors hover:text-orange-500 mr-4 focus:ring-1 focus:ring-orange-500 focus:ring-opacity-75 rounded-md p-2"
            >
              Tienda
            </Link>
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="mt-4 lg:inline-block lg:mt-0 text-white transition-colors hover:text-orange-500 mr-4 focus:ring-1 focus:ring-orange-500 focus:ring-opacity-75 rounded-md p-2"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/tienda" element={<Tienda isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
      </Routes>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <Home />
      <Frase />
      <section id="SobreMi">
        <SobreMi className="bg-lime-200" />
      </section>
      <section id="Servicios">
        <Servicios />
      </section>
      <section id="CambioFisico">
        <CambioFisico />
      </section>
      <section id="Contacto">
        <Contacto />
      </section>
      <Footer />
    </div>
  );
}

export default App;
