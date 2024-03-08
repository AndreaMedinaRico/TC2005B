const express = require('express');
const router = express.Router();

const filesystem = require('fs');

const homeController = require('../controllers/home.controller.js');

router.get('/', homeController.getHome);
router.get('/info', homeController.getInfo);
router.use(homeController.get404);

module.exports = router;