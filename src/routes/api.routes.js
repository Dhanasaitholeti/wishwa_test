const express = require('express');
const apiRoutes = express.Router();
const { getLogos, handleForm } = require('../controllers/api.controller');

apiRoutes.get('/logos', getLogos);

apiRoutes.post('/form', handleForm);

module.exports = apiRoutes;
