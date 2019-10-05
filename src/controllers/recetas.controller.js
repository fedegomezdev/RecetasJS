const recetascrl  = {};
const Recetas = require('../models/Receta');

recetascrl.getRecetas = async (req, res) => {
    const recetas = await Recetas.find()
    res.json(recetas);
}

recetascrl.createReceta = async(req, res) => {
    const { titulo, contenido } = req.body;
    const newReceta = await new Recetas({
        titulo : titulo,
        contenido: contenido
    })
    await newReceta.save();
    res.send('ready')
}




module.exports = recetascrl;