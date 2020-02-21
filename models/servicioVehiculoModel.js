module.exports = (() => {
    const client =  require('../dbconnection');

    const insertarServicioVehiculo = async (data) => {
        const {servicio,id_modelo} = data;
        const response = await client.query(`INSERT INTO servicio_vehiculo(id_servicio,id_modelo)
                                             VALUES(${servicio},${id_modelo}) RETURNING fecha`);

        return response.rows;
    };
    
    return{
        insertarServicioVehiculo
    };
})();