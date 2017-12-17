import Head from '../classes/Head';
import Colors from './colors';

let scene, camera, fieldOfView, aspectRatio, nearPlane, farPlane, HEIGHT, WIDTH;
let globalLight, shadowLight, backLight, light, renderer, container, loaded;
let head, windowHalfX, windowHalfY;

let mousePos = { x: 0, y: 0};

const santaScene = data => {
  createScene();
  createLights();

  const headColors = JSON.parse(data.headColors);
  setColors(headColors);

  head = new Head(); // show and handle head
  scene.add(head.mesh);
  loop();
}

const setColors = (headColors) => {
  Colors.skin = headColors.skin;
  Colors.freckles = headColors.freckles;
  Colors.eye = headColors.eye;
  Colors.glasses = headColors.glasses;
  Colors.hat = headColors.hat;
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

let loaderManager = new THREE.LoadingManager();

const handleWindowResize = e => {
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  renderer.setSize(WIDTH, HEIGHT);
  camera.aspect = WIDTH / HEIGHT;
  camera.updateProjectionMatrix();
}

let isMobile = /iPhone|Android/i.test(navigator.userAgent);

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


let isBlinking = false;
const blinkLoop = () => {
  isBlinking = false;

  if ((!isBlinking) && (Math.random() > 0.99)) {
    isBlinking = true;
    blink();
  }
}

const blink = () => {
  head.eyes.scale.y = 1;
  TweenMax.to(head.eyes.scale, .07, {
    y: 0,
    yoyo: true,
    repeat: 1,
    onComplete: function() {
      isBlinking = false;
    }
  });
}

const loop = () => {
  blinkLoop();
  //head.dizzy();
  let xTarget = (mousePos.x - windowHalfX);
  let yTarget = (mousePos.y - windowHalfY);

  head.idle(xTarget, yTarget);
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
}

export default santaScene;
