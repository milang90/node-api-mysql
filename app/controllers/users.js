'use strict';

var Mysql = require('../config/database');

const UsersController = {
    
    search: function (req, res) {
        var q = req.query.q;
        Mysql.query(`SELECT * FROM users WHERE name LIKE '%${q}' OR email LIKE '%${q}'`, (error, result) => {
            if (error){
                return res.send(500, {
                    message: 'Error al buscar los datos',
                });
            };
            return res.send(200, result);
        });
    },

    list: function(req, res) {
        Mysql.query(`SELECT * FROM users`, (error, result) => {
            if (error){
                return res.send(500, {
                    message: 'Error al buscar los datos',
                });
            };
            return res.send(200, result);
        });
    },
    
    show: function(req, res) {
        var id = req.params.id;
        Mysql.query(`SELECT * FROM users WHERE id='${id}'`, (error, result) => {
            if (error){
                return res.send(500, {
                    message: 'Error al buscar los datos',
                });
            };
            if(!result.length){
                return res.status(404).send({
                    message: 'No hemos encontrado el usuario'
                });
            }
            return res.send(200, result);
        });
    },
    
    create: function(req, res) {
        
        let errors = 0;
        let errorData = {};

        if(!req.body.name){
            errorData.name = "El campo nombre es requerido";
            errors++;
        }
        if(!req.body.email){
            errorData.email = "El campo email es requerido";
            errors++;
        }

        if(errors){
            return res.send(403, {
                errors: errorData,
                message: 'Error en envío de datos',
            });
        }

        Mysql.query(`INSERT INTO users SET name='${req.body.name}', email='${req.body.email}'`, (error, result) => {
            if (error){
                return res.send(500, {
                    message: 'Error al guardar los datos',
                });
            };
            return res.send(201, {
                message: 'Usuario creado exitosamente',
                id: result.insertId
            });
        });
    },

    update: function(req, res) {

        let errors = 0;
        let errorData = {};

        if(!req.body.name){
            errorData.name = "El campo nombre es requerido";
            errors++;
        }
        if(!req.body.email){
            errorData.email = "El campo email es requerido";
            errors++;
        }
        if(errors){
            return res.send(403, {
                errors: errorData,
                message: 'Error en envío de datos',
            });
        }

        var id = req.params.id;
        
        Mysql.query(`SELECT * FROM users WHERE id='${id}'`, (error, result) => {
            if(error) {
                return res.send(500, {
                    message: 'Se ha producido un error al guardar el usuario',
                });
            }
            if(!result.length){
                return res.status(404).send({
                    message: 'No hemos encontrado el usuario'
                });
            }
            
            Mysql.query(`UPDATE users SET name='${req.body.name}', email='${req.body.email}' WHERE id='${id}'`, (error, result) => {
                if(error) {
                    return res.send(500, {
                        message: 'Error al guardar los datos',
                    });
                }
                return res.send(200, {
                    message: 'Se actualizaron los datos correctamente',
                });
            });
            
        });
    },

    remove: function(req, res) {
        var id = req.params.id;
        Mysql.query(`SELECT * FROM users WHERE id='${id}'`, (error, result) => {
            if(!result.length){
                return res.send(403, {
                    message: 'No hemos encontrado el usuario',
                });
            }
            Mysql.query(`DELETE FROM users WHERE id=${id}`, (error, result) => {
                return res.send(200, {
                    message: 'Se ha eliminado el usuario correctamente',
                });
            });
        });
    }

};

module.exports = UsersController;