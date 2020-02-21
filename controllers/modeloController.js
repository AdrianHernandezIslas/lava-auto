module.exports = (() => {
    const database = require('../models/modeloModel');
    const {uploadImg} = require('../library/cloudinary');
    const {deleteImg} = require('../library/file');

    const registerModelo = async (req,res) => {
        const {body} = req
        var file = req.file; 
        if(file === undefined){
            file = {path:'modelo/default'}
        }else{
            const public_id = await uploadImg(file.path,'modelo/');
            deleteImg(file.path);
            file = {path:public_id} 
        }
        const response = await database.insertarModelo({body,file});
        res.json({result:response});
    };

    const getModelos = async (req,res) => {
        const modelos = await database.getModelos();
        res.json({modelos});
    };

    return{
        registerModelo,
        getModelos
    };
})();