import React, { useState } from 'react'

const Formulario = () => {

  const [datos,setDatos] = useState(
  {
    nombre: '',
    apellido: '',
    email: '',
    celular: '',
    mensaje:'',
  });

  const [respuesta, setRespuesta] = useState ('');


  const handleChange = (e)=>{
    const {name,value} = e.target;
      setDatos ({
      ...datos, [name] : value,
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const resp = await fetch('http://localhost:3001/enviar-formulario', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify(datos),
      });
      
      if (resp.ok){
        
        setRespuesta('¡Formulario enviado con éxito!');

        setDatos({
          nombre: '',
          apellido: '',
          email: '',
          celular: '',
          mensaje: '',
        });

        setTimeout(() => {
          setRespuesta('');
        }, 5000);

      }else{
        setRespuesta('Hubo un error al enviar el formulario');
        setTimeout(() => {
          setRespuesta('');
        }, 5000);
      }   
    }
    catch(error){
      console.log ('Error al enviar el formulario')
    }
  };


    
  return (
    <div className='flex justify-center p-8 shadow-lg shadow-amber-300'>
      <div className='pr-[50px] space-y-5'>
        <h2 className='text-white text-center'>CONTACTO</h2>
        <form
				className='flex flex-col gap-6'
        onSubmit={handleSubmit}
        required
				>
            <input
            type='text'
            placeholder='Nombre'
            name = 'nombre'
            value= {datos.nombre}
            className='input'
            onChange={handleChange}
            required
            />
            <input
            type='text'
            placeholder='Apellido'
            name = 'apellido'
            value= {datos.apellido}
            className='input'
						onChange={handleChange}
            required
            />
            <input
            type='email'
            name =  'email'
            placeholder='email'
            value= {datos.email}
            className='input'
						onChange={handleChange}
            required
            />
            <input
            type='tel'
            placeholder='numero'
            name = 'celular'
            value={datos.celular}
            className='input'
						onChange={handleChange}
            required
            />
            <textarea
            placeholder='Escriba su mensaje'
            name  = 'mensaje'
            value={datos.mensaje}
            className='textarea'
						onChange={handleChange}
            required
            />
						<button type = 'submit' className='bg-amber-300'>Enviar</button>
            {respuesta && (
              <div className='text-white'>{respuesta}</div>
            )}
        </form>
      </div>
			<div className='text-white pl-[50px] space-y-10'>
				<h2 className='text-center'>ATENCIÓN ONLINE</h2>
				<ol className='space-y-4'>
					<li>¡Recibe atención en la comodidad de tu hogar!</li>
					<li>¡Días y horarios más flexibles!</li>
					<li>Ahorra tiempo y dinero en tus desplazamientos</li>
					<li>Eficacia igual al seguimiento presencial</li>
					<li>Sesiones a través de tu Whatsapp o Google Meet</li>
				</ol>
			</div>
    </div>
  )
}

export default Formulario
