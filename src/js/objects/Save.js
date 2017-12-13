import CartAPI from '../lib/cartAPI';
import shortid from 'shortid';
const name = document.getElementById(`name_input`);
const link = document.querySelector(`.unique_link`);

const HandleSave = ({text, sound}) => {

  const fileReader = new FileReader();
  fileReader.readAsArrayBuffer(sound);

  const id = shortid.generate();

  fileReader.onload = e => {
    const arrayBuffer = e.currentTarget.result;

    const buffer = toBuffer(arrayBuffer);

    CartAPI.create({
      text, id, name: name.value, sound: buffer
    });
  };


  link.innerHTML = `https://localhost:8080/santa.html?id=${id}`;
  link.setAttribute('href', `https://localhost:8080/santa.html?id=${id}`);
  link.setAttribute('target', `_blank`);
};

const toBuffer = ab => {
    var view = new Uint8Array(ab);
    for (var i = 0; i < buf.length; ++i) {
        buf[i] = view[i];
    }
    return buf;
}

export default HandleSave;
