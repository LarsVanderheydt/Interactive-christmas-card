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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Colors = {
  skin: 0xffe0bd,
  freckles: 0xcfba96,
  white: 0xe9ebee,
  glasses: 0xf9c421,
  teeth: 0xffffff,
  black: 0x2e2e2e,
  eye: 0x6295a8,
  hat: 0x720314
};
/* harmony default export */ __webpack_exports__["a"] = (Colors);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(5);
module.exports = self.fetch.bind(self);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomFromSeed = __webpack_require__(13);

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;

var shuffled;

function reset() {
    shuffled = false;
}

function setCharacters(_alphabet_) {
    if (!_alphabet_) {
        if (alphabet !== ORIGINAL) {
            alphabet = ORIGINAL;
            reset();
        }
        return;
    }

    if (_alphabet_ === alphabet) {
        return;
    }

    if (_alphabet_.length !== ORIGINAL.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
    }

    var unique = _alphabet_.split('').filter(function(item, ind, arr){
       return ind !== arr.lastIndexOf(item);
    });

    if (unique.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
    }

    alphabet = _alphabet_;
    reset();
}

function characters(_alphabet_) {
    setCharacters(_alphabet_);
    return alphabet;
}

function setSeed(seed) {
    randomFromSeed.seed(seed);
    if (previousSeed !== seed) {
        reset();
        previousSeed = seed;
    }
}

function shuffle() {
    if (!alphabet) {
        setCharacters(ORIGINAL);
    }

    var sourceArray = alphabet.split('');
    var targetArray = [];
    var r = randomFromSeed.nextValue();
    var characterIndex;

    while (sourceArray.length > 0) {
        r = randomFromSeed.nextValue();
        characterIndex = Math.floor(r * sourceArray.length);
        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
    }
    return targetArray.join('');
}

function getShuffled() {
    if (shuffled) {
        return shuffled;
    }
    shuffled = shuffle();
    return shuffled;
}

/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */
function lookup(index) {
    var alphabetShuffled = getShuffled();
    return alphabetShuffled[index];
}

module.exports = {
    characters: characters,
    seed: setSeed,
    lookup: lookup,
    shuffled: getShuffled
};


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_Materials__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var isBlinking = false;

var Head = function () {
  function Head() {
    _classCallCheck(this, Head);

    this.mesh = new THREE.Object3D();

    var headGeom = new THREE.BoxBufferGeometry(16, 16, 16);
    var skinMat = new THREE.MeshLambertMaterial({ color: __WEBPACK_IMPORTED_MODULE_0__objects_colors__["a" /* default */].skin, flatShading: true });
    var eyeMat = new THREE.MeshPhongMaterial({ color: __WEBPACK_IMPORTED_MODULE_0__objects_colors__["a" /* default */].eye, flatShading: true });

    this.head = new THREE.Mesh(headGeom, skinMat);
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
    this.Hat();
    this.Freckles();
    this.Features();
    this.idle();
    this.normalize();
  }

  _createClass(Head, [{
    key: 'normalize',
    value: function normalize(v, vmin, vmax, tmin, tmax) {
      var nv = Math.max(Math.min(v, vmax), vmin);
      var dv = vmax - vmin;
      var pc = (nv - vmin) / dv;
      var dt = tmax - tmin;
      var tv = tmin + pc * dt;
      return tv;
    }
  }, {
    key: 'updateBody',
    value: function updateBody(speed, eyeBlueRightPosX, eyeBlueLeftPosX, eyeBlueRightPosY, eyeBlueLeftPosY) {
      //this.eyeBlueRight.rotation.y += (lion.tHeagRotY - this.eyeBlueRight.rotation.y) / speed;
      //this.eyeBlueRight.rotation.x += (this.eyeBlueRightRotX - this.eyeBlueRight.rotation.x) / speed;

      this.eyeBlueRight.position.x += (eyeBlueRightPosX - this.eyeBlueRight.position.x) / speed;
      this.eyeBlueLeft.position.x += (eyeBlueLeftPosX - this.eyeBlueLeft.position.x) / speed;

      this.eyeBlueRight.position.y += (eyeBlueRightPosY - this.eyeBlueRight.position.y) / speed;
      this.eyeBlueLeft.position.y += (eyeBlueLeftPosY - this.eyeBlueLeft.position.y) / speed;

      //this.eyeBlueRight.position.y += Math.sin(this.eyeBlueRightPosY - this.eyeBlueRight.position.y) / speed;
      // this.eyeBlueRight.position.z += (this.eyeBlueRightPosZ - this.eyeBlueRight.position.z) / speed;
    }
  }, {
    key: 'idle',
    value: function idle() {
      var xTarget = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var yTarget = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;


      //console.log(xTarget, yTarget);
      //console.log(this.eyeBlueRight.position.x);
      // console.log(this.eyeBlueRight.position.y);
      var distance = 1;

      this.head.rotation.z = Math.sin(Date.now() * 0.005) * Math.PI * 0.005;
      this.head.rotation.x = Math.sin(Date.now() * 0.004) * Math.PI * 0.03;

      // this.eyeBlueLeft.position.x = Math.sin(Date.now() * 0.002) * distance / 2;
      // this.eyeBlueRight.position.x = Math.sin(Date.now() * 0.002) * distance / 2;

      var eyeBlueRightPosX = this.normalize(xTarget, -200, 200, -0.6, 0.6);

      var eyeBlueLeftPosX = this.normalize(xTarget, -200, 200, -0.6, 0.6);

      var eyeBlueRightPosY = this.normalize(yTarget, -200, 200, 0.6, -0.6);

      var eyeBlueLeftPosY = this.normalize(yTarget, -200, 200, 0.6, -0.6);

      // this.eyeBlueRightRotY = xTarget, -20, 20, -Math.PI / 4, Math.PI / 4;
      // this.eyeBlueRightRotX = yTarget, -20, 20, -Math.PI / 4, Math.PI / 4;
      // this.eyeBlueRightPosX = xTarget, -20, 20, 70, -70;
      // this.eyeBlueRightPosY = yTarget, -140, 260, 20, 100;
      // this.eyeBlueRightPosZ = 7;

      this.eyeBrowRight.position.y = Math.sin(Date.now() * 0.004) * distance / 2;
      this.eyeBrowLeft.position.y = Math.cos(Date.now() * 0.004) * distance / 2;

      // this.eyeBrowRight.rotation.z = Math.sin(Date.now() * 0.002) * Math.PI * 0.04;
      // this.eyeBrowLeft.rotation.z = Math.cos(Date.now() * 0.002) * Math.PI * 0.04;

      //this.beard.mouth.position.x = Math.sin(Date.now() * 0.002) * distance / 2;

      // SNOR OMHOOG-OMLAAG
      this.moustache.position.y = Math.cos(Date.now() * 0.01) * distance / 4;
      // SNOR OMHOOG-ROTATIE
      this.moustache.rotation.z = Math.sin(Date.now() * 0.01) * Math.PI * 0.01;

      //this.mouth.scale.x = Math.cos(Date.now() * 0.004) * distance / 2;

      //SNELHEID HEEN EN WEER
      this.mesh.rotation.y = Math.sin(Date.now() * 0.002) * Math.PI * 0.05;
      this.updateBody(10, eyeBlueRightPosX, eyeBlueLeftPosX, eyeBlueRightPosY, eyeBlueLeftPosY);
    }
  }, {
    key: 'Beard',
    value: function Beard() {

      var beardGeomMerged = new THREE.Geometry();

      var beard1Geom = new THREE.BoxGeometry(2, 10, 16);

      var beard1 = new THREE.Mesh(beard1Geom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      beard1.applyMatrix(new THREE.Matrix4().makeTranslation(9, 0, 0));
      beard1.updateMatrix();
      beardGeomMerged.merge(beard1.geometry, beard1.matrix);

      var beard2 = new THREE.Mesh(beard1Geom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      beard2.applyMatrix(new THREE.Matrix4().makeTranslation(7, -2, 2));
      beard2.scale.z = 0.8;
      beard2.updateMatrix();
      beardGeomMerged.merge(beard2.geometry, beard2.matrix);

      var beard3 = beard1.clone();
      beard3.position.x = -beard1.position.x;
      beard3.updateMatrix();
      beardGeomMerged.merge(beard3.geometry, beard3.matrix);

      var beard4 = beard2.clone();
      beard4.position.x = -beard2.position.x;
      beard4.updateMatrix();
      beardGeomMerged.merge(beard4.geometry, beard4.matrix);

      var beard2Geom = new THREE.BoxGeometry(3, 14, 10);
      beard2Geom.vertices[2].z -= 2;
      beard2Geom.vertices[7].z -= 2;

      var beard5 = new THREE.Mesh(beard2Geom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      beard5.applyMatrix(new THREE.Matrix4().makeTranslation(5, -5, 4));
      beard5.updateMatrix();
      beardGeomMerged.merge(beard5.geometry, beard5.matrix);

      var beard3Geom = new THREE.BoxGeometry(2.5, 14, 10);
      beard3Geom.vertices[2].z -= 2;
      beard3Geom.vertices[7].z -= 2;

      var beard6 = new THREE.Mesh(beard3Geom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      beard6.applyMatrix(new THREE.Matrix4().makeTranslation(2.5, -6, 6));
      beard6.updateMatrix();
      beardGeomMerged.merge(beard6.geometry, beard6.matrix);

      var beard7 = beard5.clone();
      beard7.position.x = -beard5.position.x;
      beard7.updateMatrix();
      beardGeomMerged.merge(beard7.geometry, beard7.matrix);

      var beard8 = beard6.clone();
      beard8.position.x = -beard6.position.x;
      beard8.updateMatrix();
      beardGeomMerged.merge(beard8.geometry, beard8.matrix);

      var beard4Geom = new THREE.BoxGeometry(2.5, 14.5, 10);
      beard4Geom.vertices[2].z -= 1;
      beard4Geom.vertices[7].z -= 1;

      var beard9 = new THREE.Mesh(beard4Geom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      beard9.applyMatrix(new THREE.Matrix4().makeTranslation(0, -7, 5.75));
      beard9.updateMatrix();
      beardGeomMerged.merge(beard9.geometry, beard9.matrix);

      var beard5Geom = new THREE.BoxGeometry(4, 8, 8);
      var beard10 = new THREE.Mesh(beard5Geom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      beard10.applyMatrix(new THREE.Matrix4().makeTranslation(-6, -1, -2));
      beard10.updateMatrix();
      beardGeomMerged.merge(beard10.geometry, beard10.matrix);

      var beard11 = new THREE.Mesh(beard5Geom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      beard11.applyMatrix(new THREE.Matrix4().makeTranslation(0, -5, -2));
      beard11.updateMatrix();
      beardGeomMerged.merge(beard11.geometry, beard11.matrix);

      var beardMerged = new THREE.Mesh(beardGeomMerged, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      beardMerged.castShadow = true;
      beardMerged.receiveShadow = true;

      var mouthGeom = new THREE.BoxGeometry(10, 4, 1);
      var mouth = new THREE.Mesh(mouthGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].blackMat);
      mouth.position.set(0, 2, 8);
      mouth.castShadow = false;
      mouth.receiveShadow = true;

      var teethGeom = new THREE.BoxGeometry(10, 1, 1);
      var teeth = new THREE.Mesh(teethGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].teethMat);
      teeth.position.set(0, 0.5, 0.1);
      teeth.castShadow = false;
      teeth.receiveShadow = true;
      mouth.add(teeth);

      // let smileGeom = new THREE.TorusGeometry(4, 1.5, 2, 6, -Math.PI);
      // this.smile = new THREE.Mesh(smileGeom, Mat.blackMat);
      // this.smile.position.set(0, 2, 10);
      // this.smile.castShadow = false;
      // this.smile.receiveShadow = true;
      //
      // this.beard.add(beardMerged, mouth, this.smile);
      this.beard.add(beardMerged, mouth);

      var moustacheGeom = new THREE.BoxGeometry(14, 3, 3, 3);
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
  }, {
    key: 'Glasses',
    value: function Glasses() {
      //GLASSES
      //////////////////////////////////

      this.glasses = new THREE.Object3D();
      this.glasses.position.set(0, 0, 9);
      this.head.add(this.glasses);
      var glassesMat = new THREE.MeshPhongMaterial({ color: __WEBPACK_IMPORTED_MODULE_0__objects_colors__["a" /* default */].glasses, flatShading: true });

      var frameGeomMerged = new THREE.Geometry();

      var frameOuterGeom = new THREE.CylinderGeometry(3, 3, 0.5, 32);
      var frameInnerGeom = new THREE.CylinderGeometry(2.7, 2.7, 0.5, 32);

      frameOuterGeom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2));
      frameInnerGeom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2));

      var frameBSP = new ThreeBSP(frameOuterGeom);
      var frameCutBSP = new ThreeBSP(frameInnerGeom);

      var frameintersectionBSP = frameBSP.subtract(frameCutBSP);
      var frameLeft = frameintersectionBSP.toMesh(glassesMat);

      frameLeft.applyMatrix(new THREE.Matrix4().makeTranslation(4, 3, 0));
      frameLeft.updateMatrix();
      frameGeomMerged.merge(frameLeft.geometry, frameLeft.matrix);

      var frameRight = frameLeft.clone();
      frameRight.applyMatrix(new THREE.Matrix4().makeRotationZ(Math.PI / 30));
      frameRight.applyMatrix(new THREE.Matrix4().makeTranslation(-7.5, -0.25, 0));
      frameRight.updateMatrix();
      frameGeomMerged.merge(frameRight.geometry, frameRight.matrix);

      var frameMidGeom = new THREE.BoxGeometry(2, .3, .5);
      var frameMid = new THREE.Mesh(frameMidGeom, glassesMat);
      frameMid.applyMatrix(new THREE.Matrix4().makeTranslation(0, 3.3, -0.3));
      frameMid.updateMatrix();
      frameGeomMerged.merge(frameMid.geometry, frameMid.matrix);

      var frameEndGeom = new THREE.BoxGeometry(1.5, .5, 1);
      var frameEndRight = new THREE.Mesh(frameEndGeom, glassesMat);
      frameEndRight.applyMatrix(new THREE.Matrix4().makeTranslation(7.5, 3, 0));
      frameEndRight.updateMatrix();
      frameGeomMerged.merge(frameEndRight.geometry, frameEndRight.matrix);

      var frameEndLeft = frameEndRight.clone();
      frameEndLeft.position.x = -frameEndRight.position.x;
      frameEndLeft.updateMatrix();
      frameGeomMerged.merge(frameEndLeft.geometry, frameEndLeft.matrix);

      var frameSpokeGeom = new THREE.BoxGeometry(1, 0.5, 12);
      var frameSpokeRight = new THREE.Mesh(frameSpokeGeom, glassesMat);
      frameSpokeRight.applyMatrix(new THREE.Matrix4().makeTranslation(8, 3, -5.5));
      frameSpokeRight.updateMatrix();
      frameGeomMerged.merge(frameSpokeRight.geometry, frameSpokeRight.matrix);

      var frameSpokeLeft = frameSpokeRight.clone();
      frameSpokeLeft.position.x = -frameSpokeRight.position.x;
      frameSpokeLeft.updateMatrix();
      frameGeomMerged.merge(frameSpokeLeft.geometry, frameSpokeLeft.matrix);

      var frameMerged = new THREE.Mesh(frameGeomMerged, glassesMat);
      frameMerged.castShadow = false;
      frameMerged.receiveShadow = true;

      this.glasses.add(frameMerged);
    }
  }, {
    key: 'Hair',
    value: function Hair() {
      //HAIR
      ////////////////////////////////////

      this.hair = new THREE.Object3D();
      this.hair.position.set(0, 9, 0);
      this.head.add(this.hair);

      var hairGeomMerged = new THREE.Geometry();

      var hairFlatGeom = new THREE.BoxGeometry(10, 2, 18);

      var hair1 = new THREE.Mesh(hairFlatGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      hair1.applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI / 40));
      hair1.applyMatrix(new THREE.Matrix4().makeTranslation(-4, -0.5, 0));
      hair1.updateMatrix();
      hairGeomMerged.merge(hair1.geometry, hair1.matrix);

      var hair2 = new THREE.Mesh(hairFlatGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      hair2.applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI / 10));
      hair2.applyMatrix(new THREE.Matrix4().makeTranslation(-2, 1, 0));
      hair2.updateMatrix();
      hairGeomMerged.merge(hair2.geometry, hair2.matrix);

      var hair3 = new THREE.Mesh(hairFlatGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      hair3.applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI / 5));
      hair3.applyMatrix(new THREE.Matrix4().makeTranslation(2, 1, 0));
      hair3.updateMatrix();
      hairGeomMerged.merge(hair3.geometry, hair3.matrix);

      var hair4 = new THREE.Mesh(hairFlatGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      hair4.applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI / 4));
      hair4.applyMatrix(new THREE.Matrix4().makeTranslation(6, 0, 0));
      hair4.updateMatrix();
      hairGeomMerged.merge(hair4.geometry, hair4.matrix);

      var hair6 = new THREE.Mesh(hairFlatGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      hair6.applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI / -3));
      hair6.applyMatrix(new THREE.Matrix4().makeTranslation(-7.75, -.5, 0));
      hair6.updateMatrix();
      hairGeomMerged.merge(hair6.geometry, hair6.matrix);

      var hairFlatBackGeom = new THREE.BoxGeometry(18, 7, 6);
      hairFlatBackGeom.vertices[0].x -= 1;
      hairFlatBackGeom.vertices[1].x -= 1;
      hairFlatBackGeom.vertices[4].x += 1;
      hairFlatBackGeom.vertices[5].x += 1;

      var hair5 = new THREE.Mesh(hairFlatBackGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      hair5.applyMatrix(new THREE.Matrix4().makeTranslation(0, -4.5, -6));
      hair5.updateMatrix();
      hairGeomMerged.merge(hair5.geometry, hair5.matrix);

      var hairMerged = new THREE.Mesh(hairGeomMerged, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      hairMerged.castShadow = false;
      hairMerged.receiveShadow = true;

      this.hair.add(hairMerged);
    }
  }, {
    key: 'Eyes',
    value: function Eyes() {

      this.eyes = new THREE.Object3D();
      this.eyes.position.set(0, 3, 9);
      this.head.add(this.eyes);

      var eyeWhiteGeom = new THREE.PlaneGeometry(2.5, 2.5);

      var eyeWhiteRight = new THREE.Mesh(eyeWhiteGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      eyeWhiteRight.position.set(-3.75, 0, 0);
      eyeWhiteRight.castShadow = false;
      eyeWhiteRight.receiveShadow = false;

      var eyeBlueGeom = new THREE.PlaneGeometry(1.5, 1.5);

      var eyeMat = new THREE.MeshPhongMaterial({ color: __WEBPACK_IMPORTED_MODULE_0__objects_colors__["a" /* default */].eye, flatShading: true });

      this.eyeBlueRight = new THREE.Mesh(eyeBlueGeom, eyeMat);
      this.eyeBlueRight.position.set(0, 0, .01);
      this.eyeBlueRight.castShadow = false;
      this.eyeBlueRight.receiveShadow = false;

      eyeWhiteRight.add(this.eyeBlueRight);

      var eyePupilGeom = new THREE.PlaneGeometry(1, 1);

      this.eyePupilRight = new THREE.Mesh(eyePupilGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].blackMat);
      this.eyePupilRight.position.set(0, 0, .02);
      this.eyePupilRight.castShadow = false;
      this.eyePupilRight.receiveShadow = false;

      this.eyeBlueRight.add(this.eyePupilRight);

      var eyeWhiteLeft = new THREE.Mesh(eyeWhiteGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      eyeWhiteLeft.position.set(3.75, 0, 0);
      eyeWhiteLeft.castShadow = false;
      eyeWhiteLeft.receiveShadow = false;

      this.eyeBlueLeft = new THREE.Mesh(eyeBlueGeom, eyeMat);
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
  }, {
    key: 'EyeBrows',
    value: function EyeBrows() {
      this.eyeBrows = new THREE.Object3D();
      this.eyeBrows.position.set(0, 6, 8);
      this.head.add(this.eyeBrows);

      var eyeBrowGeom = new THREE.BoxGeometry(4, 1, 1);

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
  }, {
    key: 'Hat',
    value: function Hat() {
      this.hat = new THREE.Object3D();
      this.hat.position.set(-0.2, 11, 2.4);
      this.head.add(this.hat);
      var hatMat = new THREE.MeshPhongMaterial({ color: __WEBPACK_IMPORTED_MODULE_0__objects_colors__["a" /* default */].hat, flatShading: true });

      var bandGeom = new THREE.TorusGeometry(9, 2, 16, 100);
      var bigConeGeom = new THREE.CylinderGeometry(1, 11, 12, 15);
      var smallConeGeom = new THREE.CylinderGeometry(0.8, 3, 9, 32);
      var hatDingleGeom = new THREE.SphereGeometry(1.5, 8, 8);

      this.band = new THREE.Mesh(bandGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].teethMat);
      this.band.applyMatrix(new THREE.Matrix4().makeRotationX(Math.PI / 2));
      this.band.position.set(0, 0, 0);
      this.band.castShadow = false;
      this.band.receiveShadow = false;

      this.bigCone = new THREE.Mesh(bigConeGeom, hatMat);
      this.bigCone.position.set(0, 6, 0);
      this.bigCone.castShadow = false;
      this.bigCone.receiveShadow = false;

      this.smallCone = new THREE.Mesh(smallConeGeom, hatMat);
      this.smallCone.applyMatrix(new THREE.Matrix4().makeRotationX(Math.PI / 2));
      this.smallCone.applyMatrix(new THREE.Matrix4().makeRotationY(Math.PI / 2));
      this.smallCone.applyMatrix(new THREE.Matrix4().makeRotationZ(Math.PI / -8));
      this.smallCone.position.set(4, 7.8, -1);
      this.smallCone.castShadow = false;
      this.smallCone.receiveShadow = false;

      this.hatDingle = new THREE.Mesh(hatDingleGeom, __WEBPACK_IMPORTED_MODULE_1__objects_Materials__["a" /* default */].whiteMat);
      this.hatDingle.position.set(9, 5.5, -1);
      this.hatDingle.castShadow = false;
      this.hatDingle.receiveShadow = false;

      this.hat.add(this.band, this.bigCone, this.smallCone, this.hatDingle);
    }
  }, {
    key: 'Freckles',
    value: function Freckles() {
      this.freckles = new THREE.Object3D();
      this.freckles.position.set(0, 0, 8);
      this.head.add(this.freckles);

      var frecklesGeomMerged = new THREE.Geometry();

      var frecklesGeom = new THREE.PlaneGeometry(0.5, 0.5);
      var frecklesMat = new THREE.MeshLambertMaterial({ color: __WEBPACK_IMPORTED_MODULE_0__objects_colors__["a" /* default */].freckles, flatShading: true });

      var freckle1 = new THREE.Mesh(frecklesGeom, frecklesMat);
      freckle1.applyMatrix(new THREE.Matrix4().makeTranslation(-5, 0, 0.01));
      freckle1.updateMatrix();
      frecklesGeomMerged.merge(freckle1.geometry, freckle1.matrix);

      var freckle2 = freckle1.clone();
      freckle2.applyMatrix(new THREE.Matrix4().makeTranslation(-0.5, -1, 0));
      freckle2.updateMatrix();
      frecklesGeomMerged.merge(freckle2.geometry, freckle2.matrix);

      var freckle3 = freckle1.clone();
      freckle3.applyMatrix(new THREE.Matrix4().makeTranslation(1, -0.5, 0));
      freckle3.updateMatrix();
      frecklesGeomMerged.merge(freckle3.geometry, freckle3.matrix);

      var freckle4 = freckle1.clone();
      freckle4.position.x = -freckle1.position.x;
      freckle4.updateMatrix();
      frecklesGeomMerged.merge(freckle4.geometry, freckle4.matrix);
      var freckle5 = freckle2.clone();
      freckle5.position.x = -freckle2.position.x;
      freckle5.updateMatrix();
      frecklesGeomMerged.merge(freckle5.geometry, freckle5.matrix);
      var freckle6 = freckle3.clone();
      freckle6.position.x = -freckle3.position.x;
      freckle6.updateMatrix();
      frecklesGeomMerged.merge(freckle6.geometry, freckle6.matrix);

      var freckledMerged = new THREE.Mesh(frecklesGeomMerged, frecklesMat);
      freckledMerged.castShadow = false;
      freckledMerged.receiveShadow = false;

      this.freckles.add(freckledMerged);
    }
  }, {
    key: 'Features',
    value: function Features() {
      var earGeom = new THREE.BoxBufferGeometry(1.5, 3, 1.5);
      var skinMat = new THREE.MeshLambertMaterial({ color: __WEBPACK_IMPORTED_MODULE_0__objects_colors__["a" /* default */].skin, flatShading: true });
      var earRight = new THREE.Mesh(earGeom, skinMat);
      earRight.position.set(-8.5, 1, 3);
      earRight.castShadow = false;
      earRight.receiveShadow = false;

      var earLeft = new THREE.Mesh(earGeom, skinMat);
      earLeft.position.set(8.5, 1, 3);
      earLeft.castShadow = false;
      earLeft.receiveShadow = false;

      var noseGeom = new THREE.CylinderGeometry(1, 2, 4, 4);
      var nose = new THREE.Mesh(noseGeom, skinMat);
      nose.scale.set(.75, 1, 1.3);
      nose.position.set(0, 1, 8);
      nose.castShadow = false;
      nose.receiveShadow = false;

      this.head.add(earRight, earLeft, nose);
    }
  }]);

  return Head;
}();

/* harmony default export */ __webpack_exports__["a"] = (Head);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);

// let skinMat = new THREE.MeshLambertMaterial({color: Colors.skin, flatShading: true});
// let frecklesMat = new THREE.MeshLambertMaterial({color: Colors.freckles, flatShading: true});
// let auburnMat = new THREE.MeshLambertMaterial({color: Colors.auburn, flatShading: true});
// let brownMat = new THREE.MeshLambertMaterial({color: Colors.brown, flatShading: true});
// let blackMat = new THREE.MeshLambertMaterial({color: Colors.black, flatShading: true});
// let whiteMat = new THREE.MeshPhongMaterial({color: Colors.white, flatShading: true});
// let eyesMat = new THREE.MeshPhongMaterial({color: Colors.eyes, flatShading: true});
// let beigeMat = new THREE.MeshPhongMaterial({color: Colors.beige, flatShading: true});
// let normalMat = new THREE.MeshNormalMaterial({});
var Materials = {
  //"skinMat": new THREE.MeshLambertMaterial({color: Colors.skin, flatShading: true}),
  //"frecklesMat": new THREE.MeshLambertMaterial({color: Colors.freckles, flatShading: true}),
  "whiteMat": new THREE.MeshLambertMaterial({ color: __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */].white, flatShading: true }),
  //"glassesMat": new THREE.MeshLambertMaterial({color: Colors.glasses, flatShading: true}),
  "teethMat": new THREE.MeshPhongMaterial({ color: __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */].teeth, flatShading: true }),
  "brownMat": new THREE.MeshLambertMaterial({ color: __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */].brown, flatShading: true }),
  "blackMat": new THREE.MeshLambertMaterial({ color: __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */].black, flatShading: true }),
  //"eyeMat": new THREE.MeshPhongMaterial({color: Colors.eye, flatShading: true}),
  //"hatMat": new THREE.MeshPhongMaterial({color: Colors.hat, flatShading: true}),
  "normalMat": new THREE.MeshNormalMaterial({})
};

