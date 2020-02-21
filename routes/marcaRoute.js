const router = require('express').Router();
const marcaController = require('../controllers/marcaController');
const {upload} = require('../library/file');

//router.get('/',marcaController.getMarcasModelos);
router.get('/',marcaController.getMarcas);
router.post('/',upload.single('file'),marcaController.registerMarca);

module.exports = router;