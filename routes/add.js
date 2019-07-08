var express = require('express');
var router = express.Router();

const controller = require('../controllers/add');

router.get('/', controller.getAdd);

module.exports = router;
