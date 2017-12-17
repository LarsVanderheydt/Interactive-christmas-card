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
    value: function updateBody(speed, eyeBlueRightPosX, eyeBlueLeftPosX, eyeBlueRightPosY, eyeBlueLeftPosY, eyeBrowRightPosY, eyeBrowLeftPosY) {
      this.eyeBlueRight.position.x += (eyeBlueRightPosX - this.eyeBlueRight.position.x) / speed;
      this.eyeBlueLeft.position.x += (eyeBlueLeftPosX - this.eyeBlueLeft.position.x) / speed;

      this.eyeBlueRight.position.y += (eyeBlueRightPosY - this.eyeBlueRight.position.y) / speed;
      this.eyeBlueLeft.position.y += (eyeBlueLeftPosY - this.eyeBlueLeft.position.y) / speed;

      this.eyeBrowRight.position.y += (eyeBrowRightPosY - this.eyeBrowRight.position.y) / speed;
      this.eyeBrowLeft.position.y += (eyeBrowLeftPosY - this.eyeBrowLeft.position.y) / speed;
    }
  }, {
    key: 'idle',
    value: function idle() {
      var xTarget = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var yTarget = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var distance = 1;

      this.head.rotation.z = Math.sin(Date.now() * 0.005) * Math.PI * 0.005;
      this.head.rotation.x = Math.sin(Date.now() * 0.004) * Math.PI * 0.03;

      var eyeBlueRightPosX = this.normalize(xTarget, -200, 200, -0.6, 0.6);
      var eyeBlueLeftPosX = this.normalize(xTarget, -200, 200, -0.6, 0.6);

      var eyeBlueRightPosY = this.normalize(yTarget, -200, 200, 0.6, -0.6);
      var eyeBlueLeftPosY = this.normalize(yTarget, -200, 200, 0.6, -0.6);

      var eyeBrowRightPosY = this.normalize(xTarget, -200, 200, -1, 0.8);
      var eyeBrowLeftPosY = this.normalize(xTarget, -200, 200, -1, 0.8);

      this.moustache.position.y = Math.cos(Date.now() * 0.01) * distance / 4;
      this.moustache.rotation.z = Math.sin(Date.now() * 0.01) * Math.PI * 0.01;

      this.mesh.rotation.y = Math.sin(Date.now() * 0.002) * Math.PI * 0.05;
      this.updateBody(10, eyeBlueRightPosX, eyeBlueLeftPosX, eyeBlueRightPosY, eyeBlueLeftPosY, eyeBrowRightPosY, eyeBrowLeftPosY);
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

      var frecklesMat = new THREE.MeshLambertMaterial({ color: __WEBPACK_IMPORTED_MODULE_0__objects_colors__["a" /* default */].freckles, flatShading: true });
      var frecklesGeomMerged = new THREE.Geometry();

      var frecklesGeom = new THREE.PlaneGeometry(0.5, 0.5);

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

var Materials = {
  "whiteMat": new THREE.MeshLambertMaterial({ color: __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */].white, flatShading: true }),
  "teethMat": new THREE.MeshPhongMaterial({ color: __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */].teeth, flatShading: true }),
  "blackMat": new THREE.MeshLambertMaterial({ color: __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */].black, flatShading: true }),
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
        from = _ref.from,
        blob = _ref.blob,
        to = _ref.to,
        audioSettings = _ref.audioSettings;

    var method = 'POST';
    // const newFileName = `${id.split(` `).join(`_`)}`;
    var body = new FormData();
    body.append('text', text);
    body.append('id', id);
    body.append('from', from);
    body.append('to', to);
    body.append('audioSettings', audioSettings);

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

    // send objects to save on click
    saveBtn.addEventListener('click', function () {
      var audioSettings = {
        pitch: audio.pitchRatio,
        overlap: audio.overlap
      };

      Object(__WEBPACK_IMPORTED_MODULE_3__objects_Save__["a" /* default */])({
        text: audio.txt,
        id: audio.id,
        audioSettings: JSON.stringify(audioSettings)
      });
    });

    gui = new dat.GUI();
    gui.domElement.id = 'gui';
    gui.closed = true;
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
    WIDTH = window.innerWidth / 1.67;
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
    WIDTH = window.innerWidth / 1.67;
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

    backLight = new THREE.DirectionalLight(0xffffff, .2);
    backLight.position.set(-100, 200, 150);
    backLight.castShadow = true;

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
var source = void 0;

var $text = document.getElementById('field');
var $record = document.getElementById('record');
var $audio = document.getElementById('audio_controls');
var $stop = document.getElementById('stop');

var audioSources = [],
    pitchShifterProcessor = void 0;

var grainSize = 512,
    pitchRatio = 1.0,
    overlapRatio = 0.50;

