import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./section/Servicios";
import About from "./section/SobreMi";
import Frase from "./section/Frase";

function App() {
  return (
    <div className=''>
      <nav className="flex items-center justify-between flex-wrap bg-lime-500 p-6 ">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width={54}
            height={54}
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">
            Nutrición Integral
          </span>
        </div>
        <div className="block lg:hidden">
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
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-evenly">
          <div className="text-sm lg:flex-grow">
            <Link to='/home' className="block mt-4 lg:inline-block lg:mt-0 text-white transition-colors hover:text-orange-500 mr-4 focus:ring-1 focus:ring-orange-500 focus:ring-opacity-75  rounded-md p-2 ">
              Inicio
            </Link>
            <a href='#SobreMi' className="block mt-4 lg:inline-block lg:mt-0 text-white transition-colors hover:text-orange-500 mr-4">
              Sobre Mi
            </a>
            <Link to='/services' className="block mt-4 lg:inline-block lg:mt-0 text-white transition-colors hover:text-orange-500 mr-4">
              Servicios
            </Link>
            <Link to='/contact' className="block mt-4 lg:inline-block lg:mt-0 text-white transition-colors hover:text-orange-500 mr-4">
              Contacto
            </Link>
            <Link to='/store' className="block mt-4 lg:inline-block lg:mt-0 text-white transition-colors hover:text-orange-500 mr-4">
              Tienda
            </Link>


          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/home" Component={Home} />
      </Routes>
      <Frase/>
      <Services/>
    </div>
  );
}

export default App;
