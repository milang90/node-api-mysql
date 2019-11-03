'use strict';

var router = require('express').Router();
var users = require('./users');

router.use('/users', users);

router.get('/', function (req, res) {
    res.status(200).send({ message: 'Estás conectado a nuestra API' });
});

module.exports = router;