const express = require('express');
//Metodo Js para reutilizar rutas
const router = express.Router();
//Llamamos el controlador
const customerController = require('../Controllers/CustomerController');

router.get('/', customerController.list);
router.post('/add',customerController.save);
router.get('/delete/:id', customerController.delete);
router.get('/edit/:id', customerController.edit);
router.post('/update/:id',customerController.update);
router.get('/login.ejs',customerController.loadLogin);
//Exportamos el modulo
module.exports = router;