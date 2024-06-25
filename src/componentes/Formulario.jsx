import React, { useState } from 'react'

const Formulario = () => {

    const[nombre,setNombre] = useState ('')
    const[apellido,setApellido] = useState ('')
    const[email,setEmail] = useState ('')
    const[numero,setNumero] = useState ('')
    const[mensaje,setMensaje] = useState ('')




    
  return (
    <div className='flex justify-center p-8 shadow-lg shadow-amber-300'>
      <div className='pr-[50px] space-y-5'>
        <h2 className='text-white text-center'>CONTACTO</h2>
        <form
				className='flex flex-col gap-6'
				>
            <input
            type='text'
            placeholder='Nombre'
            value= {nombre}
            className='input'
            onChange={(e)=> setNombre(e.target.value)}
            />
            <input
            type='text'
            placeholder='Apellido'
            value= {apellido}
            className='input'
						onChange={(e)=> setApellido(e.target.value)}
            />
            <input
            type='email'
            placeholder='email'
            value= {email}
            className='input'
						onChange={(e)=>setEmail(e.target.value)}
            />
            <input
            type='number'
            placeholder='celular'
            value={numero}
            className='input'
						onChange={(e)=>setNumero(e.target.value)}
            />
            <textarea
            placeholder='Escriba su mensaje'
            value={mensaje}
            className='textarea'
						onChange={(e)=>setMensaje(e.target.value)}
            />
						<button className='bg-amber-300'>Enviar</button>
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
