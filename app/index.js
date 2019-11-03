'use strict';

const express = require("express");
const bodyParser = require('body-parser');
const app = express();
require('./config/database');

const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const router = require('./routes');
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`El servidor está inicializado en http://localhost:${PORT}`);
});