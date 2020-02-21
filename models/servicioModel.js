module.exports = (() => {
    const client =  require('../dbconnection');

    const insertarServicio = async(data) => {
        const {nombre,descripcion,costo} = data;
        const res = await client.query(`INSERT INTO servicio(nombre,descripcion,costo) 
                                        VALUES ('${nombre}','${descripcion}',${costo}) RETURNING id_servicio;`);
        return res.rows;
    };

    const getServicio = async () => {
        const res = await client.query(`SELECT id_servicio,nombre,descripcion
                                        FROM servicio`);
        return res.rows;
    };

    return{
        insertarServicio,
        getServicio
    };

})();