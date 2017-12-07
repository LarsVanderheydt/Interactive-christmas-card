/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Colors = {
  skin: 0xffe0bd,
  white: 0xe9ebee,
  teeth: 0xffffff,
  beige: 0xa49178,
  brown: 0x6e5136,
  black: 0x2e2e2e,
  lightBlue: 0x6295a8,
  yellow: 0xfff000
};

/* harmony default export */ __webpack_exports__["a"] = (Colors);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_Head__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_Audio_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_SpeechRecognition_js__ = __webpack_require__(5);





{
  let scene,
    camera,
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane,
    HEIGHT,
    WIDTH,
    globalLight,
    shadowLight,
    backLight,
    light,
    renderer,
    container,
    controls,
    loaded,
    head,
    stars,
    windowHalfX,
    windowHalfY,
    audio;

  let starArray = [];

  const init = () => {
    createScene();
    createLights();

    // audio = new Audio();
    new __WEBPACK_IMPORTED_MODULE_3__classes_SpeechRecognition_js__["a" /* default */]();


    particlesJS.load('container', '../assets/particles.json', () => {
      console.log('callback - particles.js config loaded');
    });

    head = new __WEBPACK_IMPORTED_MODULE_0__classes_Head__["a" /* default */]();
    scene.add(head.mesh);

    window.scene = scene;

    loop();
  };

  const createScene = () => {;
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;

    scene = new THREE.Scene();
    //scene.fog = new THREE.Fog(0xffffff, 150,300);
    aspectRatio = WIDTH / HEIGHT;
    fieldOfView = 50;
    nearPlane = 1;
    farPlane = 2000;
    camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
    camera.position.x = 0;
    camera.position.z = 70;
    camera.position.y = 0;

    renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
    renderer.setPixelRatio(
      window.devicePixelRatio
      ? window.devicePixelRatio
      : 1)
    renderer.setSize(WIDTH, HEIGHT);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container = document.getElementById('container')
    container.appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize, false);
    //handleWindowResize();

  }

  const onWindowResize = () => {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    windowHalfX = WIDTH / 2;
    windowHalfY = HEIGHT / 2;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
  }

  let loaderManager = new THREE.LoadingManager();

  const onStart = (url, itemsLoaded, itemsTotal) => {
    console.log('Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');
  }

  const onLoad = () => {
    console.log('Loading complete!');
    finishedLoading();
  }

  const onProgress = (url, itemsLoaded, itemsTotal) => {
    console.log('Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');
  }

  const onError = (url) => {
    console.log('There was an error loading ' + url);
  }

  const finishedLoading = () => {
    loaded = true;
  }

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
    // shadowLight.shadow.camera.left = -150;
    // shadowLight.shadow.camera.right = 150;
    // shadowLight.shadow.camera.top = 150;
    // shadowLight.shadow.camera.bottom = -150;
    // shadowLight.shadow.camera.near = 1;
    // shadowLight.shadow.camera.far = 1000;

    backLight = new THREE.DirectionalLight(0xffffff, .2);
    backLight.position.set(-100, 200, 150);
    backLight.castShadow = true;
    //backLight.position.set(100, 100, -200);

    if (isMobile)
      shadowLight.shadow.mapSize.width = shadowLight.shadow.mapSize.height = 1024;
    if (!isMobile)
      shadowLight.shadow.mapSize.width = shadowLight.shadow.mapSize.height = 2048;

    scene.add(globalLight);
    scene.add(shadowLight);
    scene.add(backLight);
    scene.add( new THREE.AmbientLight( 0xeadead, 0.1 ));
  }

  // class Star {
  //   constructor(){
  //
  //   STAR
  //   //////////////////////////////////
  //
  //   this.mesh = new THREE.Object3D();
  //
  //   let pts = [],
  //     numPts = 5;
  //   for (let i = 0; i < numPts * 2; i++) {
  //     let l = i % 2 == 1
  //       ? 1
  //       : 2;
  //     let a = i / numPts * Math.PI;
  //     pts.push(new THREE.Vector2(Math.cos(a) * l, Math.sin(a) * l));
  //   }
  //   let starShape = new THREE.Shape(pts);
  //
  //   let extrudeSettings = {
  //     amount: 0.5,
  //     steps: 1,
  //     bevelEnabled: false
  //   };
  //   let starGeom = new THREE.ExtrudeGeometry(starShape, extrudeSettings);
  //   let star = new THREE.Mesh(starGeom, yellowMat);
  //   star.rotation.x = Math.PI / 2;
  //   this.mesh.add(star);
  // }
  // }
  //
  // let StarsGroup = function() {
  //
  //     this.mesh = new THREE.Object3D();
  //
  //     this.nStars = 15;
  //
  //     let stepAngle = Math.PI * 2 / this.nStars;
  //
  //      Create the Stars
  //     for (let i = 0; i < this.nStars; i++) {
  //
  //       this.s = new Star();
  //       let a = stepAngle * i;
  //       let r = 15;
  //
  //       this.s.mesh.position.y = Math.sin(a) * r;
  //       this.s.mesh.position.x = Math.cos(a) * r;
  //
  //       this.s.mesh.rotation.z = a + Math.PI / 2;
  //       this.s.mesh.position.z = 0 - Math.random() * 3;
  //
  //         random scale for each cloud
  //       let sc = 0.5 + Math.random() * .6;
  //       this.s.mesh.scale.set(sc, sc, sc);
  //
  //       this.mesh.add(this.s.mesh);
  //       starArray.push(this.s);
  //     }
  //     this.mesh.rotation.x = Math.PI / 2;
  // }

  const createHead = () => {
    head = new __WEBPACK_IMPORTED_MODULE_0__classes_Head__["a" /* default */]();
    head.idle();
    //console.log(head.head.rotation);
    scene.add(head.mesh);
    //stars = new StarsGroup();
    //scene.add(stars.mesh);
  }

  const createCharacter = () => {
    createHead();
    head.mesh.position.set(0, 2, 0);
    //stars.mesh.position.set(0, 10, 0);
  }

  //BLINK
  ////////////////////
  let isBlinking = false;
  const blinkLoop = () => {
    isBlinking = false;

    if ((!isBlinking) && (Math.random() > 0.99)) {
      console.log('blink');
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

  //HEAD ANIMATIONS
  ////////////////////

  // Head.prototype.dizzy = function() {
  //
  //     let distance = 1;
  //
  //     this.head.rotation.z = Math.sin(Date.now() * 0.005) * Math.PI * 0.01;
  //     this.head.rotation.x = Math.sin(Date.now() * 0.01) * Math.PI * 0.01;
  //     this.head.rotation.y = Math.sin(Date.now() * 0.005) * Math.PI * 0.01;
  //
  //     this.eyeBlueRight.position.x = Math.sin(Date.now() * 0.005) * -distance;
  //     this.eyeBlueLeft.position.x = Math.sin(Date.now() * 0.005) * distance;
  //     this.eyeBlueRight.position.y = Math.cos(Date.now() * 0.005) * -distance;
  //     this.eyeBlueLeft.position.y = Math.cos(Date.now() * 0.005) * distance;
  //     this.eyeBrowRight.position.y = Math.cos(Date.now() * 0.005) * -distance;
  //     this.eyeBrowLeft.position.y = Math.cos(Date.now() * 0.005) * distance;
  //
  //     this.moustache.rotation.z = Math.sin(Date.now() * 0.005) * Math.PI * 0.05;
  //
  //     blinkLoop();
  //     stars.spinScale();
  //
  //   }

  //STARGROUP
  // StarsGroup.prototype.spinScale = function() {
  //
  //     this.mesh.rotation.z += 0.02;
  //
  //     for (let i = 0; i < starArray.length; i++) {
  //        starArray[i].mesh.rotation.x = Math.sin(Date.now() * 0.01) * Math.PI * 0.1 ;
  //       starArray[i].mesh.rotation.z += 0 - Math.random() * 0.15;
  //       starArray[i].mesh.rotation.x += 0 - Math.random() * 0.05;
  //
  //     }
  //   }

  const loop = () => {
    blinkLoop();
    //head.dizzy();

    head.idle();
    renderer.render(scene, camera);
    requestAnimationFrame(loop);
  }

  //window.addEventListener('load', init, false);

  init();

}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_Materials__ = __webpack_require__(3);



let isBlinking = false;

class Head {
  constructor() {
    this.mesh = new THREE.Object3D();

    let headGeom = new THREE.BoxBufferGeometry(16, 16, 16);
    this.head = new THREE.Mesh(headGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].skinMat);
    this.head.castShadow = true;
    this.head.receiveShadow = false;
    this.mesh.add(this.head);

    this.beard = new THREE.Object3D();
    this.beard.position.y = -7;
    this.beard.position.z = 0.5;
    this.head.add(this.beard);

    this.Beard();
    this.Glasses();
    this.Hair();
    this.Eyes();
    this.EyeBrows();
    this.Freckles();
    this.Features();
    this.idle();
  }

  idle() {
    let distance = 1;

    this.head.rotation.z = Math.sin(Date.now() * 0.005) * Math.PI * 0.01;
    this.head.rotation.x = Math.sin(Date.now() * 0.01) * Math.PI * 0.01;
    this.head.rotation.y = Math.sin(Date.now() * 0.005) * Math.PI * 0.01;

    this.eyeBlueRight.position.x = Math.sin(Date.now() * 0.005) * distance;
    this.eyeBlueLeft.position.x = Math.sin(Date.now() * 0.005) * distance;
    this.eyeBrowRight.position.y = Math.sin(Date.now() * 0.005) * distance;
    this.eyeBrowLeft.position.y = Math.cos(Date.now() * 0.005) * distance;

    this.moustache.position.y = Math.cos(Date.now() * 0.01) * distance / 2;
    this.moustache.rotation.z = Math.sin(Date.now() * 0.01) * Math.PI * 0.01;

    this.mesh.rotation.y = Math.sin(Date.now() * 0.001) * Math.PI * 0.1;
  }

  Beard() {
    //BEARD
    ////////////////////////////////////

    let beardGeomMerged = new THREE.Geometry();

    let beard1Geom = new THREE.BoxGeometry(2, 12, 16);

    let beard1 = new THREE.Mesh(beard1Geom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    beard1.applyMatrix(new THREE.Matrix4().makeTranslation(9, 0, 0));
    beard1.updateMatrix();
    beardGeomMerged.merge(beard1.geometry, beard1.matrix);

    let beard2 = new THREE.Mesh(beard1Geom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    beard2.applyMatrix(new THREE.Matrix4().makeTranslation(7, -3, 2));
    beard2.scale.z = 0.8;
    beard2.updateMatrix();
    beardGeomMerged.merge(beard2.geometry, beard2.matrix);

    let beard3 = beard1.clone();
    beard3.position.x = -beard1.position.x;
    beard3.updateMatrix();
    beardGeomMerged.merge(beard3.geometry, beard3.matrix);

    let beard4 = beard2.clone();
    beard4.position.x = -beard2.position.x;
    beard4.updateMatrix();
    beardGeomMerged.merge(beard4.geometry, beard4.matrix);

    let beard2Geom = new THREE.BoxGeometry(3, 14, 10);
    beard2Geom.vertices[2].z -= 2;
    beard2Geom.vertices[7].z -= 2;

    let beard5 = new THREE.Mesh(beard2Geom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    beard5.applyMatrix(new THREE.Matrix4().makeTranslation(5, -5, 5.5));
    beard5.updateMatrix();
    beardGeomMerged.merge(beard5.geometry, beard5.matrix);

    let beard3Geom = new THREE.BoxGeometry(3, 14, 10);
    beard3Geom.vertices[2].z -= 2;
    beard3Geom.vertices[7].z -= 2;

    let beard6 = new THREE.Mesh(beard3Geom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    beard6.applyMatrix(new THREE.Matrix4().makeTranslation(2, -6, 5.5));
    beard6.updateMatrix();
    beardGeomMerged.merge(beard6.geometry, beard6.matrix);

    let beard7 = beard5.clone();
    beard7.position.x = -beard5.position.x;
    beard7.updateMatrix();
    beardGeomMerged.merge(beard7.geometry, beard7.matrix);
    let beard8 = beard6.clone();
    beard8.position.x = -beard6.position.x;
    beard8.updateMatrix();
    beardGeomMerged.merge(beard8.geometry, beard8.matrix);

    let beard4Geom = new THREE.BoxGeometry(1, 14.5, 10);
    beard4Geom.vertices[2].z -= 1;
    beard4Geom.vertices[7].z -= 1;
    let beard9 = new THREE.Mesh(beard4Geom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    beard9.applyMatrix(new THREE.Matrix4().makeTranslation(0, -6.25, 5.75));
    beard9.updateMatrix();
    beardGeomMerged.merge(beard9.geometry, beard9.matrix);

    let beard5Geom = new THREE.BoxGeometry(4, 8, 8);
    let beard10 = new THREE.Mesh(beard5Geom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    beard10.applyMatrix(new THREE.Matrix4().makeTranslation(-6, -1, -2));
    beard10.updateMatrix();
    beardGeomMerged.merge(beard10.geometry, beard10.matrix);

    let beard11 = new THREE.Mesh(beard5Geom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    beard11.applyMatrix(new THREE.Matrix4().makeTranslation(6, -1, -2));
    beard11.updateMatrix();
    beardGeomMerged.merge(beard11.geometry, beard11.matrix);

    let beardMerged = new THREE.Mesh(beardGeomMerged, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    beardMerged.castShadow = true;
    beardMerged.receiveShadow = true;

    let mouthGeom = new THREE.BoxGeometry(10, 4, 1);
    let mouth = new THREE.Mesh(mouthGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].blackMat);
    mouth.position.set(0, 2, 8);
    mouth.castShadow = false;
    mouth.receiveShadow = true;

    let teethGeom = new THREE.BoxGeometry(10, 1, 1);
    let teeth = new THREE.Mesh(teethGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].teethMat);
    teeth.position.set(0, 0.5, 0.1);
    teeth.castShadow = false;
    teeth.receiveShadow = true;
    mouth.add(teeth)

    // let smileGeom = new THREE.TorusGeometry(4, 1.5, 2, 6, -Math.PI);
    // this.smile = new THREE.Mesh(smileGeom, blackMat);
    // this.smile.position.set(0, 2, 10);
    // this.smile.castShadow = false;
    // this.smile.receiveShadow = true;
    //
    // this.beard.add(beardMerged, mouth, this.smile);
    this.beard.add(beardMerged, mouth);

    let moustacheGeom = new THREE.BoxGeometry(14, 3, 3, 3);
    moustacheGeom.vertices[0].y -= 2;
    moustacheGeom.vertices[1].y -= 2;
    moustacheGeom.vertices[2].y -= 2;
    moustacheGeom.vertices[3].y -= 2;
    moustacheGeom.vertices[4].y -= 2;
    moustacheGeom.vertices[5].y -= 2;
    moustacheGeom.vertices[6].y -= 2;
    moustacheGeom.vertices[7].y -= 2;
    moustacheGeom.vertices[8].x -= 1;
    moustacheGeom.vertices[9].x += 1;

    moustacheGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 4, 0));
    this.moustache = new THREE.Mesh(moustacheGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    this.moustache.castShadow = true;
    this.moustache.receiveShadow = true;

    this.moustache.position.set(0, 0, 9);
    this.beard.add(this.moustache);
  }

  Glasses() {
    //GLASSES
    //////////////////////////////////

    this.glasses = new THREE.Object3D();
    this.glasses.position.set(0,0,9);
    this.head.add(this.glasses);


    let frameGeomMerged = new THREE.Geometry();

    let frameOuterGeom = new THREE.BoxGeometry(6,5,1);
    let frameInnerGeom = new THREE.BoxGeometry(4,3,1);

    frameOuterGeom.applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI/45));
    frameInnerGeom.applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI/45));

    let frameBSP = new ThreeBSP(frameOuterGeom);
    let frameCutBSP = new ThreeBSP(frameInnerGeom);

    let frameintersectionBSP = frameBSP.subtract(frameCutBSP);
    let frameLeft = frameintersectionBSP.toMesh(__WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].blackMat);

    frameLeft.applyMatrix( new THREE.Matrix4().makeTranslation(4, 3, 0));
    frameLeft.updateMatrix();
    frameGeomMerged.merge(frameLeft.geometry, frameLeft.matrix);

    let frameRight = frameLeft.clone();
    frameRight.applyMatrix(new THREE.Matrix4().makeRotationZ(Math.PI/30));
    frameRight.applyMatrix( new THREE.Matrix4().makeTranslation(-7.5, -0.25, 0));
    frameRight.updateMatrix();
    frameGeomMerged.merge(frameRight.geometry, frameRight.matrix);

    let frameMidGeom = new THREE.BoxGeometry(3,1,1);
    let frameMid = new THREE.Mesh(frameMidGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].blackMat);
    frameMid.applyMatrix( new THREE.Matrix4().makeTranslation(0, 3, 0));
    frameMid.updateMatrix();
    frameGeomMerged.merge(frameMid.geometry, frameMid.matrix);

    let frameEndGeom = new THREE.BoxGeometry(1.5,1,1);
    let frameEndRight = new THREE.Mesh(frameEndGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].blackMat);
    frameEndRight.applyMatrix( new THREE.Matrix4().makeTranslation(7.5, 3, 0));
    frameEndRight.updateMatrix();
    frameGeomMerged.merge(frameEndRight.geometry, frameEndRight.matrix);

    let frameEndLeft = frameEndRight.clone();
    frameEndLeft.position.x = -frameEndRight.position.x;
    frameEndLeft.updateMatrix();
    frameGeomMerged.merge(frameEndLeft.geometry, frameEndLeft.matrix);

    let frameSpokeGeom = new THREE.BoxGeometry(1,1,12);
    let frameSpokeRight = new THREE.Mesh(frameSpokeGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].blackMat);
    frameSpokeRight.applyMatrix( new THREE.Matrix4().makeTranslation(8, 3, -5.5));
    frameSpokeRight.updateMatrix();
    frameGeomMerged.merge(frameSpokeRight.geometry, frameSpokeRight.matrix);

    let frameSpokeLeft = frameSpokeRight.clone();
    frameSpokeLeft.position.x = -frameSpokeRight.position.x;
    frameSpokeLeft.updateMatrix();
    frameGeomMerged.merge(frameSpokeLeft.geometry, frameSpokeLeft.matrix);

    let frameMerged = new THREE.Mesh(frameGeomMerged, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].blackMat);
    frameMerged.castShadow = true;
    frameMerged.receiveShadow = true;

    this.glasses.add(frameMerged);

  }

  Hair() {
    //HAIR
    ////////////////////////////////////

    this.hair = new THREE.Object3D();
    this.hair.position.set(0, 9, 0);
    this.head.add(this.hair);

    let hairGeomMerged = new THREE.Geometry();

    let hairFlatGeom = new THREE.BoxGeometry(10, 2, 18);

    let hair1 = new THREE.Mesh(hairFlatGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    hair1.applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI / 40));
    hair1.applyMatrix(new THREE.Matrix4().makeTranslation(-4, -0.5, 0));
    hair1.updateMatrix();
    hairGeomMerged.merge(hair1.geometry, hair1.matrix);

    let hair2 = new THREE.Mesh(hairFlatGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    hair2.applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI / 10));
    hair2.applyMatrix(new THREE.Matrix4().makeTranslation(-2, 1, 0));
    hair2.updateMatrix();
    hairGeomMerged.merge(hair2.geometry, hair2.matrix);

    let hair3 = new THREE.Mesh(hairFlatGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    hair3.applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI / 5));
    hair3.applyMatrix(new THREE.Matrix4().makeTranslation(2, 1, 0));
    hair3.updateMatrix();
    hairGeomMerged.merge(hair3.geometry, hair3.matrix);

    let hair4 = new THREE.Mesh(hairFlatGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    hair4.applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI / 4));
    hair4.applyMatrix(new THREE.Matrix4().makeTranslation(6, 0, 0));
    hair4.updateMatrix();
    hairGeomMerged.merge(hair4.geometry, hair4.matrix);

    let hairFlatBackGeom = new THREE.BoxGeometry(18, 7, 6);
    hairFlatBackGeom.vertices[0].x -= 1;
    hairFlatBackGeom.vertices[1].x -= 1;
    hairFlatBackGeom.vertices[4].x += 1;
    hairFlatBackGeom.vertices[5].x += 1;

    let hair5 = new THREE.Mesh(hairFlatBackGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    hair5.applyMatrix(new THREE.Matrix4().makeTranslation(0, -4.5, -6));
    hair5.updateMatrix();
    hairGeomMerged.merge(hair5.geometry, hair5.matrix);

    let hairTuftGeom = new THREE.CylinderGeometry(1, 1.5, 10, 4);

    let hairTuft1 = new THREE.Mesh(hairTuftGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    hairTuft1.applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI / 10));
    hairTuft1.applyMatrix(new THREE.Matrix4().makeRotationX(Math.PI / 10));
    hairTuft1.applyMatrix(new THREE.Matrix4().makeTranslation(-4, 2, -4));
    hairTuft1.updateMatrix();
    hairGeomMerged.merge(hairTuft1.geometry, hairTuft1.matrix);

    let hairTuft4 = hairTuft1.clone();
    hairTuft4.applyMatrix(new THREE.Matrix4().makeRotationX(Math.PI / 8));
    hairTuft4.applyMatrix(new THREE.Matrix4().makeTranslation(4, -.5, 1));
    hairTuft4.updateMatrix();
    hairGeomMerged.merge(hairTuft4.geometry, hairTuft4.matrix);

    let hairTuft7 = hairTuft1.clone();
    hairTuft7.applyMatrix(new THREE.Matrix4().makeRotationX(Math.PI / 8));
    hairTuft7.applyMatrix(new THREE.Matrix4().makeRotationZ(Math.PI / 8));
    hairTuft7.applyMatrix(new THREE.Matrix4().makeTranslation(0.5, -1, 2));
    hairTuft7.updateMatrix();
    hairGeomMerged.merge(hairTuft7.geometry, hairTuft7.matrix);

    let hairTuft2 = new THREE.Mesh(hairTuftGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    hairTuft2.applyMatrix(new THREE.Matrix4().makeRotationZ(Math.PI / 6));
    hairTuft2.applyMatrix(new THREE.Matrix4().makeRotationX(Math.PI / 10));
    hairTuft2.applyMatrix(new THREE.Matrix4().makeTranslation(-6.5, -1, -1));
    hairTuft2.updateMatrix();
    hairGeomMerged.merge(hairTuft2.geometry, hairTuft2.matrix);

    let hairTuft5 = hairTuft2.clone();
    hairTuft5.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 10));
    hairTuft5.applyMatrix(new THREE.Matrix4().makeTranslation(2, 1.5, -5));
    hairTuft5.updateMatrix();
    hairGeomMerged.merge(hairTuft5.geometry, hairTuft5.matrix);

    let hairTuft3 = new THREE.Mesh(hairTuftGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    hairTuft3.applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI / 3));
    hairTuft3.applyMatrix(new THREE.Matrix4().makeRotationX(Math.PI / 3));
    hairTuft3.applyMatrix(new THREE.Matrix4().makeTranslation(3, 3, -3));
    hairTuft3.updateMatrix();
    hairGeomMerged.merge(hairTuft3.geometry, hairTuft3.matrix);

    let hairTuft6 = hairTuft3.clone();
    hairTuft6.applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI / 10));
    hairTuft6.applyMatrix(new THREE.Matrix4().makeRotationY(-Math.PI / 5));
    hairTuft6.applyMatrix(new THREE.Matrix4().makeTranslation(2, -1.5, -1));
    hairTuft6.updateMatrix();
    hairGeomMerged.merge(hairTuft6.geometry, hairTuft6.matrix);

    let hairTuft8 = hairTuft6.clone();
    hairTuft8.applyMatrix(new THREE.Matrix4().makeRotationX(Math.PI / 30));
    hairTuft8.applyMatrix(new THREE.Matrix4().makeTranslation(-1.5, 1.5, 3.5));
    hairTuft8.updateMatrix();
    hairGeomMerged.merge(hairTuft8.geometry, hairTuft8.matrix);

    let hairTuft9 = hairTuft2.clone();
    hairTuft9.applyMatrix(new THREE.Matrix4().makeRotationY(Math.PI / 2));
    hairTuft9.applyMatrix(new THREE.Matrix4().makeRotationX(Math.PI / 7));
    hairTuft9.applyMatrix(new THREE.Matrix4().makeTranslation(3.5, 5.5, -5));
    hairTuft9.updateMatrix();
    hairGeomMerged.merge(hairTuft9.geometry, hairTuft9.matrix);

    let hairTuft10 = hairTuft9.clone();
    hairTuft10.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 4));
    hairTuft10.applyMatrix(new THREE.Matrix4().makeTranslation(-.5, -1, -6));
    hairTuft10.updateMatrix();
    hairGeomMerged.merge(hairTuft10.geometry, hairTuft10.matrix);

    let hairMerged = new THREE.Mesh(hairGeomMerged, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    hairMerged.castShadow = true;
    hairMerged.receiveShadow = true;

    this.hair.add(hairMerged);

  }

  Eyes() {
    //EYES
    ////////////////////////////////////

    this.eyes = new THREE.Object3D();
    this.eyes.position.set(0, 3, 9);
    this.head.add(this.eyes);

    let eyeWhiteGeom = new THREE.PlaneGeometry(2.5, 2.5);

    let eyeWhiteRight = new THREE.Mesh(eyeWhiteGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    eyeWhiteRight.position.set(-3.75, 0, 0);
    eyeWhiteRight.castShadow = false;
    eyeWhiteRight.receiveShadow = false;

    let eyeBlueGeom = new THREE.PlaneGeometry(1.5, 1.5);

    this.eyeBlueRight = new THREE.Mesh(eyeBlueGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].blueMat);
    this.eyeBlueRight.position.set(0, 0, .01);
    this.eyeBlueRight.castShadow = false;
    this.eyeBlueRight.receiveShadow = false;

    eyeWhiteRight.add(this.eyeBlueRight);

    let eyePupilGeom = new THREE.PlaneGeometry(1, 1);

    this.eyePupilRight = new THREE.Mesh(eyePupilGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].blackMat);
    this.eyePupilRight.position.set(0, 0, .02);
    this.eyePupilRight.castShadow = false;
    this.eyePupilRight.receiveShadow = false;

    this.eyeBlueRight.add(this.eyePupilRight);

    let eyeWhiteLeft = new THREE.Mesh(eyeWhiteGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    eyeWhiteLeft.position.set(3.75, 0, 0);
    eyeWhiteLeft.castShadow = false;
    eyeWhiteLeft.receiveShadow = false;

    this.eyeBlueLeft = new THREE.Mesh(eyeBlueGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].blueMat);
    this.eyeBlueLeft.position.set(0, 0, .01);
    this.eyeBlueLeft.castShadow = false;
    this.eyeBlueLeft.receiveShadow = false;

    eyeWhiteLeft.add(this.eyeBlueLeft);

    this.eyePupilLeft = new THREE.Mesh(eyePupilGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].blackMat);
    this.eyePupilLeft.position.set(0, 0, .02);
    this.eyePupilLeft.castShadow = false;
    this.eyePupilLeft.receiveShadow = false;

    this.eyeBlueLeft.add(this.eyePupilLeft);

    this.eyes.add(eyeWhiteRight, eyeWhiteLeft);
  }

  EyeBrows() {
    //EYE BROWS
    ////////////////////////////////////

    this.eyeBrows = new THREE.Object3D();
    this.eyeBrows.position.set(0, 6, 8);
    this.head.add(this.eyeBrows);

    let eyeBrowGeom = new THREE.BoxGeometry(4, 1, 1);

    this.eyeBrowRight = new THREE.Mesh(eyeBrowGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    this.eyeBrowRight.applyMatrix(new THREE.Matrix4().makeRotationZ(Math.PI / 45));
    this.eyeBrowRight.position.set(-3.75, 0, 0);
    this.eyeBrowRight.castShadow = false;
    this.eyeBrowRight.receiveShadow = false;

    this.eyeBrowLeft = new THREE.Mesh(eyeBrowGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
    this.eyeBrowLeft.applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI / 45));
    this.eyeBrowLeft.position.set(3.75, 0, 0);
    this.eyeBrowLeft.castShadow = false;
    this.eyeBrowLeft.receiveShadow = false;

    this.eyeBrows.add(this.eyeBrowRight, this.eyeBrowLeft);
  }

  Freckles() {
    //Freckles
    ////////////////////////////////////
    this.freckles = new THREE.Object3D();
    this.freckles.position.set(0, 0, 8);
    this.head.add(this.freckles);

    let frecklesGeomMerged = new THREE.Geometry();

    let frecklesGeom = new THREE.PlaneGeometry(0.5, 0.5);

    let freckle1 = new THREE.Mesh(frecklesGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].brownMat);
    freckle1.applyMatrix(new THREE.Matrix4().makeTranslation(-5, 0, 0.01));
    freckle1.updateMatrix();
    frecklesGeomMerged.merge(freckle1.geometry, freckle1.matrix);

    let freckle2 = freckle1.clone();
    freckle2.applyMatrix(new THREE.Matrix4().makeTranslation(-0.5, -1, 0));
    freckle2.updateMatrix();
    frecklesGeomMerged.merge(freckle2.geometry, freckle2.matrix);

    let freckle3 = freckle1.clone();
    freckle3.applyMatrix(new THREE.Matrix4().makeTranslation(1, -0.5, 0));
    freckle3.updateMatrix();
    frecklesGeomMerged.merge(freckle3.geometry, freckle3.matrix);

    let freckle4 = freckle1.clone();
    freckle4.position.x = -freckle1.position.x;
    freckle4.updateMatrix();
    frecklesGeomMerged.merge(freckle4.geometry, freckle4.matrix);
    let freckle5 = freckle2.clone();
    freckle5.position.x = -freckle2.position.x;
    freckle5.updateMatrix();
    frecklesGeomMerged.merge(freckle5.geometry, freckle5.matrix);
    let freckle6 = freckle3.clone();
    freckle6.position.x = -freckle3.position.x;
    freckle6.updateMatrix();
    frecklesGeomMerged.merge(freckle6.geometry, freckle6.matrix);

    let freckledMerged = new THREE.Mesh(frecklesGeomMerged, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].brownMat);
    freckledMerged.castShadow = false;
    freckledMerged.receiveShadow = false;

    this.freckles.add(freckledMerged);
  }

  Features() {
    //Features - Nose and Ears
    ////////////////////////////////////

    let earGeom = new THREE.BoxBufferGeometry(1.5, 3, 1.5);
    let earRight = new THREE.Mesh(earGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].skin2Mat);
    earRight.position.set(-8.5, 1, 0);
    earRight.castShadow = true;
    earRight.receiveShadow = false;

    let earLeft = new THREE.Mesh(earGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].skin2Mat);
    earLeft.position.set(8.5, 1, 0);
    earLeft.castShadow = true;
    earLeft.receiveShadow = false;

    let noseGeom = new THREE.CylinderGeometry(1, 2, 4, 4);
    let nose = new THREE.Mesh(noseGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].skin2Mat);
    nose.scale.set(.75, 1, 1.3);
    nose.position.set(0, 1, 8);
    nose.castShadow = true;
    nose.receiveShadow = false;

    this.head.add(earRight, earLeft, nose);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Head;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);

