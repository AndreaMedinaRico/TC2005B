const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');      // Importar middleware de autenticación
const canUpload = require('../util/canUpload.js')

const personalController = require('../controllers/personal.controller.js');

router.get('/', isAuth, canUpload, personalController.getPersonal);
router.post('/', isAuth, canUpload, personalController.postPersonal);
router.get('/:idPersona', isAuth, canUpload, personalController.postPersonal);
router.use(personalController.get404);

module.exports = router;