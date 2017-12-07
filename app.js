const fs = require('fs');
const Hapi = require('hapi');
const inert = require('inert');
const server = new Hapi.Server();

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
  server.route({
    method: 'GET',
    path: `/{param*}`,
    handler: {
      directory: {
        path: `./server`, redirectToSlash: true, index: true
      }
    }
  });
});
