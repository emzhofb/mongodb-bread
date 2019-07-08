const col = require('../models/data');

exports.getIndex = (req, res, next) => {
  let data;

  col.find({}).toArray((err, docs) => {
    if (err) console.log(err);

    data = docs;
    console.log(data);
  });

  res.render('index', { title: 'Express' });
};
