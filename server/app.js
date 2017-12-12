const path = require('path');
const fs = require('fs');
const Hapi = require('hapi');
const inert = require('inert');
const Mongoose = require('mongoose');
const CartAPI = require('./routes/api/CartAPI');
const server = new Hapi.Server();

const {PORT = 8080, URL, MONGO_URL} = process.env;

let tls = false;
  if (process.env.NODE_ENV === 'development') {
   tls = {
     key: fs.readFileSync('./config/sslcerts/key.pem'),
     cert: fs.readFileSync('./config/sslcerts/cert.pem')
  };
}

server.connection({
  port: process.env.PORT || 8080,
  tls
});

Mongoose.connect(MONGO_URL, {'useMongoClient': true});
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
    path: `/{params*}`,
    handler: {
      directory: {
        path: path.join(__dirname, `public`)
      }
    }
  });
});
