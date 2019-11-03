'use strict';

const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_api',
};

const Mysql = mysql.createPool(config);

module.exports = Mysql;