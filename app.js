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


conexionBD.sync().then(() => {
    aplicacion.listen(3000, () => {
        console.log('El servidor ya esta corriendo en el puerto 3000, lets goo!!!');
    });
}).catch(error => {
    console.error('No pude conectarme a la base de datos hice todo lo posible!' + error);
});