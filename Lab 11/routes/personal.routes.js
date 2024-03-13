const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');      // Importar middleware de autenticación

const personalController = require('../controllers/personal.controller.js');

router.get('/', isAuth, personalController.getPersonal);
router.post('/', isAuth, personalController.postPersonal);
router.get('/:idPersona', isAuth, personalController.postPersonal);
router.use(personalController.get404);

module.exports = router;