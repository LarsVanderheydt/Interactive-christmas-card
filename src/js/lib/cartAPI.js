import fetch from 'isomorphic-fetch';

const url = `/api/cart`;

export default {

  create: ({text}) => {
    const method = `POST`;
    const body = new FormData();
    body.append(`text`, text);

    return fetch(url, {method, body})
      .then(r => r.json());
  },

  read: () => {
    return fetch(`${url}?isActive=true`)
      .then(r => r.json());
  },

  delete: _id => {
    const method = `DELETE`;
    return fetch(`${url}/${_id}`, {method});
  }
};
