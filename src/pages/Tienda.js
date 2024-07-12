import React, { useState } from 'react';
import Productos from '../componentes/Productos';

function Tienda({ isAuthenticated, setIsAuthenticated }) {
  const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre login y registro
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? 'http://localhost:5000/api/login' : 'http://localhost:5000/api/register';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        if (isLogin) {
          localStorage.setItem('token', data.token);
          setIsAuthenticated(true);
        } else {
          alert('Usuario registrado correctamente');
          setIsLogin(true); // Cambiar a login después del registro exitoso
        }
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
          producto="Arándano Deshidratado"
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

      <button disabled={!isAuthenticated} className="text-white">
        Contactar por WhatsApp
      </button>
      {!isAuthenticated && <p className="text-white">Inicia sesión para contactar por WhatsApp</p>}

      {!isAuthenticated && (
        <div>
          <form onSubmit={handleSubmit}>
            <h2>{isLogin ? 'Login' : 'Register'}</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="text-white">
              {isLogin ? 'Login' : 'Register'}
            </button>
          </form>
          <p className='text-white'>
            {isLogin ? "¿No tienes una cuenta?" : '¿Ya tienes una cuenta?'}{' '}
            <span
              style={{ color: 'blue', cursor: 'pointer' }}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Register' : 'Login'}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default Tienda;