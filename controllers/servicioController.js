module.exports = (() => {
    const database = require('../models/servicioModel');

    const registerServicio = async (req,res) => {
        const response = await database.insertarServicio(req.body);
        res.json({result:response});
    };

    const getServicio = async (req,res) => {
        const servicios = await database.getServicio();
        res.json({servicios});
    };

    return{
        registerServicio,
        getServicio
    };
})();