var Audio = function () {
  function Audio() {
    var _this = this;

    _classCallCheck(this, Audio);

    this.id = __WEBPACK_IMPORTED_MODULE_1_shortid___default.a.generate();
    this.pitchRatio = 1.0;
    this.overlap = 0.50;
    audioCtx = new AudioContext();

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
        audioChunks.push(e.data);
      }); // add audiochunk to array

      // when mediaRecorder stops, make and handle audio blob
      _this.mediaRecorder.addEventListener('stop', function () {
        // give link to audio controls to play and control the sound
        _this.blob = new Blob(audioChunks, { type: 'audio/ogg' }); // create blob from audiochunks

        __WEBPACK_IMPORTED_MODULE_0__lib_soundAPI__["a" /* default */].create({
          id: _this.id,
          blob: _this.blob
        });

        setTimeout(function () {
          var bufferLoader = new BufferLoader(audioCtx, ['./uploads/' + _this.id + '.ogg'], function (bufferList) {
            // to avoid overlapping previous sound, empty bufferList when trying again
            $record.addEventListener('click', function () {
              return bufferList = [];
            });

            var loop = false;

            // trigger loop
            document.getElementById('repeat').addEventListener('click', function () {
              loop = !loop;
              source.stop();
            });

            // pitch value
            var $pitch = document.getElementById('pitch');
            $pitch.addEventListener('change', function () {
              pitchRatio = parseFloat($pitch.value);
              _this.pitchRatio = pitchRatio;
            });

            // play modified sound
            $audio.addEventListener('click', function () {
              source = '';
              source = audioCtx.createBufferSource();
              source.buffer = bufferList[0];
              source.connect(pitchShifterProcessor);
              source.loop = loop;
              source.start();
            });
          });

          bufferLoader.load();
          _this.initProcessor();
        }, 1000);

        // set sound filter overlap
        var overlap = document.getElementById('overlap');
        overlap.addEventListener('change', function () {
          overlapRatio = overlap.value;
          _this.overlap = overlapRatio;
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
      $record.textContent = 'Want to try again?';
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


var from = document.getElementById('name_input');
var to = document.getElementById('recipient_input');
var link = document.querySelector('.unique_link');

var handleSave = function handleSave(_ref) {
  var text = _ref.text,
      id = _ref.id,
      audioSettings = _ref.audioSettings;


  __WEBPACK_IMPORTED_MODULE_0__lib_CartAPI__["a" /* default */].create({
    text: text,
    id: id,
    from: from.value || 'Human',
    to: to.value || 'Fellow Human',
    audioSettings: audioSettings
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
        from = _ref.from,
        blob = _ref.blob,
        to = _ref.to,
        audioSettings = _ref.audioSettings;

    var method = 'POST';
    // const newFileName = `${id.split(` `).join(`_`)}`;
    var body = new FormData();
    body.append('text', text);
    body.append('id', id);
    body.append('from', from);
    body.append('to', to);
    body.append('audioSettings', audioSettings);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWYwNGUxOTYyYzA1ZGQ4MzM2OTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL29iamVjdHMvY29sb3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLWZldGNoL2ZldGNoLW5wbS1icm93c2VyaWZ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9hbHBoYWJldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9IZWFkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9vYmplY3RzL01hdGVyaWFscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2hhdHdnLWZldGNoL2ZldGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9saWIvY2FydEFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvQXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xpYi9zb3VuZEFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWJ5dGUtYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvZGVjb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvaXMtdmFsaWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL3V0aWwvY2x1c3Rlci13b3JrZXItaWQtYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvb2JqZWN0cy9TYXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9saWIvQ2FydEFQSS5qcyJdLCJuYW1lcyI6WyJDb2xvcnMiLCJza2luIiwiZnJlY2tsZXMiLCJ3aGl0ZSIsImdsYXNzZXMiLCJ0ZWV0aCIsImJsYWNrIiwiZXllIiwiaGF0IiwiaXNCbGlua2luZyIsIkhlYWQiLCJtZXNoIiwiVEhSRUUiLCJPYmplY3QzRCIsImhlYWRHZW9tIiwiQm94QnVmZmVyR2VvbWV0cnkiLCJza2luTWF0IiwiTWVzaExhbWJlcnRNYXRlcmlhbCIsImNvbG9yIiwiZmxhdFNoYWRpbmciLCJleWVNYXQiLCJNZXNoUGhvbmdNYXRlcmlhbCIsImhlYWQiLCJNZXNoIiwiY2FzdFNoYWRvdyIsInJlY2VpdmVTaGFkb3ciLCJhZGQiLCJiZWFyZCIsInBvc2l0aW9uIiwieSIsInoiLCJCZWFyZCIsIkdsYXNzZXMiLCJIYWlyIiwiRXllcyIsIkV5ZUJyb3dzIiwiSGF0IiwiRnJlY2tsZXMiLCJGZWF0dXJlcyIsImlkbGUiLCJub3JtYWxpemUiLCJ2Iiwidm1pbiIsInZtYXgiLCJ0bWluIiwidG1heCIsIm52IiwiTWF0aCIsIm1heCIsIm1pbiIsImR2IiwicGMiLCJkdCIsInR2Iiwic3BlZWQiLCJleWVCbHVlUmlnaHRQb3NYIiwiZXllQmx1ZUxlZnRQb3NYIiwiZXllQmx1ZVJpZ2h0UG9zWSIsImV5ZUJsdWVMZWZ0UG9zWSIsImV5ZUJyb3dSaWdodFBvc1kiLCJleWVCcm93TGVmdFBvc1kiLCJleWVCbHVlUmlnaHQiLCJ4IiwiZXllQmx1ZUxlZnQiLCJleWVCcm93UmlnaHQiLCJleWVCcm93TGVmdCIsInhUYXJnZXQiLCJ5VGFyZ2V0IiwiZGlzdGFuY2UiLCJyb3RhdGlvbiIsInNpbiIsIkRhdGUiLCJub3ciLCJQSSIsIm1vdXN0YWNoZSIsImNvcyIsInVwZGF0ZUJvZHkiLCJiZWFyZEdlb21NZXJnZWQiLCJHZW9tZXRyeSIsImJlYXJkMUdlb20iLCJCb3hHZW9tZXRyeSIsImJlYXJkMSIsIk1hdCIsIndoaXRlTWF0IiwiYXBwbHlNYXRyaXgiLCJNYXRyaXg0IiwibWFrZVRyYW5zbGF0aW9uIiwidXBkYXRlTWF0cml4IiwibWVyZ2UiLCJnZW9tZXRyeSIsIm1hdHJpeCIsImJlYXJkMiIsInNjYWxlIiwiYmVhcmQzIiwiY2xvbmUiLCJiZWFyZDQiLCJiZWFyZDJHZW9tIiwidmVydGljZXMiLCJiZWFyZDUiLCJiZWFyZDNHZW9tIiwiYmVhcmQ2IiwiYmVhcmQ3IiwiYmVhcmQ4IiwiYmVhcmQ0R2VvbSIsImJlYXJkOSIsImJlYXJkNUdlb20iLCJiZWFyZDEwIiwiYmVhcmQxMSIsImJlYXJkTWVyZ2VkIiwibW91dGhHZW9tIiwibW91dGgiLCJibGFja01hdCIsInNldCIsInRlZXRoR2VvbSIsInRlZXRoTWF0IiwibW91c3RhY2hlR2VvbSIsImdsYXNzZXNNYXQiLCJmcmFtZUdlb21NZXJnZWQiLCJmcmFtZU91dGVyR2VvbSIsIkN5bGluZGVyR2VvbWV0cnkiLCJmcmFtZUlubmVyR2VvbSIsIm1ha2VSb3RhdGlvblgiLCJmcmFtZUJTUCIsIlRocmVlQlNQIiwiZnJhbWVDdXRCU1AiLCJmcmFtZWludGVyc2VjdGlvbkJTUCIsInN1YnRyYWN0IiwiZnJhbWVMZWZ0IiwidG9NZXNoIiwiZnJhbWVSaWdodCIsIm1ha2VSb3RhdGlvbloiLCJmcmFtZU1pZEdlb20iLCJmcmFtZU1pZCIsImZyYW1lRW5kR2VvbSIsImZyYW1lRW5kUmlnaHQiLCJmcmFtZUVuZExlZnQiLCJmcmFtZVNwb2tlR2VvbSIsImZyYW1lU3Bva2VSaWdodCIsImZyYW1lU3Bva2VMZWZ0IiwiZnJhbWVNZXJnZWQiLCJoYWlyIiwiaGFpckdlb21NZXJnZWQiLCJoYWlyRmxhdEdlb20iLCJoYWlyMSIsImhhaXIyIiwiaGFpcjMiLCJoYWlyNCIsImhhaXI2IiwiaGFpckZsYXRCYWNrR2VvbSIsImhhaXI1IiwiaGFpck1lcmdlZCIsImV5ZXMiLCJleWVXaGl0ZUdlb20iLCJQbGFuZUdlb21ldHJ5IiwiZXllV2hpdGVSaWdodCIsImV5ZUJsdWVHZW9tIiwiZXllUHVwaWxHZW9tIiwiZXllUHVwaWxSaWdodCIsImV5ZVdoaXRlTGVmdCIsImV5ZVB1cGlsTGVmdCIsImV5ZUJyb3dzIiwiZXllQnJvd0dlb20iLCJoYXRNYXQiLCJiYW5kR2VvbSIsIlRvcnVzR2VvbWV0cnkiLCJiaWdDb25lR2VvbSIsInNtYWxsQ29uZUdlb20iLCJoYXREaW5nbGVHZW9tIiwiU3BoZXJlR2VvbWV0cnkiLCJiYW5kIiwiYmlnQ29uZSIsInNtYWxsQ29uZSIsIm1ha2VSb3RhdGlvblkiLCJoYXREaW5nbGUiLCJmcmVja2xlc01hdCIsImZyZWNrbGVzR2VvbU1lcmdlZCIsImZyZWNrbGVzR2VvbSIsImZyZWNrbGUxIiwiZnJlY2tsZTIiLCJmcmVja2xlMyIsImZyZWNrbGU0IiwiZnJlY2tsZTUiLCJmcmVja2xlNiIsImZyZWNrbGVkTWVyZ2VkIiwiZWFyR2VvbSIsImVhclJpZ2h0IiwiZWFyTGVmdCIsIm5vc2VHZW9tIiwibm9zZSIsIk1hdGVyaWFscyIsIk1lc2hOb3JtYWxNYXRlcmlhbCIsInVybCIsImNyZWF0ZSIsInRleHQiLCJpZCIsImZyb20iLCJibG9iIiwidG8iLCJhdWRpb1NldHRpbmdzIiwibWV0aG9kIiwiYm9keSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZmV0Y2giLCJ0aGVuIiwiciIsImpzb24iLCJyZWFkIiwicmVhZE9uZSIsInNjZW5lIiwiY2FtZXJhIiwiZmllbGRPZlZpZXciLCJhc3BlY3RSYXRpbyIsIm5lYXJQbGFuZSIsImZhclBsYW5lIiwiSEVJR0hUIiwiV0lEVEgiLCJnbG9iYWxMaWdodCIsInNoYWRvd0xpZ2h0IiwiYmFja0xpZ2h0IiwibGlnaHQiLCJyZW5kZXJlciIsImNvbnRhaW5lciIsImxvYWRlZCIsInN0YXJzIiwid2luZG93SGFsZlgiLCJ3aW5kb3dIYWxmWSIsImF1ZGlvIiwiU3BlZWNoVGV4dCIsImNvbnRyb2xsZXIiLCJndWkiLCJzYXZlQnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1vdXNlUG9zIiwic3RhckFycmF5IiwiaW5pdCIsInBhcnRpY2xlc0pTIiwibG9hZCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVTY2VuZSIsImNyZWF0ZUxpZ2h0cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwaXRjaCIsInBpdGNoUmF0aW8iLCJvdmVybGFwIiwiaGFuZGxlU2F2ZSIsInR4dCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXQiLCJHVUkiLCJkb21FbGVtZW50IiwiY2xvc2VkIiwiY29udHJvbGxlclRleHQiLCJndWlDb250cm9sbGVyIiwid2luZG93IiwibG9vcCIsImtleXMiLCJmb3JFYWNoIiwiYWRkQ29sb3IiLCJrZXkiLCJvbkNoYW5nZSIsInJlbW92ZSIsImNyZWF0ZUhlYWQiLCJkZWMyaGV4IiwiaSIsInJlc3VsdCIsInRvU3RyaW5nIiwibGVuZ3RoIiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwiU2NlbmUiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIldlYkdMUmVuZGVyZXIiLCJhbHBoYSIsImFudGlhbGlhcyIsInNldFBpeGVsUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwic2V0U2l6ZSIsInNoYWRvd01hcCIsImVuYWJsZWQiLCJ0eXBlIiwiUENGU29mdFNoYWRvd01hcCIsImFwcGVuZENoaWxkIiwib25XaW5kb3dSZXNpemUiLCJoYW5kbGVNb3VzZU1vdmUiLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiZXZlbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsImxvYWRlck1hbmFnZXIiLCJMb2FkaW5nTWFuYWdlciIsImhhbmRsZVdpbmRvd1Jlc2l6ZSIsImlzTW9iaWxlIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIkhlbWlzcGhlcmVMaWdodCIsIkRpcmVjdGlvbmFsTGlnaHQiLCJzaGFkb3ciLCJtYXBTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJBbWJpZW50TGlnaHQiLCJuYW1lIiwiY3JlYXRlQ2hhcmFjdGVyIiwiYmxpbmtMb29wIiwicmFuZG9tIiwiYmxpbmsiLCJUd2Vlbk1heCIsInlveW8iLCJyZXBlYXQiLCJvbkNvbXBsZXRlIiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiU3BlZWNoUmVjb2duaXRpb24iLCJ3ZWJraXRTcGVlY2hSZWNvZ25pdGlvbiIsIlNwZWVjaEdyYW1tYXJMaXN0Iiwid2Via2l0U3BlZWNoR3JhbW1hckxpc3QiLCJTcGVlY2hSZWNvZ25pdGlvbkV2ZW50Iiwid2Via2l0U3BlZWNoUmVjb2duaXRpb25FdmVudCIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImF1ZGlvQ3R4IiwicmVjb2duaXRpb24iLCJ0cmFuc2NyaXB0IiwiYXVkaW9DaHVua3MiLCJzb3VyY2UiLCIkdGV4dCIsIiRyZWNvcmQiLCIkYXVkaW8iLCIkc3RvcCIsImF1ZGlvU291cmNlcyIsInBpdGNoU2hpZnRlclByb2Nlc3NvciIsImdyYWluU2l6ZSIsIm92ZXJsYXBSYXRpbyIsIkF1ZGlvIiwic2hvcnRJZCIsImdlbmVyYXRlIiwic3BlZWNoU2V0dGluZ3MiLCJvbnJlc3VsdCIsImdvdFJlc3VsdCIsIm9uc3BlZWNoZW5kIiwib25TcGVlY2hFbmQiLCJlIiwidmFsdWUiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJtZWRpYVJlY29yZGVyIiwiTWVkaWFSZWNvcmRlciIsInN0cmVhbSIsInN0YXJ0IiwiZGlzYWJsZWQiLCJwdXNoIiwiZGF0YSIsIkJsb2IiLCJTb3VuZEFQSSIsInNldFRpbWVvdXQiLCJidWZmZXJMb2FkZXIiLCJCdWZmZXJMb2FkZXIiLCJidWZmZXJMaXN0Iiwic3RvcCIsIiRwaXRjaCIsInBhcnNlRmxvYXQiLCJjcmVhdGVCdWZmZXJTb3VyY2UiLCJidWZmZXIiLCJjb25uZWN0IiwiaW5pdFByb2Nlc3NvciIsInRleHRDb250ZW50IiwibGFzdCIsInJlc3VsdHMiLCJjb250aW51b3VzIiwibGFuZyIsImludGVyaW1SZXN1bHRzIiwibWF4QWx0ZXJuYXRpdmVzIiwibGluZWFySW50ZXJwb2xhdGlvbiIsImEiLCJiIiwidCIsImRpc2Nvbm5lY3QiLCJjcmVhdGVTY3JpcHRQcm9jZXNzb3IiLCJjcmVhdGVKYXZhU2NyaXB0Tm9kZSIsIkZsb2F0MzJBcnJheSIsImdyYWluV2luZG93IiwiaGFubldpbmRvdyIsIm9uYXVkaW9wcm9jZXNzIiwiaW5wdXREYXRhIiwiaW5wdXRCdWZmZXIiLCJnZXRDaGFubmVsRGF0YSIsIm91dHB1dERhdGEiLCJvdXRwdXRCdWZmZXIiLCJncmFpbkRhdGEiLCJqIiwiaW5kZXgiLCJmbG9vciIsInJvdW5kIiwiZGVzdGluYXRpb24iLCJuZXdGaWxlTmFtZSIsInNwbGl0Iiwiam9pbiIsImxpbmsiLCJxdWVyeVNlbGVjdG9yIiwiQ2FydEFQSSIsImlubmVySFRNTCIsInNldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQSxJQUFNQSxTQUFTO0FBQ2JDLFFBQU0sUUFETztBQUViQyxZQUFVLFFBRkc7QUFHYkMsU0FBTyxRQUhNO0FBSWJDLFdBQVMsUUFKSTtBQUtiQyxTQUFPLFFBTE07QUFNYkMsU0FB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b2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGFmMDRlMTk2MmMwNWRkODMzNjk1IiwiY29uc3QgQ29sb3JzID0ge1xuICBza2luOiAweGZmZTBiZCxcbiAgZnJlY2tsZXM6IDB4Y2ZiYTk2LFxuICB3aGl0ZTogMHhlOWViZWUsXG4gIGdsYXNzZXM6IDB4ZjljNDIxLFxuICB0ZWV0aDogMHhmZmZmZmYsXG4gIGJsYWNrOiAweDJlMmUyZSxcbiAgZXllOiAweDYyOTVhOCxcbiAgaGF0OiAweDcyMDMxNFxufTtcbmV4cG9ydCBkZWZhdWx0IENvbG9ycztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9vYmplY3RzL2NvbG9ycy5qcyIsIi8vIHRoZSB3aGF0d2ctZmV0Y2ggcG9seWZpbGwgaW5zdGFsbHMgdGhlIGZldGNoKCkgZnVuY3Rpb25cbi8vIG9uIHRoZSBnbG9iYWwgb2JqZWN0ICh3aW5kb3cgb3Igc2VsZilcbi8vXG4vLyBSZXR1cm4gdGhhdCBhcyB0aGUgZXhwb3J0IGZvciB1c2UgaW4gV2VicGFjaywgQnJvd3NlcmlmeSBldGMuXG5yZXF1aXJlKCd3aGF0d2ctZmV0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gc2VsZi5mZXRjaC5iaW5kKHNlbGYpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1mZXRjaC9mZXRjaC1ucG0tYnJvd3NlcmlmeS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJhbmRvbUZyb21TZWVkID0gcmVxdWlyZSgnLi9yYW5kb20vcmFuZG9tLWZyb20tc2VlZCcpO1xuXG52YXIgT1JJR0lOQUwgPSAnMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpfLSc7XG52YXIgYWxwaGFiZXQ7XG52YXIgcHJldmlvdXNTZWVkO1xuXG52YXIgc2h1ZmZsZWQ7XG5cbmZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHNodWZmbGVkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHNldENoYXJhY3RlcnMoX2FscGhhYmV0Xykge1xuICAgIGlmICghX2FscGhhYmV0Xykge1xuICAgICAgICBpZiAoYWxwaGFiZXQgIT09IE9SSUdJTkFMKSB7XG4gICAgICAgICAgICBhbHBoYWJldCA9IE9SSUdJTkFMO1xuICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKF9hbHBoYWJldF8gPT09IGFscGhhYmV0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoX2FscGhhYmV0Xy5sZW5ndGggIT09IE9SSUdJTkFMLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1c3RvbSBhbHBoYWJldCBmb3Igc2hvcnRpZCBtdXN0IGJlICcgKyBPUklHSU5BTC5sZW5ndGggKyAnIHVuaXF1ZSBjaGFyYWN0ZXJzLiBZb3Ugc3VibWl0dGVkICcgKyBfYWxwaGFiZXRfLmxlbmd0aCArICcgY2hhcmFjdGVyczogJyArIF9hbHBoYWJldF8pO1xuICAgIH1cblxuICAgIHZhciB1bmlxdWUgPSBfYWxwaGFiZXRfLnNwbGl0KCcnKS5maWx0ZXIoZnVuY3Rpb24oaXRlbSwgaW5kLCBhcnIpe1xuICAgICAgIHJldHVybiBpbmQgIT09IGFyci5sYXN0SW5kZXhPZihpdGVtKTtcbiAgICB9KTtcblxuICAgIGlmICh1bmlxdWUubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ3VzdG9tIGFscGhhYmV0IGZvciBzaG9ydGlkIG11c3QgYmUgJyArIE9SSUdJTkFMLmxlbmd0aCArICcgdW5pcXVlIGNoYXJhY3RlcnMuIFRoZXNlIGNoYXJhY3RlcnMgd2VyZSBub3QgdW5pcXVlOiAnICsgdW5pcXVlLmpvaW4oJywgJykpO1xuICAgIH1cblxuICAgIGFscGhhYmV0ID0gX2FscGhhYmV0XztcbiAgICByZXNldCgpO1xufVxuXG5mdW5jdGlvbiBjaGFyYWN0ZXJzKF9hbHBoYWJldF8pIHtcbiAgICBzZXRDaGFyYWN0ZXJzKF9hbHBoYWJldF8pO1xuICAgIHJldHVybiBhbHBoYWJldDtcbn1cblxuZnVuY3Rpb24gc2V0U2VlZChzZWVkKSB7XG4gICAgcmFuZG9tRnJvbVNlZWQuc2VlZChzZWVkKTtcbiAgICBpZiAocHJldmlvdXNTZWVkICE9PSBzZWVkKSB7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHByZXZpb3VzU2VlZCA9IHNlZWQ7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaHVmZmxlKCkge1xuICAgIGlmICghYWxwaGFiZXQpIHtcbiAgICAgICAgc2V0Q2hhcmFjdGVycyhPUklHSU5BTCk7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUFycmF5ID0gYWxwaGFiZXQuc3BsaXQoJycpO1xuICAgIHZhciB0YXJnZXRBcnJheSA9IFtdO1xuICAgIHZhciByID0gcmFuZG9tRnJvbVNlZWQubmV4dFZhbHVlKCk7XG4gICAgdmFyIGNoYXJhY3RlckluZGV4O1xuXG4gICAgd2hpbGUgKHNvdXJjZUFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgciA9IHJhbmRvbUZyb21TZWVkLm5leHRWYWx1ZSgpO1xuICAgICAgICBjaGFyYWN0ZXJJbmRleCA9IE1hdGguZmxvb3IociAqIHNvdXJjZUFycmF5Lmxlbmd0aCk7XG4gICAgICAgIHRhcmdldEFycmF5LnB1c2goc291cmNlQXJyYXkuc3BsaWNlKGNoYXJhY3RlckluZGV4LCAxKVswXSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXRBcnJheS5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2h1ZmZsZWQoKSB7XG4gICAgaWYgKHNodWZmbGVkKSB7XG4gICAgICAgIHJldHVybiBzaHVmZmxlZDtcbiAgICB9XG4gICAgc2h1ZmZsZWQgPSBzaHVmZmxlKCk7XG4gICAgcmV0dXJuIHNodWZmbGVkO1xufVxuXG4vKipcbiAqIGxvb2t1cCBzaHVmZmxlZCBsZXR0ZXJcbiAqIEBwYXJhbSBpbmRleFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gbG9va3VwKGluZGV4KSB7XG4gICAgdmFyIGFscGhhYmV0U2h1ZmZsZWQgPSBnZXRTaHVmZmxlZCgpO1xuICAgIHJldHVybiBhbHBoYWJldFNodWZmbGVkW2luZGV4XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgY2hhcmFjdGVyczogY2hhcmFjdGVycyxcbiAgICBzZWVkOiBzZXRTZWVkLFxuICAgIGxvb2t1cDogbG9va3VwLFxuICAgIHNodWZmbGVkOiBnZXRTaHVmZmxlZFxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL2FscGhhYmV0LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBDb2xvcnMgZnJvbSAnLi4vb2JqZWN0cy9jb2xvcnMnO1xuaW1wb3J0IE1hdCBmcm9tICcuLi9vYmplY3RzL01hdGVyaWFscyc7XG5cbmxldCBpc0JsaW5raW5nID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcblxuICAgIGxldCBoZWFkR2VvbSA9IG5ldyBUSFJFRS5Cb3hCdWZmZXJHZW9tZXRyeSgxNiwgMTYsIDE2KTtcbiAgICBsZXQgc2tpbk1hdCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogQ29sb3JzLnNraW4sIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG4gICAgbGV0IGV5ZU1hdCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5leWUsIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG5cbiAgICB0aGlzLmhlYWQgPSBuZXcgVEhSRUUuTWVzaChoZWFkR2VvbSxza2luTWF0KTtcbiAgICB0aGlzLmhlYWQuY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgdGhpcy5oZWFkLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLm1lc2guYWRkKHRoaXMuaGVhZCk7XG5cbiAgICB0aGlzLmJlYXJkID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgdGhpcy5iZWFyZC5wb3NpdGlvbi55ID0gLTc7XG4gICAgdGhpcy5iZWFyZC5wb3NpdGlvbi56ID0gMC41O1xuICAgIHRoaXMuaGVhZC5hZGQodGhpcy5iZWFyZCk7XG5cbiAgICB0aGlzLkJlYXJkKCk7XG4gICAgdGhpcy5HbGFzc2VzKCk7XG4gICAgdGhpcy5IYWlyKCk7XG4gICAgdGhpcy5FeWVzKCk7XG4gICAgdGhpcy5FeWVCcm93cygpO1xuICAgIHRoaXMuSGF0KCk7XG4gICAgdGhpcy5GcmVja2xlcygpO1xuICAgIHRoaXMuRmVhdHVyZXMoKTtcbiAgICB0aGlzLmlkbGUoKTtcbiAgICB0aGlzLm5vcm1hbGl6ZSgpO1xuICB9XG5cbiAgbm9ybWFsaXplKHYsIHZtaW4sIHZtYXgsIHRtaW4sIHRtYXgpIHtcbiAgICBjb25zdCBudiA9IE1hdGgubWF4KE1hdGgubWluKHYsIHZtYXgpLCB2bWluKTtcbiAgICBjb25zdCBkdiA9IHZtYXggLSB2bWluO1xuICAgIGNvbnN0IHBjID0gKG52IC0gdm1pbikgLyBkdjtcbiAgICBjb25zdCBkdCA9IHRtYXggLSB0bWluO1xuICAgIGNvbnN0IHR2ID0gdG1pbiArIChwYyAqIGR0KTtcbiAgICByZXR1cm4gdHY7XG4gIH1cblxuICB1cGRhdGVCb2R5KHNwZWVkLCBleWVCbHVlUmlnaHRQb3NYLCBleWVCbHVlTGVmdFBvc1gsIGV5ZUJsdWVSaWdodFBvc1ksIGV5ZUJsdWVMZWZ0UG9zWSwgZXllQnJvd1JpZ2h0UG9zWSwgZXllQnJvd0xlZnRQb3NZKSB7XG4gICAgdGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24ueCArPSAoZXllQmx1ZVJpZ2h0UG9zWCAtIHRoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLngpIC8gc3BlZWQ7XG4gICAgdGhpcy5leWVCbHVlTGVmdC5wb3NpdGlvbi54ICs9IChleWVCbHVlTGVmdFBvc1ggLSB0aGlzLmV5ZUJsdWVMZWZ0LnBvc2l0aW9uLngpIC8gc3BlZWQ7XG5cbiAgICB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi55ICs9IChleWVCbHVlUmlnaHRQb3NZIC0gdGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24ueSkgLyBzcGVlZDtcbiAgICB0aGlzLmV5ZUJsdWVMZWZ0LnBvc2l0aW9uLnkgKz0gKGV5ZUJsdWVMZWZ0UG9zWSAtIHRoaXMuZXllQmx1ZUxlZnQucG9zaXRpb24ueSkgLyBzcGVlZDtcblxuICAgIHRoaXMuZXllQnJvd1JpZ2h0LnBvc2l0aW9uLnkgKz0gKGV5ZUJyb3dSaWdodFBvc1kgLSB0aGlzLmV5ZUJyb3dSaWdodC5wb3NpdGlvbi55KSAvIHNwZWVkO1xuICAgIHRoaXMuZXllQnJvd0xlZnQucG9zaXRpb24ueSArPSAoZXllQnJvd0xlZnRQb3NZIC0gdGhpcy5leWVCcm93TGVmdC5wb3NpdGlvbi55KSAvIHNwZWVkO1xuICB9XG5cbiAgaWRsZSh4VGFyZ2V0ID0gMCwgeVRhcmdldCA9IDApIHtcbiAgICBsZXQgZGlzdGFuY2UgPSAxO1xuXG4gICAgdGhpcy5oZWFkLnJvdGF0aW9uLnogPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDUpICogTWF0aC5QSSAqIDAuMDA1O1xuICAgIHRoaXMuaGVhZC5yb3RhdGlvbi54ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDA0KSAqIE1hdGguUEkgKiAwLjAzO1xuXG4gICAgY29uc3QgZXllQmx1ZVJpZ2h0UG9zWCA9IHRoaXMubm9ybWFsaXplKHhUYXJnZXQsIC0yMDAsIDIwMCwgLTAuNiwgMC42KTtcbiAgICBjb25zdCBleWVCbHVlTGVmdFBvc1ggPSB0aGlzLm5vcm1hbGl6ZSh4VGFyZ2V0LCAtMjAwLCAyMDAsIC0wLjYsIDAuNik7XG5cbiAgICBjb25zdCBleWVCbHVlUmlnaHRQb3NZID0gdGhpcy5ub3JtYWxpemUoeVRhcmdldCwgLTIwMCwgMjAwLCAwLjYsIC0wLjYpO1xuICAgIGNvbnN0IGV5ZUJsdWVMZWZ0UG9zWSA9IHRoaXMubm9ybWFsaXplKHlUYXJnZXQsIC0yMDAsIDIwMCwgMC42LCAtMC42KTtcblxuICAgIGNvbnN0IGV5ZUJyb3dSaWdodFBvc1kgPSB0aGlzLm5vcm1hbGl6ZSh4VGFyZ2V0LCAtMjAwLCAyMDAsIC0xLCAwLjgpO1xuICAgIGNvbnN0IGV5ZUJyb3dMZWZ0UG9zWSA9IHRoaXMubm9ybWFsaXplKHhUYXJnZXQsIC0yMDAsIDIwMCwgLTEsIDAuOCk7XG5cbiAgICB0aGlzLm1vdXN0YWNoZS5wb3NpdGlvbi55ID0gTWF0aC5jb3MoRGF0ZS5ub3coKSAqIDAuMDEpICogZGlzdGFuY2UgLyA0O1xuICAgIHRoaXMubW91c3RhY2hlLnJvdGF0aW9uLnogPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMSkgKiBNYXRoLlBJICogMC4wMTtcblxuICAgIHRoaXMubWVzaC5yb3RhdGlvbi55ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDAyKSAqIE1hdGguUEkgKiAwLjA1O1xuICAgIHRoaXMudXBkYXRlQm9keSgxMCwgZXllQmx1ZVJpZ2h0UG9zWCwgZXllQmx1ZUxlZnRQb3NYLCBleWVCbHVlUmlnaHRQb3NZLCBleWVCbHVlTGVmdFBvc1ksIGV5ZUJyb3dSaWdodFBvc1ksIGV5ZUJyb3dMZWZ0UG9zWSk7XG4gIH1cblxuICBCZWFyZCgpIHtcbiAgICBsZXQgYmVhcmRHZW9tTWVyZ2VkID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XG5cbiAgICBsZXQgYmVhcmQxR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyLCAxMCwgMTYpO1xuXG4gICAgbGV0IGJlYXJkMSA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkMUdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmQxLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDksIDAsIDApKTtcbiAgICBiZWFyZDEudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkMS5nZW9tZXRyeSwgYmVhcmQxLm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQyID0gbmV3IFRIUkVFLk1lc2goYmVhcmQxR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBiZWFyZDIuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oNywgLTIsIDIpKTtcbiAgICBiZWFyZDIuc2NhbGUueiA9IDAuODtcbiAgICBiZWFyZDIudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkMi5nZW9tZXRyeSwgYmVhcmQyLm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQzID0gYmVhcmQxLmNsb25lKCk7XG4gICAgYmVhcmQzLnBvc2l0aW9uLnggPSAtYmVhcmQxLnBvc2l0aW9uLng7XG4gICAgYmVhcmQzLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDMuZ2VvbWV0cnksIGJlYXJkMy5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkNCA9IGJlYXJkMi5jbG9uZSgpO1xuICAgIGJlYXJkNC5wb3NpdGlvbi54ID0gLWJlYXJkMi5wb3NpdGlvbi54O1xuICAgIGJlYXJkNC51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQ0Lmdlb21ldHJ5LCBiZWFyZDQubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDJHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDMsIDE0LCAxMCk7XG4gICAgYmVhcmQyR2VvbS52ZXJ0aWNlc1syXS56IC09IDI7XG4gICAgYmVhcmQyR2VvbS52ZXJ0aWNlc1s3XS56IC09IDI7XG5cbiAgICBsZXQgYmVhcmQ1ID0gbmV3IFRIUkVFLk1lc2goYmVhcmQyR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBiZWFyZDUuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oNSwgLTUsIDQpKTtcbiAgICBiZWFyZDUudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkNS5nZW9tZXRyeSwgYmVhcmQ1Lm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQzR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyLjUsIDE0LCAxMCk7XG4gICAgYmVhcmQzR2VvbS52ZXJ0aWNlc1syXS56IC09IDI7XG4gICAgYmVhcmQzR2VvbS52ZXJ0aWNlc1s3XS56IC09IDI7XG5cbiAgICBsZXQgYmVhcmQ2ID0gbmV3IFRIUkVFLk1lc2goYmVhcmQzR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBiZWFyZDYuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oMi41LCAtNiwgNikpO1xuICAgIGJlYXJkNi51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQ2Lmdlb21ldHJ5LCBiZWFyZDYubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDcgPSBiZWFyZDUuY2xvbmUoKTtcbiAgICBiZWFyZDcucG9zaXRpb24ueCA9IC1iZWFyZDUucG9zaXRpb24ueDtcbiAgICBiZWFyZDcudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkNy5nZW9tZXRyeSwgYmVhcmQ3Lm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQ4ID0gYmVhcmQ2LmNsb25lKCk7XG4gICAgYmVhcmQ4LnBvc2l0aW9uLnggPSAtYmVhcmQ2LnBvc2l0aW9uLng7XG4gICAgYmVhcmQ4LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDguZ2VvbWV0cnksIGJlYXJkOC5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkNEdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMi41LCAxNC41LCAxMCk7XG4gICAgYmVhcmQ0R2VvbS52ZXJ0aWNlc1syXS56IC09IDE7XG4gICAgYmVhcmQ0R2VvbS52ZXJ0aWNlc1s3XS56IC09IDE7XG5cbiAgICBsZXQgYmVhcmQ5ID0gbmV3IFRIUkVFLk1lc2goYmVhcmQ0R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBiZWFyZDkuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oMCwgLTcsIDUuNzUpKTtcbiAgICBiZWFyZDkudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkOS5nZW9tZXRyeSwgYmVhcmQ5Lm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQ1R2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSg0LCA4LCA4KTtcbiAgICBsZXQgYmVhcmQxMCA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkNUdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmQxMC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigtNiwgLTEsIC0yKSk7XG4gICAgYmVhcmQxMC51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQxMC5nZW9tZXRyeSwgYmVhcmQxMC5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkMTEgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDVHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkMTEuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oMCwgLTUsIC0yKSk7XG4gICAgYmVhcmQxMS51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQxMS5nZW9tZXRyeSwgYmVhcmQxMS5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkTWVyZ2VkID0gbmV3IFRIUkVFLk1lc2goYmVhcmRHZW9tTWVyZ2VkLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkTWVyZ2VkLmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgIGJlYXJkTWVyZ2VkLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuXG4gICAgbGV0IG1vdXRoR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxMCwgNCwgMSk7XG4gICAgbGV0IG1vdXRoID0gbmV3IFRIUkVFLk1lc2gobW91dGhHZW9tLCBNYXQuYmxhY2tNYXQpO1xuICAgIG1vdXRoLnBvc2l0aW9uLnNldCgwLCAyLCA4KTtcbiAgICBtb3V0aC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgbW91dGgucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG5cbiAgICBsZXQgdGVldGhHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEwLCAxLCAxKTtcbiAgICBsZXQgdGVldGggPSBuZXcgVEhSRUUuTWVzaCh0ZWV0aEdlb20sIE1hdC50ZWV0aE1hdCk7XG4gICAgdGVldGgucG9zaXRpb24uc2V0KDAsIDAuNSwgMC4xKTtcbiAgICB0ZWV0aC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGVldGgucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG4gICAgbW91dGguYWRkKHRlZXRoKVxuXG4gICAgdGhpcy5iZWFyZC5hZGQoYmVhcmRNZXJnZWQsIG1vdXRoKTtcblxuICAgIGxldCBtb3VzdGFjaGVHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDE0LCAzLCAzLCAzKTtcbiAgICBtb3VzdGFjaGVHZW9tLnZlcnRpY2VzWzBdLnkgLT0gMjtcbiAgICBtb3VzdGFjaGVHZW9tLnZlcnRpY2VzWzFdLnkgLT0gMjtcbiAgICBtb3VzdGFjaGVHZW9tLnZlcnRpY2VzWzJdLnkgLT0gMjtcbiAgICBtb3VzdGFjaGVHZW9tLnZlcnRpY2VzWzNdLnkgLT0gMjtcbiAgICBtb3VzdGFjaGVHZW9tLnZlcnRpY2VzWzRdLnkgLT0gMjtcbiAgICBtb3VzdGFjaGVHZW9tLnZlcnRpY2VzWzVdLnkgLT0gMjtcbiAgICBtb3VzdGFjaGVHZW9tLnZlcnRpY2VzWzZdLnkgLT0gMjtcbiAgICBtb3VzdGFjaGVHZW9tLnZlcnRpY2VzWzddLnkgLT0gMjtcbiAgICBtb3VzdGFjaGVHZW9tLnZlcnRpY2VzWzhdLnggLT0gMTtcbiAgICBtb3VzdGFjaGVHZW9tLnZlcnRpY2VzWzldLnggKz0gMTtcblxuICAgIG1vdXN0YWNoZUdlb20uYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oMCwgNCwgMCkpO1xuICAgIHRoaXMubW91c3RhY2hlID0gbmV3IFRIUkVFLk1lc2gobW91c3RhY2hlR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICB0aGlzLm1vdXN0YWNoZS5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICB0aGlzLm1vdXN0YWNoZS5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcblxuICAgIHRoaXMubW91c3RhY2hlLnBvc2l0aW9uLnNldCgwLCAwLCA5KTtcbiAgICB0aGlzLmJlYXJkLmFkZCh0aGlzLm1vdXN0YWNoZSk7XG4gIH1cblxuICBHbGFzc2VzKCkge1xuXG4gICAgdGhpcy5nbGFzc2VzID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgdGhpcy5nbGFzc2VzLnBvc2l0aW9uLnNldCgwLCAwLCA5KTtcbiAgICB0aGlzLmhlYWQuYWRkKHRoaXMuZ2xhc3Nlcyk7XG4gICAgbGV0IGdsYXNzZXNNYXQgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuZ2xhc3NlcywgZmxhdFNoYWRpbmc6IHRydWV9KTtcblxuICAgIGxldCBmcmFtZUdlb21NZXJnZWQgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcblxuICAgIGxldCBmcmFtZU91dGVyR2VvbSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDMsIDMsIDAuNSwgMzIpXG4gICAgbGV0IGZyYW1lSW5uZXJHZW9tID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMi43LCAyLjcsIDAuNSwgMzIpXG5cbiAgICBmcmFtZU91dGVyR2VvbS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblgoLU1hdGguUEkgLyAyKSk7XG4gICAgZnJhbWVJbm5lckdlb20uYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25YKC1NYXRoLlBJIC8gMikpO1xuXG4gICAgbGV0IGZyYW1lQlNQID0gbmV3IFRocmVlQlNQKGZyYW1lT3V0ZXJHZW9tKTtcbiAgICBsZXQgZnJhbWVDdXRCU1AgPSBuZXcgVGhyZWVCU1AoZnJhbWVJbm5lckdlb20pO1xuXG4gICAgbGV0IGZyYW1laW50ZXJzZWN0aW9uQlNQID0gZnJhbWVCU1Auc3VidHJhY3QoZnJhbWVDdXRCU1ApO1xuICAgIGxldCBmcmFtZUxlZnQgPSBmcmFtZWludGVyc2VjdGlvbkJTUC50b01lc2goZ2xhc3Nlc01hdCk7XG5cbiAgICBmcmFtZUxlZnQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oNCwgMywgMCkpO1xuICAgIGZyYW1lTGVmdC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmFtZUdlb21NZXJnZWQubWVyZ2UoZnJhbWVMZWZ0Lmdlb21ldHJ5LCBmcmFtZUxlZnQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZVJpZ2h0ID0gZnJhbWVMZWZ0LmNsb25lKCk7XG4gICAgZnJhbWVSaWdodC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooTWF0aC5QSSAvIDMwKSk7XG4gICAgZnJhbWVSaWdodC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigtNy41LCAtMC4yNSwgMCkpO1xuICAgIGZyYW1lUmlnaHQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJhbWVHZW9tTWVyZ2VkLm1lcmdlKGZyYW1lUmlnaHQuZ2VvbWV0cnksIGZyYW1lUmlnaHQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZU1pZEdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMiwgLjMsIC41KTtcbiAgICBsZXQgZnJhbWVNaWQgPSBuZXcgVEhSRUUuTWVzaChmcmFtZU1pZEdlb20sIGdsYXNzZXNNYXQpO1xuICAgIGZyYW1lTWlkLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDAsIDMuMywgLTAuMykpO1xuICAgIGZyYW1lTWlkLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyYW1lR2VvbU1lcmdlZC5tZXJnZShmcmFtZU1pZC5nZW9tZXRyeSwgZnJhbWVNaWQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZUVuZEdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMS41LCAuNSwgMSk7XG4gICAgbGV0IGZyYW1lRW5kUmlnaHQgPSBuZXcgVEhSRUUuTWVzaChmcmFtZUVuZEdlb20sIGdsYXNzZXNNYXQpO1xuICAgIGZyYW1lRW5kUmlnaHQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oNy41LCAzLCAwKSk7XG4gICAgZnJhbWVFbmRSaWdodC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmFtZUdlb21NZXJnZWQubWVyZ2UoZnJhbWVFbmRSaWdodC5nZW9tZXRyeSwgZnJhbWVFbmRSaWdodC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lRW5kTGVmdCA9IGZyYW1lRW5kUmlnaHQuY2xvbmUoKTtcbiAgICBmcmFtZUVuZExlZnQucG9zaXRpb24ueCA9IC1mcmFtZUVuZFJpZ2h0LnBvc2l0aW9uLng7XG4gICAgZnJhbWVFbmRMZWZ0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyYW1lR2VvbU1lcmdlZC5tZXJnZShmcmFtZUVuZExlZnQuZ2VvbWV0cnksIGZyYW1lRW5kTGVmdC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lU3Bva2VHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIDAuNSwgMTIpO1xuICAgIGxldCBmcmFtZVNwb2tlUmlnaHQgPSBuZXcgVEhSRUUuTWVzaChmcmFtZVNwb2tlR2VvbSwgZ2xhc3Nlc01hdCk7XG4gICAgZnJhbWVTcG9rZVJpZ2h0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDgsIDMsIC01LjUpKTtcbiAgICBmcmFtZVNwb2tlUmlnaHQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJhbWVHZW9tTWVyZ2VkLm1lcmdlKGZyYW1lU3Bva2VSaWdodC5nZW9tZXRyeSwgZnJhbWVTcG9rZVJpZ2h0Lm1hdHJpeCk7XG5cbiAgICBsZXQgZnJhbWVTcG9rZUxlZnQgPSBmcmFtZVNwb2tlUmlnaHQuY2xvbmUoKTtcbiAgICBmcmFtZVNwb2tlTGVmdC5wb3NpdGlvbi54ID0gLWZyYW1lU3Bva2VSaWdodC5wb3NpdGlvbi54O1xuICAgIGZyYW1lU3Bva2VMZWZ0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyYW1lR2VvbU1lcmdlZC5tZXJnZShmcmFtZVNwb2tlTGVmdC5nZW9tZXRyeSwgZnJhbWVTcG9rZUxlZnQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZU1lcmdlZCA9IG5ldyBUSFJFRS5NZXNoKGZyYW1lR2VvbU1lcmdlZCwgZ2xhc3Nlc01hdCk7XG4gICAgZnJhbWVNZXJnZWQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIGZyYW1lTWVyZ2VkLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuXG4gICAgdGhpcy5nbGFzc2VzLmFkZChmcmFtZU1lcmdlZCk7XG5cbiAgfVxuXG4gIEhhaXIoKSB7XG5cbiAgICB0aGlzLmhhaXIgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmhhaXIucG9zaXRpb24uc2V0KDAsIDksIDApO1xuICAgIHRoaXMuaGVhZC5hZGQodGhpcy5oYWlyKTtcblxuICAgIGxldCBoYWlyR2VvbU1lcmdlZCA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuXG4gICAgbGV0IGhhaXJGbGF0R2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxMCwgMiwgMTgpO1xuXG4gICAgbGV0IGhhaXIxID0gbmV3IFRIUkVFLk1lc2goaGFpckZsYXRHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGhhaXIxLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWigtTWF0aC5QSSAvIDQwKSk7XG4gICAgaGFpcjEuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oLTQsIC0wLjUsIDApKTtcbiAgICBoYWlyMS51cGRhdGVNYXRyaXgoKTtcbiAgICBoYWlyR2VvbU1lcmdlZC5tZXJnZShoYWlyMS5nZW9tZXRyeSwgaGFpcjEubWF0cml4KTtcblxuICAgIGxldCBoYWlyMiA9IG5ldyBUSFJFRS5NZXNoKGhhaXJGbGF0R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyMi5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooLU1hdGguUEkgLyAxMCkpO1xuICAgIGhhaXIyLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKC0yLCAxLCAwKSk7XG4gICAgaGFpcjIudXBkYXRlTWF0cml4KCk7XG4gICAgaGFpckdlb21NZXJnZWQubWVyZ2UoaGFpcjIuZ2VvbWV0cnksIGhhaXIyLm1hdHJpeCk7XG5cbiAgICBsZXQgaGFpcjMgPSBuZXcgVEhSRUUuTWVzaChoYWlyRmxhdEdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgaGFpcjMuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKC1NYXRoLlBJIC8gNSkpO1xuICAgIGhhaXIzLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDIsIDEsIDApKTtcbiAgICBoYWlyMy51cGRhdGVNYXRyaXgoKTtcbiAgICBoYWlyR2VvbU1lcmdlZC5tZXJnZShoYWlyMy5nZW9tZXRyeSwgaGFpcjMubWF0cml4KTtcblxuICAgIGxldCBoYWlyNCA9IG5ldyBUSFJFRS5NZXNoKGhhaXJGbGF0R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyNC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooLU1hdGguUEkgLyA0KSk7XG4gICAgaGFpcjQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oNiwgMCwgMCkpO1xuICAgIGhhaXI0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGhhaXJHZW9tTWVyZ2VkLm1lcmdlKGhhaXI0Lmdlb21ldHJ5LCBoYWlyNC5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXI2ID0gbmV3IFRIUkVFLk1lc2goaGFpckZsYXRHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGhhaXI2LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWigtTWF0aC5QSSAvIC0zKSk7XG4gICAgaGFpcjYuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oLTcuNzUsIC0uNSwgMCkpO1xuICAgIGhhaXI2LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGhhaXJHZW9tTWVyZ2VkLm1lcmdlKGhhaXI2Lmdlb21ldHJ5LCBoYWlyNi5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXJGbGF0QmFja0dlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTgsIDcsIDYpO1xuICAgIGhhaXJGbGF0QmFja0dlb20udmVydGljZXNbMF0ueCAtPSAxO1xuICAgIGhhaXJGbGF0QmFja0dlb20udmVydGljZXNbMV0ueCAtPSAxO1xuICAgIGhhaXJGbGF0QmFja0dlb20udmVydGljZXNbNF0ueCArPSAxO1xuICAgIGhhaXJGbGF0QmFja0dlb20udmVydGljZXNbNV0ueCArPSAxO1xuXG4gICAgbGV0IGhhaXI1ID0gbmV3IFRIUkVFLk1lc2goaGFpckZsYXRCYWNrR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyNS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigwLCAtNC41LCAtNikpO1xuICAgIGhhaXI1LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGhhaXJHZW9tTWVyZ2VkLm1lcmdlKGhhaXI1Lmdlb21ldHJ5LCBoYWlyNS5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXJNZXJnZWQgPSBuZXcgVEhSRUUuTWVzaChoYWlyR2VvbU1lcmdlZCwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyTWVyZ2VkLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBoYWlyTWVyZ2VkLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuXG4gICAgdGhpcy5oYWlyLmFkZChoYWlyTWVyZ2VkKTtcblxuICB9XG5cbiAgRXllcygpIHtcblxuICAgIHRoaXMuZXllcyA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHRoaXMuZXllcy5wb3NpdGlvbi5zZXQoMCwgMywgOSk7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmV5ZXMpO1xuXG4gICAgbGV0IGV5ZVdoaXRlR2VvbSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDIuNSwgMi41KTtcblxuICAgIGxldCBleWVXaGl0ZVJpZ2h0ID0gbmV3IFRIUkVFLk1lc2goZXllV2hpdGVHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGV5ZVdoaXRlUmlnaHQucG9zaXRpb24uc2V0KC0zLjc1LCAwLCAwKTtcbiAgICBleWVXaGl0ZVJpZ2h0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBleWVXaGl0ZVJpZ2h0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIGxldCBleWVCbHVlR2VvbSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDEuNSwgMS41KTtcblxuICAgIGxldCBleWVNYXQgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuZXllLCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuXG4gICAgdGhpcy5leWVCbHVlUmlnaHQgPSBuZXcgVEhSRUUuTWVzaChleWVCbHVlR2VvbSwgZXllTWF0KTtcbiAgICB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi5zZXQoMCwgMCwgLjAxKTtcbiAgICB0aGlzLmV5ZUJsdWVSaWdodC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5leWVCbHVlUmlnaHQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgZXllV2hpdGVSaWdodC5hZGQodGhpcy5leWVCbHVlUmlnaHQpO1xuXG4gICAgbGV0IGV5ZVB1cGlsR2VvbSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDEsIDEpO1xuXG4gICAgdGhpcy5leWVQdXBpbFJpZ2h0ID0gbmV3IFRIUkVFLk1lc2goZXllUHVwaWxHZW9tLCBNYXQuYmxhY2tNYXQpO1xuICAgIHRoaXMuZXllUHVwaWxSaWdodC5wb3NpdGlvbi5zZXQoMCwgMCwgLjAyKTtcbiAgICB0aGlzLmV5ZVB1cGlsUmlnaHQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuZXllUHVwaWxSaWdodC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmV5ZUJsdWVSaWdodC5hZGQodGhpcy5leWVQdXBpbFJpZ2h0KTtcblxuICAgIGxldCBleWVXaGl0ZUxlZnQgPSBuZXcgVEhSRUUuTWVzaChleWVXaGl0ZUdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgZXllV2hpdGVMZWZ0LnBvc2l0aW9uLnNldCgzLjc1LCAwLCAwKTtcbiAgICBleWVXaGl0ZUxlZnQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIGV5ZVdoaXRlTGVmdC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmV5ZUJsdWVMZWZ0ID0gbmV3IFRIUkVFLk1lc2goZXllQmx1ZUdlb20sIGV5ZU1hdCk7XG4gICAgdGhpcy5leWVCbHVlTGVmdC5wb3NpdGlvbi5zZXQoMCwgMCwgLjAxKTtcbiAgICB0aGlzLmV5ZUJsdWVMZWZ0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmV5ZUJsdWVMZWZ0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIGV5ZVdoaXRlTGVmdC5hZGQodGhpcy5leWVCbHVlTGVmdCk7XG5cbiAgICB0aGlzLmV5ZVB1cGlsTGVmdCA9IG5ldyBUSFJFRS5NZXNoKGV5ZVB1cGlsR2VvbSwgTWF0LmJsYWNrTWF0KTtcbiAgICB0aGlzLmV5ZVB1cGlsTGVmdC5wb3NpdGlvbi5zZXQoMCwgMCwgLjAyKTtcbiAgICB0aGlzLmV5ZVB1cGlsTGVmdC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5leWVQdXBpbExlZnQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5leWVCbHVlTGVmdC5hZGQodGhpcy5leWVQdXBpbExlZnQpO1xuXG4gICAgdGhpcy5leWVzLmFkZChleWVXaGl0ZVJpZ2h0LCBleWVXaGl0ZUxlZnQpO1xuICB9XG5cbiAgRXllQnJvd3MoKSB7XG4gICAgdGhpcy5leWVCcm93cyA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHRoaXMuZXllQnJvd3MucG9zaXRpb24uc2V0KDAsIDYsIDgpO1xuICAgIHRoaXMuaGVhZC5hZGQodGhpcy5leWVCcm93cyk7XG5cbiAgICBsZXQgZXllQnJvd0dlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoNCwgMSwgMSk7XG5cbiAgICB0aGlzLmV5ZUJyb3dSaWdodCA9IG5ldyBUSFJFRS5NZXNoKGV5ZUJyb3dHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIHRoaXMuZXllQnJvd1JpZ2h0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWihNYXRoLlBJIC8gNDUpKTtcbiAgICB0aGlzLmV5ZUJyb3dSaWdodC5wb3NpdGlvbi5zZXQoLTMuNzUsIDAsIDApO1xuICAgIHRoaXMuZXllQnJvd1JpZ2h0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmV5ZUJyb3dSaWdodC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmV5ZUJyb3dMZWZ0ID0gbmV3IFRIUkVFLk1lc2goZXllQnJvd0dlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgdGhpcy5leWVCcm93TGVmdC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooLU1hdGguUEkgLyA0NSkpO1xuICAgIHRoaXMuZXllQnJvd0xlZnQucG9zaXRpb24uc2V0KDMuNzUsIDAsIDApO1xuICAgIHRoaXMuZXllQnJvd0xlZnQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuZXllQnJvd0xlZnQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5leWVCcm93cy5hZGQodGhpcy5leWVCcm93UmlnaHQsIHRoaXMuZXllQnJvd0xlZnQpO1xuICB9XG5cbiAgSGF0KCkge1xuICAgIHRoaXMuaGF0ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgdGhpcy5oYXQucG9zaXRpb24uc2V0KC0wLjIsIDExLCAyLjQpO1xuICAgIHRoaXMuaGVhZC5hZGQodGhpcy5oYXQpO1xuXG4gICAgbGV0IGhhdE1hdCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5oYXQsIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG5cbiAgICBsZXQgYmFuZEdlb20gPSBuZXcgVEhSRUUuVG9ydXNHZW9tZXRyeSg5LCAyLCAxNiwgMTAwKTtcbiAgICBsZXQgYmlnQ29uZUdlb20gPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgxLCAxMSwgMTIsIDE1KTtcbiAgICBsZXQgc21hbGxDb25lR2VvbSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDAuOCwgMywgOSwgMzIpO1xuICAgIGxldCBoYXREaW5nbGVHZW9tID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDEuNSwgOCwgOCk7XG5cbiAgICB0aGlzLmJhbmQgPSBuZXcgVEhSRUUuTWVzaChiYW5kR2VvbSwgTWF0LnRlZXRoTWF0KTtcbiAgICB0aGlzLmJhbmQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25YKE1hdGguUEkgLyAyKSk7XG4gICAgdGhpcy5iYW5kLnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcbiAgICB0aGlzLmJhbmQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuYmFuZC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmJpZ0NvbmUgPSBuZXcgVEhSRUUuTWVzaChiaWdDb25lR2VvbSwgaGF0TWF0KTtcbiAgICB0aGlzLmJpZ0NvbmUucG9zaXRpb24uc2V0KDAsIDYsIDApO1xuICAgIHRoaXMuYmlnQ29uZS5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5iaWdDb25lLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuc21hbGxDb25lID0gbmV3IFRIUkVFLk1lc2goc21hbGxDb25lR2VvbSwgaGF0TWF0KTtcbiAgICB0aGlzLnNtYWxsQ29uZS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblgoTWF0aC5QSSAvIDIpKTtcbiAgICB0aGlzLnNtYWxsQ29uZS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblkoTWF0aC5QSSAvIDIpKTtcbiAgICB0aGlzLnNtYWxsQ29uZS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooTWF0aC5QSSAvIC04KSk7XG4gICAgdGhpcy5zbWFsbENvbmUucG9zaXRpb24uc2V0KDQsIDcuOCwgLTEpO1xuICAgIHRoaXMuc21hbGxDb25lLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLnNtYWxsQ29uZS5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmhhdERpbmdsZSA9IG5ldyBUSFJFRS5NZXNoKGhhdERpbmdsZUdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgdGhpcy5oYXREaW5nbGUucG9zaXRpb24uc2V0KDksIDUuNSwgLTEpO1xuICAgIHRoaXMuaGF0RGluZ2xlLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmhhdERpbmdsZS5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmhhdC5hZGQodGhpcy5iYW5kLCB0aGlzLmJpZ0NvbmUsIHRoaXMuc21hbGxDb25lLCB0aGlzLmhhdERpbmdsZSk7XG4gIH1cblxuICBGcmVja2xlcygpIHtcbiAgICB0aGlzLmZyZWNrbGVzID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgdGhpcy5mcmVja2xlcy5wb3NpdGlvbi5zZXQoMCwgMCwgOCk7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmZyZWNrbGVzKTtcblxuICAgIGxldCBmcmVja2xlc01hdCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmZyZWNrbGVzLCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuICAgIGxldCBmcmVja2xlc0dlb21NZXJnZWQgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcblxuICAgIGxldCBmcmVja2xlc0dlb20gPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSgwLjUsIDAuNSk7XG5cbiAgICBsZXQgZnJlY2tsZTEgPSBuZXcgVEhSRUUuTWVzaChmcmVja2xlc0dlb20sIGZyZWNrbGVzTWF0KTtcbiAgICBmcmVja2xlMS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigtNSwgMCwgMC4wMSkpO1xuICAgIGZyZWNrbGUxLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyZWNrbGVzR2VvbU1lcmdlZC5tZXJnZShmcmVja2xlMS5nZW9tZXRyeSwgZnJlY2tsZTEubWF0cml4KTtcblxuICAgIGxldCBmcmVja2xlMiA9IGZyZWNrbGUxLmNsb25lKCk7XG4gICAgZnJlY2tsZTIuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oLTAuNSwgLTEsIDApKTtcbiAgICBmcmVja2xlMi51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmVja2xlc0dlb21NZXJnZWQubWVyZ2UoZnJlY2tsZTIuZ2VvbWV0cnksIGZyZWNrbGUyLm1hdHJpeCk7XG5cbiAgICBsZXQgZnJlY2tsZTMgPSBmcmVja2xlMS5jbG9uZSgpO1xuICAgIGZyZWNrbGUzLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDEsIC0wLjUsIDApKTtcbiAgICBmcmVja2xlMy51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmVja2xlc0dlb21NZXJnZWQubWVyZ2UoZnJlY2tsZTMuZ2VvbWV0cnksIGZyZWNrbGUzLm1hdHJpeCk7XG5cbiAgICBsZXQgZnJlY2tsZTQgPSBmcmVja2xlMS5jbG9uZSgpO1xuICAgIGZyZWNrbGU0LnBvc2l0aW9uLnggPSAtZnJlY2tsZTEucG9zaXRpb24ueDtcbiAgICBmcmVja2xlNC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmVja2xlc0dlb21NZXJnZWQubWVyZ2UoZnJlY2tsZTQuZ2VvbWV0cnksIGZyZWNrbGU0Lm1hdHJpeCk7XG4gICAgbGV0IGZyZWNrbGU1ID0gZnJlY2tsZTIuY2xvbmUoKTtcbiAgICBmcmVja2xlNS5wb3NpdGlvbi54ID0gLWZyZWNrbGUyLnBvc2l0aW9uLng7XG4gICAgZnJlY2tsZTUudXBkYXRlTWF0cml4KCk7XG4gICAgZnJlY2tsZXNHZW9tTWVyZ2VkLm1lcmdlKGZyZWNrbGU1Lmdlb21ldHJ5LCBmcmVja2xlNS5tYXRyaXgpO1xuICAgIGxldCBmcmVja2xlNiA9IGZyZWNrbGUzLmNsb25lKCk7XG4gICAgZnJlY2tsZTYucG9zaXRpb24ueCA9IC1mcmVja2xlMy5wb3NpdGlvbi54O1xuICAgIGZyZWNrbGU2LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyZWNrbGVzR2VvbU1lcmdlZC5tZXJnZShmcmVja2xlNi5nZW9tZXRyeSwgZnJlY2tsZTYubWF0cml4KTtcblxuICAgIGxldCBmcmVja2xlZE1lcmdlZCA9IG5ldyBUSFJFRS5NZXNoKGZyZWNrbGVzR2VvbU1lcmdlZCwgZnJlY2tsZXNNYXQpO1xuICAgIGZyZWNrbGVkTWVyZ2VkLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBmcmVja2xlZE1lcmdlZC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmZyZWNrbGVzLmFkZChmcmVja2xlZE1lcmdlZCk7XG4gIH1cblxuICBGZWF0dXJlcygpIHtcbiAgICBsZXQgZWFyR2VvbSA9IG5ldyBUSFJFRS5Cb3hCdWZmZXJHZW9tZXRyeSgxLjUsIDMsIDEuNSk7XG4gICAgbGV0IHNraW5NYXQgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5za2luLCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuICAgIGxldCBlYXJSaWdodCA9IG5ldyBUSFJFRS5NZXNoKGVhckdlb20sIHNraW5NYXQpO1xuICAgIGVhclJpZ2h0LnBvc2l0aW9uLnNldCgtOC41LCAxLCAzKTtcbiAgICBlYXJSaWdodC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgZWFyUmlnaHQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgbGV0IGVhckxlZnQgPSBuZXcgVEhSRUUuTWVzaChlYXJHZW9tLCBza2luTWF0KTtcbiAgICBlYXJMZWZ0LnBvc2l0aW9uLnNldCg4LjUsIDEsIDMpO1xuICAgIGVhckxlZnQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIGVhckxlZnQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgbGV0IG5vc2VHZW9tID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMSwgMiwgNCwgNCk7XG4gICAgbGV0IG5vc2UgPSBuZXcgVEhSRUUuTWVzaChub3NlR2VvbSwgc2tpbk1hdCk7XG4gICAgbm9zZS5zY2FsZS5zZXQoLjc1LCAxLCAxLjMpO1xuICAgIG5vc2UucG9zaXRpb24uc2V0KDAsIDEsIDgpO1xuICAgIG5vc2UuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIG5vc2UucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5oZWFkLmFkZChlYXJSaWdodCwgZWFyTGVmdCwgbm9zZSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jbGFzc2VzL0hlYWQuanMiLCJpbXBvcnQgQ29sb3JzIGZyb20gJy4vY29sb3JzJztcbmNvbnN0IE1hdGVyaWFscyA9IHtcbiAgXCJ3aGl0ZU1hdFwiOiBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy53aGl0ZSwgZmxhdFNoYWRpbmc6IHRydWV9KSxcbiAgXCJ0ZWV0aE1hdFwiOiBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMudGVldGgsIGZsYXRTaGFkaW5nOiB0cnVlfSksXG4gIFwiYmxhY2tNYXRcIjogbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuYmxhY2ssIGZsYXRTaGFkaW5nOiB0cnVlfSksXG4gIFwibm9ybWFsTWF0XCI6IG5ldyBUSFJFRS5NZXNoTm9ybWFsTWF0ZXJpYWwoe30pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXRlcmlhbHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvb2JqZWN0cy9NYXRlcmlhbHMuanMiLCIoZnVuY3Rpb24oc2VsZikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgaWYgKHNlbGYuZmV0Y2gpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBzdXBwb3J0ID0ge1xuICAgIHNlYXJjaFBhcmFtczogJ1VSTFNlYXJjaFBhcmFtcycgaW4gc2VsZixcbiAgICBpdGVyYWJsZTogJ1N5bWJvbCcgaW4gc2VsZiAmJiAnaXRlcmF0b3InIGluIFN5bWJvbCxcbiAgICBibG9iOiAnRmlsZVJlYWRlcicgaW4gc2VsZiAmJiAnQmxvYicgaW4gc2VsZiAmJiAoZnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBuZXcgQmxvYigpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSkoKSxcbiAgICBmb3JtRGF0YTogJ0Zvcm1EYXRhJyBpbiBzZWxmLFxuICAgIGFycmF5QnVmZmVyOiAnQXJyYXlCdWZmZXInIGluIHNlbGZcbiAgfVxuXG4gIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyKSB7XG4gICAgdmFyIHZpZXdDbGFzc2VzID0gW1xuICAgICAgJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nXG4gICAgXVxuXG4gICAgdmFyIGlzRGF0YVZpZXcgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgRGF0YVZpZXcucHJvdG90eXBlLmlzUHJvdG90eXBlT2Yob2JqKVxuICAgIH1cblxuICAgIHZhciBpc0FycmF5QnVmZmVyVmlldyA9IEFycmF5QnVmZmVyLmlzVmlldyB8fCBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdmlld0NsYXNzZXMuaW5kZXhPZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSkgPiAtMVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWUobmFtZSkge1xuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWUgPSBTdHJpbmcobmFtZSlcbiAgICB9XG4gICAgaWYgKC9bXmEtejAtOVxcLSMkJSYnKisuXFxeX2B8fl0vaS50ZXN0KG5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGNoYXJhY3RlciBpbiBoZWFkZXIgZmllbGQgbmFtZScpXG4gICAgfVxuICAgIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8vIEJ1aWxkIGEgZGVzdHJ1Y3RpdmUgaXRlcmF0b3IgZm9yIHRoZSB2YWx1ZSBsaXN0XG4gIGZ1bmN0aW9uIGl0ZXJhdG9yRm9yKGl0ZW1zKSB7XG4gICAgdmFyIGl0ZXJhdG9yID0ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGl0ZW1zLnNoaWZ0KClcbiAgICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZXJhdG9yXG4gIH1cblxuICBmdW5jdGlvbiBIZWFkZXJzKGhlYWRlcnMpIHtcbiAgICB0aGlzLm1hcCA9IHt9XG5cbiAgICBpZiAoaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCB2YWx1ZSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGhlYWRlcnMpKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24oaGVhZGVyKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKGhlYWRlclswXSwgaGVhZGVyWzFdKVxuICAgICAgfSwgdGhpcylcbiAgICB9IGVsc2UgaWYgKGhlYWRlcnMpIHtcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCBoZWFkZXJzW25hbWVdKVxuICAgICAgfSwgdGhpcylcbiAgICB9XG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gICAgdmFsdWUgPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbiAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLm1hcFtuYW1lXVxuICAgIHRoaXMubWFwW25hbWVdID0gb2xkVmFsdWUgPyBvbGRWYWx1ZSsnLCcrdmFsdWUgOiB2YWx1ZVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGVbJ2RlbGV0ZSddID0gZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gICAgcmV0dXJuIHRoaXMuaGFzKG5hbWUpID8gdGhpcy5tYXBbbmFtZV0gOiBudWxsXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmhhc093blByb3BlcnR5KG5vcm1hbGl6ZU5hbWUobmFtZSkpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMubWFwKSB7XG4gICAgICBpZiAodGhpcy5tYXAuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzLm1hcFtuYW1lXSwgbmFtZSwgdGhpcylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChuYW1lKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7IGl0ZW1zLnB1c2godmFsdWUpIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2goW25hbWUsIHZhbHVlXSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgIEhlYWRlcnMucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzXG4gIH1cblxuICBmdW5jdGlvbiBjb25zdW1lZChib2R5KSB7XG4gICAgaWYgKGJvZHkuYm9keVVzZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKSlcbiAgICB9XG4gICAgYm9keS5ib2R5VXNlZCA9IHRydWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdClcbiAgICAgIH1cbiAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRCbG9iQXNBcnJheUJ1ZmZlcihibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRCbG9iQXNUZXh0KGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgICByZWFkZXIucmVhZEFzVGV4dChibG9iKVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQXJyYXlCdWZmZXJBc1RleHQoYnVmKSB7XG4gICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYpXG4gICAgdmFyIGNoYXJzID0gbmV3IEFycmF5KHZpZXcubGVuZ3RoKVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aWV3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGFyc1tpXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUodmlld1tpXSlcbiAgICB9XG4gICAgcmV0dXJuIGNoYXJzLmpvaW4oJycpXG4gIH1cblxuICBmdW5jdGlvbiBidWZmZXJDbG9uZShidWYpIHtcbiAgICBpZiAoYnVmLnNsaWNlKSB7XG4gICAgICByZXR1cm4gYnVmLnNsaWNlKDApXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmLmJ5dGVMZW5ndGgpXG4gICAgICB2aWV3LnNldChuZXcgVWludDhBcnJheShidWYpKVxuICAgICAgcmV0dXJuIHZpZXcuYnVmZmVyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gQm9keSgpIHtcbiAgICB0aGlzLmJvZHlVc2VkID0gZmFsc2VcblxuICAgIHRoaXMuX2luaXRCb2R5ID0gZnVuY3Rpb24oYm9keSkge1xuICAgICAgdGhpcy5fYm9keUluaXQgPSBib2R5XG4gICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSAnJ1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYmxvYiAmJiBCbG9iLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlCbG9iID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmZvcm1EYXRhICYmIEZvcm1EYXRhLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlGb3JtRGF0YSA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keS50b1N0cmluZygpXG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgc3VwcG9ydC5ibG9iICYmIGlzRGF0YVZpZXcoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keS5idWZmZXIpXG4gICAgICAgIC8vIElFIDEwLTExIGNhbid0IGhhbmRsZSBhIERhdGFWaWV3IGJvZHkuXG4gICAgICAgIHRoaXMuX2JvZHlJbml0ID0gbmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pXG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgKEFycmF5QnVmZmVyLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpIHx8IGlzQXJyYXlCdWZmZXJWaWV3KGJvZHkpKSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnN1cHBvcnRlZCBCb2R5SW5pdCB0eXBlJylcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSkge1xuICAgICAgICBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCcpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUJsb2IgJiYgdGhpcy5fYm9keUJsb2IudHlwZSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsIHRoaXMuX2JvZHlCbG9iLnR5cGUpXG4gICAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04JylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0LmJsb2IpIHtcbiAgICAgIHRoaXMuYmxvYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSkpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIGJsb2InKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlUZXh0XSkpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnN1bWVkKHRoaXMpIHx8IFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYmxvYigpLnRoZW4ocmVhZEJsb2JBc0FycmF5QnVmZmVyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50ZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgcmV0dXJuIHJlYWRCbG9iQXNUZXh0KHRoaXMuX2JvZHlCbG9iKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZWFkQXJyYXlCdWZmZXJBc1RleHQodGhpcy5fYm9keUFycmF5QnVmZmVyKSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyB0ZXh0JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keVRleHQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuZm9ybURhdGEpIHtcbiAgICAgIHRoaXMuZm9ybURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oZGVjb2RlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuanNvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oSlNPTi5wYXJzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gSFRUUCBtZXRob2RzIHdob3NlIGNhcGl0YWxpemF0aW9uIHNob3VsZCBiZSBub3JtYWxpemVkXG4gIHZhciBtZXRob2RzID0gWydERUxFVEUnLCAnR0VUJywgJ0hFQUQnLCAnT1BUSU9OUycsICdQT1NUJywgJ1BVVCddXG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTWV0aG9kKG1ldGhvZCkge1xuICAgIHZhciB1cGNhc2VkID0gbWV0aG9kLnRvVXBwZXJDYXNlKClcbiAgICByZXR1cm4gKG1ldGhvZHMuaW5kZXhPZih1cGNhc2VkKSA+IC0xKSA/IHVwY2FzZWQgOiBtZXRob2RcbiAgfVxuXG4gIGZ1bmN0aW9uIFJlcXVlc3QoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICAgIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5XG5cbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBSZXF1ZXN0KSB7XG4gICAgICBpZiAoaW5wdXQuYm9keVVzZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJylcbiAgICAgIH1cbiAgICAgIHRoaXMudXJsID0gaW5wdXQudXJsXG4gICAgICB0aGlzLmNyZWRlbnRpYWxzID0gaW5wdXQuY3JlZGVudGlhbHNcbiAgICAgIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKGlucHV0LmhlYWRlcnMpXG4gICAgICB9XG4gICAgICB0aGlzLm1ldGhvZCA9IGlucHV0Lm1ldGhvZFxuICAgICAgdGhpcy5tb2RlID0gaW5wdXQubW9kZVxuICAgICAgaWYgKCFib2R5ICYmIGlucHV0Ll9ib2R5SW5pdCAhPSBudWxsKSB7XG4gICAgICAgIGJvZHkgPSBpbnB1dC5fYm9keUluaXRcbiAgICAgICAgaW5wdXQuYm9keVVzZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXJsID0gU3RyaW5nKGlucHV0KVxuICAgIH1cblxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBvcHRpb25zLmNyZWRlbnRpYWxzIHx8IHRoaXMuY3JlZGVudGlhbHMgfHwgJ29taXQnXG4gICAgaWYgKG9wdGlvbnMuaGVhZGVycyB8fCAhdGhpcy5oZWFkZXJzKSB7XG4gICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gICAgfVxuICAgIHRoaXMubWV0aG9kID0gbm9ybWFsaXplTWV0aG9kKG9wdGlvbnMubWV0aG9kIHx8IHRoaXMubWV0aG9kIHx8ICdHRVQnKVxuICAgIHRoaXMubW9kZSA9IG9wdGlvbnMubW9kZSB8fCB0aGlzLm1vZGUgfHwgbnVsbFxuICAgIHRoaXMucmVmZXJyZXIgPSBudWxsXG5cbiAgICBpZiAoKHRoaXMubWV0aG9kID09PSAnR0VUJyB8fCB0aGlzLm1ldGhvZCA9PT0gJ0hFQUQnKSAmJiBib2R5KSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb2R5IG5vdCBhbGxvd2VkIGZvciBHRVQgb3IgSEVBRCByZXF1ZXN0cycpXG4gICAgfVxuICAgIHRoaXMuX2luaXRCb2R5KGJvZHkpXG4gIH1cblxuICBSZXF1ZXN0LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCh0aGlzLCB7IGJvZHk6IHRoaXMuX2JvZHlJbml0IH0pXG4gIH1cblxuICBmdW5jdGlvbiBkZWNvZGUoYm9keSkge1xuICAgIHZhciBmb3JtID0gbmV3IEZvcm1EYXRhKClcbiAgICBib2R5LnRyaW0oKS5zcGxpdCgnJicpLmZvckVhY2goZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGlmIChieXRlcykge1xuICAgICAgICB2YXIgc3BsaXQgPSBieXRlcy5zcGxpdCgnPScpXG4gICAgICAgIHZhciBuYW1lID0gc3BsaXQuc2hpZnQoKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICB2YXIgdmFsdWUgPSBzcGxpdC5qb2luKCc9JykucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgZm9ybS5hcHBlbmQoZGVjb2RlVVJJQ29tcG9uZW50KG5hbWUpLCBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGZvcm1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhyYXdIZWFkZXJzKSB7XG4gICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpXG4gICAgcmF3SGVhZGVycy5zcGxpdCgvXFxyP1xcbi8pLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xuICAgICAgdmFyIHBhcnRzID0gbGluZS5zcGxpdCgnOicpXG4gICAgICB2YXIga2V5ID0gcGFydHMuc2hpZnQoKS50cmltKClcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFydHMuam9pbignOicpLnRyaW0oKVxuICAgICAgICBoZWFkZXJzLmFwcGVuZChrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGhlYWRlcnNcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXF1ZXN0LnByb3RvdHlwZSlcblxuICBmdW5jdGlvbiBSZXNwb25zZShib2R5SW5pdCwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgfVxuXG4gICAgdGhpcy50eXBlID0gJ2RlZmF1bHQnXG4gICAgdGhpcy5zdGF0dXMgPSAnc3RhdHVzJyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXMgOiAyMDBcbiAgICB0aGlzLm9rID0gdGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgMzAwXG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gJ3N0YXR1c1RleHQnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1c1RleHQgOiAnT0snXG4gICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIHRoaXMudXJsID0gb3B0aW9ucy51cmwgfHwgJydcbiAgICB0aGlzLl9pbml0Qm9keShib2R5SW5pdClcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXNwb25zZS5wcm90b3R5cGUpXG5cbiAgUmVzcG9uc2UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZSh0aGlzLl9ib2R5SW5pdCwge1xuICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgIHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcbiAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHRoaXMuaGVhZGVycyksXG4gICAgICB1cmw6IHRoaXMudXJsXG4gICAgfSlcbiAgfVxuXG4gIFJlc3BvbnNlLmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IDAsIHN0YXR1c1RleHQ6ICcnfSlcbiAgICByZXNwb25zZS50eXBlID0gJ2Vycm9yJ1xuICAgIHJldHVybiByZXNwb25zZVxuICB9XG5cbiAgdmFyIHJlZGlyZWN0U3RhdHVzZXMgPSBbMzAxLCAzMDIsIDMwMywgMzA3LCAzMDhdXG5cbiAgUmVzcG9uc2UucmVkaXJlY3QgPSBmdW5jdGlvbih1cmwsIHN0YXR1cykge1xuICAgIGlmIChyZWRpcmVjdFN0YXR1c2VzLmluZGV4T2Yoc3RhdHVzKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHN0YXR1cyBjb2RlJylcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IHN0YXR1cywgaGVhZGVyczoge2xvY2F0aW9uOiB1cmx9fSlcbiAgfVxuXG4gIHNlbGYuSGVhZGVycyA9IEhlYWRlcnNcbiAgc2VsZi5SZXF1ZXN0ID0gUmVxdWVzdFxuICBzZWxmLlJlc3BvbnNlID0gUmVzcG9uc2VcblxuICBzZWxmLmZldGNoID0gZnVuY3Rpb24oaW5wdXQsIGluaXQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGlucHV0LCBpbml0KVxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG5cbiAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgIGhlYWRlcnM6IHBhcnNlSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkgfHwgJycpXG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy51cmwgPSAncmVzcG9uc2VVUkwnIGluIHhociA/IHhoci5yZXNwb25zZVVSTCA6IG9wdGlvbnMuaGVhZGVycy5nZXQoJ1gtUmVxdWVzdC1VUkwnKVxuICAgICAgICB2YXIgYm9keSA9ICdyZXNwb25zZScgaW4geGhyID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dFxuICAgICAgICByZXNvbHZlKG5ldyBSZXNwb25zZShib2R5LCBvcHRpb25zKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfVxuXG4gICAgICB4aHIub3BlbihyZXF1ZXN0Lm1ldGhvZCwgcmVxdWVzdC51cmwsIHRydWUpXG5cbiAgICAgIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnaW5jbHVkZScpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKCdyZXNwb25zZVR5cGUnIGluIHhociAmJiBzdXBwb3J0LmJsb2IpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJ1xuICAgICAgfVxuXG4gICAgICByZXF1ZXN0LmhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIHhoci5zZW5kKHR5cGVvZiByZXF1ZXN0Ll9ib2R5SW5pdCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcmVxdWVzdC5fYm9keUluaXQpXG4gICAgfSlcbiAgfVxuICBzZWxmLmZldGNoLnBvbHlmaWxsID0gdHJ1ZVxufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvd2hhdHdnLWZldGNoL2ZldGNoLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xuXG5jb25zdCB1cmwgPSBgL2FwaS9jYXJ0YDtcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gIGNyZWF0ZTogKHt0ZXh0LCBpZCwgZnJvbSwgYmxvYiwgdG8sIGF1ZGlvU2V0dGluZ3N9KSA9PiB7XG4gICAgY29uc3QgbWV0aG9kID0gYFBPU1RgO1xuICAgIC8vIGNvbnN0IG5ld0ZpbGVOYW1lID0gYCR7aWQuc3BsaXQoYCBgKS5qb2luKGBfYCl9YDtcbiAgICBjb25zdCBib2R5ID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgYm9keS5hcHBlbmQoYHRleHRgLCB0ZXh0KTtcbiAgICBib2R5LmFwcGVuZChgaWRgLCBpZCk7XG4gICAgYm9keS5hcHBlbmQoYGZyb21gLCBmcm9tKTtcbiAgICBib2R5LmFwcGVuZChgdG9gLCB0byk7XG4gICAgYm9keS5hcHBlbmQoYGF1ZGlvU2V0dGluZ3NgLCBhdWRpb1NldHRpbmdzKTtcblxuICAgIHJldHVybiBmZXRjaCh1cmwsIHttZXRob2QsIGJvZHl9KVxuICAgICAgLnRoZW4ociA9PiByLmpzb24oKSk7XG4gIH0sXG5cbiAgcmVhZDogKCkgPT4ge1xuICAgIHJldHVybiBmZXRjaChgJHt1cmx9P2lzQWN0aXZlPXRydWVgKVxuICAgICAgLnRoZW4ociA9PiByLmpzb24oKSk7XG4gIH0sXG5cbiAgcmVhZE9uZTogaWQgPT4ge1xuICAgIGNvbnN0IG1ldGhvZCA9IGBHRVRgO1xuICAgIHJldHVybiBmZXRjaChgJHt1cmx9LyR7aWR9YCwge21ldGhvZH0pLnRoZW4ociA9PiByLmpzb24oKSk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbGliL2NhcnRBUEkuanMiLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2luZGV4Jyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaG9ydGlkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJhbmRvbUJ5dGUgPSByZXF1aXJlKCcuL3JhbmRvbS9yYW5kb20tYnl0ZScpO1xuXG5mdW5jdGlvbiBlbmNvZGUobG9va3VwLCBudW1iZXIpIHtcbiAgICB2YXIgbG9vcENvdW50ZXIgPSAwO1xuICAgIHZhciBkb25lO1xuXG4gICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgd2hpbGUgKCFkb25lKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIGxvb2t1cCggKCAobnVtYmVyID4+ICg0ICogbG9vcENvdW50ZXIpKSAmIDB4MGYgKSB8IHJhbmRvbUJ5dGUoKSApO1xuICAgICAgICBkb25lID0gbnVtYmVyIDwgKE1hdGgucG93KDE2LCBsb29wQ291bnRlciArIDEgKSApO1xuICAgICAgICBsb29wQ291bnRlcisrO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY29kZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL2VuY29kZS5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgSGVhZCBmcm9tICcuL2NsYXNzZXMvSGVhZCc7XG5pbXBvcnQgQ29sb3JzIGZyb20gJy4vb2JqZWN0cy9jb2xvcnMnO1xuaW1wb3J0IEF1ZGlvIGZyb20gJy4vY2xhc3Nlcy9BdWRpby5qcyc7XG5pbXBvcnQgaGFuZGxlU2F2ZSBmcm9tICcuL29iamVjdHMvU2F2ZSc7XG5pbXBvcnQgQ2FydEFQSSBmcm9tICcuL2xpYi9jYXJ0QVBJJztcblxue1xuICBsZXQgc2NlbmUsIGNhbWVyYSwgZmllbGRPZlZpZXcsIGFzcGVjdFJhdGlvLCBuZWFyUGxhbmUsIGZhclBsYW5lLCBIRUlHSFQsIFdJRFRIO1xuICBsZXQgZ2xvYmFsTGlnaHQsIHNoYWRvd0xpZ2h0LCBiYWNrTGlnaHQsIGxpZ2h0LCByZW5kZXJlciwgY29udGFpbmVyLCBsb2FkZWQ7XG4gIGxldCBoZWFkLCBzdGFycywgd2luZG93SGFsZlgsIHdpbmRvd0hhbGZZLCBjb2xvciwgYXVkaW8sIFNwZWVjaFRleHQ7XG5cbiAgLy8gdmFycyBmb3IgZGF0Lmd1aVxuICBsZXQgY29udHJvbGxlciwgZ3VpO1xuICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHNhdmVgKTtcblxuICBsZXQgbW91c2VQb3MgPSB7IHg6IDAsIHk6IDB9O1xuXG4gIGxldCBzdGFyQXJyYXkgPSBbXTtcblxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIC8vIGNyZWF0ZSBzbm93XG4gICAgcGFydGljbGVzSlMubG9hZCgncGFydGljbGVzLWpzJywgJy4uL2Fzc2V0cy9wYXJ0aWNsZXMuanNvbicsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdjYWxsYmFjayAtIHBhcnRpY2xlcy5qcyBjb25maWcgbG9hZGVkJyk7XG4gICAgfSk7XG5cbiAgICBjcmVhdGVTY2VuZSgpO1xuICAgIGNyZWF0ZUxpZ2h0cygpO1xuXG4gICAgYXVkaW8gPSBuZXcgQXVkaW8oKTsgLy8gaGFuZGxlIGF1ZGlvXG4gICAgaGVhZCA9IG5ldyBIZWFkKCk7IC8vIHNob3cgYW5kIGhhbmRsZSBoZWFkXG4gICAgc2NlbmUuYWRkKGhlYWQubWVzaCk7XG5cbiAgICAvLyBzZW5kIG9iamVjdHMgdG8gc2F2ZSBvbiBjbGlja1xuICAgIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoKSA9PiB7XG4gICAgICBjb25zdCBhdWRpb1NldHRpbmdzID0ge1xuICAgICAgICBwaXRjaDogYXVkaW8ucGl0Y2hSYXRpbyxcbiAgICAgICAgb3ZlcmxhcDogYXVkaW8ub3ZlcmxhcFxuICAgICAgfVxuXG4gICAgICBoYW5kbGVTYXZlKHtcbiAgICAgICAgdGV4dDogYXVkaW8udHh0LFxuICAgICAgICBpZDogYXVkaW8uaWQsXG4gICAgICAgIGF1ZGlvU2V0dGluZ3M6IEpTT04uc3RyaW5naWZ5KGF1ZGlvU2V0dGluZ3MpXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGd1aSA9IG5ldyBkYXQuR1VJKCk7XG4gICAgZ3VpLmRvbUVsZW1lbnQuaWQgPSAnZ3VpJztcbiAgICBndWkuY2xvc2VkID0gdHJ1ZTtcbiAgICBjb250cm9sbGVyID0gbmV3IGNvbnRyb2xsZXJUZXh0KCk7XG4gICAgZ3VpQ29udHJvbGxlcihbJ3NraW4nLCAnZnJlY2tsZXMnLCAnZXllJywgJ2dsYXNzZXMnLCAnaGF0J10pOyAvLyBhZGQgZ3VpIGZvciBhcnJheSBvYmplY3QgYW5kIHNldCBjb2xvcnMgb24gY29sb3IgY2hhbmdlXG5cbiAgICB3aW5kb3cuc2NlbmUgPSBzY2VuZTsgLy8gc2V0IHNjZW5lIGZvciBleHRlbnNpb25cblxuICAgIGxvb3AoKTtcbiAgfTtcblxuICBjb25zdCBndWlDb250cm9sbGVyID0ga2V5cyA9PiB7XG4gICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBndWkuYWRkQ29sb3IoY29udHJvbGxlciwga2V5KS5vbkNoYW5nZSgoKSA9PiB7XG5cbiAgICAgICAgLy8gc2V0IHJpZ2h0IGNvbG9yIGZvciBtYXRlcmlhbFxuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgIGNhc2UgJ3NraW4nOiBDb2xvcnMuc2tpbiA9IGNvbnRyb2xsZXIuc2tpbjtcbiAgICAgICAgICBjYXNlICdmcmVja2xlcyc6IENvbG9ycy5mcmVja2xlcyA9IGNvbnRyb2xsZXIuZnJlY2tsZXM7XG4gICAgICAgICAgY2FzZSAnZXllJzogQ29sb3JzLmV5ZSA9IGNvbnRyb2xsZXIuZXllO1xuICAgICAgICAgIGNhc2UgJ2dsYXNzZXMnOiBDb2xvcnMuZ2xhc3NlcyA9IGNvbnRyb2xsZXIuZ2xhc3NlcztcbiAgICAgICAgICBjYXNlICdoYXQnOiBDb2xvcnMuaGF0ID0gY29udHJvbGxlci5oYXQ7XG4gICAgICAgIH1cblxuICAgICAgICAvL3JlbW92ZSBjdXJyZW50IGhlYWQgYW5kIG1ha2UgYSBuZXcgb25lIHRvIHNldCBjdXJyZW50IGNvbG9yXG4gICAgICAgIHNjZW5lLnJlbW92ZShoZWFkLm1lc2gpO1xuICAgICAgICBjcmVhdGVIZWFkKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGRlYzJoZXggPSAoaSkgPT4ge1xuICAgIHZhciByZXN1bHQgPSBcIjB4MDAwMDAwXCI7XG4gICAgaWYgKGkgPj0gMCAmJiBpIDw9IDE1KSB7XG4gICAgICByZXN1bHQgPSBcIjB4MDAwMDBcIiArIGkudG9TdHJpbmcoMTYpO1xuICAgIH0gZWxzZSBpZiAoaSA+PSAxNiAmJiBpIDw9IDI1NSkge1xuICAgICAgcmVzdWx0ID0gXCIweDAwMDBcIiArIGkudG9TdHJpbmcoMTYpO1xuICAgIH0gZWxzZSBpZiAoaSA+PSAyNTYgJiYgaSA8PSA0MDk1KSB7XG4gICAgICByZXN1bHQgPSBcIjB4MDAwXCIgKyBpLnRvU3RyaW5nKDE2KTtcbiAgICB9IGVsc2UgaWYgKGkgPj0gNDA5NiAmJiBpIDw9IDY1NTM1KSB7XG4gICAgICByZXN1bHQgPSBcIjB4MDBcIiArIGkudG9TdHJpbmcoMTYpO1xuICAgIH0gZWxzZSBpZiAoaSA+PSA2NTUzNSAmJiBpIDw9IDEwNDg1NzUpIHtcbiAgICAgIHJlc3VsdCA9IFwiMHgwXCIgKyBpLnRvU3RyaW5nKDE2KTtcbiAgICB9IGVsc2UgaWYgKGkgPj0gMTA0ODU3NSkge1xuICAgICAgcmVzdWx0ID0gJzB4JyArIGkudG9TdHJpbmcoMTYpO1xuICAgIH1cbiAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PSA4KSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZVNjZW5lID0gKCkgPT4geztcbiAgICBIRUlHSFQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgV0lEVEggPSB3aW5kb3cuaW5uZXJXaWR0aCAvMS42NztcbiAgICB3aW5kb3dIYWxmWCA9IFdJRFRIIC8gMjtcbiAgICB3aW5kb3dIYWxmWSA9IEhFSUdIVCAvIDI7XG5cbiAgICBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgIGFzcGVjdFJhdGlvID0gV0lEVEggLyBIRUlHSFQ7XG4gICAgZmllbGRPZlZpZXcgPSA1MDtcbiAgICBuZWFyUGxhbmUgPSAxO1xuICAgIGZhclBsYW5lID0gMjAwMDtcblxuICAgIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIG5lYXJQbGFuZSwgZmFyUGxhbmUpO1xuICAgIGNhbWVyYS5wb3NpdGlvbi54ID0gMDtcbiAgICBjYW1lcmEucG9zaXRpb24ueiA9IDcwO1xuICAgIGNhbWVyYS5wb3NpdGlvbi55ID0gLTU7XG5cbiAgICByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHthbHBoYTogdHJ1ZSwgYW50aWFsaWFzOiB0cnVlfSk7XG4gICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbz8gd2luZG93LmRldmljZVBpeGVsUmF0aW86IDEpXG4gICAgcmVuZGVyZXIuc2V0U2l6ZShXSURUSCwgSEVJR0hUKTtcbiAgICByZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7XG4gICAgcmVuZGVyZXIuc2hhZG93TWFwLnR5cGUgPSBUSFJFRS5QQ0ZTb2Z0U2hhZG93TWFwO1xuXG4gICAgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvbldpbmRvd1Jlc2l6ZSwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSwgZmFsc2UpO1xuICB9XG5cbiAgY29uc3Qgb25XaW5kb3dSZXNpemUgPSAoKSA9PiB7XG4gICAgSEVJR0hUID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIFdJRFRIID0gd2luZG93LmlubmVyV2lkdGggIC8gMS42NztcbiAgICB3aW5kb3dIYWxmWCA9IFdJRFRIIC8gMjtcbiAgICB3aW5kb3dIYWxmWSA9IEhFSUdIVCAvIDI7XG4gICAgcmVuZGVyZXIuc2V0U2l6ZShXSURUSCwgSEVJR0hUKTtcbiAgICBjYW1lcmEuYXNwZWN0ID0gV0lEVEggLyBIRUlHSFQ7XG4gICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IGUgPT4ge1xuICAgIG1vdXNlUG9zID0ge1xuICAgICAgeDogZXZlbnQuY2xpZW50WCxcbiAgICAgIHk6IGV2ZW50LmNsaWVudFlcbiAgICB9O1xuICB9XG5cbiAgbGV0IGxvYWRlck1hbmFnZXIgPSBuZXcgVEhSRUUuTG9hZGluZ01hbmFnZXIoKTtcblxuICBjb25zdCBoYW5kbGVXaW5kb3dSZXNpemUgPSBlID0+IHtcbiAgICBIRUlHSFQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgV0lEVEggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICByZW5kZXJlci5zZXRTaXplKFdJRFRILCBIRUlHSFQpO1xuICAgIGNhbWVyYS5hc3BlY3QgPSBXSURUSCAvIEhFSUdIVDtcbiAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICB9XG5cbiAgbGV0IGlzTW9iaWxlID0gL2lQaG9uZXxBbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICBjb25zdCBjcmVhdGVMaWdodHMgPSAoKSA9PiB7XG5cbiAgICBnbG9iYWxMaWdodCA9IG5ldyBUSFJFRS5IZW1pc3BoZXJlTGlnaHQoMHhmZmZmZmYsIDB4NTU1NTU1LCAuOSk7XG5cbiAgICBzaGFkb3dMaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmLCAuMyk7XG4gICAgc2hhZG93TGlnaHQucG9zaXRpb24uc2V0KDEwMCwgMjUwLCAxNzUpO1xuICAgIHNoYWRvd0xpZ2h0LmNhc3RTaGFkb3cgPSB0cnVlO1xuXG4gICAgYmFja0xpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYsIC4yKTtcbiAgICBiYWNrTGlnaHQucG9zaXRpb24uc2V0KC0xMDAsIDIwMCwgMTUwKTtcbiAgICBiYWNrTGlnaHQuY2FzdFNoYWRvdyA9IHRydWU7XG5cbiAgICBpZiAoaXNNb2JpbGUpIHNoYWRvd0xpZ2h0LnNoYWRvdy5tYXBTaXplLndpZHRoID0gc2hhZG93TGlnaHQuc2hhZG93Lm1hcFNpemUuaGVpZ2h0ID0gMTAyNDtcbiAgICBpZiAoIWlzTW9iaWxlKSBzaGFkb3dMaWdodC5zaGFkb3cubWFwU2l6ZS53aWR0aCA9IHNoYWRvd0xpZ2h0LnNoYWRvdy5tYXBTaXplLmhlaWdodCA9IDIwNDg7XG5cbiAgICBzY2VuZS5hZGQoZ2xvYmFsTGlnaHQpO1xuICAgIHNjZW5lLmFkZChzaGFkb3dMaWdodCk7XG4gICAgc2NlbmUuYWRkKGJhY2tMaWdodCk7XG4gICAgc2NlbmUuYWRkKCBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KCAweGVhZGVhZCwgMC4xICkpO1xuICB9XG5cbiAgLy8gY2xhc3MgU3RhciB7XG4gIC8vICAgY29uc3RydWN0b3IoKXtcbiAgLy9cbiAgLy8gICBTVEFSXG4gIC8vICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvL1xuICAvLyAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAvL1xuICAvLyAgIGxldCBwdHMgPSBbXSxcbiAgLy8gICAgIG51bVB0cyA9IDU7XG4gIC8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1QdHMgKiAyOyBpKyspIHtcbiAgLy8gICAgIGxldCBsID0gaSAlIDIgPT0gMVxuICAvLyAgICAgICA/IDFcbiAgLy8gICAgICAgOiAyO1xuICAvLyAgICAgbGV0IGEgPSBpIC8gbnVtUHRzICogTWF0aC5QSTtcbiAgLy8gICAgIHB0cy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IyKE1hdGguY29zKGEpICogbCwgTWF0aC5zaW4oYSkgKiBsKSk7XG4gIC8vICAgfVxuICAvLyAgIGxldCBzdGFyU2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUocHRzKTtcbiAgLy9cbiAgLy8gICBsZXQgZXh0cnVkZVNldHRpbmdzID0ge1xuICAvLyAgICAgYW1vdW50OiAwLjUsXG4gIC8vICAgICBzdGVwczogMSxcbiAgLy8gICAgIGJldmVsRW5hYmxlZDogZmFsc2VcbiAgLy8gICB9O1xuICAvLyAgIGxldCBzdGFyR2VvbSA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc3RhclNoYXBlLCBleHRydWRlU2V0dGluZ3MpO1xuICAvLyAgIGxldCBzdGFyID0gbmV3IFRIUkVFLk1lc2goc3Rhckdlb20sIHllbGxvd01hdCk7XG4gIC8vICAgc3Rhci5yb3RhdGlvbi54ID0gTWF0aC5QSSAvIDI7XG4gIC8vICAgdGhpcy5tZXNoLmFkZChzdGFyKTtcbiAgLy8gfVxuICAvLyB9XG4gIC8vXG4gIC8vIGxldCBTdGFyc0dyb3VwID0gZnVuY3Rpb24oKSB7XG4gIC8vXG4gIC8vICAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgLy9cbiAgLy8gICAgIHRoaXMublN0YXJzID0gMTU7XG4gIC8vXG4gIC8vICAgICBsZXQgc3RlcEFuZ2xlID0gTWF0aC5QSSAqIDIgLyB0aGlzLm5TdGFycztcbiAgLy9cbiAgLy8gICAgICBDcmVhdGUgdGhlIFN0YXJzXG4gIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMublN0YXJzOyBpKyspIHtcbiAgLy9cbiAgLy8gICAgICAgdGhpcy5zID0gbmV3IFN0YXIoKTtcbiAgLy8gICAgICAgbGV0IGEgPSBzdGVwQW5nbGUgKiBpO1xuICAvLyAgICAgICBsZXQgciA9IDE1O1xuICAvL1xuICAvLyAgICAgICB0aGlzLnMubWVzaC5wb3NpdGlvbi55ID0gTWF0aC5zaW4oYSkgKiByO1xuICAvLyAgICAgICB0aGlzLnMubWVzaC5wb3NpdGlvbi54ID0gTWF0aC5jb3MoYSkgKiByO1xuICAvL1xuICAvLyAgICAgICB0aGlzLnMubWVzaC5yb3RhdGlvbi56ID0gYSArIE1hdGguUEkgLyAyO1xuICAvLyAgICAgICB0aGlzLnMubWVzaC5wb3NpdGlvbi56ID0gMCAtIE1hdGgucmFuZG9tKCkgKiAzO1xuICAvL1xuICAvLyAgICAgICAgIHJhbmRvbSBzY2FsZSBmb3IgZWFjaCBjbG91ZFxuICAvLyAgICAgICBsZXQgc2MgPSAwLjUgKyBNYXRoLnJhbmRvbSgpICogLjY7XG4gIC8vICAgICAgIHRoaXMucy5tZXNoLnNjYWxlLnNldChzYywgc2MsIHNjKTtcbiAgLy9cbiAgLy8gICAgICAgdGhpcy5tZXNoLmFkZCh0aGlzLnMubWVzaCk7XG4gIC8vICAgICAgIHN0YXJBcnJheS5wdXNoKHRoaXMucyk7XG4gIC8vICAgICB9XG4gIC8vICAgICB0aGlzLm1lc2gucm90YXRpb24ueCA9IE1hdGguUEkgLyAyO1xuICAvLyB9XG5cbiAgY29uc3QgY3JlYXRlSGVhZCA9ICgpID0+IHtcbiAgICBoZWFkLm5hbWUgPSBcIkhlYWRcIjtcbiAgICBoZWFkID0gbmV3IEhlYWQoKTtcbiAgICBoZWFkLmlkbGUoKTtcbiAgICBzY2VuZS5hZGQoaGVhZC5tZXNoKTtcbiAgICAvL3N0YXJzID0gbmV3IFN0YXJzR3JvdXAoKTtcbiAgICAvL3NjZW5lLmFkZChzdGFycy5tZXNoKTtcbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZUNoYXJhY3RlciA9ICgpID0+IHtcbiAgICBjcmVhdGVIZWFkKCk7XG4gICAgaGVhZC5tZXNoLnBvc2l0aW9uLnNldCgwLCAyLCAwKTtcbiAgICAvL3N0YXJzLm1lc2gucG9zaXRpb24uc2V0KDAsIDEwLCAwKTtcbiAgfVxuXG5cbiAgbGV0IGlzQmxpbmtpbmcgPSBmYWxzZTtcbiAgY29uc3QgYmxpbmtMb29wID0gKCkgPT4ge1xuICAgIGlzQmxpbmtpbmcgPSBmYWxzZTtcblxuICAgIGlmICgoIWlzQmxpbmtpbmcpICYmIChNYXRoLnJhbmRvbSgpID4gMC45OSkpIHtcbiAgICAgIGlzQmxpbmtpbmcgPSB0cnVlO1xuICAgICAgYmxpbmsoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBibGluayA9ICgpID0+IHtcbiAgICBoZWFkLmV5ZXMuc2NhbGUueSA9IDE7XG4gICAgVHdlZW5NYXgudG8oaGVhZC5leWVzLnNjYWxlLCAuMDcsIHtcbiAgICAgIHk6IDAsXG4gICAgICB5b3lvOiB0cnVlLFxuICAgICAgcmVwZWF0OiAxLFxuICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlzQmxpbmtpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vSEVBRCBBTklNQVRJT05TXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgLy8gSGVhZC5wcm90b3R5cGUuZGl6enkgPSBmdW5jdGlvbigpIHtcbiAgLy9cbiAgLy8gICAgIGxldCBkaXN0YW5jZSA9IDE7XG4gIC8vXG4gIC8vICAgICB0aGlzLmhlYWQucm90YXRpb24ueiA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwNSkgKiBNYXRoLlBJICogMC4wMTtcbiAgLy8gICAgIHRoaXMuaGVhZC5yb3RhdGlvbi54ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDEpICogTWF0aC5QSSAqIDAuMDE7XG4gIC8vICAgICB0aGlzLmhlYWQucm90YXRpb24ueSA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwNSkgKiBNYXRoLlBJICogMC4wMTtcbiAgLy9cbiAgLy8gICAgIHRoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLnggPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDUpICogLWRpc3RhbmNlO1xuICAvLyAgICAgdGhpcy5leWVCbHVlTGVmdC5wb3NpdGlvbi54ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDA1KSAqIGRpc3RhbmNlO1xuICAvLyAgICAgdGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24ueSA9IE1hdGguY29zKERhdGUubm93KCkgKiAwLjAwNSkgKiAtZGlzdGFuY2U7XG4gIC8vICAgICB0aGlzLmV5ZUJsdWVMZWZ0LnBvc2l0aW9uLnkgPSBNYXRoLmNvcyhEYXRlLm5vdygpICogMC4wMDUpICogZGlzdGFuY2U7XG4gIC8vICAgICB0aGlzLmV5ZUJyb3dSaWdodC5wb3NpdGlvbi55ID0gTWF0aC5jb3MoRGF0ZS5ub3coKSAqIDAuMDA1KSAqIC1kaXN0YW5jZTtcbiAgLy8gICAgIHRoaXMuZXllQnJvd0xlZnQucG9zaXRpb24ueSA9IE1hdGguY29zKERhdGUubm93KCkgKiAwLjAwNSkgKiBkaXN0YW5jZTtcbiAgLy9cbiAgLy8gICAgIHRoaXMubW91c3RhY2hlLnJvdGF0aW9uLnogPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDUpICogTWF0aC5QSSAqIDAuMDU7XG4gIC8vXG4gIC8vICAgICBibGlua0xvb3AoKTtcbiAgLy8gICAgIHN0YXJzLnNwaW5TY2FsZSgpO1xuICAvL1xuICAvLyAgIH1cblxuICAvL1NUQVJHUk9VUFxuICAvLyBTdGFyc0dyb3VwLnByb3RvdHlwZS5zcGluU2NhbGUgPSBmdW5jdGlvbigpIHtcbiAgLy9cbiAgLy8gICAgIHRoaXMubWVzaC5yb3RhdGlvbi56ICs9IDAuMDI7XG4gIC8vXG4gIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXJBcnJheS5sZW5ndGg7IGkrKykge1xuICAvLyAgICAgICAgc3RhckFycmF5W2ldLm1lc2gucm90YXRpb24ueCA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAxKSAqIE1hdGguUEkgKiAwLjEgO1xuICAvLyAgICAgICBzdGFyQXJyYXlbaV0ubWVzaC5yb3RhdGlvbi56ICs9IDAgLSBNYXRoLnJhbmRvbSgpICogMC4xNTtcbiAgLy8gICAgICAgc3RhckFycmF5W2ldLm1lc2gucm90YXRpb24ueCArPSAwIC0gTWF0aC5yYW5kb20oKSAqIDAuMDU7XG4gIC8vXG4gIC8vICAgICB9XG4gIC8vICAgfVxuXG4gIGNsYXNzIGNvbnRyb2xsZXJUZXh0IHtcbiAgICBjb25zdHJ1Y3RvciAoKXtcbiAgICAgIHRoaXMuc2tpbiA9IENvbG9ycy5za2luO1xuICAgICAgdGhpcy5mcmVja2xlcyA9IENvbG9ycy5mcmVja2xlcztcbiAgICAgIHRoaXMuZXllID0gQ29sb3JzLmV5ZTtcbiAgICAgIHRoaXMuZ2xhc3NlcyA9IENvbG9ycy5nbGFzc2VzO1xuICAgICAgdGhpcy5oYXQgPSBDb2xvcnMuaGF0O1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGxvb3AgPSAoKSA9PiB7XG4gICAgYmxpbmtMb29wKCk7XG4gICAgLy9oZWFkLmRpenp5KCk7XG4gICAgbGV0IHhUYXJnZXQgPSAobW91c2VQb3MueCAtIHdpbmRvd0hhbGZYKTtcbiAgICBsZXQgeVRhcmdldCA9IChtb3VzZVBvcy55IC0gd2luZG93SGFsZlkpO1xuXG4gICAgaGVhZC5pZGxlKHhUYXJnZXQsIHlUYXJnZXQpO1xuICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gIH1cblxuICAvL3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgaW5pdCwgZmFsc2UpO1xuXG4gIGluaXQoKTtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3NjcmlwdC5qcyIsImltcG9ydCBTb3VuZEFQSSBmcm9tICcuLi9saWIvc291bmRBUEknO1xuaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XG5cbnZhciBTcGVlY2hSZWNvZ25pdGlvbiA9IFNwZWVjaFJlY29nbml0aW9uIHx8IHdlYmtpdFNwZWVjaFJlY29nbml0aW9uXG52YXIgU3BlZWNoR3JhbW1hckxpc3QgPSBTcGVlY2hHcmFtbWFyTGlzdCB8fCB3ZWJraXRTcGVlY2hHcmFtbWFyTGlzdFxudmFyIFNwZWVjaFJlY29nbml0aW9uRXZlbnQgPSBTcGVlY2hSZWNvZ25pdGlvbkV2ZW50IHx8IHdlYmtpdFNwZWVjaFJlY29nbml0aW9uRXZlbnRcbmNvbnN0IEF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcblxubGV0IGF1ZGlvQ3R4LCByZWNvZ25pdGlvbjtcbmxldCB0cmFuc2NyaXB0ID0gXCJcIjtcbmxldCBhdWRpb0NodW5rcyA9IFtdO1xubGV0IHNvdXJjZTtcblxuY29uc3QgJHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZmllbGRgKTtcbmNvbnN0ICRyZWNvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcmVjb3JkYCk7XG5jb25zdCAkYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYXVkaW9fY29udHJvbHNgKTtcbmNvbnN0ICRzdG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHN0b3BgKTtcblxubGV0IGF1ZGlvU291cmNlcyA9IFtdLFxuICAgIHBpdGNoU2hpZnRlclByb2Nlc3NvcjtcblxubGV0IGdyYWluU2l6ZSA9IDUxMixcbiAgICBwaXRjaFJhdGlvID0gMS4wLFxuICAgIG92ZXJsYXBSYXRpbyA9IDAuNTA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pZCA9IHNob3J0SWQuZ2VuZXJhdGUoKTtcbiAgICB0aGlzLnBpdGNoUmF0aW8gPSAxLjA7XG4gICAgdGhpcy5vdmVybGFwID0gMC41MDtcbiAgICBhdWRpb0N0eCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcblxuICAgIC8vIGhhbmRsZSBTcGVlY2hSZWNvZ25pdGlvblxuICAgIHJlY29nbml0aW9uID0gbmV3IFNwZWVjaFJlY29nbml0aW9uKCk7XG4gICAgdGhpcy5zcGVlY2hTZXR0aW5ncygpO1xuXG4gICAgcmVjb2duaXRpb24ub25yZXN1bHQgPSBldmVudCA9PiB0aGlzLmdvdFJlc3VsdChldmVudCk7XG4gICAgcmVjb2duaXRpb24ub25zcGVlY2hlbmQgPSBlID0+IHRoaXMub25TcGVlY2hFbmQoZSk7XG4gICAgJHRleHQuYWRkRXZlbnRMaXN0ZW5lcihgYmx1cmAsICgpID0+IHRoaXMudHh0ID0gJHRleHQudmFsdWUpO1xuXG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoeyBhdWRpbzogdHJ1ZSB9KVxuICAgIC50aGVuKHN0cmVhbSA9PiB7XG4gICAgICB0aGlzLm1lZGlhUmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihzdHJlYW0pO1xuXG4gICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tU3RhcnQgUmVjb3JkaW5nLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgICAgJHJlY29yZC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsICgpID0+IHtcbiAgICAgICAgdGhpcy5tZWRpYVJlY29yZGVyLnN0YXJ0KCk7XG4gICAgICAgIHJlY29nbml0aW9uLnN0YXJ0KCk7XG4gICAgICAgICRyZWNvcmQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgICB0aGlzLm1lZGlhUmVjb3JkZXIuYWRkRXZlbnRMaXN0ZW5lcihgZGF0YWF2YWlsYWJsZWAsICBlID0+IHtcbiAgICAgICAgYXVkaW9DaHVua3MucHVzaChlLmRhdGEpO1xuICAgICAgfSk7IC8vIGFkZCBhdWRpb2NodW5rIHRvIGFycmF5XG5cbiAgICAgIC8vIHdoZW4gbWVkaWFSZWNvcmRlciBzdG9wcywgbWFrZSBhbmQgaGFuZGxlIGF1ZGlvIGJsb2JcbiAgICAgIHRoaXMubWVkaWFSZWNvcmRlci5hZGRFdmVudExpc3RlbmVyKGBzdG9wYCwgKCkgPT4ge1xuICAgICAgICAvLyBnaXZlIGxpbmsgdG8gYXVkaW8gY29udHJvbHMgdG8gcGxheSBhbmQgY29udHJvbCB0aGUgc291bmRcbiAgICAgICAgdGhpcy5ibG9iID0gbmV3IEJsb2IoYXVkaW9DaHVua3MsIHt0eXBlIDogJ2F1ZGlvL29nZyd9KTsgLy8gY3JlYXRlIGJsb2IgZnJvbSBhdWRpb2NodW5rc1xuXG4gICAgICAgIFNvdW5kQVBJLmNyZWF0ZSh7XG4gICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgYmxvYjogdGhpcy5ibG9iXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT7CoHtcbiAgICAgICAgICBjb25zdCBidWZmZXJMb2FkZXIgPSBuZXcgQnVmZmVyTG9hZGVyKFxuICAgICAgICAgICAgYXVkaW9DdHgsIFtgLi91cGxvYWRzLyR7dGhpcy5pZH0ub2dnYF0sIGJ1ZmZlckxpc3QgPT4ge1xuICAgICAgICAgICAgICAvLyB0byBhdm9pZCBvdmVybGFwcGluZyBwcmV2aW91cyBzb3VuZCwgZW1wdHkgYnVmZmVyTGlzdCB3aGVuIHRyeWluZyBhZ2FpblxuICAgICAgICAgICAgICAkcmVjb3JkLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT4gYnVmZmVyTGlzdCA9IFtdKTtcblxuICAgICAgICAgICAgICBsZXQgbG9vcCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgIC8vIHRyaWdnZXIgbG9vcFxuICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcmVwZWF0YCkuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxvb3AgPSAhbG9vcDtcbiAgICAgICAgICAgICAgICBzb3VyY2Uuc3RvcCgpO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAvLyBwaXRjaCB2YWx1ZVxuICAgICAgICAgICAgICBjb25zdCAkcGl0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGl0Y2hgKTtcbiAgICAgICAgICAgICAgJHBpdGNoLmFkZEV2ZW50TGlzdGVuZXIoYGNoYW5nZWAsICgpID0+IHtcbiAgICAgICAgICAgICAgICBwaXRjaFJhdGlvID0gcGFyc2VGbG9hdCgkcGl0Y2gudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMucGl0Y2hSYXRpbyA9IHBpdGNoUmF0aW87XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIC8vIHBsYXkgbW9kaWZpZWQgc291bmRcbiAgICAgICAgICAgICAgJGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNvdXJjZSA9ICcnO1xuICAgICAgICAgICAgICAgIHNvdXJjZSA9IGF1ZGlvQ3R4LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgICAgICAgICAgICAgIHNvdXJjZS5idWZmZXIgPSBidWZmZXJMaXN0WzBdO1xuICAgICAgICAgICAgICAgIHNvdXJjZS5jb25uZWN0KHBpdGNoU2hpZnRlclByb2Nlc3Nvcik7XG4gICAgICAgICAgICAgICAgc291cmNlLmxvb3AgPSBsb29wO1xuICAgICAgICAgICAgICAgIHNvdXJjZS5zdGFydCgpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgYnVmZmVyTG9hZGVyLmxvYWQoKTtcbiAgICAgICAgICB0aGlzLmluaXRQcm9jZXNzb3IoKTtcblxuICAgICAgICB9LCAxMDAwKTtcblxuICAgICAgICAvLyBzZXQgc291bmQgZmlsdGVyIG92ZXJsYXBcbiAgICAgICAgY29uc3Qgb3ZlcmxhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBvdmVybGFwYCk7XG4gICAgICAgIG92ZXJsYXAuYWRkRXZlbnRMaXN0ZW5lcihgY2hhbmdlYCwgKCkgPT4ge1xuICAgICAgICAgIG92ZXJsYXBSYXRpbyA9IG92ZXJsYXAudmFsdWU7XG4gICAgICAgICAgdGhpcy5vdmVybGFwID0gb3ZlcmxhcFJhdGlvO1xuICAgICAgICB9KTtcblxuICAgICAgICBhdWRpb0NodW5rcyA9IFtdO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBvblNwZWVjaEVuZChlKcKge1xuICAgIHRoaXMubWVkaWFSZWNvcmRlci5zdG9wKCk7XG4gICAgcmVjb2duaXRpb24uc3RvcCgpO1xuICAgICRyZWNvcmQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAkcmVjb3JkLnRleHRDb250ZW50ID0gJ1dhbnQgdG8gdHJ5IGFnYWluPyc7XG4gICAgdGhpcy50eHQgPSAkdGV4dC52YWx1ZTtcbiAgfVxuXG4gIGdvdFJlc3VsdChldmVudCkge1xuICAgIGNvbnN0IGxhc3QgPSBldmVudC5yZXN1bHRzLmxlbmd0aCAtIDE7XG4gICAgdHJhbnNjcmlwdCA9IGV2ZW50LnJlc3VsdHNbbGFzdF1bMF0udHJhbnNjcmlwdDtcbiAgICAkdGV4dC52YWx1ZSA9IHRyYW5zY3JpcHQ7XG4gIH1cblxuICBzcGVlY2hTZXR0aW5ncygpIHtcbiAgICByZWNvZ25pdGlvbi5jb250aW51b3VzID0gZmFsc2U7XG4gICAgcmVjb2duaXRpb24ubGFuZyA9ICdubC1CRSc7XG4gICAgcmVjb2duaXRpb24uaW50ZXJpbVJlc3VsdHMgPSBmYWxzZTtcbiAgICByZWNvZ25pdGlvbi5tYXhBbHRlcm5hdGl2ZXMgPSAxO1xuICB9XG5cbiAgaW5pdFByb2Nlc3NvcigpIHtcblxuICAgIGNvbnN0IGxpbmVhckludGVycG9sYXRpb24gPSAoYSwgYiwgdCkgPT4ge1xuICAgICAgcmV0dXJuIGEgKyAoYiAtIGEpICogdDtcbiAgICB9O1xuXG4gICAgaWYgKHBpdGNoU2hpZnRlclByb2Nlc3Nvcikge1xuICAgICAgcGl0Y2hTaGlmdGVyUHJvY2Vzc29yLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbiAgICBpZiAoYXVkaW9DdHguY3JlYXRlU2NyaXB0UHJvY2Vzc29yKSB7XG4gICAgICBwaXRjaFNoaWZ0ZXJQcm9jZXNzb3IgPSBhdWRpb0N0eC5jcmVhdGVTY3JpcHRQcm9jZXNzb3IoZ3JhaW5TaXplLCAxLCAxKTtcbiAgICB9IGVsc2UgaWYgKGF1ZGlvQ3R4LmNyZWF0ZUphdmFTY3JpcHROb2RlKSB7XG4gICAgICBwaXRjaFNoaWZ0ZXJQcm9jZXNzb3IgPSBhdWRpb0N0eC5jcmVhdGVKYXZhU2NyaXB0Tm9kZShncmFpblNpemUsIDEsIDEpO1xuICAgIH1cblxuICAgIHBpdGNoU2hpZnRlclByb2Nlc3Nvci5idWZmZXIgPSBuZXcgRmxvYXQzMkFycmF5KGdyYWluU2l6ZSAqIDIpO1xuICAgIHBpdGNoU2hpZnRlclByb2Nlc3Nvci5ncmFpbldpbmRvdyA9IHRoaXMuaGFubldpbmRvdyhncmFpblNpemUpO1xuXG4gICAgcGl0Y2hTaGlmdGVyUHJvY2Vzc29yLm9uYXVkaW9wcm9jZXNzID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgdmFyIGlucHV0RGF0YSA9IGV2ZW50LmlucHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKDApO1xuICAgICAgdmFyIG91dHB1dERhdGEgPSBldmVudC5vdXRwdXRCdWZmZXIuZ2V0Q2hhbm5lbERhdGEoMCk7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBpbnB1dERhdGEubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAvLyBBcHBseSB0aGUgd2luZG93IHRvIHRoZSBpbnB1dCBidWZmZXJcbiAgICAgICAgaW5wdXREYXRhW2ldICo9IHRoaXMuZ3JhaW5XaW5kb3dbaV07XG5cbiAgICAgICAgLy8gU2hpZnQgaGFsZiBvZiB0aGUgYnVmZmVyXG4gICAgICAgIHRoaXMuYnVmZmVyW2ldID0gdGhpcy5idWZmZXJbaSArIGdyYWluU2l6ZV07XG5cbiAgICAgICAgLy8gRW1wdHkgdGhlIGJ1ZmZlciB0YWlsXG4gICAgICAgIHRoaXMuYnVmZmVyW2kgKyBncmFpblNpemVdID0gMC4wO1xuICAgICAgfVxuXG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIHBpdGNoIHNoaWZ0ZWQgZ3JhaW4gcmUtc2FtcGxpbmcgYW5kIGxvb3BpbmcgdGhlIGlucHV0XG4gICAgICB2YXIgZ3JhaW5EYXRhID0gbmV3IEZsb2F0MzJBcnJheShncmFpblNpemUgKiAyKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gMC4wOyBpIDwgZ3JhaW5TaXplOyBpKyssIGogKz0gcGl0Y2hSYXRpbykge1xuXG4gICAgICAgIHZhciBpbmRleCA9IE1hdGguZmxvb3IoaikgJSBncmFpblNpemU7XG4gICAgICAgIHZhciBhID0gaW5wdXREYXRhW2luZGV4XTtcbiAgICAgICAgdmFyIGIgPSBpbnB1dERhdGFbKGluZGV4ICsgMSkgJSBncmFpblNpemVdO1xuICAgICAgICBncmFpbkRhdGFbaV0gKz0gbGluZWFySW50ZXJwb2xhdGlvbihhLCBiLCBqICUgMS4wKSAqIHRoaXMuZ3JhaW5XaW5kb3dbaV07XG4gICAgICB9XG5cbiAgICAgIC8vIENvcHkgdGhlIGdyYWluIG11bHRpcGxlIHRpbWVzIG92ZXJsYXBwaW5nIGl0XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZ3JhaW5TaXplOyBpICs9IE1hdGgucm91bmQoZ3JhaW5TaXplICogKDEgLSBvdmVybGFwUmF0aW8pKSkge1xuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGdyYWluU2l6ZTsgaisrKSB7XG4gICAgICAgICAgdGhpcy5idWZmZXJbaSArIGpdICs9IGdyYWluRGF0YVtqXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPdXRwdXQgdGhlIGZpcnN0IGhhbGYgb2YgdGhlIGJ1ZmZlclxuICAgICAgZm9yIChpID0gMDsgaSA8IGdyYWluU2l6ZTsgaSsrKSB7XG4gICAgICAgIG91dHB1dERhdGFbaV0gPSB0aGlzLmJ1ZmZlcltpXTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcGl0Y2hTaGlmdGVyUHJvY2Vzc29yLmNvbm5lY3QoYXVkaW9DdHguZGVzdGluYXRpb24pO1xuXG4gIH07XG5cbiAgaGFubldpbmRvdyhsZW5ndGgpIHtcbiAgICBjb25zdCB3aW5kb3cgPSBuZXcgRmxvYXQzMkFycmF5KGxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB3aW5kb3dbaV0gPSAwLjUgKiAoMSAtIE1hdGguY29zKDIgKiBNYXRoLlBJICogaSAvIChsZW5ndGggLSAxKSkpO1xuICAgIH1cbiAgICByZXR1cm4gd2luZG93O1xuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jbGFzc2VzL0F1ZGlvLmpzIiwiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xuXG5jb25zdCB1cmwgPSBgL2FwaS9zb3VuZGA7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICBjcmVhdGU6ICh7aWQsIGJsb2J9KSA9PiB7XG4gICAgY29uc3QgbWV0aG9kID0gYFBPU1RgO1xuICAgIGNvbnN0IG5ld0ZpbGVOYW1lID0gYCR7aWQuc3BsaXQoYCBgKS5qb2luKGBfYCl9YDtcbiAgICBjb25zdCBib2R5ID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgYm9keS5hcHBlbmQoYGlkYCwgaWQpO1xuICAgIGJvZHkuYXBwZW5kKGBzb3VuZGAsIGJsb2IsIG5ld0ZpbGVOYW1lKTtcblxuICAgIHJldHVybiBmZXRjaCh1cmwsIHttZXRob2QsIGJvZHl9KVxuICAgICAgLnRoZW4ociA9PiByLmpzb24oKSk7XG4gIH0sXG5cbiAgcmVhZDogKCkgPT4ge1xuICAgIHJldHVybiBmZXRjaChgJHt1cmx9P2lzQWN0aXZlPXRydWVgKVxuICAgICAgLnRoZW4ociA9PiByLmpzb24oKSk7XG4gIH0sXG5cbiAgcmVhZE9uZTogaWQgPT4ge1xuICAgIGNvbnN0IG1ldGhvZCA9IGBHRVRgO1xuICAgIHJldHVybiBmZXRjaChgJHt1cmx9LyR7aWR9YCwge21ldGhvZH0pLnRoZW4ociA9PiByLmpzb24oKSk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbGliL3NvdW5kQVBJLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG52YXIgZW5jb2RlID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcbnZhciBkZWNvZGUgPSByZXF1aXJlKCcuL2RlY29kZScpO1xudmFyIGJ1aWxkID0gcmVxdWlyZSgnLi9idWlsZCcpO1xudmFyIGlzVmFsaWQgPSByZXF1aXJlKCcuL2lzLXZhbGlkJyk7XG5cbi8vIGlmIHlvdSBhcmUgdXNpbmcgY2x1c3RlciBvciBtdWx0aXBsZSBzZXJ2ZXJzIHVzZSB0aGlzIHRvIG1ha2UgZWFjaCBpbnN0YW5jZVxuLy8gaGFzIGEgdW5pcXVlIHZhbHVlIGZvciB3b3JrZXJcbi8vIE5vdGU6IEkgZG9uJ3Qga25vdyBpZiB0aGlzIGlzIGF1dG9tYXRpY2FsbHkgc2V0IHdoZW4gdXNpbmcgdGhpcmRcbi8vIHBhcnR5IGNsdXN0ZXIgc29sdXRpb25zIHN1Y2ggYXMgcG0yLlxudmFyIGNsdXN0ZXJXb3JrZXJJZCA9IHJlcXVpcmUoJy4vdXRpbC9jbHVzdGVyLXdvcmtlci1pZCcpIHx8IDA7XG5cbi8qKlxuICogU2V0IHRoZSBzZWVkLlxuICogSGlnaGx5IHJlY29tbWVuZGVkIGlmIHlvdSBkb24ndCB3YW50IHBlb3BsZSB0byB0cnkgdG8gZmlndXJlIG91dCB5b3VyIGlkIHNjaGVtYS5cbiAqIGV4cG9zZWQgYXMgc2hvcnRpZC5zZWVkKGludClcbiAqIEBwYXJhbSBzZWVkIEludGVnZXIgdmFsdWUgdG8gc2VlZCB0aGUgcmFuZG9tIGFscGhhYmV0LiAgQUxXQVlTIFVTRSBUSEUgU0FNRSBTRUVEIG9yIHlvdSBtaWdodCBnZXQgb3ZlcmxhcHMuXG4gKi9cbmZ1bmN0aW9uIHNlZWQoc2VlZFZhbHVlKSB7XG4gICAgYWxwaGFiZXQuc2VlZChzZWVkVmFsdWUpO1xuICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNsdXN0ZXIgd29ya2VyIG9yIG1hY2hpbmUgaWRcbiAqIGV4cG9zZWQgYXMgc2hvcnRpZC53b3JrZXIoaW50KVxuICogQHBhcmFtIHdvcmtlcklkIHdvcmtlciBtdXN0IGJlIHBvc2l0aXZlIGludGVnZXIuICBOdW1iZXIgbGVzcyB0aGFuIDE2IGlzIHJlY29tbWVuZGVkLlxuICogcmV0dXJucyBzaG9ydGlkIG1vZHVsZSBzbyBpdCBjYW4gYmUgY2hhaW5lZC5cbiAqL1xuZnVuY3Rpb24gd29ya2VyKHdvcmtlcklkKSB7XG4gICAgY2x1c3RlcldvcmtlcklkID0gd29ya2VySWQ7XG4gICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vKipcbiAqXG4gKiBzZXRzIG5ldyBjaGFyYWN0ZXJzIHRvIHVzZSBpbiB0aGUgYWxwaGFiZXRcbiAqIHJldHVybnMgdGhlIHNodWZmbGVkIGFscGhhYmV0XG4gKi9cbmZ1bmN0aW9uIGNoYXJhY3RlcnMobmV3Q2hhcmFjdGVycykge1xuICAgIGlmIChuZXdDaGFyYWN0ZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYWxwaGFiZXQuY2hhcmFjdGVycyhuZXdDaGFyYWN0ZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWxwaGFiZXQuc2h1ZmZsZWQoKTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSB1bmlxdWUgaWRcbiAqIFJldHVybnMgc3RyaW5nIGlkXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlKCkge1xuICByZXR1cm4gYnVpbGQoY2x1c3RlcldvcmtlcklkKTtcbn1cblxuLy8gRXhwb3J0IGFsbCBvdGhlciBmdW5jdGlvbnMgYXMgcHJvcGVydGllcyBvZiB0aGUgZ2VuZXJhdGUgZnVuY3Rpb25cbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdGU7XG5tb2R1bGUuZXhwb3J0cy5nZW5lcmF0ZSA9IGdlbmVyYXRlO1xubW9kdWxlLmV4cG9ydHMuc2VlZCA9IHNlZWQ7XG5tb2R1bGUuZXhwb3J0cy53b3JrZXIgPSB3b3JrZXI7XG5tb2R1bGUuZXhwb3J0cy5jaGFyYWN0ZXJzID0gY2hhcmFjdGVycztcbm1vZHVsZS5leHBvcnRzLmRlY29kZSA9IGRlY29kZTtcbm1vZHVsZS5leHBvcnRzLmlzVmFsaWQgPSBpc1ZhbGlkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLy8gRm91bmQgdGhpcyBzZWVkLWJhc2VkIHJhbmRvbSBnZW5lcmF0b3Igc29tZXdoZXJlXG4vLyBCYXNlZCBvbiBUaGUgQ2VudHJhbCBSYW5kb21pemVyIDEuMyAoQykgMTk5NyBieSBQYXVsIEhvdWxlIChob3VsZUBtc2MuY29ybmVsbC5lZHUpXG5cbnZhciBzZWVkID0gMTtcblxuLyoqXG4gKiByZXR1cm4gYSByYW5kb20gbnVtYmVyIGJhc2VkIG9uIGEgc2VlZFxuICogQHBhcmFtIHNlZWRcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldE5leHRWYWx1ZSgpIHtcbiAgICBzZWVkID0gKHNlZWQgKiA5MzAxICsgNDkyOTcpICUgMjMzMjgwO1xuICAgIHJldHVybiBzZWVkLygyMzMyODAuMCk7XG59XG5cbmZ1bmN0aW9uIHNldFNlZWQoX3NlZWRfKSB7XG4gICAgc2VlZCA9IF9zZWVkXztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbmV4dFZhbHVlOiBnZXROZXh0VmFsdWUsXG4gICAgc2VlZDogc2V0U2VlZFxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcnlwdG8gPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiAod2luZG93LmNyeXB0byB8fCB3aW5kb3cubXNDcnlwdG8pOyAvLyBJRSAxMSB1c2VzIHdpbmRvdy5tc0NyeXB0b1xuXG5mdW5jdGlvbiByYW5kb21CeXRlKCkge1xuICAgIGlmICghY3J5cHRvIHx8ICFjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpICYgMHgzMDtcbiAgICB9XG4gICAgdmFyIGRlc3QgPSBuZXcgVWludDhBcnJheSgxKTtcbiAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGRlc3QpO1xuICAgIHJldHVybiBkZXN0WzBdICYgMHgzMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByYW5kb21CeXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1ieXRlLWJyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuLyoqXG4gKiBEZWNvZGUgdGhlIGlkIHRvIGdldCB0aGUgdmVyc2lvbiBhbmQgd29ya2VyXG4gKiBNYWlubHkgZm9yIGRlYnVnZ2luZyBhbmQgdGVzdGluZy5cbiAqIEBwYXJhbSBpZCAtIHRoZSBzaG9ydGlkLWdlbmVyYXRlZCBpZC5cbiAqL1xuZnVuY3Rpb24gZGVjb2RlKGlkKSB7XG4gICAgdmFyIGNoYXJhY3RlcnMgPSBhbHBoYWJldC5zaHVmZmxlZCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHZlcnNpb246IGNoYXJhY3RlcnMuaW5kZXhPZihpZC5zdWJzdHIoMCwgMSkpICYgMHgwZixcbiAgICAgICAgd29ya2VyOiBjaGFyYWN0ZXJzLmluZGV4T2YoaWQuc3Vic3RyKDEsIDEpKSAmIDB4MGZcbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlY29kZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL2RlY29kZS5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5jb2RlID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuLy8gSWdub3JlIGFsbCBtaWxsaXNlY29uZHMgYmVmb3JlIGEgY2VydGFpbiB0aW1lIHRvIHJlZHVjZSB0aGUgc2l6ZSBvZiB0aGUgZGF0ZSBlbnRyb3B5IHdpdGhvdXQgc2FjcmlmaWNpbmcgdW5pcXVlbmVzcy5cbi8vIFRoaXMgbnVtYmVyIHNob3VsZCBiZSB1cGRhdGVkIGV2ZXJ5IHllYXIgb3Igc28gdG8ga2VlcCB0aGUgZ2VuZXJhdGVkIGlkIHNob3J0LlxuLy8gVG8gcmVnZW5lcmF0ZSBgbmV3IERhdGUoKSAtIDBgIGFuZCBidW1wIHRoZSB2ZXJzaW9uLiBBbHdheXMgYnVtcCB0aGUgdmVyc2lvbiFcbnZhciBSRURVQ0VfVElNRSA9IDE0NTk3MDc2MDY1MTg7XG5cbi8vIGRvbid0IGNoYW5nZSB1bmxlc3Mgd2UgY2hhbmdlIHRoZSBhbGdvcyBvciBSRURVQ0VfVElNRVxuLy8gbXVzdCBiZSBhbiBpbnRlZ2VyIGFuZCBsZXNzIHRoYW4gMTZcbnZhciB2ZXJzaW9uID0gNjtcblxuLy8gQ291bnRlciBpcyB1c2VkIHdoZW4gc2hvcnRpZCBpcyBjYWxsZWQgbXVsdGlwbGUgdGltZXMgaW4gb25lIHNlY29uZC5cbnZhciBjb3VudGVyO1xuXG4vLyBSZW1lbWJlciB0aGUgbGFzdCB0aW1lIHNob3J0aWQgd2FzIGNhbGxlZCBpbiBjYXNlIGNvdW50ZXIgaXMgbmVlZGVkLlxudmFyIHByZXZpb3VzU2Vjb25kcztcblxuLyoqXG4gKiBHZW5lcmF0ZSB1bmlxdWUgaWRcbiAqIFJldHVybnMgc3RyaW5nIGlkXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkKGNsdXN0ZXJXb3JrZXJJZCkge1xuXG4gICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKChEYXRlLm5vdygpIC0gUkVEVUNFX1RJTUUpICogMC4wMDEpO1xuXG4gICAgaWYgKHNlY29uZHMgPT09IHByZXZpb3VzU2Vjb25kcykge1xuICAgICAgICBjb3VudGVyKys7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY291bnRlciA9IDA7XG4gICAgICAgIHByZXZpb3VzU2Vjb25kcyA9IHNlY29uZHM7XG4gICAgfVxuXG4gICAgc3RyID0gc3RyICsgZW5jb2RlKGFscGhhYmV0Lmxvb2t1cCwgdmVyc2lvbik7XG4gICAgc3RyID0gc3RyICsgZW5jb2RlKGFscGhhYmV0Lmxvb2t1cCwgY2x1c3RlcldvcmtlcklkKTtcbiAgICBpZiAoY291bnRlciA+IDApIHtcbiAgICAgICAgc3RyID0gc3RyICsgZW5jb2RlKGFscGhhYmV0Lmxvb2t1cCwgY291bnRlcik7XG4gICAgfVxuICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIHNlY29uZHMpO1xuXG4gICAgcmV0dXJuIHN0cjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidWlsZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL2J1aWxkLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbmZ1bmN0aW9uIGlzU2hvcnRJZChpZCkge1xuICAgIGlmICghaWQgfHwgdHlwZW9mIGlkICE9PSAnc3RyaW5nJyB8fCBpZC5sZW5ndGggPCA2ICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGNoYXJhY3RlcnMgPSBhbHBoYWJldC5jaGFyYWN0ZXJzKCk7XG4gICAgdmFyIGxlbiA9IGlkLmxlbmd0aDtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuO2krKykge1xuICAgICAgICBpZiAoY2hhcmFjdGVycy5pbmRleE9mKGlkW2ldKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Nob3J0SWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9pcy12YWxpZC5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IDA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi91dGlsL2NsdXN0ZXItd29ya2VyLWlkLWJyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBDYXJ0QVBJIGZyb20gJy4uL2xpYi9DYXJ0QVBJJztcbmltcG9ydCBzaG9ydGlkIGZyb20gJ3Nob3J0aWQnO1xuY29uc3QgZnJvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBuYW1lX2lucHV0YCk7XG5jb25zdCB0byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByZWNpcGllbnRfaW5wdXRgKTtcbmNvbnN0IGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudW5pcXVlX2xpbmtgKTtcblxuY29uc3QgaGFuZGxlU2F2ZSA9ICh7dGV4dCwgaWQsIGF1ZGlvU2V0dGluZ3N9KSA9PiB7XG5cbiAgQ2FydEFQSS5jcmVhdGUoe1xuICAgIHRleHQsXG4gICAgaWQsXG4gICAgZnJvbTogZnJvbS52YWx1ZSB8fCAnSHVtYW4nLFxuICAgIHRvOiB0by52YWx1ZSB8fCAnRmVsbG93IEh1bWFuJyxcbiAgICBhdWRpb1NldHRpbmdzXG4gIH0pO1xuXG4gIGxpbmsuaW5uZXJIVE1MID0gYGh0dHBzOi8vbG9jYWxob3N0OjgwODAvc2FudGEuaHRtbD9pZD0ke2lkfWA7XG4gIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgYGh0dHBzOi8vbG9jYWxob3N0OjgwODAvc2FudGEuaHRtbD9pZD0ke2lkfWApO1xuICBsaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgYF9ibGFua2ApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlU2F2ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9vYmplY3RzL1NhdmUuanMiLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5cbmNvbnN0IHVybCA9IGAvYXBpL2NhcnRgO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgY3JlYXRlOiAoe3RleHQsIGlkLCBmcm9tLCBibG9iLCB0bywgYXVkaW9TZXR0aW5nc30pID0+IHtcbiAgICBjb25zdCBtZXRob2QgPSBgUE9TVGA7XG4gICAgLy8gY29uc3QgbmV3RmlsZU5hbWUgPSBgJHtpZC5zcGxpdChgIGApLmpvaW4oYF9gKX1gO1xuICAgIGNvbnN0IGJvZHkgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBib2R5LmFwcGVuZChgdGV4dGAsIHRleHQpO1xuICAgIGJvZHkuYXBwZW5kKGBpZGAsIGlkKTtcbiAgICBib2R5LmFwcGVuZChgZnJvbWAsIGZyb20pO1xuICAgIGJvZHkuYXBwZW5kKGB0b2AsIHRvKTtcbiAgICBib2R5LmFwcGVuZChgYXVkaW9TZXR0aW5nc2AsIGF1ZGlvU2V0dGluZ3MpO1xuXG4gICAgcmV0dXJuIGZldGNoKHVybCwge21ldGhvZCwgYm9keX0pXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKTtcbiAgfSxcblxuICByZWFkOiAoKSA9PiB7XG4gICAgcmV0dXJuIGZldGNoKGAke3VybH0/aXNBY3RpdmU9dHJ1ZWApXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKTtcbiAgfSxcblxuICByZWFkT25lOiBpZCA9PiB7XG4gICAgY29uc3QgbWV0aG9kID0gYEdFVGA7XG4gICAgcmV0dXJuIGZldGNoKGAke3VybH0vJHtpZH1gLCB7bWV0aG9kfSkudGhlbihyID0+IHIuanNvbigpKTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9saWIvQ2FydEFQSS5qcyJdLCJzb3VyY2VSb290IjoiIn0=