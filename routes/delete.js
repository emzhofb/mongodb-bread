var express = require('express');
var router = express.Router();

const controller = require('../controllers/delete');

router.get('/', controller.getDelete);

module.exports = router;
