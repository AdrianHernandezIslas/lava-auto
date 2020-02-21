const { Client } = require('pg');
const {database} = require('./credentials');
const {user,host,db,password,port} = database;
const client = new Client({
    user,
    host,
    database: db,
    password,
    port,
    ssl : true
  });
client.connect();
module.exports = client;