// let skinMat = new THREE.MeshLambertMaterial({color: Colors.skin, flatShading: true});
// let skin2Mat = new THREE.MeshLambertMaterial({color: Colors.skin, flatShading: true});
// let auburnMat = new THREE.MeshLambertMaterial({color: Colors.auburn, flatShading: true});
// let brownMat = new THREE.MeshLambertMaterial({color: Colors.brown, flatShading: true});
// let blackMat = new THREE.MeshLambertMaterial({color: Colors.black, flatShading: true});
// let whiteMat = new THREE.MeshPhongMaterial({color: Colors.white, flatShading: true});
// let blueMat = new THREE.MeshPhongMaterial({color: Colors.lightBlue, flatShading: true});
// let beigeMat = new THREE.MeshPhongMaterial({color: Colors.beige, flatShading: true});
// let yellowMat = new THREE.MeshPhongMaterial({color: Colors.yellow, flatShading: true});
// let normalMat = new THREE.MeshNormalMaterial({});

const Materials = {
  "skinMat": new THREE.MeshLambertMaterial({color: __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */].skin, flatShading: true}),
  "skin2Mat": new THREE.MeshLambertMaterial({color: __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */].skin, flatShading: true}),
  "whiteMat": new THREE.MeshLambertMaterial({color: __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */].white, flatShading: true}),
  "teethMat": new THREE.MeshPhongMaterial({color: __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */].teeth, flatShading: true}),
  "beigeMat": new THREE.MeshPhongMaterial({color: __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */].beige, flatShading: true}),
  "brownMat": new THREE.MeshLambertMaterial({color: __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */].brown, flatShading: true}),
  "blackMat": new THREE.MeshLambertMaterial({color: __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */].black, flatShading: true}),
  "blueMat": new THREE.MeshPhongMaterial({color: __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */].lightBlue, flatShading: true}),
  "yellowMat": new THREE.MeshPhongMaterial({color: __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */].yellow, flatShading: true}),
  "normalMat": new THREE.MeshNormalMaterial({})
};

