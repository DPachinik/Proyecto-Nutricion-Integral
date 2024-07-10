const express = require('express');
const nodemailer = require('nodemailer');
const cors = require ('cors');

const app = express();
const port = 3001; // Puedes cambiar el puerto según tu configuración

app.use(cors());
// Middleware para analizar application/json
app.use(express.json());

// Ruta para manejar la solicitud POST del formulario
app.post('/enviar-formulario', async (req, res) => {
  try {
    // Extraer datos del cuerpo del formulario
    const { nombre, apellido, email, celular, mensaje } = req.body;
    console.log(req.body);
    // Configurar el transporte Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'david.pachinik@fiuni.edu.py', // Reemplazar con tu correo electrónico
        pass: 'crkczeixmmnjvukx', // Reemplazar con tu contraseña
      },
    });

    // Opciones del correo electrónico para el negocio
    const mailOptionsNegocio = {
      from: 'david.pachinik@fiuni.edu.py', // Dirección de correo electrónico del remitente
      to: 'ing.pachinik96@gmail.com', // Dirección de correo electrónico del destinatario (negocio)
      subject: 'Nuevo mensaje del formulario de contacto',
      html: `<p>Nombre: ${nombre}</p>
             <p>Apellido: ${apellido}</p>
             <p>Email: ${email}</p>
             <p>Teléfono: ${celular}</p>
             <p>Mensaje: ${mensaje}</p>`,
    };

    // Enviar el correo electrónico al negocio
    await transporter.sendMail(mailOptionsNegocio, (error,info)=>{
      if(error){
        console.log('hay un error:', error);
      }else{
        console.log('mensaje enviado con exito', info.response)
        res.status(200).send('Formulario enviado con éxito');
      }
    });

  } catch (error) {
    console.error('Error al enviar el formulario:', error);
    res.status(500).send('Hubo un problema al enviar el formulario');
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});