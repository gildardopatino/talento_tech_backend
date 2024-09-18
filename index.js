const express = require('express');
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes');
const categoriaRoutes = require('./src/routes/categoriaRoutes');
const productoRoutes = require('./src/routes/productoRoutes');
const conexionBD = require('./src/config/database');

const aplicacion = express();

aplicacion.use(express.json());
aplicacion.use(cors());

aplicacion.use('/auth', authRoutes);
aplicacion.use('/api', categoriaRoutes);
aplicacion.use('/api', productoRoutes);

const port = process.env.PORT || 3000;

conexionBD.sync().then(() => {
    aplicacion.listen(port, () => {
        console.log(`El servidor ya está corriendo en el puerto ${port}, ¡vamos!`);
    });
}).catch(error => {
    console.error('No pude conectarme a la base de datos, hice todo lo posible: ' + error);
});