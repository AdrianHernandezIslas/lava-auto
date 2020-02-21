const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const app = express();


//Configuraciones
app.set('port',process.env.PORT || 4000);
 
//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));
app.use(cors());

//Ruta
app.use('/api/marca',require('./routes/marcaRoute'));
app.use('/api/modelo',require('./routes/modeloRoute'));
app.use('/api/servicio',require('./routes/servicioRoute'));
app.use('/api/vehiculo',require('./routes/vehiculoRoute'));
app.use('/api/servicio-vehiculo',require('./routes/servicioVehiculoRoute'));

 
const server = app.listen(app.get('port'),() =>{
    console.log('Server Corriendo '+app.get('port'));
});