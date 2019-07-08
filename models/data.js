const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'rubicamp';

// Collection Name
const colName = 'bread';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

let db;
let col;

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log('Connected successfully to server');

  db = client.db(dbName);
  col = db.collection(colName);

  col
    .find({})
    .toArray()
    .then(result => console.log(result))
    .catch(err => console.log(err));

  client.close();
});

module.exports = col;
