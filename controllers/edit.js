const getDb = require('../models/data').getDb;

exports.getEdit = (req, res, next) => {
  res.render('edit', { title: 'Edit' });
};
