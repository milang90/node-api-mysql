'use strict';

const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_api',
};

const pool = mysql.createPool(config);

module.exports = pool;