const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/recetas',{ //ahi es donde estaria alojada la base de datos (se crea sola al usarse recetas)
    useNewUrlParser : true,
    useUnifiedTopology: true
})
    .then(db => console.log('base de datos conectada')); //una vez que termine de coenctarse, que mande este mensaje
