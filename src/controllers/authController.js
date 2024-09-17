const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

exports.registrar = async (request, response) => {
    const {nombres, username, password} = request.body;
    const claveEncriptada = bcrypt.hashSync(password, 10);
    try {
        const nuevoUsuario = await Usuario.create({nombres, username, password: claveEncriptada});
        response.status(200).json('Perfecto, usuario creado');
    } catch (error) {
        response.status(500).json('Oppsss!! ocurrio un error al intentar crear el usuario');
    }

}

exports.login = async (req, res) => {
    const {username, password} = req.body;
    try {
        const usuario = await Usuario.findOne({where: {username}});
        if(!usuario){
            return res.status(404).json('Oye, yo no encontre ese usuario');
        }
        const comparacionClaves = bcrypt.compareSync(password, usuario.password);
        if(!comparacionClaves){
            return res.status(401).json('la credenciales que me envio no son correctas');
        }
        const token = jwt.sign({id:usuario.usuario_id}, 'sdhjsdjksdjkksdghjg23$', {
            expiresIn: '1h'
        })
        return res.status(200).json({token});
    } catch (error) {
        return res.status(401).json('la credenciales que me envio no son correctas: ' + error);
    }
}