/* harmony default export */ __webpack_exports__["a"] = (Materials);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);


var url = '/api/cart';

/* harmony default export */ __webpack_exports__["a"] = ({

  create: function create(_ref) {
    var text = _ref.text,
        id = _ref.id,
        name = _ref.name,
        blob = _ref.blob;

    var method = 'POST';
    // const newFileName = `${id.split(` `).join(`_`)}`;
    var body = new FormData();
    body.append('text', text);
    body.append('id', id);
    body.append('name', name);
    // body.append(`sound`, blob, newFileName);

    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(url, { method: method, body: body }).then(function (r) {
      return r.json();
    });
  },

  read: function read() {
    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(url + '?isActive=true').then(function (r) {
      return r.json();
    });
  },

  readOne: function readOne(id) {
    var method = 'GET';
    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(url + '/' + id, { method: method }).then(function (r) {
      return r.json();
    });
  }
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(12);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomByte = __webpack_require__(14);

function encode(lookup, number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomByte() );
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

module.exports = encode;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_Head__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_Audio_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_Save__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_cartAPI__ = __webpack_require__(6);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







{
  var scene = void 0,
      camera = void 0,
      fieldOfView = void 0,
      aspectRatio = void 0,
      nearPlane = void 0,
      farPlane = void 0,
      HEIGHT = void 0,
      WIDTH = void 0;
  var globalLight = void 0,
      shadowLight = void 0,
      backLight = void 0,
      light = void 0,
      renderer = void 0,
      container = void 0,
      loaded = void 0;
  var head = void 0,
      stars = void 0,
      windowHalfX = void 0,
      windowHalfY = void 0,
      color = void 0,
      audio = void 0,
      SpeechText = void 0;

  // vars for dat.gui
  var controller = void 0,
      gui = void 0;
  var saveBtn = document.getElementById('save');

  var mousePos = { x: 0, y: 0 };

  var starArray = [];

  var init = function init() {
    // create snow
    particlesJS.load('particles-js', '../assets/particles.json', function () {
      console.log('callback - particles.js config loaded');
    });

    createScene();
    createLights();

    audio = new __WEBPACK_IMPORTED_MODULE_2__classes_Audio_js__["a" /* default */](); // handle audio
    head = new __WEBPACK_IMPORTED_MODULE_0__classes_Head__["a" /* default */](); // show and handle head
    scene.add(head.mesh);
    console.log(audio.id);
    // send objects to save on click
    saveBtn.addEventListener('click', function () {
      Object(__WEBPACK_IMPORTED_MODULE_3__objects_Save__["a" /* default */])({
        text: audio.txt,
        id: audio.id
      });
    });

    gui = new dat.GUI();
    controller = new controllerText();
    guiController(['skin', 'freckles', 'eye', 'glasses', 'hat']); // add gui for array object and set colors on color change

    window.scene = scene; // set scene for extension

    loop();
  };

  var guiController = function guiController(keys) {
    keys.forEach(function (key) {
      gui.addColor(controller, key).onChange(function () {

        // set right color for material
        switch (key) {
          case 'skin':
            __WEBPACK_IMPORTED_MODULE_1__objects_colors__["a" /* default */].skin = controller.skin;
          case 'freckles':
            __WEBPACK_IMPORTED_MODULE_1__objects_colors__["a" /* default */].freckles = controller.freckles;
          case 'eye':
            __WEBPACK_IMPORTED_MODULE_1__objects_colors__["a" /* default */].eye = controller.eye;
          case 'glasses':
            __WEBPACK_IMPORTED_MODULE_1__objects_colors__["a" /* default */].glasses = controller.glasses;
          case 'hat':
            __WEBPACK_IMPORTED_MODULE_1__objects_colors__["a" /* default */].hat = controller.hat;
        }

        //remove current head and make a new one to set current color
        scene.remove(head.mesh);
        createHead();
      });
    });
  };

  var dec2hex = function dec2hex(i) {
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
  };

  var createScene = function createScene() {
    ;
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
    camera.position.y = 0;

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
    renderer.setSize(WIDTH, HEIGHT);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container = document.getElementById('container');
    container.appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', handleMouseMove, false);
  };

  var onWindowResize = function onWindowResize() {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    windowHalfX = WIDTH / 2;
    windowHalfY = HEIGHT / 2;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
  };

  var handleMouseMove = function handleMouseMove(e) {
    mousePos = {
      x: event.clientX,
      y: event.clientY
    };
  };

  var loaderManager = new THREE.LoadingManager();

  var onStart = function onStart(url, itemsLoaded, itemsTotal) {
    console.log('Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');
  };

  var onLoad = function onLoad() {
    console.log('Loading complete!');
    finishedLoading();
  };

  var onProgress = function onProgress(url, itemsLoaded, itemsTotal) {
    console.log('Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');
  };

  var onError = function onError(url) {
    console.log('There was an error loading ' + url);
  };

  var finishedLoading = function finishedLoading() {
    loaded = true;
  };

  var handleWindowResize = function handleWindowResize(e) {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
  };

  var isMobile = /iPhone|Android/i.test(navigator.userAgent);

  var createLights = function createLights() {

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

    if (isMobile) shadowLight.shadow.mapSize.width = shadowLight.shadow.mapSize.height = 1024;
    if (!isMobile) shadowLight.shadow.mapSize.width = shadowLight.shadow.mapSize.height = 2048;

    scene.add(globalLight);
    scene.add(shadowLight);
    scene.add(backLight);
    scene.add(new THREE.AmbientLight(0xeadead, 0.1));
  };

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

  var createHead = function createHead() {
    head.name = "Head";
    head = new __WEBPACK_IMPORTED_MODULE_0__classes_Head__["a" /* default */]();
    head.idle();
    scene.add(head.mesh);
    //stars = new StarsGroup();
    //scene.add(stars.mesh);
  };

  var createCharacter = function createCharacter() {
    createHead();
    head.mesh.position.set(0, 2, 0);
    //stars.mesh.position.set(0, 10, 0);
  };

  //BLINK
  ////////////////////
  var isBlinking = false;
  var blinkLoop = function blinkLoop() {
    isBlinking = false;

    if (!isBlinking && Math.random() > 0.99) {
      isBlinking = true;
      blink();
    }
  };

  var blink = function blink() {
    head.eyes.scale.y = 1;
    TweenMax.to(head.eyes.scale, .07, {
      y: 0,
      yoyo: true,
      repeat: 1,
      onComplete: function onComplete() {
        isBlinking = false;
      }
    });
  };

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

  var controllerText = function controllerText() {
    _classCallCheck(this, controllerText);

    this.skin = __WEBPACK_IMPORTED_MODULE_1__objects_colors__["a" /* default */].skin;
    this.freckles = __WEBPACK_IMPORTED_MODULE_1__objects_colors__["a" /* default */].freckles;
    this.eye = __WEBPACK_IMPORTED_MODULE_1__objects_colors__["a" /* default */].eye;
    this.glasses = __WEBPACK_IMPORTED_MODULE_1__objects_colors__["a" /* default */].glasses;
    this.hat = __WEBPACK_IMPORTED_MODULE_1__objects_colors__["a" /* default */].hat;
  };

  var loop = function loop() {
    blinkLoop();
    //head.dizzy();
    var xTarget = mousePos.x - windowHalfX;
    var yTarget = mousePos.y - windowHalfY;

    //console.log(xTarget);

    head.idle(xTarget, yTarget);
    renderer.render(scene, camera);
    requestAnimationFrame(loop);
  };

  //window.addEventListener('load', init, false);

  init();
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_soundAPI__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shortid__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shortid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_shortid__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
var AudioContext = window.AudioContext || window.webkitAudioContext;

var audioCtx = void 0,
    recognition = void 0;
var transcript = "";
var audioChunks = [];

var $text = document.getElementById('field');
var $record = document.getElementById('record');
var $audio = document.getElementById('audio_controls');
var $stop = document.getElementById('stop');

var audioSources = [],
    pitchShifterProcessor = void 0;

var audioSourceIndex = 0,
    audioVisualisationIndex = 0,
    validGranSizes = [256, 512, 1024, 2048, 4096, 8192],
    grainSize = validGranSizes[2],
    pitchRatio = 1.0,
    overlapRatio = 0.50;

var id = __WEBPACK_IMPORTED_MODULE_1_shortid___default.a.generate();

var Audio = function () {
  function Audio() {
    var _this = this;

    _classCallCheck(this, Audio);

    this.id = id;
    // handle SpeechRecognition
    recognition = new SpeechRecognition();
    this.speechSettings();

    recognition.onresult = function (event) {
      return _this.gotResult(event);
    };
    recognition.onspeechend = function (e) {
      return _this.onSpeechEnd(e);
    };
    $text.addEventListener('blur', function () {
      return _this.txt = $text.value;
    });

    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
      _this.mediaRecorder = new MediaRecorder(stream);

      /*--------------------Start Recording-----------------------*/
      $record.addEventListener('click', function () {
        _this.mediaRecorder.start();
        recognition.start();
        $record.disabled = true;
      });
      /*----------------------------------------------------------*/

      _this.mediaRecorder.addEventListener('dataavailable', function (e) {
        return audioChunks.push(e.data);
      }); // add audiochunk to array

      // when mediaRecorder stops, make and handle audio blob
      _this.mediaRecorder.addEventListener('stop', function () {

        // give link to audio controls to play and control the sound
        _this.blob = new Blob(audioChunks, { type: 'audio/ogg' }); // create blob from audiochunks
        // const blobUrl = URL.createObjectURL(this.blob); // make url from blob stream
        // $audio.src = blobUrl;

        __WEBPACK_IMPORTED_MODULE_0__lib_soundAPI__["a" /* default */].create({
          id: _this.id,
          blob: _this.blob
        });

        audioCtx = new AudioContext();

        // const source = audioCtx.createMediaElementSource($audio); // get audio from

        setTimeout(function () {
          var bufferLoader = new BufferLoader(audioCtx, ['./uploads/' + _this.id + '.ogg'], function (bufferList) {

            var loop = false;
            var source = void 0;

            document.getElementById('repeat').addEventListener('click', function () {
              loop = !loop;
              source.stop();
            });

            var $pitch = document.getElementById('pitch');
            $pitch.addEventListener('change', function () {
              pitchRatio = parseFloat($pitch.value);
              console.log(pitchRatio);
            });

            $audio.addEventListener('click', function () {
              source = '';
              source = audioCtx.createBufferSource();
              source.buffer = bufferList[0];

              // source.connect(audioCtx.destination)

              source.connect(pitchShifterProcessor);
              source.loop = loop;
              source.start();
            });
          });

          bufferLoader.load();
          _this.initProcessor();
          // this.initSliders();
        }, 1000);

        var overlap = document.getElementById('overlap');
        overlap.addEventListener('change', function () {
          overlapRatio = overlap.value;
          console.log(overlap.value);
        });

        audioChunks = [];
      });
    });
  }

  _createClass(Audio, [{
    key: 'onSpeechEnd',
    value: function onSpeechEnd(e) {
      this.mediaRecorder.stop();
      recognition.stop();
      $record.disabled = false;
      $record.textContent = 'Opnieuw proberen?';
      this.txt = $text.value;
    }
  }, {
    key: 'gotResult',
    value: function gotResult(event) {
      var last = event.results.length - 1;
      transcript = event.results[last][0].transcript;
      $text.value = transcript;
    }
  }, {
    key: 'speechSettings',
    value: function speechSettings() {
      recognition.continuous = false;
      recognition.lang = 'nl-BE';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
    }
  }, {
    key: 'initProcessor',
    value: function initProcessor() {

      var linearInterpolation = function linearInterpolation(a, b, t) {
        return a + (b - a) * t;
      };

      if (pitchShifterProcessor) {
        pitchShifterProcessor.disconnect();
      }

      if (audioCtx.createScriptProcessor) {
        pitchShifterProcessor = audioCtx.createScriptProcessor(grainSize, 1, 1);
      } else if (audioCtx.createJavaScriptNode) {
        pitchShifterProcessor = audioCtx.createJavaScriptNode(grainSize, 1, 1);
      }

      pitchShifterProcessor.buffer = new Float32Array(grainSize * 2);
      pitchShifterProcessor.grainWindow = this.hannWindow(grainSize);

      pitchShifterProcessor.onaudioprocess = function (event) {

        var inputData = event.inputBuffer.getChannelData(0);
        var outputData = event.outputBuffer.getChannelData(0);

        for (i = 0; i < inputData.length; i++) {

          // Apply the window to the input buffer
          inputData[i] *= this.grainWindow[i];

          // Shift half of the buffer
          this.buffer[i] = this.buffer[i + grainSize];

          // Empty the buffer tail
          this.buffer[i + grainSize] = 0.0;
        }

        // Calculate the pitch shifted grain re-sampling and looping the input
        var grainData = new Float32Array(grainSize * 2);
        for (var i = 0, j = 0.0; i < grainSize; i++, j += pitchRatio) {

          var index = Math.floor(j) % grainSize;
          var a = inputData[index];
          var b = inputData[(index + 1) % grainSize];
          grainData[i] += linearInterpolation(a, b, j % 1.0) * this.grainWindow[i];
        }

        // Copy the grain multiple times overlapping it
        for (i = 0; i < grainSize; i += Math.round(grainSize * (1 - overlapRatio))) {
          for (j = 0; j <= grainSize; j++) {
            this.buffer[i + j] += grainData[j];
          }
        }

        // Output the first half of the buffer
        for (i = 0; i < grainSize; i++) {
          outputData[i] = this.buffer[i];
        }
      };

      pitchShifterProcessor.connect(audioCtx.destination);
    }
  }, {
    key: 'hannWindow',
    value: function hannWindow(length) {
      var window = new Float32Array(length);
      for (var _i = 0; _i < length; _i++) {
        window[_i] = 0.5 * (1 - Math.cos(2 * Math.PI * _i / (length - 1)));
      }
      return window;
    }
  }]);

  return Audio;
}();

/* harmony default export */ __webpack_exports__["a"] = (Audio);
;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);


var url = '/api/sound';

/* harmony default export */ __webpack_exports__["a"] = ({

  create: function create(_ref) {
    var id = _ref.id,
        blob = _ref.blob;

    var method = 'POST';
    var newFileName = '' + id.split(' ').join('_');
    var body = new FormData();
    body.append('id', id);
    body.append('sound', blob, newFileName);

    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(url, { method: method, body: body }).then(function (r) {
      return r.json();
    });
  },

  read: function read() {
    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(url + '?isActive=true').then(function (r) {
      return r.json();
    });
  },

  readOne: function readOne(id) {
    var method = 'GET';
    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(url + '/' + id, { method: method }).then(function (r) {
      return r.json();
    });
  }
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(2);
var encode = __webpack_require__(8);
var decode = __webpack_require__(15);
var build = __webpack_require__(16);
var isValid = __webpack_require__(17);

// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
var clusterWorkerId = __webpack_require__(18) || 0;

/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */
function seed(seedValue) {
    alphabet.seed(seedValue);
    return module.exports;
}

/**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */
function worker(workerId) {
    clusterWorkerId = workerId;
    return module.exports;
}

/**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */
function characters(newCharacters) {
    if (newCharacters !== undefined) {
        alphabet.characters(newCharacters);
    }

    return alphabet.shuffled();
}

/**
 * Generate unique id
 * Returns string id
 */
function generate() {
  return build(clusterWorkerId);
}

// Export all other functions as properties of the generate function
module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.decode = decode;
module.exports.isValid = isValid;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;

/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */
function getNextValue() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed/(233280.0);
}

function setSeed(_seed_) {
    seed = _seed_;
}

module.exports = {
    nextValue: getNextValue,
    seed: setSeed
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

function randomByte() {
    if (!crypto || !crypto.getRandomValues) {
        return Math.floor(Math.random() * 256) & 0x30;
    }
    var dest = new Uint8Array(1);
    crypto.getRandomValues(dest);
    return dest[0] & 0x30;
}

module.exports = randomByte;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(2);

/**
 * Decode the id to get the version and worker
 * Mainly for debugging and testing.
 * @param id - the shortid-generated id.
 */
function decode(id) {
    var characters = alphabet.shuffled();
    return {
        version: characters.indexOf(id.substr(0, 1)) & 0x0f,
        worker: characters.indexOf(id.substr(1, 1)) & 0x0f
    };
}

module.exports = decode;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var encode = __webpack_require__(8);
var alphabet = __webpack_require__(2);

// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
var REDUCE_TIME = 1459707606518;

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
var version = 6;

// Counter is used when shortid is called multiple times in one second.
var counter;

// Remember the last time shortid was called in case counter is needed.
var previousSeconds;

/**
 * Generate unique id
 * Returns string id
 */
function build(clusterWorkerId) {

    var str = '';

    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

    if (seconds === previousSeconds) {
        counter++;
    } else {
        counter = 0;
        previousSeconds = seconds;
    }

    str = str + encode(alphabet.lookup, version);
    str = str + encode(alphabet.lookup, clusterWorkerId);
    if (counter > 0) {
        str = str + encode(alphabet.lookup, counter);
    }
    str = str + encode(alphabet.lookup, seconds);

    return str;
}

module.exports = build;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(2);

function isShortId(id) {
    if (!id || typeof id !== 'string' || id.length < 6 ) {
        return false;
    }

    var characters = alphabet.characters();
    var len = id.length;
    for(var i = 0; i < len;i++) {
        if (characters.indexOf(id[i]) === -1) {
            return false;
        }
    }
    return true;
}

module.exports = isShortId;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 0;


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_CartAPI__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shortid__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shortid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_shortid__);


var name = document.getElementById('name_input');
var link = document.querySelector('.unique_link');

var handleSave = function handleSave(_ref) {
  var text = _ref.text,
      id = _ref.id;


  __WEBPACK_IMPORTED_MODULE_0__lib_CartAPI__["a" /* default */].create({
    text: text,
    id: id,
    name: name.value
  });

  link.innerHTML = 'https://localhost:8080/santa.html?id=' + id;
  link.setAttribute('href', 'https://localhost:8080/santa.html?id=' + id);
  link.setAttribute('target', '_blank');
};

/* harmony default export */ __webpack_exports__["a"] = (handleSave);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);


var url = '/api/cart';

