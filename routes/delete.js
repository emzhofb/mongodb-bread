const express = require('express');
const router = express.Router();

const controller = require('../controllers/delete');

router.get('/', controller.getDelete);

module.exports = router;
