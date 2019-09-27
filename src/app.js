const express = require('express');
const app = express(); 
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config(); //para usar variables de entorno que tenemos en el archivo .env (mas seguridad) 

//middlewares
app.use(express.json()) //para que lea json
app.use(cors()); //para que pueda comunicarse con otros servers(creo) onda el frontend
app.use(morgan('dev')); //para que muestre por consola las peticiones http (get, post, put ,delete , etc)

//settings
app.set('port', process.env.PORT || 4000); //que use la variable de entorno PORT o el puerto 4000 



//routes
app.use('/api/recetas', require('./routes/recetasR')); //para poder usar las rutas, ahora para poder acceder
                                                        //tipeamos /api/recetas y nos hace lo del enrutador 
                                                            

module.exports = app;