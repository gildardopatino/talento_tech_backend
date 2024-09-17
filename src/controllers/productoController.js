const Producto = require ('../models/Producto')

exports.crearProducto = async (req,res) => {
    const {producto_id,nombre,precio,categoria_id} = req.body;
    try {
        const nuevoProducto = await Producto.create({producto_id,nombre,precio,categoria_id})
        res.status(200).json ({message: 'El producto fue creado existosamente'})
    }catch(error){
        res.status(500).json ({message:'Error al crear el producto' + error})
    }
}

exports.listarProductos = async(req, res) => {
    try {
        const productos = await Producto.findAll();
        return res.status(200).json(productos);
    } catch (error) {
        return res.status(500).json('Ocurrió un error al tratar de listar los productos' + error);
    }
}

exports.buscarProducto = async(req, res) => {
    const {producto_id} = req.params;
    try {
        const producto = await Producto.findByPk(producto_id);
        return res.status(200).json(producto);
    } catch (error) {
        return res.status(500).json('Ocurrió un error al tratar de buscar el producto' + error);
    }
}

exports.eliminarProducto = async(req, res) => {
    const {producto_id} = req.params;
    try {
        const producto = await Producto.findByPk(producto_id);
        if(!producto){
            return res.status(404).json('El producto no fue encontrado');
        }
        await producto.destroy();
        return res.status(200).json('El producto fue eliminado correctamente');
    } catch (error) {
        return res.status(500).json('Ocurrió un error al tratar de eliminar el producto' + error);
    }
}
exports.actualizarProducto = async(req, res) => {
    const {producto_id} = req.params;
    const {nombre} = req.body;
    try {
        const producto = await Producto.findByPk(producto_id);
        if(!producto){
            return res.status(404).json('El producto no fue encontrado');
        }
        producto.nombre = nombre;
        await producto.save();
        return res.status(200).json('El producto fue actualizado correctamente');
    } catch (error) {
        return res.status(500).json('Ocurrió un error al tratar de actualizar el producto');
    }
}