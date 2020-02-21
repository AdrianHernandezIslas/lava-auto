CREATE TABLE empleado(
    id_empleado SERIAL PRIMARY KEY,
    nombre VARCHAR(45) NOT NULL,
    primer_apellido VARCHAR(45) NOT NULL,
    segundo_apellido VARCHAR(45),
    fecha_nacimiento DATE NOT NULL
);

CREATE TABLE usuario(
    id_empleado INTEGER REFERENCES empleado(id_empleado) ON DELETE CASCADE ON UPDATE CASCADE,
    nombre VARCHAR(20) NOT NULL,
    contrasenia VARCHAR(45) NOT NULL,
    tipo VARCHAR(1) NOT NULL
);

CREATE TABLE marca(
    id_marca SERIAL PRIMARY KEY,
    nombre VARCHAR(25) NOT NULL,
    imagen VARCHAR(100)
);

INSERT INTO marca(nombre,imagen) VALUES ('Honda','modelo/default') RETURNING id_marca;

/*Sin relecion con modelo y marca(Motocicleta,Particular,Camioneta,Otro)
  en, descripcion registro de Moto-mototaxi, particular-taxi
  tipo es posible descomponer en otra tabla */
CREATE TABLE vehiculo(
    id_vehiculo SERIAL PRIMARY KEY,
    tipo VARCHAR(45) NOT NULL,
    descripcion VARCHAR(100)
);

INSERT INTO vehiculo(tipo,descripcion) VALUES('Automovil','Particular');
INSERT INTO vehiculo(tipo,descripcion) VALUES('Automovil','Taxi foraneo');
INSERT INTO vehiculo(tipo,descripcion) VALUES('Motocicleta','Particular');

CREATE TABLE modelo(
    id_modelo SERIAL PRIMARY KEY,
    id_marca INTEGER REFERENCES marca(id_marca) ON DELETE CASCADE ON UPDATE CASCADE,
    id_vehiculo INTEGER REFERENCES vehiculo(id_vehiculo) ON DELETE CASCADE ON UPDATE CASCADE,
    nombre VARCHAR(35) NOT NULL,
    imagen VARCHAR(100)
);

CREATE TABLE servicio(
    id_servicio SERIAL PRIMARY KEY,
    nombre VARCHAR(45) NOT NULL,
    descripcion VARCHAR(75),
    costo DECIMAL(5,2) 
);

CREATE TABLE servicio_vehiculo(
    id_servicio INTEGER REFERENCES servicio(id_servicio) ON DELETE CASCADE ON UPDATE CASCADE,
    id_modelo INTEGER REFERENCES modelo(id_modelo) ON DELETE CASCADE ON UPDATE CASCADE,
    fecha date not null default CURRENT_DATE
);