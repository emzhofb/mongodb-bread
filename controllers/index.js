const mongo = require('../models/data').getDb;

exports.getIndex = (req, res, next) => {
  mongo
    .collection('bread')
    .find({})
    .toArray()
    .then(result => {
      res.render('index', { title: 'Express' });
      console.log(result);
    })
    .catch(err => console.log(err));
};