/* harmony default export */ __webpack_exports__["a"] = (Materials);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const AudioContext = window.AudioContext || window.webkitAudioContext;

class Audio {
  constructor() {
    console.log('audio');
  }
}
/* unused harmony export default */
;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

// var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow'];
// var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'

let recording = false;
let transcript = "";
const text = document.getElementById(`field`);
const button = document.getElementById(`record`);
const during = document.getElementById(`during`);

class SpeechRecogn {
  constructor() {
    this.recognition = new SpeechRecognition();
    const speechRecognitionList = new SpeechGrammarList();
    // speechRecognitionList.addFromString(grammar, 1);
    // this.recognition.grammars = speechRecognitionList;
    this.recognition.continuous = false;
    this.recognition.lang = 'nl-BE';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;

    this.init();

    this.recognition.onresult = event => this.gotResult(event);
    this.recognition.onspeechend = e => this.onSpeechEnd(e);
  }

  init() {
    button.addEventListener(`click`, () => {
      this.recognition.start();
      console.log('Ready to receive a command.');
      button.disabled = true;
    });
  }

  gotResult(event) {
    const last = event.results.length - 1;
    transcript = event.results[last][0].transcript;

    text.value = transcript;
    console.log(transcript);
    console.log(event.results);
    console.log('Confidence: ' + event.results[0][0].confidence);
  }

