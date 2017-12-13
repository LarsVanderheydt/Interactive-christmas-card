import CartAPI from '../lib/cartAPI';
import shortid from 'shortid';
const name = document.getElementById(`name_input`);
const link = document.querySelector(`.unique_link`);

const handleSave = ({text, blob}) => {
  const id = shortid.generate();

  CartAPI.create({
    text,
    id,
    name: name.value,
    blob
  });

  link.innerHTML = `https://localhost:8080/santa.html?id=${id}`;
  link.setAttribute('href', `https://localhost:8080/santa.html?id=${id}`);
  link.setAttribute('target', `_blank`);
};

export default handleSave;
