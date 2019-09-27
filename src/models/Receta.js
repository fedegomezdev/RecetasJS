const {Schema, model} = require('mongoose');

const recetaSchema = new Schema({
    titulo : {String, required: true}, 
    contenido : {String, required: true},
}, {
    timestamps : true
});

module.exports = model('Receta', recetaSchema);