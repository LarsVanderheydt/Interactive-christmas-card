import handleSantaAudio from './objects/handleSantaAudio';
import SantaScene from './classes/SantaScene';
import getUrlParameter from './objects/getUrlParameter';
import CardAPI from './lib/cardAPI';

let targetId, santa;

const init = () => {

  particlesJS.load(`particles-js`, `../assets/particles.json`);

  targetId = getUrlParameter(`id`);
  if (!targetId) window.location = `https://experimentalweb.herokuapp.com/notFound.html`;

  CardAPI.readOne(targetId).then(d => {
    if (d.statusCode) window.location = `https://experimentalweb.herokuapp.com/notFound.html`;
    document.getElementById(`from`).innerHTML = `${d.from}`;
    document.getElementById(`to`).innerHTML = `${d.to}`;
    document.getElementById(`message`).innerHTML = `${d.text}`;

    santa = new SantaScene();
    santa.setColors(d);
    handleSantaAudio(d);
    santa.createShapes();
    loop();
  });
};

const loop = () => {
  santa.recieverState();
  santa.startSpinning();

  santa.render();
  requestAnimationFrame(loop);
};

init();
