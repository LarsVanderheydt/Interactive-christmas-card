import fetch from 'isomorphic-fetch';

const url = `/api/sound`;

export default {

  create: ({id, blob}) => {
    const method = `POST`;
    const newFileName = `${id.split(` `).join(`_`)}`;
    const body = new FormData();
    body.append(`id`, id);
    body.append(`sound`, blob, newFileName);

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
