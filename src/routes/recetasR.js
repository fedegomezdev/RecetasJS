const {Router} = require('express');
const router = Router(); //para iniciar el enrutador de express

router.get('/', (req,res) =>{
    res.send('holas');
} )


module.exports = router;