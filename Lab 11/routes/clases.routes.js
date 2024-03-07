const express = require('express');
const router = express.Router();

const filesystem = require('fs');

router.get('/', (request, response, next) => {
    response.render('home');
});

router.get('/info', (request, response, next) => {
    response.render('info');
});

router.use((request, response, next) => {
    response.status(404);
    response.render('404')
});

module.exports = router;