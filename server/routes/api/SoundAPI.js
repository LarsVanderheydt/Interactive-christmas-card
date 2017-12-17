const Sound = require('../../schemas/Sound');
const Boom = require('boom');
const path = require('path');
const fs = require('fs');
const {omit, pick} = require(`lodash`);
const rimraf = require('rimraf');

module.exports = [
  {
    method: 'GET',
      path: '/api/sound',
      handler: function (request, reply) {
        Sound.find(function(error, Sounds) {
            if (error) {
                console.error(error);
            }
            reply(Sounds);
        });
      }
  },
  {
    method: ['PUT', 'POST'],
    path: '/api/sound',
    config: {
      payload: {
        output: `stream`,
        parse: true,
        allow: `multipart/form-data`
      },
    },

    handler: function (request, reply) {
      const data = request.payload;

      if (data.sound) {
        const {filename} = data.sound.hapi;
        const folder = path.join(__dirname, `../../uploads`);
        const p = `${folder}/${filename}.ogg`;
        const f = fs.createWriteStream(p);
        f.on(`error`, err => {
          console.error(err);
        });
        data.sound.pipe(f);
        data.sound.on(`end`, () => {
          const d = pick(request.payload);
          d.sound = filename;
          const sound = new Sound({
              id: data.id,
              isActive: true,
              sound: d.sound,
              date: Date.now()
          });

          sound.save(function(error, sound) {
            if (error) {
                console.error(error);
            }
            reply(sound);
          });
        })
      }
    }
  },
  {
    method: 'GET',
      path: '/api/sound/{id}',
      handler: function (request, reply) {
        const {id} = request.params;
        const filter = {id};

        Sound.findOne(filter).then(d => {
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
