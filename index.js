const express = require('express');
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes');
const categoriaRoutes = require('./src/routes/categoriaRoutes');
const productoRoutes = require('./src/routes/productoRoutes');
const conexionBD = require('./src/config/database');
const { Client } = require('pg'); // Verificar si pg está disponible

const aplicacion = express();

aplicacion.use(express.json());
aplicacion.use(cors());

aplicacion.use('/auth', authRoutes);
aplicacion.use('/api', categoriaRoutes);
aplicacion.use('/api', productoRoutes);

const port = process.env.PORT || 3000;

// Verificar si pg está disponible
try {
    const client = new Client();
    console.log('Paquete pg está disponible');
} catch (error) {
    console.error('Paquete pg no está disponible: ' + error);
}

conexionBD.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos exitosa');
        return conexionBD.sync();
    })
    .then(() => {
        aplicacion.listen(port, () => {
            console.log(`El servidor ya está corriendo en el puerto ${port}, ¡vamos!`);
        });
    })
    .catch(error => {
        console.error('No pude conectarme a la base de datos, hice todo lo posible: ' + error);
    });