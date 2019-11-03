'use strict';

var Mysql = require('../config/database');

const UsersController = {
    search: function (req, res) {
        var q = req.query.q;
        Mysql.query(`SELECT * FROM users WHERE name LIKE '%${q}' OR email LIKE '%${q}'`, (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    },
    list: function(req, res) {
        Mysql.query('SELECT * FROM users', (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    },
    /*
    show: function(req, res) {
        var id = req.params.id;
        Mysql.query('SELECT * FROM users', (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    },
    create: function(req, res) {
        var users = new UsersModel (req.body);
        Mysql.query('SELECT * FROM users', (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    },
    update: function(req, res) {
        var id = req.params.id
        UsersModel.findOne({_id: id}, function(err, users){
            if(err) {
                return res.status(500).send({
                    message: 'Se ha producido un error al guardar el usuario',
                    error: err
                });
            }
            if(!users) {
                return res.status(404).send({
                    message: 'No hemos encontrado el usuario'
                });
            }
            users.name = req.body.name;
            users.email =  req.body.email;
            UsersModel.save(function(err, users){
            if(err) {
                return res.status(500).send({
                    message: 'Error al guardar el usuario'
                });
            }
            if(!users) {
                return res.status(404).send({
                    message: 'No hemos encontrado el usuario'
                });
            }
                return res.status(201).send(users);
            });
        });
    },
    remove: function(req, res) {
        var id = req.params.id;
        Mysql.query('SELECT * FROM users', (error, result) => {
            if(err) {
                return res.send(500, {
                    message: 'No hemos encontrado el usuario'
                });
            }
            return res.status(201).send(users);
        });
    }
    */
};

module.exports = UsersController;