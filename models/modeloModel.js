module.exports = (()=>{
    const client =  require('../dbconnection');

    const insertarModelo = async (data) => {
        const {nombre,marca,vehiculo} = data.body;
        const {path} = data.file;
        const response = await client.query(`INSERT INTO modelo(id_marca,id_vehiculo,nombre,imagen) 
                                             VALUES(${marca},${vehiculo},'${nombre}','${path}') RETURNING id_modelo`);
        return response.rows;                                     
    };
    
    const getModelos = async () => {
        const respose = await client.query(`SELECT * FROM modelo`);
        return respose.rows;
    };

    return{
        insertarModelo,
        getModelos
    };
})();