  onSpeechEnd(e) {
    this.recognition.stop();
    button.disabled = false;
    button.textContent = 'Click To Start';
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SpeechRecogn;


// this.recognition.onnomatch = function(event) {
//   diagnostic.textContent = "I didn't recognise that color.";
// }
//
// this.recognition.onerror = function(event) {
//   diagnostic.textContent = 'Error occurred in this.recognition: ' + event.error;
// }


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjg4NjEwM2QxYThmMzkyYmU4MzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL29iamVjdHMvY29sb3JzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvSGVhZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvb2JqZWN0cy9NYXRlcmlhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvQXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvU3BlZWNoUmVjb2duaXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDQUF3Qyw2QkFBNkI7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnQkFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7QUNuVEE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQ2hnQkE7QUFDQSxnREFBZ0Qsc0NBQXNDO0FBQ3RGLGlEQUFpRCxzQ0FBc0M7QUFDdkYsa0RBQWtELHdDQUF3QztBQUMxRixpREFBaUQsdUNBQXVDO0FBQ3hGLGlEQUFpRCx1Q0FBdUM7QUFDeEYsK0NBQStDLHVDQUF1QztBQUN0Riw4Q0FBOEMsMkNBQTJDO0FBQ3pGLCtDQUErQyx1Q0FBdUM7QUFDdEYsZ0RBQWdELHdDQUF3QztBQUN4RixrREFBa0Q7O0FBRWxEO0FBQ0EsNENBQTRDLHdGQUFzQztBQUNsRiw2Q0FBNkMsd0ZBQXNDO0FBQ25GLDZDQUE2Qyx5RkFBdUM7QUFDcEYsMkNBQTJDLHlGQUF1QztBQUNsRiwyQ0FBMkMseUZBQXVDO0FBQ2xGLDZDQUE2Qyx5RkFBdUM7QUFDcEYsNkNBQTZDLHlGQUF1QztBQUNwRiwwQ0FBMEMsNkZBQTJDO0FBQ3JGLDRDQUE0QywwRkFBd0M7QUFDcEYsOENBQThDO0FBQzlDOztBQUVBOzs7Ozs7OztBQ3pCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsZ0JBQWdCLDhDQUE4Qzs7QUFFM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImpzL3NjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGI4ODYxMDNkMWE4ZjM5MmJlODM2IiwiY29uc3QgQ29sb3JzID0ge1xuICBza2luOiAweGZmZTBiZCxcbiAgd2hpdGU6IDB4ZTllYmVlLFxuICB0ZWV0aDogMHhmZmZmZmYsXG4gIGJlaWdlOiAweGE0OTE3OCxcbiAgYnJvd246IDB4NmU1MTM2LFxuICBibGFjazogMHgyZTJlMmUsXG4gIGxpZ2h0Qmx1ZTogMHg2Mjk1YTgsXG4gIHllbGxvdzogMHhmZmYwMDBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbG9ycztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL29iamVjdHMvY29sb3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBIZWFkIGZyb20gJy4vY2xhc3Nlcy9IZWFkJztcbmltcG9ydCBDb2xvcnMgZnJvbSAnLi9vYmplY3RzL2NvbG9ycyc7XG5pbXBvcnQgQXVkaW8gZnJvbSAnLi9jbGFzc2VzL0F1ZGlvLmpzJztcbmltcG9ydCBTcGVlY2hSZWNvZ24gZnJvbSAnLi9jbGFzc2VzL1NwZWVjaFJlY29nbml0aW9uLmpzJztcblxue1xuICBsZXQgc2NlbmUsXG4gICAgY2FtZXJhLFxuICAgIGZpZWxkT2ZWaWV3LFxuICAgIGFzcGVjdFJhdGlvLFxuICAgIG5lYXJQbGFuZSxcbiAgICBmYXJQbGFuZSxcbiAgICBIRUlHSFQsXG4gICAgV0lEVEgsXG4gICAgZ2xvYmFsTGlnaHQsXG4gICAgc2hhZG93TGlnaHQsXG4gICAgYmFja0xpZ2h0LFxuICAgIGxpZ2h0LFxuICAgIHJlbmRlcmVyLFxuICAgIGNvbnRhaW5lcixcbiAgICBjb250cm9scyxcbiAgICBsb2FkZWQsXG4gICAgaGVhZCxcbiAgICBzdGFycyxcbiAgICB3aW5kb3dIYWxmWCxcbiAgICB3aW5kb3dIYWxmWSxcbiAgICBhdWRpbztcblxuICBsZXQgc3RhckFycmF5ID0gW107XG5cbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBjcmVhdGVTY2VuZSgpO1xuICAgIGNyZWF0ZUxpZ2h0cygpO1xuXG4gICAgLy8gYXVkaW8gPSBuZXcgQXVkaW8oKTtcbiAgICBuZXcgU3BlZWNoUmVjb2duKCk7XG5cblxuICAgIHBhcnRpY2xlc0pTLmxvYWQoJ2NvbnRhaW5lcicsICcuLi9hc3NldHMvcGFydGljbGVzLmpzb24nLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY2FsbGJhY2sgLSBwYXJ0aWNsZXMuanMgY29uZmlnIGxvYWRlZCcpO1xuICAgIH0pO1xuXG4gICAgaGVhZCA9IG5ldyBIZWFkKCk7XG4gICAgc2NlbmUuYWRkKGhlYWQubWVzaCk7XG5cbiAgICB3aW5kb3cuc2NlbmUgPSBzY2VuZTtcblxuICAgIGxvb3AoKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVTY2VuZSA9ICgpID0+IHs7XG4gICAgSEVJR0hUID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIFdJRFRIID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgIC8vc2NlbmUuZm9nID0gbmV3IFRIUkVFLkZvZygweGZmZmZmZiwgMTUwLDMwMCk7XG4gICAgYXNwZWN0UmF0aW8gPSBXSURUSCAvIEhFSUdIVDtcbiAgICBmaWVsZE9mVmlldyA9IDUwO1xuICAgIG5lYXJQbGFuZSA9IDE7XG4gICAgZmFyUGxhbmUgPSAyMDAwO1xuICAgIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIG5lYXJQbGFuZSwgZmFyUGxhbmUpO1xuICAgIGNhbWVyYS5wb3NpdGlvbi54ID0gMDtcbiAgICBjYW1lcmEucG9zaXRpb24ueiA9IDcwO1xuICAgIGNhbWVyYS5wb3NpdGlvbi55ID0gMDtcblxuICAgIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe2FscGhhOiB0cnVlLCBhbnRpYWxpYXM6IHRydWV9KTtcbiAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKFxuICAgICAgd2luZG93LmRldmljZVBpeGVsUmF0aW9cbiAgICAgID8gd2luZG93LmRldmljZVBpeGVsUmF0aW9cbiAgICAgIDogMSlcbiAgICByZW5kZXJlci5zZXRTaXplKFdJRFRILCBIRUlHSFQpO1xuICAgIHJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkID0gdHJ1ZTtcbiAgICByZW5kZXJlci5zaGFkb3dNYXAudHlwZSA9IFRIUkVFLlBDRlNvZnRTaGFkb3dNYXA7XG5cbiAgICBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uV2luZG93UmVzaXplLCBmYWxzZSk7XG4gICAgLy9oYW5kbGVXaW5kb3dSZXNpemUoKTtcblxuICB9XG5cbiAgY29uc3Qgb25XaW5kb3dSZXNpemUgPSAoKSA9PiB7XG4gICAgSEVJR0hUID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIFdJRFRIID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgd2luZG93SGFsZlggPSBXSURUSCAvIDI7XG4gICAgd2luZG93SGFsZlkgPSBIRUlHSFQgLyAyO1xuICAgIHJlbmRlcmVyLnNldFNpemUoV0lEVEgsIEhFSUdIVCk7XG4gICAgY2FtZXJhLmFzcGVjdCA9IFdJRFRIIC8gSEVJR0hUO1xuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gIH1cblxuICBsZXQgbG9hZGVyTWFuYWdlciA9IG5ldyBUSFJFRS5Mb2FkaW5nTWFuYWdlcigpO1xuXG4gIGNvbnN0IG9uU3RhcnQgPSAodXJsLCBpdGVtc0xvYWRlZCwgaXRlbXNUb3RhbCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdTdGFydGVkIGxvYWRpbmcgZmlsZTogJyArIHVybCArICcuXFxuTG9hZGVkICcgKyBpdGVtc0xvYWRlZCArICcgb2YgJyArIGl0ZW1zVG90YWwgKyAnIGZpbGVzLicpO1xuICB9XG5cbiAgY29uc3Qgb25Mb2FkID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdMb2FkaW5nIGNvbXBsZXRlIScpO1xuICAgIGZpbmlzaGVkTG9hZGluZygpO1xuICB9XG5cbiAgY29uc3Qgb25Qcm9ncmVzcyA9ICh1cmwsIGl0ZW1zTG9hZGVkLCBpdGVtc1RvdGFsKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0xvYWRpbmcgZmlsZTogJyArIHVybCArICcuXFxuTG9hZGVkICcgKyBpdGVtc0xvYWRlZCArICcgb2YgJyArIGl0ZW1zVG90YWwgKyAnIGZpbGVzLicpO1xuICB9XG5cbiAgY29uc3Qgb25FcnJvciA9ICh1cmwpID0+IHtcbiAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIGxvYWRpbmcgJyArIHVybCk7XG4gIH1cblxuICBjb25zdCBmaW5pc2hlZExvYWRpbmcgPSAoKSA9PiB7XG4gICAgbG9hZGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVdpbmRvd1Jlc2l6ZSA9IGUgPT4ge1xuICAgIEhFSUdIVCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBXSURUSCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHJlbmRlcmVyLnNldFNpemUoV0lEVEgsIEhFSUdIVCk7XG4gICAgY2FtZXJhLmFzcGVjdCA9IFdJRFRIIC8gSEVJR0hUO1xuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gIH1cblxuICBsZXQgaXNNb2JpbGUgPSAvaVBob25lfEFuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4gIGNvbnN0IGNyZWF0ZUxpZ2h0cyA9ICgpID0+IHtcblxuICAgIGdsb2JhbExpZ2h0ID0gbmV3IFRIUkVFLkhlbWlzcGhlcmVMaWdodCgweGZmZmZmZiwgMHg1NTU1NTUsIC45KTtcblxuICAgIHNoYWRvd0xpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYsIC4zKTtcbiAgICBzaGFkb3dMaWdodC5wb3NpdGlvbi5zZXQoMTAwLCAyNTAsIDE3NSk7XG4gICAgc2hhZG93TGlnaHQuY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgLy8gc2hhZG93TGlnaHQuc2hhZG93LmNhbWVyYS5sZWZ0ID0gLTE1MDtcbiAgICAvLyBzaGFkb3dMaWdodC5zaGFkb3cuY2FtZXJhLnJpZ2h0ID0gMTUwO1xuICAgIC8vIHNoYWRvd0xpZ2h0LnNoYWRvdy5jYW1lcmEudG9wID0gMTUwO1xuICAgIC8vIHNoYWRvd0xpZ2h0LnNoYWRvdy5jYW1lcmEuYm90dG9tID0gLTE1MDtcbiAgICAvLyBzaGFkb3dMaWdodC5zaGFkb3cuY2FtZXJhLm5lYXIgPSAxO1xuICAgIC8vIHNoYWRvd0xpZ2h0LnNoYWRvdy5jYW1lcmEuZmFyID0gMTAwMDtcblxuICAgIGJhY2tMaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmLCAuMik7XG4gICAgYmFja0xpZ2h0LnBvc2l0aW9uLnNldCgtMTAwLCAyMDAsIDE1MCk7XG4gICAgYmFja0xpZ2h0LmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgIC8vYmFja0xpZ2h0LnBvc2l0aW9uLnNldCgxMDAsIDEwMCwgLTIwMCk7XG5cbiAgICBpZiAoaXNNb2JpbGUpXG4gICAgICBzaGFkb3dMaWdodC5zaGFkb3cubWFwU2l6ZS53aWR0aCA9IHNoYWRvd0xpZ2h0LnNoYWRvdy5tYXBTaXplLmhlaWdodCA9IDEwMjQ7XG4gICAgaWYgKCFpc01vYmlsZSlcbiAgICAgIHNoYWRvd0xpZ2h0LnNoYWRvdy5tYXBTaXplLndpZHRoID0gc2hhZG93TGlnaHQuc2hhZG93Lm1hcFNpemUuaGVpZ2h0ID0gMjA0ODtcblxuICAgIHNjZW5lLmFkZChnbG9iYWxMaWdodCk7XG4gICAgc2NlbmUuYWRkKHNoYWRvd0xpZ2h0KTtcbiAgICBzY2VuZS5hZGQoYmFja0xpZ2h0KTtcbiAgICBzY2VuZS5hZGQoIG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoIDB4ZWFkZWFkLCAwLjEgKSk7XG4gIH1cblxuICAvLyBjbGFzcyBTdGFyIHtcbiAgLy8gICBjb25zdHJ1Y3Rvcigpe1xuICAvL1xuICAvLyAgIFNUQVJcbiAgLy8gICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vXG4gIC8vICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gIC8vXG4gIC8vICAgbGV0IHB0cyA9IFtdLFxuICAvLyAgICAgbnVtUHRzID0gNTtcbiAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVB0cyAqIDI7IGkrKykge1xuICAvLyAgICAgbGV0IGwgPSBpICUgMiA9PSAxXG4gIC8vICAgICAgID8gMVxuICAvLyAgICAgICA6IDI7XG4gIC8vICAgICBsZXQgYSA9IGkgLyBudW1QdHMgKiBNYXRoLlBJO1xuICAvLyAgICAgcHRzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjIoTWF0aC5jb3MoYSkgKiBsLCBNYXRoLnNpbihhKSAqIGwpKTtcbiAgLy8gICB9XG4gIC8vICAgbGV0IHN0YXJTaGFwZSA9IG5ldyBUSFJFRS5TaGFwZShwdHMpO1xuICAvL1xuICAvLyAgIGxldCBleHRydWRlU2V0dGluZ3MgPSB7XG4gIC8vICAgICBhbW91bnQ6IDAuNSxcbiAgLy8gICAgIHN0ZXBzOiAxLFxuICAvLyAgICAgYmV2ZWxFbmFibGVkOiBmYWxzZVxuICAvLyAgIH07XG4gIC8vICAgbGV0IHN0YXJHZW9tID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzdGFyU2hhcGUsIGV4dHJ1ZGVTZXR0aW5ncyk7XG4gIC8vICAgbGV0IHN0YXIgPSBuZXcgVEhSRUUuTWVzaChzdGFyR2VvbSwgeWVsbG93TWF0KTtcbiAgLy8gICBzdGFyLnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcbiAgLy8gICB0aGlzLm1lc2guYWRkKHN0YXIpO1xuICAvLyB9XG4gIC8vIH1cbiAgLy9cbiAgLy8gbGV0IFN0YXJzR3JvdXAgPSBmdW5jdGlvbigpIHtcbiAgLy9cbiAgLy8gICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAvL1xuICAvLyAgICAgdGhpcy5uU3RhcnMgPSAxNTtcbiAgLy9cbiAgLy8gICAgIGxldCBzdGVwQW5nbGUgPSBNYXRoLlBJICogMiAvIHRoaXMublN0YXJzO1xuICAvL1xuICAvLyAgICAgIENyZWF0ZSB0aGUgU3RhcnNcbiAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uU3RhcnM7IGkrKykge1xuICAvL1xuICAvLyAgICAgICB0aGlzLnMgPSBuZXcgU3RhcigpO1xuICAvLyAgICAgICBsZXQgYSA9IHN0ZXBBbmdsZSAqIGk7XG4gIC8vICAgICAgIGxldCByID0gMTU7XG4gIC8vXG4gIC8vICAgICAgIHRoaXMucy5tZXNoLnBvc2l0aW9uLnkgPSBNYXRoLnNpbihhKSAqIHI7XG4gIC8vICAgICAgIHRoaXMucy5tZXNoLnBvc2l0aW9uLnggPSBNYXRoLmNvcyhhKSAqIHI7XG4gIC8vXG4gIC8vICAgICAgIHRoaXMucy5tZXNoLnJvdGF0aW9uLnogPSBhICsgTWF0aC5QSSAvIDI7XG4gIC8vICAgICAgIHRoaXMucy5tZXNoLnBvc2l0aW9uLnogPSAwIC0gTWF0aC5yYW5kb20oKSAqIDM7XG4gIC8vXG4gIC8vICAgICAgICAgcmFuZG9tIHNjYWxlIGZvciBlYWNoIGNsb3VkXG4gIC8vICAgICAgIGxldCBzYyA9IDAuNSArIE1hdGgucmFuZG9tKCkgKiAuNjtcbiAgLy8gICAgICAgdGhpcy5zLm1lc2guc2NhbGUuc2V0KHNjLCBzYywgc2MpO1xuICAvL1xuICAvLyAgICAgICB0aGlzLm1lc2guYWRkKHRoaXMucy5tZXNoKTtcbiAgLy8gICAgICAgc3RhckFycmF5LnB1c2godGhpcy5zKTtcbiAgLy8gICAgIH1cbiAgLy8gICAgIHRoaXMubWVzaC5yb3RhdGlvbi54ID0gTWF0aC5QSSAvIDI7XG4gIC8vIH1cblxuICBjb25zdCBjcmVhdGVIZWFkID0gKCkgPT4ge1xuICAgIGhlYWQgPSBuZXcgSGVhZCgpO1xuICAgIGhlYWQuaWRsZSgpO1xuICAgIC8vY29uc29sZS5sb2coaGVhZC5oZWFkLnJvdGF0aW9uKTtcbiAgICBzY2VuZS5hZGQoaGVhZC5tZXNoKTtcbiAgICAvL3N0YXJzID0gbmV3IFN0YXJzR3JvdXAoKTtcbiAgICAvL3NjZW5lLmFkZChzdGFycy5tZXNoKTtcbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZUNoYXJhY3RlciA9ICgpID0+IHtcbiAgICBjcmVhdGVIZWFkKCk7XG4gICAgaGVhZC5tZXNoLnBvc2l0aW9uLnNldCgwLCAyLCAwKTtcbiAgICAvL3N0YXJzLm1lc2gucG9zaXRpb24uc2V0KDAsIDEwLCAwKTtcbiAgfVxuXG4gIC8vQkxJTktcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgbGV0IGlzQmxpbmtpbmcgPSBmYWxzZTtcbiAgY29uc3QgYmxpbmtMb29wID0gKCkgPT4ge1xuICAgIGlzQmxpbmtpbmcgPSBmYWxzZTtcblxuICAgIGlmICgoIWlzQmxpbmtpbmcpICYmIChNYXRoLnJhbmRvbSgpID4gMC45OSkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdibGluaycpO1xuICAgICAgaXNCbGlua2luZyA9IHRydWU7XG4gICAgICBibGluaygpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGJsaW5rID0gKCkgPT4ge1xuICAgIGhlYWQuZXllcy5zY2FsZS55ID0gMTtcbiAgICBUd2Vlbk1heC50byhoZWFkLmV5ZXMuc2NhbGUsIC4wNywge1xuICAgICAgeTogMCxcbiAgICAgIHlveW86IHRydWUsXG4gICAgICByZXBlYXQ6IDEsXG4gICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaXNCbGlua2luZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy9IRUFEIEFOSU1BVElPTlNcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAvLyBIZWFkLnByb3RvdHlwZS5kaXp6eSA9IGZ1bmN0aW9uKCkge1xuICAvL1xuICAvLyAgICAgbGV0IGRpc3RhbmNlID0gMTtcbiAgLy9cbiAgLy8gICAgIHRoaXMuaGVhZC5yb3RhdGlvbi56ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDA1KSAqIE1hdGguUEkgKiAwLjAxO1xuICAvLyAgICAgdGhpcy5oZWFkLnJvdGF0aW9uLnggPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMSkgKiBNYXRoLlBJICogMC4wMTtcbiAgLy8gICAgIHRoaXMuaGVhZC5yb3RhdGlvbi55ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDA1KSAqIE1hdGguUEkgKiAwLjAxO1xuICAvL1xuICAvLyAgICAgdGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24ueCA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwNSkgKiAtZGlzdGFuY2U7XG4gIC8vICAgICB0aGlzLmV5ZUJsdWVMZWZ0LnBvc2l0aW9uLnggPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDUpICogZGlzdGFuY2U7XG4gIC8vICAgICB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi55ID0gTWF0aC5jb3MoRGF0ZS5ub3coKSAqIDAuMDA1KSAqIC1kaXN0YW5jZTtcbiAgLy8gICAgIHRoaXMuZXllQmx1ZUxlZnQucG9zaXRpb24ueSA9IE1hdGguY29zKERhdGUubm93KCkgKiAwLjAwNSkgKiBkaXN0YW5jZTtcbiAgLy8gICAgIHRoaXMuZXllQnJvd1JpZ2h0LnBvc2l0aW9uLnkgPSBNYXRoLmNvcyhEYXRlLm5vdygpICogMC4wMDUpICogLWRpc3RhbmNlO1xuICAvLyAgICAgdGhpcy5leWVCcm93TGVmdC5wb3NpdGlvbi55ID0gTWF0aC5jb3MoRGF0ZS5ub3coKSAqIDAuMDA1KSAqIGRpc3RhbmNlO1xuICAvL1xuICAvLyAgICAgdGhpcy5tb3VzdGFjaGUucm90YXRpb24ueiA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwNSkgKiBNYXRoLlBJICogMC4wNTtcbiAgLy9cbiAgLy8gICAgIGJsaW5rTG9vcCgpO1xuICAvLyAgICAgc3RhcnMuc3BpblNjYWxlKCk7XG4gIC8vXG4gIC8vICAgfVxuXG4gIC8vU1RBUkdST1VQXG4gIC8vIFN0YXJzR3JvdXAucHJvdG90eXBlLnNwaW5TY2FsZSA9IGZ1bmN0aW9uKCkge1xuICAvL1xuICAvLyAgICAgdGhpcy5tZXNoLnJvdGF0aW9uLnogKz0gMC4wMjtcbiAgLy9cbiAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gIC8vICAgICAgICBzdGFyQXJyYXlbaV0ubWVzaC5yb3RhdGlvbi54ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDEpICogTWF0aC5QSSAqIDAuMSA7XG4gIC8vICAgICAgIHN0YXJBcnJheVtpXS5tZXNoLnJvdGF0aW9uLnogKz0gMCAtIE1hdGgucmFuZG9tKCkgKiAwLjE1O1xuICAvLyAgICAgICBzdGFyQXJyYXlbaV0ubWVzaC5yb3RhdGlvbi54ICs9IDAgLSBNYXRoLnJhbmRvbSgpICogMC4wNTtcbiAgLy9cbiAgLy8gICAgIH1cbiAgLy8gICB9XG5cbiAgY29uc3QgbG9vcCA9ICgpID0+IHtcbiAgICBibGlua0xvb3AoKTtcbiAgICAvL2hlYWQuZGl6enkoKTtcblxuICAgIGhlYWQuaWRsZSgpO1xuICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gIH1cblxuICAvL3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgaW5pdCwgZmFsc2UpO1xuXG4gIGluaXQoKTtcblxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvc2NyaXB0LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBDb2xvcnMgZnJvbSAnLi4vb2JqZWN0cy9jb2xvcnMnO1xuaW1wb3J0IE1hdCBmcm9tICcuLi9vYmplY3RzL01hdGVyaWFscyc7XG5cbmxldCBpc0JsaW5raW5nID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcblxuICAgIGxldCBoZWFkR2VvbSA9IG5ldyBUSFJFRS5Cb3hCdWZmZXJHZW9tZXRyeSgxNiwgMTYsIDE2KTtcbiAgICB0aGlzLmhlYWQgPSBuZXcgVEhSRUUuTWVzaChoZWFkR2VvbSwgTWF0LnNraW5NYXQpO1xuICAgIHRoaXMuaGVhZC5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICB0aGlzLmhlYWQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMubWVzaC5hZGQodGhpcy5oZWFkKTtcblxuICAgIHRoaXMuYmVhcmQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmJlYXJkLnBvc2l0aW9uLnkgPSAtNztcbiAgICB0aGlzLmJlYXJkLnBvc2l0aW9uLnogPSAwLjU7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmJlYXJkKTtcblxuICAgIHRoaXMuQmVhcmQoKTtcbiAgICB0aGlzLkdsYXNzZXMoKTtcbiAgICB0aGlzLkhhaXIoKTtcbiAgICB0aGlzLkV5ZXMoKTtcbiAgICB0aGlzLkV5ZUJyb3dzKCk7XG4gICAgdGhpcy5GcmVja2xlcygpO1xuICAgIHRoaXMuRmVhdHVyZXMoKTtcbiAgICB0aGlzLmlkbGUoKTtcbiAgfVxuXG4gIGlkbGUoKSB7XG4gICAgbGV0IGRpc3RhbmNlID0gMTtcblxuICAgIHRoaXMuaGVhZC5yb3RhdGlvbi56ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDA1KSAqIE1hdGguUEkgKiAwLjAxO1xuICAgIHRoaXMuaGVhZC5yb3RhdGlvbi54ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDEpICogTWF0aC5QSSAqIDAuMDE7XG4gICAgdGhpcy5oZWFkLnJvdGF0aW9uLnkgPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDUpICogTWF0aC5QSSAqIDAuMDE7XG5cbiAgICB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi54ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDA1KSAqIGRpc3RhbmNlO1xuICAgIHRoaXMuZXllQmx1ZUxlZnQucG9zaXRpb24ueCA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwNSkgKiBkaXN0YW5jZTtcbiAgICB0aGlzLmV5ZUJyb3dSaWdodC5wb3NpdGlvbi55ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDA1KSAqIGRpc3RhbmNlO1xuICAgIHRoaXMuZXllQnJvd0xlZnQucG9zaXRpb24ueSA9IE1hdGguY29zKERhdGUubm93KCkgKiAwLjAwNSkgKiBkaXN0YW5jZTtcblxuICAgIHRoaXMubW91c3RhY2hlLnBvc2l0aW9uLnkgPSBNYXRoLmNvcyhEYXRlLm5vdygpICogMC4wMSkgKiBkaXN0YW5jZSAvIDI7XG4gICAgdGhpcy5tb3VzdGFjaGUucm90YXRpb24ueiA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAxKSAqIE1hdGguUEkgKiAwLjAxO1xuXG4gICAgdGhpcy5tZXNoLnJvdGF0aW9uLnkgPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDEpICogTWF0aC5QSSAqIDAuMTtcbiAgfVxuXG4gIEJlYXJkKCkge1xuICAgIC8vQkVBUkRcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGxldCBiZWFyZEdlb21NZXJnZWQgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcblxuICAgIGxldCBiZWFyZDFHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDIsIDEyLCAxNik7XG5cbiAgICBsZXQgYmVhcmQxID0gbmV3IFRIUkVFLk1lc2goYmVhcmQxR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBiZWFyZDEuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oOSwgMCwgMCkpO1xuICAgIGJlYXJkMS51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQxLmdlb21ldHJ5LCBiZWFyZDEubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDIgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDFHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkMi5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig3LCAtMywgMikpO1xuICAgIGJlYXJkMi5zY2FsZS56ID0gMC44O1xuICAgIGJlYXJkMi51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQyLmdlb21ldHJ5LCBiZWFyZDIubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDMgPSBiZWFyZDEuY2xvbmUoKTtcbiAgICBiZWFyZDMucG9zaXRpb24ueCA9IC1iZWFyZDEucG9zaXRpb24ueDtcbiAgICBiZWFyZDMudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkMy5nZW9tZXRyeSwgYmVhcmQzLm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQ0ID0gYmVhcmQyLmNsb25lKCk7XG4gICAgYmVhcmQ0LnBvc2l0aW9uLnggPSAtYmVhcmQyLnBvc2l0aW9uLng7XG4gICAgYmVhcmQ0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDQuZ2VvbWV0cnksIGJlYXJkNC5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkMkdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMywgMTQsIDEwKTtcbiAgICBiZWFyZDJHZW9tLnZlcnRpY2VzWzJdLnogLT0gMjtcbiAgICBiZWFyZDJHZW9tLnZlcnRpY2VzWzddLnogLT0gMjtcblxuICAgIGxldCBiZWFyZDUgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDJHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkNS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig1LCAtNSwgNS41KSk7XG4gICAgYmVhcmQ1LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDUuZ2VvbWV0cnksIGJlYXJkNS5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkM0dlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMywgMTQsIDEwKTtcbiAgICBiZWFyZDNHZW9tLnZlcnRpY2VzWzJdLnogLT0gMjtcbiAgICBiZWFyZDNHZW9tLnZlcnRpY2VzWzddLnogLT0gMjtcblxuICAgIGxldCBiZWFyZDYgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDNHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkNi5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigyLCAtNiwgNS41KSk7XG4gICAgYmVhcmQ2LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDYuZ2VvbWV0cnksIGJlYXJkNi5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkNyA9IGJlYXJkNS5jbG9uZSgpO1xuICAgIGJlYXJkNy5wb3NpdGlvbi54ID0gLWJlYXJkNS5wb3NpdGlvbi54O1xuICAgIGJlYXJkNy51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQ3Lmdlb21ldHJ5LCBiZWFyZDcubWF0cml4KTtcbiAgICBsZXQgYmVhcmQ4ID0gYmVhcmQ2LmNsb25lKCk7XG4gICAgYmVhcmQ4LnBvc2l0aW9uLnggPSAtYmVhcmQ2LnBvc2l0aW9uLng7XG4gICAgYmVhcmQ4LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDguZ2VvbWV0cnksIGJlYXJkOC5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkNEdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMSwgMTQuNSwgMTApO1xuICAgIGJlYXJkNEdlb20udmVydGljZXNbMl0ueiAtPSAxO1xuICAgIGJlYXJkNEdlb20udmVydGljZXNbN10ueiAtPSAxO1xuICAgIGxldCBiZWFyZDkgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDRHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkOS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigwLCAtNi4yNSwgNS43NSkpO1xuICAgIGJlYXJkOS51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQ5Lmdlb21ldHJ5LCBiZWFyZDkubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDVHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDQsIDgsIDgpO1xuICAgIGxldCBiZWFyZDEwID0gbmV3IFRIUkVFLk1lc2goYmVhcmQ1R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBiZWFyZDEwLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKC02LCAtMSwgLTIpKTtcbiAgICBiZWFyZDEwLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDEwLmdlb21ldHJ5LCBiZWFyZDEwLm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQxMSA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkNUdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmQxMS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig2LCAtMSwgLTIpKTtcbiAgICBiZWFyZDExLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDExLmdlb21ldHJ5LCBiZWFyZDExLm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmRNZXJnZWQgPSBuZXcgVEhSRUUuTWVzaChiZWFyZEdlb21NZXJnZWQsIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmRNZXJnZWQuY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgYmVhcmRNZXJnZWQucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG5cbiAgICBsZXQgbW91dGhHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEwLCA0LCAxKTtcbiAgICBsZXQgbW91dGggPSBuZXcgVEhSRUUuTWVzaChtb3V0aEdlb20sIE1hdC5ibGFja01hdCk7XG4gICAgbW91dGgucG9zaXRpb24uc2V0KDAsIDIsIDgpO1xuICAgIG1vdXRoLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBtb3V0aC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcblxuICAgIGxldCB0ZWV0aEdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTAsIDEsIDEpO1xuICAgIGxldCB0ZWV0aCA9IG5ldyBUSFJFRS5NZXNoKHRlZXRoR2VvbSwgTWF0LnRlZXRoTWF0KTtcbiAgICB0ZWV0aC5wb3NpdGlvbi5zZXQoMCwgMC41LCAwLjEpO1xuICAgIHRlZXRoLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0ZWV0aC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcbiAgICBtb3V0aC5hZGQodGVldGgpXG5cbiAgICAvLyBsZXQgc21pbGVHZW9tID0gbmV3IFRIUkVFLlRvcnVzR2VvbWV0cnkoNCwgMS41LCAyLCA2LCAtTWF0aC5QSSk7XG4gICAgLy8gdGhpcy5zbWlsZSA9IG5ldyBUSFJFRS5NZXNoKHNtaWxlR2VvbSwgYmxhY2tNYXQpO1xuICAgIC8vIHRoaXMuc21pbGUucG9zaXRpb24uc2V0KDAsIDIsIDEwKTtcbiAgICAvLyB0aGlzLnNtaWxlLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICAvLyB0aGlzLnNtaWxlLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuICAgIC8vXG4gICAgLy8gdGhpcy5iZWFyZC5hZGQoYmVhcmRNZXJnZWQsIG1vdXRoLCB0aGlzLnNtaWxlKTtcbiAgICB0aGlzLmJlYXJkLmFkZChiZWFyZE1lcmdlZCwgbW91dGgpO1xuXG4gICAgbGV0IG1vdXN0YWNoZUdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTQsIDMsIDMsIDMpO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbMF0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbMV0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbMl0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbM10ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbNF0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbNV0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbNl0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbN10ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbOF0ueCAtPSAxO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbOV0ueCArPSAxO1xuXG4gICAgbW91c3RhY2hlR2VvbS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigwLCA0LCAwKSk7XG4gICAgdGhpcy5tb3VzdGFjaGUgPSBuZXcgVEhSRUUuTWVzaChtb3VzdGFjaGVHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIHRoaXMubW91c3RhY2hlLmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgIHRoaXMubW91c3RhY2hlLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuXG4gICAgdGhpcy5tb3VzdGFjaGUucG9zaXRpb24uc2V0KDAsIDAsIDkpO1xuICAgIHRoaXMuYmVhcmQuYWRkKHRoaXMubW91c3RhY2hlKTtcbiAgfVxuXG4gIEdsYXNzZXMoKSB7XG4gICAgLy9HTEFTU0VTXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgdGhpcy5nbGFzc2VzID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgdGhpcy5nbGFzc2VzLnBvc2l0aW9uLnNldCgwLDAsOSk7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmdsYXNzZXMpO1xuXG5cbiAgICBsZXQgZnJhbWVHZW9tTWVyZ2VkID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XG5cbiAgICBsZXQgZnJhbWVPdXRlckdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoNiw1LDEpO1xuICAgIGxldCBmcmFtZUlubmVyR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSg0LDMsMSk7XG5cbiAgICBmcmFtZU91dGVyR2VvbS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooLU1hdGguUEkvNDUpKTtcbiAgICBmcmFtZUlubmVyR2VvbS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooLU1hdGguUEkvNDUpKTtcblxuICAgIGxldCBmcmFtZUJTUCA9IG5ldyBUaHJlZUJTUChmcmFtZU91dGVyR2VvbSk7XG4gICAgbGV0IGZyYW1lQ3V0QlNQID0gbmV3IFRocmVlQlNQKGZyYW1lSW5uZXJHZW9tKTtcblxuICAgIGxldCBmcmFtZWludGVyc2VjdGlvbkJTUCA9IGZyYW1lQlNQLnN1YnRyYWN0KGZyYW1lQ3V0QlNQKTtcbiAgICBsZXQgZnJhbWVMZWZ0ID0gZnJhbWVpbnRlcnNlY3Rpb25CU1AudG9NZXNoKE1hdC5ibGFja01hdCk7XG5cbiAgICBmcmFtZUxlZnQuYXBwbHlNYXRyaXgoIG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDQsIDMsIDApKTtcbiAgICBmcmFtZUxlZnQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJhbWVHZW9tTWVyZ2VkLm1lcmdlKGZyYW1lTGVmdC5nZW9tZXRyeSwgZnJhbWVMZWZ0Lm1hdHJpeCk7XG5cbiAgICBsZXQgZnJhbWVSaWdodCA9IGZyYW1lTGVmdC5jbG9uZSgpO1xuICAgIGZyYW1lUmlnaHQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKE1hdGguUEkvMzApKTtcbiAgICBmcmFtZVJpZ2h0LmFwcGx5TWF0cml4KCBuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigtNy41LCAtMC4yNSwgMCkpO1xuICAgIGZyYW1lUmlnaHQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJhbWVHZW9tTWVyZ2VkLm1lcmdlKGZyYW1lUmlnaHQuZ2VvbWV0cnksIGZyYW1lUmlnaHQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZU1pZEdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMywxLDEpO1xuICAgIGxldCBmcmFtZU1pZCA9IG5ldyBUSFJFRS5NZXNoKGZyYW1lTWlkR2VvbSwgTWF0LmJsYWNrTWF0KTtcbiAgICBmcmFtZU1pZC5hcHBseU1hdHJpeCggbmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oMCwgMywgMCkpO1xuICAgIGZyYW1lTWlkLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyYW1lR2VvbU1lcmdlZC5tZXJnZShmcmFtZU1pZC5nZW9tZXRyeSwgZnJhbWVNaWQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZUVuZEdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMS41LDEsMSk7XG4gICAgbGV0IGZyYW1lRW5kUmlnaHQgPSBuZXcgVEhSRUUuTWVzaChmcmFtZUVuZEdlb20sIE1hdC5ibGFja01hdCk7XG4gICAgZnJhbWVFbmRSaWdodC5hcHBseU1hdHJpeCggbmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oNy41LCAzLCAwKSk7XG4gICAgZnJhbWVFbmRSaWdodC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmFtZUdlb21NZXJnZWQubWVyZ2UoZnJhbWVFbmRSaWdodC5nZW9tZXRyeSwgZnJhbWVFbmRSaWdodC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lRW5kTGVmdCA9IGZyYW1lRW5kUmlnaHQuY2xvbmUoKTtcbiAgICBmcmFtZUVuZExlZnQucG9zaXRpb24ueCA9IC1mcmFtZUVuZFJpZ2h0LnBvc2l0aW9uLng7XG4gICAgZnJhbWVFbmRMZWZ0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyYW1lR2VvbU1lcmdlZC5tZXJnZShmcmFtZUVuZExlZnQuZ2VvbWV0cnksIGZyYW1lRW5kTGVmdC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lU3Bva2VHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsMSwxMik7XG4gICAgbGV0IGZyYW1lU3Bva2VSaWdodCA9IG5ldyBUSFJFRS5NZXNoKGZyYW1lU3Bva2VHZW9tLCBNYXQuYmxhY2tNYXQpO1xuICAgIGZyYW1lU3Bva2VSaWdodC5hcHBseU1hdHJpeCggbmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oOCwgMywgLTUuNSkpO1xuICAgIGZyYW1lU3Bva2VSaWdodC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmFtZUdlb21NZXJnZWQubWVyZ2UoZnJhbWVTcG9rZVJpZ2h0Lmdlb21ldHJ5LCBmcmFtZVNwb2tlUmlnaHQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZVNwb2tlTGVmdCA9IGZyYW1lU3Bva2VSaWdodC5jbG9uZSgpO1xuICAgIGZyYW1lU3Bva2VMZWZ0LnBvc2l0aW9uLnggPSAtZnJhbWVTcG9rZVJpZ2h0LnBvc2l0aW9uLng7XG4gICAgZnJhbWVTcG9rZUxlZnQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJhbWVHZW9tTWVyZ2VkLm1lcmdlKGZyYW1lU3Bva2VMZWZ0Lmdlb21ldHJ5LCBmcmFtZVNwb2tlTGVmdC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lTWVyZ2VkID0gbmV3IFRIUkVFLk1lc2goZnJhbWVHZW9tTWVyZ2VkLCBNYXQuYmxhY2tNYXQpO1xuICAgIGZyYW1lTWVyZ2VkLmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgIGZyYW1lTWVyZ2VkLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuXG4gICAgdGhpcy5nbGFzc2VzLmFkZChmcmFtZU1lcmdlZCk7XG5cbiAgfVxuXG4gIEhhaXIoKSB7XG4gICAgLy9IQUlSXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICB0aGlzLmhhaXIgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmhhaXIucG9zaXRpb24uc2V0KDAsIDksIDApO1xuICAgIHRoaXMuaGVhZC5hZGQodGhpcy5oYWlyKTtcblxuICAgIGxldCBoYWlyR2VvbU1lcmdlZCA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuXG4gICAgbGV0IGhhaXJGbGF0R2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxMCwgMiwgMTgpO1xuXG4gICAgbGV0IGhhaXIxID0gbmV3IFRIUkVFLk1lc2goaGFpckZsYXRHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGhhaXIxLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWigtTWF0aC5QSSAvIDQwKSk7XG4gICAgaGFpcjEuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oLTQsIC0wLjUsIDApKTtcbiAgICBoYWlyMS51cGRhdGVNYXRyaXgoKTtcbiAgICBoYWlyR2VvbU1lcmdlZC5tZXJnZShoYWlyMS5nZW9tZXRyeSwgaGFpcjEubWF0cml4KTtcblxuICAgIGxldCBoYWlyMiA9IG5ldyBUSFJFRS5NZXNoKGhhaXJGbGF0R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyMi5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooLU1hdGguUEkgLyAxMCkpO1xuICAgIGhhaXIyLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKC0yLCAxLCAwKSk7XG4gICAgaGFpcjIudXBkYXRlTWF0cml4KCk7XG4gICAgaGFpckdlb21NZXJnZWQubWVyZ2UoaGFpcjIuZ2VvbWV0cnksIGhhaXIyLm1hdHJpeCk7XG5cbiAgICBsZXQgaGFpcjMgPSBuZXcgVEhSRUUuTWVzaChoYWlyRmxhdEdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgaGFpcjMuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKC1NYXRoLlBJIC8gNSkpO1xuICAgIGhhaXIzLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDIsIDEsIDApKTtcbiAgICBoYWlyMy51cGRhdGVNYXRyaXgoKTtcbiAgICBoYWlyR2VvbU1lcmdlZC5tZXJnZShoYWlyMy5nZW9tZXRyeSwgaGFpcjMubWF0cml4KTtcblxuICAgIGxldCBoYWlyNCA9IG5ldyBUSFJFRS5NZXNoKGhhaXJGbGF0R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyNC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooLU1hdGguUEkgLyA0KSk7XG4gICAgaGFpcjQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oNiwgMCwgMCkpO1xuICAgIGhhaXI0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGhhaXJHZW9tTWVyZ2VkLm1lcmdlKGhhaXI0Lmdlb21ldHJ5LCBoYWlyNC5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXJGbGF0QmFja0dlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTgsIDcsIDYpO1xuICAgIGhhaXJGbGF0QmFja0dlb20udmVydGljZXNbMF0ueCAtPSAxO1xuICAgIGhhaXJGbGF0QmFja0dlb20udmVydGljZXNbMV0ueCAtPSAxO1xuICAgIGhhaXJGbGF0QmFja0dlb20udmVydGljZXNbNF0ueCArPSAxO1xuICAgIGhhaXJGbGF0QmFja0dlb20udmVydGljZXNbNV0ueCArPSAxO1xuXG4gICAgbGV0IGhhaXI1ID0gbmV3IFRIUkVFLk1lc2goaGFpckZsYXRCYWNrR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyNS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigwLCAtNC41LCAtNikpO1xuICAgIGhhaXI1LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGhhaXJHZW9tTWVyZ2VkLm1lcmdlKGhhaXI1Lmdlb21ldHJ5LCBoYWlyNS5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXJUdWZ0R2VvbSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDEsIDEuNSwgMTAsIDQpO1xuXG4gICAgbGV0IGhhaXJUdWZ0MSA9IG5ldyBUSFJFRS5NZXNoKGhhaXJUdWZ0R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyVHVmdDEuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKC1NYXRoLlBJIC8gMTApKTtcbiAgICBoYWlyVHVmdDEuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25YKE1hdGguUEkgLyAxMCkpO1xuICAgIGhhaXJUdWZ0MS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigtNCwgMiwgLTQpKTtcbiAgICBoYWlyVHVmdDEudXBkYXRlTWF0cml4KCk7XG4gICAgaGFpckdlb21NZXJnZWQubWVyZ2UoaGFpclR1ZnQxLmdlb21ldHJ5LCBoYWlyVHVmdDEubWF0cml4KTtcblxuICAgIGxldCBoYWlyVHVmdDQgPSBoYWlyVHVmdDEuY2xvbmUoKTtcbiAgICBoYWlyVHVmdDQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25YKE1hdGguUEkgLyA4KSk7XG4gICAgaGFpclR1ZnQ0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDQsIC0uNSwgMSkpO1xuICAgIGhhaXJUdWZ0NC51cGRhdGVNYXRyaXgoKTtcbiAgICBoYWlyR2VvbU1lcmdlZC5tZXJnZShoYWlyVHVmdDQuZ2VvbWV0cnksIGhhaXJUdWZ0NC5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXJUdWZ0NyA9IGhhaXJUdWZ0MS5jbG9uZSgpO1xuICAgIGhhaXJUdWZ0Ny5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblgoTWF0aC5QSSAvIDgpKTtcbiAgICBoYWlyVHVmdDcuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKE1hdGguUEkgLyA4KSk7XG4gICAgaGFpclR1ZnQ3LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDAuNSwgLTEsIDIpKTtcbiAgICBoYWlyVHVmdDcudXBkYXRlTWF0cml4KCk7XG4gICAgaGFpckdlb21NZXJnZWQubWVyZ2UoaGFpclR1ZnQ3Lmdlb21ldHJ5LCBoYWlyVHVmdDcubWF0cml4KTtcblxuICAgIGxldCBoYWlyVHVmdDIgPSBuZXcgVEhSRUUuTWVzaChoYWlyVHVmdEdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgaGFpclR1ZnQyLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWihNYXRoLlBJIC8gNikpO1xuICAgIGhhaXJUdWZ0Mi5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblgoTWF0aC5QSSAvIDEwKSk7XG4gICAgaGFpclR1ZnQyLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKC02LjUsIC0xLCAtMSkpO1xuICAgIGhhaXJUdWZ0Mi51cGRhdGVNYXRyaXgoKTtcbiAgICBoYWlyR2VvbU1lcmdlZC5tZXJnZShoYWlyVHVmdDIuZ2VvbWV0cnksIGhhaXJUdWZ0Mi5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXJUdWZ0NSA9IGhhaXJUdWZ0Mi5jbG9uZSgpO1xuICAgIGhhaXJUdWZ0NS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblgoLU1hdGguUEkgLyAxMCkpO1xuICAgIGhhaXJUdWZ0NS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigyLCAxLjUsIC01KSk7XG4gICAgaGFpclR1ZnQ1LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGhhaXJHZW9tTWVyZ2VkLm1lcmdlKGhhaXJUdWZ0NS5nZW9tZXRyeSwgaGFpclR1ZnQ1Lm1hdHJpeCk7XG5cbiAgICBsZXQgaGFpclR1ZnQzID0gbmV3IFRIUkVFLk1lc2goaGFpclR1ZnRHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGhhaXJUdWZ0My5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooLU1hdGguUEkgLyAzKSk7XG4gICAgaGFpclR1ZnQzLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWChNYXRoLlBJIC8gMykpO1xuICAgIGhhaXJUdWZ0My5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigzLCAzLCAtMykpO1xuICAgIGhhaXJUdWZ0My51cGRhdGVNYXRyaXgoKTtcbiAgICBoYWlyR2VvbU1lcmdlZC5tZXJnZShoYWlyVHVmdDMuZ2VvbWV0cnksIGhhaXJUdWZ0My5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXJUdWZ0NiA9IGhhaXJUdWZ0My5jbG9uZSgpO1xuICAgIGhhaXJUdWZ0Ni5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooLU1hdGguUEkgLyAxMCkpO1xuICAgIGhhaXJUdWZ0Ni5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblkoLU1hdGguUEkgLyA1KSk7XG4gICAgaGFpclR1ZnQ2LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDIsIC0xLjUsIC0xKSk7XG4gICAgaGFpclR1ZnQ2LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGhhaXJHZW9tTWVyZ2VkLm1lcmdlKGhhaXJUdWZ0Ni5nZW9tZXRyeSwgaGFpclR1ZnQ2Lm1hdHJpeCk7XG5cbiAgICBsZXQgaGFpclR1ZnQ4ID0gaGFpclR1ZnQ2LmNsb25lKCk7XG4gICAgaGFpclR1ZnQ4LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWChNYXRoLlBJIC8gMzApKTtcbiAgICBoYWlyVHVmdDguYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oLTEuNSwgMS41LCAzLjUpKTtcbiAgICBoYWlyVHVmdDgudXBkYXRlTWF0cml4KCk7XG4gICAgaGFpckdlb21NZXJnZWQubWVyZ2UoaGFpclR1ZnQ4Lmdlb21ldHJ5LCBoYWlyVHVmdDgubWF0cml4KTtcblxuICAgIGxldCBoYWlyVHVmdDkgPSBoYWlyVHVmdDIuY2xvbmUoKTtcbiAgICBoYWlyVHVmdDkuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25ZKE1hdGguUEkgLyAyKSk7XG4gICAgaGFpclR1ZnQ5LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWChNYXRoLlBJIC8gNykpO1xuICAgIGhhaXJUdWZ0OS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigzLjUsIDUuNSwgLTUpKTtcbiAgICBoYWlyVHVmdDkudXBkYXRlTWF0cml4KCk7XG4gICAgaGFpckdlb21NZXJnZWQubWVyZ2UoaGFpclR1ZnQ5Lmdlb21ldHJ5LCBoYWlyVHVmdDkubWF0cml4KTtcblxuICAgIGxldCBoYWlyVHVmdDEwID0gaGFpclR1ZnQ5LmNsb25lKCk7XG4gICAgaGFpclR1ZnQxMC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblgoLU1hdGguUEkgLyA0KSk7XG4gICAgaGFpclR1ZnQxMC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigtLjUsIC0xLCAtNikpO1xuICAgIGhhaXJUdWZ0MTAudXBkYXRlTWF0cml4KCk7XG4gICAgaGFpckdlb21NZXJnZWQubWVyZ2UoaGFpclR1ZnQxMC5nZW9tZXRyeSwgaGFpclR1ZnQxMC5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXJNZXJnZWQgPSBuZXcgVEhSRUUuTWVzaChoYWlyR2VvbU1lcmdlZCwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyTWVyZ2VkLmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgIGhhaXJNZXJnZWQucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG5cbiAgICB0aGlzLmhhaXIuYWRkKGhhaXJNZXJnZWQpO1xuXG4gIH1cblxuICBFeWVzKCkge1xuICAgIC8vRVlFU1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgdGhpcy5leWVzID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgdGhpcy5leWVzLnBvc2l0aW9uLnNldCgwLCAzLCA5KTtcbiAgICB0aGlzLmhlYWQuYWRkKHRoaXMuZXllcyk7XG5cbiAgICBsZXQgZXllV2hpdGVHZW9tID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMi41LCAyLjUpO1xuXG4gICAgbGV0IGV5ZVdoaXRlUmlnaHQgPSBuZXcgVEhSRUUuTWVzaChleWVXaGl0ZUdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgZXllV2hpdGVSaWdodC5wb3NpdGlvbi5zZXQoLTMuNzUsIDAsIDApO1xuICAgIGV5ZVdoaXRlUmlnaHQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIGV5ZVdoaXRlUmlnaHQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgbGV0IGV5ZUJsdWVHZW9tID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMS41LCAxLjUpO1xuXG4gICAgdGhpcy5leWVCbHVlUmlnaHQgPSBuZXcgVEhSRUUuTWVzaChleWVCbHVlR2VvbSwgTWF0LmJsdWVNYXQpO1xuICAgIHRoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLnNldCgwLCAwLCAuMDEpO1xuICAgIHRoaXMuZXllQmx1ZVJpZ2h0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmV5ZUJsdWVSaWdodC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICBleWVXaGl0ZVJpZ2h0LmFkZCh0aGlzLmV5ZUJsdWVSaWdodCk7XG5cbiAgICBsZXQgZXllUHVwaWxHZW9tID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMSwgMSk7XG5cbiAgICB0aGlzLmV5ZVB1cGlsUmlnaHQgPSBuZXcgVEhSRUUuTWVzaChleWVQdXBpbEdlb20sIE1hdC5ibGFja01hdCk7XG4gICAgdGhpcy5leWVQdXBpbFJpZ2h0LnBvc2l0aW9uLnNldCgwLCAwLCAuMDIpO1xuICAgIHRoaXMuZXllUHVwaWxSaWdodC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5leWVQdXBpbFJpZ2h0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuZXllQmx1ZVJpZ2h0LmFkZCh0aGlzLmV5ZVB1cGlsUmlnaHQpO1xuXG4gICAgbGV0IGV5ZVdoaXRlTGVmdCA9IG5ldyBUSFJFRS5NZXNoKGV5ZVdoaXRlR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBleWVXaGl0ZUxlZnQucG9zaXRpb24uc2V0KDMuNzUsIDAsIDApO1xuICAgIGV5ZVdoaXRlTGVmdC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgZXllV2hpdGVMZWZ0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuZXllQmx1ZUxlZnQgPSBuZXcgVEhSRUUuTWVzaChleWVCbHVlR2VvbSwgTWF0LmJsdWVNYXQpO1xuICAgIHRoaXMuZXllQmx1ZUxlZnQucG9zaXRpb24uc2V0KDAsIDAsIC4wMSk7XG4gICAgdGhpcy5leWVCbHVlTGVmdC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5leWVCbHVlTGVmdC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICBleWVXaGl0ZUxlZnQuYWRkKHRoaXMuZXllQmx1ZUxlZnQpO1xuXG4gICAgdGhpcy5leWVQdXBpbExlZnQgPSBuZXcgVEhSRUUuTWVzaChleWVQdXBpbEdlb20sIE1hdC5ibGFja01hdCk7XG4gICAgdGhpcy5leWVQdXBpbExlZnQucG9zaXRpb24uc2V0KDAsIDAsIC4wMik7XG4gICAgdGhpcy5leWVQdXBpbExlZnQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuZXllUHVwaWxMZWZ0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuZXllQmx1ZUxlZnQuYWRkKHRoaXMuZXllUHVwaWxMZWZ0KTtcblxuICAgIHRoaXMuZXllcy5hZGQoZXllV2hpdGVSaWdodCwgZXllV2hpdGVMZWZ0KTtcbiAgfVxuXG4gIEV5ZUJyb3dzKCkge1xuICAgIC8vRVlFIEJST1dTXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICB0aGlzLmV5ZUJyb3dzID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgdGhpcy5leWVCcm93cy5wb3NpdGlvbi5zZXQoMCwgNiwgOCk7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmV5ZUJyb3dzKTtcblxuICAgIGxldCBleWVCcm93R2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSg0LCAxLCAxKTtcblxuICAgIHRoaXMuZXllQnJvd1JpZ2h0ID0gbmV3IFRIUkVFLk1lc2goZXllQnJvd0dlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgdGhpcy5leWVCcm93UmlnaHQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKE1hdGguUEkgLyA0NSkpO1xuICAgIHRoaXMuZXllQnJvd1JpZ2h0LnBvc2l0aW9uLnNldCgtMy43NSwgMCwgMCk7XG4gICAgdGhpcy5leWVCcm93UmlnaHQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuZXllQnJvd1JpZ2h0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuZXllQnJvd0xlZnQgPSBuZXcgVEhSRUUuTWVzaChleWVCcm93R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICB0aGlzLmV5ZUJyb3dMZWZ0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWigtTWF0aC5QSSAvIDQ1KSk7XG4gICAgdGhpcy5leWVCcm93TGVmdC5wb3NpdGlvbi5zZXQoMy43NSwgMCwgMCk7XG4gICAgdGhpcy5leWVCcm93TGVmdC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5leWVCcm93TGVmdC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmV5ZUJyb3dzLmFkZCh0aGlzLmV5ZUJyb3dSaWdodCwgdGhpcy5leWVCcm93TGVmdCk7XG4gIH1cblxuICBGcmVja2xlcygpIHtcbiAgICAvL0ZyZWNrbGVzXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgdGhpcy5mcmVja2xlcyA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHRoaXMuZnJlY2tsZXMucG9zaXRpb24uc2V0KDAsIDAsIDgpO1xuICAgIHRoaXMuaGVhZC5hZGQodGhpcy5mcmVja2xlcyk7XG5cbiAgICBsZXQgZnJlY2tsZXNHZW9tTWVyZ2VkID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XG5cbiAgICBsZXQgZnJlY2tsZXNHZW9tID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMC41LCAwLjUpO1xuXG4gICAgbGV0IGZyZWNrbGUxID0gbmV3IFRIUkVFLk1lc2goZnJlY2tsZXNHZW9tLCBNYXQuYnJvd25NYXQpO1xuICAgIGZyZWNrbGUxLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKC01LCAwLCAwLjAxKSk7XG4gICAgZnJlY2tsZTEudXBkYXRlTWF0cml4KCk7XG4gICAgZnJlY2tsZXNHZW9tTWVyZ2VkLm1lcmdlKGZyZWNrbGUxLmdlb21ldHJ5LCBmcmVja2xlMS5tYXRyaXgpO1xuXG4gICAgbGV0IGZyZWNrbGUyID0gZnJlY2tsZTEuY2xvbmUoKTtcbiAgICBmcmVja2xlMi5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigtMC41LCAtMSwgMCkpO1xuICAgIGZyZWNrbGUyLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyZWNrbGVzR2VvbU1lcmdlZC5tZXJnZShmcmVja2xlMi5nZW9tZXRyeSwgZnJlY2tsZTIubWF0cml4KTtcblxuICAgIGxldCBmcmVja2xlMyA9IGZyZWNrbGUxLmNsb25lKCk7XG4gICAgZnJlY2tsZTMuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oMSwgLTAuNSwgMCkpO1xuICAgIGZyZWNrbGUzLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyZWNrbGVzR2VvbU1lcmdlZC5tZXJnZShmcmVja2xlMy5nZW9tZXRyeSwgZnJlY2tsZTMubWF0cml4KTtcblxuICAgIGxldCBmcmVja2xlNCA9IGZyZWNrbGUxLmNsb25lKCk7XG4gICAgZnJlY2tsZTQucG9zaXRpb24ueCA9IC1mcmVja2xlMS5wb3NpdGlvbi54O1xuICAgIGZyZWNrbGU0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyZWNrbGVzR2VvbU1lcmdlZC5tZXJnZShmcmVja2xlNC5nZW9tZXRyeSwgZnJlY2tsZTQubWF0cml4KTtcbiAgICBsZXQgZnJlY2tsZTUgPSBmcmVja2xlMi5jbG9uZSgpO1xuICAgIGZyZWNrbGU1LnBvc2l0aW9uLnggPSAtZnJlY2tsZTIucG9zaXRpb24ueDtcbiAgICBmcmVja2xlNS51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmVja2xlc0dlb21NZXJnZWQubWVyZ2UoZnJlY2tsZTUuZ2VvbWV0cnksIGZyZWNrbGU1Lm1hdHJpeCk7XG4gICAgbGV0IGZyZWNrbGU2ID0gZnJlY2tsZTMuY2xvbmUoKTtcbiAgICBmcmVja2xlNi5wb3NpdGlvbi54ID0gLWZyZWNrbGUzLnBvc2l0aW9uLng7XG4gICAgZnJlY2tsZTYudXBkYXRlTWF0cml4KCk7XG4gICAgZnJlY2tsZXNHZW9tTWVyZ2VkLm1lcmdlKGZyZWNrbGU2Lmdlb21ldHJ5LCBmcmVja2xlNi5tYXRyaXgpO1xuXG4gICAgbGV0IGZyZWNrbGVkTWVyZ2VkID0gbmV3IFRIUkVFLk1lc2goZnJlY2tsZXNHZW9tTWVyZ2VkLCBNYXQuYnJvd25NYXQpO1xuICAgIGZyZWNrbGVkTWVyZ2VkLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBmcmVja2xlZE1lcmdlZC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmZyZWNrbGVzLmFkZChmcmVja2xlZE1lcmdlZCk7XG4gIH1cblxuICBGZWF0dXJlcygpIHtcbiAgICAvL0ZlYXR1cmVzIC0gTm9zZSBhbmQgRWFyc1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgbGV0IGVhckdlb20gPSBuZXcgVEhSRUUuQm94QnVmZmVyR2VvbWV0cnkoMS41LCAzLCAxLjUpO1xuICAgIGxldCBlYXJSaWdodCA9IG5ldyBUSFJFRS5NZXNoKGVhckdlb20sIE1hdC5za2luMk1hdCk7XG4gICAgZWFyUmlnaHQucG9zaXRpb24uc2V0KC04LjUsIDEsIDApO1xuICAgIGVhclJpZ2h0LmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgIGVhclJpZ2h0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIGxldCBlYXJMZWZ0ID0gbmV3IFRIUkVFLk1lc2goZWFyR2VvbSwgTWF0LnNraW4yTWF0KTtcbiAgICBlYXJMZWZ0LnBvc2l0aW9uLnNldCg4LjUsIDEsIDApO1xuICAgIGVhckxlZnQuY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgZWFyTGVmdC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICBsZXQgbm9zZUdlb20gPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgxLCAyLCA0LCA0KTtcbiAgICBsZXQgbm9zZSA9IG5ldyBUSFJFRS5NZXNoKG5vc2VHZW9tLCBNYXQuc2tpbjJNYXQpO1xuICAgIG5vc2Uuc2NhbGUuc2V0KC43NSwgMSwgMS4zKTtcbiAgICBub3NlLnBvc2l0aW9uLnNldCgwLCAxLCA4KTtcbiAgICBub3NlLmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgIG5vc2UucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5oZWFkLmFkZChlYXJSaWdodCwgZWFyTGVmdCwgbm9zZSk7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2NsYXNzZXMvSGVhZC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ29sb3JzIGZyb20gJy4vY29sb3JzJztcbi8vIGxldCBza2luTWF0ID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuc2tpbiwgZmxhdFNoYWRpbmc6IHRydWV9KTtcbi8vIGxldCBza2luMk1hdCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogQ29sb3JzLnNraW4sIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG4vLyBsZXQgYXVidXJuTWF0ID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuYXVidXJuLCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuLy8gbGV0IGJyb3duTWF0ID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuYnJvd24sIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG4vLyBsZXQgYmxhY2tNYXQgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5ibGFjaywgZmxhdFNoYWRpbmc6IHRydWV9KTtcbi8vIGxldCB3aGl0ZU1hdCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy53aGl0ZSwgZmxhdFNoYWRpbmc6IHRydWV9KTtcbi8vIGxldCBibHVlTWF0ID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmxpZ2h0Qmx1ZSwgZmxhdFNoYWRpbmc6IHRydWV9KTtcbi8vIGxldCBiZWlnZU1hdCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5iZWlnZSwgZmxhdFNoYWRpbmc6IHRydWV9KTtcbi8vIGxldCB5ZWxsb3dNYXQgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMueWVsbG93LCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuLy8gbGV0IG5vcm1hbE1hdCA9IG5ldyBUSFJFRS5NZXNoTm9ybWFsTWF0ZXJpYWwoe30pO1xuXG5jb25zdCBNYXRlcmlhbHMgPSB7XG4gIFwic2tpbk1hdFwiOiBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5za2luLCBmbGF0U2hhZGluZzogdHJ1ZX0pLFxuICBcInNraW4yTWF0XCI6IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogQ29sb3JzLnNraW4sIGZsYXRTaGFkaW5nOiB0cnVlfSksXG4gIFwid2hpdGVNYXRcIjogbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMud2hpdGUsIGZsYXRTaGFkaW5nOiB0cnVlfSksXG4gIFwidGVldGhNYXRcIjogbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjogQ29sb3JzLnRlZXRoLCBmbGF0U2hhZGluZzogdHJ1ZX0pLFxuICBcImJlaWdlTWF0XCI6IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5iZWlnZSwgZmxhdFNoYWRpbmc6IHRydWV9KSxcbiAgXCJicm93bk1hdFwiOiBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5icm93biwgZmxhdFNoYWRpbmc6IHRydWV9KSxcbiAgXCJibGFja01hdFwiOiBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5ibGFjaywgZmxhdFNoYWRpbmc6IHRydWV9KSxcbiAgXCJibHVlTWF0XCI6IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5saWdodEJsdWUsIGZsYXRTaGFkaW5nOiB0cnVlfSksXG4gIFwieWVsbG93TWF0XCI6IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy55ZWxsb3csIGZsYXRTaGFkaW5nOiB0cnVlfSksXG4gIFwibm9ybWFsTWF0XCI6IG5ldyBUSFJFRS5NZXNoTm9ybWFsTWF0ZXJpYWwoe30pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXRlcmlhbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9vYmplY3RzL01hdGVyaWFscy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coJ2F1ZGlvJyk7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jbGFzc2VzL0F1ZGlvLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTcGVlY2hSZWNvZ25pdGlvbiA9IFNwZWVjaFJlY29nbml0aW9uIHx8IHdlYmtpdFNwZWVjaFJlY29nbml0aW9uXG52YXIgU3BlZWNoR3JhbW1hckxpc3QgPSBTcGVlY2hHcmFtbWFyTGlzdCB8fCB3ZWJraXRTcGVlY2hHcmFtbWFyTGlzdFxudmFyIFNwZWVjaFJlY29nbml0aW9uRXZlbnQgPSBTcGVlY2hSZWNvZ25pdGlvbkV2ZW50IHx8IHdlYmtpdFNwZWVjaFJlY29nbml0aW9uRXZlbnRcblxuLy8gdmFyIGNvbG9ycyA9IFsgJ2FxdWEnICwgJ2F6dXJlJyAsICdiZWlnZScsICdiaXNxdWUnLCAnYmxhY2snLCAnYmx1ZScsICdicm93bicsICdjaG9jb2xhdGUnLCAnY29yYWwnLCAnY3JpbXNvbicsICdjeWFuJywgJ2Z1Y2hzaWEnLCAnZ2hvc3R3aGl0ZScsICdnb2xkJywgJ2dvbGRlbnJvZCcsICdncmF5JywgJ2dyZWVuJywgJ2luZGlnbycsICdpdm9yeScsICdraGFraScsICdsYXZlbmRlcicsICdsaW1lJywgJ2xpbmVuJywgJ21hZ2VudGEnLCAnbWFyb29uJywgJ21vY2Nhc2luJywgJ25hdnknLCAnb2xpdmUnLCAnb3JhbmdlJywgJ29yY2hpZCcsICdwZXJ1JywgJ3BpbmsnLCAncGx1bScsICdwdXJwbGUnLCAncmVkJywgJ3NhbG1vbicsICdzaWVubmEnLCAnc2lsdmVyJywgJ3Nub3cnLCAndGFuJywgJ3RlYWwnLCAndGhpc3RsZScsICd0b21hdG8nLCAndHVycXVvaXNlJywgJ3Zpb2xldCcsICd3aGl0ZScsICd5ZWxsb3cnXTtcbi8vIHZhciBncmFtbWFyID0gJyNKU0dGIFYxLjA7IGdyYW1tYXIgY29sb3JzOyBwdWJsaWMgPGNvbG9yPiA9ICcgKyBjb2xvcnMuam9pbignIHwgJykgKyAnIDsnXG5cbmxldCByZWNvcmRpbmcgPSBmYWxzZTtcbmxldCB0cmFuc2NyaXB0ID0gXCJcIjtcbmNvbnN0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZmllbGRgKTtcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByZWNvcmRgKTtcbmNvbnN0IGR1cmluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkdXJpbmdgKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BlZWNoUmVjb2duIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yZWNvZ25pdGlvbiA9IG5ldyBTcGVlY2hSZWNvZ25pdGlvbigpO1xuICAgIGNvbnN0IHNwZWVjaFJlY29nbml0aW9uTGlzdCA9IG5ldyBTcGVlY2hHcmFtbWFyTGlzdCgpO1xuICAgIC8vIHNwZWVjaFJlY29nbml0aW9uTGlzdC5hZGRGcm9tU3RyaW5nKGdyYW1tYXIsIDEpO1xuICAgIC8vIHRoaXMucmVjb2duaXRpb24uZ3JhbW1hcnMgPSBzcGVlY2hSZWNvZ25pdGlvbkxpc3Q7XG4gICAgdGhpcy5yZWNvZ25pdGlvbi5jb250aW51b3VzID0gZmFsc2U7XG4gICAgdGhpcy5yZWNvZ25pdGlvbi5sYW5nID0gJ25sLUJFJztcbiAgICB0aGlzLnJlY29nbml0aW9uLmludGVyaW1SZXN1bHRzID0gZmFsc2U7XG4gICAgdGhpcy5yZWNvZ25pdGlvbi5tYXhBbHRlcm5hdGl2ZXMgPSAxO1xuXG4gICAgdGhpcy5pbml0KCk7XG5cbiAgICB0aGlzLnJlY29nbml0aW9uLm9ucmVzdWx0ID0gZXZlbnQgPT4gdGhpcy5nb3RSZXN1bHQoZXZlbnQpO1xuICAgIHRoaXMucmVjb2duaXRpb24ub25zcGVlY2hlbmQgPSBlID0+wqB0aGlzLm9uU3BlZWNoRW5kKGUpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlY29nbml0aW9uLnN0YXJ0KCk7XG4gICAgICBjb25zb2xlLmxvZygnUmVhZHkgdG8gcmVjZWl2ZSBhIGNvbW1hbmQuJyk7XG4gICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgZ290UmVzdWx0KGV2ZW50KSB7XG4gICAgY29uc3QgbGFzdCA9IGV2ZW50LnJlc3VsdHMubGVuZ3RoIC0gMTtcbiAgICB0cmFuc2NyaXB0ID0gZXZlbnQucmVzdWx0c1tsYXN0XVswXS50cmFuc2NyaXB0O1xuXG4gICAgdGV4dC52YWx1ZSA9IHRyYW5zY3JpcHQ7XG4gICAgY29uc29sZS5sb2codHJhbnNjcmlwdCk7XG4gICAgY29uc29sZS5sb2coZXZlbnQucmVzdWx0cyk7XG4gICAgY29uc29sZS5sb2coJ0NvbmZpZGVuY2U6ICcgKyBldmVudC5yZXN1bHRzWzBdWzBdLmNvbmZpZGVuY2UpO1xuICB9XG5cbiAgb25TcGVlY2hFbmQoZSnCoHtcbiAgICB0aGlzLnJlY29nbml0aW9uLnN0b3AoKTtcbiAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQ2xpY2sgVG8gU3RhcnQnO1xuICB9XG59XG5cbi8vIHRoaXMucmVjb2duaXRpb24ub25ub21hdGNoID0gZnVuY3Rpb24oZXZlbnQpIHtcbi8vICAgZGlhZ25vc3RpYy50ZXh0Q29udGVudCA9IFwiSSBkaWRuJ3QgcmVjb2duaXNlIHRoYXQgY29sb3IuXCI7XG4vLyB9XG4vL1xuLy8gdGhpcy5yZWNvZ25pdGlvbi5vbmVycm9yID0gZnVuY3Rpb24oZXZlbnQpIHtcbi8vICAgZGlhZ25vc3RpYy50ZXh0Q29udGVudCA9ICdFcnJvciBvY2N1cnJlZCBpbiB0aGlzLnJlY29nbml0aW9uOiAnICsgZXZlbnQuZXJyb3I7XG4vLyB9XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jbGFzc2VzL1NwZWVjaFJlY29nbml0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=