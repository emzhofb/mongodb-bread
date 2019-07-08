var express = require('express');
var router = express.Router();

const controller = require('../controllers/index');

/* GET home page. */
router.get('/', controller.getIndex);

module.exports = router;
