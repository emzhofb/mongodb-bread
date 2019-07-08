const getDb = require('../models/data').getDb;

exports.getAdd = (req, res, next) => {
  res.render('add', { title: 'Add' });
};
