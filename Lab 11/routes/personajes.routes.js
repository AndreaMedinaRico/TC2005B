const express = require('express');
const router = express.Router();

const personajesController = require('../controllers/personajes.controller.js');

router.get('/', personajesController.getPersonajes);

router.get('/', personajesController.getSecundarios);

router.use(personajesController.get404);

module.exports = router;