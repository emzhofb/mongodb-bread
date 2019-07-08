const getDb = require('../models/data').getDb;

exports.getIndex = (req, res, next) => {
  const db = getDb();
  let data;

  db.collection('bread')
    .find({})
    .toArray()
    .then(result => {
      data = result;
      
      res.render('index', { title: 'Express', data });
    })
    .catch(err => console.log(err));
};
