module.exports = (() => {
    const client =  require('../dbconnection');

    const getVehiculos = async () => {
        const res = await client.query(`SELECT * FROM vehiculo`);
        return res.rows    
    };

    return{
        getVehiculos
    };

})();