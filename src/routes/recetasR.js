const {Router} = require('express');
const router = Router(); //para iniciar el enrutador de express

router.get('/', (req,res) =>{
    res.send('Probando algo');
} )


module.exports = router;