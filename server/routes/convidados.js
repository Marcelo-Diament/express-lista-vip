var express = require('express');
const controller = require('../controllers/ConvidadosController')
var router = express.Router();

router.get('/', controller.index);

module.exports = router;
