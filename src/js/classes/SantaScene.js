import Head from './Head';
import Colors from '../objects/colors';
import HeartsGroup from './HeartsGroup';

let scene, camera, fieldOfView, aspectRatio, nearPlane, farPlane, HEIGHT, WIDTH;
let globalLight, shadowLight, backLight, light, renderer, container, loaded;
let head, windowHalfX, windowHalfY;
let spinningShapes;

let mousePos = { x: 0, y: 0};
let onErrorPage = false;
let onHome, isBlinking = false;

let loaderManager = new THREE.LoadingManager();
let isMobile = /iPhone|Android/i.test(navigator.userAgent);

class SantaScene {
  constructor() {
    this.createScene();
    this.createLights();

    head = new Head(); // show and handle head
    scene.add(head.mesh);

    window.scene = scene;
  }

  createShapes(type = 'hearts') {
    spinningShapes = new HeartsGroup(type);
    scene.add(spinningShapes.mesh);
  }

  startSpinning() {
    spinningShapes.spinScale()
  };

  setColors(data) {
    const headColors = JSON.parse(data.headColors);

    Colors.skin = headColors.skin;
    Colors.freckles = headColors.freckles;
    Colors.eye = headColors.eye;
    Colors.glasses = headColors.glasses;
    Colors.hat = headColors.hat;

    this.createHead();
  }

  errorText() {
    const loader = new THREE.FontLoader();
    const mesh = new THREE.Object3D();

    loader.load('/assets/helvetiker_bold.typeface.json', function(font) {

      const skinMat = new THREE.MeshLambertMaterial({color: 0xe9ebee, flatShading: true});
      const fontSettings = {
        font: font,
        size: 4,
        height: 2,
        curveSegments: 12,
        bevelEnabled: false
      }

      const firstGeom = new THREE.TextGeometry('404 Santa', fontSettings);
      const secondGeom = new THREE.TextGeometry('is a bit confused', fontSettings);

      const first = new THREE.Mesh(firstGeom, skinMat);
      const second = new THREE.Mesh(secondGeom, skinMat);

      mesh.add(first);
      mesh.add(second);

      first.position.y = 5;
      first.position.x = 4;
      mesh.position.y = -4;
      mesh.rotation.y = -0.3;
      scene.add(mesh);
    });
  }

  senderState() {
    let xTarget = (mousePos.x - windowHalfX);
    let yTarget = (mousePos.y - windowHalfY);

    head.sender(xTarget, yTarget);
  }

  recieverState() {
    let xTarget = (mousePos.x - windowHalfX - 40);
    let yTarget = (mousePos.y - windowHalfY);
    head.reciever(xTarget, yTarget);
  }

  createScene(){;
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;

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
    window.addEventListener('resize', () => {
      this.onWindowResize();
    }, false);
    document.addEventListener('mousemove', () => {
      this.handleMouseMove();
    }, false);
  }

  onWindowResize() {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    windowHalfX = WIDTH / 2;
    windowHalfY = HEIGHT / 2;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
  }

  handleMouseMove(e) {
    mousePos = {
      x: event.clientX,
      y: event.clientY
    };
  }

  handleWindowResize(e) {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
  }

  createLights() {
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

  blinkLoop() {
    isBlinking = false;

    if ((!isBlinking) && (Math.random() > 0.99)) {
      isBlinking = true;
      this.blink();
    }
  }

  blink() {
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

  createHead() {
    scene.remove(head.mesh);
    head.name = "Head";
    head = new Head();
    scene.add(head.mesh);
  }

  render() {


    renderer.render(scene, camera);
  }
}

export default SantaScene;
