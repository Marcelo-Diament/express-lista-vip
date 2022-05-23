var express = require('express');
const controller = require('../controllers/IndexController')
var router = express.Router();

router.get('/', controller.index);

module.exports = router;
