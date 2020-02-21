module.exports = (() => {
    const database = require('../models/servicioVehiculoModel');

    const registrarServicioVehiculo = async (req,res) => {
        const {body} = req;
        const fecha = await database.insertarServicioVehiculo(body);
        res.json({fecha});

    };

    return{
        registrarServicioVehiculo
    };

})();