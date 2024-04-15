const express = require('express');
const apiRoutes = express.Router();
const {
  getLogos,
  handleForm,
  getForms,
  removeAllForms,
} = require('../controllers/api.controller');

apiRoutes.get('/logos', getLogos);

apiRoutes.post('/form', handleForm);

apiRoutes.get('/', getForms);

apiRoutes.delete('/', removeAllForms);

module.exports = apiRoutes;
