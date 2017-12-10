import fetch from 'isomorphic-fetch';

const url = `/api/cart`;

export default {

  create: ({text, id, name}) => {
    const method = `POST`;
    const body = new FormData();
    body.append(`text`, text);
    body.append(`id`, id);
    body.append(`name`, name);

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
