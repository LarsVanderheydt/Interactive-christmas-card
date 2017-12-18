import Head from './classes/Head';
import Colors from './objects/colors';
import Audio from './classes/Audio.js';
import CardAPI from './lib/cardAPI';
import SantaScene from './classes/SantaScene';
import ControllerText from './classes/ControllerText';

{
  let isMobile = /iPhone|Android/i.test(navigator.userAgent);
  let loaderManager = new THREE.LoadingManager();
  const saveBtn = document.getElementById(`save`);

  let scene, camera, fieldOfView, aspectRatio, nearPlane, farPlane, HEIGHT, WIDTH;
  let globalLight, shadowLight, backLight, light, renderer, container, loaded;
  let head, stars, windowHalfX, windowHalfY, color, audio, SpeechText;
  let santa;

  // vars for dat.gui
  let controller, gui;

  let mousePos = { x: 0, y: 0};

  let starArray = [];
  let saved = false;

  const init = () => {
    // create snow
    particlesJS.load('particles-js', '../assets/particles.json');

    santa = new SantaScene();
    audio = new Audio(); // handle audio and speechrecognition

    // send objects to save on click
    saveBtn.addEventListener(`click`, () => {
      handleSave();
    });

    controller = new ControllerText();
    guiController(['skin', 'freckles', 'eye', 'glasses', 'hat']); // add gui for array object and set colors on color change

    loop();
  };

  const guiController = keys => {
    gui = new dat.GUI();
    gui.domElement.id = 'gui';
    gui.closed = true;

    keys.forEach(key => {
      gui.addColor(controller, key).onChange(() => {

        // set right color for material
        switch (key) {
          case 'skin': Colors.skin = controller.skin;
          case 'freckles': Colors.freckles = controller.freckles;
          case 'eye': Colors.eye = controller.eye;
          case 'glasses': Colors.glasses = controller.glasses;
          case 'hat': Colors.hat = controller.hat;
        }

        santa.createHead();
      });
    });
  }

  const handleSave = () => {
    const from = document.getElementById(`name_input`);
    const to = document.getElementById(`recipient_input`);
    const link = document.querySelector(`.unique_link`);

    const audioSettings = {
      pitch: audio.pitchRatio,
      overlap: audio.overlap
    }

    const headColors = {
      skin: Colors.skin,
      freckles: Colors.freckles,
      eye: Colors.eye,
      glasses: Colors.glasses,
      hat: Colors.hat
    }

    const data = {
      text: audio.txt,
      id: audio.id,
      from: from.value || 'Human',
      to: to.value || 'Fellow Human',
      audioSettings: JSON.stringify(audioSettings),
      headColors: JSON.stringify(headColors)
    }

    // when clicking on save, first time save the object, second time update the saved object
    if (!saved) {
      saved = true;
      CardAPI.create(data);
    } else {
      CardAPI.update(data);
    }

    link.innerHTML = `https://experimentalweb.herokuapp.com/santa.html?id=${audio.id}`;
    link.setAttribute('href', `https://experimentalweb.herokuapp.com/santa.html?id=${audio.id}`);
    link.setAttribute('target', `_blank`);
  }

  const loop = () => {
    santa.loop();
    requestAnimationFrame(loop);
  }

  init();
}
