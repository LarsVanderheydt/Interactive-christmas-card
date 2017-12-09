const path = require('path');
const fs = require('fs');
const Hapi = require('hapi');
const inert = require('inert');
const server = new Hapi.Server();
const Mongoose = require('mongoose');
const CartAPI = require('./routes/api/CartAPI');

let tls = false;
  if (process.env.NODE_ENV === 'development') {
   tls = {
     key: fs.readFileSync('./config/sslcerts/key.pem'),
     cert: fs.readFileSync('./config/sslcerts/cert.pem')
  };
}

server.connection({
  port: process.env.PORT || 8080,
  tls,
  host: '0.0.0.0'
});

Mongoose.connect('mongodb://localhost/carts', {'useMongoClient': true});
const db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log('Connection with database succeeded.');
});



server.start(err => {
  if (err) {
    throw err;
  }
  console.log(`server running at: ${server.info.uri}`);
});



server.register(inert, err => {
  if (err) {
    throw err;
  }
  server.route(CartAPI),

  server.route({
    method: 'GET',
    path: `/{param*}`,
    handler: {
      directory: {
        path: path.join(__dirname, `public`)
      }
    }
  });
});
