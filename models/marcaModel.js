module.exports = (() => {
    const client =  require('../dbconnection');

    const getMarcasModelos = async () => {
        
        const res = await client.query(`select marca.id_marca,marca.nombre,id_modelo,modelo.nombre,imagen 
                                        from marca natural join modelo`);
        return res.rows;
    };

    const getMarcas = async () => {
        const res = await client.query('select * from marca');
        return res.rows;
    };

    const insertarMarca = async(data) => {
        const {nombre,imagen} = data;
        const res = await client.query(`INSERT INTO marca(nombre,imagen) 
                                        VALUES ('${nombre}','${imagen}') RETURNING id_marca;`);
        return res.rows;
    };

    return{
        getMarcasModelos,
        insertarMarca,
        getMarcas
    };
   
})();

''