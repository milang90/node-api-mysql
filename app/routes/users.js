'use strict';

var router = require('express').Router();
var UsersController = require('../controllers/users');

router.get('/', function(req, res) {
    UsersController.list(req, res);
});

router.get('/search', function(req, res) {
    UsersController.search(req, res);
});
/*
router.get('/:id', function(req, res) {
    UsersController.show(req, res);
});

router.post('/', function(req, res) {
    UsersController.create(req, res);
});

router.put('/:id', function(req, res) {
    UsersController.update(req, res);
});

router.delete('/:id', function(req, res) {
    UsersController.remove(req, res);
});
*/

module.exports = router;