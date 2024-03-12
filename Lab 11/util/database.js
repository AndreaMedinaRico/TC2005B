const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'lab_bungoustraydogs',
    password: 'andreita',
});

module.exports = pool.promise();