const Cart = require('../../schemas/Cart');
const Sound = require('../../schemas/Sound');
const Boom = require('boom');
const path = require('path');
const fs = require('fs');
const {omit, pick} = require(`lodash`);

module.exports = [
  {
    method: 'GET',
    path: '/api/cart',
    handler: function (request, reply) {
      Cart.find(function(error, Carts) {
          if (error) {
              console.error(error);
          }
          reply(Carts);
      });
    }
  },
  {
    method: ['PUT', 'POST'],
    path: '/api/cart',

    handler: function (request, reply) {
      const data = request.payload;

      const cart = new Cart({
          text: data.text,
          id: data.id,
          name: data.name,
          isActive: true,
          date: Date.now()
      });

      cart.save(function(error, cart) {
        if (error) {
            console.error(error);
        }
        reply(cart);
      });
      // if (data.sound) {
      //   const {filename} = data.sound.hapi;
      //   const folder = path.join(__dirname, `../../uploads`);
      //   const p = `${folder}/${filename}.ogg`;
      //   const f = fs.createWriteStream(p);
      //   f.on(`error`, err => {
      //     console.error(err);
      //   });
      //   data.sound.pipe(f);
      //   data.sound.on(`end`, () => {
      //     const d = pick(request.payload);
      //     d.sound = filename;
      //     console.log(d);
      //
      //   })
      // }
    }
  },
  {
    method: 'GET',
    path: '/api/cart/{id}',
    handler: function (request, reply) {
      const {id} = request.params;
      const filter = {id};

      Cart.findOne(filter).then(d => {
        // no data -> CODE: 404 => NOT FOUND
        if (!d) return reply(
          Boom.notFound(`id ${id} does not exist`)
        );

        return reply(
          d // data
        ); // CODE: 200 =>  OK
      }).catch(err => reply(
        Boom.badRequest(err.message) // mongoose, mongodb errors (400)
      ))
    }
  }
];
