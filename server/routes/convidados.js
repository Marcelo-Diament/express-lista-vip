var express = require('express');
const controller = require('../controllers/ConvidadosController')
var router = express.Router();

router.get('/', controller.index);
router.get('/vip', controller.vip);

module.exports = router;
