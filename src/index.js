const app = require("./app");
require('./database'); //para que me conecte la db

async function index(){ //uso una funcion asyncrona para que espere a q escuche el puerto y recien despues el console.log
    await app.listen(app.get('port'));
    console.log('Listen on port', app.get('port'));
}

index();