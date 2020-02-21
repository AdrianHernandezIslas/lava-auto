const router = require('express').Router();
const servicioVehiculoController = require('../controllers/servicioVehiculoController');

router.post('/',servicioVehiculoController.registrarServicioVehiculo);

module.exports = router;