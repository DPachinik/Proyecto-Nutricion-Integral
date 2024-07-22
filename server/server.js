require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = process.env.PORT_CORREO;

app.use(cors());
app.use(express.json());

// Ruta para manejar la solicitud POST del formulario
app.post('/enviar-formulario', async (req, res) => {
  try {
    const { nombre, apellido, email, celular, mensaje } = req.body;
    console.log(req.body);

    // Configurar el transporte Nodemailer con variables de entorno
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptionsNegocio = {
      from: process.env.EMAIL_USER, 
      to: process.env.EMAIL_LOCAL, 
      subject: 'Mensaje desde tu Página Web',
      html: `<p>Nombre: ${nombre}</p>
             <p>Apellido: ${apellido}</p>
             <p>Email: ${email}</p>
             <p>Teléfono: ${celular}</p>
             <p>Mensaje: ${mensaje}</p>`,
    };

    await transporter.sendMail(mailOptionsNegocio, (error, info) => {
      if (error) {
        console.log('Hay un error:', error);
      } else {
        console.log('Mensaje enviado con éxito', info.response);
        res.status(200).send('Formulario enviado con éxito');
      }
    });

  } catch (error) {
    console.error('Error al enviar el formulario:', error);
    res.status(500).send('Hubo un problema al enviar el formulario');
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
