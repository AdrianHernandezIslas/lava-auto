module.exports = (() => {
    const database = require('../models/marcaModel');
    

    const getMarcasModelos = (req,res) => {
        res.json({ok:'simon'});
    };

    const registerMarca = async (req,res) => {
        const {nombre} = req.body;
        const {path} = req.file; 
        const response = await database.insertarMarca({nombre,imagen:path});
        res.json({ok:'simon'});
    };

    const getMarcas = async (req,res) => {
        const marcas = await database.getMarcas();
        res.json({marcas}); 
    };

    return{
        getMarcasModelos,
        registerMarca,
        getMarcas
    };

})();