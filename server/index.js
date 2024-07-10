require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Usuario } = require('./models/usuario');
const jwtConfig = require('../jwt.config'); // Importar configuración de JWT

const app = express();
app.set('key', jwtConfig.clave); // Usar la clave JWT configurada
app.use(express.json());

// Configuración de CORS para permitir solicitudes desde cualquier origen durante el desarrollo
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;

// Middleware para verificar el token JWT
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ error: "No token sent" });
  }

  const secret = app.get('key');

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    req.user = decoded;
    next();
  });
};

// URI de conexión a MongoDB desde variables de entorno
const uri = `mongodb+srv://${process.env.DB_USUARIO}:${process.env.DB_PASSWORD}@${process.env.DB_DOMAIN}/${process.env.DB_NAME}`;

// Opciones de cliente para MongoDB
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

// Función asincrónica para conectar a MongoDB
async function run() {
  try {
    await mongoose.connect(uri, clientOptions);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error(error);
  }
}
run().catch(console.dir);

// Función para autenticar al usuario
const authenticateUser = async (email, password) => {
  const user = await Usuario.findOne({ email });
  if (!user) {
    return { error: "El email no existe en nuestra base de datos" };
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return { error: "La contraseña no es correcta" };
  }

  const secret = app.get("key");
  const token = jwt.sign({ email: user.email }, secret);
  return { token };
};

// Ruta para registrar usuarios
app.post("/api/register", async (req, res) => {
  try {
    const existingUser = await Usuario.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new Usuario({
      email: req.body.email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "Usuario registrado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Ruta para iniciar sesión de usuarios
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await authenticateUser(email, password);
    if (result.error) {
      return res.status(401).json({ error: result.error });
    }
    res.status(200).json({ token: result.token });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Ruta para obtener información del usuario autenticado
app.get("/api/user", verifyToken, async (req, res) => {
  try {
    const user = await Usuario.findOne({ email: req.user.email });
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json({ username: user.username, email: user.email });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
