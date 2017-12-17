import CartAPI from '../lib/CartAPI';
import shortid from 'shortid';
const name = document.getElementById(`name_input`);
const link = document.querySelector(`.unique_link`);

const handleSave = ({text, id}) => {

  CartAPI.create({
    text,
    id,
    name: name.value
  });

  link.innerHTML = `https://localhost:8080/santa.html?id=${id}`;
  link.setAttribute('href', `https://localhost:8080/santa.html?id=${id}`);
  link.setAttribute('target', `_blank`);
};

export default handleSave;
