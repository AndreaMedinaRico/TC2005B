const express = require('express');
const router = express.Router();

const filesystem = require('fs');

const personalController = require('../controllers/personal.controller.js');

router.get('/', personalController.getPersonal);
router.post('/', personalController.postPersonal);
router.use(personalController.get404);

module.exports = router;