const getDb = require('../models/data').getDb;

exports.getIndex = (req, res, next) => {
  const db = getDb();

  db.collection('bread')
    .find({})
    .toArray()
    .then(result => console.log(result))
    .catch(err => console.log(err));

  res.render('index', { title: 'Express' });
};
