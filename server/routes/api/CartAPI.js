const Cart = require('../../schemas/Cart');

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
      const cart = new Cart({
          text: request.payload.text,
          isActive: true
      });

      cart.save(function(error, cart) {
        if (error) {
            console.error(error);
        }
        reply(cart);
      });
    }
  }
];
