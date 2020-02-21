const router = require('express').Router();
const vehiculoController = require('../controllers/vehiculoController');

router.get('/',vehiculoController.getVehiculos);

module.exports = router;