const Categoria = require("../models/Categoria");


exports.crearCategoria = async(req, res) => {
    const {nombre} = req.body;
    try {
        const nuevaCategoria = await Categoria.create({nombre});
        return res.status(200).json('Categoría creada');
    } catch (error) {
        return res.status(500).json('ocurrio un error al tratar de crear la categoría: ' + error);
    }
}

exports.listarCategorias = async(req, res) => {
    try {
        const categorias = await Categoria.findAll();
        return res.status(200).json(categorias);
    } catch (error) {
        return res.status(500).json('ocurrio un error al tratar de listar las categorías');
    }
}


exports.buscarCategoria = async(req, res) => {
    const {categoria_id} = req.params;
    try {
        const categoria = await Categoria.findByPk(categoria_id);
        return res.status(200).json(categoria);
    } catch (error) {
        return res.status(500).json('ocurrio un error al tratar de buscar la categoría');
    }
}

exports.eliminarCategoria = async(req, res) => {
    const {categoria_id} = req.params;
    try {
        const categoria = await Categoria.findByPk(categoria_id);
        if(!categoria){
            return res.status(404).json('La categoría no fue encontrada');
        }
        await categoria.destroy();
        return res.status(200).json('La categoría fue eliminada');
    } catch (error) {
        return res.status(500).json('ocurrio un error al tratar de eliminar la categoría');
    }
}

exports.actualizarCategoria = async(req, res) => {
    const {categoria_id} = req.params;
    const {nombre} = req.body;
    try {
        const categoria = await Categoria.findByPk(categoria_id);
        if(!categoria){
            return res.status(404).json('La categoría no fue encontrada');
        }
        categoria.nombre = nombre;
        await categoria.save();
        return res.status(200).json('La categoría fue actualizada');
    } catch (error) {
        return res.status(500).json('ocurrio un error al tratar de actualizar la categoría');
    }
}