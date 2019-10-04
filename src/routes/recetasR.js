const {Router} = require('express');
const router = Router(); //para iniciar el enrutador de express

const {getRecetas, createReceta} = require('../controllers/recetas.controller');



router.get('/', getRecetas );
router.post('/', createReceta );




module.exports = router;
