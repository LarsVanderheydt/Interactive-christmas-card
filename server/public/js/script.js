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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTY0YmEyYWMxNGI0YTAyNjkxZDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL29iamVjdHMvY29sb3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLWZldGNoL2ZldGNoLW5wbS1icm93c2VyaWZ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9hbHBoYWJldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9IZWFkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9vYmplY3RzL01hdGVyaWFscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2hhdHdnLWZldGNoL2ZldGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9saWIvY2FydEFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvQXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xpYi9zb3VuZEFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWJ5dGUtYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvZGVjb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvaXMtdmFsaWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL3V0aWwvY2x1c3Rlci13b3JrZXItaWQtYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvb2JqZWN0cy9TYXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9saWIvQ2FydEFQSS5qcyJdLCJuYW1lcyI6WyJDb2xvcnMiLCJza2luIiwiZnJlY2tsZXMiLCJ3aGl0ZSIsImdsYXNzZXMiLCJ0ZWV0aCIsImJsYWNrIiwiZXllIiwiaGF0IiwiaXNCbGlua2luZyIsIkhlYWQiLCJtZXNoIiwiVEhSRUUiLCJPYmplY3QzRCIsImhlYWRHZW9tIiwiQm94QnVmZmVyR2VvbWV0cnkiLCJza2luTWF0IiwiTWVzaExhbWJlcnRNYXRlcmlhbCIsImNvbG9yIiwiZmxhdFNoYWRpbmciLCJleWVNYXQiLCJNZXNoUGhvbmdNYXRlcmlhbCIsImhlYWQiLCJNZXNoIiwiY2FzdFNoYWRvdyIsInJlY2VpdmVTaGFkb3ciLCJhZGQiLCJiZWFyZCIsInBvc2l0aW9uIiwieSIsInoiLCJCZWFyZCIsIkdsYXNzZXMiLCJIYWlyIiwiRXllcyIsIkV5ZUJyb3dzIiwiSGF0IiwiRnJlY2tsZXMiLCJGZWF0dXJlcyIsImlkbGUiLCJub3JtYWxpemUiLCJ2Iiwidm1pbiIsInZtYXgiLCJ0bWluIiwidG1heCIsIm52IiwiTWF0aCIsIm1heCIsIm1pbiIsImR2IiwicGMiLCJkdCIsInR2Iiwic3BlZWQiLCJleWVCbHVlUmlnaHRQb3NYIiwiZXllQmx1ZUxlZnRQb3NYIiwiZXllQmx1ZVJpZ2h0UG9zWSIsImV5ZUJsdWVMZWZ0UG9zWSIsImV5ZUJyb3dSaWdodFBvc1kiLCJleWVCcm93TGVmdFBvc1kiLCJleWVCbHVlUmlnaHQiLCJ4IiwiZXllQmx1ZUxlZnQiLCJleWVCcm93UmlnaHQiLCJleWVCcm93TGVmdCIsInhUYXJnZXQiLCJ5VGFyZ2V0IiwiZGlzdGFuY2UiLCJyb3RhdGlvbiIsInNpbiIsIkRhdGUiLCJub3ciLCJQSSIsIm1vdXN0YWNoZSIsImNvcyIsInVwZGF0ZUJvZHkiLCJiZWFyZEdlb21NZXJnZWQiLCJHZW9tZXRyeSIsImJlYXJkMUdlb20iLCJCb3hHZW9tZXRyeSIsImJlYXJkMSIsIk1hdCIsIndoaXRlTWF0IiwiYXBwbHlNYXRyaXgiLCJNYXRyaXg0IiwibWFrZVRyYW5zbGF0aW9uIiwidXBkYXRlTWF0cml4IiwibWVyZ2UiLCJnZW9tZXRyeSIsIm1hdHJpeCIsImJlYXJkMiIsInNjYWxlIiwiYmVhcmQzIiwiY2xvbmUiLCJiZWFyZDQiLCJiZWFyZDJHZW9tIiwidmVydGljZXMiLCJiZWFyZDUiLCJiZWFyZDNHZW9tIiwiYmVhcmQ2IiwiYmVhcmQ3IiwiYmVhcmQ4IiwiYmVhcmQ0R2VvbSIsImJlYXJkOSIsImJlYXJkNUdlb20iLCJiZWFyZDEwIiwiYmVhcmQxMSIsImJlYXJkTWVyZ2VkIiwibW91dGhHZW9tIiwibW91dGgiLCJibGFja01hdCIsInNldCIsInRlZXRoR2VvbSIsInRlZXRoTWF0IiwibW91c3RhY2hlR2VvbSIsImdsYXNzZXNNYXQiLCJmcmFtZUdlb21NZXJnZWQiLCJmcmFtZU91dGVyR2VvbSIsIkN5bGluZGVyR2VvbWV0cnkiLCJmcmFtZUlubmVyR2VvbSIsIm1ha2VSb3RhdGlvblgiLCJmcmFtZUJTUCIsIlRocmVlQlNQIiwiZnJhbWVDdXRCU1AiLCJmcmFtZWludGVyc2VjdGlvbkJTUCIsInN1YnRyYWN0IiwiZnJhbWVMZWZ0IiwidG9NZXNoIiwiZnJhbWVSaWdodCIsIm1ha2VSb3RhdGlvbloiLCJmcmFtZU1pZEdlb20iLCJmcmFtZU1pZCIsImZyYW1lRW5kR2VvbSIsImZyYW1lRW5kUmlnaHQiLCJmcmFtZUVuZExlZnQiLCJmcmFtZVNwb2tlR2VvbSIsImZyYW1lU3Bva2VSaWdodCIsImZyYW1lU3Bva2VMZWZ0IiwiZnJhbWVNZXJnZWQiLCJoYWlyIiwiaGFpckdlb21NZXJnZWQiLCJoYWlyRmxhdEdlb20iLCJoYWlyMSIsImhhaXIyIiwiaGFpcjMiLCJoYWlyNCIsImhhaXI2IiwiaGFpckZsYXRCYWNrR2VvbSIsImhhaXI1IiwiaGFpck1lcmdlZCIsImV5ZXMiLCJleWVXaGl0ZUdlb20iLCJQbGFuZUdlb21ldHJ5IiwiZXllV2hpdGVSaWdodCIsImV5ZUJsdWVHZW9tIiwiZXllUHVwaWxHZW9tIiwiZXllUHVwaWxSaWdodCIsImV5ZVdoaXRlTGVmdCIsImV5ZVB1cGlsTGVmdCIsImV5ZUJyb3dzIiwiZXllQnJvd0dlb20iLCJoYXRNYXQiLCJiYW5kR2VvbSIsIlRvcnVzR2VvbWV0cnkiLCJiaWdDb25lR2VvbSIsInNtYWxsQ29uZUdlb20iLCJoYXREaW5nbGVHZW9tIiwiU3BoZXJlR2VvbWV0cnkiLCJiYW5kIiwiYmlnQ29uZSIsInNtYWxsQ29uZSIsIm1ha2VSb3RhdGlvblkiLCJoYXREaW5nbGUiLCJmcmVja2xlc01hdCIsImZyZWNrbGVzR2VvbU1lcmdlZCIsImZyZWNrbGVzR2VvbSIsImZyZWNrbGUxIiwiZnJlY2tsZTIiLCJmcmVja2xlMyIsImZyZWNrbGU0IiwiZnJlY2tsZTUiLCJmcmVja2xlNiIsImZyZWNrbGVkTWVyZ2VkIiwiZWFyR2VvbSIsImVhclJpZ2h0IiwiZWFyTGVmdCIsIm5vc2VHZW9tIiwibm9zZSIsIk1hdGVyaWFscyIsIk1lc2hOb3JtYWxNYXRlcmlhbCIsInVybCIsImNyZWF0ZSIsInRleHQiLCJpZCIsIm5hbWUiLCJibG9iIiwibWV0aG9kIiwiYm9keSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZmV0Y2giLCJ0aGVuIiwiciIsImpzb24iLCJyZWFkIiwicmVhZE9uZSIsInNjZW5lIiwiY2FtZXJhIiwiZmllbGRPZlZpZXciLCJhc3BlY3RSYXRpbyIsIm5lYXJQbGFuZSIsImZhclBsYW5lIiwiSEVJR0hUIiwiV0lEVEgiLCJnbG9iYWxMaWdodCIsInNoYWRvd0xpZ2h0IiwiYmFja0xpZ2h0IiwibGlnaHQiLCJyZW5kZXJlciIsImNvbnRhaW5lciIsImxvYWRlZCIsInN0YXJzIiwid2luZG93SGFsZlgiLCJ3aW5kb3dIYWxmWSIsImF1ZGlvIiwiU3BlZWNoVGV4dCIsImNvbnRyb2xsZXIiLCJndWkiLCJzYXZlQnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1vdXNlUG9zIiwic3RhckFycmF5IiwiaW5pdCIsInBhcnRpY2xlc0pTIiwibG9hZCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVTY2VuZSIsImNyZWF0ZUxpZ2h0cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVTYXZlIiwidHh0IiwiZGF0IiwiR1VJIiwiZG9tRWxlbWVudCIsImNsb3NlZCIsImNvbnRyb2xsZXJUZXh0IiwiZ3VpQ29udHJvbGxlciIsIndpbmRvdyIsImxvb3AiLCJrZXlzIiwiZm9yRWFjaCIsImFkZENvbG9yIiwia2V5Iiwib25DaGFuZ2UiLCJyZW1vdmUiLCJjcmVhdGVIZWFkIiwiZGVjMmhleCIsImkiLCJyZXN1bHQiLCJ0b1N0cmluZyIsImxlbmd0aCIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsIlNjZW5lIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJXZWJHTFJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJzZXRQaXhlbFJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNldFNpemUiLCJzaGFkb3dNYXAiLCJlbmFibGVkIiwidHlwZSIsIlBDRlNvZnRTaGFkb3dNYXAiLCJhcHBlbmRDaGlsZCIsIm9uV2luZG93UmVzaXplIiwiaGFuZGxlTW91c2VNb3ZlIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImV2ZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJsb2FkZXJNYW5hZ2VyIiwiTG9hZGluZ01hbmFnZXIiLCJoYW5kbGVXaW5kb3dSZXNpemUiLCJpc01vYmlsZSIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJIZW1pc3BoZXJlTGlnaHQiLCJEaXJlY3Rpb25hbExpZ2h0Iiwic2hhZG93IiwibWFwU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiQW1iaWVudExpZ2h0IiwiY3JlYXRlQ2hhcmFjdGVyIiwiYmxpbmtMb29wIiwicmFuZG9tIiwiYmxpbmsiLCJUd2Vlbk1heCIsInRvIiwieW95byIsInJlcGVhdCIsIm9uQ29tcGxldGUiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJTcGVlY2hSZWNvZ25pdGlvbiIsIndlYmtpdFNwZWVjaFJlY29nbml0aW9uIiwiU3BlZWNoR3JhbW1hckxpc3QiLCJ3ZWJraXRTcGVlY2hHcmFtbWFyTGlzdCIsIlNwZWVjaFJlY29nbml0aW9uRXZlbnQiLCJ3ZWJraXRTcGVlY2hSZWNvZ25pdGlvbkV2ZW50IiwiQXVkaW9Db250ZXh0Iiwid2Via2l0QXVkaW9Db250ZXh0IiwiYXVkaW9DdHgiLCJyZWNvZ25pdGlvbiIsInRyYW5zY3JpcHQiLCJhdWRpb0NodW5rcyIsIiR0ZXh0IiwiJHJlY29yZCIsIiRhdWRpbyIsIiRzdG9wIiwiYXVkaW9Tb3VyY2VzIiwicGl0Y2hTaGlmdGVyUHJvY2Vzc29yIiwiYXVkaW9Tb3VyY2VJbmRleCIsImF1ZGlvVmlzdWFsaXNhdGlvbkluZGV4IiwidmFsaWRHcmFuU2l6ZXMiLCJncmFpblNpemUiLCJwaXRjaFJhdGlvIiwib3ZlcmxhcFJhdGlvIiwic2hvcnRJZCIsImdlbmVyYXRlIiwiQXVkaW8iLCJzcGVlY2hTZXR0aW5ncyIsIm9ucmVzdWx0IiwiZ290UmVzdWx0Iiwib25zcGVlY2hlbmQiLCJvblNwZWVjaEVuZCIsImUiLCJ2YWx1ZSIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsIm1lZGlhUmVjb3JkZXIiLCJNZWRpYVJlY29yZGVyIiwic3RyZWFtIiwic3RhcnQiLCJkaXNhYmxlZCIsInB1c2giLCJkYXRhIiwiQmxvYiIsIlNvdW5kQVBJIiwic2V0VGltZW91dCIsImJ1ZmZlckxvYWRlciIsIkJ1ZmZlckxvYWRlciIsInNvdXJjZSIsInN0b3AiLCIkcGl0Y2giLCJwYXJzZUZsb2F0IiwiY3JlYXRlQnVmZmVyU291cmNlIiwiYnVmZmVyIiwiYnVmZmVyTGlzdCIsImNvbm5lY3QiLCJpbml0UHJvY2Vzc29yIiwib3ZlcmxhcCIsInRleHRDb250ZW50IiwibGFzdCIsInJlc3VsdHMiLCJjb250aW51b3VzIiwibGFuZyIsImludGVyaW1SZXN1bHRzIiwibWF4QWx0ZXJuYXRpdmVzIiwibGluZWFySW50ZXJwb2xhdGlvbiIsImEiLCJiIiwidCIsImRpc2Nvbm5lY3QiLCJjcmVhdGVTY3JpcHRQcm9jZXNzb3IiLCJjcmVhdGVKYXZhU2NyaXB0Tm9kZSIsIkZsb2F0MzJBcnJheSIsImdyYWluV2luZG93IiwiaGFubldpbmRvdyIsIm9uYXVkaW9wcm9jZXNzIiwiaW5wdXREYXRhIiwiaW5wdXRCdWZmZXIiLCJnZXRDaGFubmVsRGF0YSIsIm91dHB1dERhdGEiLCJvdXRwdXRCdWZmZXIiLCJncmFpbkRhdGEiLCJqIiwiaW5kZXgiLCJmbG9vciIsInJvdW5kIiwiZGVzdGluYXRpb24iLCJuZXdGaWxlTmFtZSIsInNwbGl0Iiwiam9pbiIsImxpbmsiLCJxdWVyeVNlbGVjdG9yIiwiQ2FydEFQSSIsImlubmVySFRNTCIsInNldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQSxJQUFNQSxTQUFTO0FBQ2JDLFFBQU0sUUFETztBQUViQyxZQUFVLFFBRkc7QUFHYkMsU0FBTyxRQUhNO0FBSWJDLFdBQVMsUUFKSTtBQUtiQyxTQUFPLFFB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QUFrQk4sRUFBbEI7QUFDQUksU0FBS0UsTUFBTCxTQUFvQkwsSUFBcEI7QUFDQTs7QUFFQSxXQUFPLHdEQUFBTSxDQUFNVixHQUFOLEVBQVcsRUFBQ00sY0FBRCxFQUFTQyxVQUFULEVBQVgsRUFDSkksSUFESSxDQUNDO0FBQUEsYUFBS0MsRUFBRUMsSUFBRixFQUFMO0FBQUEsS0FERCxDQUFQO0FBRUQsR0FiWTs7QUFlYkMsUUFBTSxnQkFBTTtBQUNWLFdBQU8sd0RBQUFKLENBQVNWLEdBQVQscUJBQ0pXLElBREksQ0FDQztBQUFBLGFBQUtDLEVBQUVDLElBQUYsRUFBTDtBQUFBLEtBREQsQ0FBUDtBQUVELEdBbEJZOztBQW9CYkUsV0FBUyxxQkFBTTtBQUNiLFFBQU1ULGNBQU47QUFDQSxXQUFPLHdEQUFBSSxDQUFTVixHQUFULFNBQWdCRyxFQUFoQixFQUFzQixFQUFDRyxjQUFELEVBQXRCLEVBQWdDSyxJQUFoQyxDQUFxQztBQUFBLGFBQUtDLEVBQUVDLElBQUYsRUFBTDtBQUFBLEtBQXJDLENBQVA7QUFDRDtBQXZCWSxDQUFmLEUiLCJmaWxlIjoianMvc2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTY0YmEyYWMxNGI0YTAyNjkxZDIiLCJjb25zdCBDb2xvcnMgPSB7XG4gIHNraW46IDB4ZmZlMGJkLFxuICBmcmVja2xlczogMHhjZmJhOTYsXG4gIHdoaXRlOiAweGU5ZWJlZSxcbiAgZ2xhc3NlczogMHhmOWM0MjEsXG4gIHRlZXRoOiAweGZmZmZmZixcbiAgYmxhY2s6IDB4MmUyZTJlLFxuICBleWU6IDB4NjI5NWE4LFxuICBoYXQ6IDB4NzIwMzE0XG59O1xuZXhwb3J0IGRlZmF1bHQgQ29sb3JzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL29iamVjdHMvY29sb3JzLmpzIiwiLy8gdGhlIHdoYXR3Zy1mZXRjaCBwb2x5ZmlsbCBpbnN0YWxscyB0aGUgZmV0Y2goKSBmdW5jdGlvblxuLy8gb24gdGhlIGdsb2JhbCBvYmplY3QgKHdpbmRvdyBvciBzZWxmKVxuLy9cbi8vIFJldHVybiB0aGF0IGFzIHRoZSBleHBvcnQgZm9yIHVzZSBpbiBXZWJwYWNrLCBCcm93c2VyaWZ5IGV0Yy5cbnJlcXVpcmUoJ3doYXR3Zy1mZXRjaCcpO1xubW9kdWxlLmV4cG9ydHMgPSBzZWxmLmZldGNoLmJpbmQoc2VsZik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLWZldGNoL2ZldGNoLW5wbS1icm93c2VyaWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmFuZG9tRnJvbVNlZWQgPSByZXF1aXJlKCcuL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkJyk7XG5cbnZhciBPUklHSU5BTCA9ICcwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWl8tJztcbnZhciBhbHBoYWJldDtcbnZhciBwcmV2aW91c1NlZWQ7XG5cbnZhciBzaHVmZmxlZDtcblxuZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgc2h1ZmZsZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2V0Q2hhcmFjdGVycyhfYWxwaGFiZXRfKSB7XG4gICAgaWYgKCFfYWxwaGFiZXRfKSB7XG4gICAgICAgIGlmIChhbHBoYWJldCAhPT0gT1JJR0lOQUwpIHtcbiAgICAgICAgICAgIGFscGhhYmV0ID0gT1JJR0lOQUw7XG4gICAgICAgICAgICByZXNldCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoX2FscGhhYmV0XyA9PT0gYWxwaGFiZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChfYWxwaGFiZXRfLmxlbmd0aCAhPT0gT1JJR0lOQUwubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ3VzdG9tIGFscGhhYmV0IGZvciBzaG9ydGlkIG11c3QgYmUgJyArIE9SSUdJTkFMLmxlbmd0aCArICcgdW5pcXVlIGNoYXJhY3RlcnMuIFlvdSBzdWJtaXR0ZWQgJyArIF9hbHBoYWJldF8ubGVuZ3RoICsgJyBjaGFyYWN0ZXJzOiAnICsgX2FscGhhYmV0Xyk7XG4gICAgfVxuXG4gICAgdmFyIHVuaXF1ZSA9IF9hbHBoYWJldF8uc3BsaXQoJycpLmZpbHRlcihmdW5jdGlvbihpdGVtLCBpbmQsIGFycil7XG4gICAgICAgcmV0dXJuIGluZCAhPT0gYXJyLmxhc3RJbmRleE9mKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgaWYgKHVuaXF1ZS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXN0b20gYWxwaGFiZXQgZm9yIHNob3J0aWQgbXVzdCBiZSAnICsgT1JJR0lOQUwubGVuZ3RoICsgJyB1bmlxdWUgY2hhcmFjdGVycy4gVGhlc2UgY2hhcmFjdGVycyB3ZXJlIG5vdCB1bmlxdWU6ICcgKyB1bmlxdWUuam9pbignLCAnKSk7XG4gICAgfVxuXG4gICAgYWxwaGFiZXQgPSBfYWxwaGFiZXRfO1xuICAgIHJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIGNoYXJhY3RlcnMoX2FscGhhYmV0Xykge1xuICAgIHNldENoYXJhY3RlcnMoX2FscGhhYmV0Xyk7XG4gICAgcmV0dXJuIGFscGhhYmV0O1xufVxuXG5mdW5jdGlvbiBzZXRTZWVkKHNlZWQpIHtcbiAgICByYW5kb21Gcm9tU2VlZC5zZWVkKHNlZWQpO1xuICAgIGlmIChwcmV2aW91c1NlZWQgIT09IHNlZWQpIHtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcHJldmlvdXNTZWVkID0gc2VlZDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNodWZmbGUoKSB7XG4gICAgaWYgKCFhbHBoYWJldCkge1xuICAgICAgICBzZXRDaGFyYWN0ZXJzKE9SSUdJTkFMKTtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlQXJyYXkgPSBhbHBoYWJldC5zcGxpdCgnJyk7XG4gICAgdmFyIHRhcmdldEFycmF5ID0gW107XG4gICAgdmFyIHIgPSByYW5kb21Gcm9tU2VlZC5uZXh0VmFsdWUoKTtcbiAgICB2YXIgY2hhcmFjdGVySW5kZXg7XG5cbiAgICB3aGlsZSAoc291cmNlQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICByID0gcmFuZG9tRnJvbVNlZWQubmV4dFZhbHVlKCk7XG4gICAgICAgIGNoYXJhY3RlckluZGV4ID0gTWF0aC5mbG9vcihyICogc291cmNlQXJyYXkubGVuZ3RoKTtcbiAgICAgICAgdGFyZ2V0QXJyYXkucHVzaChzb3VyY2VBcnJheS5zcGxpY2UoY2hhcmFjdGVySW5kZXgsIDEpWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldEFycmF5LmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBnZXRTaHVmZmxlZCgpIHtcbiAgICBpZiAoc2h1ZmZsZWQpIHtcbiAgICAgICAgcmV0dXJuIHNodWZmbGVkO1xuICAgIH1cbiAgICBzaHVmZmxlZCA9IHNodWZmbGUoKTtcbiAgICByZXR1cm4gc2h1ZmZsZWQ7XG59XG5cbi8qKlxuICogbG9va3VwIHNodWZmbGVkIGxldHRlclxuICogQHBhcmFtIGluZGV4XG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBsb29rdXAoaW5kZXgpIHtcbiAgICB2YXIgYWxwaGFiZXRTaHVmZmxlZCA9IGdldFNodWZmbGVkKCk7XG4gICAgcmV0dXJuIGFscGhhYmV0U2h1ZmZsZWRbaW5kZXhdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjaGFyYWN0ZXJzOiBjaGFyYWN0ZXJzLFxuICAgIHNlZWQ6IHNldFNlZWQsXG4gICAgbG9va3VwOiBsb29rdXAsXG4gICAgc2h1ZmZsZWQ6IGdldFNodWZmbGVkXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvYWxwaGFiZXQuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IENvbG9ycyBmcm9tICcuLi9vYmplY3RzL2NvbG9ycyc7XG5pbXBvcnQgTWF0IGZyb20gJy4uL29iamVjdHMvTWF0ZXJpYWxzJztcblxubGV0IGlzQmxpbmtpbmcgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuXG4gICAgbGV0IGhlYWRHZW9tID0gbmV3IFRIUkVFLkJveEJ1ZmZlckdlb21ldHJ5KDE2LCAxNiwgMTYpO1xuICAgIGxldCBza2luTWF0ID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuc2tpbiwgZmxhdFNoYWRpbmc6IHRydWV9KTtcbiAgICBsZXQgZXllTWF0ID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmV5ZSwgZmxhdFNoYWRpbmc6IHRydWV9KTtcblxuICAgIHRoaXMuaGVhZCA9IG5ldyBUSFJFRS5NZXNoKGhlYWRHZW9tLHNraW5NYXQpO1xuICAgIHRoaXMuaGVhZC5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICB0aGlzLmhlYWQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMubWVzaC5hZGQodGhpcy5oZWFkKTtcblxuICAgIHRoaXMuYmVhcmQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmJlYXJkLnBvc2l0aW9uLnkgPSAtNztcbiAgICB0aGlzLmJlYXJkLnBvc2l0aW9uLnogPSAwLjU7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmJlYXJkKTtcblxuICAgIHRoaXMuQmVhcmQoKTtcbiAgICB0aGlzLkdsYXNzZXMoKTtcbiAgICB0aGlzLkhhaXIoKTtcbiAgICB0aGlzLkV5ZXMoKTtcbiAgICB0aGlzLkV5ZUJyb3dzKCk7XG4gICAgdGhpcy5IYXQoKTtcbiAgICB0aGlzLkZyZWNrbGVzKCk7XG4gICAgdGhpcy5GZWF0dXJlcygpO1xuICAgIHRoaXMuaWRsZSgpO1xuICAgIHRoaXMubm9ybWFsaXplKCk7XG4gIH1cblxuICBub3JtYWxpemUodiwgdm1pbiwgdm1heCwgdG1pbiwgdG1heCkge1xuICAgIGNvbnN0IG52ID0gTWF0aC5tYXgoTWF0aC5taW4odiwgdm1heCksIHZtaW4pO1xuICAgIGNvbnN0IGR2ID0gdm1heCAtIHZtaW47XG4gICAgY29uc3QgcGMgPSAobnYgLSB2bWluKSAvIGR2O1xuICAgIGNvbnN0IGR0ID0gdG1heCAtIHRtaW47XG4gICAgY29uc3QgdHYgPSB0bWluICsgKHBjICogZHQpO1xuICAgIHJldHVybiB0djtcbiAgfVxuXG4gIHVwZGF0ZUJvZHkoc3BlZWQsIGV5ZUJsdWVSaWdodFBvc1gsIGV5ZUJsdWVMZWZ0UG9zWCwgZXllQmx1ZVJpZ2h0UG9zWSwgZXllQmx1ZUxlZnRQb3NZLCBleWVCcm93UmlnaHRQb3NZLCBleWVCcm93TGVmdFBvc1kpIHtcbiAgICB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi54ICs9IChleWVCbHVlUmlnaHRQb3NYIC0gdGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24ueCkgLyBzcGVlZDtcbiAgICB0aGlzLmV5ZUJsdWVMZWZ0LnBvc2l0aW9uLnggKz0gKGV5ZUJsdWVMZWZ0UG9zWCAtIHRoaXMuZXllQmx1ZUxlZnQucG9zaXRpb24ueCkgLyBzcGVlZDtcblxuICAgIHRoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLnkgKz0gKGV5ZUJsdWVSaWdodFBvc1kgLSB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi55KSAvIHNwZWVkO1xuICAgIHRoaXMuZXllQmx1ZUxlZnQucG9zaXRpb24ueSArPSAoZXllQmx1ZUxlZnRQb3NZIC0gdGhpcy5leWVCbHVlTGVmdC5wb3NpdGlvbi55KSAvIHNwZWVkO1xuXG4gICAgdGhpcy5leWVCcm93UmlnaHQucG9zaXRpb24ueSArPSAoZXllQnJvd1JpZ2h0UG9zWSAtIHRoaXMuZXllQnJvd1JpZ2h0LnBvc2l0aW9uLnkpIC8gc3BlZWQ7XG4gICAgdGhpcy5leWVCcm93TGVmdC5wb3NpdGlvbi55ICs9IChleWVCcm93TGVmdFBvc1kgLSB0aGlzLmV5ZUJyb3dMZWZ0LnBvc2l0aW9uLnkpIC8gc3BlZWQ7XG4gIH1cblxuICBpZGxlKHhUYXJnZXQgPSAwLCB5VGFyZ2V0ID0gMCkge1xuICAgIGxldCBkaXN0YW5jZSA9IDE7XG5cbiAgICB0aGlzLmhlYWQucm90YXRpb24ueiA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwNSkgKiBNYXRoLlBJICogMC4wMDU7XG4gICAgdGhpcy5oZWFkLnJvdGF0aW9uLnggPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDQpICogTWF0aC5QSSAqIDAuMDM7XG5cbiAgICBjb25zdCBleWVCbHVlUmlnaHRQb3NYID0gdGhpcy5ub3JtYWxpemUoeFRhcmdldCwgLTIwMCwgMjAwLCAtMC42LCAwLjYpO1xuICAgIGNvbnN0IGV5ZUJsdWVMZWZ0UG9zWCA9IHRoaXMubm9ybWFsaXplKHhUYXJnZXQsIC0yMDAsIDIwMCwgLTAuNiwgMC42KTtcblxuICAgIGNvbnN0IGV5ZUJsdWVSaWdodFBvc1kgPSB0aGlzLm5vcm1hbGl6ZSh5VGFyZ2V0LCAtMjAwLCAyMDAsIDAuNiwgLTAuNik7XG4gICAgY29uc3QgZXllQmx1ZUxlZnRQb3NZID0gdGhpcy5ub3JtYWxpemUoeVRhcmdldCwgLTIwMCwgMjAwLCAwLjYsIC0wLjYpO1xuXG4gICAgY29uc3QgZXllQnJvd1JpZ2h0UG9zWSA9IHRoaXMubm9ybWFsaXplKHhUYXJnZXQsIC0yMDAsIDIwMCwgLTEsIDAuOCk7XG4gICAgY29uc3QgZXllQnJvd0xlZnRQb3NZID0gdGhpcy5ub3JtYWxpemUoeFRhcmdldCwgLTIwMCwgMjAwLCAtMSwgMC44KTtcblxuICAgIHRoaXMubW91c3RhY2hlLnBvc2l0aW9uLnkgPSBNYXRoLmNvcyhEYXRlLm5vdygpICogMC4wMSkgKiBkaXN0YW5jZSAvIDQ7XG4gICAgdGhpcy5tb3VzdGFjaGUucm90YXRpb24ueiA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAxKSAqIE1hdGguUEkgKiAwLjAxO1xuXG4gICAgdGhpcy5tZXNoLnJvdGF0aW9uLnkgPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDIpICogTWF0aC5QSSAqIDAuMDU7XG4gICAgdGhpcy51cGRhdGVCb2R5KDEwLCBleWVCbHVlUmlnaHRQb3NYLCBleWVCbHVlTGVmdFBvc1gsIGV5ZUJsdWVSaWdodFBvc1ksIGV5ZUJsdWVMZWZ0UG9zWSwgZXllQnJvd1JpZ2h0UG9zWSwgZXllQnJvd0xlZnRQb3NZKTtcbiAgfVxuXG4gIEJlYXJkKCkge1xuICAgIGxldCBiZWFyZEdlb21NZXJnZWQgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcblxuICAgIGxldCBiZWFyZDFHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDIsIDEwLCAxNik7XG5cbiAgICBsZXQgYmVhcmQxID0gbmV3IFRIUkVFLk1lc2goYmVhcmQxR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBiZWFyZDEuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oOSwgMCwgMCkpO1xuICAgIGJlYXJkMS51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQxLmdlb21ldHJ5LCBiZWFyZDEubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDIgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDFHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkMi5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig3LCAtMiwgMikpO1xuICAgIGJlYXJkMi5zY2FsZS56ID0gMC44O1xuICAgIGJlYXJkMi51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQyLmdlb21ldHJ5LCBiZWFyZDIubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDMgPSBiZWFyZDEuY2xvbmUoKTtcbiAgICBiZWFyZDMucG9zaXRpb24ueCA9IC1iZWFyZDEucG9zaXRpb24ueDtcbiAgICBiZWFyZDMudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkMy5nZW9tZXRyeSwgYmVhcmQzLm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQ0ID0gYmVhcmQyLmNsb25lKCk7XG4gICAgYmVhcmQ0LnBvc2l0aW9uLnggPSAtYmVhcmQyLnBvc2l0aW9uLng7XG4gICAgYmVhcmQ0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDQuZ2VvbWV0cnksIGJlYXJkNC5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkMkdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMywgMTQsIDEwKTtcbiAgICBiZWFyZDJHZW9tLnZlcnRpY2VzWzJdLnogLT0gMjtcbiAgICBiZWFyZDJHZW9tLnZlcnRpY2VzWzddLnogLT0gMjtcblxuICAgIGxldCBiZWFyZDUgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDJHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkNS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig1LCAtNSwgNCkpO1xuICAgIGJlYXJkNS51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQ1Lmdlb21ldHJ5LCBiZWFyZDUubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDNHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDIuNSwgMTQsIDEwKTtcbiAgICBiZWFyZDNHZW9tLnZlcnRpY2VzWzJdLnogLT0gMjtcbiAgICBiZWFyZDNHZW9tLnZlcnRpY2VzWzddLnogLT0gMjtcblxuICAgIGxldCBiZWFyZDYgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDNHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkNi5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigyLjUsIC02LCA2KSk7XG4gICAgYmVhcmQ2LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDYuZ2VvbWV0cnksIGJlYXJkNi5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkNyA9IGJlYXJkNS5jbG9uZSgpO1xuICAgIGJlYXJkNy5wb3NpdGlvbi54ID0gLWJlYXJkNS5wb3NpdGlvbi54O1xuICAgIGJlYXJkNy51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQ3Lmdlb21ldHJ5LCBiZWFyZDcubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDggPSBiZWFyZDYuY2xvbmUoKTtcbiAgICBiZWFyZDgucG9zaXRpb24ueCA9IC1iZWFyZDYucG9zaXRpb24ueDtcbiAgICBiZWFyZDgudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkOC5nZW9tZXRyeSwgYmVhcmQ4Lm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQ0R2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyLjUsIDE0LjUsIDEwKTtcbiAgICBiZWFyZDRHZW9tLnZlcnRpY2VzWzJdLnogLT0gMTtcbiAgICBiZWFyZDRHZW9tLnZlcnRpY2VzWzddLnogLT0gMTtcblxuICAgIGxldCBiZWFyZDkgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDRHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkOS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigwLCAtNywgNS43NSkpO1xuICAgIGJlYXJkOS51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQ5Lmdlb21ldHJ5LCBiZWFyZDkubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDVHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDQsIDgsIDgpO1xuICAgIGxldCBiZWFyZDEwID0gbmV3IFRIUkVFLk1lc2goYmVhcmQ1R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBiZWFyZDEwLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKC02LCAtMSwgLTIpKTtcbiAgICBiZWFyZDEwLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDEwLmdlb21ldHJ5LCBiZWFyZDEwLm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQxMSA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkNUdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmQxMS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigwLCAtNSwgLTIpKTtcbiAgICBiZWFyZDExLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDExLmdlb21ldHJ5LCBiZWFyZDExLm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmRNZXJnZWQgPSBuZXcgVEhSRUUuTWVzaChiZWFyZEdlb21NZXJnZWQsIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmRNZXJnZWQuY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgYmVhcmRNZXJnZWQucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG5cbiAgICBsZXQgbW91dGhHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEwLCA0LCAxKTtcbiAgICBsZXQgbW91dGggPSBuZXcgVEhSRUUuTWVzaChtb3V0aEdlb20sIE1hdC5ibGFja01hdCk7XG4gICAgbW91dGgucG9zaXRpb24uc2V0KDAsIDIsIDgpO1xuICAgIG1vdXRoLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBtb3V0aC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcblxuICAgIGxldCB0ZWV0aEdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTAsIDEsIDEpO1xuICAgIGxldCB0ZWV0aCA9IG5ldyBUSFJFRS5NZXNoKHRlZXRoR2VvbSwgTWF0LnRlZXRoTWF0KTtcbiAgICB0ZWV0aC5wb3NpdGlvbi5zZXQoMCwgMC41LCAwLjEpO1xuICAgIHRlZXRoLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0ZWV0aC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcbiAgICBtb3V0aC5hZGQodGVldGgpXG5cbiAgICB0aGlzLmJlYXJkLmFkZChiZWFyZE1lcmdlZCwgbW91dGgpO1xuXG4gICAgbGV0IG1vdXN0YWNoZUdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTQsIDMsIDMsIDMpO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbMF0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbMV0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbMl0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbM10ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbNF0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbNV0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbNl0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbN10ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbOF0ueCAtPSAxO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbOV0ueCArPSAxO1xuXG4gICAgbW91c3RhY2hlR2VvbS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigwLCA0LCAwKSk7XG4gICAgdGhpcy5tb3VzdGFjaGUgPSBuZXcgVEhSRUUuTWVzaChtb3VzdGFjaGVHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIHRoaXMubW91c3RhY2hlLmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgIHRoaXMubW91c3RhY2hlLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuXG4gICAgdGhpcy5tb3VzdGFjaGUucG9zaXRpb24uc2V0KDAsIDAsIDkpO1xuICAgIHRoaXMuYmVhcmQuYWRkKHRoaXMubW91c3RhY2hlKTtcbiAgfVxuXG4gIEdsYXNzZXMoKSB7XG5cbiAgICB0aGlzLmdsYXNzZXMgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmdsYXNzZXMucG9zaXRpb24uc2V0KDAsIDAsIDkpO1xuICAgIHRoaXMuaGVhZC5hZGQodGhpcy5nbGFzc2VzKTtcbiAgICBsZXQgZ2xhc3Nlc01hdCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5nbGFzc2VzLCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuXG4gICAgbGV0IGZyYW1lR2VvbU1lcmdlZCA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuXG4gICAgbGV0IGZyYW1lT3V0ZXJHZW9tID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMywgMywgMC41LCAzMilcbiAgICBsZXQgZnJhbWVJbm5lckdlb20gPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgyLjcsIDIuNywgMC41LCAzMilcblxuICAgIGZyYW1lT3V0ZXJHZW9tLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWCgtTWF0aC5QSSAvIDIpKTtcbiAgICBmcmFtZUlubmVyR2VvbS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblgoLU1hdGguUEkgLyAyKSk7XG5cbiAgICBsZXQgZnJhbWVCU1AgPSBuZXcgVGhyZWVCU1AoZnJhbWVPdXRlckdlb20pO1xuICAgIGxldCBmcmFtZUN1dEJTUCA9IG5ldyBUaHJlZUJTUChmcmFtZUlubmVyR2VvbSk7XG5cbiAgICBsZXQgZnJhbWVpbnRlcnNlY3Rpb25CU1AgPSBmcmFtZUJTUC5zdWJ0cmFjdChmcmFtZUN1dEJTUCk7XG4gICAgbGV0IGZyYW1lTGVmdCA9IGZyYW1laW50ZXJzZWN0aW9uQlNQLnRvTWVzaChnbGFzc2VzTWF0KTtcblxuICAgIGZyYW1lTGVmdC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig0LCAzLCAwKSk7XG4gICAgZnJhbWVMZWZ0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyYW1lR2VvbU1lcmdlZC5tZXJnZShmcmFtZUxlZnQuZ2VvbWV0cnksIGZyYW1lTGVmdC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lUmlnaHQgPSBmcmFtZUxlZnQuY2xvbmUoKTtcbiAgICBmcmFtZVJpZ2h0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWihNYXRoLlBJIC8gMzApKTtcbiAgICBmcmFtZVJpZ2h0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKC03LjUsIC0wLjI1LCAwKSk7XG4gICAgZnJhbWVSaWdodC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmFtZUdlb21NZXJnZWQubWVyZ2UoZnJhbWVSaWdodC5nZW9tZXRyeSwgZnJhbWVSaWdodC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lTWlkR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyLCAuMywgLjUpO1xuICAgIGxldCBmcmFtZU1pZCA9IG5ldyBUSFJFRS5NZXNoKGZyYW1lTWlkR2VvbSwgZ2xhc3Nlc01hdCk7XG4gICAgZnJhbWVNaWQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oMCwgMy4zLCAtMC4zKSk7XG4gICAgZnJhbWVNaWQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJhbWVHZW9tTWVyZ2VkLm1lcmdlKGZyYW1lTWlkLmdlb21ldHJ5LCBmcmFtZU1pZC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lRW5kR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLjUsIC41LCAxKTtcbiAgICBsZXQgZnJhbWVFbmRSaWdodCA9IG5ldyBUSFJFRS5NZXNoKGZyYW1lRW5kR2VvbSwgZ2xhc3Nlc01hdCk7XG4gICAgZnJhbWVFbmRSaWdodC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig3LjUsIDMsIDApKTtcbiAgICBmcmFtZUVuZFJpZ2h0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyYW1lR2VvbU1lcmdlZC5tZXJnZShmcmFtZUVuZFJpZ2h0Lmdlb21ldHJ5LCBmcmFtZUVuZFJpZ2h0Lm1hdHJpeCk7XG5cbiAgICBsZXQgZnJhbWVFbmRMZWZ0ID0gZnJhbWVFbmRSaWdodC5jbG9uZSgpO1xuICAgIGZyYW1lRW5kTGVmdC5wb3NpdGlvbi54ID0gLWZyYW1lRW5kUmlnaHQucG9zaXRpb24ueDtcbiAgICBmcmFtZUVuZExlZnQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJhbWVHZW9tTWVyZ2VkLm1lcmdlKGZyYW1lRW5kTGVmdC5nZW9tZXRyeSwgZnJhbWVFbmRMZWZ0Lm1hdHJpeCk7XG5cbiAgICBsZXQgZnJhbWVTcG9rZUdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMSwgMC41LCAxMik7XG4gICAgbGV0IGZyYW1lU3Bva2VSaWdodCA9IG5ldyBUSFJFRS5NZXNoKGZyYW1lU3Bva2VHZW9tLCBnbGFzc2VzTWF0KTtcbiAgICBmcmFtZVNwb2tlUmlnaHQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oOCwgMywgLTUuNSkpO1xuICAgIGZyYW1lU3Bva2VSaWdodC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmFtZUdlb21NZXJnZWQubWVyZ2UoZnJhbWVTcG9rZVJpZ2h0Lmdlb21ldHJ5LCBmcmFtZVNwb2tlUmlnaHQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZVNwb2tlTGVmdCA9IGZyYW1lU3Bva2VSaWdodC5jbG9uZSgpO1xuICAgIGZyYW1lU3Bva2VMZWZ0LnBvc2l0aW9uLnggPSAtZnJhbWVTcG9rZVJpZ2h0LnBvc2l0aW9uLng7XG4gICAgZnJhbWVTcG9rZUxlZnQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJhbWVHZW9tTWVyZ2VkLm1lcmdlKGZyYW1lU3Bva2VMZWZ0Lmdlb21ldHJ5LCBmcmFtZVNwb2tlTGVmdC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lTWVyZ2VkID0gbmV3IFRIUkVFLk1lc2goZnJhbWVHZW9tTWVyZ2VkLCBnbGFzc2VzTWF0KTtcbiAgICBmcmFtZU1lcmdlZC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgZnJhbWVNZXJnZWQucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG5cbiAgICB0aGlzLmdsYXNzZXMuYWRkKGZyYW1lTWVyZ2VkKTtcblxuICB9XG5cbiAgSGFpcigpIHtcblxuICAgIHRoaXMuaGFpciA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHRoaXMuaGFpci5wb3NpdGlvbi5zZXQoMCwgOSwgMCk7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmhhaXIpO1xuXG4gICAgbGV0IGhhaXJHZW9tTWVyZ2VkID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XG5cbiAgICBsZXQgaGFpckZsYXRHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEwLCAyLCAxOCk7XG5cbiAgICBsZXQgaGFpcjEgPSBuZXcgVEhSRUUuTWVzaChoYWlyRmxhdEdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgaGFpcjEuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKC1NYXRoLlBJIC8gNDApKTtcbiAgICBoYWlyMS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigtNCwgLTAuNSwgMCkpO1xuICAgIGhhaXIxLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGhhaXJHZW9tTWVyZ2VkLm1lcmdlKGhhaXIxLmdlb21ldHJ5LCBoYWlyMS5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXIyID0gbmV3IFRIUkVFLk1lc2goaGFpckZsYXRHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGhhaXIyLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWigtTWF0aC5QSSAvIDEwKSk7XG4gICAgaGFpcjIuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oLTIsIDEsIDApKTtcbiAgICBoYWlyMi51cGRhdGVNYXRyaXgoKTtcbiAgICBoYWlyR2VvbU1lcmdlZC5tZXJnZShoYWlyMi5nZW9tZXRyeSwgaGFpcjIubWF0cml4KTtcblxuICAgIGxldCBoYWlyMyA9IG5ldyBUSFJFRS5NZXNoKGhhaXJGbGF0R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyMy5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooLU1hdGguUEkgLyA1KSk7XG4gICAgaGFpcjMuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oMiwgMSwgMCkpO1xuICAgIGhhaXIzLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGhhaXJHZW9tTWVyZ2VkLm1lcmdlKGhhaXIzLmdlb21ldHJ5LCBoYWlyMy5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXI0ID0gbmV3IFRIUkVFLk1lc2goaGFpckZsYXRHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGhhaXI0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWigtTWF0aC5QSSAvIDQpKTtcbiAgICBoYWlyNC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig2LCAwLCAwKSk7XG4gICAgaGFpcjQudXBkYXRlTWF0cml4KCk7XG4gICAgaGFpckdlb21NZXJnZWQubWVyZ2UoaGFpcjQuZ2VvbWV0cnksIGhhaXI0Lm1hdHJpeCk7XG5cbiAgICBsZXQgaGFpcjYgPSBuZXcgVEhSRUUuTWVzaChoYWlyRmxhdEdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgaGFpcjYuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKC1NYXRoLlBJIC8gLTMpKTtcbiAgICBoYWlyNi5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigtNy43NSwgLS41LCAwKSk7XG4gICAgaGFpcjYudXBkYXRlTWF0cml4KCk7XG4gICAgaGFpckdlb21NZXJnZWQubWVyZ2UoaGFpcjYuZ2VvbWV0cnksIGhhaXI2Lm1hdHJpeCk7XG5cbiAgICBsZXQgaGFpckZsYXRCYWNrR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxOCwgNywgNik7XG4gICAgaGFpckZsYXRCYWNrR2VvbS52ZXJ0aWNlc1swXS54IC09IDE7XG4gICAgaGFpckZsYXRCYWNrR2VvbS52ZXJ0aWNlc1sxXS54IC09IDE7XG4gICAgaGFpckZsYXRCYWNrR2VvbS52ZXJ0aWNlc1s0XS54ICs9IDE7XG4gICAgaGFpckZsYXRCYWNrR2VvbS52ZXJ0aWNlc1s1XS54ICs9IDE7XG5cbiAgICBsZXQgaGFpcjUgPSBuZXcgVEhSRUUuTWVzaChoYWlyRmxhdEJhY2tHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGhhaXI1LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDAsIC00LjUsIC02KSk7XG4gICAgaGFpcjUudXBkYXRlTWF0cml4KCk7XG4gICAgaGFpckdlb21NZXJnZWQubWVyZ2UoaGFpcjUuZ2VvbWV0cnksIGhhaXI1Lm1hdHJpeCk7XG5cbiAgICBsZXQgaGFpck1lcmdlZCA9IG5ldyBUSFJFRS5NZXNoKGhhaXJHZW9tTWVyZ2VkLCBNYXQud2hpdGVNYXQpO1xuICAgIGhhaXJNZXJnZWQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIGhhaXJNZXJnZWQucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG5cbiAgICB0aGlzLmhhaXIuYWRkKGhhaXJNZXJnZWQpO1xuXG4gIH1cblxuICBFeWVzKCkge1xuXG4gICAgdGhpcy5leWVzID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgdGhpcy5leWVzLnBvc2l0aW9uLnNldCgwLCAzLCA5KTtcbiAgICB0aGlzLmhlYWQuYWRkKHRoaXMuZXllcyk7XG5cbiAgICBsZXQgZXllV2hpdGVHZW9tID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMi41LCAyLjUpO1xuXG4gICAgbGV0IGV5ZVdoaXRlUmlnaHQgPSBuZXcgVEhSRUUuTWVzaChleWVXaGl0ZUdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgZXllV2hpdGVSaWdodC5wb3NpdGlvbi5zZXQoLTMuNzUsIDAsIDApO1xuICAgIGV5ZVdoaXRlUmlnaHQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIGV5ZVdoaXRlUmlnaHQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgbGV0IGV5ZUJsdWVHZW9tID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMS41LCAxLjUpO1xuXG4gICAgbGV0IGV5ZU1hdCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5leWUsIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG5cbiAgICB0aGlzLmV5ZUJsdWVSaWdodCA9IG5ldyBUSFJFRS5NZXNoKGV5ZUJsdWVHZW9tLCBleWVNYXQpO1xuICAgIHRoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLnNldCgwLCAwLCAuMDEpO1xuICAgIHRoaXMuZXllQmx1ZVJpZ2h0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmV5ZUJsdWVSaWdodC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICBleWVXaGl0ZVJpZ2h0LmFkZCh0aGlzLmV5ZUJsdWVSaWdodCk7XG5cbiAgICBsZXQgZXllUHVwaWxHZW9tID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMSwgMSk7XG5cbiAgICB0aGlzLmV5ZVB1cGlsUmlnaHQgPSBuZXcgVEhSRUUuTWVzaChleWVQdXBpbEdlb20sIE1hdC5ibGFja01hdCk7XG4gICAgdGhpcy5leWVQdXBpbFJpZ2h0LnBvc2l0aW9uLnNldCgwLCAwLCAuMDIpO1xuICAgIHRoaXMuZXllUHVwaWxSaWdodC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5leWVQdXBpbFJpZ2h0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuZXllQmx1ZVJpZ2h0LmFkZCh0aGlzLmV5ZVB1cGlsUmlnaHQpO1xuXG4gICAgbGV0IGV5ZVdoaXRlTGVmdCA9IG5ldyBUSFJFRS5NZXNoKGV5ZVdoaXRlR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBleWVXaGl0ZUxlZnQucG9zaXRpb24uc2V0KDMuNzUsIDAsIDApO1xuICAgIGV5ZVdoaXRlTGVmdC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgZXllV2hpdGVMZWZ0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuZXllQmx1ZUxlZnQgPSBuZXcgVEhSRUUuTWVzaChleWVCbHVlR2VvbSwgZXllTWF0KTtcbiAgICB0aGlzLmV5ZUJsdWVMZWZ0LnBvc2l0aW9uLnNldCgwLCAwLCAuMDEpO1xuICAgIHRoaXMuZXllQmx1ZUxlZnQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuZXllQmx1ZUxlZnQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgZXllV2hpdGVMZWZ0LmFkZCh0aGlzLmV5ZUJsdWVMZWZ0KTtcblxuICAgIHRoaXMuZXllUHVwaWxMZWZ0ID0gbmV3IFRIUkVFLk1lc2goZXllUHVwaWxHZW9tLCBNYXQuYmxhY2tNYXQpO1xuICAgIHRoaXMuZXllUHVwaWxMZWZ0LnBvc2l0aW9uLnNldCgwLCAwLCAuMDIpO1xuICAgIHRoaXMuZXllUHVwaWxMZWZ0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmV5ZVB1cGlsTGVmdC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmV5ZUJsdWVMZWZ0LmFkZCh0aGlzLmV5ZVB1cGlsTGVmdCk7XG5cbiAgICB0aGlzLmV5ZXMuYWRkKGV5ZVdoaXRlUmlnaHQsIGV5ZVdoaXRlTGVmdCk7XG4gIH1cblxuICBFeWVCcm93cygpIHtcbiAgICB0aGlzLmV5ZUJyb3dzID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgdGhpcy5leWVCcm93cy5wb3NpdGlvbi5zZXQoMCwgNiwgOCk7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmV5ZUJyb3dzKTtcblxuICAgIGxldCBleWVCcm93R2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSg0LCAxLCAxKTtcblxuICAgIHRoaXMuZXllQnJvd1JpZ2h0ID0gbmV3IFRIUkVFLk1lc2goZXllQnJvd0dlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgdGhpcy5leWVCcm93UmlnaHQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKE1hdGguUEkgLyA0NSkpO1xuICAgIHRoaXMuZXllQnJvd1JpZ2h0LnBvc2l0aW9uLnNldCgtMy43NSwgMCwgMCk7XG4gICAgdGhpcy5leWVCcm93UmlnaHQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuZXllQnJvd1JpZ2h0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuZXllQnJvd0xlZnQgPSBuZXcgVEhSRUUuTWVzaChleWVCcm93R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICB0aGlzLmV5ZUJyb3dMZWZ0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWigtTWF0aC5QSSAvIDQ1KSk7XG4gICAgdGhpcy5leWVCcm93TGVmdC5wb3NpdGlvbi5zZXQoMy43NSwgMCwgMCk7XG4gICAgdGhpcy5leWVCcm93TGVmdC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5leWVCcm93TGVmdC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmV5ZUJyb3dzLmFkZCh0aGlzLmV5ZUJyb3dSaWdodCwgdGhpcy5leWVCcm93TGVmdCk7XG4gIH1cblxuICBIYXQoKSB7XG4gICAgdGhpcy5oYXQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmhhdC5wb3NpdGlvbi5zZXQoLTAuMiwgMTEsIDIuNCk7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmhhdCk7XG5cbiAgICBsZXQgaGF0TWF0ID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmhhdCwgZmxhdFNoYWRpbmc6IHRydWV9KTtcblxuICAgIGxldCBiYW5kR2VvbSA9IG5ldyBUSFJFRS5Ub3J1c0dlb21ldHJ5KDksIDIsIDE2LCAxMDApO1xuICAgIGxldCBiaWdDb25lR2VvbSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDEsIDExLCAxMiwgMTUpO1xuICAgIGxldCBzbWFsbENvbmVHZW9tID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMC44LCAzLCA5LCAzMik7XG4gICAgbGV0IGhhdERpbmdsZUdlb20gPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMS41LCA4LCA4KTtcblxuICAgIHRoaXMuYmFuZCA9IG5ldyBUSFJFRS5NZXNoKGJhbmRHZW9tLCBNYXQudGVldGhNYXQpO1xuICAgIHRoaXMuYmFuZC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblgoTWF0aC5QSSAvIDIpKTtcbiAgICB0aGlzLmJhbmQucG9zaXRpb24uc2V0KDAsIDAsIDApO1xuICAgIHRoaXMuYmFuZC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5iYW5kLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuYmlnQ29uZSA9IG5ldyBUSFJFRS5NZXNoKGJpZ0NvbmVHZW9tLCBoYXRNYXQpO1xuICAgIHRoaXMuYmlnQ29uZS5wb3NpdGlvbi5zZXQoMCwgNiwgMCk7XG4gICAgdGhpcy5iaWdDb25lLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmJpZ0NvbmUucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5zbWFsbENvbmUgPSBuZXcgVEhSRUUuTWVzaChzbWFsbENvbmVHZW9tLCBoYXRNYXQpO1xuICAgIHRoaXMuc21hbGxDb25lLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWChNYXRoLlBJIC8gMikpO1xuICAgIHRoaXMuc21hbGxDb25lLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWShNYXRoLlBJIC8gMikpO1xuICAgIHRoaXMuc21hbGxDb25lLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWihNYXRoLlBJIC8gLTgpKTtcbiAgICB0aGlzLnNtYWxsQ29uZS5wb3NpdGlvbi5zZXQoNCwgNy44LCAtMSk7XG4gICAgdGhpcy5zbWFsbENvbmUuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuc21hbGxDb25lLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuaGF0RGluZ2xlID0gbmV3IFRIUkVFLk1lc2goaGF0RGluZ2xlR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICB0aGlzLmhhdERpbmdsZS5wb3NpdGlvbi5zZXQoOSwgNS41LCAtMSk7XG4gICAgdGhpcy5oYXREaW5nbGUuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuaGF0RGluZ2xlLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuaGF0LmFkZCh0aGlzLmJhbmQsIHRoaXMuYmlnQ29uZSwgdGhpcy5zbWFsbENvbmUsIHRoaXMuaGF0RGluZ2xlKTtcbiAgfVxuXG4gIEZyZWNrbGVzKCkge1xuICAgIHRoaXMuZnJlY2tsZXMgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmZyZWNrbGVzLnBvc2l0aW9uLnNldCgwLCAwLCA4KTtcbiAgICB0aGlzLmhlYWQuYWRkKHRoaXMuZnJlY2tsZXMpO1xuXG4gICAgbGV0IGZyZWNrbGVzTWF0ID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuZnJlY2tsZXMsIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG4gICAgbGV0IGZyZWNrbGVzR2VvbU1lcmdlZCA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuXG4gICAgbGV0IGZyZWNrbGVzR2VvbSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDAuNSwgMC41KTtcblxuICAgIGxldCBmcmVja2xlMSA9IG5ldyBUSFJFRS5NZXNoKGZyZWNrbGVzR2VvbSwgZnJlY2tsZXNNYXQpO1xuICAgIGZyZWNrbGUxLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKC01LCAwLCAwLjAxKSk7XG4gICAgZnJlY2tsZTEudXBkYXRlTWF0cml4KCk7XG4gICAgZnJlY2tsZXNHZW9tTWVyZ2VkLm1lcmdlKGZyZWNrbGUxLmdlb21ldHJ5LCBmcmVja2xlMS5tYXRyaXgpO1xuXG4gICAgbGV0IGZyZWNrbGUyID0gZnJlY2tsZTEuY2xvbmUoKTtcbiAgICBmcmVja2xlMi5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigtMC41LCAtMSwgMCkpO1xuICAgIGZyZWNrbGUyLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyZWNrbGVzR2VvbU1lcmdlZC5tZXJnZShmcmVja2xlMi5nZW9tZXRyeSwgZnJlY2tsZTIubWF0cml4KTtcblxuICAgIGxldCBmcmVja2xlMyA9IGZyZWNrbGUxLmNsb25lKCk7XG4gICAgZnJlY2tsZTMuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oMSwgLTAuNSwgMCkpO1xuICAgIGZyZWNrbGUzLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyZWNrbGVzR2VvbU1lcmdlZC5tZXJnZShmcmVja2xlMy5nZW9tZXRyeSwgZnJlY2tsZTMubWF0cml4KTtcblxuICAgIGxldCBmcmVja2xlNCA9IGZyZWNrbGUxLmNsb25lKCk7XG4gICAgZnJlY2tsZTQucG9zaXRpb24ueCA9IC1mcmVja2xlMS5wb3NpdGlvbi54O1xuICAgIGZyZWNrbGU0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyZWNrbGVzR2VvbU1lcmdlZC5tZXJnZShmcmVja2xlNC5nZW9tZXRyeSwgZnJlY2tsZTQubWF0cml4KTtcbiAgICBsZXQgZnJlY2tsZTUgPSBmcmVja2xlMi5jbG9uZSgpO1xuICAgIGZyZWNrbGU1LnBvc2l0aW9uLnggPSAtZnJlY2tsZTIucG9zaXRpb24ueDtcbiAgICBmcmVja2xlNS51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmVja2xlc0dlb21NZXJnZWQubWVyZ2UoZnJlY2tsZTUuZ2VvbWV0cnksIGZyZWNrbGU1Lm1hdHJpeCk7XG4gICAgbGV0IGZyZWNrbGU2ID0gZnJlY2tsZTMuY2xvbmUoKTtcbiAgICBmcmVja2xlNi5wb3NpdGlvbi54ID0gLWZyZWNrbGUzLnBvc2l0aW9uLng7XG4gICAgZnJlY2tsZTYudXBkYXRlTWF0cml4KCk7XG4gICAgZnJlY2tsZXNHZW9tTWVyZ2VkLm1lcmdlKGZyZWNrbGU2Lmdlb21ldHJ5LCBmcmVja2xlNi5tYXRyaXgpO1xuXG4gICAgbGV0IGZyZWNrbGVkTWVyZ2VkID0gbmV3IFRIUkVFLk1lc2goZnJlY2tsZXNHZW9tTWVyZ2VkLCBmcmVja2xlc01hdCk7XG4gICAgZnJlY2tsZWRNZXJnZWQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIGZyZWNrbGVkTWVyZ2VkLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuZnJlY2tsZXMuYWRkKGZyZWNrbGVkTWVyZ2VkKTtcbiAgfVxuXG4gIEZlYXR1cmVzKCkge1xuICAgIGxldCBlYXJHZW9tID0gbmV3IFRIUkVFLkJveEJ1ZmZlckdlb21ldHJ5KDEuNSwgMywgMS41KTtcbiAgICBsZXQgc2tpbk1hdCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogQ29sb3JzLnNraW4sIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG4gICAgbGV0IGVhclJpZ2h0ID0gbmV3IFRIUkVFLk1lc2goZWFyR2VvbSwgc2tpbk1hdCk7XG4gICAgZWFyUmlnaHQucG9zaXRpb24uc2V0KC04LjUsIDEsIDMpO1xuICAgIGVhclJpZ2h0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBlYXJSaWdodC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICBsZXQgZWFyTGVmdCA9IG5ldyBUSFJFRS5NZXNoKGVhckdlb20sIHNraW5NYXQpO1xuICAgIGVhckxlZnQucG9zaXRpb24uc2V0KDguNSwgMSwgMyk7XG4gICAgZWFyTGVmdC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgZWFyTGVmdC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICBsZXQgbm9zZUdlb20gPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgxLCAyLCA0LCA0KTtcbiAgICBsZXQgbm9zZSA9IG5ldyBUSFJFRS5NZXNoKG5vc2VHZW9tLCBza2luTWF0KTtcbiAgICBub3NlLnNjYWxlLnNldCguNzUsIDEsIDEuMyk7XG4gICAgbm9zZS5wb3NpdGlvbi5zZXQoMCwgMSwgOCk7XG4gICAgbm9zZS5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgbm9zZS5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmhlYWQuYWRkKGVhclJpZ2h0LCBlYXJMZWZ0LCBub3NlKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzZXMvSGVhZC5qcyIsImltcG9ydCBDb2xvcnMgZnJvbSAnLi9jb2xvcnMnO1xuY29uc3QgTWF0ZXJpYWxzID0ge1xuICBcIndoaXRlTWF0XCI6IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogQ29sb3JzLndoaXRlLCBmbGF0U2hhZGluZzogdHJ1ZX0pLFxuICBcInRlZXRoTWF0XCI6IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy50ZWV0aCwgZmxhdFNoYWRpbmc6IHRydWV9KSxcbiAgXCJibGFja01hdFwiOiBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5ibGFjaywgZmxhdFNoYWRpbmc6IHRydWV9KSxcbiAgXCJub3JtYWxNYXRcIjogbmV3IFRIUkVFLk1lc2hOb3JtYWxNYXRlcmlhbCh7fSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hdGVyaWFscztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9vYmplY3RzL01hdGVyaWFscy5qcyIsIihmdW5jdGlvbihzZWxmKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBpZiAoc2VsZi5mZXRjaCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIHN1cHBvcnQgPSB7XG4gICAgc2VhcmNoUGFyYW1zOiAnVVJMU2VhcmNoUGFyYW1zJyBpbiBzZWxmLFxuICAgIGl0ZXJhYmxlOiAnU3ltYm9sJyBpbiBzZWxmICYmICdpdGVyYXRvcicgaW4gU3ltYm9sLFxuICAgIGJsb2I6ICdGaWxlUmVhZGVyJyBpbiBzZWxmICYmICdCbG9iJyBpbiBzZWxmICYmIChmdW5jdGlvbigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ldyBCbG9iKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9KSgpLFxuICAgIGZvcm1EYXRhOiAnRm9ybURhdGEnIGluIHNlbGYsXG4gICAgYXJyYXlCdWZmZXI6ICdBcnJheUJ1ZmZlcicgaW4gc2VsZlxuICB9XG5cbiAgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgdmlld0NsYXNzZXMgPSBbXG4gICAgICAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQ2NEFycmF5XSdcbiAgICBdXG5cbiAgICB2YXIgaXNEYXRhVmlldyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiBEYXRhVmlldy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihvYmopXG4gICAgfVxuXG4gICAgdmFyIGlzQXJyYXlCdWZmZXJWaWV3ID0gQXJyYXlCdWZmZXIuaXNWaWV3IHx8IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB2aWV3Q2xhc3Nlcy5pbmRleE9mKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopKSA+IC0xXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTmFtZShuYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgbmFtZSA9IFN0cmluZyhuYW1lKVxuICAgIH1cbiAgICBpZiAoL1teYS16MC05XFwtIyQlJicqKy5cXF5fYHx+XS9pLnRlc3QobmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBmaWVsZCBuYW1lJylcbiAgICB9XG4gICAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLy8gQnVpbGQgYSBkZXN0cnVjdGl2ZSBpdGVyYXRvciBmb3IgdGhlIHZhbHVlIGxpc3RcbiAgZnVuY3Rpb24gaXRlcmF0b3JGb3IoaXRlbXMpIHtcbiAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gaXRlbXMuc2hpZnQoKVxuICAgICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXRlcmF0b3JcbiAgfVxuXG4gIGZ1bmN0aW9uIEhlYWRlcnMoaGVhZGVycykge1xuICAgIHRoaXMubWFwID0ge31cblxuICAgIGlmIChoZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKVxuICAgICAgfSwgdGhpcylcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoaGVhZGVycykpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbihoZWFkZXIpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQoaGVhZGVyWzBdLCBoZWFkZXJbMV0pXG4gICAgICB9LCB0aGlzKVxuICAgIH0gZWxzZSBpZiAoaGVhZGVycykge1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIGhlYWRlcnNbbmFtZV0pXG4gICAgICB9LCB0aGlzKVxuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgICB2YWx1ZSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMubWFwW25hbWVdXG4gICAgdGhpcy5tYXBbbmFtZV0gPSBvbGRWYWx1ZSA/IG9sZFZhbHVlKycsJyt2YWx1ZSA6IHZhbHVlXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgICByZXR1cm4gdGhpcy5oYXMobmFtZSkgPyB0aGlzLm1hcFtuYW1lXSA6IG51bGxcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAuaGFzT3duUHJvcGVydHkobm9ybWFsaXplTmFtZShuYW1lKSlcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5tYXApIHtcbiAgICAgIGlmICh0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXMubWFwW25hbWVdLCBuYW1lLCB0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKG5hbWUpIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHsgaXRlbXMucHVzaCh2YWx1ZSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChbbmFtZSwgdmFsdWVdKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgSGVhZGVycy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXNcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnN1bWVkKGJvZHkpIHtcbiAgICBpZiAoYm9keS5ib2R5VXNlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpKVxuICAgIH1cbiAgICBib2R5LmJvZHlVc2VkID0gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZmlsZVJlYWRlclJlYWR5KHJlYWRlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0KVxuICAgICAgfVxuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc0FycmF5QnVmZmVyKGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYilcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc1RleHQoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGJsb2IpXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRBcnJheUJ1ZmZlckFzVGV4dChidWYpIHtcbiAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgICB2YXIgY2hhcnMgPSBuZXcgQXJyYXkodmlldy5sZW5ndGgpXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZpZXcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoYXJzW2ldID0gU3RyaW5nLmZyb21DaGFyQ29kZSh2aWV3W2ldKVxuICAgIH1cbiAgICByZXR1cm4gY2hhcnMuam9pbignJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1ZmZlckNsb25lKGJ1Zikge1xuICAgIGlmIChidWYuc2xpY2UpIHtcbiAgICAgIHJldHVybiBidWYuc2xpY2UoMClcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYuYnl0ZUxlbmd0aClcbiAgICAgIHZpZXcuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZikpXG4gICAgICByZXR1cm4gdmlldy5idWZmZXJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBCb2R5KCkge1xuICAgIHRoaXMuYm9keVVzZWQgPSBmYWxzZVxuXG4gICAgdGhpcy5faW5pdEJvZHkgPSBmdW5jdGlvbihib2R5KSB7XG4gICAgICB0aGlzLl9ib2R5SW5pdCA9IGJvZHlcbiAgICAgIGlmICghYm9keSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9ICcnXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5ibG9iICYmIEJsb2IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUJsb2IgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuZm9ybURhdGEgJiYgRm9ybURhdGEucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUZvcm1EYXRhID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5LnRvU3RyaW5nKClcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiBzdXBwb3J0LmJsb2IgJiYgaXNEYXRhVmlldyhib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5LmJ1ZmZlcilcbiAgICAgICAgLy8gSUUgMTAtMTEgY2FuJ3QgaGFuZGxlIGEgRGF0YVZpZXcgYm9keS5cbiAgICAgICAgdGhpcy5fYm9keUluaXQgPSBuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiAoQXJyYXlCdWZmZXIucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkgfHwgaXNBcnJheUJ1ZmZlclZpZXcoYm9keSkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vuc3VwcG9ydGVkIEJvZHlJbml0IHR5cGUnKVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04JylcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QmxvYiAmJiB0aGlzLl9ib2R5QmxvYi50eXBlKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgdGhpcy5fYm9keUJsb2IudHlwZSlcbiAgICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgICAgdGhpcy5ibG9iID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QmxvYilcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgYmxvYicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keVRleHRdKSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFycmF5QnVmZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gY29uc3VtZWQodGhpcykgfHwgUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ibG9iKCkudGhlbihyZWFkQmxvYkFzQXJyYXlCdWZmZXIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICByZXR1cm4gcmVhZEJsb2JBc1RleHQodGhpcy5fYm9keUJsb2IpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlYWRBcnJheUJ1ZmZlckFzVGV4dCh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIHRleHQnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5VGV4dClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5mb3JtRGF0YSkge1xuICAgICAgdGhpcy5mb3JtRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihkZWNvZGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5qc29uID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihKU09OLnBhcnNlKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvLyBIVFRQIG1ldGhvZHMgd2hvc2UgY2FwaXRhbGl6YXRpb24gc2hvdWxkIGJlIG5vcm1hbGl6ZWRcbiAgdmFyIG1ldGhvZHMgPSBbJ0RFTEVURScsICdHRVQnLCAnSEVBRCcsICdPUFRJT05TJywgJ1BPU1QnLCAnUFVUJ11cblxuICBmdW5jdGlvbiBub3JtYWxpemVNZXRob2QobWV0aG9kKSB7XG4gICAgdmFyIHVwY2FzZWQgPSBtZXRob2QudG9VcHBlckNhc2UoKVxuICAgIHJldHVybiAobWV0aG9kcy5pbmRleE9mKHVwY2FzZWQpID4gLTEpID8gdXBjYXNlZCA6IG1ldGhvZFxuICB9XG5cbiAgZnVuY3Rpb24gUmVxdWVzdChpbnB1dCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgdmFyIGJvZHkgPSBvcHRpb25zLmJvZHlcblxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIFJlcXVlc3QpIHtcbiAgICAgIGlmIChpbnB1dC5ib2R5VXNlZCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKVxuICAgICAgfVxuICAgICAgdGhpcy51cmwgPSBpbnB1dC51cmxcbiAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSBpbnB1dC5jcmVkZW50aWFsc1xuICAgICAgaWYgKCFvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMoaW5wdXQuaGVhZGVycylcbiAgICAgIH1cbiAgICAgIHRoaXMubWV0aG9kID0gaW5wdXQubWV0aG9kXG4gICAgICB0aGlzLm1vZGUgPSBpbnB1dC5tb2RlXG4gICAgICBpZiAoIWJvZHkgJiYgaW5wdXQuX2JvZHlJbml0ICE9IG51bGwpIHtcbiAgICAgICAgYm9keSA9IGlucHV0Ll9ib2R5SW5pdFxuICAgICAgICBpbnB1dC5ib2R5VXNlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cmwgPSBTdHJpbmcoaW5wdXQpXG4gICAgfVxuXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IG9wdGlvbnMuY3JlZGVudGlhbHMgfHwgdGhpcy5jcmVkZW50aWFscyB8fCAnb21pdCdcbiAgICBpZiAob3B0aW9ucy5oZWFkZXJzIHx8ICF0aGlzLmhlYWRlcnMpIHtcbiAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgICB9XG4gICAgdGhpcy5tZXRob2QgPSBub3JtYWxpemVNZXRob2Qob3B0aW9ucy5tZXRob2QgfHwgdGhpcy5tZXRob2QgfHwgJ0dFVCcpXG4gICAgdGhpcy5tb2RlID0gb3B0aW9ucy5tb2RlIHx8IHRoaXMubW9kZSB8fCBudWxsXG4gICAgdGhpcy5yZWZlcnJlciA9IG51bGxcblxuICAgIGlmICgodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpICYmIGJvZHkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JvZHkgbm90IGFsbG93ZWQgZm9yIEdFVCBvciBIRUFEIHJlcXVlc3RzJylcbiAgICB9XG4gICAgdGhpcy5faW5pdEJvZHkoYm9keSlcbiAgfVxuXG4gIFJlcXVlc3QucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KHRoaXMsIHsgYm9keTogdGhpcy5fYm9keUluaXQgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlY29kZShib2R5KSB7XG4gICAgdmFyIGZvcm0gPSBuZXcgRm9ybURhdGEoKVxuICAgIGJvZHkudHJpbSgpLnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbihieXRlcykge1xuICAgICAgaWYgKGJ5dGVzKSB7XG4gICAgICAgIHZhciBzcGxpdCA9IGJ5dGVzLnNwbGl0KCc9JylcbiAgICAgICAgdmFyIG5hbWUgPSBzcGxpdC5zaGlmdCgpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIHZhciB2YWx1ZSA9IHNwbGl0LmpvaW4oJz0nKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICBmb3JtLmFwcGVuZChkZWNvZGVVUklDb21wb25lbnQobmFtZSksIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZm9ybVxuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VIZWFkZXJzKHJhd0hlYWRlcnMpIHtcbiAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKClcbiAgICByYXdIZWFkZXJzLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6JylcbiAgICAgIHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpLnRyaW0oKVxuICAgICAgaWYgKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwYXJ0cy5qb2luKCc6JykudHJpbSgpXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKGtleSwgdmFsdWUpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gaGVhZGVyc1xuICB9XG5cbiAgQm9keS5jYWxsKFJlcXVlc3QucHJvdG90eXBlKVxuXG4gIGZ1bmN0aW9uIFJlc3BvbnNlKGJvZHlJbml0LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge31cbiAgICB9XG5cbiAgICB0aGlzLnR5cGUgPSAnZGVmYXVsdCdcbiAgICB0aGlzLnN0YXR1cyA9ICdzdGF0dXMnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1cyA6IDIwMFxuICAgIHRoaXMub2sgPSB0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDBcbiAgICB0aGlzLnN0YXR1c1RleHQgPSAnc3RhdHVzVGV4dCcgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzVGV4dCA6ICdPSydcbiAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gICAgdGhpcy51cmwgPSBvcHRpb25zLnVybCB8fCAnJ1xuICAgIHRoaXMuX2luaXRCb2R5KGJvZHlJbml0KVxuICB9XG5cbiAgQm9keS5jYWxsKFJlc3BvbnNlLnByb3RvdHlwZSlcblxuICBSZXNwb25zZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKHRoaXMuX2JvZHlJbml0LCB7XG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgc3RhdHVzVGV4dDogdGhpcy5zdGF0dXNUZXh0LFxuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICAgIHVybDogdGhpcy51cmxcbiAgICB9KVxuICB9XG5cbiAgUmVzcG9uc2UuZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogMCwgc3RhdHVzVGV4dDogJyd9KVxuICAgIHJlc3BvbnNlLnR5cGUgPSAnZXJyb3InXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH1cblxuICB2YXIgcmVkaXJlY3RTdGF0dXNlcyA9IFszMDEsIDMwMiwgMzAzLCAzMDcsIDMwOF1cblxuICBSZXNwb25zZS5yZWRpcmVjdCA9IGZ1bmN0aW9uKHVybCwgc3RhdHVzKSB7XG4gICAgaWYgKHJlZGlyZWN0U3RhdHVzZXMuaW5kZXhPZihzdGF0dXMpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc3RhdHVzIGNvZGUnKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogc3RhdHVzLCBoZWFkZXJzOiB7bG9jYXRpb246IHVybH19KVxuICB9XG5cbiAgc2VsZi5IZWFkZXJzID0gSGVhZGVyc1xuICBzZWxmLlJlcXVlc3QgPSBSZXF1ZXN0XG4gIHNlbGYuUmVzcG9uc2UgPSBSZXNwb25zZVxuXG4gIHNlbGYuZmV0Y2ggPSBmdW5jdGlvbihpbnB1dCwgaW5pdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoaW5wdXQsIGluaXQpXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcblxuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB8fCAnJylcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLnVybCA9ICdyZXNwb25zZVVSTCcgaW4geGhyID8geGhyLnJlc3BvbnNlVVJMIDogb3B0aW9ucy5oZWFkZXJzLmdldCgnWC1SZXF1ZXN0LVVSTCcpXG4gICAgICAgIHZhciBib2R5ID0gJ3Jlc3BvbnNlJyBpbiB4aHIgPyB4aHIucmVzcG9uc2UgOiB4aHIucmVzcG9uc2VUZXh0XG4gICAgICAgIHJlc29sdmUobmV3IFJlc3BvbnNlKGJvZHksIG9wdGlvbnMpKVxuICAgICAgfVxuXG4gICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfVxuXG4gICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LnVybCwgdHJ1ZSlcblxuICAgICAgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdpbmNsdWRlJykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoJ3Jlc3BvbnNlVHlwZScgaW4geGhyICYmIHN1cHBvcnQuYmxvYikge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InXG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3QuaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKVxuICAgICAgfSlcblxuICAgICAgeGhyLnNlbmQodHlwZW9mIHJlcXVlc3QuX2JvZHlJbml0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiByZXF1ZXN0Ll9ib2R5SW5pdClcbiAgICB9KVxuICB9XG4gIHNlbGYuZmV0Y2gucG9seWZpbGwgPSB0cnVlXG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy93aGF0d2ctZmV0Y2gvZmV0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5cbmNvbnN0IHVybCA9IGAvYXBpL2NhcnRgO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgY3JlYXRlOiAoe3RleHQsIGlkLCBuYW1lLCBibG9ifSkgPT4ge1xuICAgIGNvbnN0IG1ldGhvZCA9IGBQT1NUYDtcbiAgICAvLyBjb25zdCBuZXdGaWxlTmFtZSA9IGAke2lkLnNwbGl0KGAgYCkuam9pbihgX2ApfWA7XG4gICAgY29uc3QgYm9keSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGJvZHkuYXBwZW5kKGB0ZXh0YCwgdGV4dCk7XG4gICAgYm9keS5hcHBlbmQoYGlkYCwgaWQpO1xuICAgIGJvZHkuYXBwZW5kKGBuYW1lYCwgbmFtZSk7XG4gICAgLy8gYm9keS5hcHBlbmQoYHNvdW5kYCwgYmxvYiwgbmV3RmlsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGZldGNoKHVybCwge21ldGhvZCwgYm9keX0pXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKTtcbiAgfSxcblxuICByZWFkOiAoKSA9PiB7XG4gICAgcmV0dXJuIGZldGNoKGAke3VybH0/aXNBY3RpdmU9dHJ1ZWApXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKTtcbiAgfSxcblxuICByZWFkT25lOiBpZCA9PiB7XG4gICAgY29uc3QgbWV0aG9kID0gYEdFVGA7XG4gICAgcmV0dXJuIGZldGNoKGAke3VybH0vJHtpZH1gLCB7bWV0aG9kfSkudGhlbihyID0+IHIuanNvbigpKTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9saWIvY2FydEFQSS5qcyIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvaW5kZXgnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmFuZG9tQnl0ZSA9IHJlcXVpcmUoJy4vcmFuZG9tL3JhbmRvbS1ieXRlJyk7XG5cbmZ1bmN0aW9uIGVuY29kZShsb29rdXAsIG51bWJlcikge1xuICAgIHZhciBsb29wQ291bnRlciA9IDA7XG4gICAgdmFyIGRvbmU7XG5cbiAgICB2YXIgc3RyID0gJyc7XG5cbiAgICB3aGlsZSAoIWRvbmUpIHtcbiAgICAgICAgc3RyID0gc3RyICsgbG9va3VwKCAoIChudW1iZXIgPj4gKDQgKiBsb29wQ291bnRlcikpICYgMHgwZiApIHwgcmFuZG9tQnl0ZSgpICk7XG4gICAgICAgIGRvbmUgPSBudW1iZXIgPCAoTWF0aC5wb3coMTYsIGxvb3BDb3VudGVyICsgMSApICk7XG4gICAgICAgIGxvb3BDb3VudGVyKys7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZW5jb2RlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvZW5jb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBIZWFkIGZyb20gJy4vY2xhc3Nlcy9IZWFkJztcbmltcG9ydCBDb2xvcnMgZnJvbSAnLi9vYmplY3RzL2NvbG9ycyc7XG5pbXBvcnQgQXVkaW8gZnJvbSAnLi9jbGFzc2VzL0F1ZGlvLmpzJztcbmltcG9ydCBoYW5kbGVTYXZlIGZyb20gJy4vb2JqZWN0cy9TYXZlJztcbmltcG9ydCBDYXJ0QVBJIGZyb20gJy4vbGliL2NhcnRBUEknO1xuXG57XG4gIGxldCBzY2VuZSwgY2FtZXJhLCBmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIG5lYXJQbGFuZSwgZmFyUGxhbmUsIEhFSUdIVCwgV0lEVEg7XG4gIGxldCBnbG9iYWxMaWdodCwgc2hhZG93TGlnaHQsIGJhY2tMaWdodCwgbGlnaHQsIHJlbmRlcmVyLCBjb250YWluZXIsIGxvYWRlZDtcbiAgbGV0IGhlYWQsIHN0YXJzLCB3aW5kb3dIYWxmWCwgd2luZG93SGFsZlksIGNvbG9yLCBhdWRpbywgU3BlZWNoVGV4dDtcblxuICAvLyB2YXJzIGZvciBkYXQuZ3VpXG4gIGxldCBjb250cm9sbGVyLCBndWk7XG4gIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc2F2ZWApO1xuXG4gIGxldCBtb3VzZVBvcyA9IHsgeDogMCwgeTogMH07XG5cbiAgbGV0IHN0YXJBcnJheSA9IFtdO1xuXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgLy8gY3JlYXRlIHNub3dcbiAgICBwYXJ0aWNsZXNKUy5sb2FkKCdwYXJ0aWNsZXMtanMnLCAnLi4vYXNzZXRzL3BhcnRpY2xlcy5qc29uJywgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2NhbGxiYWNrIC0gcGFydGljbGVzLmpzIGNvbmZpZyBsb2FkZWQnKTtcbiAgICB9KTtcblxuICAgIGNyZWF0ZVNjZW5lKCk7XG4gICAgY3JlYXRlTGlnaHRzKCk7XG5cbiAgICBhdWRpbyA9IG5ldyBBdWRpbygpOyAvLyBoYW5kbGUgYXVkaW9cbiAgICBoZWFkID0gbmV3IEhlYWQoKTsgLy8gc2hvdyBhbmQgaGFuZGxlIGhlYWRcbiAgICBzY2VuZS5hZGQoaGVhZC5tZXNoKTtcbiAgICBjb25zb2xlLmxvZyhhdWRpby5pZCk7XG4gICAgLy8gc2VuZCBvYmplY3RzIHRvIHNhdmUgb24gY2xpY2tcbiAgICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT4ge1xuICAgICAgaGFuZGxlU2F2ZSh7XG4gICAgICAgIHRleHQ6IGF1ZGlvLnR4dCxcbiAgICAgICAgaWQ6IGF1ZGlvLmlkXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGd1aSA9IG5ldyBkYXQuR1VJKCk7XG4gICAgZ3VpLmRvbUVsZW1lbnQuaWQgPSAnZ3VpJztcbiAgICBndWkuY2xvc2VkID0gdHJ1ZTtcbiAgICBjb250cm9sbGVyID0gbmV3IGNvbnRyb2xsZXJUZXh0KCk7XG4gICAgZ3VpQ29udHJvbGxlcihbJ3NraW4nLCAnZnJlY2tsZXMnLCAnZXllJywgJ2dsYXNzZXMnLCAnaGF0J10pOyAvLyBhZGQgZ3VpIGZvciBhcnJheSBvYmplY3QgYW5kIHNldCBjb2xvcnMgb24gY29sb3IgY2hhbmdlXG5cbiAgICB3aW5kb3cuc2NlbmUgPSBzY2VuZTsgLy8gc2V0IHNjZW5lIGZvciBleHRlbnNpb25cblxuICAgIGxvb3AoKTtcbiAgfTtcblxuICBjb25zdCBndWlDb250cm9sbGVyID0ga2V5cyA9PiB7XG4gICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBndWkuYWRkQ29sb3IoY29udHJvbGxlciwga2V5KS5vbkNoYW5nZSgoKSA9PiB7XG5cbiAgICAgICAgLy8gc2V0IHJpZ2h0IGNvbG9yIGZvciBtYXRlcmlhbFxuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgIGNhc2UgJ3NraW4nOiBDb2xvcnMuc2tpbiA9IGNvbnRyb2xsZXIuc2tpbjtcbiAgICAgICAgICBjYXNlICdmcmVja2xlcyc6IENvbG9ycy5mcmVja2xlcyA9IGNvbnRyb2xsZXIuZnJlY2tsZXM7XG4gICAgICAgICAgY2FzZSAnZXllJzogQ29sb3JzLmV5ZSA9IGNvbnRyb2xsZXIuZXllO1xuICAgICAgICAgIGNhc2UgJ2dsYXNzZXMnOiBDb2xvcnMuZ2xhc3NlcyA9IGNvbnRyb2xsZXIuZ2xhc3NlcztcbiAgICAgICAgICBjYXNlICdoYXQnOiBDb2xvcnMuaGF0ID0gY29udHJvbGxlci5oYXQ7XG4gICAgICAgIH1cblxuICAgICAgICAvL3JlbW92ZSBjdXJyZW50IGhlYWQgYW5kIG1ha2UgYSBuZXcgb25lIHRvIHNldCBjdXJyZW50IGNvbG9yXG4gICAgICAgIHNjZW5lLnJlbW92ZShoZWFkLm1lc2gpO1xuICAgICAgICBjcmVhdGVIZWFkKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGRlYzJoZXggPSAoaSkgPT4ge1xuICAgIHZhciByZXN1bHQgPSBcIjB4MDAwMDAwXCI7XG4gICAgaWYgKGkgPj0gMCAmJiBpIDw9IDE1KSB7XG4gICAgICByZXN1bHQgPSBcIjB4MDAwMDBcIiArIGkudG9TdHJpbmcoMTYpO1xuICAgIH0gZWxzZSBpZiAoaSA+PSAxNiAmJiBpIDw9IDI1NSkge1xuICAgICAgcmVzdWx0ID0gXCIweDAwMDBcIiArIGkudG9TdHJpbmcoMTYpO1xuICAgIH0gZWxzZSBpZiAoaSA+PSAyNTYgJiYgaSA8PSA0MDk1KSB7XG4gICAgICByZXN1bHQgPSBcIjB4MDAwXCIgKyBpLnRvU3RyaW5nKDE2KTtcbiAgICB9IGVsc2UgaWYgKGkgPj0gNDA5NiAmJiBpIDw9IDY1NTM1KSB7XG4gICAgICByZXN1bHQgPSBcIjB4MDBcIiArIGkudG9TdHJpbmcoMTYpO1xuICAgIH0gZWxzZSBpZiAoaSA+PSA2NTUzNSAmJiBpIDw9IDEwNDg1NzUpIHtcbiAgICAgIHJlc3VsdCA9IFwiMHgwXCIgKyBpLnRvU3RyaW5nKDE2KTtcbiAgICB9IGVsc2UgaWYgKGkgPj0gMTA0ODU3NSkge1xuICAgICAgcmVzdWx0ID0gJzB4JyArIGkudG9TdHJpbmcoMTYpO1xuICAgIH1cbiAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PSA4KSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZVNjZW5lID0gKCkgPT4geztcbiAgICBIRUlHSFQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgV0lEVEggPSB3aW5kb3cuaW5uZXJXaWR0aCAvMS42NztcbiAgICB3aW5kb3dIYWxmWCA9IFdJRFRIIC8gMjtcbiAgICB3aW5kb3dIYWxmWSA9IEhFSUdIVCAvIDI7XG5cbiAgICBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgIGFzcGVjdFJhdGlvID0gV0lEVEggLyBIRUlHSFQ7XG4gICAgZmllbGRPZlZpZXcgPSA1MDtcbiAgICBuZWFyUGxhbmUgPSAxO1xuICAgIGZhclBsYW5lID0gMjAwMDtcblxuICAgIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIG5lYXJQbGFuZSwgZmFyUGxhbmUpO1xuICAgIGNhbWVyYS5wb3NpdGlvbi54ID0gMDtcbiAgICBjYW1lcmEucG9zaXRpb24ueiA9IDcwO1xuICAgIGNhbWVyYS5wb3NpdGlvbi55ID0gLTU7XG5cbiAgICByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHthbHBoYTogdHJ1ZSwgYW50aWFsaWFzOiB0cnVlfSk7XG4gICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbz8gd2luZG93LmRldmljZVBpeGVsUmF0aW86IDEpXG4gICAgcmVuZGVyZXIuc2V0U2l6ZShXSURUSCwgSEVJR0hUKTtcbiAgICByZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7XG4gICAgcmVuZGVyZXIuc2hhZG93TWFwLnR5cGUgPSBUSFJFRS5QQ0ZTb2Z0U2hhZG93TWFwO1xuXG4gICAgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvbldpbmRvd1Jlc2l6ZSwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSwgZmFsc2UpO1xuICB9XG5cbiAgY29uc3Qgb25XaW5kb3dSZXNpemUgPSAoKSA9PiB7XG4gICAgSEVJR0hUID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIFdJRFRIID0gd2luZG93LmlubmVyV2lkdGggIC8gMS42NztcbiAgICB3aW5kb3dIYWxmWCA9IFdJRFRIIC8gMjtcbiAgICB3aW5kb3dIYWxmWSA9IEhFSUdIVCAvIDI7XG4gICAgcmVuZGVyZXIuc2V0U2l6ZShXSURUSCwgSEVJR0hUKTtcbiAgICBjYW1lcmEuYXNwZWN0ID0gV0lEVEggLyBIRUlHSFQ7XG4gICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IGUgPT4ge1xuICAgIG1vdXNlUG9zID0ge1xuICAgICAgeDogZXZlbnQuY2xpZW50WCxcbiAgICAgIHk6IGV2ZW50LmNsaWVudFlcbiAgICB9O1xuICB9XG5cbiAgbGV0IGxvYWRlck1hbmFnZXIgPSBuZXcgVEhSRUUuTG9hZGluZ01hbmFnZXIoKTtcblxuICBjb25zdCBoYW5kbGVXaW5kb3dSZXNpemUgPSBlID0+IHtcbiAgICBIRUlHSFQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgV0lEVEggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICByZW5kZXJlci5zZXRTaXplKFdJRFRILCBIRUlHSFQpO1xuICAgIGNhbWVyYS5hc3BlY3QgPSBXSURUSCAvIEhFSUdIVDtcbiAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICB9XG5cbiAgbGV0IGlzTW9iaWxlID0gL2lQaG9uZXxBbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICBjb25zdCBjcmVhdGVMaWdodHMgPSAoKSA9PiB7XG5cbiAgICBnbG9iYWxMaWdodCA9IG5ldyBUSFJFRS5IZW1pc3BoZXJlTGlnaHQoMHhmZmZmZmYsIDB4NTU1NTU1LCAuOSk7XG5cbiAgICBzaGFkb3dMaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmLCAuMyk7XG4gICAgc2hhZG93TGlnaHQucG9zaXRpb24uc2V0KDEwMCwgMjUwLCAxNzUpO1xuICAgIHNoYWRvd0xpZ2h0LmNhc3RTaGFkb3cgPSB0cnVlO1xuXG4gICAgYmFja0xpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYsIC4yKTtcbiAgICBiYWNrTGlnaHQucG9zaXRpb24uc2V0KC0xMDAsIDIwMCwgMTUwKTtcbiAgICBiYWNrTGlnaHQuY2FzdFNoYWRvdyA9IHRydWU7XG5cbiAgICBpZiAoaXNNb2JpbGUpIHNoYWRvd0xpZ2h0LnNoYWRvdy5tYXBTaXplLndpZHRoID0gc2hhZG93TGlnaHQuc2hhZG93Lm1hcFNpemUuaGVpZ2h0ID0gMTAyNDtcbiAgICBpZiAoIWlzTW9iaWxlKSBzaGFkb3dMaWdodC5zaGFkb3cubWFwU2l6ZS53aWR0aCA9IHNoYWRvd0xpZ2h0LnNoYWRvdy5tYXBTaXplLmhlaWdodCA9IDIwNDg7XG5cbiAgICBzY2VuZS5hZGQoZ2xvYmFsTGlnaHQpO1xuICAgIHNjZW5lLmFkZChzaGFkb3dMaWdodCk7XG4gICAgc2NlbmUuYWRkKGJhY2tMaWdodCk7XG4gICAgc2NlbmUuYWRkKCBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KCAweGVhZGVhZCwgMC4xICkpO1xuICB9XG5cbiAgLy8gY2xhc3MgU3RhciB7XG4gIC8vICAgY29uc3RydWN0b3IoKXtcbiAgLy9cbiAgLy8gICBTVEFSXG4gIC8vICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvL1xuICAvLyAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAvL1xuICAvLyAgIGxldCBwdHMgPSBbXSxcbiAgLy8gICAgIG51bVB0cyA9IDU7XG4gIC8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1QdHMgKiAyOyBpKyspIHtcbiAgLy8gICAgIGxldCBsID0gaSAlIDIgPT0gMVxuICAvLyAgICAgICA/IDFcbiAgLy8gICAgICAgOiAyO1xuICAvLyAgICAgbGV0IGEgPSBpIC8gbnVtUHRzICogTWF0aC5QSTtcbiAgLy8gICAgIHB0cy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IyKE1hdGguY29zKGEpICogbCwgTWF0aC5zaW4oYSkgKiBsKSk7XG4gIC8vICAgfVxuICAvLyAgIGxldCBzdGFyU2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUocHRzKTtcbiAgLy9cbiAgLy8gICBsZXQgZXh0cnVkZVNldHRpbmdzID0ge1xuICAvLyAgICAgYW1vdW50OiAwLjUsXG4gIC8vICAgICBzdGVwczogMSxcbiAgLy8gICAgIGJldmVsRW5hYmxlZDogZmFsc2VcbiAgLy8gICB9O1xuICAvLyAgIGxldCBzdGFyR2VvbSA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc3RhclNoYXBlLCBleHRydWRlU2V0dGluZ3MpO1xuICAvLyAgIGxldCBzdGFyID0gbmV3IFRIUkVFLk1lc2goc3Rhckdlb20sIHllbGxvd01hdCk7XG4gIC8vICAgc3Rhci5yb3RhdGlvbi54ID0gTWF0aC5QSSAvIDI7XG4gIC8vICAgdGhpcy5tZXNoLmFkZChzdGFyKTtcbiAgLy8gfVxuICAvLyB9XG4gIC8vXG4gIC8vIGxldCBTdGFyc0dyb3VwID0gZnVuY3Rpb24oKSB7XG4gIC8vXG4gIC8vICAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgLy9cbiAgLy8gICAgIHRoaXMublN0YXJzID0gMTU7XG4gIC8vXG4gIC8vICAgICBsZXQgc3RlcEFuZ2xlID0gTWF0aC5QSSAqIDIgLyB0aGlzLm5TdGFycztcbiAgLy9cbiAgLy8gICAgICBDcmVhdGUgdGhlIFN0YXJzXG4gIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMublN0YXJzOyBpKyspIHtcbiAgLy9cbiAgLy8gICAgICAgdGhpcy5zID0gbmV3IFN0YXIoKTtcbiAgLy8gICAgICAgbGV0IGEgPSBzdGVwQW5nbGUgKiBpO1xuICAvLyAgICAgICBsZXQgciA9IDE1O1xuICAvL1xuICAvLyAgICAgICB0aGlzLnMubWVzaC5wb3NpdGlvbi55ID0gTWF0aC5zaW4oYSkgKiByO1xuICAvLyAgICAgICB0aGlzLnMubWVzaC5wb3NpdGlvbi54ID0gTWF0aC5jb3MoYSkgKiByO1xuICAvL1xuICAvLyAgICAgICB0aGlzLnMubWVzaC5yb3RhdGlvbi56ID0gYSArIE1hdGguUEkgLyAyO1xuICAvLyAgICAgICB0aGlzLnMubWVzaC5wb3NpdGlvbi56ID0gMCAtIE1hdGgucmFuZG9tKCkgKiAzO1xuICAvL1xuICAvLyAgICAgICAgIHJhbmRvbSBzY2FsZSBmb3IgZWFjaCBjbG91ZFxuICAvLyAgICAgICBsZXQgc2MgPSAwLjUgKyBNYXRoLnJhbmRvbSgpICogLjY7XG4gIC8vICAgICAgIHRoaXMucy5tZXNoLnNjYWxlLnNldChzYywgc2MsIHNjKTtcbiAgLy9cbiAgLy8gICAgICAgdGhpcy5tZXNoLmFkZCh0aGlzLnMubWVzaCk7XG4gIC8vICAgICAgIHN0YXJBcnJheS5wdXNoKHRoaXMucyk7XG4gIC8vICAgICB9XG4gIC8vICAgICB0aGlzLm1lc2gucm90YXRpb24ueCA9IE1hdGguUEkgLyAyO1xuICAvLyB9XG5cbiAgY29uc3QgY3JlYXRlSGVhZCA9ICgpID0+IHtcbiAgICBoZWFkLm5hbWUgPSBcIkhlYWRcIjtcbiAgICBoZWFkID0gbmV3IEhlYWQoKTtcbiAgICBoZWFkLmlkbGUoKTtcbiAgICBzY2VuZS5hZGQoaGVhZC5tZXNoKTtcbiAgICAvL3N0YXJzID0gbmV3IFN0YXJzR3JvdXAoKTtcbiAgICAvL3NjZW5lLmFkZChzdGFycy5tZXNoKTtcbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZUNoYXJhY3RlciA9ICgpID0+IHtcbiAgICBjcmVhdGVIZWFkKCk7XG4gICAgaGVhZC5tZXNoLnBvc2l0aW9uLnNldCgwLCAyLCAwKTtcbiAgICAvL3N0YXJzLm1lc2gucG9zaXRpb24uc2V0KDAsIDEwLCAwKTtcbiAgfVxuXG5cbiAgbGV0IGlzQmxpbmtpbmcgPSBmYWxzZTtcbiAgY29uc3QgYmxpbmtMb29wID0gKCkgPT4ge1xuICAgIGlzQmxpbmtpbmcgPSBmYWxzZTtcblxuICAgIGlmICgoIWlzQmxpbmtpbmcpICYmIChNYXRoLnJhbmRvbSgpID4gMC45OSkpIHtcbiAgICAgIGlzQmxpbmtpbmcgPSB0cnVlO1xuICAgICAgYmxpbmsoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBibGluayA9ICgpID0+IHtcbiAgICBoZWFkLmV5ZXMuc2NhbGUueSA9IDE7XG4gICAgVHdlZW5NYXgudG8oaGVhZC5leWVzLnNjYWxlLCAuMDcsIHtcbiAgICAgIHk6IDAsXG4gICAgICB5b3lvOiB0cnVlLFxuICAgICAgcmVwZWF0OiAxLFxuICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlzQmxpbmtpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vSEVBRCBBTklNQVRJT05TXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgLy8gSGVhZC5wcm90b3R5cGUuZGl6enkgPSBmdW5jdGlvbigpIHtcbiAgLy9cbiAgLy8gICAgIGxldCBkaXN0YW5jZSA9IDE7XG4gIC8vXG4gIC8vICAgICB0aGlzLmhlYWQucm90YXRpb24ueiA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwNSkgKiBNYXRoLlBJICogMC4wMTtcbiAgLy8gICAgIHRoaXMuaGVhZC5yb3RhdGlvbi54ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDEpICogTWF0aC5QSSAqIDAuMDE7XG4gIC8vICAgICB0aGlzLmhlYWQucm90YXRpb24ueSA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwNSkgKiBNYXRoLlBJICogMC4wMTtcbiAgLy9cbiAgLy8gICAgIHRoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLnggPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDUpICogLWRpc3RhbmNlO1xuICAvLyAgICAgdGhpcy5leWVCbHVlTGVmdC5wb3NpdGlvbi54ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDA1KSAqIGRpc3RhbmNlO1xuICAvLyAgICAgdGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24ueSA9IE1hdGguY29zKERhdGUubm93KCkgKiAwLjAwNSkgKiAtZGlzdGFuY2U7XG4gIC8vICAgICB0aGlzLmV5ZUJsdWVMZWZ0LnBvc2l0aW9uLnkgPSBNYXRoLmNvcyhEYXRlLm5vdygpICogMC4wMDUpICogZGlzdGFuY2U7XG4gIC8vICAgICB0aGlzLmV5ZUJyb3dSaWdodC5wb3NpdGlvbi55ID0gTWF0aC5jb3MoRGF0ZS5ub3coKSAqIDAuMDA1KSAqIC1kaXN0YW5jZTtcbiAgLy8gICAgIHRoaXMuZXllQnJvd0xlZnQucG9zaXRpb24ueSA9IE1hdGguY29zKERhdGUubm93KCkgKiAwLjAwNSkgKiBkaXN0YW5jZTtcbiAgLy9cbiAgLy8gICAgIHRoaXMubW91c3RhY2hlLnJvdGF0aW9uLnogPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDUpICogTWF0aC5QSSAqIDAuMDU7XG4gIC8vXG4gIC8vICAgICBibGlua0xvb3AoKTtcbiAgLy8gICAgIHN0YXJzLnNwaW5TY2FsZSgpO1xuICAvL1xuICAvLyAgIH1cblxuICAvL1NUQVJHUk9VUFxuICAvLyBTdGFyc0dyb3VwLnByb3RvdHlwZS5zcGluU2NhbGUgPSBmdW5jdGlvbigpIHtcbiAgLy9cbiAgLy8gICAgIHRoaXMubWVzaC5yb3RhdGlvbi56ICs9IDAuMDI7XG4gIC8vXG4gIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXJBcnJheS5sZW5ndGg7IGkrKykge1xuICAvLyAgICAgICAgc3RhckFycmF5W2ldLm1lc2gucm90YXRpb24ueCA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAxKSAqIE1hdGguUEkgKiAwLjEgO1xuICAvLyAgICAgICBzdGFyQXJyYXlbaV0ubWVzaC5yb3RhdGlvbi56ICs9IDAgLSBNYXRoLnJhbmRvbSgpICogMC4xNTtcbiAgLy8gICAgICAgc3RhckFycmF5W2ldLm1lc2gucm90YXRpb24ueCArPSAwIC0gTWF0aC5yYW5kb20oKSAqIDAuMDU7XG4gIC8vXG4gIC8vICAgICB9XG4gIC8vICAgfVxuXG4gIGNsYXNzIGNvbnRyb2xsZXJUZXh0IHtcbiAgICBjb25zdHJ1Y3RvciAoKXtcbiAgICAgIHRoaXMuc2tpbiA9IENvbG9ycy5za2luO1xuICAgICAgdGhpcy5mcmVja2xlcyA9IENvbG9ycy5mcmVja2xlcztcbiAgICAgIHRoaXMuZXllID0gQ29sb3JzLmV5ZTtcbiAgICAgIHRoaXMuZ2xhc3NlcyA9IENvbG9ycy5nbGFzc2VzO1xuICAgICAgdGhpcy5oYXQgPSBDb2xvcnMuaGF0O1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGxvb3AgPSAoKSA9PiB7XG4gICAgYmxpbmtMb29wKCk7XG4gICAgLy9oZWFkLmRpenp5KCk7XG4gICAgbGV0IHhUYXJnZXQgPSAobW91c2VQb3MueCAtIHdpbmRvd0hhbGZYKTtcbiAgICBsZXQgeVRhcmdldCA9IChtb3VzZVBvcy55IC0gd2luZG93SGFsZlkpO1xuXG4gICAgaGVhZC5pZGxlKHhUYXJnZXQsIHlUYXJnZXQpO1xuICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gIH1cblxuICAvL3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgaW5pdCwgZmFsc2UpO1xuXG4gIGluaXQoKTtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3NjcmlwdC5qcyIsImltcG9ydCBTb3VuZEFQSSBmcm9tICcuLi9saWIvc291bmRBUEknO1xuaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XG5cbnZhciBTcGVlY2hSZWNvZ25pdGlvbiA9IFNwZWVjaFJlY29nbml0aW9uIHx8IHdlYmtpdFNwZWVjaFJlY29nbml0aW9uXG52YXIgU3BlZWNoR3JhbW1hckxpc3QgPSBTcGVlY2hHcmFtbWFyTGlzdCB8fCB3ZWJraXRTcGVlY2hHcmFtbWFyTGlzdFxudmFyIFNwZWVjaFJlY29nbml0aW9uRXZlbnQgPSBTcGVlY2hSZWNvZ25pdGlvbkV2ZW50IHx8IHdlYmtpdFNwZWVjaFJlY29nbml0aW9uRXZlbnRcbmNvbnN0IEF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcblxubGV0IGF1ZGlvQ3R4LCByZWNvZ25pdGlvbjtcbmxldCB0cmFuc2NyaXB0ID0gXCJcIjtcbmxldCBhdWRpb0NodW5rcyA9IFtdO1xuXG5jb25zdCAkdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBmaWVsZGApO1xuY29uc3QgJHJlY29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByZWNvcmRgKTtcbmNvbnN0ICRhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBhdWRpb19jb250cm9sc2ApO1xuY29uc3QgJHN0b3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc3RvcGApO1xuXG5sZXQgYXVkaW9Tb3VyY2VzID0gW10sXG4gICAgcGl0Y2hTaGlmdGVyUHJvY2Vzc29yO1xuXG5sZXQgYXVkaW9Tb3VyY2VJbmRleCA9IDAsXG4gICAgYXVkaW9WaXN1YWxpc2F0aW9uSW5kZXggPSAwLFxuICAgIHZhbGlkR3JhblNpemVzID0gWzI1NiwgNTEyLCAxMDI0LCAyMDQ4LCA0MDk2LCA4MTkyXSxcbiAgICBncmFpblNpemUgPSB2YWxpZEdyYW5TaXplc1syXSxcbiAgICBwaXRjaFJhdGlvID0gMS4wLFxuICAgIG92ZXJsYXBSYXRpbyA9IDAuNTA7XG5cbmNvbnN0IGlkID0gc2hvcnRJZC5nZW5lcmF0ZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpbyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICAvLyBoYW5kbGUgU3BlZWNoUmVjb2duaXRpb25cbiAgICByZWNvZ25pdGlvbiA9IG5ldyBTcGVlY2hSZWNvZ25pdGlvbigpO1xuICAgIHRoaXMuc3BlZWNoU2V0dGluZ3MoKTtcblxuICAgIHJlY29nbml0aW9uLm9ucmVzdWx0ID0gZXZlbnQgPT4gdGhpcy5nb3RSZXN1bHQoZXZlbnQpO1xuICAgIHJlY29nbml0aW9uLm9uc3BlZWNoZW5kID0gZSA9PiB0aGlzLm9uU3BlZWNoRW5kKGUpO1xuICAgICR0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoYGJsdXJgLCAoKSA9PiB0aGlzLnR4dCA9ICR0ZXh0LnZhbHVlKTtcblxuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHsgYXVkaW86IHRydWUgfSlcbiAgICAudGhlbihzdHJlYW0gPT4ge1xuICAgICAgdGhpcy5tZWRpYVJlY29yZGVyID0gbmV3IE1lZGlhUmVjb3JkZXIoc3RyZWFtKTtcblxuICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLVN0YXJ0IFJlY29yZGluZy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICAgICRyZWNvcmQuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoKSA9PiB7XG4gICAgICAgICB0aGlzLm1lZGlhUmVjb3JkZXIuc3RhcnQoKTtcbiAgICAgICAgIHJlY29nbml0aW9uLnN0YXJ0KCk7XG4gICAgICAgICAkcmVjb3JkLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgICAgdGhpcy5tZWRpYVJlY29yZGVyLmFkZEV2ZW50TGlzdGVuZXIoYGRhdGFhdmFpbGFibGVgLCAgZSA9PiBhdWRpb0NodW5rcy5wdXNoKGUuZGF0YSkpOyAvLyBhZGQgYXVkaW9jaHVuayB0byBhcnJheVxuXG4gICAgICAvLyB3aGVuIG1lZGlhUmVjb3JkZXIgc3RvcHMsIG1ha2UgYW5kIGhhbmRsZSBhdWRpbyBibG9iXG4gICAgICB0aGlzLm1lZGlhUmVjb3JkZXIuYWRkRXZlbnRMaXN0ZW5lcihgc3RvcGAsICgpID0+IHtcblxuICAgICAgICAvLyBnaXZlIGxpbmsgdG8gYXVkaW8gY29udHJvbHMgdG8gcGxheSBhbmQgY29udHJvbCB0aGUgc291bmRcbiAgICAgICAgdGhpcy5ibG9iID0gbmV3IEJsb2IoYXVkaW9DaHVua3MsIHt0eXBlIDogJ2F1ZGlvL29nZyd9KTsgLy8gY3JlYXRlIGJsb2IgZnJvbSBhdWRpb2NodW5rc1xuICAgICAgICAvLyBjb25zdCBibG9iVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLmJsb2IpOyAvLyBtYWtlIHVybCBmcm9tIGJsb2Igc3RyZWFtXG4gICAgICAgIC8vICRhdWRpby5zcmMgPSBibG9iVXJsO1xuXG4gICAgICAgIFNvdW5kQVBJLmNyZWF0ZSh7XG4gICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgYmxvYjogdGhpcy5ibG9iXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF1ZGlvQ3R4ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuXG4gICAgICAgIC8vIGNvbnN0IHNvdXJjZSA9IGF1ZGlvQ3R4LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZSgkYXVkaW8pOyAvLyBnZXQgYXVkaW8gZnJvbVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT7CoHtcbiAgICAgICAgICBjb25zdCBidWZmZXJMb2FkZXIgPSBuZXcgQnVmZmVyTG9hZGVyKFxuICAgICAgICAgICAgYXVkaW9DdHgsIFtgLi91cGxvYWRzLyR7dGhpcy5pZH0ub2dnYF0sIGJ1ZmZlckxpc3QgPT4ge1xuXG4gICAgICAgICAgICAgIGxldCBsb29wID0gZmFsc2U7XG4gICAgICAgICAgICAgIGxldCBzb3VyY2U7XG5cbiAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHJlcGVhdGApLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgICgpID0+IHtcbiAgICAgICAgICAgICAgICBsb29wID0gIWxvb3A7XG4gICAgICAgICAgICAgICAgc291cmNlLnN0b3AoKTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgY29uc3QgJHBpdGNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBpdGNoYCk7XG4gICAgICAgICAgICAgICRwaXRjaC5hZGRFdmVudExpc3RlbmVyKGBjaGFuZ2VgLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcGl0Y2hSYXRpbyA9IHBhcnNlRmxvYXQoJHBpdGNoLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwaXRjaFJhdGlvKTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgJGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNvdXJjZSA9ICcnO1xuICAgICAgICAgICAgICAgIHNvdXJjZSA9IGF1ZGlvQ3R4LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgICAgICAgICAgICAgIHNvdXJjZS5idWZmZXIgPSBidWZmZXJMaXN0WzBdO1xuXG4gICAgICAgICAgICAgICAgLy8gc291cmNlLmNvbm5lY3QoYXVkaW9DdHguZGVzdGluYXRpb24pXG5cbiAgICAgICAgICAgICAgICBzb3VyY2UuY29ubmVjdChwaXRjaFNoaWZ0ZXJQcm9jZXNzb3IpO1xuICAgICAgICAgICAgICAgIHNvdXJjZS5sb29wID0gbG9vcDtcbiAgICAgICAgICAgICAgICBzb3VyY2Uuc3RhcnQoKTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgYnVmZmVyTG9hZGVyLmxvYWQoKTtcbiAgICAgICAgICB0aGlzLmluaXRQcm9jZXNzb3IoKTtcbiAgICAgICAgICAvLyB0aGlzLmluaXRTbGlkZXJzKCk7XG5cbiAgICAgICAgfSwgMTAwMCk7XG5cblxuICAgICAgICBjb25zdCBvdmVybGFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG92ZXJsYXBgKTtcbiAgICAgICAgb3ZlcmxhcC5hZGRFdmVudExpc3RlbmVyKGBjaGFuZ2VgLCAoKSA9PiB7XG4gICAgICAgICAgb3ZlcmxhcFJhdGlvID0gb3ZlcmxhcC52YWx1ZTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhvdmVybGFwLnZhbHVlKTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICBhdWRpb0NodW5rcyA9IFtdO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBvblNwZWVjaEVuZChlKcKge1xuICAgIHRoaXMubWVkaWFSZWNvcmRlci5zdG9wKCk7XG4gICAgcmVjb2duaXRpb24uc3RvcCgpO1xuICAgICRyZWNvcmQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAkcmVjb3JkLnRleHRDb250ZW50ID0gJ1dhbnQgdG8gdHJ5IGFnYWluPyc7XG4gICAgdGhpcy50eHQgPSAkdGV4dC52YWx1ZTtcbiAgfVxuXG4gIGdvdFJlc3VsdChldmVudCkge1xuICAgIGNvbnN0IGxhc3QgPSBldmVudC5yZXN1bHRzLmxlbmd0aCAtIDE7XG4gICAgdHJhbnNjcmlwdCA9IGV2ZW50LnJlc3VsdHNbbGFzdF1bMF0udHJhbnNjcmlwdDtcbiAgICAkdGV4dC52YWx1ZSA9IHRyYW5zY3JpcHQ7XG4gIH1cblxuICBzcGVlY2hTZXR0aW5ncygpIHtcbiAgICByZWNvZ25pdGlvbi5jb250aW51b3VzID0gZmFsc2U7XG4gICAgcmVjb2duaXRpb24ubGFuZyA9ICdubC1CRSc7XG4gICAgcmVjb2duaXRpb24uaW50ZXJpbVJlc3VsdHMgPSBmYWxzZTtcbiAgICByZWNvZ25pdGlvbi5tYXhBbHRlcm5hdGl2ZXMgPSAxO1xuICB9XG5cbiAgaW5pdFByb2Nlc3NvcigpIHtcblxuICAgIGNvbnN0IGxpbmVhckludGVycG9sYXRpb24gPSAoYSwgYiwgdCkgPT4ge1xuICAgICAgcmV0dXJuIGEgKyAoYiAtIGEpICogdDtcbiAgICB9O1xuXG4gICAgaWYgKHBpdGNoU2hpZnRlclByb2Nlc3Nvcikge1xuICAgICAgcGl0Y2hTaGlmdGVyUHJvY2Vzc29yLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbiAgICBpZiAoYXVkaW9DdHguY3JlYXRlU2NyaXB0UHJvY2Vzc29yKSB7XG4gICAgICBwaXRjaFNoaWZ0ZXJQcm9jZXNzb3IgPSBhdWRpb0N0eC5jcmVhdGVTY3JpcHRQcm9jZXNzb3IoZ3JhaW5TaXplLCAxLCAxKTtcbiAgICB9IGVsc2UgaWYgKGF1ZGlvQ3R4LmNyZWF0ZUphdmFTY3JpcHROb2RlKSB7XG4gICAgICBwaXRjaFNoaWZ0ZXJQcm9jZXNzb3IgPSBhdWRpb0N0eC5jcmVhdGVKYXZhU2NyaXB0Tm9kZShncmFpblNpemUsIDEsIDEpO1xuICAgIH1cblxuICAgIHBpdGNoU2hpZnRlclByb2Nlc3Nvci5idWZmZXIgPSBuZXcgRmxvYXQzMkFycmF5KGdyYWluU2l6ZSAqIDIpO1xuICAgIHBpdGNoU2hpZnRlclByb2Nlc3Nvci5ncmFpbldpbmRvdyA9IHRoaXMuaGFubldpbmRvdyhncmFpblNpemUpO1xuXG4gICAgcGl0Y2hTaGlmdGVyUHJvY2Vzc29yLm9uYXVkaW9wcm9jZXNzID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgdmFyIGlucHV0RGF0YSA9IGV2ZW50LmlucHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKDApO1xuICAgICAgdmFyIG91dHB1dERhdGEgPSBldmVudC5vdXRwdXRCdWZmZXIuZ2V0Q2hhbm5lbERhdGEoMCk7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBpbnB1dERhdGEubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAvLyBBcHBseSB0aGUgd2luZG93IHRvIHRoZSBpbnB1dCBidWZmZXJcbiAgICAgICAgaW5wdXREYXRhW2ldICo9IHRoaXMuZ3JhaW5XaW5kb3dbaV07XG5cbiAgICAgICAgLy8gU2hpZnQgaGFsZiBvZiB0aGUgYnVmZmVyXG4gICAgICAgIHRoaXMuYnVmZmVyW2ldID0gdGhpcy5idWZmZXJbaSArIGdyYWluU2l6ZV07XG5cbiAgICAgICAgLy8gRW1wdHkgdGhlIGJ1ZmZlciB0YWlsXG4gICAgICAgIHRoaXMuYnVmZmVyW2kgKyBncmFpblNpemVdID0gMC4wO1xuICAgICAgfVxuXG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIHBpdGNoIHNoaWZ0ZWQgZ3JhaW4gcmUtc2FtcGxpbmcgYW5kIGxvb3BpbmcgdGhlIGlucHV0XG4gICAgICB2YXIgZ3JhaW5EYXRhID0gbmV3IEZsb2F0MzJBcnJheShncmFpblNpemUgKiAyKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gMC4wOyBpIDwgZ3JhaW5TaXplOyBpKyssIGogKz0gcGl0Y2hSYXRpbykge1xuXG4gICAgICAgIHZhciBpbmRleCA9IE1hdGguZmxvb3IoaikgJSBncmFpblNpemU7XG4gICAgICAgIHZhciBhID0gaW5wdXREYXRhW2luZGV4XTtcbiAgICAgICAgdmFyIGIgPSBpbnB1dERhdGFbKGluZGV4ICsgMSkgJSBncmFpblNpemVdO1xuICAgICAgICBncmFpbkRhdGFbaV0gKz0gbGluZWFySW50ZXJwb2xhdGlvbihhLCBiLCBqICUgMS4wKSAqIHRoaXMuZ3JhaW5XaW5kb3dbaV07XG4gICAgICB9XG5cbiAgICAgIC8vIENvcHkgdGhlIGdyYWluIG11bHRpcGxlIHRpbWVzIG92ZXJsYXBwaW5nIGl0XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZ3JhaW5TaXplOyBpICs9IE1hdGgucm91bmQoZ3JhaW5TaXplICogKDEgLSBvdmVybGFwUmF0aW8pKSkge1xuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGdyYWluU2l6ZTsgaisrKSB7XG4gICAgICAgICAgdGhpcy5idWZmZXJbaSArIGpdICs9IGdyYWluRGF0YVtqXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPdXRwdXQgdGhlIGZpcnN0IGhhbGYgb2YgdGhlIGJ1ZmZlclxuICAgICAgZm9yIChpID0gMDsgaSA8IGdyYWluU2l6ZTsgaSsrKSB7XG4gICAgICAgIG91dHB1dERhdGFbaV0gPSB0aGlzLmJ1ZmZlcltpXTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcGl0Y2hTaGlmdGVyUHJvY2Vzc29yLmNvbm5lY3QoYXVkaW9DdHguZGVzdGluYXRpb24pO1xuXG4gIH07XG5cblxuICBoYW5uV2luZG93KGxlbmd0aCkge1xuICAgIGNvbnN0IHdpbmRvdyA9IG5ldyBGbG9hdDMyQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHdpbmRvd1tpXSA9IDAuNSAqICgxIC0gTWF0aC5jb3MoMiAqIE1hdGguUEkgKiBpIC8gKGxlbmd0aCAtIDEpKSk7XG4gICAgfVxuICAgIHJldHVybiB3aW5kb3c7XG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzZXMvQXVkaW8uanMiLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5cbmNvbnN0IHVybCA9IGAvYXBpL3NvdW5kYDtcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gIGNyZWF0ZTogKHtpZCwgYmxvYn0pID0+IHtcbiAgICBjb25zdCBtZXRob2QgPSBgUE9TVGA7XG4gICAgY29uc3QgbmV3RmlsZU5hbWUgPSBgJHtpZC5zcGxpdChgIGApLmpvaW4oYF9gKX1gO1xuICAgIGNvbnN0IGJvZHkgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBib2R5LmFwcGVuZChgaWRgLCBpZCk7XG4gICAgYm9keS5hcHBlbmQoYHNvdW5kYCwgYmxvYiwgbmV3RmlsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGZldGNoKHVybCwge21ldGhvZCwgYm9keX0pXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKTtcbiAgfSxcblxuICByZWFkOiAoKSA9PiB7XG4gICAgcmV0dXJuIGZldGNoKGAke3VybH0/aXNBY3RpdmU9dHJ1ZWApXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKTtcbiAgfSxcblxuICByZWFkT25lOiBpZCA9PiB7XG4gICAgY29uc3QgbWV0aG9kID0gYEdFVGA7XG4gICAgcmV0dXJuIGZldGNoKGAke3VybH0vJHtpZH1gLCB7bWV0aG9kfSkudGhlbihyID0+IHIuanNvbigpKTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9saWIvc291bmRBUEkuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcbnZhciBlbmNvZGUgPSByZXF1aXJlKCcuL2VuY29kZScpO1xudmFyIGRlY29kZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XG52YXIgYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyk7XG52YXIgaXNWYWxpZCA9IHJlcXVpcmUoJy4vaXMtdmFsaWQnKTtcblxuLy8gaWYgeW91IGFyZSB1c2luZyBjbHVzdGVyIG9yIG11bHRpcGxlIHNlcnZlcnMgdXNlIHRoaXMgdG8gbWFrZSBlYWNoIGluc3RhbmNlXG4vLyBoYXMgYSB1bmlxdWUgdmFsdWUgZm9yIHdvcmtlclxuLy8gTm90ZTogSSBkb24ndCBrbm93IGlmIHRoaXMgaXMgYXV0b21hdGljYWxseSBzZXQgd2hlbiB1c2luZyB0aGlyZFxuLy8gcGFydHkgY2x1c3RlciBzb2x1dGlvbnMgc3VjaCBhcyBwbTIuXG52YXIgY2x1c3RlcldvcmtlcklkID0gcmVxdWlyZSgnLi91dGlsL2NsdXN0ZXItd29ya2VyLWlkJykgfHwgMDtcblxuLyoqXG4gKiBTZXQgdGhlIHNlZWQuXG4gKiBIaWdobHkgcmVjb21tZW5kZWQgaWYgeW91IGRvbid0IHdhbnQgcGVvcGxlIHRvIHRyeSB0byBmaWd1cmUgb3V0IHlvdXIgaWQgc2NoZW1hLlxuICogZXhwb3NlZCBhcyBzaG9ydGlkLnNlZWQoaW50KVxuICogQHBhcmFtIHNlZWQgSW50ZWdlciB2YWx1ZSB0byBzZWVkIHRoZSByYW5kb20gYWxwaGFiZXQuICBBTFdBWVMgVVNFIFRIRSBTQU1FIFNFRUQgb3IgeW91IG1pZ2h0IGdldCBvdmVybGFwcy5cbiAqL1xuZnVuY3Rpb24gc2VlZChzZWVkVmFsdWUpIHtcbiAgICBhbHBoYWJldC5zZWVkKHNlZWRWYWx1ZSk7XG4gICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vKipcbiAqIFNldCB0aGUgY2x1c3RlciB3b3JrZXIgb3IgbWFjaGluZSBpZFxuICogZXhwb3NlZCBhcyBzaG9ydGlkLndvcmtlcihpbnQpXG4gKiBAcGFyYW0gd29ya2VySWQgd29ya2VyIG11c3QgYmUgcG9zaXRpdmUgaW50ZWdlci4gIE51bWJlciBsZXNzIHRoYW4gMTYgaXMgcmVjb21tZW5kZWQuXG4gKiByZXR1cm5zIHNob3J0aWQgbW9kdWxlIHNvIGl0IGNhbiBiZSBjaGFpbmVkLlxuICovXG5mdW5jdGlvbiB3b3JrZXIod29ya2VySWQpIHtcbiAgICBjbHVzdGVyV29ya2VySWQgPSB3b3JrZXJJZDtcbiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8qKlxuICpcbiAqIHNldHMgbmV3IGNoYXJhY3RlcnMgdG8gdXNlIGluIHRoZSBhbHBoYWJldFxuICogcmV0dXJucyB0aGUgc2h1ZmZsZWQgYWxwaGFiZXRcbiAqL1xuZnVuY3Rpb24gY2hhcmFjdGVycyhuZXdDaGFyYWN0ZXJzKSB7XG4gICAgaWYgKG5ld0NoYXJhY3RlcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhbHBoYWJldC5jaGFyYWN0ZXJzKG5ld0NoYXJhY3RlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBhbHBoYWJldC5zaHVmZmxlZCgpO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBpZFxuICogUmV0dXJucyBzdHJpbmcgaWRcbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XG4gIHJldHVybiBidWlsZChjbHVzdGVyV29ya2VySWQpO1xufVxuXG4vLyBFeHBvcnQgYWxsIG90aGVyIGZ1bmN0aW9ucyBhcyBwcm9wZXJ0aWVzIG9mIHRoZSBnZW5lcmF0ZSBmdW5jdGlvblxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZTtcbm1vZHVsZS5leHBvcnRzLmdlbmVyYXRlID0gZ2VuZXJhdGU7XG5tb2R1bGUuZXhwb3J0cy5zZWVkID0gc2VlZDtcbm1vZHVsZS5leHBvcnRzLndvcmtlciA9IHdvcmtlcjtcbm1vZHVsZS5leHBvcnRzLmNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzO1xubW9kdWxlLmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xubW9kdWxlLmV4cG9ydHMuaXNWYWxpZCA9IGlzVmFsaWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBGb3VuZCB0aGlzIHNlZWQtYmFzZWQgcmFuZG9tIGdlbmVyYXRvciBzb21ld2hlcmVcbi8vIEJhc2VkIG9uIFRoZSBDZW50cmFsIFJhbmRvbWl6ZXIgMS4zIChDKSAxOTk3IGJ5IFBhdWwgSG91bGUgKGhvdWxlQG1zYy5jb3JuZWxsLmVkdSlcblxudmFyIHNlZWQgPSAxO1xuXG4vKipcbiAqIHJldHVybiBhIHJhbmRvbSBudW1iZXIgYmFzZWQgb24gYSBzZWVkXG4gKiBAcGFyYW0gc2VlZFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0TmV4dFZhbHVlKCkge1xuICAgIHNlZWQgPSAoc2VlZCAqIDkzMDEgKyA0OTI5NykgJSAyMzMyODA7XG4gICAgcmV0dXJuIHNlZWQvKDIzMzI4MC4wKTtcbn1cblxuZnVuY3Rpb24gc2V0U2VlZChfc2VlZF8pIHtcbiAgICBzZWVkID0gX3NlZWRfO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBuZXh0VmFsdWU6IGdldE5leHRWYWx1ZSxcbiAgICBzZWVkOiBzZXRTZWVkXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1mcm9tLXNlZWQuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyeXB0byA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmICh3aW5kb3cuY3J5cHRvIHx8IHdpbmRvdy5tc0NyeXB0byk7IC8vIElFIDExIHVzZXMgd2luZG93Lm1zQ3J5cHRvXG5cbmZ1bmN0aW9uIHJhbmRvbUJ5dGUoKSB7XG4gICAgaWYgKCFjcnlwdG8gfHwgIWNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikgJiAweDMwO1xuICAgIH1cbiAgICB2YXIgZGVzdCA9IG5ldyBVaW50OEFycmF5KDEpO1xuICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoZGVzdCk7XG4gICAgcmV0dXJuIGRlc3RbMF0gJiAweDMwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJhbmRvbUJ5dGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWJ5dGUtYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xuXG4vKipcbiAqIERlY29kZSB0aGUgaWQgdG8gZ2V0IHRoZSB2ZXJzaW9uIGFuZCB3b3JrZXJcbiAqIE1haW5seSBmb3IgZGVidWdnaW5nIGFuZCB0ZXN0aW5nLlxuICogQHBhcmFtIGlkIC0gdGhlIHNob3J0aWQtZ2VuZXJhdGVkIGlkLlxuICovXG5mdW5jdGlvbiBkZWNvZGUoaWQpIHtcbiAgICB2YXIgY2hhcmFjdGVycyA9IGFscGhhYmV0LnNodWZmbGVkKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmVyc2lvbjogY2hhcmFjdGVycy5pbmRleE9mKGlkLnN1YnN0cigwLCAxKSkgJiAweDBmLFxuICAgICAgICB3b3JrZXI6IGNoYXJhY3RlcnMuaW5kZXhPZihpZC5zdWJzdHIoMSwgMSkpICYgMHgwZlxuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVjb2RlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvZGVjb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmNvZGUgPSByZXF1aXJlKCcuL2VuY29kZScpO1xudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xuXG4vLyBJZ25vcmUgYWxsIG1pbGxpc2Vjb25kcyBiZWZvcmUgYSBjZXJ0YWluIHRpbWUgdG8gcmVkdWNlIHRoZSBzaXplIG9mIHRoZSBkYXRlIGVudHJvcHkgd2l0aG91dCBzYWNyaWZpY2luZyB1bmlxdWVuZXNzLlxuLy8gVGhpcyBudW1iZXIgc2hvdWxkIGJlIHVwZGF0ZWQgZXZlcnkgeWVhciBvciBzbyB0byBrZWVwIHRoZSBnZW5lcmF0ZWQgaWQgc2hvcnQuXG4vLyBUbyByZWdlbmVyYXRlIGBuZXcgRGF0ZSgpIC0gMGAgYW5kIGJ1bXAgdGhlIHZlcnNpb24uIEFsd2F5cyBidW1wIHRoZSB2ZXJzaW9uIVxudmFyIFJFRFVDRV9USU1FID0gMTQ1OTcwNzYwNjUxODtcblxuLy8gZG9uJ3QgY2hhbmdlIHVubGVzcyB3ZSBjaGFuZ2UgdGhlIGFsZ29zIG9yIFJFRFVDRV9USU1FXG4vLyBtdXN0IGJlIGFuIGludGVnZXIgYW5kIGxlc3MgdGhhbiAxNlxudmFyIHZlcnNpb24gPSA2O1xuXG4vLyBDb3VudGVyIGlzIHVzZWQgd2hlbiBzaG9ydGlkIGlzIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyBpbiBvbmUgc2Vjb25kLlxudmFyIGNvdW50ZXI7XG5cbi8vIFJlbWVtYmVyIHRoZSBsYXN0IHRpbWUgc2hvcnRpZCB3YXMgY2FsbGVkIGluIGNhc2UgY291bnRlciBpcyBuZWVkZWQuXG52YXIgcHJldmlvdXNTZWNvbmRzO1xuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBpZFxuICogUmV0dXJucyBzdHJpbmcgaWRcbiAqL1xuZnVuY3Rpb24gYnVpbGQoY2x1c3RlcldvcmtlcklkKSB7XG5cbiAgICB2YXIgc3RyID0gJyc7XG5cbiAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKERhdGUubm93KCkgLSBSRURVQ0VfVElNRSkgKiAwLjAwMSk7XG5cbiAgICBpZiAoc2Vjb25kcyA9PT0gcHJldmlvdXNTZWNvbmRzKSB7XG4gICAgICAgIGNvdW50ZXIrKztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgcHJldmlvdXNTZWNvbmRzID0gc2Vjb25kcztcbiAgICB9XG5cbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCB2ZXJzaW9uKTtcbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBjbHVzdGVyV29ya2VySWQpO1xuICAgIGlmIChjb3VudGVyID4gMCkge1xuICAgICAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBjb3VudGVyKTtcbiAgICB9XG4gICAgc3RyID0gc3RyICsgZW5jb2RlKGFscGhhYmV0Lmxvb2t1cCwgc2Vjb25kcyk7XG5cbiAgICByZXR1cm4gc3RyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1aWxkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvYnVpbGQuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuZnVuY3Rpb24gaXNTaG9ydElkKGlkKSB7XG4gICAgaWYgKCFpZCB8fCB0eXBlb2YgaWQgIT09ICdzdHJpbmcnIHx8IGlkLmxlbmd0aCA8IDYgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgY2hhcmFjdGVycyA9IGFscGhhYmV0LmNoYXJhY3RlcnMoKTtcbiAgICB2YXIgbGVuID0gaWQubGVuZ3RoO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47aSsrKSB7XG4gICAgICAgIGlmIChjaGFyYWN0ZXJzLmluZGV4T2YoaWRbaV0pID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2hvcnRJZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL2lzLXZhbGlkLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gMDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL3V0aWwvY2x1c3Rlci13b3JrZXItaWQtYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IENhcnRBUEkgZnJvbSAnLi4vbGliL0NhcnRBUEknO1xuaW1wb3J0IHNob3J0aWQgZnJvbSAnc2hvcnRpZCc7XG5jb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5hbWVfaW5wdXRgKTtcbmNvbnN0IGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudW5pcXVlX2xpbmtgKTtcblxuY29uc3QgaGFuZGxlU2F2ZSA9ICh7dGV4dCwgaWR9KSA9PiB7XG5cbiAgQ2FydEFQSS5jcmVhdGUoe1xuICAgIHRleHQsXG4gICAgaWQsXG4gICAgbmFtZTogbmFtZS52YWx1ZVxuICB9KTtcblxuICBsaW5rLmlubmVySFRNTCA9IGBodHRwczovL2xvY2FsaG9zdDo4MDgwL3NhbnRhLmh0bWw/aWQ9JHtpZH1gO1xuICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGBodHRwczovL2xvY2FsaG9zdDo4MDgwL3NhbnRhLmh0bWw/aWQ9JHtpZH1gKTtcbiAgbGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsIGBfYmxhbmtgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZVNhdmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvb2JqZWN0cy9TYXZlLmpzIiwiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xuXG5jb25zdCB1cmwgPSBgL2FwaS9jYXJ0YDtcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gIGNyZWF0ZTogKHt0ZXh0LCBpZCwgbmFtZSwgYmxvYn0pID0+IHtcbiAgICBjb25zdCBtZXRob2QgPSBgUE9TVGA7XG4gICAgLy8gY29uc3QgbmV3RmlsZU5hbWUgPSBgJHtpZC5zcGxpdChgIGApLmpvaW4oYF9gKX1gO1xuICAgIGNvbnN0IGJvZHkgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBib2R5LmFwcGVuZChgdGV4dGAsIHRleHQpO1xuICAgIGJvZHkuYXBwZW5kKGBpZGAsIGlkKTtcbiAgICBib2R5LmFwcGVuZChgbmFtZWAsIG5hbWUpO1xuICAgIC8vIGJvZHkuYXBwZW5kKGBzb3VuZGAsIGJsb2IsIG5ld0ZpbGVOYW1lKTtcblxuICAgIHJldHVybiBmZXRjaCh1cmwsIHttZXRob2QsIGJvZHl9KVxuICAgICAgLnRoZW4ociA9PiByLmpzb24oKSk7XG4gIH0sXG5cbiAgcmVhZDogKCkgPT4ge1xuICAgIHJldHVybiBmZXRjaChgJHt1cmx9P2lzQWN0aXZlPXRydWVgKVxuICAgICAgLnRoZW4ociA9PiByLmpzb24oKSk7XG4gIH0sXG5cbiAgcmVhZE9uZTogaWQgPT4ge1xuICAgIGNvbnN0IG1ldGhvZCA9IGBHRVRgO1xuICAgIHJldHVybiBmZXRjaChgJHt1cmx9LyR7aWR9YCwge21ldGhvZH0pLnRoZW4ociA9PiByLmpzb24oKSk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbGliL0NhcnRBUEkuanMiXSwic291cmNlUm9vdCI6IiJ9