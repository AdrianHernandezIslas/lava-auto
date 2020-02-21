module.exports = (() => {
    const database = require('../models/vehiculoModel');
    
    const getVehiculos = async (req,res) => {
        const vehiculos = await database.getVehiculos();
        res.json({vehiculos});
    };

    return{
        getVehiculos
    };
})();