/* harmony default export */ __webpack_exports__["a"] = ({

  create: function create(_ref) {
    var text = _ref.text,
        id = _ref.id,
        name = _ref.name,
        blob = _ref.blob;

    var method = 'POST';
    // const newFileName = `${id.split(` `).join(`_`)}`;
    var body = new FormData();
    body.append('text', text);
    body.append('id', id);
    body.append('name', name);
    // body.append(`sound`, blob, newFileName);

    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(url, { method: method, body: body }).then(function (r) {
      return r.json();
    });
  },

  read: function read() {
    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(url + '?isActive=true').then(function (r) {
      return r.json();
    });
  },

  readOne: function readOne(id) {
    var method = 'GET';
    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(url + '/' + id, { method: method }).then(function (r) {
      return r.json();
    });
  }
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTU3Njc5ZTFjMzdhYzU2OGE0ZjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL29iamVjdHMvY29sb3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLWZldGNoL2ZldGNoLW5wbS1icm93c2VyaWZ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9hbHBoYWJldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9IZWFkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9vYmplY3RzL01hdGVyaWFscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2hhdHdnLWZldGNoL2ZldGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9saWIvY2FydEFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvQXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xpYi9zb3VuZEFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWJ5dGUtYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvZGVjb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvaXMtdmFsaWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL3V0aWwvY2x1c3Rlci13b3JrZXItaWQtYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvb2JqZWN0cy9TYXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9saWIvQ2FydEFQSS5qcyJdLCJuYW1lcyI6WyJDb2xvcnMiLCJza2luIiwiZnJlY2tsZXMiLCJ3aGl0ZSIsImdsYXNzZXMiLCJ0ZWV0aCIsImJsYWNrIiwiZXllIiwiaGF0IiwiaXNCbGlua2luZyIsIkhlYWQiLCJtZXNoIiwiVEhSRUUiLCJPYmplY3QzRCIsImhlYWRHZW9tIiwiQm94QnVmZmVyR2VvbWV0cnkiLCJza2luTWF0IiwiTWVzaExhbWJlcnRNYXRlcmlhbCIsImNvbG9yIiwiZmxhdFNoYWRpbmciLCJleWVNYXQiLCJNZXNoUGhvbmdNYXRlcmlhbCIsImhlYWQiLCJNZXNoIiwiY2FzdFNoYWRvdyIsInJlY2VpdmVTaGFkb3ciLCJhZGQiLCJiZWFyZCIsInBvc2l0aW9uIiwieSIsInoiLCJCZWFyZCIsIkdsYXNzZXMiLCJIYWlyIiwiRXllcyIsIkV5ZUJyb3dzIiwiSGF0IiwiRnJlY2tsZXMiLCJGZWF0dXJlcyIsImlkbGUiLCJub3JtYWxpemUiLCJ2Iiwidm1pbiIsInZtYXgiLCJ0bWluIiwidG1heCIsIm52IiwiTWF0aCIsIm1heCIsIm1pbiIsImR2IiwicGMiLCJkdCIsInR2Iiwic3BlZWQiLCJleWVCbHVlUmlnaHRQb3NYIiwiZXllQmx1ZUxlZnRQb3NYIiwiZXllQmx1ZVJpZ2h0UG9zWSIsImV5ZUJsdWVMZWZ0UG9zWSIsImV5ZUJsdWVSaWdodCIsIngiLCJleWVCbHVlTGVmdCIsInhUYXJnZXQiLCJ5VGFyZ2V0IiwiZGlzdGFuY2UiLCJyb3RhdGlvbiIsInNpbiIsIkRhdGUiLCJub3ciLCJQSSIsImV5ZUJyb3dSaWdodCIsImV5ZUJyb3dMZWZ0IiwiY29zIiwibW91c3RhY2hlIiwidXBkYXRlQm9keSIsImJlYXJkR2VvbU1lcmdlZCIsIkdlb21ldHJ5IiwiYmVhcmQxR2VvbSIsIkJveEdlb21ldHJ5IiwiYmVhcmQxIiwiTWF0Iiwid2hpdGVNYXQiLCJhcHBseU1hdHJpeCIsIk1hdHJpeDQiLCJtYWtlVHJhbnNsYXRpb24iLCJ1cGRhdGVNYXRyaXgiLCJtZXJnZSIsImdlb21ldHJ5IiwibWF0cml4IiwiYmVhcmQyIiwic2NhbGUiLCJiZWFyZDMiLCJjbG9uZSIsImJlYXJkNCIsImJlYXJkMkdlb20iLCJ2ZXJ0aWNlcyIsImJlYXJkNSIsImJlYXJkM0dlb20iLCJiZWFyZDYiLCJiZWFyZDciLCJiZWFyZDgiLCJiZWFyZDRHZW9tIiwiYmVhcmQ5IiwiYmVhcmQ1R2VvbSIsImJlYXJkMTAiLCJiZWFyZDExIiwiYmVhcmRNZXJnZWQiLCJtb3V0aEdlb20iLCJtb3V0aCIsImJsYWNrTWF0Iiwic2V0IiwidGVldGhHZW9tIiwidGVldGhNYXQiLCJtb3VzdGFjaGVHZW9tIiwiZ2xhc3Nlc01hdCIsImZyYW1lR2VvbU1lcmdlZCIsImZyYW1lT3V0ZXJHZW9tIiwiQ3lsaW5kZXJHZW9tZXRyeSIsImZyYW1lSW5uZXJHZW9tIiwibWFrZVJvdGF0aW9uWCIsImZyYW1lQlNQIiwiVGhyZWVCU1AiLCJmcmFtZUN1dEJTUCIsImZyYW1laW50ZXJzZWN0aW9uQlNQIiwic3VidHJhY3QiLCJmcmFtZUxlZnQiLCJ0b01lc2giLCJmcmFtZVJpZ2h0IiwibWFrZVJvdGF0aW9uWiIsImZyYW1lTWlkR2VvbSIsImZyYW1lTWlkIiwiZnJhbWVFbmRHZW9tIiwiZnJhbWVFbmRSaWdodCIsImZyYW1lRW5kTGVmdCIsImZyYW1lU3Bva2VHZW9tIiwiZnJhbWVTcG9rZVJpZ2h0IiwiZnJhbWVTcG9rZUxlZnQiLCJmcmFtZU1lcmdlZCIsImhhaXIiLCJoYWlyR2VvbU1lcmdlZCIsImhhaXJGbGF0R2VvbSIsImhhaXIxIiwiaGFpcjIiLCJoYWlyMyIsImhhaXI0IiwiaGFpcjYiLCJoYWlyRmxhdEJhY2tHZW9tIiwiaGFpcjUiLCJoYWlyTWVyZ2VkIiwiZXllcyIsImV5ZVdoaXRlR2VvbSIsIlBsYW5lR2VvbWV0cnkiLCJleWVXaGl0ZVJpZ2h0IiwiZXllQmx1ZUdlb20iLCJleWVQdXBpbEdlb20iLCJleWVQdXBpbFJpZ2h0IiwiZXllV2hpdGVMZWZ0IiwiZXllUHVwaWxMZWZ0IiwiZXllQnJvd3MiLCJleWVCcm93R2VvbSIsImhhdE1hdCIsImJhbmRHZW9tIiwiVG9ydXNHZW9tZXRyeSIsImJpZ0NvbmVHZW9tIiwic21hbGxDb25lR2VvbSIsImhhdERpbmdsZUdlb20iLCJTcGhlcmVHZW9tZXRyeSIsImJhbmQiLCJiaWdDb25lIiwic21hbGxDb25lIiwibWFrZVJvdGF0aW9uWSIsImhhdERpbmdsZSIsImZyZWNrbGVzR2VvbU1lcmdlZCIsImZyZWNrbGVzR2VvbSIsImZyZWNrbGVzTWF0IiwiZnJlY2tsZTEiLCJmcmVja2xlMiIsImZyZWNrbGUzIiwiZnJlY2tsZTQiLCJmcmVja2xlNSIsImZyZWNrbGU2IiwiZnJlY2tsZWRNZXJnZWQiLCJlYXJHZW9tIiwiZWFyUmlnaHQiLCJlYXJMZWZ0Iiwibm9zZUdlb20iLCJub3NlIiwiTWF0ZXJpYWxzIiwiYnJvd24iLCJNZXNoTm9ybWFsTWF0ZXJpYWwiLCJ1cmwiLCJjcmVhdGUiLCJ0ZXh0IiwiaWQiLCJuYW1lIiwiYmxvYiIsIm1ldGhvZCIsImJvZHkiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZldGNoIiwidGhlbiIsInIiLCJqc29uIiwicmVhZCIsInJlYWRPbmUiLCJzY2VuZSIsImNhbWVyYSIsImZpZWxkT2ZWaWV3IiwiYXNwZWN0UmF0aW8iLCJuZWFyUGxhbmUiLCJmYXJQbGFuZSIsIkhFSUdIVCIsIldJRFRIIiwiZ2xvYmFsTGlnaHQiLCJzaGFkb3dMaWdodCIsImJhY2tMaWdodCIsImxpZ2h0IiwicmVuZGVyZXIiLCJjb250YWluZXIiLCJsb2FkZWQiLCJzdGFycyIsIndpbmRvd0hhbGZYIiwid2luZG93SGFsZlkiLCJhdWRpbyIsIlNwZWVjaFRleHQiLCJjb250cm9sbGVyIiwiZ3VpIiwic2F2ZUJ0biIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtb3VzZVBvcyIsInN0YXJBcnJheSIsImluaXQiLCJwYXJ0aWNsZXNKUyIsImxvYWQiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlU2NlbmUiLCJjcmVhdGVMaWdodHMiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlU2F2ZSIsInR4dCIsImRhdCIsIkdVSSIsImNvbnRyb2xsZXJUZXh0IiwiZ3VpQ29udHJvbGxlciIsIndpbmRvdyIsImxvb3AiLCJrZXlzIiwiZm9yRWFjaCIsImFkZENvbG9yIiwia2V5Iiwib25DaGFuZ2UiLCJyZW1vdmUiLCJjcmVhdGVIZWFkIiwiZGVjMmhleCIsImkiLCJyZXN1bHQiLCJ0b1N0cmluZyIsImxlbmd0aCIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsIlNjZW5lIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJXZWJHTFJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJzZXRQaXhlbFJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNldFNpemUiLCJzaGFkb3dNYXAiLCJlbmFibGVkIiwidHlwZSIsIlBDRlNvZnRTaGFkb3dNYXAiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJvbldpbmRvd1Jlc2l6ZSIsImhhbmRsZU1vdXNlTW92ZSIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJldmVudCIsImNsaWVudFgiLCJjbGllbnRZIiwibG9hZGVyTWFuYWdlciIsIkxvYWRpbmdNYW5hZ2VyIiwib25TdGFydCIsIml0ZW1zTG9hZGVkIiwiaXRlbXNUb3RhbCIsIm9uTG9hZCIsImZpbmlzaGVkTG9hZGluZyIsIm9uUHJvZ3Jlc3MiLCJvbkVycm9yIiwiaGFuZGxlV2luZG93UmVzaXplIiwiaXNNb2JpbGUiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiSGVtaXNwaGVyZUxpZ2h0IiwiRGlyZWN0aW9uYWxMaWdodCIsInNoYWRvdyIsIm1hcFNpemUiLCJ3aWR0aCIsImhlaWdodCIsIkFtYmllbnRMaWdodCIsImNyZWF0ZUNoYXJhY3RlciIsImJsaW5rTG9vcCIsInJhbmRvbSIsImJsaW5rIiwiVHdlZW5NYXgiLCJ0byIsInlveW8iLCJyZXBlYXQiLCJvbkNvbXBsZXRlIiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiU3BlZWNoUmVjb2duaXRpb24iLCJ3ZWJraXRTcGVlY2hSZWNvZ25pdGlvbiIsIlNwZWVjaEdyYW1tYXJMaXN0Iiwid2Via2l0U3BlZWNoR3JhbW1hckxpc3QiLCJTcGVlY2hSZWNvZ25pdGlvbkV2ZW50Iiwid2Via2l0U3BlZWNoUmVjb2duaXRpb25FdmVudCIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImF1ZGlvQ3R4IiwicmVjb2duaXRpb24iLCJ0cmFuc2NyaXB0IiwiYXVkaW9DaHVua3MiLCIkdGV4dCIsIiRyZWNvcmQiLCIkYXVkaW8iLCIkc3RvcCIsImF1ZGlvU291cmNlcyIsInBpdGNoU2hpZnRlclByb2Nlc3NvciIsImF1ZGlvU291cmNlSW5kZXgiLCJhdWRpb1Zpc3VhbGlzYXRpb25JbmRleCIsInZhbGlkR3JhblNpemVzIiwiZ3JhaW5TaXplIiwicGl0Y2hSYXRpbyIsIm92ZXJsYXBSYXRpbyIsInNob3J0SWQiLCJnZW5lcmF0ZSIsIkF1ZGlvIiwic3BlZWNoU2V0dGluZ3MiLCJvbnJlc3VsdCIsImdvdFJlc3VsdCIsIm9uc3BlZWNoZW5kIiwib25TcGVlY2hFbmQiLCJlIiwidmFsdWUiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJtZWRpYVJlY29yZGVyIiwiTWVkaWFSZWNvcmRlciIsInN0cmVhbSIsInN0YXJ0IiwiZGlzYWJsZWQiLCJwdXNoIiwiZGF0YSIsIkJsb2IiLCJTb3VuZEFQSSIsInNldFRpbWVvdXQiLCJidWZmZXJMb2FkZXIiLCJCdWZmZXJMb2FkZXIiLCJzb3VyY2UiLCJzdG9wIiwiJHBpdGNoIiwicGFyc2VGbG9hdCIsImNyZWF0ZUJ1ZmZlclNvdXJjZSIsImJ1ZmZlciIsImJ1ZmZlckxpc3QiLCJjb25uZWN0IiwiaW5pdFByb2Nlc3NvciIsIm92ZXJsYXAiLCJ0ZXh0Q29udGVudCIsImxhc3QiLCJyZXN1bHRzIiwiY29udGludW91cyIsImxhbmciLCJpbnRlcmltUmVzdWx0cyIsIm1heEFsdGVybmF0aXZlcyIsImxpbmVhckludGVycG9sYXRpb24iLCJhIiwiYiIsInQiLCJkaXNjb25uZWN0IiwiY3JlYXRlU2NyaXB0UHJvY2Vzc29yIiwiY3JlYXRlSmF2YVNjcmlwdE5vZGUiLCJGbG9hdDMyQXJyYXkiLCJncmFpbldpbmRvdyIsImhhbm5XaW5kb3ciLCJvbmF1ZGlvcHJvY2VzcyIsImlucHV0RGF0YSIsImlucHV0QnVmZmVyIiwiZ2V0Q2hhbm5lbERhdGEiLCJvdXRwdXREYXRhIiwib3V0cHV0QnVmZmVyIiwiZ3JhaW5EYXRhIiwiaiIsImluZGV4IiwiZmxvb3IiLCJyb3VuZCIsImRlc3RpbmF0aW9uIiwibmV3RmlsZU5hbWUiLCJzcGxpdCIsImpvaW4iLCJsaW5rIiwicXVlcnlTZWxlY3RvciIsIkNhcnRBUEkiLCJpbm5lckhUTUwiLCJzZXRBdHRyaWJ1dGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REEsSUFBTUEsU0FBUztBQUNiQyxRQUFNLFFBRE87QUFFYkMsWUFBVSxR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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsdUJBQXVCO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsdUNBQXVDLDBCQUEwQjtBQUNqRTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLDBCQUEwQixlQUFlO0FBQ3hFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaEVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hCQTs7QUFFQSw4RUFBOEU7O0FBRTlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDYkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDaEJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7OztBQy9DQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDbEJBOztBQUVBOzs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQSxJQUFNVCxPQUFPbUMsU0FBU0MsY0FBVCxjQUFiO0FBQ0EsSUFBTWdMLE9BQU9qTCxTQUFTa0wsYUFBVCxnQkFBYjs7QUFFQSxJQUFNdEssYUFBYSxTQUFiQSxVQUFhLE9BQWdCO0FBQUEsTUFBZGpELElBQWMsUUFBZEEsSUFBYztBQUFBLE1BQVJDLEVBQVEsUUFBUkEsRUFBUTs7O0FBRWpDdU4sRUFBQSw2REFBQUEsQ0FBUXpOLE1BQVIsQ0FBZTtBQUNiQyxjQURhO0FBRWJDLFVBRmE7QUFHYkMsVUFBTUEsS0FBSzJKO0FBSEUsR0FBZjs7QUFNQXlELE9BQUtHLFNBQUwsNkNBQXlEeE4sRUFBekQ7QUFDQXFOLE9BQUtJLFlBQUwsQ0FBa0IsTUFBbEIsNENBQWtFek4sRUFBbEU7QUFDQXFOLE9BQUtJLFlBQUwsQ0FBa0IsUUFBbEI7QUFDRCxDQVhEOztBQWFBLHlEQUFlekssVUFBZixFOzs7Ozs7Ozs7QUNsQkE7O0FBRUEsSUFBTW5ELGlCQUFOOztBQUVBLHlEQUFlOztBQUViQyxVQUFRLHNCQUE0QjtBQUFBLFFBQTFCQyxJQUEwQixRQUExQkEsSUFBMEI7QUFBQSxRQUFwQkMsRUFBb0IsUUFBcEJBLEVBQW9CO0FBQUEsUUFBaEJDLElBQWdCLFFBQWhCQSxJQUFnQjtBQUFBLFFBQVZDLElBQVUsUUFBVkEsSUFBVTs7QUFDbEMsUUFBTUMsZUFBTjtBQUNBO0FBQ0EsUUFBTUMsT0FBTyxJQUFJQyxRQUFKLEVBQWI7QUFDQUQsU0FBS0UsTUFBTCxTQUFvQlAsSUFBcEI7QUFDQUssU0FBS0UsTUFBTCxPQUFrQk4sRUFBbEI7QUFDQUksU0FBS0UsTUFBTCxTQUFvQkwsSUFBcEI7QUFDQTs7QUFFQSxXQUFPLHdEQUFBTSxDQUFNVixHQUFOLEVBQVcsRUFBQ00sY0FBRCxFQUFTQyxVQUFULEVBQVgsRUFDSkksSUFESSxDQUNDO0FBQUEsYUFBS0MsRUFBRUMsSUFBRixFQUFMO0FBQUEsS0FERCxDQUFQO0FBRUQsR0FiWTs7QUFlYkMsUUFBTSxnQkFBTTtBQUNWLFdBQU8sd0RBQUFKLENBQVNWLEdBQVQscUJBQ0pXLElBREksQ0FDQztBQUFBLGFBQUtDLEVBQUVDLElBQUYsRUFBTDtBQUFBLEtBREQsQ0FBUDtBQUVELEdBbEJZOztBQW9CYkUsV0FBUyxxQkFBTTtBQUNiLFFBQU1ULGNBQU47QUFDQSxXQUFPLHdEQUFBSSxDQUFTVixHQUFULFNBQWdCRyxFQUFoQixFQUFzQixFQUFDRyxjQUFELEVBQXRCLEVBQWdDSyxJQUFoQyxDQUFxQztBQUFBLGFBQUtDLEVBQUVDLElBQUYsRUFBTDtBQUFBLEtBQXJDLENBQVA7QUFDRDtBQXZCWSxDQUFmLEUiLCJmaWxlIjoianMvc2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTU3Njc5ZTFjMzdhYzU2OGE0ZjYiLCJjb25zdCBDb2xvcnMgPSB7XG4gIHNraW46IDB4ZmZlMGJkLFxuICBmcmVja2xlczogMHhjZmJhOTYsXG4gIHdoaXRlOiAweGU5ZWJlZSxcbiAgZ2xhc3NlczogMHhmOWM0MjEsXG4gIHRlZXRoOiAweGZmZmZmZixcbiAgYmxhY2s6IDB4MmUyZTJlLFxuICBleWU6IDB4NjI5NWE4LFxuICBoYXQ6IDB4NzIwMzE0XG59O1xuZXhwb3J0IGRlZmF1bHQgQ29sb3JzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL29iamVjdHMvY29sb3JzLmpzIiwiLy8gdGhlIHdoYXR3Zy1mZXRjaCBwb2x5ZmlsbCBpbnN0YWxscyB0aGUgZmV0Y2goKSBmdW5jdGlvblxuLy8gb24gdGhlIGdsb2JhbCBvYmplY3QgKHdpbmRvdyBvciBzZWxmKVxuLy9cbi8vIFJldHVybiB0aGF0IGFzIHRoZSBleHBvcnQgZm9yIHVzZSBpbiBXZWJwYWNrLCBCcm93c2VyaWZ5IGV0Yy5cbnJlcXVpcmUoJ3doYXR3Zy1mZXRjaCcpO1xubW9kdWxlLmV4cG9ydHMgPSBzZWxmLmZldGNoLmJpbmQoc2VsZik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLWZldGNoL2ZldGNoLW5wbS1icm93c2VyaWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmFuZG9tRnJvbVNlZWQgPSByZXF1aXJlKCcuL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkJyk7XG5cbnZhciBPUklHSU5BTCA9ICcwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWl8tJztcbnZhciBhbHBoYWJldDtcbnZhciBwcmV2aW91c1NlZWQ7XG5cbnZhciBzaHVmZmxlZDtcblxuZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgc2h1ZmZsZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2V0Q2hhcmFjdGVycyhfYWxwaGFiZXRfKSB7XG4gICAgaWYgKCFfYWxwaGFiZXRfKSB7XG4gICAgICAgIGlmIChhbHBoYWJldCAhPT0gT1JJR0lOQUwpIHtcbiAgICAgICAgICAgIGFscGhhYmV0ID0gT1JJR0lOQUw7XG4gICAgICAgICAgICByZXNldCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoX2FscGhhYmV0XyA9PT0gYWxwaGFiZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChfYWxwaGFiZXRfLmxlbmd0aCAhPT0gT1JJR0lOQUwubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ3VzdG9tIGFscGhhYmV0IGZvciBzaG9ydGlkIG11c3QgYmUgJyArIE9SSUdJTkFMLmxlbmd0aCArICcgdW5pcXVlIGNoYXJhY3RlcnMuIFlvdSBzdWJtaXR0ZWQgJyArIF9hbHBoYWJldF8ubGVuZ3RoICsgJyBjaGFyYWN0ZXJzOiAnICsgX2FscGhhYmV0Xyk7XG4gICAgfVxuXG4gICAgdmFyIHVuaXF1ZSA9IF9hbHBoYWJldF8uc3BsaXQoJycpLmZpbHRlcihmdW5jdGlvbihpdGVtLCBpbmQsIGFycil7XG4gICAgICAgcmV0dXJuIGluZCAhPT0gYXJyLmxhc3RJbmRleE9mKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgaWYgKHVuaXF1ZS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXN0b20gYWxwaGFiZXQgZm9yIHNob3J0aWQgbXVzdCBiZSAnICsgT1JJR0lOQUwubGVuZ3RoICsgJyB1bmlxdWUgY2hhcmFjdGVycy4gVGhlc2UgY2hhcmFjdGVycyB3ZXJlIG5vdCB1bmlxdWU6ICcgKyB1bmlxdWUuam9pbignLCAnKSk7XG4gICAgfVxuXG4gICAgYWxwaGFiZXQgPSBfYWxwaGFiZXRfO1xuICAgIHJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIGNoYXJhY3RlcnMoX2FscGhhYmV0Xykge1xuICAgIHNldENoYXJhY3RlcnMoX2FscGhhYmV0Xyk7XG4gICAgcmV0dXJuIGFscGhhYmV0O1xufVxuXG5mdW5jdGlvbiBzZXRTZWVkKHNlZWQpIHtcbiAgICByYW5kb21Gcm9tU2VlZC5zZWVkKHNlZWQpO1xuICAgIGlmIChwcmV2aW91c1NlZWQgIT09IHNlZWQpIHtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcHJldmlvdXNTZWVkID0gc2VlZDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNodWZmbGUoKSB7XG4gICAgaWYgKCFhbHBoYWJldCkge1xuICAgICAgICBzZXRDaGFyYWN0ZXJzKE9SSUdJTkFMKTtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlQXJyYXkgPSBhbHBoYWJldC5zcGxpdCgnJyk7XG4gICAgdmFyIHRhcmdldEFycmF5ID0gW107XG4gICAgdmFyIHIgPSByYW5kb21Gcm9tU2VlZC5uZXh0VmFsdWUoKTtcbiAgICB2YXIgY2hhcmFjdGVySW5kZXg7XG5cbiAgICB3aGlsZSAoc291cmNlQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICByID0gcmFuZG9tRnJvbVNlZWQubmV4dFZhbHVlKCk7XG4gICAgICAgIGNoYXJhY3RlckluZGV4ID0gTWF0aC5mbG9vcihyICogc291cmNlQXJyYXkubGVuZ3RoKTtcbiAgICAgICAgdGFyZ2V0QXJyYXkucHVzaChzb3VyY2VBcnJheS5zcGxpY2UoY2hhcmFjdGVySW5kZXgsIDEpWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldEFycmF5LmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBnZXRTaHVmZmxlZCgpIHtcbiAgICBpZiAoc2h1ZmZsZWQpIHtcbiAgICAgICAgcmV0dXJuIHNodWZmbGVkO1xuICAgIH1cbiAgICBzaHVmZmxlZCA9IHNodWZmbGUoKTtcbiAgICByZXR1cm4gc2h1ZmZsZWQ7XG59XG5cbi8qKlxuICogbG9va3VwIHNodWZmbGVkIGxldHRlclxuICogQHBhcmFtIGluZGV4XG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBsb29rdXAoaW5kZXgpIHtcbiAgICB2YXIgYWxwaGFiZXRTaHVmZmxlZCA9IGdldFNodWZmbGVkKCk7XG4gICAgcmV0dXJuIGFscGhhYmV0U2h1ZmZsZWRbaW5kZXhdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjaGFyYWN0ZXJzOiBjaGFyYWN0ZXJzLFxuICAgIHNlZWQ6IHNldFNlZWQsXG4gICAgbG9va3VwOiBsb29rdXAsXG4gICAgc2h1ZmZsZWQ6IGdldFNodWZmbGVkXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvYWxwaGFiZXQuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IENvbG9ycyBmcm9tICcuLi9vYmplY3RzL2NvbG9ycyc7XG5pbXBvcnQgTWF0IGZyb20gJy4uL29iamVjdHMvTWF0ZXJpYWxzJztcblxubGV0IGlzQmxpbmtpbmcgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuXG4gICAgbGV0IGhlYWRHZW9tID0gbmV3IFRIUkVFLkJveEJ1ZmZlckdlb21ldHJ5KDE2LCAxNiwgMTYpO1xuICAgIGxldCBza2luTWF0ID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuc2tpbiwgZmxhdFNoYWRpbmc6IHRydWV9KTtcbiAgICBsZXQgZXllTWF0ID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmV5ZSwgZmxhdFNoYWRpbmc6IHRydWV9KTtcblxuICAgIHRoaXMuaGVhZCA9IG5ldyBUSFJFRS5NZXNoKGhlYWRHZW9tLHNraW5NYXQpO1xuICAgIHRoaXMuaGVhZC5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICB0aGlzLmhlYWQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMubWVzaC5hZGQodGhpcy5oZWFkKTtcblxuICAgIHRoaXMuYmVhcmQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmJlYXJkLnBvc2l0aW9uLnkgPSAtNztcbiAgICB0aGlzLmJlYXJkLnBvc2l0aW9uLnogPSAwLjU7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmJlYXJkKTtcblxuICAgIHRoaXMuQmVhcmQoKTtcbiAgICB0aGlzLkdsYXNzZXMoKTtcbiAgICB0aGlzLkhhaXIoKTtcbiAgICB0aGlzLkV5ZXMoKTtcbiAgICB0aGlzLkV5ZUJyb3dzKCk7XG4gICAgdGhpcy5IYXQoKTtcbiAgICB0aGlzLkZyZWNrbGVzKCk7XG4gICAgdGhpcy5GZWF0dXJlcygpO1xuICAgIHRoaXMuaWRsZSgpO1xuICAgIHRoaXMubm9ybWFsaXplKCk7XG4gIH1cblxuICBub3JtYWxpemUodiwgdm1pbiwgdm1heCwgdG1pbiwgdG1heCkge1xuICAgIGNvbnN0IG52ID0gTWF0aC5tYXgoTWF0aC5taW4odiwgdm1heCksIHZtaW4pO1xuICAgIGNvbnN0IGR2ID0gdm1heCAtIHZtaW47XG4gICAgY29uc3QgcGMgPSAobnYgLSB2bWluKSAvIGR2O1xuICAgIGNvbnN0IGR0ID0gdG1heCAtIHRtaW47XG4gICAgY29uc3QgdHYgPSB0bWluICsgKHBjICogZHQpO1xuICAgIHJldHVybiB0djtcbiAgfVxuXG4gIHVwZGF0ZUJvZHkoc3BlZWQsIGV5ZUJsdWVSaWdodFBvc1gsIGV5ZUJsdWVMZWZ0UG9zWCwgZXllQmx1ZVJpZ2h0UG9zWSwgZXllQmx1ZUxlZnRQb3NZKSB7XG4gICAgLy90aGlzLmV5ZUJsdWVSaWdodC5yb3RhdGlvbi55ICs9IChsaW9uLnRIZWFnUm90WSAtIHRoaXMuZXllQmx1ZVJpZ2h0LnJvdGF0aW9uLnkpIC8gc3BlZWQ7XG4gICAgLy90aGlzLmV5ZUJsdWVSaWdodC5yb3RhdGlvbi54ICs9ICh0aGlzLmV5ZUJsdWVSaWdodFJvdFggLSB0aGlzLmV5ZUJsdWVSaWdodC5yb3RhdGlvbi54KSAvIHNwZWVkO1xuXG4gICAgdGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24ueCArPSAoZXllQmx1ZVJpZ2h0UG9zWCAtIHRoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLngpIC8gc3BlZWQ7XG4gICAgdGhpcy5leWVCbHVlTGVmdC5wb3NpdGlvbi54ICs9IChleWVCbHVlTGVmdFBvc1ggLSB0aGlzLmV5ZUJsdWVMZWZ0LnBvc2l0aW9uLngpIC8gc3BlZWQ7XG5cbiAgICB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi55ICs9IChleWVCbHVlUmlnaHRQb3NZIC0gdGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24ueSkgLyBzcGVlZDtcbiAgICB0aGlzLmV5ZUJsdWVMZWZ0LnBvc2l0aW9uLnkgKz0gKGV5ZUJsdWVMZWZ0UG9zWSAtIHRoaXMuZXllQmx1ZUxlZnQucG9zaXRpb24ueSkgLyBzcGVlZDtcblxuICAgIC8vdGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24ueSArPSBNYXRoLnNpbih0aGlzLmV5ZUJsdWVSaWdodFBvc1kgLSB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi55KSAvIHNwZWVkO1xuICAgIC8vIHRoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLnogKz0gKHRoaXMuZXllQmx1ZVJpZ2h0UG9zWiAtIHRoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLnopIC8gc3BlZWQ7XG4gIH1cblxuICBpZGxlKHhUYXJnZXQgPSAwLCB5VGFyZ2V0ID0gMCkge1xuXG4gICAgLy9jb25zb2xlLmxvZyh4VGFyZ2V0LCB5VGFyZ2V0KTtcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLngpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLnkpO1xuICAgIGxldCBkaXN0YW5jZSA9IDE7XG5cbiAgICB0aGlzLmhlYWQucm90YXRpb24ueiA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwNSkgKiBNYXRoLlBJICogMC4wMDU7XG4gICAgdGhpcy5oZWFkLnJvdGF0aW9uLnggPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDQpICogTWF0aC5QSSAqIDAuMDM7XG5cbiAgICAvLyB0aGlzLmV5ZUJsdWVMZWZ0LnBvc2l0aW9uLnggPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDIpICogZGlzdGFuY2UgLyAyO1xuICAgIC8vIHRoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLnggPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDIpICogZGlzdGFuY2UgLyAyO1xuXG4gICAgY29uc3QgZXllQmx1ZVJpZ2h0UG9zWCA9IHRoaXMubm9ybWFsaXplKHhUYXJnZXQsIC0yMDAsIDIwMCwgLTAuNiwgMC42KTtcblxuICAgIGNvbnN0IGV5ZUJsdWVMZWZ0UG9zWCA9IHRoaXMubm9ybWFsaXplKHhUYXJnZXQsIC0yMDAsIDIwMCwgLTAuNiwgMC42KTtcblxuICAgIGNvbnN0IGV5ZUJsdWVSaWdodFBvc1kgPSB0aGlzLm5vcm1hbGl6ZSh5VGFyZ2V0LCAtMjAwLCAyMDAsIDAuNiwgLTAuNik7XG5cbiAgICBjb25zdCBleWVCbHVlTGVmdFBvc1kgPSB0aGlzLm5vcm1hbGl6ZSh5VGFyZ2V0LCAtMjAwLCAyMDAsIDAuNiwgLTAuNik7XG5cbiAgICAvLyB0aGlzLmV5ZUJsdWVSaWdodFJvdFkgPSB4VGFyZ2V0LCAtMjAsIDIwLCAtTWF0aC5QSSAvIDQsIE1hdGguUEkgLyA0O1xuICAgIC8vIHRoaXMuZXllQmx1ZVJpZ2h0Um90WCA9IHlUYXJnZXQsIC0yMCwgMjAsIC1NYXRoLlBJIC8gNCwgTWF0aC5QSSAvIDQ7XG4gICAgLy8gdGhpcy5leWVCbHVlUmlnaHRQb3NYID0geFRhcmdldCwgLTIwLCAyMCwgNzAsIC03MDtcbiAgICAvLyB0aGlzLmV5ZUJsdWVSaWdodFBvc1kgPSB5VGFyZ2V0LCAtMTQwLCAyNjAsIDIwLCAxMDA7XG4gICAgLy8gdGhpcy5leWVCbHVlUmlnaHRQb3NaID0gNztcblxuICAgIHRoaXMuZXllQnJvd1JpZ2h0LnBvc2l0aW9uLnkgPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDQpICogZGlzdGFuY2UgLyAyO1xuICAgIHRoaXMuZXllQnJvd0xlZnQucG9zaXRpb24ueSA9IE1hdGguY29zKERhdGUubm93KCkgKiAwLjAwNCkgKiBkaXN0YW5jZSAvIDI7XG5cbiAgICAvLyB0aGlzLmV5ZUJyb3dSaWdodC5yb3RhdGlvbi56ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDAyKSAqIE1hdGguUEkgKiAwLjA0O1xuICAgIC8vIHRoaXMuZXllQnJvd0xlZnQucm90YXRpb24ueiA9IE1hdGguY29zKERhdGUubm93KCkgKiAwLjAwMikgKiBNYXRoLlBJICogMC4wNDtcblxuICAgIC8vdGhpcy5iZWFyZC5tb3V0aC5wb3NpdGlvbi54ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDAyKSAqIGRpc3RhbmNlIC8gMjtcblxuICAgIC8vIFNOT1IgT01IT09HLU9NTEFBR1xuICAgIHRoaXMubW91c3RhY2hlLnBvc2l0aW9uLnkgPSBNYXRoLmNvcyhEYXRlLm5vdygpICogMC4wMSkgKiBkaXN0YW5jZSAvIDQ7XG4gICAgLy8gU05PUiBPTUhPT0ctUk9UQVRJRVxuICAgIHRoaXMubW91c3RhY2hlLnJvdGF0aW9uLnogPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMSkgKiBNYXRoLlBJICogMC4wMTtcblxuICAgIC8vdGhpcy5tb3V0aC5zY2FsZS54ID0gTWF0aC5jb3MoRGF0ZS5ub3coKSAqIDAuMDA0KSAqIGRpc3RhbmNlIC8gMjtcblxuICAgIC8vU05FTEhFSUQgSEVFTiBFTiBXRUVSXG4gICAgdGhpcy5tZXNoLnJvdGF0aW9uLnkgPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDIpICogTWF0aC5QSSAqIDAuMDU7XG4gICAgdGhpcy51cGRhdGVCb2R5KDEwLCBleWVCbHVlUmlnaHRQb3NYLCBleWVCbHVlTGVmdFBvc1gsIGV5ZUJsdWVSaWdodFBvc1ksIGV5ZUJsdWVMZWZ0UG9zWSk7XG4gIH1cblxuICBCZWFyZCgpIHtcblxuICAgIGxldCBiZWFyZEdlb21NZXJnZWQgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcblxuICAgIGxldCBiZWFyZDFHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDIsIDEwLCAxNik7XG5cbiAgICBsZXQgYmVhcmQxID0gbmV3IFRIUkVFLk1lc2goYmVhcmQxR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBiZWFyZDEuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oOSwgMCwgMCkpO1xuICAgIGJlYXJkMS51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQxLmdlb21ldHJ5LCBiZWFyZDEubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDIgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDFHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkMi5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig3LCAtMiwgMikpO1xuICAgIGJlYXJkMi5zY2FsZS56ID0gMC44O1xuICAgIGJlYXJkMi51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQyLmdlb21ldHJ5LCBiZWFyZDIubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDMgPSBiZWFyZDEuY2xvbmUoKTtcbiAgICBiZWFyZDMucG9zaXRpb24ueCA9IC1iZWFyZDEucG9zaXRpb24ueDtcbiAgICBiZWFyZDMudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkMy5nZW9tZXRyeSwgYmVhcmQzLm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQ0ID0gYmVhcmQyLmNsb25lKCk7XG4gICAgYmVhcmQ0LnBvc2l0aW9uLnggPSAtYmVhcmQyLnBvc2l0aW9uLng7XG4gICAgYmVhcmQ0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDQuZ2VvbWV0cnksIGJlYXJkNC5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkMkdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMywgMTQsIDEwKTtcbiAgICBiZWFyZDJHZW9tLnZlcnRpY2VzWzJdLnogLT0gMjtcbiAgICBiZWFyZDJHZW9tLnZlcnRpY2VzWzddLnogLT0gMjtcblxuICAgIGxldCBiZWFyZDUgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDJHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkNS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig1LCAtNSwgNCkpO1xuICAgIGJlYXJkNS51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQ1Lmdlb21ldHJ5LCBiZWFyZDUubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDNHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDIuNSwgMTQsIDEwKTtcbiAgICBiZWFyZDNHZW9tLnZlcnRpY2VzWzJdLnogLT0gMjtcbiAgICBiZWFyZDNHZW9tLnZlcnRpY2VzWzddLnogLT0gMjtcblxuICAgIGxldCBiZWFyZDYgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDNHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkNi5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigyLjUsIC02LCA2KSk7XG4gICAgYmVhcmQ2LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDYuZ2VvbWV0cnksIGJlYXJkNi5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkNyA9IGJlYXJkNS5jbG9uZSgpO1xuICAgIGJlYXJkNy5wb3NpdGlvbi54ID0gLWJlYXJkNS5wb3NpdGlvbi54O1xuICAgIGJlYXJkNy51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQ3Lmdlb21ldHJ5LCBiZWFyZDcubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDggPSBiZWFyZDYuY2xvbmUoKTtcbiAgICBiZWFyZDgucG9zaXRpb24ueCA9IC1iZWFyZDYucG9zaXRpb24ueDtcbiAgICBiZWFyZDgudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkOC5nZW9tZXRyeSwgYmVhcmQ4Lm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQ0R2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyLjUsIDE0LjUsIDEwKTtcbiAgICBiZWFyZDRHZW9tLnZlcnRpY2VzWzJdLnogLT0gMTtcbiAgICBiZWFyZDRHZW9tLnZlcnRpY2VzWzddLnogLT0gMTtcblxuICAgIGxldCBiZWFyZDkgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDRHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkOS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigwLCAtNywgNS43NSkpO1xuICAgIGJlYXJkOS51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQ5Lmdlb21ldHJ5LCBiZWFyZDkubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDVHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDQsIDgsIDgpO1xuICAgIGxldCBiZWFyZDEwID0gbmV3IFRIUkVFLk1lc2goYmVhcmQ1R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBiZWFyZDEwLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKC02LCAtMSwgLTIpKTtcbiAgICBiZWFyZDEwLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDEwLmdlb21ldHJ5LCBiZWFyZDEwLm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQxMSA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkNUdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmQxMS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigwLCAtNSwgLTIpKTtcbiAgICBiZWFyZDExLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDExLmdlb21ldHJ5LCBiZWFyZDExLm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmRNZXJnZWQgPSBuZXcgVEhSRUUuTWVzaChiZWFyZEdlb21NZXJnZWQsIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmRNZXJnZWQuY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgYmVhcmRNZXJnZWQucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG5cbiAgICBsZXQgbW91dGhHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEwLCA0LCAxKTtcbiAgICBsZXQgbW91dGggPSBuZXcgVEhSRUUuTWVzaChtb3V0aEdlb20sIE1hdC5ibGFja01hdCk7XG4gICAgbW91dGgucG9zaXRpb24uc2V0KDAsIDIsIDgpO1xuICAgIG1vdXRoLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBtb3V0aC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcblxuICAgIGxldCB0ZWV0aEdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTAsIDEsIDEpO1xuICAgIGxldCB0ZWV0aCA9IG5ldyBUSFJFRS5NZXNoKHRlZXRoR2VvbSwgTWF0LnRlZXRoTWF0KTtcbiAgICB0ZWV0aC5wb3NpdGlvbi5zZXQoMCwgMC41LCAwLjEpO1xuICAgIHRlZXRoLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0ZWV0aC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcbiAgICBtb3V0aC5hZGQodGVldGgpXG5cbiAgICAvLyBsZXQgc21pbGVHZW9tID0gbmV3IFRIUkVFLlRvcnVzR2VvbWV0cnkoNCwgMS41LCAyLCA2LCAtTWF0aC5QSSk7XG4gICAgLy8gdGhpcy5zbWlsZSA9IG5ldyBUSFJFRS5NZXNoKHNtaWxlR2VvbSwgTWF0LmJsYWNrTWF0KTtcbiAgICAvLyB0aGlzLnNtaWxlLnBvc2l0aW9uLnNldCgwLCAyLCAxMCk7XG4gICAgLy8gdGhpcy5zbWlsZS5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgLy8gdGhpcy5zbWlsZS5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcbiAgICAvL1xuICAgIC8vIHRoaXMuYmVhcmQuYWRkKGJlYXJkTWVyZ2VkLCBtb3V0aCwgdGhpcy5zbWlsZSk7XG4gICAgdGhpcy5iZWFyZC5hZGQoYmVhcmRNZXJnZWQsIG1vdXRoKTtcblxuICAgIGxldCBtb3VzdGFjaGVHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDE0LCAzLCAzLCAzKTtcbiAgICBtb3VzdGFjaGVHZW9tLnZlcnRpY2VzWzBdLnkgLT0gMjtcbiAgICBtb3VzdGFjaGVHZW9tLnZlcnRpY2VzWzFdLnkgLT0gMjtcbiAgICBtb3VzdGFjaGVHZW9tLnZlcnRpY2VzWzJdLnkgLT0gMjtcbiAgICBtb3VzdGFjaGVHZW9tLnZlcnRpY2VzWzNdLnkgLT0gMjtcbiAgICBtb3VzdGFjaGVHZW9tLnZlcnRpY2VzWzRdLnkgLT0gMjtcbiAgICBtb3VzdGFjaGVHZW9tLnZlcnRpY2VzWzVdLnkgLT0gMjtcbiAgICBtb3VzdGFjaGVHZW9tLnZlcnRpY2VzWzZdLnkgLT0gMjtcbiAgICBtb3VzdGFjaGVHZW9tLnZlcnRpY2VzWzddLnkgLT0gMjtcbiAgICBtb3VzdGFjaGVHZW9tLnZlcnRpY2VzWzhdLnggLT0gMTtcbiAgICBtb3VzdGFjaGVHZW9tLnZlcnRpY2VzWzldLnggKz0gMTtcblxuICAgIG1vdXN0YWNoZUdlb20uYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oMCwgNCwgMCkpO1xuICAgIHRoaXMubW91c3RhY2hlID0gbmV3IFRIUkVFLk1lc2gobW91c3RhY2hlR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICB0aGlzLm1vdXN0YWNoZS5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICB0aGlzLm1vdXN0YWNoZS5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcblxuICAgIHRoaXMubW91c3RhY2hlLnBvc2l0aW9uLnNldCgwLCAwLCA5KTtcbiAgICB0aGlzLmJlYXJkLmFkZCh0aGlzLm1vdXN0YWNoZSk7XG4gIH1cblxuICBHbGFzc2VzKCkge1xuICAgIC8vR0xBU1NFU1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHRoaXMuZ2xhc3NlcyA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHRoaXMuZ2xhc3Nlcy5wb3NpdGlvbi5zZXQoMCwgMCwgOSk7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmdsYXNzZXMpO1xuICAgIGxldCBnbGFzc2VzTWF0ID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmdsYXNzZXMsIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG5cblxuICAgIGxldCBmcmFtZUdlb21NZXJnZWQgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcblxuICAgIGxldCBmcmFtZU91dGVyR2VvbSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDMsIDMsIDAuNSwgMzIpXG4gICAgbGV0IGZyYW1lSW5uZXJHZW9tID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMi43LCAyLjcsIDAuNSwgMzIpXG5cbiAgICBmcmFtZU91dGVyR2VvbS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblgoLU1hdGguUEkgLyAyKSk7XG4gICAgZnJhbWVJbm5lckdlb20uYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25YKC1NYXRoLlBJIC8gMikpO1xuXG4gICAgbGV0IGZyYW1lQlNQID0gbmV3IFRocmVlQlNQKGZyYW1lT3V0ZXJHZW9tKTtcbiAgICBsZXQgZnJhbWVDdXRCU1AgPSBuZXcgVGhyZWVCU1AoZnJhbWVJbm5lckdlb20pO1xuXG4gICAgbGV0IGZyYW1laW50ZXJzZWN0aW9uQlNQID0gZnJhbWVCU1Auc3VidHJhY3QoZnJhbWVDdXRCU1ApO1xuICAgIGxldCBmcmFtZUxlZnQgPSBmcmFtZWludGVyc2VjdGlvbkJTUC50b01lc2goZ2xhc3Nlc01hdCk7XG5cbiAgICBmcmFtZUxlZnQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oNCwgMywgMCkpO1xuICAgIGZyYW1lTGVmdC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmFtZUdlb21NZXJnZWQubWVyZ2UoZnJhbWVMZWZ0Lmdlb21ldHJ5LCBmcmFtZUxlZnQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZVJpZ2h0ID0gZnJhbWVMZWZ0LmNsb25lKCk7XG4gICAgZnJhbWVSaWdodC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooTWF0aC5QSSAvIDMwKSk7XG4gICAgZnJhbWVSaWdodC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigtNy41LCAtMC4yNSwgMCkpO1xuICAgIGZyYW1lUmlnaHQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJhbWVHZW9tTWVyZ2VkLm1lcmdlKGZyYW1lUmlnaHQuZ2VvbWV0cnksIGZyYW1lUmlnaHQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZU1pZEdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMiwgLjMsIC41KTtcbiAgICBsZXQgZnJhbWVNaWQgPSBuZXcgVEhSRUUuTWVzaChmcmFtZU1pZEdlb20sIGdsYXNzZXNNYXQpO1xuICAgIGZyYW1lTWlkLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDAsIDMuMywgLTAuMykpO1xuICAgIGZyYW1lTWlkLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyYW1lR2VvbU1lcmdlZC5tZXJnZShmcmFtZU1pZC5nZW9tZXRyeSwgZnJhbWVNaWQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZUVuZEdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMS41LCAuNSwgMSk7XG4gICAgbGV0IGZyYW1lRW5kUmlnaHQgPSBuZXcgVEhSRUUuTWVzaChmcmFtZUVuZEdlb20sIGdsYXNzZXNNYXQpO1xuICAgIGZyYW1lRW5kUmlnaHQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oNy41LCAzLCAwKSk7XG4gICAgZnJhbWVFbmRSaWdodC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmFtZUdlb21NZXJnZWQubWVyZ2UoZnJhbWVFbmRSaWdodC5nZW9tZXRyeSwgZnJhbWVFbmRSaWdodC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lRW5kTGVmdCA9IGZyYW1lRW5kUmlnaHQuY2xvbmUoKTtcbiAgICBmcmFtZUVuZExlZnQucG9zaXRpb24ueCA9IC1mcmFtZUVuZFJpZ2h0LnBvc2l0aW9uLng7XG4gICAgZnJhbWVFbmRMZWZ0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyYW1lR2VvbU1lcmdlZC5tZXJnZShmcmFtZUVuZExlZnQuZ2VvbWV0cnksIGZyYW1lRW5kTGVmdC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lU3Bva2VHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIDAuNSwgMTIpO1xuICAgIGxldCBmcmFtZVNwb2tlUmlnaHQgPSBuZXcgVEhSRUUuTWVzaChmcmFtZVNwb2tlR2VvbSwgZ2xhc3Nlc01hdCk7XG4gICAgZnJhbWVTcG9rZVJpZ2h0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDgsIDMsIC01LjUpKTtcbiAgICBmcmFtZVNwb2tlUmlnaHQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJhbWVHZW9tTWVyZ2VkLm1lcmdlKGZyYW1lU3Bva2VSaWdodC5nZW9tZXRyeSwgZnJhbWVTcG9rZVJpZ2h0Lm1hdHJpeCk7XG5cbiAgICBsZXQgZnJhbWVTcG9rZUxlZnQgPSBmcmFtZVNwb2tlUmlnaHQuY2xvbmUoKTtcbiAgICBmcmFtZVNwb2tlTGVmdC5wb3NpdGlvbi54ID0gLWZyYW1lU3Bva2VSaWdodC5wb3NpdGlvbi54O1xuICAgIGZyYW1lU3Bva2VMZWZ0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyYW1lR2VvbU1lcmdlZC5tZXJnZShmcmFtZVNwb2tlTGVmdC5nZW9tZXRyeSwgZnJhbWVTcG9rZUxlZnQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZU1lcmdlZCA9IG5ldyBUSFJFRS5NZXNoKGZyYW1lR2VvbU1lcmdlZCwgZ2xhc3Nlc01hdCk7XG4gICAgZnJhbWVNZXJnZWQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIGZyYW1lTWVyZ2VkLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuXG4gICAgdGhpcy5nbGFzc2VzLmFkZChmcmFtZU1lcmdlZCk7XG5cbiAgfVxuXG4gIEhhaXIoKSB7XG4gICAgLy9IQUlSXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICB0aGlzLmhhaXIgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmhhaXIucG9zaXRpb24uc2V0KDAsIDksIDApO1xuICAgIHRoaXMuaGVhZC5hZGQodGhpcy5oYWlyKTtcblxuICAgIGxldCBoYWlyR2VvbU1lcmdlZCA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuXG4gICAgbGV0IGhhaXJGbGF0R2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxMCwgMiwgMTgpO1xuXG4gICAgbGV0IGhhaXIxID0gbmV3IFRIUkVFLk1lc2goaGFpckZsYXRHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGhhaXIxLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWigtTWF0aC5QSSAvIDQwKSk7XG4gICAgaGFpcjEuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oLTQsIC0wLjUsIDApKTtcbiAgICBoYWlyMS51cGRhdGVNYXRyaXgoKTtcbiAgICBoYWlyR2VvbU1lcmdlZC5tZXJnZShoYWlyMS5nZW9tZXRyeSwgaGFpcjEubWF0cml4KTtcblxuICAgIGxldCBoYWlyMiA9IG5ldyBUSFJFRS5NZXNoKGhhaXJGbGF0R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyMi5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooLU1hdGguUEkgLyAxMCkpO1xuICAgIGhhaXIyLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKC0yLCAxLCAwKSk7XG4gICAgaGFpcjIudXBkYXRlTWF0cml4KCk7XG4gICAgaGFpckdlb21NZXJnZWQubWVyZ2UoaGFpcjIuZ2VvbWV0cnksIGhhaXIyLm1hdHJpeCk7XG5cbiAgICBsZXQgaGFpcjMgPSBuZXcgVEhSRUUuTWVzaChoYWlyRmxhdEdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgaGFpcjMuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKC1NYXRoLlBJIC8gNSkpO1xuICAgIGhhaXIzLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDIsIDEsIDApKTtcbiAgICBoYWlyMy51cGRhdGVNYXRyaXgoKTtcbiAgICBoYWlyR2VvbU1lcmdlZC5tZXJnZShoYWlyMy5nZW9tZXRyeSwgaGFpcjMubWF0cml4KTtcblxuICAgIGxldCBoYWlyNCA9IG5ldyBUSFJFRS5NZXNoKGhhaXJGbGF0R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyNC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooLU1hdGguUEkgLyA0KSk7XG4gICAgaGFpcjQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oNiwgMCwgMCkpO1xuICAgIGhhaXI0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGhhaXJHZW9tTWVyZ2VkLm1lcmdlKGhhaXI0Lmdlb21ldHJ5LCBoYWlyNC5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXI2ID0gbmV3IFRIUkVFLk1lc2goaGFpckZsYXRHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGhhaXI2LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWigtTWF0aC5QSSAvIC0zKSk7XG4gICAgaGFpcjYuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oLTcuNzUsIC0uNSwgMCkpO1xuICAgIGhhaXI2LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGhhaXJHZW9tTWVyZ2VkLm1lcmdlKGhhaXI2Lmdlb21ldHJ5LCBoYWlyNi5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXJGbGF0QmFja0dlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTgsIDcsIDYpO1xuICAgIGhhaXJGbGF0QmFja0dlb20udmVydGljZXNbMF0ueCAtPSAxO1xuICAgIGhhaXJGbGF0QmFja0dlb20udmVydGljZXNbMV0ueCAtPSAxO1xuICAgIGhhaXJGbGF0QmFja0dlb20udmVydGljZXNbNF0ueCArPSAxO1xuICAgIGhhaXJGbGF0QmFja0dlb20udmVydGljZXNbNV0ueCArPSAxO1xuXG4gICAgbGV0IGhhaXI1ID0gbmV3IFRIUkVFLk1lc2goaGFpckZsYXRCYWNrR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyNS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigwLCAtNC41LCAtNikpO1xuICAgIGhhaXI1LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGhhaXJHZW9tTWVyZ2VkLm1lcmdlKGhhaXI1Lmdlb21ldHJ5LCBoYWlyNS5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXJNZXJnZWQgPSBuZXcgVEhSRUUuTWVzaChoYWlyR2VvbU1lcmdlZCwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyTWVyZ2VkLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBoYWlyTWVyZ2VkLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuXG4gICAgdGhpcy5oYWlyLmFkZChoYWlyTWVyZ2VkKTtcblxuICB9XG5cbiAgRXllcygpIHtcblxuICAgIHRoaXMuZXllcyA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHRoaXMuZXllcy5wb3NpdGlvbi5zZXQoMCwgMywgOSk7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmV5ZXMpO1xuXG4gICAgbGV0IGV5ZVdoaXRlR2VvbSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDIuNSwgMi41KTtcblxuICAgIGxldCBleWVXaGl0ZVJpZ2h0ID0gbmV3IFRIUkVFLk1lc2goZXllV2hpdGVHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGV5ZVdoaXRlUmlnaHQucG9zaXRpb24uc2V0KC0zLjc1LCAwLCAwKTtcbiAgICBleWVXaGl0ZVJpZ2h0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBleWVXaGl0ZVJpZ2h0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIGxldCBleWVCbHVlR2VvbSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDEuNSwgMS41KTtcblxuICAgIGxldCBleWVNYXQgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuZXllLCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuXG4gICAgdGhpcy5leWVCbHVlUmlnaHQgPSBuZXcgVEhSRUUuTWVzaChleWVCbHVlR2VvbSwgZXllTWF0KTtcbiAgICB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi5zZXQoMCwgMCwgLjAxKTtcbiAgICB0aGlzLmV5ZUJsdWVSaWdodC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5leWVCbHVlUmlnaHQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgZXllV2hpdGVSaWdodC5hZGQodGhpcy5leWVCbHVlUmlnaHQpO1xuXG4gICAgbGV0IGV5ZVB1cGlsR2VvbSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDEsIDEpO1xuXG4gICAgdGhpcy5leWVQdXBpbFJpZ2h0ID0gbmV3IFRIUkVFLk1lc2goZXllUHVwaWxHZW9tLCBNYXQuYmxhY2tNYXQpO1xuICAgIHRoaXMuZXllUHVwaWxSaWdodC5wb3NpdGlvbi5zZXQoMCwgMCwgLjAyKTtcbiAgICB0aGlzLmV5ZVB1cGlsUmlnaHQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuZXllUHVwaWxSaWdodC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmV5ZUJsdWVSaWdodC5hZGQodGhpcy5leWVQdXBpbFJpZ2h0KTtcblxuICAgIGxldCBleWVXaGl0ZUxlZnQgPSBuZXcgVEhSRUUuTWVzaChleWVXaGl0ZUdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgZXllV2hpdGVMZWZ0LnBvc2l0aW9uLnNldCgzLjc1LCAwLCAwKTtcbiAgICBleWVXaGl0ZUxlZnQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIGV5ZVdoaXRlTGVmdC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmV5ZUJsdWVMZWZ0ID0gbmV3IFRIUkVFLk1lc2goZXllQmx1ZUdlb20sIGV5ZU1hdCk7XG4gICAgdGhpcy5leWVCbHVlTGVmdC5wb3NpdGlvbi5zZXQoMCwgMCwgLjAxKTtcbiAgICB0aGlzLmV5ZUJsdWVMZWZ0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmV5ZUJsdWVMZWZ0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIGV5ZVdoaXRlTGVmdC5hZGQodGhpcy5leWVCbHVlTGVmdCk7XG5cbiAgICB0aGlzLmV5ZVB1cGlsTGVmdCA9IG5ldyBUSFJFRS5NZXNoKGV5ZVB1cGlsR2VvbSwgTWF0LmJsYWNrTWF0KTtcbiAgICB0aGlzLmV5ZVB1cGlsTGVmdC5wb3NpdGlvbi5zZXQoMCwgMCwgLjAyKTtcbiAgICB0aGlzLmV5ZVB1cGlsTGVmdC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5leWVQdXBpbExlZnQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5leWVCbHVlTGVmdC5hZGQodGhpcy5leWVQdXBpbExlZnQpO1xuXG4gICAgdGhpcy5leWVzLmFkZChleWVXaGl0ZVJpZ2h0LCBleWVXaGl0ZUxlZnQpO1xuICB9XG5cbiAgRXllQnJvd3MoKSB7XG4gICAgdGhpcy5leWVCcm93cyA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHRoaXMuZXllQnJvd3MucG9zaXRpb24uc2V0KDAsIDYsIDgpO1xuICAgIHRoaXMuaGVhZC5hZGQodGhpcy5leWVCcm93cyk7XG5cbiAgICBsZXQgZXllQnJvd0dlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoNCwgMSwgMSk7XG5cbiAgICB0aGlzLmV5ZUJyb3dSaWdodCA9IG5ldyBUSFJFRS5NZXNoKGV5ZUJyb3dHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIHRoaXMuZXllQnJvd1JpZ2h0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWihNYXRoLlBJIC8gNDUpKTtcbiAgICB0aGlzLmV5ZUJyb3dSaWdodC5wb3NpdGlvbi5zZXQoLTMuNzUsIDAsIDApO1xuICAgIHRoaXMuZXllQnJvd1JpZ2h0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmV5ZUJyb3dSaWdodC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmV5ZUJyb3dMZWZ0ID0gbmV3IFRIUkVFLk1lc2goZXllQnJvd0dlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgdGhpcy5leWVCcm93TGVmdC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooLU1hdGguUEkgLyA0NSkpO1xuICAgIHRoaXMuZXllQnJvd0xlZnQucG9zaXRpb24uc2V0KDMuNzUsIDAsIDApO1xuICAgIHRoaXMuZXllQnJvd0xlZnQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuZXllQnJvd0xlZnQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5leWVCcm93cy5hZGQodGhpcy5leWVCcm93UmlnaHQsIHRoaXMuZXllQnJvd0xlZnQpO1xuICB9XG5cbiAgSGF0KCkge1xuICAgIHRoaXMuaGF0ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgdGhpcy5oYXQucG9zaXRpb24uc2V0KC0wLjIsIDExLCAyLjQpO1xuICAgIHRoaXMuaGVhZC5hZGQodGhpcy5oYXQpO1xuICAgIGxldCBoYXRNYXQgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuaGF0LCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuXG5cbiAgICBsZXQgYmFuZEdlb20gPSBuZXcgVEhSRUUuVG9ydXNHZW9tZXRyeSg5LCAyLCAxNiwgMTAwKTtcbiAgICBsZXQgYmlnQ29uZUdlb20gPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgxLCAxMSwgMTIsIDE1KTtcbiAgICBsZXQgc21hbGxDb25lR2VvbSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDAuOCwgMywgOSwgMzIpO1xuICAgIGxldCBoYXREaW5nbGVHZW9tID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDEuNSwgOCwgOCk7XG5cbiAgICB0aGlzLmJhbmQgPSBuZXcgVEhSRUUuTWVzaChiYW5kR2VvbSwgTWF0LnRlZXRoTWF0KTtcbiAgICB0aGlzLmJhbmQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25YKE1hdGguUEkgLyAyKSk7XG4gICAgdGhpcy5iYW5kLnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcbiAgICB0aGlzLmJhbmQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuYmFuZC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmJpZ0NvbmUgPSBuZXcgVEhSRUUuTWVzaChiaWdDb25lR2VvbSwgaGF0TWF0KTtcbiAgICB0aGlzLmJpZ0NvbmUucG9zaXRpb24uc2V0KDAsIDYsIDApO1xuICAgIHRoaXMuYmlnQ29uZS5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5iaWdDb25lLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuc21hbGxDb25lID0gbmV3IFRIUkVFLk1lc2goc21hbGxDb25lR2VvbSwgaGF0TWF0KTtcbiAgICB0aGlzLnNtYWxsQ29uZS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblgoTWF0aC5QSSAvIDIpKTtcbiAgICB0aGlzLnNtYWxsQ29uZS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblkoTWF0aC5QSSAvIDIpKTtcbiAgICB0aGlzLnNtYWxsQ29uZS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooTWF0aC5QSSAvIC04KSk7XG4gICAgdGhpcy5zbWFsbENvbmUucG9zaXRpb24uc2V0KDQsIDcuOCwgLTEpO1xuICAgIHRoaXMuc21hbGxDb25lLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLnNtYWxsQ29uZS5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmhhdERpbmdsZSA9IG5ldyBUSFJFRS5NZXNoKGhhdERpbmdsZUdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgdGhpcy5oYXREaW5nbGUucG9zaXRpb24uc2V0KDksIDUuNSwgLTEpO1xuICAgIHRoaXMuaGF0RGluZ2xlLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmhhdERpbmdsZS5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmhhdC5hZGQodGhpcy5iYW5kLCB0aGlzLmJpZ0NvbmUsIHRoaXMuc21hbGxDb25lLCB0aGlzLmhhdERpbmdsZSk7XG4gIH1cblxuICBGcmVja2xlcygpIHtcbiAgICB0aGlzLmZyZWNrbGVzID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgdGhpcy5mcmVja2xlcy5wb3NpdGlvbi5zZXQoMCwgMCwgOCk7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmZyZWNrbGVzKTtcblxuICAgIGxldCBmcmVja2xlc0dlb21NZXJnZWQgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcblxuICAgIGxldCBmcmVja2xlc0dlb20gPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSgwLjUsIDAuNSk7XG4gICAgbGV0IGZyZWNrbGVzTWF0ID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuZnJlY2tsZXMsIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG5cbiAgICBsZXQgZnJlY2tsZTEgPSBuZXcgVEhSRUUuTWVzaChmcmVja2xlc0dlb20sIGZyZWNrbGVzTWF0KTtcbiAgICBmcmVja2xlMS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigtNSwgMCwgMC4wMSkpO1xuICAgIGZyZWNrbGUxLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyZWNrbGVzR2VvbU1lcmdlZC5tZXJnZShmcmVja2xlMS5nZW9tZXRyeSwgZnJlY2tsZTEubWF0cml4KTtcblxuICAgIGxldCBmcmVja2xlMiA9IGZyZWNrbGUxLmNsb25lKCk7XG4gICAgZnJlY2tsZTIuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oLTAuNSwgLTEsIDApKTtcbiAgICBmcmVja2xlMi51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmVja2xlc0dlb21NZXJnZWQubWVyZ2UoZnJlY2tsZTIuZ2VvbWV0cnksIGZyZWNrbGUyLm1hdHJpeCk7XG5cbiAgICBsZXQgZnJlY2tsZTMgPSBmcmVja2xlMS5jbG9uZSgpO1xuICAgIGZyZWNrbGUzLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDEsIC0wLjUsIDApKTtcbiAgICBmcmVja2xlMy51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmVja2xlc0dlb21NZXJnZWQubWVyZ2UoZnJlY2tsZTMuZ2VvbWV0cnksIGZyZWNrbGUzLm1hdHJpeCk7XG5cbiAgICBsZXQgZnJlY2tsZTQgPSBmcmVja2xlMS5jbG9uZSgpO1xuICAgIGZyZWNrbGU0LnBvc2l0aW9uLnggPSAtZnJlY2tsZTEucG9zaXRpb24ueDtcbiAgICBmcmVja2xlNC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmVja2xlc0dlb21NZXJnZWQubWVyZ2UoZnJlY2tsZTQuZ2VvbWV0cnksIGZyZWNrbGU0Lm1hdHJpeCk7XG4gICAgbGV0IGZyZWNrbGU1ID0gZnJlY2tsZTIuY2xvbmUoKTtcbiAgICBmcmVja2xlNS5wb3NpdGlvbi54ID0gLWZyZWNrbGUyLnBvc2l0aW9uLng7XG4gICAgZnJlY2tsZTUudXBkYXRlTWF0cml4KCk7XG4gICAgZnJlY2tsZXNHZW9tTWVyZ2VkLm1lcmdlKGZyZWNrbGU1Lmdlb21ldHJ5LCBmcmVja2xlNS5tYXRyaXgpO1xuICAgIGxldCBmcmVja2xlNiA9IGZyZWNrbGUzLmNsb25lKCk7XG4gICAgZnJlY2tsZTYucG9zaXRpb24ueCA9IC1mcmVja2xlMy5wb3NpdGlvbi54O1xuICAgIGZyZWNrbGU2LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyZWNrbGVzR2VvbU1lcmdlZC5tZXJnZShmcmVja2xlNi5nZW9tZXRyeSwgZnJlY2tsZTYubWF0cml4KTtcblxuICAgIGxldCBmcmVja2xlZE1lcmdlZCA9IG5ldyBUSFJFRS5NZXNoKGZyZWNrbGVzR2VvbU1lcmdlZCwgZnJlY2tsZXNNYXQpO1xuICAgIGZyZWNrbGVkTWVyZ2VkLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBmcmVja2xlZE1lcmdlZC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmZyZWNrbGVzLmFkZChmcmVja2xlZE1lcmdlZCk7XG4gIH1cblxuICBGZWF0dXJlcygpIHtcbiAgICBsZXQgZWFyR2VvbSA9IG5ldyBUSFJFRS5Cb3hCdWZmZXJHZW9tZXRyeSgxLjUsIDMsIDEuNSk7XG4gICAgbGV0IHNraW5NYXQgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5za2luLCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuICAgIGxldCBlYXJSaWdodCA9IG5ldyBUSFJFRS5NZXNoKGVhckdlb20sIHNraW5NYXQpO1xuICAgIGVhclJpZ2h0LnBvc2l0aW9uLnNldCgtOC41LCAxLCAzKTtcbiAgICBlYXJSaWdodC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgZWFyUmlnaHQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgbGV0IGVhckxlZnQgPSBuZXcgVEhSRUUuTWVzaChlYXJHZW9tLCBza2luTWF0KTtcbiAgICBlYXJMZWZ0LnBvc2l0aW9uLnNldCg4LjUsIDEsIDMpO1xuICAgIGVhckxlZnQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIGVhckxlZnQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgbGV0IG5vc2VHZW9tID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMSwgMiwgNCwgNCk7XG4gICAgbGV0IG5vc2UgPSBuZXcgVEhSRUUuTWVzaChub3NlR2VvbSwgc2tpbk1hdCk7XG4gICAgbm9zZS5zY2FsZS5zZXQoLjc1LCAxLCAxLjMpO1xuICAgIG5vc2UucG9zaXRpb24uc2V0KDAsIDEsIDgpO1xuICAgIG5vc2UuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIG5vc2UucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5oZWFkLmFkZChlYXJSaWdodCwgZWFyTGVmdCwgbm9zZSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jbGFzc2VzL0hlYWQuanMiLCJpbXBvcnQgQ29sb3JzIGZyb20gJy4vY29sb3JzJztcbi8vIGxldCBza2luTWF0ID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuc2tpbiwgZmxhdFNoYWRpbmc6IHRydWV9KTtcbi8vIGxldCBmcmVja2xlc01hdCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmZyZWNrbGVzLCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuLy8gbGV0IGF1YnVybk1hdCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmF1YnVybiwgZmxhdFNoYWRpbmc6IHRydWV9KTtcbi8vIGxldCBicm93bk1hdCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmJyb3duLCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuLy8gbGV0IGJsYWNrTWF0ID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuYmxhY2ssIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG4vLyBsZXQgd2hpdGVNYXQgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMud2hpdGUsIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG4vLyBsZXQgZXllc01hdCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5leWVzLCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuLy8gbGV0IGJlaWdlTWF0ID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmJlaWdlLCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuLy8gbGV0IG5vcm1hbE1hdCA9IG5ldyBUSFJFRS5NZXNoTm9ybWFsTWF0ZXJpYWwoe30pO1xuY29uc3QgTWF0ZXJpYWxzID0ge1xuICAvL1wic2tpbk1hdFwiOiBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5za2luLCBmbGF0U2hhZGluZzogdHJ1ZX0pLFxuICAvL1wiZnJlY2tsZXNNYXRcIjogbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuZnJlY2tsZXMsIGZsYXRTaGFkaW5nOiB0cnVlfSksXG4gIFwid2hpdGVNYXRcIjogbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMud2hpdGUsIGZsYXRTaGFkaW5nOiB0cnVlfSksXG4gIC8vXCJnbGFzc2VzTWF0XCI6IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmdsYXNzZXMsIGZsYXRTaGFkaW5nOiB0cnVlfSksXG4gIFwidGVldGhNYXRcIjogbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjogQ29sb3JzLnRlZXRoLCBmbGF0U2hhZGluZzogdHJ1ZX0pLFxuICBcImJyb3duTWF0XCI6IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmJyb3duLCBmbGF0U2hhZGluZzogdHJ1ZX0pLFxuICBcImJsYWNrTWF0XCI6IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmJsYWNrLCBmbGF0U2hhZGluZzogdHJ1ZX0pLFxuICAvL1wiZXllTWF0XCI6IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5leWUsIGZsYXRTaGFkaW5nOiB0cnVlfSksXG4gIC8vXCJoYXRNYXRcIjogbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmhhdCwgZmxhdFNoYWRpbmc6IHRydWV9KSxcbiAgXCJub3JtYWxNYXRcIjogbmV3IFRIUkVFLk1lc2hOb3JtYWxNYXRlcmlhbCh7fSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hdGVyaWFscztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9vYmplY3RzL01hdGVyaWFscy5qcyIsIihmdW5jdGlvbihzZWxmKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBpZiAoc2VsZi5mZXRjaCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIHN1cHBvcnQgPSB7XG4gICAgc2VhcmNoUGFyYW1zOiAnVVJMU2VhcmNoUGFyYW1zJyBpbiBzZWxmLFxuICAgIGl0ZXJhYmxlOiAnU3ltYm9sJyBpbiBzZWxmICYmICdpdGVyYXRvcicgaW4gU3ltYm9sLFxuICAgIGJsb2I6ICdGaWxlUmVhZGVyJyBpbiBzZWxmICYmICdCbG9iJyBpbiBzZWxmICYmIChmdW5jdGlvbigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ldyBCbG9iKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9KSgpLFxuICAgIGZvcm1EYXRhOiAnRm9ybURhdGEnIGluIHNlbGYsXG4gICAgYXJyYXlCdWZmZXI6ICdBcnJheUJ1ZmZlcicgaW4gc2VsZlxuICB9XG5cbiAgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgdmlld0NsYXNzZXMgPSBbXG4gICAgICAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQ2NEFycmF5XSdcbiAgICBdXG5cbiAgICB2YXIgaXNEYXRhVmlldyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiBEYXRhVmlldy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihvYmopXG4gICAgfVxuXG4gICAgdmFyIGlzQXJyYXlCdWZmZXJWaWV3ID0gQXJyYXlCdWZmZXIuaXNWaWV3IHx8IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB2aWV3Q2xhc3Nlcy5pbmRleE9mKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopKSA+IC0xXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTmFtZShuYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgbmFtZSA9IFN0cmluZyhuYW1lKVxuICAgIH1cbiAgICBpZiAoL1teYS16MC05XFwtIyQlJicqKy5cXF5fYHx+XS9pLnRlc3QobmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBmaWVsZCBuYW1lJylcbiAgICB9XG4gICAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLy8gQnVpbGQgYSBkZXN0cnVjdGl2ZSBpdGVyYXRvciBmb3IgdGhlIHZhbHVlIGxpc3RcbiAgZnVuY3Rpb24gaXRlcmF0b3JGb3IoaXRlbXMpIHtcbiAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gaXRlbXMuc2hpZnQoKVxuICAgICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXRlcmF0b3JcbiAgfVxuXG4gIGZ1bmN0aW9uIEhlYWRlcnMoaGVhZGVycykge1xuICAgIHRoaXMubWFwID0ge31cblxuICAgIGlmIChoZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKVxuICAgICAgfSwgdGhpcylcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoaGVhZGVycykpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbihoZWFkZXIpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQoaGVhZGVyWzBdLCBoZWFkZXJbMV0pXG4gICAgICB9LCB0aGlzKVxuICAgIH0gZWxzZSBpZiAoaGVhZGVycykge1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIGhlYWRlcnNbbmFtZV0pXG4gICAgICB9LCB0aGlzKVxuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgICB2YWx1ZSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMubWFwW25hbWVdXG4gICAgdGhpcy5tYXBbbmFtZV0gPSBvbGRWYWx1ZSA/IG9sZFZhbHVlKycsJyt2YWx1ZSA6IHZhbHVlXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgICByZXR1cm4gdGhpcy5oYXMobmFtZSkgPyB0aGlzLm1hcFtuYW1lXSA6IG51bGxcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAuaGFzT3duUHJvcGVydHkobm9ybWFsaXplTmFtZShuYW1lKSlcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5tYXApIHtcbiAgICAgIGlmICh0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXMubWFwW25hbWVdLCBuYW1lLCB0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKG5hbWUpIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHsgaXRlbXMucHVzaCh2YWx1ZSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChbbmFtZSwgdmFsdWVdKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgSGVhZGVycy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXNcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnN1bWVkKGJvZHkpIHtcbiAgICBpZiAoYm9keS5ib2R5VXNlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpKVxuICAgIH1cbiAgICBib2R5LmJvZHlVc2VkID0gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZmlsZVJlYWRlclJlYWR5KHJlYWRlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0KVxuICAgICAgfVxuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc0FycmF5QnVmZmVyKGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYilcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc1RleHQoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGJsb2IpXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRBcnJheUJ1ZmZlckFzVGV4dChidWYpIHtcbiAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgICB2YXIgY2hhcnMgPSBuZXcgQXJyYXkodmlldy5sZW5ndGgpXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZpZXcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoYXJzW2ldID0gU3RyaW5nLmZyb21DaGFyQ29kZSh2aWV3W2ldKVxuICAgIH1cbiAgICByZXR1cm4gY2hhcnMuam9pbignJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1ZmZlckNsb25lKGJ1Zikge1xuICAgIGlmIChidWYuc2xpY2UpIHtcbiAgICAgIHJldHVybiBidWYuc2xpY2UoMClcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYuYnl0ZUxlbmd0aClcbiAgICAgIHZpZXcuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZikpXG4gICAgICByZXR1cm4gdmlldy5idWZmZXJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBCb2R5KCkge1xuICAgIHRoaXMuYm9keVVzZWQgPSBmYWxzZVxuXG4gICAgdGhpcy5faW5pdEJvZHkgPSBmdW5jdGlvbihib2R5KSB7XG4gICAgICB0aGlzLl9ib2R5SW5pdCA9IGJvZHlcbiAgICAgIGlmICghYm9keSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9ICcnXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5ibG9iICYmIEJsb2IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUJsb2IgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuZm9ybURhdGEgJiYgRm9ybURhdGEucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUZvcm1EYXRhID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5LnRvU3RyaW5nKClcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiBzdXBwb3J0LmJsb2IgJiYgaXNEYXRhVmlldyhib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5LmJ1ZmZlcilcbiAgICAgICAgLy8gSUUgMTAtMTEgY2FuJ3QgaGFuZGxlIGEgRGF0YVZpZXcgYm9keS5cbiAgICAgICAgdGhpcy5fYm9keUluaXQgPSBuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiAoQXJyYXlCdWZmZXIucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkgfHwgaXNBcnJheUJ1ZmZlclZpZXcoYm9keSkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vuc3VwcG9ydGVkIEJvZHlJbml0IHR5cGUnKVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04JylcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QmxvYiAmJiB0aGlzLl9ib2R5QmxvYi50eXBlKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgdGhpcy5fYm9keUJsb2IudHlwZSlcbiAgICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgICAgdGhpcy5ibG9iID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QmxvYilcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgYmxvYicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keVRleHRdKSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFycmF5QnVmZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gY29uc3VtZWQodGhpcykgfHwgUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ibG9iKCkudGhlbihyZWFkQmxvYkFzQXJyYXlCdWZmZXIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICByZXR1cm4gcmVhZEJsb2JBc1RleHQodGhpcy5fYm9keUJsb2IpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlYWRBcnJheUJ1ZmZlckFzVGV4dCh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIHRleHQnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5VGV4dClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5mb3JtRGF0YSkge1xuICAgICAgdGhpcy5mb3JtRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihkZWNvZGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5qc29uID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihKU09OLnBhcnNlKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvLyBIVFRQIG1ldGhvZHMgd2hvc2UgY2FwaXRhbGl6YXRpb24gc2hvdWxkIGJlIG5vcm1hbGl6ZWRcbiAgdmFyIG1ldGhvZHMgPSBbJ0RFTEVURScsICdHRVQnLCAnSEVBRCcsICdPUFRJT05TJywgJ1BPU1QnLCAnUFVUJ11cblxuICBmdW5jdGlvbiBub3JtYWxpemVNZXRob2QobWV0aG9kKSB7XG4gICAgdmFyIHVwY2FzZWQgPSBtZXRob2QudG9VcHBlckNhc2UoKVxuICAgIHJldHVybiAobWV0aG9kcy5pbmRleE9mKHVwY2FzZWQpID4gLTEpID8gdXBjYXNlZCA6IG1ldGhvZFxuICB9XG5cbiAgZnVuY3Rpb24gUmVxdWVzdChpbnB1dCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgdmFyIGJvZHkgPSBvcHRpb25zLmJvZHlcblxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIFJlcXVlc3QpIHtcbiAgICAgIGlmIChpbnB1dC5ib2R5VXNlZCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKVxuICAgICAgfVxuICAgICAgdGhpcy51cmwgPSBpbnB1dC51cmxcbiAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSBpbnB1dC5jcmVkZW50aWFsc1xuICAgICAgaWYgKCFvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMoaW5wdXQuaGVhZGVycylcbiAgICAgIH1cbiAgICAgIHRoaXMubWV0aG9kID0gaW5wdXQubWV0aG9kXG4gICAgICB0aGlzLm1vZGUgPSBpbnB1dC5tb2RlXG4gICAgICBpZiAoIWJvZHkgJiYgaW5wdXQuX2JvZHlJbml0ICE9IG51bGwpIHtcbiAgICAgICAgYm9keSA9IGlucHV0Ll9ib2R5SW5pdFxuICAgICAgICBpbnB1dC5ib2R5VXNlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cmwgPSBTdHJpbmcoaW5wdXQpXG4gICAgfVxuXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IG9wdGlvbnMuY3JlZGVudGlhbHMgfHwgdGhpcy5jcmVkZW50aWFscyB8fCAnb21pdCdcbiAgICBpZiAob3B0aW9ucy5oZWFkZXJzIHx8ICF0aGlzLmhlYWRlcnMpIHtcbiAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgICB9XG4gICAgdGhpcy5tZXRob2QgPSBub3JtYWxpemVNZXRob2Qob3B0aW9ucy5tZXRob2QgfHwgdGhpcy5tZXRob2QgfHwgJ0dFVCcpXG4gICAgdGhpcy5tb2RlID0gb3B0aW9ucy5tb2RlIHx8IHRoaXMubW9kZSB8fCBudWxsXG4gICAgdGhpcy5yZWZlcnJlciA9IG51bGxcblxuICAgIGlmICgodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpICYmIGJvZHkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JvZHkgbm90IGFsbG93ZWQgZm9yIEdFVCBvciBIRUFEIHJlcXVlc3RzJylcbiAgICB9XG4gICAgdGhpcy5faW5pdEJvZHkoYm9keSlcbiAgfVxuXG4gIFJlcXVlc3QucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KHRoaXMsIHsgYm9keTogdGhpcy5fYm9keUluaXQgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlY29kZShib2R5KSB7XG4gICAgdmFyIGZvcm0gPSBuZXcgRm9ybURhdGEoKVxuICAgIGJvZHkudHJpbSgpLnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbihieXRlcykge1xuICAgICAgaWYgKGJ5dGVzKSB7XG4gICAgICAgIHZhciBzcGxpdCA9IGJ5dGVzLnNwbGl0KCc9JylcbiAgICAgICAgdmFyIG5hbWUgPSBzcGxpdC5zaGlmdCgpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIHZhciB2YWx1ZSA9IHNwbGl0LmpvaW4oJz0nKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICBmb3JtLmFwcGVuZChkZWNvZGVVUklDb21wb25lbnQobmFtZSksIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZm9ybVxuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VIZWFkZXJzKHJhd0hlYWRlcnMpIHtcbiAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKClcbiAgICByYXdIZWFkZXJzLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6JylcbiAgICAgIHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpLnRyaW0oKVxuICAgICAgaWYgKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwYXJ0cy5qb2luKCc6JykudHJpbSgpXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKGtleSwgdmFsdWUpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gaGVhZGVyc1xuICB9XG5cbiAgQm9keS5jYWxsKFJlcXVlc3QucHJvdG90eXBlKVxuXG4gIGZ1bmN0aW9uIFJlc3BvbnNlKGJvZHlJbml0LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge31cbiAgICB9XG5cbiAgICB0aGlzLnR5cGUgPSAnZGVmYXVsdCdcbiAgICB0aGlzLnN0YXR1cyA9ICdzdGF0dXMnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1cyA6IDIwMFxuICAgIHRoaXMub2sgPSB0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDBcbiAgICB0aGlzLnN0YXR1c1RleHQgPSAnc3RhdHVzVGV4dCcgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzVGV4dCA6ICdPSydcbiAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gICAgdGhpcy51cmwgPSBvcHRpb25zLnVybCB8fCAnJ1xuICAgIHRoaXMuX2luaXRCb2R5KGJvZHlJbml0KVxuICB9XG5cbiAgQm9keS5jYWxsKFJlc3BvbnNlLnByb3RvdHlwZSlcblxuICBSZXNwb25zZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKHRoaXMuX2JvZHlJbml0LCB7XG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgc3RhdHVzVGV4dDogdGhpcy5zdGF0dXNUZXh0LFxuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICAgIHVybDogdGhpcy51cmxcbiAgICB9KVxuICB9XG5cbiAgUmVzcG9uc2UuZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogMCwgc3RhdHVzVGV4dDogJyd9KVxuICAgIHJlc3BvbnNlLnR5cGUgPSAnZXJyb3InXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH1cblxuICB2YXIgcmVkaXJlY3RTdGF0dXNlcyA9IFszMDEsIDMwMiwgMzAzLCAzMDcsIDMwOF1cblxuICBSZXNwb25zZS5yZWRpcmVjdCA9IGZ1bmN0aW9uKHVybCwgc3RhdHVzKSB7XG4gICAgaWYgKHJlZGlyZWN0U3RhdHVzZXMuaW5kZXhPZihzdGF0dXMpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc3RhdHVzIGNvZGUnKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogc3RhdHVzLCBoZWFkZXJzOiB7bG9jYXRpb246IHVybH19KVxuICB9XG5cbiAgc2VsZi5IZWFkZXJzID0gSGVhZGVyc1xuICBzZWxmLlJlcXVlc3QgPSBSZXF1ZXN0XG4gIHNlbGYuUmVzcG9uc2UgPSBSZXNwb25zZVxuXG4gIHNlbGYuZmV0Y2ggPSBmdW5jdGlvbihpbnB1dCwgaW5pdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoaW5wdXQsIGluaXQpXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcblxuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB8fCAnJylcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLnVybCA9ICdyZXNwb25zZVVSTCcgaW4geGhyID8geGhyLnJlc3BvbnNlVVJMIDogb3B0aW9ucy5oZWFkZXJzLmdldCgnWC1SZXF1ZXN0LVVSTCcpXG4gICAgICAgIHZhciBib2R5ID0gJ3Jlc3BvbnNlJyBpbiB4aHIgPyB4aHIucmVzcG9uc2UgOiB4aHIucmVzcG9uc2VUZXh0XG4gICAgICAgIHJlc29sdmUobmV3IFJlc3BvbnNlKGJvZHksIG9wdGlvbnMpKVxuICAgICAgfVxuXG4gICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfVxuXG4gICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LnVybCwgdHJ1ZSlcblxuICAgICAgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdpbmNsdWRlJykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoJ3Jlc3BvbnNlVHlwZScgaW4geGhyICYmIHN1cHBvcnQuYmxvYikge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InXG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3QuaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKVxuICAgICAgfSlcblxuICAgICAgeGhyLnNlbmQodHlwZW9mIHJlcXVlc3QuX2JvZHlJbml0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiByZXF1ZXN0Ll9ib2R5SW5pdClcbiAgICB9KVxuICB9XG4gIHNlbGYuZmV0Y2gucG9seWZpbGwgPSB0cnVlXG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy93aGF0d2ctZmV0Y2gvZmV0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5cbmNvbnN0IHVybCA9IGAvYXBpL2NhcnRgO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgY3JlYXRlOiAoe3RleHQsIGlkLCBuYW1lLCBibG9ifSkgPT4ge1xuICAgIGNvbnN0IG1ldGhvZCA9IGBQT1NUYDtcbiAgICAvLyBjb25zdCBuZXdGaWxlTmFtZSA9IGAke2lkLnNwbGl0KGAgYCkuam9pbihgX2ApfWA7XG4gICAgY29uc3QgYm9keSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGJvZHkuYXBwZW5kKGB0ZXh0YCwgdGV4dCk7XG4gICAgYm9keS5hcHBlbmQoYGlkYCwgaWQpO1xuICAgIGJvZHkuYXBwZW5kKGBuYW1lYCwgbmFtZSk7XG4gICAgLy8gYm9keS5hcHBlbmQoYHNvdW5kYCwgYmxvYiwgbmV3RmlsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGZldGNoKHVybCwge21ldGhvZCwgYm9keX0pXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKTtcbiAgfSxcblxuICByZWFkOiAoKSA9PiB7XG4gICAgcmV0dXJuIGZldGNoKGAke3VybH0/aXNBY3RpdmU9dHJ1ZWApXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKTtcbiAgfSxcblxuICByZWFkT25lOiBpZCA9PiB7XG4gICAgY29uc3QgbWV0aG9kID0gYEdFVGA7XG4gICAgcmV0dXJuIGZldGNoKGAke3VybH0vJHtpZH1gLCB7bWV0aG9kfSkudGhlbihyID0+IHIuanNvbigpKTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9saWIvY2FydEFQSS5qcyIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvaW5kZXgnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmFuZG9tQnl0ZSA9IHJlcXVpcmUoJy4vcmFuZG9tL3JhbmRvbS1ieXRlJyk7XG5cbmZ1bmN0aW9uIGVuY29kZShsb29rdXAsIG51bWJlcikge1xuICAgIHZhciBsb29wQ291bnRlciA9IDA7XG4gICAgdmFyIGRvbmU7XG5cbiAgICB2YXIgc3RyID0gJyc7XG5cbiAgICB3aGlsZSAoIWRvbmUpIHtcbiAgICAgICAgc3RyID0gc3RyICsgbG9va3VwKCAoIChudW1iZXIgPj4gKDQgKiBsb29wQ291bnRlcikpICYgMHgwZiApIHwgcmFuZG9tQnl0ZSgpICk7XG4gICAgICAgIGRvbmUgPSBudW1iZXIgPCAoTWF0aC5wb3coMTYsIGxvb3BDb3VudGVyICsgMSApICk7XG4gICAgICAgIGxvb3BDb3VudGVyKys7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZW5jb2RlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvZW5jb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBIZWFkIGZyb20gJy4vY2xhc3Nlcy9IZWFkJztcbmltcG9ydCBDb2xvcnMgZnJvbSAnLi9vYmplY3RzL2NvbG9ycyc7XG5pbXBvcnQgQXVkaW8gZnJvbSAnLi9jbGFzc2VzL0F1ZGlvLmpzJztcbmltcG9ydCBoYW5kbGVTYXZlIGZyb20gJy4vb2JqZWN0cy9TYXZlJztcbmltcG9ydCBDYXJ0QVBJIGZyb20gJy4vbGliL2NhcnRBUEknO1xuXG57XG4gIGxldCBzY2VuZSwgY2FtZXJhLCBmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIG5lYXJQbGFuZSwgZmFyUGxhbmUsIEhFSUdIVCwgV0lEVEg7XG4gIGxldCBnbG9iYWxMaWdodCwgc2hhZG93TGlnaHQsIGJhY2tMaWdodCwgbGlnaHQsIHJlbmRlcmVyLCBjb250YWluZXIsIGxvYWRlZDtcbiAgbGV0IGhlYWQsIHN0YXJzLCB3aW5kb3dIYWxmWCwgd2luZG93SGFsZlksIGNvbG9yLCBhdWRpbywgU3BlZWNoVGV4dDtcblxuICAvLyB2YXJzIGZvciBkYXQuZ3VpXG4gIGxldCBjb250cm9sbGVyLCBndWk7XG4gIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc2F2ZWApO1xuXG4gIGxldCBtb3VzZVBvcyA9IHsgeDogMCwgeTogMH07XG5cbiAgbGV0IHN0YXJBcnJheSA9IFtdO1xuXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgLy8gY3JlYXRlIHNub3dcbiAgICBwYXJ0aWNsZXNKUy5sb2FkKCdwYXJ0aWNsZXMtanMnLCAnLi4vYXNzZXRzL3BhcnRpY2xlcy5qc29uJywgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2NhbGxiYWNrIC0gcGFydGljbGVzLmpzIGNvbmZpZyBsb2FkZWQnKTtcbiAgICB9KTtcblxuICAgIGNyZWF0ZVNjZW5lKCk7XG4gICAgY3JlYXRlTGlnaHRzKCk7XG5cbiAgICBhdWRpbyA9IG5ldyBBdWRpbygpOyAvLyBoYW5kbGUgYXVkaW9cbiAgICBoZWFkID0gbmV3IEhlYWQoKTsgLy8gc2hvdyBhbmQgaGFuZGxlIGhlYWRcbiAgICBzY2VuZS5hZGQoaGVhZC5tZXNoKTtcbiAgICBjb25zb2xlLmxvZyhhdWRpby5pZCk7XG4gICAgLy8gc2VuZCBvYmplY3RzIHRvIHNhdmUgb24gY2xpY2tcbiAgICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT4ge1xuICAgICAgaGFuZGxlU2F2ZSh7XG4gICAgICAgIHRleHQ6IGF1ZGlvLnR4dCxcbiAgICAgICAgaWQ6IGF1ZGlvLmlkXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGd1aSA9IG5ldyBkYXQuR1VJKCk7XG4gICAgY29udHJvbGxlciA9IG5ldyBjb250cm9sbGVyVGV4dCgpO1xuICAgIGd1aUNvbnRyb2xsZXIoWydza2luJywgJ2ZyZWNrbGVzJywgJ2V5ZScsICdnbGFzc2VzJywgJ2hhdCddKTsgLy8gYWRkIGd1aSBmb3IgYXJyYXkgb2JqZWN0IGFuZCBzZXQgY29sb3JzIG9uIGNvbG9yIGNoYW5nZVxuXG4gICAgd2luZG93LnNjZW5lID0gc2NlbmU7IC8vIHNldCBzY2VuZSBmb3IgZXh0ZW5zaW9uXG5cbiAgICBsb29wKCk7XG4gIH07XG5cbiAgY29uc3QgZ3VpQ29udHJvbGxlciA9IGtleXMgPT4ge1xuICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgZ3VpLmFkZENvbG9yKGNvbnRyb2xsZXIsIGtleSkub25DaGFuZ2UoKCkgPT4ge1xuXG4gICAgICAgIC8vIHNldCByaWdodCBjb2xvciBmb3IgbWF0ZXJpYWxcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICBjYXNlICdza2luJzogQ29sb3JzLnNraW4gPSBjb250cm9sbGVyLnNraW47XG4gICAgICAgICAgY2FzZSAnZnJlY2tsZXMnOiBDb2xvcnMuZnJlY2tsZXMgPSBjb250cm9sbGVyLmZyZWNrbGVzO1xuICAgICAgICAgIGNhc2UgJ2V5ZSc6IENvbG9ycy5leWUgPSBjb250cm9sbGVyLmV5ZTtcbiAgICAgICAgICBjYXNlICdnbGFzc2VzJzogQ29sb3JzLmdsYXNzZXMgPSBjb250cm9sbGVyLmdsYXNzZXM7XG4gICAgICAgICAgY2FzZSAnaGF0JzogQ29sb3JzLmhhdCA9IGNvbnRyb2xsZXIuaGF0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy9yZW1vdmUgY3VycmVudCBoZWFkIGFuZCBtYWtlIGEgbmV3IG9uZSB0byBzZXQgY3VycmVudCBjb2xvclxuICAgICAgICBzY2VuZS5yZW1vdmUoaGVhZC5tZXNoKTtcbiAgICAgICAgY3JlYXRlSGVhZCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBkZWMyaGV4ID0gKGkpID0+IHtcbiAgICB2YXIgcmVzdWx0ID0gXCIweDAwMDAwMFwiO1xuICAgIGlmIChpID49IDAgJiYgaSA8PSAxNSkge1xuICAgICAgcmVzdWx0ID0gXCIweDAwMDAwXCIgKyBpLnRvU3RyaW5nKDE2KTtcbiAgICB9IGVsc2UgaWYgKGkgPj0gMTYgJiYgaSA8PSAyNTUpIHtcbiAgICAgIHJlc3VsdCA9IFwiMHgwMDAwXCIgKyBpLnRvU3RyaW5nKDE2KTtcbiAgICB9IGVsc2UgaWYgKGkgPj0gMjU2ICYmIGkgPD0gNDA5NSkge1xuICAgICAgcmVzdWx0ID0gXCIweDAwMFwiICsgaS50b1N0cmluZygxNik7XG4gICAgfSBlbHNlIGlmIChpID49IDQwOTYgJiYgaSA8PSA2NTUzNSkge1xuICAgICAgcmVzdWx0ID0gXCIweDAwXCIgKyBpLnRvU3RyaW5nKDE2KTtcbiAgICB9IGVsc2UgaWYgKGkgPj0gNjU1MzUgJiYgaSA8PSAxMDQ4NTc1KSB7XG4gICAgICByZXN1bHQgPSBcIjB4MFwiICsgaS50b1N0cmluZygxNik7XG4gICAgfSBlbHNlIGlmIChpID49IDEwNDg1NzUpIHtcbiAgICAgIHJlc3VsdCA9ICcweCcgKyBpLnRvU3RyaW5nKDE2KTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdC5sZW5ndGggPT0gOCkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBjcmVhdGVTY2VuZSA9ICgpID0+IHs7XG4gICAgSEVJR0hUID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIFdJRFRIID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgd2luZG93SGFsZlggPSBXSURUSCAvIDI7XG4gICAgd2luZG93SGFsZlkgPSBIRUlHSFQgLyAyO1xuXG4gICAgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICBhc3BlY3RSYXRpbyA9IFdJRFRIIC8gSEVJR0hUO1xuICAgIGZpZWxkT2ZWaWV3ID0gNTA7XG4gICAgbmVhclBsYW5lID0gMTtcbiAgICBmYXJQbGFuZSA9IDIwMDA7XG4gICAgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKGZpZWxkT2ZWaWV3LCBhc3BlY3RSYXRpbywgbmVhclBsYW5lLCBmYXJQbGFuZSk7XG4gICAgY2FtZXJhLnBvc2l0aW9uLnggPSAwO1xuICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gNzA7XG4gICAgY2FtZXJhLnBvc2l0aW9uLnkgPSAwO1xuXG4gICAgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7YWxwaGE6IHRydWUsIGFudGlhbGlhczogdHJ1ZX0pO1xuICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8oXG4gICAgICB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb1xuICAgICAgPyB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb1xuICAgICAgOiAxKVxuICAgIHJlbmRlcmVyLnNldFNpemUoV0lEVEgsIEhFSUdIVCk7XG4gICAgcmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlO1xuICAgIHJlbmRlcmVyLnNoYWRvd01hcC50eXBlID0gVEhSRUUuUENGU29mdFNoYWRvd01hcDtcblxuICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25XaW5kb3dSZXNpemUsIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUsIGZhbHNlKTtcblxuICB9XG5cbiAgY29uc3Qgb25XaW5kb3dSZXNpemUgPSAoKSA9PiB7XG4gICAgSEVJR0hUID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIFdJRFRIID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgd2luZG93SGFsZlggPSBXSURUSCAvIDI7XG4gICAgd2luZG93SGFsZlkgPSBIRUlHSFQgLyAyO1xuICAgIHJlbmRlcmVyLnNldFNpemUoV0lEVEgsIEhFSUdIVCk7XG4gICAgY2FtZXJhLmFzcGVjdCA9IFdJRFRIIC8gSEVJR0hUO1xuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSBlID0+IHtcbiAgICBtb3VzZVBvcyA9IHtcbiAgICAgIHg6IGV2ZW50LmNsaWVudFgsXG4gICAgICB5OiBldmVudC5jbGllbnRZXG4gICAgfTtcbiAgfVxuXG4gIGxldCBsb2FkZXJNYW5hZ2VyID0gbmV3IFRIUkVFLkxvYWRpbmdNYW5hZ2VyKCk7XG5cbiAgY29uc3Qgb25TdGFydCA9ICh1cmwsIGl0ZW1zTG9hZGVkLCBpdGVtc1RvdGFsKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1N0YXJ0ZWQgbG9hZGluZyBmaWxlOiAnICsgdXJsICsgJy5cXG5Mb2FkZWQgJyArIGl0ZW1zTG9hZGVkICsgJyBvZiAnICsgaXRlbXNUb3RhbCArICcgZmlsZXMuJyk7XG4gIH1cblxuICBjb25zdCBvbkxvYWQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0xvYWRpbmcgY29tcGxldGUhJyk7XG4gICAgZmluaXNoZWRMb2FkaW5nKCk7XG4gIH1cblxuICBjb25zdCBvblByb2dyZXNzID0gKHVybCwgaXRlbXNMb2FkZWQsIGl0ZW1zVG90YWwpID0+IHtcbiAgICBjb25zb2xlLmxvZygnTG9hZGluZyBmaWxlOiAnICsgdXJsICsgJy5cXG5Mb2FkZWQgJyArIGl0ZW1zTG9hZGVkICsgJyBvZiAnICsgaXRlbXNUb3RhbCArICcgZmlsZXMuJyk7XG4gIH1cblxuICBjb25zdCBvbkVycm9yID0gKHVybCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgbG9hZGluZyAnICsgdXJsKTtcbiAgfVxuXG4gIGNvbnN0IGZpbmlzaGVkTG9hZGluZyA9ICgpID0+IHtcbiAgICBsb2FkZWQgPSB0cnVlO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlV2luZG93UmVzaXplID0gZSA9PiB7XG4gICAgSEVJR0hUID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIFdJRFRIID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgcmVuZGVyZXIuc2V0U2l6ZShXSURUSCwgSEVJR0hUKTtcbiAgICBjYW1lcmEuYXNwZWN0ID0gV0lEVEggLyBIRUlHSFQ7XG4gICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgfVxuXG4gIGxldCBpc01vYmlsZSA9IC9pUGhvbmV8QW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbiAgY29uc3QgY3JlYXRlTGlnaHRzID0gKCkgPT4ge1xuXG4gICAgZ2xvYmFsTGlnaHQgPSBuZXcgVEhSRUUuSGVtaXNwaGVyZUxpZ2h0KDB4ZmZmZmZmLCAweDU1NTU1NSwgLjkpO1xuXG4gICAgc2hhZG93TGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZiwgLjMpO1xuICAgIHNoYWRvd0xpZ2h0LnBvc2l0aW9uLnNldCgxMDAsIDI1MCwgMTc1KTtcbiAgICBzaGFkb3dMaWdodC5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICAvLyBzaGFkb3dMaWdodC5zaGFkb3cuY2FtZXJhLmxlZnQgPSAtMTUwO1xuICAgIC8vIHNoYWRvd0xpZ2h0LnNoYWRvdy5jYW1lcmEucmlnaHQgPSAxNTA7XG4gICAgLy8gc2hhZG93TGlnaHQuc2hhZG93LmNhbWVyYS50b3AgPSAxNTA7XG4gICAgLy8gc2hhZG93TGlnaHQuc2hhZG93LmNhbWVyYS5ib3R0b20gPSAtMTUwO1xuICAgIC8vIHNoYWRvd0xpZ2h0LnNoYWRvdy5jYW1lcmEubmVhciA9IDE7XG4gICAgLy8gc2hhZG93TGlnaHQuc2hhZG93LmNhbWVyYS5mYXIgPSAxMDAwO1xuXG4gICAgYmFja0xpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYsIC4yKTtcbiAgICBiYWNrTGlnaHQucG9zaXRpb24uc2V0KC0xMDAsIDIwMCwgMTUwKTtcbiAgICBiYWNrTGlnaHQuY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgLy9iYWNrTGlnaHQucG9zaXRpb24uc2V0KDEwMCwgMTAwLCAtMjAwKTtcblxuICAgIGlmIChpc01vYmlsZSlcbiAgICAgIHNoYWRvd0xpZ2h0LnNoYWRvdy5tYXBTaXplLndpZHRoID0gc2hhZG93TGlnaHQuc2hhZG93Lm1hcFNpemUuaGVpZ2h0ID0gMTAyNDtcbiAgICBpZiAoIWlzTW9iaWxlKVxuICAgICAgc2hhZG93TGlnaHQuc2hhZG93Lm1hcFNpemUud2lkdGggPSBzaGFkb3dMaWdodC5zaGFkb3cubWFwU2l6ZS5oZWlnaHQgPSAyMDQ4O1xuXG4gICAgc2NlbmUuYWRkKGdsb2JhbExpZ2h0KTtcbiAgICBzY2VuZS5hZGQoc2hhZG93TGlnaHQpO1xuICAgIHNjZW5lLmFkZChiYWNrTGlnaHQpO1xuICAgIHNjZW5lLmFkZCggbmV3IFRIUkVFLkFtYmllbnRMaWdodCggMHhlYWRlYWQsIDAuMSApKTtcbiAgfVxuXG4gIC8vIGNsYXNzIFN0YXIge1xuICAvLyAgIGNvbnN0cnVjdG9yKCl7XG4gIC8vXG4gIC8vICAgU1RBUlxuICAvLyAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy9cbiAgLy8gICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgLy9cbiAgLy8gICBsZXQgcHRzID0gW10sXG4gIC8vICAgICBudW1QdHMgPSA1O1xuICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUHRzICogMjsgaSsrKSB7XG4gIC8vICAgICBsZXQgbCA9IGkgJSAyID09IDFcbiAgLy8gICAgICAgPyAxXG4gIC8vICAgICAgIDogMjtcbiAgLy8gICAgIGxldCBhID0gaSAvIG51bVB0cyAqIE1hdGguUEk7XG4gIC8vICAgICBwdHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMihNYXRoLmNvcyhhKSAqIGwsIE1hdGguc2luKGEpICogbCkpO1xuICAvLyAgIH1cbiAgLy8gICBsZXQgc3RhclNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKHB0cyk7XG4gIC8vXG4gIC8vICAgbGV0IGV4dHJ1ZGVTZXR0aW5ncyA9IHtcbiAgLy8gICAgIGFtb3VudDogMC41LFxuICAvLyAgICAgc3RlcHM6IDEsXG4gIC8vICAgICBiZXZlbEVuYWJsZWQ6IGZhbHNlXG4gIC8vICAgfTtcbiAgLy8gICBsZXQgc3Rhckdlb20gPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHN0YXJTaGFwZSwgZXh0cnVkZVNldHRpbmdzKTtcbiAgLy8gICBsZXQgc3RhciA9IG5ldyBUSFJFRS5NZXNoKHN0YXJHZW9tLCB5ZWxsb3dNYXQpO1xuICAvLyAgIHN0YXIucm90YXRpb24ueCA9IE1hdGguUEkgLyAyO1xuICAvLyAgIHRoaXMubWVzaC5hZGQoc3Rhcik7XG4gIC8vIH1cbiAgLy8gfVxuICAvL1xuICAvLyBsZXQgU3RhcnNHcm91cCA9IGZ1bmN0aW9uKCkge1xuICAvL1xuICAvLyAgICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gIC8vXG4gIC8vICAgICB0aGlzLm5TdGFycyA9IDE1O1xuICAvL1xuICAvLyAgICAgbGV0IHN0ZXBBbmdsZSA9IE1hdGguUEkgKiAyIC8gdGhpcy5uU3RhcnM7XG4gIC8vXG4gIC8vICAgICAgQ3JlYXRlIHRoZSBTdGFyc1xuICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5TdGFyczsgaSsrKSB7XG4gIC8vXG4gIC8vICAgICAgIHRoaXMucyA9IG5ldyBTdGFyKCk7XG4gIC8vICAgICAgIGxldCBhID0gc3RlcEFuZ2xlICogaTtcbiAgLy8gICAgICAgbGV0IHIgPSAxNTtcbiAgLy9cbiAgLy8gICAgICAgdGhpcy5zLm1lc2gucG9zaXRpb24ueSA9IE1hdGguc2luKGEpICogcjtcbiAgLy8gICAgICAgdGhpcy5zLm1lc2gucG9zaXRpb24ueCA9IE1hdGguY29zKGEpICogcjtcbiAgLy9cbiAgLy8gICAgICAgdGhpcy5zLm1lc2gucm90YXRpb24ueiA9IGEgKyBNYXRoLlBJIC8gMjtcbiAgLy8gICAgICAgdGhpcy5zLm1lc2gucG9zaXRpb24ueiA9IDAgLSBNYXRoLnJhbmRvbSgpICogMztcbiAgLy9cbiAgLy8gICAgICAgICByYW5kb20gc2NhbGUgZm9yIGVhY2ggY2xvdWRcbiAgLy8gICAgICAgbGV0IHNjID0gMC41ICsgTWF0aC5yYW5kb20oKSAqIC42O1xuICAvLyAgICAgICB0aGlzLnMubWVzaC5zY2FsZS5zZXQoc2MsIHNjLCBzYyk7XG4gIC8vXG4gIC8vICAgICAgIHRoaXMubWVzaC5hZGQodGhpcy5zLm1lc2gpO1xuICAvLyAgICAgICBzdGFyQXJyYXkucHVzaCh0aGlzLnMpO1xuICAvLyAgICAgfVxuICAvLyAgICAgdGhpcy5tZXNoLnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcbiAgLy8gfVxuXG4gIGNvbnN0IGNyZWF0ZUhlYWQgPSAoKSA9PiB7XG4gICAgaGVhZC5uYW1lID0gXCJIZWFkXCI7XG4gICAgaGVhZCA9IG5ldyBIZWFkKCk7XG4gICAgaGVhZC5pZGxlKCk7XG4gICAgc2NlbmUuYWRkKGhlYWQubWVzaCk7XG4gICAgLy9zdGFycyA9IG5ldyBTdGFyc0dyb3VwKCk7XG4gICAgLy9zY2VuZS5hZGQoc3RhcnMubWVzaCk7XG4gIH1cblxuICBjb25zdCBjcmVhdGVDaGFyYWN0ZXIgPSAoKSA9PiB7XG4gICAgY3JlYXRlSGVhZCgpO1xuICAgIGhlYWQubWVzaC5wb3NpdGlvbi5zZXQoMCwgMiwgMCk7XG4gICAgLy9zdGFycy5tZXNoLnBvc2l0aW9uLnNldCgwLCAxMCwgMCk7XG4gIH1cblxuICAvL0JMSU5LXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIGxldCBpc0JsaW5raW5nID0gZmFsc2U7XG4gIGNvbnN0IGJsaW5rTG9vcCA9ICgpID0+IHtcbiAgICBpc0JsaW5raW5nID0gZmFsc2U7XG5cbiAgICBpZiAoKCFpc0JsaW5raW5nKSAmJiAoTWF0aC5yYW5kb20oKSA+IDAuOTkpKSB7XG4gICAgICBpc0JsaW5raW5nID0gdHJ1ZTtcbiAgICAgIGJsaW5rKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgYmxpbmsgPSAoKSA9PiB7XG4gICAgaGVhZC5leWVzLnNjYWxlLnkgPSAxO1xuICAgIFR3ZWVuTWF4LnRvKGhlYWQuZXllcy5zY2FsZSwgLjA3LCB7XG4gICAgICB5OiAwLFxuICAgICAgeW95bzogdHJ1ZSxcbiAgICAgIHJlcGVhdDogMSxcbiAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpc0JsaW5raW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvL0hFQUQgQU5JTUFUSU9OU1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIC8vIEhlYWQucHJvdG90eXBlLmRpenp5ID0gZnVuY3Rpb24oKSB7XG4gIC8vXG4gIC8vICAgICBsZXQgZGlzdGFuY2UgPSAxO1xuICAvL1xuICAvLyAgICAgdGhpcy5oZWFkLnJvdGF0aW9uLnogPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDUpICogTWF0aC5QSSAqIDAuMDE7XG4gIC8vICAgICB0aGlzLmhlYWQucm90YXRpb24ueCA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAxKSAqIE1hdGguUEkgKiAwLjAxO1xuICAvLyAgICAgdGhpcy5oZWFkLnJvdGF0aW9uLnkgPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDUpICogTWF0aC5QSSAqIDAuMDE7XG4gIC8vXG4gIC8vICAgICB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi54ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDA1KSAqIC1kaXN0YW5jZTtcbiAgLy8gICAgIHRoaXMuZXllQmx1ZUxlZnQucG9zaXRpb24ueCA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwNSkgKiBkaXN0YW5jZTtcbiAgLy8gICAgIHRoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLnkgPSBNYXRoLmNvcyhEYXRlLm5vdygpICogMC4wMDUpICogLWRpc3RhbmNlO1xuICAvLyAgICAgdGhpcy5leWVCbHVlTGVmdC5wb3NpdGlvbi55ID0gTWF0aC5jb3MoRGF0ZS5ub3coKSAqIDAuMDA1KSAqIGRpc3RhbmNlO1xuICAvLyAgICAgdGhpcy5leWVCcm93UmlnaHQucG9zaXRpb24ueSA9IE1hdGguY29zKERhdGUubm93KCkgKiAwLjAwNSkgKiAtZGlzdGFuY2U7XG4gIC8vICAgICB0aGlzLmV5ZUJyb3dMZWZ0LnBvc2l0aW9uLnkgPSBNYXRoLmNvcyhEYXRlLm5vdygpICogMC4wMDUpICogZGlzdGFuY2U7XG4gIC8vXG4gIC8vICAgICB0aGlzLm1vdXN0YWNoZS5yb3RhdGlvbi56ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDA1KSAqIE1hdGguUEkgKiAwLjA1O1xuICAvL1xuICAvLyAgICAgYmxpbmtMb29wKCk7XG4gIC8vICAgICBzdGFycy5zcGluU2NhbGUoKTtcbiAgLy9cbiAgLy8gICB9XG5cbiAgLy9TVEFSR1JPVVBcbiAgLy8gU3RhcnNHcm91cC5wcm90b3R5cGUuc3BpblNjYWxlID0gZnVuY3Rpb24oKSB7XG4gIC8vXG4gIC8vICAgICB0aGlzLm1lc2gucm90YXRpb24ueiArPSAwLjAyO1xuICAvL1xuICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFyQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgLy8gICAgICAgIHN0YXJBcnJheVtpXS5tZXNoLnJvdGF0aW9uLnggPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMSkgKiBNYXRoLlBJICogMC4xIDtcbiAgLy8gICAgICAgc3RhckFycmF5W2ldLm1lc2gucm90YXRpb24ueiArPSAwIC0gTWF0aC5yYW5kb20oKSAqIDAuMTU7XG4gIC8vICAgICAgIHN0YXJBcnJheVtpXS5tZXNoLnJvdGF0aW9uLnggKz0gMCAtIE1hdGgucmFuZG9tKCkgKiAwLjA1O1xuICAvL1xuICAvLyAgICAgfVxuICAvLyAgIH1cblxuICBjbGFzcyBjb250cm9sbGVyVGV4dCB7XG4gICAgY29uc3RydWN0b3IgKCl7XG4gICAgICB0aGlzLnNraW4gPSBDb2xvcnMuc2tpbjtcbiAgICAgIHRoaXMuZnJlY2tsZXMgPSBDb2xvcnMuZnJlY2tsZXM7XG4gICAgICB0aGlzLmV5ZSA9IENvbG9ycy5leWU7XG4gICAgICB0aGlzLmdsYXNzZXMgPSBDb2xvcnMuZ2xhc3NlcztcbiAgICAgIHRoaXMuaGF0ID0gQ29sb3JzLmhhdDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBsb29wID0gKCkgPT4ge1xuICAgIGJsaW5rTG9vcCgpO1xuICAgIC8vaGVhZC5kaXp6eSgpO1xuICAgIGxldCB4VGFyZ2V0ID0gKG1vdXNlUG9zLnggLSB3aW5kb3dIYWxmWCk7XG4gICAgbGV0IHlUYXJnZXQgPSAobW91c2VQb3MueSAtIHdpbmRvd0hhbGZZKTtcblxuICAgIC8vY29uc29sZS5sb2coeFRhcmdldCk7XG5cbiAgICBoZWFkLmlkbGUoeFRhcmdldCwgeVRhcmdldCk7XG4gICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgfVxuXG4gIC8vd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBpbml0LCBmYWxzZSk7XG5cbiAgaW5pdCgpO1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvc2NyaXB0LmpzIiwiaW1wb3J0IFNvdW5kQVBJIGZyb20gJy4uL2xpYi9zb3VuZEFQSSc7XG5pbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcblxudmFyIFNwZWVjaFJlY29nbml0aW9uID0gU3BlZWNoUmVjb2duaXRpb24gfHwgd2Via2l0U3BlZWNoUmVjb2duaXRpb25cbnZhciBTcGVlY2hHcmFtbWFyTGlzdCA9IFNwZWVjaEdyYW1tYXJMaXN0IHx8IHdlYmtpdFNwZWVjaEdyYW1tYXJMaXN0XG52YXIgU3BlZWNoUmVjb2duaXRpb25FdmVudCA9IFNwZWVjaFJlY29nbml0aW9uRXZlbnQgfHwgd2Via2l0U3BlZWNoUmVjb2duaXRpb25FdmVudFxuY29uc3QgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuXG5sZXQgYXVkaW9DdHgsIHJlY29nbml0aW9uO1xubGV0IHRyYW5zY3JpcHQgPSBcIlwiO1xubGV0IGF1ZGlvQ2h1bmtzID0gW107XG5cbmNvbnN0ICR0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZpZWxkYCk7XG5jb25zdCAkcmVjb3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHJlY29yZGApO1xuY29uc3QgJGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGF1ZGlvX2NvbnRyb2xzYCk7XG5jb25zdCAkc3RvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzdG9wYCk7XG5cbmxldCBhdWRpb1NvdXJjZXMgPSBbXSxcbiAgICBwaXRjaFNoaWZ0ZXJQcm9jZXNzb3I7XG5cbmxldCBhdWRpb1NvdXJjZUluZGV4ID0gMCxcbiAgICBhdWRpb1Zpc3VhbGlzYXRpb25JbmRleCA9IDAsXG4gICAgdmFsaWRHcmFuU2l6ZXMgPSBbMjU2LCA1MTIsIDEwMjQsIDIwNDgsIDQwOTYsIDgxOTJdLFxuICAgIGdyYWluU2l6ZSA9IHZhbGlkR3JhblNpemVzWzJdLFxuICAgIHBpdGNoUmF0aW8gPSAxLjAsXG4gICAgb3ZlcmxhcFJhdGlvID0gMC41MDtcblxuY29uc3QgaWQgPSBzaG9ydElkLmdlbmVyYXRlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIC8vIGhhbmRsZSBTcGVlY2hSZWNvZ25pdGlvblxuICAgIHJlY29nbml0aW9uID0gbmV3IFNwZWVjaFJlY29nbml0aW9uKCk7XG4gICAgdGhpcy5zcGVlY2hTZXR0aW5ncygpO1xuXG4gICAgcmVjb2duaXRpb24ub25yZXN1bHQgPSBldmVudCA9PiB0aGlzLmdvdFJlc3VsdChldmVudCk7XG4gICAgcmVjb2duaXRpb24ub25zcGVlY2hlbmQgPSBlID0+IHRoaXMub25TcGVlY2hFbmQoZSk7XG4gICAgJHRleHQuYWRkRXZlbnRMaXN0ZW5lcihgYmx1cmAsICgpID0+IHRoaXMudHh0ID0gJHRleHQudmFsdWUpO1xuXG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoeyBhdWRpbzogdHJ1ZSB9KVxuICAgIC50aGVuKHN0cmVhbSA9PiB7XG4gICAgICB0aGlzLm1lZGlhUmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihzdHJlYW0pO1xuXG4gICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tU3RhcnQgUmVjb3JkaW5nLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgICAgJHJlY29yZC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsICgpID0+IHtcbiAgICAgICAgIHRoaXMubWVkaWFSZWNvcmRlci5zdGFydCgpO1xuICAgICAgICAgcmVjb2duaXRpb24uc3RhcnQoKTtcbiAgICAgICAgICRyZWNvcmQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgICB0aGlzLm1lZGlhUmVjb3JkZXIuYWRkRXZlbnRMaXN0ZW5lcihgZGF0YWF2YWlsYWJsZWAsICBlID0+IGF1ZGlvQ2h1bmtzLnB1c2goZS5kYXRhKSk7IC8vIGFkZCBhdWRpb2NodW5rIHRvIGFycmF5XG5cbiAgICAgIC8vIHdoZW4gbWVkaWFSZWNvcmRlciBzdG9wcywgbWFrZSBhbmQgaGFuZGxlIGF1ZGlvIGJsb2JcbiAgICAgIHRoaXMubWVkaWFSZWNvcmRlci5hZGRFdmVudExpc3RlbmVyKGBzdG9wYCwgKCkgPT4ge1xuXG4gICAgICAgIC8vIGdpdmUgbGluayB0byBhdWRpbyBjb250cm9scyB0byBwbGF5IGFuZCBjb250cm9sIHRoZSBzb3VuZFxuICAgICAgICB0aGlzLmJsb2IgPSBuZXcgQmxvYihhdWRpb0NodW5rcywge3R5cGUgOiAnYXVkaW8vb2dnJ30pOyAvLyBjcmVhdGUgYmxvYiBmcm9tIGF1ZGlvY2h1bmtzXG4gICAgICAgIC8vIGNvbnN0IGJsb2JVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuYmxvYik7IC8vIG1ha2UgdXJsIGZyb20gYmxvYiBzdHJlYW1cbiAgICAgICAgLy8gJGF1ZGlvLnNyYyA9IGJsb2JVcmw7XG5cbiAgICAgICAgU291bmRBUEkuY3JlYXRlKHtcbiAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICBibG9iOiB0aGlzLmJsb2JcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXVkaW9DdHggPSBuZXcgQXVkaW9Db250ZXh0KCk7XG5cbiAgICAgICAgLy8gY29uc3Qgc291cmNlID0gYXVkaW9DdHguY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKCRhdWRpbyk7IC8vIGdldCBhdWRpbyBmcm9tXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PsKge1xuICAgICAgICAgIGNvbnN0IGJ1ZmZlckxvYWRlciA9IG5ldyBCdWZmZXJMb2FkZXIoXG4gICAgICAgICAgICBhdWRpb0N0eCwgW2AuL3VwbG9hZHMvJHt0aGlzLmlkfS5vZ2dgXSwgYnVmZmVyTGlzdCA9PiB7XG5cbiAgICAgICAgICAgICAgbGV0IGxvb3AgPSBmYWxzZTtcbiAgICAgICAgICAgICAgbGV0IHNvdXJjZTtcblxuICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcmVwZWF0YCkuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxvb3AgPSAhbG9vcDtcbiAgICAgICAgICAgICAgICBzb3VyY2Uuc3RvcCgpO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjb25zdCAkcGl0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGl0Y2hgKTtcbiAgICAgICAgICAgICAgJHBpdGNoLmFkZEV2ZW50TGlzdGVuZXIoYGNoYW5nZWAsICgpID0+IHtcbiAgICAgICAgICAgICAgICBwaXRjaFJhdGlvID0gcGFyc2VGbG9hdCgkcGl0Y2gudmFsdWUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBpdGNoUmF0aW8pO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAkYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc291cmNlID0gJyc7XG4gICAgICAgICAgICAgICAgc291cmNlID0gYXVkaW9DdHguY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgICAgICAgICAgICAgc291cmNlLmJ1ZmZlciA9IGJ1ZmZlckxpc3RbMF07XG5cbiAgICAgICAgICAgICAgICAvLyBzb3VyY2UuY29ubmVjdChhdWRpb0N0eC5kZXN0aW5hdGlvbilcblxuICAgICAgICAgICAgICAgIHNvdXJjZS5jb25uZWN0KHBpdGNoU2hpZnRlclByb2Nlc3Nvcik7XG4gICAgICAgICAgICAgICAgc291cmNlLmxvb3AgPSBsb29wO1xuICAgICAgICAgICAgICAgIHNvdXJjZS5zdGFydCgpO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBidWZmZXJMb2FkZXIubG9hZCgpO1xuICAgICAgICAgIHRoaXMuaW5pdFByb2Nlc3NvcigpO1xuICAgICAgICAgIC8vIHRoaXMuaW5pdFNsaWRlcnMoKTtcblxuICAgICAgICB9LCAxMDAwKTtcblxuXG4gICAgICAgIGNvbnN0IG92ZXJsYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgb3ZlcmxhcGApO1xuICAgICAgICBvdmVybGFwLmFkZEV2ZW50TGlzdGVuZXIoYGNoYW5nZWAsICgpID0+IHtcbiAgICAgICAgICBvdmVybGFwUmF0aW8gPSBvdmVybGFwLnZhbHVlO1xuICAgICAgICAgIGNvbnNvbGUubG9nKG92ZXJsYXAudmFsdWUpO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIGF1ZGlvQ2h1bmtzID0gW107XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uU3BlZWNoRW5kKGUpwqB7XG4gICAgdGhpcy5tZWRpYVJlY29yZGVyLnN0b3AoKTtcbiAgICByZWNvZ25pdGlvbi5zdG9wKCk7XG4gICAgJHJlY29yZC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICRyZWNvcmQudGV4dENvbnRlbnQgPSAnT3BuaWV1dyBwcm9iZXJlbj8nO1xuICAgIHRoaXMudHh0ID0gJHRleHQudmFsdWU7XG4gIH1cblxuICBnb3RSZXN1bHQoZXZlbnQpIHtcbiAgICBjb25zdCBsYXN0ID0gZXZlbnQucmVzdWx0cy5sZW5ndGggLSAxO1xuICAgIHRyYW5zY3JpcHQgPSBldmVudC5yZXN1bHRzW2xhc3RdWzBdLnRyYW5zY3JpcHQ7XG4gICAgJHRleHQudmFsdWUgPSB0cmFuc2NyaXB0O1xuICB9XG5cbiAgc3BlZWNoU2V0dGluZ3MoKSB7XG4gICAgcmVjb2duaXRpb24uY29udGludW91cyA9IGZhbHNlO1xuICAgIHJlY29nbml0aW9uLmxhbmcgPSAnbmwtQkUnO1xuICAgIHJlY29nbml0aW9uLmludGVyaW1SZXN1bHRzID0gZmFsc2U7XG4gICAgcmVjb2duaXRpb24ubWF4QWx0ZXJuYXRpdmVzID0gMTtcbiAgfVxuXG4gIGluaXRQcm9jZXNzb3IoKSB7XG5cbiAgICBjb25zdCBsaW5lYXJJbnRlcnBvbGF0aW9uID0gKGEsIGIsIHQpID0+IHtcbiAgICAgIHJldHVybiBhICsgKGIgLSBhKSAqIHQ7XG4gICAgfTtcblxuICAgIGlmIChwaXRjaFNoaWZ0ZXJQcm9jZXNzb3IpIHtcbiAgICAgIHBpdGNoU2hpZnRlclByb2Nlc3Nvci5kaXNjb25uZWN0KCk7XG4gICAgfVxuXG4gICAgaWYgKGF1ZGlvQ3R4LmNyZWF0ZVNjcmlwdFByb2Nlc3Nvcikge1xuICAgICAgcGl0Y2hTaGlmdGVyUHJvY2Vzc29yID0gYXVkaW9DdHguY3JlYXRlU2NyaXB0UHJvY2Vzc29yKGdyYWluU2l6ZSwgMSwgMSk7XG4gICAgfSBlbHNlIGlmIChhdWRpb0N0eC5jcmVhdGVKYXZhU2NyaXB0Tm9kZSkge1xuICAgICAgcGl0Y2hTaGlmdGVyUHJvY2Vzc29yID0gYXVkaW9DdHguY3JlYXRlSmF2YVNjcmlwdE5vZGUoZ3JhaW5TaXplLCAxLCAxKTtcbiAgICB9XG5cbiAgICBwaXRjaFNoaWZ0ZXJQcm9jZXNzb3IuYnVmZmVyID0gbmV3IEZsb2F0MzJBcnJheShncmFpblNpemUgKiAyKTtcbiAgICBwaXRjaFNoaWZ0ZXJQcm9jZXNzb3IuZ3JhaW5XaW5kb3cgPSB0aGlzLmhhbm5XaW5kb3coZ3JhaW5TaXplKTtcblxuICAgIHBpdGNoU2hpZnRlclByb2Nlc3Nvci5vbmF1ZGlvcHJvY2VzcyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgIHZhciBpbnB1dERhdGEgPSBldmVudC5pbnB1dEJ1ZmZlci5nZXRDaGFubmVsRGF0YSgwKTtcbiAgICAgIHZhciBvdXRwdXREYXRhID0gZXZlbnQub3V0cHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKDApO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgaW5wdXREYXRhLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgLy8gQXBwbHkgdGhlIHdpbmRvdyB0byB0aGUgaW5wdXQgYnVmZmVyXG4gICAgICAgIGlucHV0RGF0YVtpXSAqPSB0aGlzLmdyYWluV2luZG93W2ldO1xuXG4gICAgICAgIC8vIFNoaWZ0IGhhbGYgb2YgdGhlIGJ1ZmZlclxuICAgICAgICB0aGlzLmJ1ZmZlcltpXSA9IHRoaXMuYnVmZmVyW2kgKyBncmFpblNpemVdO1xuXG4gICAgICAgIC8vIEVtcHR5IHRoZSBidWZmZXIgdGFpbFxuICAgICAgICB0aGlzLmJ1ZmZlcltpICsgZ3JhaW5TaXplXSA9IDAuMDtcbiAgICAgIH1cblxuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBwaXRjaCBzaGlmdGVkIGdyYWluIHJlLXNhbXBsaW5nIGFuZCBsb29waW5nIHRoZSBpbnB1dFxuICAgICAgdmFyIGdyYWluRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoZ3JhaW5TaXplICogMik7XG4gICAgICBmb3IgKHZhciBpID0gMCwgaiA9IDAuMDsgaSA8IGdyYWluU2l6ZTsgaSsrLCBqICs9IHBpdGNoUmF0aW8pIHtcblxuICAgICAgICB2YXIgaW5kZXggPSBNYXRoLmZsb29yKGopICUgZ3JhaW5TaXplO1xuICAgICAgICB2YXIgYSA9IGlucHV0RGF0YVtpbmRleF07XG4gICAgICAgIHZhciBiID0gaW5wdXREYXRhWyhpbmRleCArIDEpICUgZ3JhaW5TaXplXTtcbiAgICAgICAgZ3JhaW5EYXRhW2ldICs9IGxpbmVhckludGVycG9sYXRpb24oYSwgYiwgaiAlIDEuMCkgKiB0aGlzLmdyYWluV2luZG93W2ldO1xuICAgICAgfVxuXG4gICAgICAvLyBDb3B5IHRoZSBncmFpbiBtdWx0aXBsZSB0aW1lcyBvdmVybGFwcGluZyBpdFxuICAgICAgZm9yIChpID0gMDsgaSA8IGdyYWluU2l6ZTsgaSArPSBNYXRoLnJvdW5kKGdyYWluU2l6ZSAqICgxIC0gb3ZlcmxhcFJhdGlvKSkpIHtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSBncmFpblNpemU7IGorKykge1xuICAgICAgICAgIHRoaXMuYnVmZmVyW2kgKyBqXSArPSBncmFpbkRhdGFbal07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gT3V0cHV0IHRoZSBmaXJzdCBoYWxmIG9mIHRoZSBidWZmZXJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBncmFpblNpemU7IGkrKykge1xuICAgICAgICBvdXRwdXREYXRhW2ldID0gdGhpcy5idWZmZXJbaV07XG4gICAgICB9XG4gICAgfTtcblxuICAgIHBpdGNoU2hpZnRlclByb2Nlc3Nvci5jb25uZWN0KGF1ZGlvQ3R4LmRlc3RpbmF0aW9uKTtcblxuICB9O1xuXG5cbiAgaGFubldpbmRvdyhsZW5ndGgpIHtcbiAgICBjb25zdCB3aW5kb3cgPSBuZXcgRmxvYXQzMkFycmF5KGxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB3aW5kb3dbaV0gPSAwLjUgKiAoMSAtIE1hdGguY29zKDIgKiBNYXRoLlBJICogaSAvIChsZW5ndGggLSAxKSkpO1xuICAgIH1cbiAgICByZXR1cm4gd2luZG93O1xuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jbGFzc2VzL0F1ZGlvLmpzIiwiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xuXG5jb25zdCB1cmwgPSBgL2FwaS9zb3VuZGA7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICBjcmVhdGU6ICh7aWQsIGJsb2J9KSA9PiB7XG4gICAgY29uc3QgbWV0aG9kID0gYFBPU1RgO1xuICAgIGNvbnN0IG5ld0ZpbGVOYW1lID0gYCR7aWQuc3BsaXQoYCBgKS5qb2luKGBfYCl9YDtcbiAgICBjb25zdCBib2R5ID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgYm9keS5hcHBlbmQoYGlkYCwgaWQpO1xuICAgIGJvZHkuYXBwZW5kKGBzb3VuZGAsIGJsb2IsIG5ld0ZpbGVOYW1lKTtcblxuICAgIHJldHVybiBmZXRjaCh1cmwsIHttZXRob2QsIGJvZHl9KVxuICAgICAgLnRoZW4ociA9PiByLmpzb24oKSk7XG4gIH0sXG5cbiAgcmVhZDogKCkgPT4ge1xuICAgIHJldHVybiBmZXRjaChgJHt1cmx9P2lzQWN0aXZlPXRydWVgKVxuICAgICAgLnRoZW4ociA9PiByLmpzb24oKSk7XG4gIH0sXG5cbiAgcmVhZE9uZTogaWQgPT4ge1xuICAgIGNvbnN0IG1ldGhvZCA9IGBHRVRgO1xuICAgIHJldHVybiBmZXRjaChgJHt1cmx9LyR7aWR9YCwge21ldGhvZH0pLnRoZW4ociA9PiByLmpzb24oKSk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbGliL3NvdW5kQVBJLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG52YXIgZW5jb2RlID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcbnZhciBkZWNvZGUgPSByZXF1aXJlKCcuL2RlY29kZScpO1xudmFyIGJ1aWxkID0gcmVxdWlyZSgnLi9idWlsZCcpO1xudmFyIGlzVmFsaWQgPSByZXF1aXJlKCcuL2lzLXZhbGlkJyk7XG5cbi8vIGlmIHlvdSBhcmUgdXNpbmcgY2x1c3RlciBvciBtdWx0aXBsZSBzZXJ2ZXJzIHVzZSB0aGlzIHRvIG1ha2UgZWFjaCBpbnN0YW5jZVxuLy8gaGFzIGEgdW5pcXVlIHZhbHVlIGZvciB3b3JrZXJcbi8vIE5vdGU6IEkgZG9uJ3Qga25vdyBpZiB0aGlzIGlzIGF1dG9tYXRpY2FsbHkgc2V0IHdoZW4gdXNpbmcgdGhpcmRcbi8vIHBhcnR5IGNsdXN0ZXIgc29sdXRpb25zIHN1Y2ggYXMgcG0yLlxudmFyIGNsdXN0ZXJXb3JrZXJJZCA9IHJlcXVpcmUoJy4vdXRpbC9jbHVzdGVyLXdvcmtlci1pZCcpIHx8IDA7XG5cbi8qKlxuICogU2V0IHRoZSBzZWVkLlxuICogSGlnaGx5IHJlY29tbWVuZGVkIGlmIHlvdSBkb24ndCB3YW50IHBlb3BsZSB0byB0cnkgdG8gZmlndXJlIG91dCB5b3VyIGlkIHNjaGVtYS5cbiAqIGV4cG9zZWQgYXMgc2hvcnRpZC5zZWVkKGludClcbiAqIEBwYXJhbSBzZWVkIEludGVnZXIgdmFsdWUgdG8gc2VlZCB0aGUgcmFuZG9tIGFscGhhYmV0LiAgQUxXQVlTIFVTRSBUSEUgU0FNRSBTRUVEIG9yIHlvdSBtaWdodCBnZXQgb3ZlcmxhcHMuXG4gKi9cbmZ1bmN0aW9uIHNlZWQoc2VlZFZhbHVlKSB7XG4gICAgYWxwaGFiZXQuc2VlZChzZWVkVmFsdWUpO1xuICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNsdXN0ZXIgd29ya2VyIG9yIG1hY2hpbmUgaWRcbiAqIGV4cG9zZWQgYXMgc2hvcnRpZC53b3JrZXIoaW50KVxuICogQHBhcmFtIHdvcmtlcklkIHdvcmtlciBtdXN0IGJlIHBvc2l0aXZlIGludGVnZXIuICBOdW1iZXIgbGVzcyB0aGFuIDE2IGlzIHJlY29tbWVuZGVkLlxuICogcmV0dXJucyBzaG9ydGlkIG1vZHVsZSBzbyBpdCBjYW4gYmUgY2hhaW5lZC5cbiAqL1xuZnVuY3Rpb24gd29ya2VyKHdvcmtlcklkKSB7XG4gICAgY2x1c3RlcldvcmtlcklkID0gd29ya2VySWQ7XG4gICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vKipcbiAqXG4gKiBzZXRzIG5ldyBjaGFyYWN0ZXJzIHRvIHVzZSBpbiB0aGUgYWxwaGFiZXRcbiAqIHJldHVybnMgdGhlIHNodWZmbGVkIGFscGhhYmV0XG4gKi9cbmZ1bmN0aW9uIGNoYXJhY3RlcnMobmV3Q2hhcmFjdGVycykge1xuICAgIGlmIChuZXdDaGFyYWN0ZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYWxwaGFiZXQuY2hhcmFjdGVycyhuZXdDaGFyYWN0ZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWxwaGFiZXQuc2h1ZmZsZWQoKTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSB1bmlxdWUgaWRcbiAqIFJldHVybnMgc3RyaW5nIGlkXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlKCkge1xuICByZXR1cm4gYnVpbGQoY2x1c3RlcldvcmtlcklkKTtcbn1cblxuLy8gRXhwb3J0IGFsbCBvdGhlciBmdW5jdGlvbnMgYXMgcHJvcGVydGllcyBvZiB0aGUgZ2VuZXJhdGUgZnVuY3Rpb25cbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdGU7XG5tb2R1bGUuZXhwb3J0cy5nZW5lcmF0ZSA9IGdlbmVyYXRlO1xubW9kdWxlLmV4cG9ydHMuc2VlZCA9IHNlZWQ7XG5tb2R1bGUuZXhwb3J0cy53b3JrZXIgPSB3b3JrZXI7XG5tb2R1bGUuZXhwb3J0cy5jaGFyYWN0ZXJzID0gY2hhcmFjdGVycztcbm1vZHVsZS5leHBvcnRzLmRlY29kZSA9IGRlY29kZTtcbm1vZHVsZS5leHBvcnRzLmlzVmFsaWQgPSBpc1ZhbGlkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLy8gRm91bmQgdGhpcyBzZWVkLWJhc2VkIHJhbmRvbSBnZW5lcmF0b3Igc29tZXdoZXJlXG4vLyBCYXNlZCBvbiBUaGUgQ2VudHJhbCBSYW5kb21pemVyIDEuMyAoQykgMTk5NyBieSBQYXVsIEhvdWxlIChob3VsZUBtc2MuY29ybmVsbC5lZHUpXG5cbnZhciBzZWVkID0gMTtcblxuLyoqXG4gKiByZXR1cm4gYSByYW5kb20gbnVtYmVyIGJhc2VkIG9uIGEgc2VlZFxuICogQHBhcmFtIHNlZWRcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldE5leHRWYWx1ZSgpIHtcbiAgICBzZWVkID0gKHNlZWQgKiA5MzAxICsgNDkyOTcpICUgMjMzMjgwO1xuICAgIHJldHVybiBzZWVkLygyMzMyODAuMCk7XG59XG5cbmZ1bmN0aW9uIHNldFNlZWQoX3NlZWRfKSB7XG4gICAgc2VlZCA9IF9zZWVkXztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbmV4dFZhbHVlOiBnZXROZXh0VmFsdWUsXG4gICAgc2VlZDogc2V0U2VlZFxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcnlwdG8gPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiAod2luZG93LmNyeXB0byB8fCB3aW5kb3cubXNDcnlwdG8pOyAvLyBJRSAxMSB1c2VzIHdpbmRvdy5tc0NyeXB0b1xuXG5mdW5jdGlvbiByYW5kb21CeXRlKCkge1xuICAgIGlmICghY3J5cHRvIHx8ICFjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpICYgMHgzMDtcbiAgICB9XG4gICAgdmFyIGRlc3QgPSBuZXcgVWludDhBcnJheSgxKTtcbiAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGRlc3QpO1xuICAgIHJldHVybiBkZXN0WzBdICYgMHgzMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByYW5kb21CeXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1ieXRlLWJyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuLyoqXG4gKiBEZWNvZGUgdGhlIGlkIHRvIGdldCB0aGUgdmVyc2lvbiBhbmQgd29ya2VyXG4gKiBNYWlubHkgZm9yIGRlYnVnZ2luZyBhbmQgdGVzdGluZy5cbiAqIEBwYXJhbSBpZCAtIHRoZSBzaG9ydGlkLWdlbmVyYXRlZCBpZC5cbiAqL1xuZnVuY3Rpb24gZGVjb2RlKGlkKSB7XG4gICAgdmFyIGNoYXJhY3RlcnMgPSBhbHBoYWJldC5zaHVmZmxlZCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHZlcnNpb246IGNoYXJhY3RlcnMuaW5kZXhPZihpZC5zdWJzdHIoMCwgMSkpICYgMHgwZixcbiAgICAgICAgd29ya2VyOiBjaGFyYWN0ZXJzLmluZGV4T2YoaWQuc3Vic3RyKDEsIDEpKSAmIDB4MGZcbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlY29kZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL2RlY29kZS5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5jb2RlID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuLy8gSWdub3JlIGFsbCBtaWxsaXNlY29uZHMgYmVmb3JlIGEgY2VydGFpbiB0aW1lIHRvIHJlZHVjZSB0aGUgc2l6ZSBvZiB0aGUgZGF0ZSBlbnRyb3B5IHdpdGhvdXQgc2FjcmlmaWNpbmcgdW5pcXVlbmVzcy5cbi8vIFRoaXMgbnVtYmVyIHNob3VsZCBiZSB1cGRhdGVkIGV2ZXJ5IHllYXIgb3Igc28gdG8ga2VlcCB0aGUgZ2VuZXJhdGVkIGlkIHNob3J0LlxuLy8gVG8gcmVnZW5lcmF0ZSBgbmV3IERhdGUoKSAtIDBgIGFuZCBidW1wIHRoZSB2ZXJzaW9uLiBBbHdheXMgYnVtcCB0aGUgdmVyc2lvbiFcbnZhciBSRURVQ0VfVElNRSA9IDE0NTk3MDc2MDY1MTg7XG5cbi8vIGRvbid0IGNoYW5nZSB1bmxlc3Mgd2UgY2hhbmdlIHRoZSBhbGdvcyBvciBSRURVQ0VfVElNRVxuLy8gbXVzdCBiZSBhbiBpbnRlZ2VyIGFuZCBsZXNzIHRoYW4gMTZcbnZhciB2ZXJzaW9uID0gNjtcblxuLy8gQ291bnRlciBpcyB1c2VkIHdoZW4gc2hvcnRpZCBpcyBjYWxsZWQgbXVsdGlwbGUgdGltZXMgaW4gb25lIHNlY29uZC5cbnZhciBjb3VudGVyO1xuXG4vLyBSZW1lbWJlciB0aGUgbGFzdCB0aW1lIHNob3J0aWQgd2FzIGNhbGxlZCBpbiBjYXNlIGNvdW50ZXIgaXMgbmVlZGVkLlxudmFyIHByZXZpb3VzU2Vjb25kcztcblxuLyoqXG4gKiBHZW5lcmF0ZSB1bmlxdWUgaWRcbiAqIFJldHVybnMgc3RyaW5nIGlkXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkKGNsdXN0ZXJXb3JrZXJJZCkge1xuXG4gICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKChEYXRlLm5vdygpIC0gUkVEVUNFX1RJTUUpICogMC4wMDEpO1xuXG4gICAgaWYgKHNlY29uZHMgPT09IHByZXZpb3VzU2Vjb25kcykge1xuICAgICAgICBjb3VudGVyKys7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY291bnRlciA9IDA7XG4gICAgICAgIHByZXZpb3VzU2Vjb25kcyA9IHNlY29uZHM7XG4gICAgfVxuXG4gICAgc3RyID0gc3RyICsgZW5jb2RlKGFscGhhYmV0Lmxvb2t1cCwgdmVyc2lvbik7XG4gICAgc3RyID0gc3RyICsgZW5jb2RlKGFscGhhYmV0Lmxvb2t1cCwgY2x1c3RlcldvcmtlcklkKTtcbiAgICBpZiAoY291bnRlciA+IDApIHtcbiAgICAgICAgc3RyID0gc3RyICsgZW5jb2RlKGFscGhhYmV0Lmxvb2t1cCwgY291bnRlcik7XG4gICAgfVxuICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIHNlY29uZHMpO1xuXG4gICAgcmV0dXJuIHN0cjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidWlsZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL2J1aWxkLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbmZ1bmN0aW9uIGlzU2hvcnRJZChpZCkge1xuICAgIGlmICghaWQgfHwgdHlwZW9mIGlkICE9PSAnc3RyaW5nJyB8fCBpZC5sZW5ndGggPCA2ICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGNoYXJhY3RlcnMgPSBhbHBoYWJldC5jaGFyYWN0ZXJzKCk7XG4gICAgdmFyIGxlbiA9IGlkLmxlbmd0aDtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuO2krKykge1xuICAgICAgICBpZiAoY2hhcmFjdGVycy5pbmRleE9mKGlkW2ldKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Nob3J0SWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9pcy12YWxpZC5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IDA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi91dGlsL2NsdXN0ZXItd29ya2VyLWlkLWJyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBDYXJ0QVBJIGZyb20gJy4uL2xpYi9DYXJ0QVBJJztcbmltcG9ydCBzaG9ydGlkIGZyb20gJ3Nob3J0aWQnO1xuY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBuYW1lX2lucHV0YCk7XG5jb25zdCBsaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnVuaXF1ZV9saW5rYCk7XG5cbmNvbnN0IGhhbmRsZVNhdmUgPSAoe3RleHQsIGlkfSkgPT4ge1xuXG4gIENhcnRBUEkuY3JlYXRlKHtcbiAgICB0ZXh0LFxuICAgIGlkLFxuICAgIG5hbWU6IG5hbWUudmFsdWVcbiAgfSk7XG5cbiAgbGluay5pbm5lckhUTUwgPSBgaHR0cHM6Ly9sb2NhbGhvc3Q6ODA4MC9zYW50YS5odG1sP2lkPSR7aWR9YDtcbiAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgaHR0cHM6Ly9sb2NhbGhvc3Q6ODA4MC9zYW50YS5odG1sP2lkPSR7aWR9YCk7XG4gIGxpbmsuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCBgX2JsYW5rYCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVTYXZlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL29iamVjdHMvU2F2ZS5qcyIsImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcblxuY29uc3QgdXJsID0gYC9hcGkvY2FydGA7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICBjcmVhdGU6ICh7dGV4dCwgaWQsIG5hbWUsIGJsb2J9KSA9PiB7XG4gICAgY29uc3QgbWV0aG9kID0gYFBPU1RgO1xuICAgIC8vIGNvbnN0IG5ld0ZpbGVOYW1lID0gYCR7aWQuc3BsaXQoYCBgKS5qb2luKGBfYCl9YDtcbiAgICBjb25zdCBib2R5ID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgYm9keS5hcHBlbmQoYHRleHRgLCB0ZXh0KTtcbiAgICBib2R5LmFwcGVuZChgaWRgLCBpZCk7XG4gICAgYm9keS5hcHBlbmQoYG5hbWVgLCBuYW1lKTtcbiAgICAvLyBib2R5LmFwcGVuZChgc291bmRgLCBibG9iLCBuZXdGaWxlTmFtZSk7XG5cbiAgICByZXR1cm4gZmV0Y2godXJsLCB7bWV0aG9kLCBib2R5fSlcbiAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpO1xuICB9LFxuXG4gIHJlYWQ6ICgpID0+IHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dXJsfT9pc0FjdGl2ZT10cnVlYClcbiAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpO1xuICB9LFxuXG4gIHJlYWRPbmU6IGlkID0+IHtcbiAgICBjb25zdCBtZXRob2QgPSBgR0VUYDtcbiAgICByZXR1cm4gZmV0Y2goYCR7dXJsfS8ke2lkfWAsIHttZXRob2R9KS50aGVuKHIgPT4gci5qc29uKCkpO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2xpYi9DYXJ0QVBJLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==