const router = require('express').Router();
const servicoController = require('../controllers/servicioController');

router.post('/',servicoController.registerServicio);
router.get('/',servicoController.getServicio);

module.exports = router;