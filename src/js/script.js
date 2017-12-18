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

<<<<<<< HEAD
  const dec2hex = (i) => {
    var result = "0x000000";
    if (i >= 0 && i <= 15) {
      result = "0x00000" + i.toString(16);
    } else if (i >= 16 && i <= 255) {
      result = "0x0000" + i.toString(16);
    } else if (i >= 256 && i <= 4095) {
      result = "0x000" + i.toString(16);
    } else if (i >= 4096 && i <= 65535) {
      result = "0x00" + i.toString(16);
    } else if (i >= 65535 && i <= 1048575) {
      result = "0x0" + i.toString(16);
    } else if (i >= 1048575) {
      result = '0x' + i.toString(16);
    }
    if (result.length == 8) {
      return result;
    }
  }

  const createScene = () => {;
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth /1.67;
    windowHalfX = WIDTH / 2;
    windowHalfY = HEIGHT / 2;

    scene = new THREE.Scene();
    aspectRatio = WIDTH / HEIGHT;
    fieldOfView = 50;
    nearPlane = 1;
    farPlane = 2000;

    camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
    camera.position.x = 0;
    camera.position.z = 70;
    camera.position.y = -5;

    renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
    renderer.setPixelRatio(window.devicePixelRatio? window.devicePixelRatio: 1)
    renderer.setSize(WIDTH, HEIGHT);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container = document.getElementById('container')
    container.appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', handleMouseMove, false);
  }

  const onWindowResize = () => {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth  / 1.67;
    windowHalfX = WIDTH / 2;
    windowHalfY = HEIGHT / 2;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
  }

  const handleMouseMove = e => {
    mousePos = {
      x: event.clientX,
      y: event.clientY
    };
  }

  const handleWindowResize = e => {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
  }


  const createLights = () => {
    globalLight = new THREE.HemisphereLight(0xffffff, 0x555555, .9);

    shadowLight = new THREE.DirectionalLight(0xffffff, .3);
    shadowLight.position.set(100, 250, 175);
    shadowLight.castShadow = true;

    backLight = new THREE.DirectionalLight(0xffffff, .2);
    backLight.position.set(-100, 200, 150);
    backLight.castShadow = true;

    if (isMobile) shadowLight.shadow.mapSize.width = shadowLight.shadow.mapSize.height = 1024;
    if (!isMobile) shadowLight.shadow.mapSize.width = shadowLight.shadow.mapSize.height = 2048;

    scene.add(globalLight);
    scene.add(shadowLight);
    scene.add(backLight);
    scene.add( new THREE.AmbientLight( 0xeadead, 0.1 ));
  }

  const createHead = () => {
    head.name = "Head";
    head = new Head();
    scene.add(head.mesh);
  }

  const createCharacter = () => {
    createHead();
    head.mesh.position.set(0, 2, 0);
    stars.mesh.position.set(0, 10, 0);
  }
=======
  const handleSave = () => {
    const from = document.getElementById(`name_input`);
    const to = document.getElementById(`recipient_input`);
    const link = document.querySelector(`.unique_link`);
>>>>>>> adc907dfd3aade8feb39982fd83ba2bb7bdf26ab

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
<<<<<<< HEAD
    blinkLoop();

    let xTarget = (mousePos.x - windowHalfX);
    let yTarget = (mousePos.y - windowHalfY);

    head.dizzy(xTarget, yTarget);
    //head.idle(xTarget, yTarget);

    renderer.render(scene, camera);
=======
    santa.loop();
>>>>>>> adc907dfd3aade8feb39982fd83ba2bb7bdf26ab
    requestAnimationFrame(loop);
  }

  init();
}
