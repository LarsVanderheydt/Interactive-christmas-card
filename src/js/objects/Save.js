import CartAPI from '../lib/CartAPI';
import shortid from 'shortid';
const from = document.getElementById(`name_input`);
const to = document.getElementById(`recipient_input`);
const link = document.querySelector(`.unique_link`);

const handleSave = ({text, id, audioSettings, headColors}) => {

  CartAPI.create({
    text,
    id,
    from: from.value || 'Human',
    to: to.value || 'Fellow Human',
    audioSettings,
    headColors
  });

  link.innerHTML = `https://localhost:8080/santa.html?id=${id}`;
  link.setAttribute('href', `https://localhost:8080/santa.html?id=${id}`);
  link.setAttribute('target', `_blank`);
};

export default handleSave;
