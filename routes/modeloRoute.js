const router = require('express').Router();
const {upload} = require('../library/file');
const modeloController = require('../controllers/modeloController');

router.post('/',upload.single('file'),modeloController.registerModelo);
router.get('/',modeloController.getModelos);

module.exports = router;