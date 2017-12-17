import fetch from 'isomorphic-fetch';

const url = `/api/cart`;

export default {

  create: ({text, id, from, blob, to, audioSettings, headColors}) => {
    const method = `POST`;
    // const newFileName = `${id.split(` `).join(`_`)}`;
    const body = new FormData();
    body.append(`text`, text);
    body.append(`id`, id);
    body.append(`from`, from);
    body.append(`to`, to);
    body.append(`audioSettings`, audioSettings);
    body.append(`headColors`, headColors);

    return fetch(url, {method, body})
      .then(r => r.json());
  },

  read: () => {
    return fetch(`${url}?isActive=true`)
      .then(r => r.json());
  },

  readOne: id => {
    const method = `GET`;
    return fetch(`${url}/${id}`, {method}).then(r => r.json());
  }
};
