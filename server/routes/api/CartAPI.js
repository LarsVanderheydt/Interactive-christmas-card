const Cart = require('../../schemas/Cart');
const Boom = require('boom');

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
          from: data.name,
          isActive: true,
          sound: data.sound
      });

      cart.save(function(error, cart) {
        if (error) {
            console.error(error);
        }
        reply(cart);
      });
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
