const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    router.render('personajes.ejs');
});

router.get('/secundarios', (request, response, next) => {
    router.render('secundarios.ejs');
});

router.use((request, response, next) => {
    response.status(404);
    response.render('404')
});

module.exports = router;