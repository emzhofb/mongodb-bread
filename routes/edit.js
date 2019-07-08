var express = require('express');
var router = express.Router();

const controller = require('../controllers/edit');

router.get('/:id', controller.getEdit);

module.exports = router;
