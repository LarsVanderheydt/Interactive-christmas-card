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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
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
/* 2 */,
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
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_getUrlParameter__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_cartAPI__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_Head__ = __webpack_require__(3);
var AudioContext = window.AudioContext || window.webkitAudioContext;




var targetId = void 0,
    audioCtx = void 0;
var play = document.getElementById('play_santa');
var $audio = document.getElementById('audio');

var audioSources = [],
    pitchShifterProcessor = void 0;

var audioSourceIndex = 0,
    audioVisualisationIndex = 0,
    validGranSizes = [256, 512, 1024, 2048, 4096, 8192],
    grainSize = validGranSizes[1],
    pitchRatio = 1.0,
    overlapRatio = 0.50;

var init = function init() {
  audioCtx = new AudioContext();
  targetId = Object(__WEBPACK_IMPORTED_MODULE_0__objects_getUrlParameter__["a" /* default */])("id");
  if (!targetId) window.location = "https://localhost:8080";

  __WEBPACK_IMPORTED_MODULE_1__lib_cartAPI__["a" /* default */].readOne(targetId).then(function (d) {
    if (d.statusCode) window.location = "https://localhost:8080";
    document.getElementById('name').innerHTML = d.name;
    document.getElementById('santa_audio').src = './uploads/' + d.id + '.ogg';

    setTimeout(function () {
      var bufferLoader = new BufferLoader(audioCtx, ['./uploads/' + d.id + '.ogg'], function (bufferList) {

        var loop = false;
        var source = void 0;

        document.getElementById('repeat').addEventListener('click', function () {
          loop = !loop;
          source.stop();
        });

        pitchRatio = 2;

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
      initProcessor();
      // this.initSliders();
    }, 1000);
  });
};

var linearInterpolation = function linearInterpolation(a, b, t) {
  return a + (b - a) * t;
};

var initProcessor = function initProcessor() {

  if (pitchShifterProcessor) {
    pitchShifterProcessor.disconnect();
  }

  if (audioCtx.createScriptProcessor) {
    pitchShifterProcessor = audioCtx.createScriptProcessor(grainSize, 1, 1);
  } else if (audioCtx.createJavaScriptNode) {
    pitchShifterProcessor = audioCtx.createJavaScriptNode(grainSize, 1, 1);
  }

  pitchShifterProcessor.buffer = new Float32Array(grainSize * 2);
  pitchShifterProcessor.grainWindow = hannWindow(grainSize);

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
};

var hannWindow = function hannWindow(length) {
  var window = new Float32Array(length);
  for (var i = 0; i < length; i++) {
    window[i] = 0.5 * (1 - Math.cos(2 * Math.PI * i / (length - 1)));
  }
  return window;
};
init();

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var getUrlParameter = function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? false : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

/* harmony default export */ __webpack_exports__["a"] = (getUrlParameter);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTY0YmEyYWMxNGI0YTAyNjkxZDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL29iamVjdHMvY29sb3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLWZldGNoL2ZldGNoLW5wbS1icm93c2VyaWZ5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL0hlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL29iamVjdHMvTWF0ZXJpYWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93aGF0d2ctZmV0Y2gvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xpYi9jYXJ0QVBJLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zYW50YVNjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvb2JqZWN0cy9nZXRVcmxQYXJhbWV0ZXIuanMiXSwibmFtZXMiOlsiQ29sb3JzIiwic2tpbiIsImZyZWNrbGVzIiwid2hpdGUiLCJnbGFzc2VzIiwidGVldGgiLCJibGFjayIsImV5ZSIsImhhdCIsImlzQmxpbmtpbmciLCJIZWFkIiwibWVzaCIsIlRIUkVFIiwiT2JqZWN0M0QiLCJoZWFkR2VvbSIsIkJveEJ1ZmZlckdlb21ldHJ5Iiwic2tpbk1hdCIsIk1lc2hMYW1iZXJ0TWF0ZXJpYWwiLCJjb2xvciIsImZsYXRTaGFkaW5nIiwiZXllTWF0IiwiTWVzaFBob25nTWF0ZXJpYWwiLCJoZWFkIiwiTWVzaCIsImNhc3RTaGFkb3ciLCJyZWNlaXZlU2hhZG93IiwiYWRkIiwiYmVhcmQiLCJwb3NpdGlvbiIsInkiLCJ6IiwiQmVhcmQiLCJHbGFzc2VzIiwiSGFpciIsIkV5ZXMiLCJFeWVCcm93cyIsIkhhdCIsIkZyZWNrbGVzIiwiRmVhdHVyZXMiLCJpZGxlIiwibm9ybWFsaXplIiwidiIsInZtaW4iLCJ2bWF4IiwidG1pbiIsInRtYXgiLCJudiIsIk1hdGgiLCJtYXgiLCJtaW4iLCJkdiIsInBjIiwiZHQiLCJ0diIsInNwZWVkIiwiZXllQmx1ZVJpZ2h0UG9zWCIsImV5ZUJsdWVMZWZ0UG9zWCIsImV5ZUJsdWVSaWdodFBvc1kiLCJleWVCbHVlTGVmdFBvc1kiLCJleWVCcm93UmlnaHRQb3NZIiwiZXllQnJvd0xlZnRQb3NZIiwiZXllQmx1ZVJpZ2h0IiwieCIsImV5ZUJsdWVMZWZ0IiwiZXllQnJvd1JpZ2h0IiwiZXllQnJvd0xlZnQiLCJ4VGFyZ2V0IiwieVRhcmdldCIsImRpc3RhbmNlIiwicm90YXRpb24iLCJzaW4iLCJEYXRlIiwibm93IiwiUEkiLCJtb3VzdGFjaGUiLCJjb3MiLCJ1cGRhdGVCb2R5IiwiYmVhcmRHZW9tTWVyZ2VkIiwiR2VvbWV0cnkiLCJiZWFyZDFHZW9tIiwiQm94R2VvbWV0cnkiLCJiZWFyZDEiLCJNYXQiLCJ3aGl0ZU1hdCIsImFwcGx5TWF0cml4IiwiTWF0cml4NCIsIm1ha2VUcmFuc2xhdGlvbiIsInVwZGF0ZU1hdHJpeCIsIm1lcmdlIiwiZ2VvbWV0cnkiLCJtYXRyaXgiLCJiZWFyZDIiLCJzY2FsZSIsImJlYXJkMyIsImNsb25lIiwiYmVhcmQ0IiwiYmVhcmQyR2VvbSIsInZlcnRpY2VzIiwiYmVhcmQ1IiwiYmVhcmQzR2VvbSIsImJlYXJkNiIsImJlYXJkNyIsImJlYXJkOCIsImJlYXJkNEdlb20iLCJiZWFyZDkiLCJiZWFyZDVHZW9tIiwiYmVhcmQxMCIsImJlYXJkMTEiLCJiZWFyZE1lcmdlZCIsIm1vdXRoR2VvbSIsIm1vdXRoIiwiYmxhY2tNYXQiLCJzZXQiLCJ0ZWV0aEdlb20iLCJ0ZWV0aE1hdCIsIm1vdXN0YWNoZUdlb20iLCJnbGFzc2VzTWF0IiwiZnJhbWVHZW9tTWVyZ2VkIiwiZnJhbWVPdXRlckdlb20iLCJDeWxpbmRlckdlb21ldHJ5IiwiZnJhbWVJbm5lckdlb20iLCJtYWtlUm90YXRpb25YIiwiZnJhbWVCU1AiLCJUaHJlZUJTUCIsImZyYW1lQ3V0QlNQIiwiZnJhbWVpbnRlcnNlY3Rpb25CU1AiLCJzdWJ0cmFjdCIsImZyYW1lTGVmdCIsInRvTWVzaCIsImZyYW1lUmlnaHQiLCJtYWtlUm90YXRpb25aIiwiZnJhbWVNaWRHZW9tIiwiZnJhbWVNaWQiLCJmcmFtZUVuZEdlb20iLCJmcmFtZUVuZFJpZ2h0IiwiZnJhbWVFbmRMZWZ0IiwiZnJhbWVTcG9rZUdlb20iLCJmcmFtZVNwb2tlUmlnaHQiLCJmcmFtZVNwb2tlTGVmdCIsImZyYW1lTWVyZ2VkIiwiaGFpciIsImhhaXJHZW9tTWVyZ2VkIiwiaGFpckZsYXRHZW9tIiwiaGFpcjEiLCJoYWlyMiIsImhhaXIzIiwiaGFpcjQiLCJoYWlyNiIsImhhaXJGbGF0QmFja0dlb20iLCJoYWlyNSIsImhhaXJNZXJnZWQiLCJleWVzIiwiZXllV2hpdGVHZW9tIiwiUGxhbmVHZW9tZXRyeSIsImV5ZVdoaXRlUmlnaHQiLCJleWVCbHVlR2VvbSIsImV5ZVB1cGlsR2VvbSIsImV5ZVB1cGlsUmlnaHQiLCJleWVXaGl0ZUxlZnQiLCJleWVQdXBpbExlZnQiLCJleWVCcm93cyIsImV5ZUJyb3dHZW9tIiwiaGF0TWF0IiwiYmFuZEdlb20iLCJUb3J1c0dlb21ldHJ5IiwiYmlnQ29uZUdlb20iLCJzbWFsbENvbmVHZW9tIiwiaGF0RGluZ2xlR2VvbSIsIlNwaGVyZUdlb21ldHJ5IiwiYmFuZCIsImJpZ0NvbmUiLCJzbWFsbENvbmUiLCJtYWtlUm90YXRpb25ZIiwiaGF0RGluZ2xlIiwiZnJlY2tsZXNNYXQiLCJmcmVja2xlc0dlb21NZXJnZWQiLCJmcmVja2xlc0dlb20iLCJmcmVja2xlMSIsImZyZWNrbGUyIiwiZnJlY2tsZTMiLCJmcmVja2xlNCIsImZyZWNrbGU1IiwiZnJlY2tsZTYiLCJmcmVja2xlZE1lcmdlZCIsImVhckdlb20iLCJlYXJSaWdodCIsImVhckxlZnQiLCJub3NlR2VvbSIsIm5vc2UiLCJNYXRlcmlhbHMiLCJNZXNoTm9ybWFsTWF0ZXJpYWwiLCJ1cmwiLCJjcmVhdGUiLCJ0ZXh0IiwiaWQiLCJuYW1lIiwiYmxvYiIsIm1ldGhvZCIsImJvZHkiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZldGNoIiwidGhlbiIsInIiLCJqc29uIiwicmVhZCIsInJlYWRPbmUiLCJBdWRpb0NvbnRleHQiLCJ3aW5kb3ciLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJ0YXJnZXRJZCIsImF1ZGlvQ3R4IiwicGxheSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCIkYXVkaW8iLCJhdWRpb1NvdXJjZXMiLCJwaXRjaFNoaWZ0ZXJQcm9jZXNzb3IiLCJhdWRpb1NvdXJjZUluZGV4IiwiYXVkaW9WaXN1YWxpc2F0aW9uSW5kZXgiLCJ2YWxpZEdyYW5TaXplcyIsImdyYWluU2l6ZSIsInBpdGNoUmF0aW8iLCJvdmVybGFwUmF0aW8iLCJpbml0IiwiZ2V0VXJsUGFyYW1ldGVyIiwibG9jYXRpb24iLCJDYXJ0QVBJIiwiZCIsInN0YXR1c0NvZGUiLCJpbm5lckhUTUwiLCJzcmMiLCJzZXRUaW1lb3V0IiwiYnVmZmVyTG9hZGVyIiwiQnVmZmVyTG9hZGVyIiwibG9vcCIsInNvdXJjZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wIiwiY3JlYXRlQnVmZmVyU291cmNlIiwiYnVmZmVyIiwiYnVmZmVyTGlzdCIsImNvbm5lY3QiLCJzdGFydCIsImxvYWQiLCJpbml0UHJvY2Vzc29yIiwibGluZWFySW50ZXJwb2xhdGlvbiIsImEiLCJiIiwidCIsImRpc2Nvbm5lY3QiLCJjcmVhdGVTY3JpcHRQcm9jZXNzb3IiLCJjcmVhdGVKYXZhU2NyaXB0Tm9kZSIsIkZsb2F0MzJBcnJheSIsImdyYWluV2luZG93IiwiaGFubldpbmRvdyIsIm9uYXVkaW9wcm9jZXNzIiwiZXZlbnQiLCJpbnB1dERhdGEiLCJpbnB1dEJ1ZmZlciIsImdldENoYW5uZWxEYXRhIiwib3V0cHV0RGF0YSIsIm91dHB1dEJ1ZmZlciIsImkiLCJsZW5ndGgiLCJncmFpbkRhdGEiLCJqIiwiaW5kZXgiLCJmbG9vciIsInJvdW5kIiwiZGVzdGluYXRpb24iLCJyZXBsYWNlIiwicmVnZXgiLCJSZWdFeHAiLCJyZXN1bHRzIiwiZXhlYyIsInNlYXJjaCIsImRlY29kZVVSSUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQSxJQUFNQSxTQUFTO0FBQ2JDLFFBQU0sUUFETztBQUViQyxZQUFVLFFBRkc7QUFHYkMsU0FBTyxRQUhNO0FBSWJDLFdBQVMsUUFKSTtBQUtiQyxTQUFPLFFBTE07QUFNYkMsU0FBTyxRQU5NO0FBT2JDLE9BQUssUUFQUTtBQVFiQyxPQUFLO0FBUlEsQ0FBZjtBQVVBLHlEQUFlUixNQUFmLEU7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTs7QUFFQSxJQUFJUyxhQUFhLEtBQWpCOztJQUVxQkMsSTtBQUNuQixrQkFBYztBQUFBOztBQUNaLFNBQUtDLElBQUwsR0FBWSxJQUFJQyxNQUFNQyxRQUFWLEVBQVo7O0FBRUEsUUFBSUMsV0FBVyxJQUFJRixNQUFNRyxpQkFBVixDQUE0QixFQUE1QixFQUFnQyxFQUFoQyxFQUFvQyxFQUFwQyxDQUFmO0FBQ0EsUUFBSUMsVUFBVSxJQUFJSixNQUFNSyxtQkFBVixDQUE4QixFQUFDQyxPQUFPLGdFQUFBbEIsQ0FBT0MsSUFBZixFQUFxQmtCLGFBQWEsSUFBbEMsRUFBOUIsQ0FBZDtBQUNBLFFBQUlDLFNBQVMsSUFBSVIsTUFBTVMsaUJBQVYsQ0FBNEIsRUFBQ0gsT0FBTyxnRUFBQWxCLENBQU9PLEdBQWYsRUFBb0JZLGFBQWEsSUFBakMsRUFBNUIsQ0FBYjs7QUFFQSxTQUFLRyxJQUFMLEdBQVksSUFBSVYsTUFBTVcsSUFBVixDQUFlVCxRQUFmLEVBQXdCRSxPQUF4QixDQUFaO0FBQ0EsU0FBS00sSUFBTCxDQUFVRSxVQUFWLEdBQXVCLElBQXZCO0FBQ0EsU0FBS0YsSUFBTCxDQUFVRyxhQUFWLEdBQTBCLEtBQTFCO0FBQ0EsU0FBS2QsSUFBTCxDQUFVZSxHQUFWLENBQWMsS0FBS0osSUFBbkI7O0FBRUEsU0FBS0ssS0FBTCxHQUFhLElBQUlmLE1BQU1DLFFBQVYsRUFBYjtBQUNBLFNBQUtjLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkMsQ0FBcEIsR0FBd0IsQ0FBQyxDQUF6QjtBQUNBLFNBQUtGLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkUsQ0FBcEIsR0FBd0IsR0FBeEI7QUFDQSxTQUFLUixJQUFMLENBQVVJLEdBQVYsQ0FBYyxLQUFLQyxLQUFuQjs7QUFFQSxTQUFLSSxLQUFMO0FBQ0EsU0FBS0MsT0FBTDtBQUNBLFNBQUtDLElBQUw7QUFDQSxTQUFLQyxJQUFMO0FBQ0EsU0FBS0MsUUFBTDtBQUNBLFNBQUtDLEdBQUw7QUFDQSxTQUFLQyxRQUFMO0FBQ0EsU0FBS0MsUUFBTDtBQUNBLFNBQUtDLElBQUw7QUFDQSxTQUFLQyxTQUFMO0FBQ0Q7Ozs7OEJBRVNDLEMsRUFBR0MsSSxFQUFNQyxJLEVBQU1DLEksRUFBTUMsSSxFQUFNO0FBQ25DLFVBQU1DLEtBQUtDLEtBQUtDLEdBQUwsQ0FBU0QsS0FBS0UsR0FBTCxDQUFTUixDQUFULEVBQVlFLElBQVosQ0FBVCxFQUE0QkQsSUFBNUIsQ0FBWDtBQUNBLFVBQU1RLEtBQUtQLE9BQU9ELElBQWxCO0FBQ0EsVUFBTVMsS0FBSyxDQUFDTCxLQUFLSixJQUFOLElBQWNRLEVBQXpCO0FBQ0EsVUFBTUUsS0FBS1AsT0FBT0QsSUFBbEI7QUFDQSxVQUFNUyxLQUFLVCxPQUFRTyxLQUFLQyxFQUF4QjtBQUNBLGFBQU9DLEVBQVA7QUFDRDs7OytCQUVVQyxLLEVBQU9DLGdCLEVBQWtCQyxlLEVBQWlCQyxnQixFQUFrQkMsZSxFQUFpQkMsZ0IsRUFBa0JDLGUsRUFBaUI7QUFDekgsV0FBS0MsWUFBTCxDQUFrQmpDLFFBQWxCLENBQTJCa0MsQ0FBM0IsSUFBZ0MsQ0FBQ1AsbUJBQW1CLEtBQUtNLFlBQUwsQ0FBa0JqQyxRQUFsQixDQUEyQmtDLENBQS9DLElBQW9EUixLQUFwRjtBQUNBLFdBQUtTLFdBQUwsQ0FBaUJuQyxRQUFqQixDQUEwQmtDLENBQTFCLElBQStCLENBQUNOLGtCQUFrQixLQUFLTyxXQUFMLENBQWlCbkMsUUFBakIsQ0FBMEJrQyxDQUE3QyxJQUFrRFIsS0FBakY7O0FBRUEsV0FBS08sWUFBTCxDQUFrQmpDLFFBQWxCLENBQTJCQyxDQUEzQixJQUFnQyxDQUFDNEIsbUJBQW1CLEtBQUtJLFlBQUwsQ0FBa0JqQyxRQUFsQixDQUEyQkMsQ0FBL0MsSUFBb0R5QixLQUFwRjtBQUNBLFdBQUtTLFdBQUwsQ0FBaUJuQyxRQUFqQixDQUEwQkMsQ0FBMUIsSUFBK0IsQ0FBQzZCLGtCQUFrQixLQUFLSyxXQUFMLENBQWlCbkMsUUFBakIsQ0FBMEJDLENBQTdDLElBQWtEeUIsS0FBakY7O0FBRUEsV0FBS1UsWUFBTCxDQUFrQnBDLFFBQWxCLENBQTJCQyxDQUEzQixJQUFnQyxDQUFDOEIsbUJBQW1CLEtBQUtLLFlBQUwsQ0FBa0JwQyxRQUFsQixDQUEyQkMsQ0FBL0MsSUFBb0R5QixLQUFwRjtBQUNBLFdBQUtXLFdBQUwsQ0FBaUJyQyxRQUFqQixDQUEwQkMsQ0FBMUIsSUFBK0IsQ0FBQytCLGtCQUFrQixLQUFLSyxXQUFMLENBQWlCckMsUUFBakIsQ0FBMEJDLENBQTdDLElBQWtEeUIsS0FBakY7QUFDRDs7OzJCQUU4QjtBQUFBLFVBQTFCWSxPQUEwQix1RUFBaEIsQ0FBZ0I7QUFBQSxVQUFiQyxPQUFhLHVFQUFILENBQUc7O0FBQzdCLFVBQUlDLFdBQVcsQ0FBZjs7QUFFQSxXQUFLOUMsSUFBTCxDQUFVK0MsUUFBVixDQUFtQnZDLENBQW5CLEdBQXVCaUIsS0FBS3VCLEdBQUwsQ0FBU0MsS0FBS0MsR0FBTCxLQUFhLEtBQXRCLElBQStCekIsS0FBSzBCLEVBQXBDLEdBQXlDLEtBQWhFO0FBQ0EsV0FBS25ELElBQUwsQ0FBVStDLFFBQVYsQ0FBbUJQLENBQW5CLEdBQXVCZixLQUFLdUIsR0FBTCxDQUFTQyxLQUFLQyxHQUFMLEtBQWEsS0FBdEIsSUFBK0J6QixLQUFLMEIsRUFBcEMsR0FBeUMsSUFBaEU7O0FBRUEsVUFBTWxCLG1CQUFtQixLQUFLZixTQUFMLENBQWUwQixPQUFmLEVBQXdCLENBQUMsR0FBekIsRUFBOEIsR0FBOUIsRUFBbUMsQ0FBQyxHQUFwQyxFQUF5QyxHQUF6QyxDQUF6QjtBQUNBLFVBQU1WLGtCQUFrQixLQUFLaEIsU0FBTCxDQUFlMEIsT0FBZixFQUF3QixDQUFDLEdBQXpCLEVBQThCLEdBQTlCLEVBQW1DLENBQUMsR0FBcEMsRUFBeUMsR0FBekMsQ0FBeEI7O0FBRUEsVUFBTVQsbUJBQW1CLEtBQUtqQixTQUFMLENBQWUyQixPQUFmLEVBQXdCLENBQUMsR0FBekIsRUFBOEIsR0FBOUIsRUFBbUMsR0FBbkMsRUFBd0MsQ0FBQyxHQUF6QyxDQUF6QjtBQUNBLFVBQU1ULGtCQUFrQixLQUFLbEIsU0FBTCxDQUFlMkIsT0FBZixFQUF3QixDQUFDLEdBQXpCLEVBQThCLEdBQTlCLEVBQW1DLEdBQW5DLEVBQXdDLENBQUMsR0FBekMsQ0FBeEI7O0FBRUEsVUFBTVIsbUJBQW1CLEtBQUtuQixTQUFMLENBQWUwQixPQUFmLEVBQXdCLENBQUMsR0FBekIsRUFBOEIsR0FBOUIsRUFBbUMsQ0FBQyxDQUFwQyxFQUF1QyxHQUF2QyxDQUF6QjtBQUNBLFVBQU1OLGtCQUFrQixLQUFLcEIsU0FBTCxDQUFlMEIsT0FBZixFQUF3QixDQUFDLEdBQXpCLEVBQThCLEdBQTlCLEVBQW1DLENBQUMsQ0FBcEMsRUFBdUMsR0FBdkMsQ0FBeEI7O0FBRUEsV0FBS1EsU0FBTCxDQUFlOUMsUUFBZixDQUF3QkMsQ0FBeEIsR0FBNEJrQixLQUFLNEIsR0FBTCxDQUFTSixLQUFLQyxHQUFMLEtBQWEsSUFBdEIsSUFBOEJKLFFBQTlCLEdBQXlDLENBQXJFO0FBQ0EsV0FBS00sU0FBTCxDQUFlTCxRQUFmLENBQXdCdkMsQ0FBeEIsR0FBNEJpQixLQUFLdUIsR0FBTCxDQUFTQyxLQUFLQyxHQUFMLEtBQWEsSUFBdEIsSUFBOEJ6QixLQUFLMEIsRUFBbkMsR0FBd0MsSUFBcEU7O0FBRUEsV0FBSzlELElBQUwsQ0FBVTBELFFBQVYsQ0FBbUJ4QyxDQUFuQixHQUF1QmtCLEtBQUt1QixHQUFMLENBQVNDLEtBQUtDLEdBQUwsS0FBYSxLQUF0QixJQUErQnpCLEtBQUswQixFQUFwQyxHQUF5QyxJQUFoRTtBQUNBLFdBQUtHLFVBQUwsQ0FBZ0IsRUFBaEIsRUFBb0JyQixnQkFBcEIsRUFBc0NDLGVBQXRDLEVBQXVEQyxnQkFBdkQsRUFBeUVDLGVBQXpFLEVBQTBGQyxnQkFBMUYsRUFBNEdDLGVBQTVHO0FBQ0Q7Ozs0QkFFTztBQUNOLFVBQUlpQixrQkFBa0IsSUFBSWpFLE1BQU1rRSxRQUFWLEVBQXRCOztBQUVBLFVBQUlDLGFBQWEsSUFBSW5FLE1BQU1vRSxXQUFWLENBQXNCLENBQXRCLEVBQXlCLEVBQXpCLEVBQTZCLEVBQTdCLENBQWpCOztBQUVBLFVBQUlDLFNBQVMsSUFBSXJFLE1BQU1XLElBQVYsQ0FBZXdELFVBQWYsRUFBMkIsbUVBQUFHLENBQUlDLFFBQS9CLENBQWI7QUFDQUYsYUFBT0csV0FBUCxDQUFtQixJQUFJeEUsTUFBTXlFLE9BQVYsR0FBb0JDLGVBQXBCLENBQW9DLENBQXBDLEVBQXVDLENBQXZDLEVBQTBDLENBQTFDLENBQW5CO0FBQ0FMLGFBQU9NLFlBQVA7QUFDQVYsc0JBQWdCVyxLQUFoQixDQUFzQlAsT0FBT1EsUUFBN0IsRUFBdUNSLE9BQU9TLE1BQTlDOztBQUVBLFVBQUlDLFNBQVMsSUFBSS9FLE1BQU1XLElBQVYsQ0FBZXdELFVBQWYsRUFBMkIsbUVBQUFHLENBQUlDLFFBQS9CLENBQWI7QUFDQVEsYUFBT1AsV0FBUCxDQUFtQixJQUFJeEUsTUFBTXlFLE9BQVYsR0FBb0JDLGVBQXBCLENBQW9DLENBQXBDLEVBQXVDLENBQUMsQ0FBeEMsRUFBMkMsQ0FBM0MsQ0FBbkI7QUFDQUssYUFBT0MsS0FBUCxDQUFhOUQsQ0FBYixHQUFpQixHQUFqQjtBQUNBNkQsYUFBT0osWUFBUDtBQUNBVixzQkFBZ0JXLEtBQWhCLENBQXNCRyxPQUFPRixRQUE3QixFQUF1Q0UsT0FBT0QsTUFBOUM7O0FBRUEsVUFBSUcsU0FBU1osT0FBT2EsS0FBUCxFQUFiO0FBQ0FELGFBQU9qRSxRQUFQLENBQWdCa0MsQ0FBaEIsR0FBb0IsQ0FBQ21CLE9BQU9yRCxRQUFQLENBQWdCa0MsQ0FBckM7QUFDQStCLGFBQU9OLFlBQVA7QUFDQVYsc0JBQWdCVyxLQUFoQixDQUFzQkssT0FBT0osUUFBN0IsRUFBdUNJLE9BQU9ILE1BQTlDOztBQUVBLFVBQUlLLFNBQVNKLE9BQU9HLEtBQVAsRUFBYjtBQUNBQyxhQUFPbkUsUUFBUCxDQUFnQmtDLENBQWhCLEdBQW9CLENBQUM2QixPQUFPL0QsUUFBUCxDQUFnQmtDLENBQXJDO0FBQ0FpQyxhQUFPUixZQUFQO0FBQ0FWLHNCQUFnQlcsS0FBaEIsQ0FBc0JPLE9BQU9OLFFBQTdCLEVBQXVDTSxPQUFPTCxNQUE5Qzs7QUFFQSxVQUFJTSxhQUFhLElBQUlwRixNQUFNb0UsV0FBVixDQUFzQixDQUF0QixFQUF5QixFQUF6QixFQUE2QixFQUE3QixDQUFqQjtBQUNBZ0IsaUJBQVdDLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJuRSxDQUF2QixJQUE0QixDQUE1QjtBQUNBa0UsaUJBQVdDLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJuRSxDQUF2QixJQUE0QixDQUE1Qjs7QUFFQSxVQUFJb0UsU0FBUyxJQUFJdEYsTUFBTVcsSUFBVixDQUFleUUsVUFBZixFQUEyQixtRUFBQWQsQ0FBSUMsUUFBL0IsQ0FBYjtBQUNBZSxhQUFPZCxXQUFQLENBQW1CLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQkMsZUFBcEIsQ0FBb0MsQ0FBcEMsRUFBdUMsQ0FBQyxDQUF4QyxFQUEyQyxDQUEzQyxDQUFuQjtBQUNBWSxhQUFPWCxZQUFQO0FBQ0FWLHNCQUFnQlcsS0FBaEIsQ0FBc0JVLE9BQU9ULFFBQTdCLEVBQXVDUyxPQUFPUixNQUE5Qzs7QUFFQSxVQUFJUyxhQUFhLElBQUl2RixNQUFNb0UsV0FBVixDQUFzQixHQUF0QixFQUEyQixFQUEzQixFQUErQixFQUEvQixDQUFqQjtBQUNBbUIsaUJBQVdGLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJuRSxDQUF2QixJQUE0QixDQUE1QjtBQUNBcUUsaUJBQVdGLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJuRSxDQUF2QixJQUE0QixDQUE1Qjs7QUFFQSxVQUFJc0UsU0FBUyxJQUFJeEYsTUFBTVcsSUFBVixDQUFlNEUsVUFBZixFQUEyQixtRUFBQWpCLENBQUlDLFFBQS9CLENBQWI7QUFDQWlCLGFBQU9oQixXQUFQLENBQW1CLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQkMsZUFBcEIsQ0FBb0MsR0FBcEMsRUFBeUMsQ0FBQyxDQUExQyxFQUE2QyxDQUE3QyxDQUFuQjtBQUNBYyxhQUFPYixZQUFQO0FBQ0FWLHNCQUFnQlcsS0FBaEIsQ0FBc0JZLE9BQU9YLFFBQTdCLEVBQXVDVyxPQUFPVixNQUE5Qzs7QUFFQSxVQUFJVyxTQUFTSCxPQUFPSixLQUFQLEVBQWI7QUFDQU8sYUFBT3pFLFFBQVAsQ0FBZ0JrQyxDQUFoQixHQUFvQixDQUFDb0MsT0FBT3RFLFFBQVAsQ0FBZ0JrQyxDQUFyQztBQUNBdUMsYUFBT2QsWUFBUDtBQUNBVixzQkFBZ0JXLEtBQWhCLENBQXNCYSxPQUFPWixRQUE3QixFQUF1Q1ksT0FBT1gsTUFBOUM7O0FBRUEsVUFBSVksU0FBU0YsT0FBT04sS0FBUCxFQUFiO0FBQ0FRLGFBQU8xRSxRQUFQLENBQWdCa0MsQ0FBaEIsR0FBb0IsQ0FBQ3NDLE9BQU94RSxRQUFQLENBQWdCa0MsQ0FBckM7QUFDQXdDLGFBQU9mLFlBQVA7QUFDQVYsc0JBQWdCVyxLQUFoQixDQUFzQmMsT0FBT2IsUUFBN0IsRUFBdUNhLE9BQU9aLE1BQTlDOztBQUVBLFVBQUlhLGFBQWEsSUFBSTNGLE1BQU1vRSxXQUFWLENBQXNCLEdBQXRCLEVBQTJCLElBQTNCLEVBQWlDLEVBQWpDLENBQWpCO0FBQ0F1QixpQkFBV04sUUFBWCxDQUFvQixDQUFwQixFQUF1Qm5FLENBQXZCLElBQTRCLENBQTVCO0FBQ0F5RSxpQkFBV04sUUFBWCxDQUFvQixDQUFwQixFQUF1Qm5FLENBQXZCLElBQTRCLENBQTVCOztBQUVBLFVBQUkwRSxTQUFTLElBQUk1RixNQUFNVyxJQUFWLENBQWVnRixVQUFmLEVBQTJCLG1FQUFBckIsQ0FBSUMsUUFBL0IsQ0FBYjtBQUNBcUIsYUFBT3BCLFdBQVAsQ0FBbUIsSUFBSXhFLE1BQU15RSxPQUFWLEdBQW9CQyxlQUFwQixDQUFvQyxDQUFwQyxFQUF1QyxDQUFDLENBQXhDLEVBQTJDLElBQTNDLENBQW5CO0FBQ0FrQixhQUFPakIsWUFBUDtBQUNBVixzQkFBZ0JXLEtBQWhCLENBQXNCZ0IsT0FBT2YsUUFBN0IsRUFBdUNlLE9BQU9kLE1BQTlDOztBQUVBLFVBQUllLGFBQWEsSUFBSTdGLE1BQU1vRSxXQUFWLENBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLENBQWpCO0FBQ0EsVUFBSTBCLFVBQVUsSUFBSTlGLE1BQU1XLElBQVYsQ0FBZWtGLFVBQWYsRUFBMkIsbUVBQUF2QixDQUFJQyxRQUEvQixDQUFkO0FBQ0F1QixjQUFRdEIsV0FBUixDQUFvQixJQUFJeEUsTUFBTXlFLE9BQVYsR0FBb0JDLGVBQXBCLENBQW9DLENBQUMsQ0FBckMsRUFBd0MsQ0FBQyxDQUF6QyxFQUE0QyxDQUFDLENBQTdDLENBQXBCO0FBQ0FvQixjQUFRbkIsWUFBUjtBQUNBVixzQkFBZ0JXLEtBQWhCLENBQXNCa0IsUUFBUWpCLFFBQTlCLEVBQXdDaUIsUUFBUWhCLE1BQWhEOztBQUVBLFVBQUlpQixVQUFVLElBQUkvRixNQUFNVyxJQUFWLENBQWVrRixVQUFmLEVBQTJCLG1FQUFBdkIsQ0FBSUMsUUFBL0IsQ0FBZDtBQUNBd0IsY0FBUXZCLFdBQVIsQ0FBb0IsSUFBSXhFLE1BQU15RSxPQUFWLEdBQW9CQyxlQUFwQixDQUFvQyxDQUFwQyxFQUF1QyxDQUFDLENBQXhDLEVBQTJDLENBQUMsQ0FBNUMsQ0FBcEI7QUFDQXFCLGNBQVFwQixZQUFSO0FBQ0FWLHNCQUFnQlcsS0FBaEIsQ0FBc0JtQixRQUFRbEIsUUFBOUIsRUFBd0NrQixRQUFRakIsTUFBaEQ7O0FBRUEsVUFBSWtCLGNBQWMsSUFBSWhHLE1BQU1XLElBQVYsQ0FBZXNELGVBQWYsRUFBZ0MsbUVBQUFLLENBQUlDLFFBQXBDLENBQWxCO0FBQ0F5QixrQkFBWXBGLFVBQVosR0FBeUIsSUFBekI7QUFDQW9GLGtCQUFZbkYsYUFBWixHQUE0QixJQUE1Qjs7QUFFQSxVQUFJb0YsWUFBWSxJQUFJakcsTUFBTW9FLFdBQVYsQ0FBc0IsRUFBdEIsRUFBMEIsQ0FBMUIsRUFBNkIsQ0FBN0IsQ0FBaEI7QUFDQSxVQUFJOEIsUUFBUSxJQUFJbEcsTUFBTVcsSUFBVixDQUFlc0YsU0FBZixFQUEwQixtRUFBQTNCLENBQUk2QixRQUE5QixDQUFaO0FBQ0FELFlBQU1sRixRQUFOLENBQWVvRixHQUFmLENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCO0FBQ0FGLFlBQU10RixVQUFOLEdBQW1CLEtBQW5CO0FBQ0FzRixZQUFNckYsYUFBTixHQUFzQixJQUF0Qjs7QUFFQSxVQUFJd0YsWUFBWSxJQUFJckcsTUFBTW9FLFdBQVYsQ0FBc0IsRUFBdEIsRUFBMEIsQ0FBMUIsRUFBNkIsQ0FBN0IsQ0FBaEI7QUFDQSxVQUFJM0UsUUFBUSxJQUFJTyxNQUFNVyxJQUFWLENBQWUwRixTQUFmLEVBQTBCLG1FQUFBL0IsQ0FBSWdDLFFBQTlCLENBQVo7QUFDQTdHLFlBQU11QixRQUFOLENBQWVvRixHQUFmLENBQW1CLENBQW5CLEVBQXNCLEdBQXRCLEVBQTJCLEdBQTNCO0FBQ0EzRyxZQUFNbUIsVUFBTixHQUFtQixLQUFuQjtBQUNBbkIsWUFBTW9CLGFBQU4sR0FBc0IsSUFBdEI7QUFDQXFGLFlBQU1wRixHQUFOLENBQVVyQixLQUFWOztBQUVBLFdBQUtzQixLQUFMLENBQVdELEdBQVgsQ0FBZWtGLFdBQWYsRUFBNEJFLEtBQTVCOztBQUVBLFVBQUlLLGdCQUFnQixJQUFJdkcsTUFBTW9FLFdBQVYsQ0FBc0IsRUFBdEIsRUFBMEIsQ0FBMUIsRUFBNkIsQ0FBN0IsRUFBZ0MsQ0FBaEMsQ0FBcEI7QUFDQW1DLG9CQUFjbEIsUUFBZCxDQUF1QixDQUF2QixFQUEwQnBFLENBQTFCLElBQStCLENBQS9CO0FBQ0FzRixvQkFBY2xCLFFBQWQsQ0FBdUIsQ0FBdkIsRUFBMEJwRSxDQUExQixJQUErQixDQUEvQjtBQUNBc0Ysb0JBQWNsQixRQUFkLENBQXVCLENBQXZCLEVBQTBCcEUsQ0FBMUIsSUFBK0IsQ0FBL0I7QUFDQXNGLG9CQUFjbEIsUUFBZCxDQUF1QixDQUF2QixFQUEwQnBFLENBQTFCLElBQStCLENBQS9CO0FBQ0FzRixvQkFBY2xCLFFBQWQsQ0FBdUIsQ0FBdkIsRUFBMEJwRSxDQUExQixJQUErQixDQUEvQjtBQUNBc0Ysb0JBQWNsQixRQUFkLENBQXVCLENBQXZCLEVBQTBCcEUsQ0FBMUIsSUFBK0IsQ0FBL0I7QUFDQXNGLG9CQUFjbEIsUUFBZCxDQUF1QixDQUF2QixFQUEwQnBFLENBQTFCLElBQStCLENBQS9CO0FBQ0FzRixvQkFBY2xCLFFBQWQsQ0FBdUIsQ0FBdkIsRUFBMEJwRSxDQUExQixJQUErQixDQUEvQjtBQUNBc0Ysb0JBQWNsQixRQUFkLENBQXVCLENBQXZCLEVBQTBCbkMsQ0FBMUIsSUFBK0IsQ0FBL0I7QUFDQXFELG9CQUFjbEIsUUFBZCxDQUF1QixDQUF2QixFQUEwQm5DLENBQTFCLElBQStCLENBQS9COztBQUVBcUQsb0JBQWMvQixXQUFkLENBQTBCLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQkMsZUFBcEIsQ0FBb0MsQ0FBcEMsRUFBdUMsQ0FBdkMsRUFBMEMsQ0FBMUMsQ0FBMUI7QUFDQSxXQUFLWixTQUFMLEdBQWlCLElBQUk5RCxNQUFNVyxJQUFWLENBQWU0RixhQUFmLEVBQThCLG1FQUFBakMsQ0FBSUMsUUFBbEMsQ0FBakI7QUFDQSxXQUFLVCxTQUFMLENBQWVsRCxVQUFmLEdBQTRCLElBQTVCO0FBQ0EsV0FBS2tELFNBQUwsQ0FBZWpELGFBQWYsR0FBK0IsSUFBL0I7O0FBRUEsV0FBS2lELFNBQUwsQ0FBZTlDLFFBQWYsQ0FBd0JvRixHQUF4QixDQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQztBQUNBLFdBQUtyRixLQUFMLENBQVdELEdBQVgsQ0FBZSxLQUFLZ0QsU0FBcEI7QUFDRDs7OzhCQUVTOztBQUVSLFdBQUt0RSxPQUFMLEdBQWUsSUFBSVEsTUFBTUMsUUFBVixFQUFmO0FBQ0EsV0FBS1QsT0FBTCxDQUFhd0IsUUFBYixDQUFzQm9GLEdBQXRCLENBQTBCLENBQTFCLEVBQTZCLENBQTdCLEVBQWdDLENBQWhDO0FBQ0EsV0FBSzFGLElBQUwsQ0FBVUksR0FBVixDQUFjLEtBQUt0QixPQUFuQjtBQUNBLFVBQUlnSCxhQUFhLElBQUl4RyxNQUFNUyxpQkFBVixDQUE0QixFQUFDSCxPQUFPLGdFQUFBbEIsQ0FBT0ksT0FBZixFQUF3QmUsYUFBYSxJQUFyQyxFQUE1QixDQUFqQjs7QUFFQSxVQUFJa0csa0JBQWtCLElBQUl6RyxNQUFNa0UsUUFBVixFQUF0Qjs7QUFFQSxVQUFJd0MsaUJBQWlCLElBQUkxRyxNQUFNMkcsZ0JBQVYsQ0FBMkIsQ0FBM0IsRUFBOEIsQ0FBOUIsRUFBaUMsR0FBakMsRUFBc0MsRUFBdEMsQ0FBckI7QUFDQSxVQUFJQyxpQkFBaUIsSUFBSTVHLE1BQU0yRyxnQkFBVixDQUEyQixHQUEzQixFQUFnQyxHQUFoQyxFQUFxQyxHQUFyQyxFQUEwQyxFQUExQyxDQUFyQjs7QUFFQUQscUJBQWVsQyxXQUFmLENBQTJCLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQm9DLGFBQXBCLENBQWtDLENBQUMxRSxLQUFLMEIsRUFBTixHQUFXLENBQTdDLENBQTNCO0FBQ0ErQyxxQkFBZXBDLFdBQWYsQ0FBMkIsSUFBSXhFLE1BQU15RSxPQUFWLEdBQW9Cb0MsYUFBcEIsQ0FBa0MsQ0FBQzFFLEtBQUswQixFQUFOLEdBQVcsQ0FBN0MsQ0FBM0I7O0FBRUEsVUFBSWlELFdBQVcsSUFBSUMsUUFBSixDQUFhTCxjQUFiLENBQWY7QUFDQSxVQUFJTSxjQUFjLElBQUlELFFBQUosQ0FBYUgsY0FBYixDQUFsQjs7QUFFQSxVQUFJSyx1QkFBdUJILFNBQVNJLFFBQVQsQ0FBa0JGLFdBQWxCLENBQTNCO0FBQ0EsVUFBSUcsWUFBWUYscUJBQXFCRyxNQUFyQixDQUE0QlosVUFBNUIsQ0FBaEI7O0FBRUFXLGdCQUFVM0MsV0FBVixDQUFzQixJQUFJeEUsTUFBTXlFLE9BQVYsR0FBb0JDLGVBQXBCLENBQW9DLENBQXBDLEVBQXVDLENBQXZDLEVBQTBDLENBQTFDLENBQXRCO0FBQ0F5QyxnQkFBVXhDLFlBQVY7QUFDQThCLHNCQUFnQjdCLEtBQWhCLENBQXNCdUMsVUFBVXRDLFFBQWhDLEVBQTBDc0MsVUFBVXJDLE1BQXBEOztBQUVBLFVBQUl1QyxhQUFhRixVQUFVakMsS0FBVixFQUFqQjtBQUNBbUMsaUJBQVc3QyxXQUFYLENBQXVCLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQjZDLGFBQXBCLENBQWtDbkYsS0FBSzBCLEVBQUwsR0FBVSxFQUE1QyxDQUF2QjtBQUNBd0QsaUJBQVc3QyxXQUFYLENBQXVCLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQkMsZUFBcEIsQ0FBb0MsQ0FBQyxHQUFyQyxFQUEwQyxDQUFDLElBQTNDLEVBQWlELENBQWpELENBQXZCO0FBQ0EyQyxpQkFBVzFDLFlBQVg7QUFDQThCLHNCQUFnQjdCLEtBQWhCLENBQXNCeUMsV0FBV3hDLFFBQWpDLEVBQTJDd0MsV0FBV3ZDLE1BQXREOztBQUVBLFVBQUl5QyxlQUFlLElBQUl2SCxNQUFNb0UsV0FBVixDQUFzQixDQUF0QixFQUF5QixFQUF6QixFQUE2QixFQUE3QixDQUFuQjtBQUNBLFVBQUlvRCxXQUFXLElBQUl4SCxNQUFNVyxJQUFWLENBQWU0RyxZQUFmLEVBQTZCZixVQUE3QixDQUFmO0FBQ0FnQixlQUFTaEQsV0FBVCxDQUFxQixJQUFJeEUsTUFBTXlFLE9BQVYsR0FBb0JDLGVBQXBCLENBQW9DLENBQXBDLEVBQXVDLEdBQXZDLEVBQTRDLENBQUMsR0FBN0MsQ0FBckI7QUFDQThDLGVBQVM3QyxZQUFUO0FBQ0E4QixzQkFBZ0I3QixLQUFoQixDQUFzQjRDLFNBQVMzQyxRQUEvQixFQUF5QzJDLFNBQVMxQyxNQUFsRDs7QUFFQSxVQUFJMkMsZUFBZSxJQUFJekgsTUFBTW9FLFdBQVYsQ0FBc0IsR0FBdEIsRUFBMkIsRUFBM0IsRUFBK0IsQ0FBL0IsQ0FBbkI7QUFDQSxVQUFJc0QsZ0JBQWdCLElBQUkxSCxNQUFNVyxJQUFWLENBQWU4RyxZQUFmLEVBQTZCakIsVUFBN0IsQ0FBcEI7QUFDQWtCLG9CQUFjbEQsV0FBZCxDQUEwQixJQUFJeEUsTUFBTXlFLE9BQVYsR0FBb0JDLGVBQXBCLENBQW9DLEdBQXBDLEVBQXlDLENBQXpDLEVBQTRDLENBQTVDLENBQTFCO0FBQ0FnRCxvQkFBYy9DLFlBQWQ7QUFDQThCLHNCQUFnQjdCLEtBQWhCLENBQXNCOEMsY0FBYzdDLFFBQXBDLEVBQThDNkMsY0FBYzVDLE1BQTVEOztBQUVBLFVBQUk2QyxlQUFlRCxjQUFjeEMsS0FBZCxFQUFuQjtBQUNBeUMsbUJBQWEzRyxRQUFiLENBQXNCa0MsQ0FBdEIsR0FBMEIsQ0FBQ3dFLGNBQWMxRyxRQUFkLENBQXVCa0MsQ0FBbEQ7QUFDQXlFLG1CQUFhaEQsWUFBYjtBQUNBOEIsc0JBQWdCN0IsS0FBaEIsQ0FBc0IrQyxhQUFhOUMsUUFBbkMsRUFBNkM4QyxhQUFhN0MsTUFBMUQ7O0FBRUEsVUFBSThDLGlCQUFpQixJQUFJNUgsTUFBTW9FLFdBQVYsQ0FBc0IsQ0FBdEIsRUFBeUIsR0FBekIsRUFBOEIsRUFBOUIsQ0FBckI7QUFDQSxVQUFJeUQsa0JBQWtCLElBQUk3SCxNQUFNVyxJQUFWLENBQWVpSCxjQUFmLEVBQStCcEIsVUFBL0IsQ0FBdEI7QUFDQXFCLHNCQUFnQnJELFdBQWhCLENBQTRCLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQkMsZUFBcEIsQ0FBb0MsQ0FBcEMsRUFBdUMsQ0FBdkMsRUFBMEMsQ0FBQyxHQUEzQyxDQUE1QjtBQUNBbUQsc0JBQWdCbEQsWUFBaEI7QUFDQThCLHNCQUFnQjdCLEtBQWhCLENBQXNCaUQsZ0JBQWdCaEQsUUFBdEMsRUFBZ0RnRCxnQkFBZ0IvQyxNQUFoRTs7QUFFQSxVQUFJZ0QsaUJBQWlCRCxnQkFBZ0IzQyxLQUFoQixFQUFyQjtBQUNBNEMscUJBQWU5RyxRQUFmLENBQXdCa0MsQ0FBeEIsR0FBNEIsQ0FBQzJFLGdCQUFnQjdHLFFBQWhCLENBQXlCa0MsQ0FBdEQ7QUFDQTRFLHFCQUFlbkQsWUFBZjtBQUNBOEIsc0JBQWdCN0IsS0FBaEIsQ0FBc0JrRCxlQUFlakQsUUFBckMsRUFBK0NpRCxlQUFlaEQsTUFBOUQ7O0FBRUEsVUFBSWlELGNBQWMsSUFBSS9ILE1BQU1XLElBQVYsQ0FBZThGLGVBQWYsRUFBZ0NELFVBQWhDLENBQWxCO0FBQ0F1QixrQkFBWW5ILFVBQVosR0FBeUIsS0FBekI7QUFDQW1ILGtCQUFZbEgsYUFBWixHQUE0QixJQUE1Qjs7QUFFQSxXQUFLckIsT0FBTCxDQUFhc0IsR0FBYixDQUFpQmlILFdBQWpCO0FBRUQ7OzsyQkFFTTs7QUFFTCxXQUFLQyxJQUFMLEdBQVksSUFBSWhJLE1BQU1DLFFBQVYsRUFBWjtBQUNBLFdBQUsrSCxJQUFMLENBQVVoSCxRQUFWLENBQW1Cb0YsR0FBbkIsQ0FBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsRUFBNkIsQ0FBN0I7QUFDQSxXQUFLMUYsSUFBTCxDQUFVSSxHQUFWLENBQWMsS0FBS2tILElBQW5COztBQUVBLFVBQUlDLGlCQUFpQixJQUFJakksTUFBTWtFLFFBQVYsRUFBckI7O0FBRUEsVUFBSWdFLGVBQWUsSUFBSWxJLE1BQU1vRSxXQUFWLENBQXNCLEVBQXRCLEVBQTBCLENBQTFCLEVBQTZCLEVBQTdCLENBQW5COztBQUVBLFVBQUkrRCxRQUFRLElBQUluSSxNQUFNVyxJQUFWLENBQWV1SCxZQUFmLEVBQTZCLG1FQUFBNUQsQ0FBSUMsUUFBakMsQ0FBWjtBQUNBNEQsWUFBTTNELFdBQU4sQ0FBa0IsSUFBSXhFLE1BQU15RSxPQUFWLEdBQW9CNkMsYUFBcEIsQ0FBa0MsQ0FBQ25GLEtBQUswQixFQUFOLEdBQVcsRUFBN0MsQ0FBbEI7QUFDQXNFLFlBQU0zRCxXQUFOLENBQWtCLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQkMsZUFBcEIsQ0FBb0MsQ0FBQyxDQUFyQyxFQUF3QyxDQUFDLEdBQXpDLEVBQThDLENBQTlDLENBQWxCO0FBQ0F5RCxZQUFNeEQsWUFBTjtBQUNBc0QscUJBQWVyRCxLQUFmLENBQXFCdUQsTUFBTXRELFFBQTNCLEVBQXFDc0QsTUFBTXJELE1BQTNDOztBQUVBLFVBQUlzRCxRQUFRLElBQUlwSSxNQUFNVyxJQUFWLENBQWV1SCxZQUFmLEVBQTZCLG1FQUFBNUQsQ0FBSUMsUUFBakMsQ0FBWjtBQUNBNkQsWUFBTTVELFdBQU4sQ0FBa0IsSUFBSXhFLE1BQU15RSxPQUFWLEdBQW9CNkMsYUFBcEIsQ0FBa0MsQ0FBQ25GLEtBQUswQixFQUFOLEdBQVcsRUFBN0MsQ0FBbEI7QUFDQXVFLFlBQU01RCxXQUFOLENBQWtCLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQkMsZUFBcEIsQ0FBb0MsQ0FBQyxDQUFyQyxFQUF3QyxDQUF4QyxFQUEyQyxDQUEzQyxDQUFsQjtBQUNBMEQsWUFBTXpELFlBQU47QUFDQXNELHFCQUFlckQsS0FBZixDQUFxQndELE1BQU12RCxRQUEzQixFQUFxQ3VELE1BQU10RCxNQUEzQzs7QUFFQSxVQUFJdUQsUUFBUSxJQUFJckksTUFBTVcsSUFBVixDQUFldUgsWUFBZixFQUE2QixtRUFBQTVELENBQUlDLFFBQWpDLENBQVo7QUFDQThELFlBQU03RCxXQUFOLENBQWtCLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQjZDLGFBQXBCLENBQWtDLENBQUNuRixLQUFLMEIsRUFBTixHQUFXLENBQTdDLENBQWxCO0FBQ0F3RSxZQUFNN0QsV0FBTixDQUFrQixJQUFJeEUsTUFBTXlFLE9BQVYsR0FBb0JDLGVBQXBCLENBQW9DLENBQXBDLEVBQXVDLENBQXZDLEVBQTBDLENBQTFDLENBQWxCO0FBQ0EyRCxZQUFNMUQsWUFBTjtBQUNBc0QscUJBQWVyRCxLQUFmLENBQXFCeUQsTUFBTXhELFFBQTNCLEVBQXFDd0QsTUFBTXZELE1BQTNDOztBQUVBLFVBQUl3RCxRQUFRLElBQUl0SSxNQUFNVyxJQUFWLENBQWV1SCxZQUFmLEVBQTZCLG1FQUFBNUQsQ0FBSUMsUUFBakMsQ0FBWjtBQUNBK0QsWUFBTTlELFdBQU4sQ0FBa0IsSUFBSXhFLE1BQU15RSxPQUFWLEdBQW9CNkMsYUFBcEIsQ0FBa0MsQ0FBQ25GLEtBQUswQixFQUFOLEdBQVcsQ0FBN0MsQ0FBbEI7QUFDQXlFLFlBQU05RCxXQUFOLENBQWtCLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQkMsZUFBcEIsQ0FBb0MsQ0FBcEMsRUFBdUMsQ0FBdkMsRUFBMEMsQ0FBMUMsQ0FBbEI7QUFDQTRELFlBQU0zRCxZQUFOO0FBQ0FzRCxxQkFBZXJELEtBQWYsQ0FBcUIwRCxNQUFNekQsUUFBM0IsRUFBcUN5RCxNQUFNeEQsTUFBM0M7O0FBRUEsVUFBSXlELFFBQVEsSUFBSXZJLE1BQU1XLElBQVYsQ0FBZXVILFlBQWYsRUFBNkIsbUVBQUE1RCxDQUFJQyxRQUFqQyxDQUFaO0FBQ0FnRSxZQUFNL0QsV0FBTixDQUFrQixJQUFJeEUsTUFBTXlFLE9BQVYsR0FBb0I2QyxhQUFwQixDQUFrQyxDQUFDbkYsS0FBSzBCLEVBQU4sR0FBVyxDQUFDLENBQTlDLENBQWxCO0FBQ0EwRSxZQUFNL0QsV0FBTixDQUFrQixJQUFJeEUsTUFBTXlFLE9BQVYsR0FBb0JDLGVBQXBCLENBQW9DLENBQUMsSUFBckMsRUFBMkMsQ0FBQyxFQUE1QyxFQUFnRCxDQUFoRCxDQUFsQjtBQUNBNkQsWUFBTTVELFlBQU47QUFDQXNELHFCQUFlckQsS0FBZixDQUFxQjJELE1BQU0xRCxRQUEzQixFQUFxQzBELE1BQU16RCxNQUEzQzs7QUFFQSxVQUFJMEQsbUJBQW1CLElBQUl4SSxNQUFNb0UsV0FBVixDQUFzQixFQUF0QixFQUEwQixDQUExQixFQUE2QixDQUE3QixDQUF2QjtBQUNBb0UsdUJBQWlCbkQsUUFBakIsQ0FBMEIsQ0FBMUIsRUFBNkJuQyxDQUE3QixJQUFrQyxDQUFsQztBQUNBc0YsdUJBQWlCbkQsUUFBakIsQ0FBMEIsQ0FBMUIsRUFBNkJuQyxDQUE3QixJQUFrQyxDQUFsQztBQUNBc0YsdUJBQWlCbkQsUUFBakIsQ0FBMEIsQ0FBMUIsRUFBNkJuQyxDQUE3QixJQUFrQyxDQUFsQztBQUNBc0YsdUJBQWlCbkQsUUFBakIsQ0FBMEIsQ0FBMUIsRUFBNkJuQyxDQUE3QixJQUFrQyxDQUFsQzs7QUFFQSxVQUFJdUYsUUFBUSxJQUFJekksTUFBTVcsSUFBVixDQUFlNkgsZ0JBQWYsRUFBaUMsbUVBQUFsRSxDQUFJQyxRQUFyQyxDQUFaO0FBQ0FrRSxZQUFNakUsV0FBTixDQUFrQixJQUFJeEUsTUFBTXlFLE9BQVYsR0FBb0JDLGVBQXBCLENBQW9DLENBQXBDLEVBQXVDLENBQUMsR0FBeEMsRUFBNkMsQ0FBQyxDQUE5QyxDQUFsQjtBQUNBK0QsWUFBTTlELFlBQU47QUFDQXNELHFCQUFlckQsS0FBZixDQUFxQjZELE1BQU01RCxRQUEzQixFQUFxQzRELE1BQU0zRCxNQUEzQzs7QUFFQSxVQUFJNEQsYUFBYSxJQUFJMUksTUFBTVcsSUFBVixDQUFlc0gsY0FBZixFQUErQixtRUFBQTNELENBQUlDLFFBQW5DLENBQWpCO0FBQ0FtRSxpQkFBVzlILFVBQVgsR0FBd0IsS0FBeEI7QUFDQThILGlCQUFXN0gsYUFBWCxHQUEyQixJQUEzQjs7QUFFQSxXQUFLbUgsSUFBTCxDQUFVbEgsR0FBVixDQUFjNEgsVUFBZDtBQUVEOzs7MkJBRU07O0FBRUwsV0FBS0MsSUFBTCxHQUFZLElBQUkzSSxNQUFNQyxRQUFWLEVBQVo7QUFDQSxXQUFLMEksSUFBTCxDQUFVM0gsUUFBVixDQUFtQm9GLEdBQW5CLENBQXVCLENBQXZCLEVBQTBCLENBQTFCLEVBQTZCLENBQTdCO0FBQ0EsV0FBSzFGLElBQUwsQ0FBVUksR0FBVixDQUFjLEtBQUs2SCxJQUFuQjs7QUFFQSxVQUFJQyxlQUFlLElBQUk1SSxNQUFNNkksYUFBVixDQUF3QixHQUF4QixFQUE2QixHQUE3QixDQUFuQjs7QUFFQSxVQUFJQyxnQkFBZ0IsSUFBSTlJLE1BQU1XLElBQVYsQ0FBZWlJLFlBQWYsRUFBNkIsbUVBQUF0RSxDQUFJQyxRQUFqQyxDQUFwQjtBQUNBdUUsb0JBQWM5SCxRQUFkLENBQXVCb0YsR0FBdkIsQ0FBMkIsQ0FBQyxJQUE1QixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQztBQUNBMEMsb0JBQWNsSSxVQUFkLEdBQTJCLEtBQTNCO0FBQ0FrSSxvQkFBY2pJLGFBQWQsR0FBOEIsS0FBOUI7O0FBRUEsVUFBSWtJLGNBQWMsSUFBSS9JLE1BQU02SSxhQUFWLENBQXdCLEdBQXhCLEVBQTZCLEdBQTdCLENBQWxCOztBQUVBLFVBQUlySSxTQUFTLElBQUlSLE1BQU1TLGlCQUFWLENBQTRCLEVBQUNILE9BQU8sZ0VBQUFsQixDQUFPTyxHQUFmLEVBQW9CWSxhQUFhLElBQWpDLEVBQTVCLENBQWI7O0FBRUEsV0FBSzBDLFlBQUwsR0FBb0IsSUFBSWpELE1BQU1XLElBQVYsQ0FBZW9JLFdBQWYsRUFBNEJ2SSxNQUE1QixDQUFwQjtBQUNBLFdBQUt5QyxZQUFMLENBQWtCakMsUUFBbEIsQ0FBMkJvRixHQUEzQixDQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxHQUFyQztBQUNBLFdBQUtuRCxZQUFMLENBQWtCckMsVUFBbEIsR0FBK0IsS0FBL0I7QUFDQSxXQUFLcUMsWUFBTCxDQUFrQnBDLGFBQWxCLEdBQWtDLEtBQWxDOztBQUVBaUksb0JBQWNoSSxHQUFkLENBQWtCLEtBQUttQyxZQUF2Qjs7QUFFQSxVQUFJK0YsZUFBZSxJQUFJaEosTUFBTTZJLGFBQVYsQ0FBd0IsQ0FBeEIsRUFBMkIsQ0FBM0IsQ0FBbkI7O0FBRUEsV0FBS0ksYUFBTCxHQUFxQixJQUFJakosTUFBTVcsSUFBVixDQUFlcUksWUFBZixFQUE2QixtRUFBQTFFLENBQUk2QixRQUFqQyxDQUFyQjtBQUNBLFdBQUs4QyxhQUFMLENBQW1CakksUUFBbkIsQ0FBNEJvRixHQUE1QixDQUFnQyxDQUFoQyxFQUFtQyxDQUFuQyxFQUFzQyxHQUF0QztBQUNBLFdBQUs2QyxhQUFMLENBQW1CckksVUFBbkIsR0FBZ0MsS0FBaEM7QUFDQSxXQUFLcUksYUFBTCxDQUFtQnBJLGFBQW5CLEdBQW1DLEtBQW5DOztBQUVBLFdBQUtvQyxZQUFMLENBQWtCbkMsR0FBbEIsQ0FBc0IsS0FBS21JLGFBQTNCOztBQUVBLFVBQUlDLGVBQWUsSUFBSWxKLE1BQU1XLElBQVYsQ0FBZWlJLFlBQWYsRUFBNkIsbUVBQUF0RSxDQUFJQyxRQUFqQyxDQUFuQjtBQUNBMkUsbUJBQWFsSSxRQUFiLENBQXNCb0YsR0FBdEIsQ0FBMEIsSUFBMUIsRUFBZ0MsQ0FBaEMsRUFBbUMsQ0FBbkM7QUFDQThDLG1CQUFhdEksVUFBYixHQUEwQixLQUExQjtBQUNBc0ksbUJBQWFySSxhQUFiLEdBQTZCLEtBQTdCOztBQUVBLFdBQUtzQyxXQUFMLEdBQW1CLElBQUluRCxNQUFNVyxJQUFWLENBQWVvSSxXQUFmLEVBQTRCdkksTUFBNUIsQ0FBbkI7QUFDQSxXQUFLMkMsV0FBTCxDQUFpQm5DLFFBQWpCLENBQTBCb0YsR0FBMUIsQ0FBOEIsQ0FBOUIsRUFBaUMsQ0FBakMsRUFBb0MsR0FBcEM7QUFDQSxXQUFLakQsV0FBTCxDQUFpQnZDLFVBQWpCLEdBQThCLEtBQTlCO0FBQ0EsV0FBS3VDLFdBQUwsQ0FBaUJ0QyxhQUFqQixHQUFpQyxLQUFqQzs7QUFFQXFJLG1CQUFhcEksR0FBYixDQUFpQixLQUFLcUMsV0FBdEI7O0FBRUEsV0FBS2dHLFlBQUwsR0FBb0IsSUFBSW5KLE1BQU1XLElBQVYsQ0FBZXFJLFlBQWYsRUFBNkIsbUVBQUExRSxDQUFJNkIsUUFBakMsQ0FBcEI7QUFDQSxXQUFLZ0QsWUFBTCxDQUFrQm5JLFFBQWxCLENBQTJCb0YsR0FBM0IsQ0FBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsR0FBckM7QUFDQSxXQUFLK0MsWUFBTCxDQUFrQnZJLFVBQWxCLEdBQStCLEtBQS9CO0FBQ0EsV0FBS3VJLFlBQUwsQ0FBa0J0SSxhQUFsQixHQUFrQyxLQUFsQzs7QUFFQSxXQUFLc0MsV0FBTCxDQUFpQnJDLEdBQWpCLENBQXFCLEtBQUtxSSxZQUExQjs7QUFFQSxXQUFLUixJQUFMLENBQVU3SCxHQUFWLENBQWNnSSxhQUFkLEVBQTZCSSxZQUE3QjtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLRSxRQUFMLEdBQWdCLElBQUlwSixNQUFNQyxRQUFWLEVBQWhCO0FBQ0EsV0FBS21KLFFBQUwsQ0FBY3BJLFFBQWQsQ0FBdUJvRixHQUF2QixDQUEyQixDQUEzQixFQUE4QixDQUE5QixFQUFpQyxDQUFqQztBQUNBLFdBQUsxRixJQUFMLENBQVVJLEdBQVYsQ0FBYyxLQUFLc0ksUUFBbkI7O0FBRUEsVUFBSUMsY0FBYyxJQUFJckosTUFBTW9FLFdBQVYsQ0FBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FBbEI7O0FBRUEsV0FBS2hCLFlBQUwsR0FBb0IsSUFBSXBELE1BQU1XLElBQVYsQ0FBZTBJLFdBQWYsRUFBNEIsbUVBQUEvRSxDQUFJQyxRQUFoQyxDQUFwQjtBQUNBLFdBQUtuQixZQUFMLENBQWtCb0IsV0FBbEIsQ0FBOEIsSUFBSXhFLE1BQU15RSxPQUFWLEdBQW9CNkMsYUFBcEIsQ0FBa0NuRixLQUFLMEIsRUFBTCxHQUFVLEVBQTVDLENBQTlCO0FBQ0EsV0FBS1QsWUFBTCxDQUFrQnBDLFFBQWxCLENBQTJCb0YsR0FBM0IsQ0FBK0IsQ0FBQyxJQUFoQyxFQUFzQyxDQUF0QyxFQUF5QyxDQUF6QztBQUNBLFdBQUtoRCxZQUFMLENBQWtCeEMsVUFBbEIsR0FBK0IsS0FBL0I7QUFDQSxXQUFLd0MsWUFBTCxDQUFrQnZDLGFBQWxCLEdBQWtDLEtBQWxDOztBQUVBLFdBQUt3QyxXQUFMLEdBQW1CLElBQUlyRCxNQUFNVyxJQUFWLENBQWUwSSxXQUFmLEVBQTRCLG1FQUFBL0UsQ0FBSUMsUUFBaEMsQ0FBbkI7QUFDQSxXQUFLbEIsV0FBTCxDQUFpQm1CLFdBQWpCLENBQTZCLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQjZDLGFBQXBCLENBQWtDLENBQUNuRixLQUFLMEIsRUFBTixHQUFXLEVBQTdDLENBQTdCO0FBQ0EsV0FBS1IsV0FBTCxDQUFpQnJDLFFBQWpCLENBQTBCb0YsR0FBMUIsQ0FBOEIsSUFBOUIsRUFBb0MsQ0FBcEMsRUFBdUMsQ0FBdkM7QUFDQSxXQUFLL0MsV0FBTCxDQUFpQnpDLFVBQWpCLEdBQThCLEtBQTlCO0FBQ0EsV0FBS3lDLFdBQUwsQ0FBaUJ4QyxhQUFqQixHQUFpQyxLQUFqQzs7QUFFQSxXQUFLdUksUUFBTCxDQUFjdEksR0FBZCxDQUFrQixLQUFLc0MsWUFBdkIsRUFBcUMsS0FBS0MsV0FBMUM7QUFDRDs7OzBCQUVLO0FBQ0osV0FBS3pELEdBQUwsR0FBVyxJQUFJSSxNQUFNQyxRQUFWLEVBQVg7QUFDQSxXQUFLTCxHQUFMLENBQVNvQixRQUFULENBQWtCb0YsR0FBbEIsQ0FBc0IsQ0FBQyxHQUF2QixFQUE0QixFQUE1QixFQUFnQyxHQUFoQztBQUNBLFdBQUsxRixJQUFMLENBQVVJLEdBQVYsQ0FBYyxLQUFLbEIsR0FBbkI7O0FBRUEsVUFBSTBKLFNBQVMsSUFBSXRKLE1BQU1TLGlCQUFWLENBQTRCLEVBQUNILE9BQU8sZ0VBQUFsQixDQUFPUSxHQUFmLEVBQW9CVyxhQUFhLElBQWpDLEVBQTVCLENBQWI7O0FBRUEsVUFBSWdKLFdBQVcsSUFBSXZKLE1BQU13SixhQUFWLENBQXdCLENBQXhCLEVBQTJCLENBQTNCLEVBQThCLEVBQTlCLEVBQWtDLEdBQWxDLENBQWY7QUFDQSxVQUFJQyxjQUFjLElBQUl6SixNQUFNMkcsZ0JBQVYsQ0FBMkIsQ0FBM0IsRUFBOEIsRUFBOUIsRUFBa0MsRUFBbEMsRUFBc0MsRUFBdEMsQ0FBbEI7QUFDQSxVQUFJK0MsZ0JBQWdCLElBQUkxSixNQUFNMkcsZ0JBQVYsQ0FBMkIsR0FBM0IsRUFBZ0MsQ0FBaEMsRUFBbUMsQ0FBbkMsRUFBc0MsRUFBdEMsQ0FBcEI7QUFDQSxVQUFJZ0QsZ0JBQWdCLElBQUkzSixNQUFNNEosY0FBVixDQUF5QixHQUF6QixFQUE4QixDQUE5QixFQUFpQyxDQUFqQyxDQUFwQjs7QUFFQSxXQUFLQyxJQUFMLEdBQVksSUFBSTdKLE1BQU1XLElBQVYsQ0FBZTRJLFFBQWYsRUFBeUIsbUVBQUFqRixDQUFJZ0MsUUFBN0IsQ0FBWjtBQUNBLFdBQUt1RCxJQUFMLENBQVVyRixXQUFWLENBQXNCLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQm9DLGFBQXBCLENBQWtDMUUsS0FBSzBCLEVBQUwsR0FBVSxDQUE1QyxDQUF0QjtBQUNBLFdBQUtnRyxJQUFMLENBQVU3SSxRQUFWLENBQW1Cb0YsR0FBbkIsQ0FBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsRUFBNkIsQ0FBN0I7QUFDQSxXQUFLeUQsSUFBTCxDQUFVakosVUFBVixHQUF1QixLQUF2QjtBQUNBLFdBQUtpSixJQUFMLENBQVVoSixhQUFWLEdBQTBCLEtBQTFCOztBQUVBLFdBQUtpSixPQUFMLEdBQWUsSUFBSTlKLE1BQU1XLElBQVYsQ0FBZThJLFdBQWYsRUFBNEJILE1BQTVCLENBQWY7QUFDQSxXQUFLUSxPQUFMLENBQWE5SSxRQUFiLENBQXNCb0YsR0FBdEIsQ0FBMEIsQ0FBMUIsRUFBNkIsQ0FBN0IsRUFBZ0MsQ0FBaEM7QUFDQSxXQUFLMEQsT0FBTCxDQUFhbEosVUFBYixHQUEwQixLQUExQjtBQUNBLFdBQUtrSixPQUFMLENBQWFqSixhQUFiLEdBQTZCLEtBQTdCOztBQUVBLFdBQUtrSixTQUFMLEdBQWlCLElBQUkvSixNQUFNVyxJQUFWLENBQWUrSSxhQUFmLEVBQThCSixNQUE5QixDQUFqQjtBQUNBLFdBQUtTLFNBQUwsQ0FBZXZGLFdBQWYsQ0FBMkIsSUFBSXhFLE1BQU15RSxPQUFWLEdBQW9Cb0MsYUFBcEIsQ0FBa0MxRSxLQUFLMEIsRUFBTCxHQUFVLENBQTVDLENBQTNCO0FBQ0EsV0FBS2tHLFNBQUwsQ0FBZXZGLFdBQWYsQ0FBMkIsSUFBSXhFLE1BQU15RSxPQUFWLEdBQW9CdUYsYUFBcEIsQ0FBa0M3SCxLQUFLMEIsRUFBTCxHQUFVLENBQTVDLENBQTNCO0FBQ0EsV0FBS2tHLFNBQUwsQ0FBZXZGLFdBQWYsQ0FBMkIsSUFBSXhFLE1BQU15RSxPQUFWLEdBQW9CNkMsYUFBcEIsQ0FBa0NuRixLQUFLMEIsRUFBTCxHQUFVLENBQUMsQ0FBN0MsQ0FBM0I7QUFDQSxXQUFLa0csU0FBTCxDQUFlL0ksUUFBZixDQUF3Qm9GLEdBQXhCLENBQTRCLENBQTVCLEVBQStCLEdBQS9CLEVBQW9DLENBQUMsQ0FBckM7QUFDQSxXQUFLMkQsU0FBTCxDQUFlbkosVUFBZixHQUE0QixLQUE1QjtBQUNBLFdBQUttSixTQUFMLENBQWVsSixhQUFmLEdBQStCLEtBQS9COztBQUVBLFdBQUtvSixTQUFMLEdBQWlCLElBQUlqSyxNQUFNVyxJQUFWLENBQWVnSixhQUFmLEVBQThCLG1FQUFBckYsQ0FBSUMsUUFBbEMsQ0FBakI7QUFDQSxXQUFLMEYsU0FBTCxDQUFlakosUUFBZixDQUF3Qm9GLEdBQXhCLENBQTRCLENBQTVCLEVBQStCLEdBQS9CLEVBQW9DLENBQUMsQ0FBckM7QUFDQSxXQUFLNkQsU0FBTCxDQUFlckosVUFBZixHQUE0QixLQUE1QjtBQUNBLFdBQUtxSixTQUFMLENBQWVwSixhQUFmLEdBQStCLEtBQS9COztBQUVBLFdBQUtqQixHQUFMLENBQVNrQixHQUFULENBQWEsS0FBSytJLElBQWxCLEVBQXdCLEtBQUtDLE9BQTdCLEVBQXNDLEtBQUtDLFNBQTNDLEVBQXNELEtBQUtFLFNBQTNEO0FBQ0Q7OzsrQkFFVTtBQUNULFdBQUszSyxRQUFMLEdBQWdCLElBQUlVLE1BQU1DLFFBQVYsRUFBaEI7QUFDQSxXQUFLWCxRQUFMLENBQWMwQixRQUFkLENBQXVCb0YsR0FBdkIsQ0FBMkIsQ0FBM0IsRUFBOEIsQ0FBOUIsRUFBaUMsQ0FBakM7QUFDQSxXQUFLMUYsSUFBTCxDQUFVSSxHQUFWLENBQWMsS0FBS3hCLFFBQW5COztBQUVBLFVBQUk0SyxjQUFjLElBQUlsSyxNQUFNSyxtQkFBVixDQUE4QixFQUFDQyxPQUFPLGdFQUFBbEIsQ0FBT0UsUUFBZixFQUF5QmlCLGFBQWEsSUFBdEMsRUFBOUIsQ0FBbEI7QUFDQSxVQUFJNEoscUJBQXFCLElBQUluSyxNQUFNa0UsUUFBVixFQUF6Qjs7QUFFQSxVQUFJa0csZUFBZSxJQUFJcEssTUFBTTZJLGFBQVYsQ0FBd0IsR0FBeEIsRUFBNkIsR0FBN0IsQ0FBbkI7O0FBRUEsVUFBSXdCLFdBQVcsSUFBSXJLLE1BQU1XLElBQVYsQ0FBZXlKLFlBQWYsRUFBNkJGLFdBQTdCLENBQWY7QUFDQUcsZUFBUzdGLFdBQVQsQ0FBcUIsSUFBSXhFLE1BQU15RSxPQUFWLEdBQW9CQyxlQUFwQixDQUFvQyxDQUFDLENBQXJDLEVBQXdDLENBQXhDLEVBQTJDLElBQTNDLENBQXJCO0FBQ0EyRixlQUFTMUYsWUFBVDtBQUNBd0YseUJBQW1CdkYsS0FBbkIsQ0FBeUJ5RixTQUFTeEYsUUFBbEMsRUFBNEN3RixTQUFTdkYsTUFBckQ7O0FBRUEsVUFBSXdGLFdBQVdELFNBQVNuRixLQUFULEVBQWY7QUFDQW9GLGVBQVM5RixXQUFULENBQXFCLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQkMsZUFBcEIsQ0FBb0MsQ0FBQyxHQUFyQyxFQUEwQyxDQUFDLENBQTNDLEVBQThDLENBQTlDLENBQXJCO0FBQ0E0RixlQUFTM0YsWUFBVDtBQUNBd0YseUJBQW1CdkYsS0FBbkIsQ0FBeUIwRixTQUFTekYsUUFBbEMsRUFBNEN5RixTQUFTeEYsTUFBckQ7O0FBRUEsVUFBSXlGLFdBQVdGLFNBQVNuRixLQUFULEVBQWY7QUFDQXFGLGVBQVMvRixXQUFULENBQXFCLElBQUl4RSxNQUFNeUUsT0FBVixHQUFvQkMsZUFBcEIsQ0FBb0MsQ0FBcEMsRUFBdUMsQ0FBQyxHQUF4QyxFQUE2QyxDQUE3QyxDQUFyQjtBQUNBNkYsZUFBUzVGLFlBQVQ7QUFDQXdGLHlCQUFtQnZGLEtBQW5CLENBQXlCMkYsU0FBUzFGLFFBQWxDLEVBQTRDMEYsU0FBU3pGLE1BQXJEOztBQUVBLFVBQUkwRixXQUFXSCxTQUFTbkYsS0FBVCxFQUFmO0FBQ0FzRixlQUFTeEosUUFBVCxDQUFrQmtDLENBQWxCLEdBQXNCLENBQUNtSCxTQUFTckosUUFBVCxDQUFrQmtDLENBQXpDO0FBQ0FzSCxlQUFTN0YsWUFBVDtBQUNBd0YseUJBQW1CdkYsS0FBbkIsQ0FBeUI0RixTQUFTM0YsUUFBbEMsRUFBNEMyRixTQUFTMUYsTUFBckQ7QUFDQSxVQUFJMkYsV0FBV0gsU0FBU3BGLEtBQVQsRUFBZjtBQUNBdUYsZUFBU3pKLFFBQVQsQ0FBa0JrQyxDQUFsQixHQUFzQixDQUFDb0gsU0FBU3RKLFFBQVQsQ0FBa0JrQyxDQUF6QztBQUNBdUgsZUFBUzlGLFlBQVQ7QUFDQXdGLHlCQUFtQnZGLEtBQW5CLENBQXlCNkYsU0FBUzVGLFFBQWxDLEVBQTRDNEYsU0FBUzNGLE1BQXJEO0FBQ0EsVUFBSTRGLFdBQVdILFNBQVNyRixLQUFULEVBQWY7QUFDQXdGLGVBQVMxSixRQUFULENBQWtCa0MsQ0FBbEIsR0FBc0IsQ0FBQ3FILFNBQVN2SixRQUFULENBQWtCa0MsQ0FBekM7QUFDQXdILGVBQVMvRixZQUFUO0FBQ0F3Rix5QkFBbUJ2RixLQUFuQixDQUF5QjhGLFNBQVM3RixRQUFsQyxFQUE0QzZGLFNBQVM1RixNQUFyRDs7QUFFQSxVQUFJNkYsaUJBQWlCLElBQUkzSyxNQUFNVyxJQUFWLENBQWV3SixrQkFBZixFQUFtQ0QsV0FBbkMsQ0FBckI7QUFDQVMscUJBQWUvSixVQUFmLEdBQTRCLEtBQTVCO0FBQ0ErSixxQkFBZTlKLGFBQWYsR0FBK0IsS0FBL0I7O0FBRUEsV0FBS3ZCLFFBQUwsQ0FBY3dCLEdBQWQsQ0FBa0I2SixjQUFsQjtBQUNEOzs7K0JBRVU7QUFDVCxVQUFJQyxVQUFVLElBQUk1SyxNQUFNRyxpQkFBVixDQUE0QixHQUE1QixFQUFpQyxDQUFqQyxFQUFvQyxHQUFwQyxDQUFkO0FBQ0EsVUFBSUMsVUFBVSxJQUFJSixNQUFNSyxtQkFBVixDQUE4QixFQUFDQyxPQUFPLGdFQUFBbEIsQ0FBT0MsSUFBZixFQUFxQmtCLGFBQWEsSUFBbEMsRUFBOUIsQ0FBZDtBQUNBLFVBQUlzSyxXQUFXLElBQUk3SyxNQUFNVyxJQUFWLENBQWVpSyxPQUFmLEVBQXdCeEssT0FBeEIsQ0FBZjtBQUNBeUssZUFBUzdKLFFBQVQsQ0FBa0JvRixHQUFsQixDQUFzQixDQUFDLEdBQXZCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CO0FBQ0F5RSxlQUFTakssVUFBVCxHQUFzQixLQUF0QjtBQUNBaUssZUFBU2hLLGFBQVQsR0FBeUIsS0FBekI7O0FBRUEsVUFBSWlLLFVBQVUsSUFBSTlLLE1BQU1XLElBQVYsQ0FBZWlLLE9BQWYsRUFBd0J4SyxPQUF4QixDQUFkO0FBQ0EwSyxjQUFROUosUUFBUixDQUFpQm9GLEdBQWpCLENBQXFCLEdBQXJCLEVBQTBCLENBQTFCLEVBQTZCLENBQTdCO0FBQ0EwRSxjQUFRbEssVUFBUixHQUFxQixLQUFyQjtBQUNBa0ssY0FBUWpLLGFBQVIsR0FBd0IsS0FBeEI7O0FBRUEsVUFBSWtLLFdBQVcsSUFBSS9LLE1BQU0yRyxnQkFBVixDQUEyQixDQUEzQixFQUE4QixDQUE5QixFQUFpQyxDQUFqQyxFQUFvQyxDQUFwQyxDQUFmO0FBQ0EsVUFBSXFFLE9BQU8sSUFBSWhMLE1BQU1XLElBQVYsQ0FBZW9LLFFBQWYsRUFBeUIzSyxPQUF6QixDQUFYO0FBQ0E0SyxXQUFLaEcsS0FBTCxDQUFXb0IsR0FBWCxDQUFlLEdBQWYsRUFBb0IsQ0FBcEIsRUFBdUIsR0FBdkI7QUFDQTRFLFdBQUtoSyxRQUFMLENBQWNvRixHQUFkLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLENBQXhCO0FBQ0E0RSxXQUFLcEssVUFBTCxHQUFrQixLQUFsQjtBQUNBb0ssV0FBS25LLGFBQUwsR0FBcUIsS0FBckI7O0FBRUEsV0FBS0gsSUFBTCxDQUFVSSxHQUFWLENBQWMrSixRQUFkLEVBQXdCQyxPQUF4QixFQUFpQ0UsSUFBakM7QUFDRDs7Ozs7O3lEQTlla0JsTCxJOzs7Ozs7OztBQ0xyQjtBQUNBLElBQU1tTCxZQUFZO0FBQ2hCLGNBQVksSUFBSWpMLE1BQU1LLG1CQUFWLENBQThCLEVBQUNDLE9BQU8sd0RBQUFsQixDQUFPRyxLQUFmLEVBQXNCZ0IsYUFBYSxJQUFuQyxFQUE5QixDQURJO0FBRWhCLGNBQVksSUFBSVAsTUFBTVMsaUJBQVYsQ0FBNEIsRUFBQ0gsT0FBTyx3REFBQWxCLENBQU9LLEtBQWYsRUFBc0JjLGFBQWEsSUFBbkMsRUFBNUIsQ0FGSTtBQUdoQixjQUFZLElBQUlQLE1BQU1LLG1CQUFWLENBQThCLEVBQUNDLE9BQU8sd0RBQUFsQixDQUFPTSxLQUFmLEVBQXNCYSxhQUFhLElBQW5DLEVBQTlCLENBSEk7QUFJaEIsZUFBYSxJQUFJUCxNQUFNa0wsa0JBQVYsQ0FBNkIsRUFBN0I7QUFKRyxDQUFsQjs7QUFPQSx5REFBZUQsU0FBZixFOzs7Ozs7QUNSQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLG1CQUFtQjtBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0Msb0JBQW9CO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdDQUF3Qyw0QkFBNEI7QUFDcEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNULDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qix1QkFBdUI7QUFDckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSx1Q0FBdUMsMEJBQTBCO0FBQ2pFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0IsMEJBQTBCLGVBQWU7QUFDeEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7OztBQzVjRDs7QUFFQSxJQUFNRSxpQkFBTjs7QUFFQSx5REFBZTs7QUFFYkMsVUFBUSxzQkFBNEI7QUFBQSxRQUExQkMsSUFBMEIsUUFBMUJBLElBQTBCO0FBQUEsUUFBcEJDLEVBQW9CLFFBQXBCQSxFQUFvQjtBQUFBLFFBQWhCQyxJQUFnQixRQUFoQkEsSUFBZ0I7QUFBQSxRQUFWQyxJQUFVLFFBQVZBLElBQVU7O0FBQ2xDLFFBQU1DLGVBQU47QUFDQTtBQUNBLFFBQU1DLE9BQU8sSUFBSUMsUUFBSixFQUFiO0FBQ0FELFNBQUtFLE1BQUwsU0FBb0JQLElBQXBCO0FBQ0FLLFNBQUtFLE1BQUwsT0FBa0JOLEVBQWxCO0FBQ0FJLFNBQUtFLE1BQUwsU0FBb0JMLElBQXBCO0FBQ0E7O0FBRUEsV0FBTyx3REFBQU0sQ0FBTVYsR0FBTixFQUFXLEVBQUNNLGNBQUQsRUFBU0MsVUFBVCxFQUFYLEVBQ0pJLElBREksQ0FDQztBQUFBLGFBQUtDLEVBQUVDLElBQUYsRUFBTDtBQUFBLEtBREQsQ0FBUDtBQUVELEdBYlk7O0FBZWJDLFFBQU0sZ0JBQU07QUFDVixXQUFPLHdEQUFBSixDQUFTVixHQUFULHFCQUNKVyxJQURJLENBQ0M7QUFBQSxhQUFLQyxFQUFFQyxJQUFGLEVBQUw7QUFBQSxLQURELENBQVA7QUFFRCxHQWxCWTs7QUFvQmJFLFdBQVMscUJBQU07QUFDYixRQUFNVCxjQUFOO0FBQ0EsV0FBTyx3REFBQUksQ0FBU1YsR0FBVCxTQUFnQkcsRUFBaEIsRUFBc0IsRUFBQ0csY0FBRCxFQUF0QixFQUFnQ0ssSUFBaEMsQ0FBcUM7QUFBQSxhQUFLQyxFQUFFQyxJQUFGLEVBQUw7QUFBQSxLQUFyQyxDQUFQO0FBQ0Q7QUF2QlksQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUFBLElBQU1HLGVBQWVDLE9BQU9ELFlBQVAsSUFBdUJDLE9BQU9DLGtCQUFuRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQyxpQkFBSjtBQUFBLElBQWNDLGlCQUFkO0FBQ0EsSUFBTUMsT0FBT0MsU0FBU0MsY0FBVCxjQUFiO0FBQ0EsSUFBTUMsU0FBU0YsU0FBU0MsY0FBVCxTQUFmOztBQUVBLElBQUlFLGVBQWUsRUFBbkI7QUFBQSxJQUNJQyw4QkFESjs7QUFHQSxJQUFJQyxtQkFBbUIsQ0FBdkI7QUFBQSxJQUNJQywwQkFBMEIsQ0FEOUI7QUFBQSxJQUVJQyxpQkFBaUIsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLElBQVgsRUFBaUIsSUFBakIsRUFBdUIsSUFBdkIsRUFBNkIsSUFBN0IsQ0FGckI7QUFBQSxJQUdJQyxZQUFZRCxlQUFlLENBQWYsQ0FIaEI7QUFBQSxJQUlJRSxhQUFhLEdBSmpCO0FBQUEsSUFLSUMsZUFBZSxJQUxuQjs7QUFPQSxJQUFNQyxPQUFPLFNBQVBBLElBQU8sR0FBTTtBQUNqQmIsYUFBVyxJQUFJSixZQUFKLEVBQVg7QUFDQUcsYUFBVyxpRkFBQWUsQ0FBZ0IsSUFBaEIsQ0FBWDtBQUNBLE1BQUksQ0FBQ2YsUUFBTCxFQUFlRixPQUFPa0IsUUFBUCxHQUFrQix3QkFBbEI7O0FBRWZDLEVBQUEsNkRBQUFBLENBQVFyQixPQUFSLENBQWdCSSxRQUFoQixFQUEwQlIsSUFBMUIsQ0FBK0IsYUFBSztBQUNsQyxRQUFJMEIsRUFBRUMsVUFBTixFQUFrQnJCLE9BQU9rQixRQUFQLEdBQWtCLHdCQUFsQjtBQUNsQmIsYUFBU0MsY0FBVCxTQUFnQ2dCLFNBQWhDLEdBQTRDRixFQUFFakMsSUFBOUM7QUFDQWtCLGFBQVNDLGNBQVQsZ0JBQXVDaUIsR0FBdkMsa0JBQTBESCxFQUFFbEMsRUFBNUQ7O0FBRUFzQyxlQUFXLFlBQU07QUFDZixVQUFNQyxlQUFlLElBQUlDLFlBQUosQ0FDbkJ2QixRQURtQixFQUNULGdCQUFjaUIsRUFBRWxDLEVBQWhCLFVBRFMsRUFDa0Isc0JBQWM7O0FBRWpELFlBQUl5QyxPQUFPLEtBQVg7QUFDQSxZQUFJQyxlQUFKOztBQUVBdkIsaUJBQVNDLGNBQVQsV0FBa0N1QixnQkFBbEMsVUFBNkQsWUFBTTtBQUNqRUYsaUJBQU8sQ0FBQ0EsSUFBUjtBQUNBQyxpQkFBT0UsSUFBUDtBQUNELFNBSEQ7O0FBS0FoQixxQkFBYSxDQUFiOztBQUVBUCxlQUFPc0IsZ0JBQVAsVUFBaUMsWUFBTTtBQUNyQ0QsbUJBQVMsRUFBVDtBQUNBQSxtQkFBU3pCLFNBQVM0QixrQkFBVCxFQUFUO0FBQ0FILGlCQUFPSSxNQUFQLEdBQWdCQyxXQUFXLENBQVgsQ0FBaEI7O0FBRUE7O0FBRUFMLGlCQUFPTSxPQUFQLENBQWV6QixxQkFBZjtBQUNBbUIsaUJBQU9ELElBQVAsR0FBY0EsSUFBZDtBQUNBQyxpQkFBT08sS0FBUDtBQUNELFNBVkQ7QUFZRCxPQXpCa0IsQ0FBckI7O0FBNEJBVixtQkFBYVcsSUFBYjtBQUNBQztBQUNBO0FBRUQsS0FqQ0QsRUFpQ0csSUFqQ0g7QUFtQ0QsR0F4Q0Q7QUF5Q0QsQ0E5Q0Q7O0FBZ0RBLElBQU1DLHNCQUFzQixTQUF0QkEsbUJBQXNCLENBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFPQyxDQUFQLEVBQWE7QUFDdkMsU0FBT0YsSUFBSSxDQUFDQyxJQUFJRCxDQUFMLElBQVVFLENBQXJCO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNSixnQkFBZ0IsU0FBaEJBLGFBQWdCLEdBQU07O0FBSTFCLE1BQUk1QixxQkFBSixFQUEyQjtBQUN6QkEsMEJBQXNCaUMsVUFBdEI7QUFDRDs7QUFFRCxNQUFJdkMsU0FBU3dDLHFCQUFiLEVBQW9DO0FBQ2xDbEMsNEJBQXdCTixTQUFTd0MscUJBQVQsQ0FBK0I5QixTQUEvQixFQUEwQyxDQUExQyxFQUE2QyxDQUE3QyxDQUF4QjtBQUNELEdBRkQsTUFFTyxJQUFJVixTQUFTeUMsb0JBQWIsRUFBbUM7QUFDeENuQyw0QkFBd0JOLFNBQVN5QyxvQkFBVCxDQUE4Qi9CLFNBQTlCLEVBQXlDLENBQXpDLEVBQTRDLENBQTVDLENBQXhCO0FBQ0Q7O0FBRURKLHdCQUFzQnVCLE1BQXRCLEdBQStCLElBQUlhLFlBQUosQ0FBaUJoQyxZQUFZLENBQTdCLENBQS9CO0FBQ0FKLHdCQUFzQnFDLFdBQXRCLEdBQW9DQyxXQUFXbEMsU0FBWCxDQUFwQzs7QUFFQUosd0JBQXNCdUMsY0FBdEIsR0FBdUMsVUFBU0MsS0FBVCxFQUFnQjs7QUFFckQsUUFBSUMsWUFBWUQsTUFBTUUsV0FBTixDQUFrQkMsY0FBbEIsQ0FBaUMsQ0FBakMsQ0FBaEI7QUFDQSxRQUFJQyxhQUFhSixNQUFNSyxZQUFOLENBQW1CRixjQUFuQixDQUFrQyxDQUFsQyxDQUFqQjs7QUFFQSxTQUFLRyxJQUFJLENBQVQsRUFBWUEsSUFBSUwsVUFBVU0sTUFBMUIsRUFBa0NELEdBQWxDLEVBQXVDOztBQUVyQztBQUNBTCxnQkFBVUssQ0FBVixLQUFnQixLQUFLVCxXQUFMLENBQWlCUyxDQUFqQixDQUFoQjs7QUFFQTtBQUNBLFdBQUt2QixNQUFMLENBQVl1QixDQUFaLElBQWlCLEtBQUt2QixNQUFMLENBQVl1QixJQUFJMUMsU0FBaEIsQ0FBakI7O0FBRUE7QUFDQSxXQUFLbUIsTUFBTCxDQUFZdUIsSUFBSTFDLFNBQWhCLElBQTZCLEdBQTdCO0FBQ0Q7O0FBRUQ7QUFDQSxRQUFJNEMsWUFBWSxJQUFJWixZQUFKLENBQWlCaEMsWUFBWSxDQUE3QixDQUFoQjtBQUNBLFNBQUssSUFBSTBDLElBQUksQ0FBUixFQUFXRyxJQUFJLEdBQXBCLEVBQXlCSCxJQUFJMUMsU0FBN0IsRUFBd0MwQyxLQUFLRyxLQUFLNUMsVUFBbEQsRUFBOEQ7O0FBRTVELFVBQUk2QyxRQUFRNU4sS0FBSzZOLEtBQUwsQ0FBV0YsQ0FBWCxJQUFnQjdDLFNBQTVCO0FBQ0EsVUFBSTBCLElBQUlXLFVBQVVTLEtBQVYsQ0FBUjtBQUNBLFVBQUluQixJQUFJVSxVQUFVLENBQUNTLFFBQVEsQ0FBVCxJQUFjOUMsU0FBeEIsQ0FBUjtBQUNBNEMsZ0JBQVVGLENBQVYsS0FBZ0JqQixvQkFBb0JDLENBQXBCLEVBQXVCQyxDQUF2QixFQUEwQmtCLElBQUksR0FBOUIsSUFBcUMsS0FBS1osV0FBTCxDQUFpQlMsQ0FBakIsQ0FBckQ7QUFDRDs7QUFFRDtBQUNBLFNBQUtBLElBQUksQ0FBVCxFQUFZQSxJQUFJMUMsU0FBaEIsRUFBMkIwQyxLQUFLeE4sS0FBSzhOLEtBQUwsQ0FBV2hELGFBQWEsSUFBSUUsWUFBakIsQ0FBWCxDQUFoQyxFQUE0RTtBQUMxRSxXQUFLMkMsSUFBSSxDQUFULEVBQVlBLEtBQUs3QyxTQUFqQixFQUE0QjZDLEdBQTVCLEVBQWlDO0FBQy9CLGFBQUsxQixNQUFMLENBQVl1QixJQUFJRyxDQUFoQixLQUFzQkQsVUFBVUMsQ0FBVixDQUF0QjtBQUNEO0FBQ0Y7O0FBRUQ7QUFDQSxTQUFLSCxJQUFJLENBQVQsRUFBWUEsSUFBSTFDLFNBQWhCLEVBQTJCMEMsR0FBM0IsRUFBZ0M7QUFDOUJGLGlCQUFXRSxDQUFYLElBQWdCLEtBQUt2QixNQUFMLENBQVl1QixDQUFaLENBQWhCO0FBQ0Q7QUFDRixHQXRDRDs7QUF3Q0E5Qyx3QkFBc0J5QixPQUF0QixDQUE4Qi9CLFNBQVMyRCxXQUF2QztBQUVELENBM0REOztBQThEQSxJQUFNZixhQUFhLFNBQWJBLFVBQWEsU0FBVTtBQUMzQixNQUFNL0MsU0FBUyxJQUFJNkMsWUFBSixDQUFpQlcsTUFBakIsQ0FBZjtBQUNBLE9BQUssSUFBSUQsSUFBSSxDQUFiLEVBQWdCQSxJQUFJQyxNQUFwQixFQUE0QkQsR0FBNUIsRUFBaUM7QUFDN0J2RCxXQUFPdUQsQ0FBUCxJQUFZLE9BQU8sSUFBSXhOLEtBQUs0QixHQUFMLENBQVMsSUFBSTVCLEtBQUswQixFQUFULEdBQWM4TCxDQUFkLElBQW1CQyxTQUFTLENBQTVCLENBQVQsQ0FBWCxDQUFaO0FBQ0g7QUFDRCxTQUFPeEQsTUFBUDtBQUNELENBTkQ7QUFPQWdCLE87Ozs7Ozs7QUM1SUEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixPQUFRO0FBQzlCOUIsU0FBT0EsS0FBSzRFLE9BQUwsQ0FBYSxNQUFiLEVBQXFCLEtBQXJCLEVBQTRCQSxPQUE1QixDQUFvQyxNQUFwQyxFQUE0QyxLQUE1QyxDQUFQO0FBQ0EsTUFBTUMsUUFBUSxJQUFJQyxNQUFKLENBQVcsV0FBVzlFLElBQVgsR0FBa0IsV0FBN0IsQ0FBZDtBQUNBLE1BQU0rRSxVQUFVRixNQUFNRyxJQUFOLENBQVdqRCxTQUFTa0QsTUFBcEIsQ0FBaEI7QUFDQSxTQUFPRixZQUFZLElBQVosR0FBbUIsS0FBbkIsR0FBMkJHLG1CQUFtQkgsUUFBUSxDQUFSLEVBQVdILE9BQVgsQ0FBbUIsS0FBbkIsRUFBMEIsR0FBMUIsQ0FBbkIsQ0FBbEM7QUFDRCxDQUxEOztBQU9BLHlEQUFlOUMsZUFBZixFIiwiZmlsZSI6ImpzL3NhbnRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGU2NGJhMmFjMTRiNGEwMjY5MWQyIiwiY29uc3QgQ29sb3JzID0ge1xuICBza2luOiAweGZmZTBiZCxcbiAgZnJlY2tsZXM6IDB4Y2ZiYTk2LFxuICB3aGl0ZTogMHhlOWViZWUsXG4gIGdsYXNzZXM6IDB4ZjljNDIxLFxuICB0ZWV0aDogMHhmZmZmZmYsXG4gIGJsYWNrOiAweDJlMmUyZSxcbiAgZXllOiAweDYyOTVhOCxcbiAgaGF0OiAweDcyMDMxNFxufTtcbmV4cG9ydCBkZWZhdWx0IENvbG9ycztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9vYmplY3RzL2NvbG9ycy5qcyIsIi8vIHRoZSB3aGF0d2ctZmV0Y2ggcG9seWZpbGwgaW5zdGFsbHMgdGhlIGZldGNoKCkgZnVuY3Rpb25cbi8vIG9uIHRoZSBnbG9iYWwgb2JqZWN0ICh3aW5kb3cgb3Igc2VsZilcbi8vXG4vLyBSZXR1cm4gdGhhdCBhcyB0aGUgZXhwb3J0IGZvciB1c2UgaW4gV2VicGFjaywgQnJvd3NlcmlmeSBldGMuXG5yZXF1aXJlKCd3aGF0d2ctZmV0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gc2VsZi5mZXRjaC5iaW5kKHNlbGYpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1mZXRjaC9mZXRjaC1ucG0tYnJvd3NlcmlmeS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBDb2xvcnMgZnJvbSAnLi4vb2JqZWN0cy9jb2xvcnMnO1xuaW1wb3J0IE1hdCBmcm9tICcuLi9vYmplY3RzL01hdGVyaWFscyc7XG5cbmxldCBpc0JsaW5raW5nID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcblxuICAgIGxldCBoZWFkR2VvbSA9IG5ldyBUSFJFRS5Cb3hCdWZmZXJHZW9tZXRyeSgxNiwgMTYsIDE2KTtcbiAgICBsZXQgc2tpbk1hdCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogQ29sb3JzLnNraW4sIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG4gICAgbGV0IGV5ZU1hdCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5leWUsIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG5cbiAgICB0aGlzLmhlYWQgPSBuZXcgVEhSRUUuTWVzaChoZWFkR2VvbSxza2luTWF0KTtcbiAgICB0aGlzLmhlYWQuY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgdGhpcy5oZWFkLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLm1lc2guYWRkKHRoaXMuaGVhZCk7XG5cbiAgICB0aGlzLmJlYXJkID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgdGhpcy5iZWFyZC5wb3NpdGlvbi55ID0gLTc7XG4gICAgdGhpcy5iZWFyZC5wb3NpdGlvbi56ID0gMC41O1xuICAgIHRoaXMuaGVhZC5hZGQodGhpcy5iZWFyZCk7XG5cbiAgICB0aGlzLkJlYXJkKCk7XG4gICAgdGhpcy5HbGFzc2VzKCk7XG4gICAgdGhpcy5IYWlyKCk7XG4gICAgdGhpcy5FeWVzKCk7XG4gICAgdGhpcy5FeWVCcm93cygpO1xuICAgIHRoaXMuSGF0KCk7XG4gICAgdGhpcy5GcmVja2xlcygpO1xuICAgIHRoaXMuRmVhdHVyZXMoKTtcbiAgICB0aGlzLmlkbGUoKTtcbiAgICB0aGlzLm5vcm1hbGl6ZSgpO1xuICB9XG5cbiAgbm9ybWFsaXplKHYsIHZtaW4sIHZtYXgsIHRtaW4sIHRtYXgpIHtcbiAgICBjb25zdCBudiA9IE1hdGgubWF4KE1hdGgubWluKHYsIHZtYXgpLCB2bWluKTtcbiAgICBjb25zdCBkdiA9IHZtYXggLSB2bWluO1xuICAgIGNvbnN0IHBjID0gKG52IC0gdm1pbikgLyBkdjtcbiAgICBjb25zdCBkdCA9IHRtYXggLSB0bWluO1xuICAgIGNvbnN0IHR2ID0gdG1pbiArIChwYyAqIGR0KTtcbiAgICByZXR1cm4gdHY7XG4gIH1cblxuICB1cGRhdGVCb2R5KHNwZWVkLCBleWVCbHVlUmlnaHRQb3NYLCBleWVCbHVlTGVmdFBvc1gsIGV5ZUJsdWVSaWdodFBvc1ksIGV5ZUJsdWVMZWZ0UG9zWSwgZXllQnJvd1JpZ2h0UG9zWSwgZXllQnJvd0xlZnRQb3NZKSB7XG4gICAgdGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24ueCArPSAoZXllQmx1ZVJpZ2h0UG9zWCAtIHRoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLngpIC8gc3BlZWQ7XG4gICAgdGhpcy5leWVCbHVlTGVmdC5wb3NpdGlvbi54ICs9IChleWVCbHVlTGVmdFBvc1ggLSB0aGlzLmV5ZUJsdWVMZWZ0LnBvc2l0aW9uLngpIC8gc3BlZWQ7XG5cbiAgICB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi55ICs9IChleWVCbHVlUmlnaHRQb3NZIC0gdGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24ueSkgLyBzcGVlZDtcbiAgICB0aGlzLmV5ZUJsdWVMZWZ0LnBvc2l0aW9uLnkgKz0gKGV5ZUJsdWVMZWZ0UG9zWSAtIHRoaXMuZXllQmx1ZUxlZnQucG9zaXRpb24ueSkgLyBzcGVlZDtcblxuICAgIHRoaXMuZXllQnJvd1JpZ2h0LnBvc2l0aW9uLnkgKz0gKGV5ZUJyb3dSaWdodFBvc1kgLSB0aGlzLmV5ZUJyb3dSaWdodC5wb3NpdGlvbi55KSAvIHNwZWVkO1xuICAgIHRoaXMuZXllQnJvd0xlZnQucG9zaXRpb24ueSArPSAoZXllQnJvd0xlZnRQb3NZIC0gdGhpcy5leWVCcm93TGVmdC5wb3NpdGlvbi55KSAvIHNwZWVkO1xuICB9XG5cbiAgaWRsZSh4VGFyZ2V0ID0gMCwgeVRhcmdldCA9IDApIHtcbiAgICBsZXQgZGlzdGFuY2UgPSAxO1xuXG4gICAgdGhpcy5oZWFkLnJvdGF0aW9uLnogPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDUpICogTWF0aC5QSSAqIDAuMDA1O1xuICAgIHRoaXMuaGVhZC5yb3RhdGlvbi54ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDA0KSAqIE1hdGguUEkgKiAwLjAzO1xuXG4gICAgY29uc3QgZXllQmx1ZVJpZ2h0UG9zWCA9IHRoaXMubm9ybWFsaXplKHhUYXJnZXQsIC0yMDAsIDIwMCwgLTAuNiwgMC42KTtcbiAgICBjb25zdCBleWVCbHVlTGVmdFBvc1ggPSB0aGlzLm5vcm1hbGl6ZSh4VGFyZ2V0LCAtMjAwLCAyMDAsIC0wLjYsIDAuNik7XG5cbiAgICBjb25zdCBleWVCbHVlUmlnaHRQb3NZID0gdGhpcy5ub3JtYWxpemUoeVRhcmdldCwgLTIwMCwgMjAwLCAwLjYsIC0wLjYpO1xuICAgIGNvbnN0IGV5ZUJsdWVMZWZ0UG9zWSA9IHRoaXMubm9ybWFsaXplKHlUYXJnZXQsIC0yMDAsIDIwMCwgMC42LCAtMC42KTtcblxuICAgIGNvbnN0IGV5ZUJyb3dSaWdodFBvc1kgPSB0aGlzLm5vcm1hbGl6ZSh4VGFyZ2V0LCAtMjAwLCAyMDAsIC0xLCAwLjgpO1xuICAgIGNvbnN0IGV5ZUJyb3dMZWZ0UG9zWSA9IHRoaXMubm9ybWFsaXplKHhUYXJnZXQsIC0yMDAsIDIwMCwgLTEsIDAuOCk7XG5cbiAgICB0aGlzLm1vdXN0YWNoZS5wb3NpdGlvbi55ID0gTWF0aC5jb3MoRGF0ZS5ub3coKSAqIDAuMDEpICogZGlzdGFuY2UgLyA0O1xuICAgIHRoaXMubW91c3RhY2hlLnJvdGF0aW9uLnogPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMSkgKiBNYXRoLlBJICogMC4wMTtcblxuICAgIHRoaXMubWVzaC5yb3RhdGlvbi55ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDAyKSAqIE1hdGguUEkgKiAwLjA1O1xuICAgIHRoaXMudXBkYXRlQm9keSgxMCwgZXllQmx1ZVJpZ2h0UG9zWCwgZXllQmx1ZUxlZnRQb3NYLCBleWVCbHVlUmlnaHRQb3NZLCBleWVCbHVlTGVmdFBvc1ksIGV5ZUJyb3dSaWdodFBvc1ksIGV5ZUJyb3dMZWZ0UG9zWSk7XG4gIH1cblxuICBCZWFyZCgpIHtcbiAgICBsZXQgYmVhcmRHZW9tTWVyZ2VkID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XG5cbiAgICBsZXQgYmVhcmQxR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyLCAxMCwgMTYpO1xuXG4gICAgbGV0IGJlYXJkMSA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkMUdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmQxLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDksIDAsIDApKTtcbiAgICBiZWFyZDEudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkMS5nZW9tZXRyeSwgYmVhcmQxLm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQyID0gbmV3IFRIUkVFLk1lc2goYmVhcmQxR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBiZWFyZDIuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oNywgLTIsIDIpKTtcbiAgICBiZWFyZDIuc2NhbGUueiA9IDAuODtcbiAgICBiZWFyZDIudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkMi5nZW9tZXRyeSwgYmVhcmQyLm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQzID0gYmVhcmQxLmNsb25lKCk7XG4gICAgYmVhcmQzLnBvc2l0aW9uLnggPSAtYmVhcmQxLnBvc2l0aW9uLng7XG4gICAgYmVhcmQzLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDMuZ2VvbWV0cnksIGJlYXJkMy5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkNCA9IGJlYXJkMi5jbG9uZSgpO1xuICAgIGJlYXJkNC5wb3NpdGlvbi54ID0gLWJlYXJkMi5wb3NpdGlvbi54O1xuICAgIGJlYXJkNC51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQ0Lmdlb21ldHJ5LCBiZWFyZDQubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDJHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDMsIDE0LCAxMCk7XG4gICAgYmVhcmQyR2VvbS52ZXJ0aWNlc1syXS56IC09IDI7XG4gICAgYmVhcmQyR2VvbS52ZXJ0aWNlc1s3XS56IC09IDI7XG5cbiAgICBsZXQgYmVhcmQ1ID0gbmV3IFRIUkVFLk1lc2goYmVhcmQyR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBiZWFyZDUuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oNSwgLTUsIDQpKTtcbiAgICBiZWFyZDUudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkNS5nZW9tZXRyeSwgYmVhcmQ1Lm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQzR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyLjUsIDE0LCAxMCk7XG4gICAgYmVhcmQzR2VvbS52ZXJ0aWNlc1syXS56IC09IDI7XG4gICAgYmVhcmQzR2VvbS52ZXJ0aWNlc1s3XS56IC09IDI7XG5cbiAgICBsZXQgYmVhcmQ2ID0gbmV3IFRIUkVFLk1lc2goYmVhcmQzR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBiZWFyZDYuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oMi41LCAtNiwgNikpO1xuICAgIGJlYXJkNi51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQ2Lmdlb21ldHJ5LCBiZWFyZDYubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDcgPSBiZWFyZDUuY2xvbmUoKTtcbiAgICBiZWFyZDcucG9zaXRpb24ueCA9IC1iZWFyZDUucG9zaXRpb24ueDtcbiAgICBiZWFyZDcudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkNy5nZW9tZXRyeSwgYmVhcmQ3Lm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQ4ID0gYmVhcmQ2LmNsb25lKCk7XG4gICAgYmVhcmQ4LnBvc2l0aW9uLnggPSAtYmVhcmQ2LnBvc2l0aW9uLng7XG4gICAgYmVhcmQ4LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDguZ2VvbWV0cnksIGJlYXJkOC5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkNEdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMi41LCAxNC41LCAxMCk7XG4gICAgYmVhcmQ0R2VvbS52ZXJ0aWNlc1syXS56IC09IDE7XG4gICAgYmVhcmQ0R2VvbS52ZXJ0aWNlc1s3XS56IC09IDE7XG5cbiAgICBsZXQgYmVhcmQ5ID0gbmV3IFRIUkVFLk1lc2goYmVhcmQ0R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBiZWFyZDkuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oMCwgLTcsIDUuNzUpKTtcbiAgICBiZWFyZDkudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkOS5nZW9tZXRyeSwgYmVhcmQ5Lm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQ1R2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSg0LCA4LCA4KTtcbiAgICBsZXQgYmVhcmQxMCA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkNUdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmQxMC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigtNiwgLTEsIC0yKSk7XG4gICAgYmVhcmQxMC51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQxMC5nZW9tZXRyeSwgYmVhcmQxMC5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkMTEgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDVHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkMTEuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oMCwgLTUsIC0yKSk7XG4gICAgYmVhcmQxMS51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQxMS5nZW9tZXRyeSwgYmVhcmQxMS5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkTWVyZ2VkID0gbmV3IFRIUkVFLk1lc2goYmVhcmRHZW9tTWVyZ2VkLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkTWVyZ2VkLmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgIGJlYXJkTWVyZ2VkLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuXG4gICAgbGV0IG1vdXRoR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxMCwgNCwgMSk7XG4gICAgbGV0IG1vdXRoID0gbmV3IFRIUkVFLk1lc2gobW91dGhHZW9tLCBNYXQuYmxhY2tNYXQpO1xuICAgIG1vdXRoLnBvc2l0aW9uLnNldCgwLCAyLCA4KTtcbiAgICBtb3V0aC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgbW91dGgucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG5cbiAgICBsZXQgdGVldGhHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEwLCAxLCAxKTtcbiAgICBsZXQgdGVldGggPSBuZXcgVEhSRUUuTWVzaCh0ZWV0aEdlb20sIE1hdC50ZWV0aE1hdCk7XG4gICAgdGVldGgucG9zaXRpb24uc2V0KDAsIDAuNSwgMC4xKTtcbiAgICB0ZWV0aC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGVldGgucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG4gICAgbW91dGguYWRkKHRlZXRoKVxuXG4gICAgdGhpcy5iZWFyZC5hZGQoYmVhcmRNZXJnZWQsIG1vdXRoKTtcblxuICAgIGxldCBtb3VzdGFjaGVHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDE0LCAzLCAzLCAzKTtcbiAgICBtb3VzdGFjaGVHZW9tLnZlcnRpY2VzWzBdLnkgLT0gMjtcbiAgICBtb3VzdGFjaGVHZW9tLnZlcnRpY2VzWzFdLnkgLT0gMjtcbiAgICBtb3VzdGFjaGVHZW9tLnZlcnRpY2VzWzJdLnkgLT0gMjtcbiAgICBtb3VzdGFjaGVHZW9tLnZlcnRpY2VzWzNdLnkgLT0gMjtcbiAgICBtb3VzdGFjaGVHZW9tLnZlcnRpY2VzWzRdLnkgLT0gMjtcbiAgICBtb3VzdGFjaGVHZW9tLnZlcnRpY2VzWzVdLnkgLT0gMjtcbiAgICBtb3VzdGFjaGVHZW9tLnZlcnRpY2VzWzZdLnkgLT0gMjtcbiAgICBtb3VzdGFjaGVHZW9tLnZlcnRpY2VzWzddLnkgLT0gMjtcbiAgICBtb3VzdGFjaGVHZW9tLnZlcnRpY2VzWzhdLnggLT0gMTtcbiAgICBtb3VzdGFjaGVHZW9tLnZlcnRpY2VzWzldLnggKz0gMTtcblxuICAgIG1vdXN0YWNoZUdlb20uYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oMCwgNCwgMCkpO1xuICAgIHRoaXMubW91c3RhY2hlID0gbmV3IFRIUkVFLk1lc2gobW91c3RhY2hlR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICB0aGlzLm1vdXN0YWNoZS5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICB0aGlzLm1vdXN0YWNoZS5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcblxuICAgIHRoaXMubW91c3RhY2hlLnBvc2l0aW9uLnNldCgwLCAwLCA5KTtcbiAgICB0aGlzLmJlYXJkLmFkZCh0aGlzLm1vdXN0YWNoZSk7XG4gIH1cblxuICBHbGFzc2VzKCkge1xuXG4gICAgdGhpcy5nbGFzc2VzID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgdGhpcy5nbGFzc2VzLnBvc2l0aW9uLnNldCgwLCAwLCA5KTtcbiAgICB0aGlzLmhlYWQuYWRkKHRoaXMuZ2xhc3Nlcyk7XG4gICAgbGV0IGdsYXNzZXNNYXQgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuZ2xhc3NlcywgZmxhdFNoYWRpbmc6IHRydWV9KTtcblxuICAgIGxldCBmcmFtZUdlb21NZXJnZWQgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcblxuICAgIGxldCBmcmFtZU91dGVyR2VvbSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDMsIDMsIDAuNSwgMzIpXG4gICAgbGV0IGZyYW1lSW5uZXJHZW9tID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMi43LCAyLjcsIDAuNSwgMzIpXG5cbiAgICBmcmFtZU91dGVyR2VvbS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblgoLU1hdGguUEkgLyAyKSk7XG4gICAgZnJhbWVJbm5lckdlb20uYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25YKC1NYXRoLlBJIC8gMikpO1xuXG4gICAgbGV0IGZyYW1lQlNQID0gbmV3IFRocmVlQlNQKGZyYW1lT3V0ZXJHZW9tKTtcbiAgICBsZXQgZnJhbWVDdXRCU1AgPSBuZXcgVGhyZWVCU1AoZnJhbWVJbm5lckdlb20pO1xuXG4gICAgbGV0IGZyYW1laW50ZXJzZWN0aW9uQlNQID0gZnJhbWVCU1Auc3VidHJhY3QoZnJhbWVDdXRCU1ApO1xuICAgIGxldCBmcmFtZUxlZnQgPSBmcmFtZWludGVyc2VjdGlvbkJTUC50b01lc2goZ2xhc3Nlc01hdCk7XG5cbiAgICBmcmFtZUxlZnQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oNCwgMywgMCkpO1xuICAgIGZyYW1lTGVmdC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmFtZUdlb21NZXJnZWQubWVyZ2UoZnJhbWVMZWZ0Lmdlb21ldHJ5LCBmcmFtZUxlZnQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZVJpZ2h0ID0gZnJhbWVMZWZ0LmNsb25lKCk7XG4gICAgZnJhbWVSaWdodC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooTWF0aC5QSSAvIDMwKSk7XG4gICAgZnJhbWVSaWdodC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigtNy41LCAtMC4yNSwgMCkpO1xuICAgIGZyYW1lUmlnaHQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJhbWVHZW9tTWVyZ2VkLm1lcmdlKGZyYW1lUmlnaHQuZ2VvbWV0cnksIGZyYW1lUmlnaHQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZU1pZEdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMiwgLjMsIC41KTtcbiAgICBsZXQgZnJhbWVNaWQgPSBuZXcgVEhSRUUuTWVzaChmcmFtZU1pZEdlb20sIGdsYXNzZXNNYXQpO1xuICAgIGZyYW1lTWlkLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDAsIDMuMywgLTAuMykpO1xuICAgIGZyYW1lTWlkLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyYW1lR2VvbU1lcmdlZC5tZXJnZShmcmFtZU1pZC5nZW9tZXRyeSwgZnJhbWVNaWQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZUVuZEdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMS41LCAuNSwgMSk7XG4gICAgbGV0IGZyYW1lRW5kUmlnaHQgPSBuZXcgVEhSRUUuTWVzaChmcmFtZUVuZEdlb20sIGdsYXNzZXNNYXQpO1xuICAgIGZyYW1lRW5kUmlnaHQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oNy41LCAzLCAwKSk7XG4gICAgZnJhbWVFbmRSaWdodC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmFtZUdlb21NZXJnZWQubWVyZ2UoZnJhbWVFbmRSaWdodC5nZW9tZXRyeSwgZnJhbWVFbmRSaWdodC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lRW5kTGVmdCA9IGZyYW1lRW5kUmlnaHQuY2xvbmUoKTtcbiAgICBmcmFtZUVuZExlZnQucG9zaXRpb24ueCA9IC1mcmFtZUVuZFJpZ2h0LnBvc2l0aW9uLng7XG4gICAgZnJhbWVFbmRMZWZ0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyYW1lR2VvbU1lcmdlZC5tZXJnZShmcmFtZUVuZExlZnQuZ2VvbWV0cnksIGZyYW1lRW5kTGVmdC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lU3Bva2VHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIDAuNSwgMTIpO1xuICAgIGxldCBmcmFtZVNwb2tlUmlnaHQgPSBuZXcgVEhSRUUuTWVzaChmcmFtZVNwb2tlR2VvbSwgZ2xhc3Nlc01hdCk7XG4gICAgZnJhbWVTcG9rZVJpZ2h0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDgsIDMsIC01LjUpKTtcbiAgICBmcmFtZVNwb2tlUmlnaHQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJhbWVHZW9tTWVyZ2VkLm1lcmdlKGZyYW1lU3Bva2VSaWdodC5nZW9tZXRyeSwgZnJhbWVTcG9rZVJpZ2h0Lm1hdHJpeCk7XG5cbiAgICBsZXQgZnJhbWVTcG9rZUxlZnQgPSBmcmFtZVNwb2tlUmlnaHQuY2xvbmUoKTtcbiAgICBmcmFtZVNwb2tlTGVmdC5wb3NpdGlvbi54ID0gLWZyYW1lU3Bva2VSaWdodC5wb3NpdGlvbi54O1xuICAgIGZyYW1lU3Bva2VMZWZ0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyYW1lR2VvbU1lcmdlZC5tZXJnZShmcmFtZVNwb2tlTGVmdC5nZW9tZXRyeSwgZnJhbWVTcG9rZUxlZnQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZU1lcmdlZCA9IG5ldyBUSFJFRS5NZXNoKGZyYW1lR2VvbU1lcmdlZCwgZ2xhc3Nlc01hdCk7XG4gICAgZnJhbWVNZXJnZWQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIGZyYW1lTWVyZ2VkLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuXG4gICAgdGhpcy5nbGFzc2VzLmFkZChmcmFtZU1lcmdlZCk7XG5cbiAgfVxuXG4gIEhhaXIoKSB7XG5cbiAgICB0aGlzLmhhaXIgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmhhaXIucG9zaXRpb24uc2V0KDAsIDksIDApO1xuICAgIHRoaXMuaGVhZC5hZGQodGhpcy5oYWlyKTtcblxuICAgIGxldCBoYWlyR2VvbU1lcmdlZCA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuXG4gICAgbGV0IGhhaXJGbGF0R2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxMCwgMiwgMTgpO1xuXG4gICAgbGV0IGhhaXIxID0gbmV3IFRIUkVFLk1lc2goaGFpckZsYXRHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGhhaXIxLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWigtTWF0aC5QSSAvIDQwKSk7XG4gICAgaGFpcjEuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oLTQsIC0wLjUsIDApKTtcbiAgICBoYWlyMS51cGRhdGVNYXRyaXgoKTtcbiAgICBoYWlyR2VvbU1lcmdlZC5tZXJnZShoYWlyMS5nZW9tZXRyeSwgaGFpcjEubWF0cml4KTtcblxuICAgIGxldCBoYWlyMiA9IG5ldyBUSFJFRS5NZXNoKGhhaXJGbGF0R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyMi5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooLU1hdGguUEkgLyAxMCkpO1xuICAgIGhhaXIyLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKC0yLCAxLCAwKSk7XG4gICAgaGFpcjIudXBkYXRlTWF0cml4KCk7XG4gICAgaGFpckdlb21NZXJnZWQubWVyZ2UoaGFpcjIuZ2VvbWV0cnksIGhhaXIyLm1hdHJpeCk7XG5cbiAgICBsZXQgaGFpcjMgPSBuZXcgVEhSRUUuTWVzaChoYWlyRmxhdEdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgaGFpcjMuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKC1NYXRoLlBJIC8gNSkpO1xuICAgIGhhaXIzLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDIsIDEsIDApKTtcbiAgICBoYWlyMy51cGRhdGVNYXRyaXgoKTtcbiAgICBoYWlyR2VvbU1lcmdlZC5tZXJnZShoYWlyMy5nZW9tZXRyeSwgaGFpcjMubWF0cml4KTtcblxuICAgIGxldCBoYWlyNCA9IG5ldyBUSFJFRS5NZXNoKGhhaXJGbGF0R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyNC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooLU1hdGguUEkgLyA0KSk7XG4gICAgaGFpcjQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oNiwgMCwgMCkpO1xuICAgIGhhaXI0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGhhaXJHZW9tTWVyZ2VkLm1lcmdlKGhhaXI0Lmdlb21ldHJ5LCBoYWlyNC5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXI2ID0gbmV3IFRIUkVFLk1lc2goaGFpckZsYXRHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGhhaXI2LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWigtTWF0aC5QSSAvIC0zKSk7XG4gICAgaGFpcjYuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oLTcuNzUsIC0uNSwgMCkpO1xuICAgIGhhaXI2LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGhhaXJHZW9tTWVyZ2VkLm1lcmdlKGhhaXI2Lmdlb21ldHJ5LCBoYWlyNi5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXJGbGF0QmFja0dlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTgsIDcsIDYpO1xuICAgIGhhaXJGbGF0QmFja0dlb20udmVydGljZXNbMF0ueCAtPSAxO1xuICAgIGhhaXJGbGF0QmFja0dlb20udmVydGljZXNbMV0ueCAtPSAxO1xuICAgIGhhaXJGbGF0QmFja0dlb20udmVydGljZXNbNF0ueCArPSAxO1xuICAgIGhhaXJGbGF0QmFja0dlb20udmVydGljZXNbNV0ueCArPSAxO1xuXG4gICAgbGV0IGhhaXI1ID0gbmV3IFRIUkVFLk1lc2goaGFpckZsYXRCYWNrR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyNS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigwLCAtNC41LCAtNikpO1xuICAgIGhhaXI1LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGhhaXJHZW9tTWVyZ2VkLm1lcmdlKGhhaXI1Lmdlb21ldHJ5LCBoYWlyNS5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXJNZXJnZWQgPSBuZXcgVEhSRUUuTWVzaChoYWlyR2VvbU1lcmdlZCwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyTWVyZ2VkLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBoYWlyTWVyZ2VkLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuXG4gICAgdGhpcy5oYWlyLmFkZChoYWlyTWVyZ2VkKTtcblxuICB9XG5cbiAgRXllcygpIHtcblxuICAgIHRoaXMuZXllcyA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHRoaXMuZXllcy5wb3NpdGlvbi5zZXQoMCwgMywgOSk7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmV5ZXMpO1xuXG4gICAgbGV0IGV5ZVdoaXRlR2VvbSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDIuNSwgMi41KTtcblxuICAgIGxldCBleWVXaGl0ZVJpZ2h0ID0gbmV3IFRIUkVFLk1lc2goZXllV2hpdGVHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGV5ZVdoaXRlUmlnaHQucG9zaXRpb24uc2V0KC0zLjc1LCAwLCAwKTtcbiAgICBleWVXaGl0ZVJpZ2h0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBleWVXaGl0ZVJpZ2h0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIGxldCBleWVCbHVlR2VvbSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDEuNSwgMS41KTtcblxuICAgIGxldCBleWVNYXQgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuZXllLCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuXG4gICAgdGhpcy5leWVCbHVlUmlnaHQgPSBuZXcgVEhSRUUuTWVzaChleWVCbHVlR2VvbSwgZXllTWF0KTtcbiAgICB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi5zZXQoMCwgMCwgLjAxKTtcbiAgICB0aGlzLmV5ZUJsdWVSaWdodC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5leWVCbHVlUmlnaHQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgZXllV2hpdGVSaWdodC5hZGQodGhpcy5leWVCbHVlUmlnaHQpO1xuXG4gICAgbGV0IGV5ZVB1cGlsR2VvbSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDEsIDEpO1xuXG4gICAgdGhpcy5leWVQdXBpbFJpZ2h0ID0gbmV3IFRIUkVFLk1lc2goZXllUHVwaWxHZW9tLCBNYXQuYmxhY2tNYXQpO1xuICAgIHRoaXMuZXllUHVwaWxSaWdodC5wb3NpdGlvbi5zZXQoMCwgMCwgLjAyKTtcbiAgICB0aGlzLmV5ZVB1cGlsUmlnaHQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuZXllUHVwaWxSaWdodC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmV5ZUJsdWVSaWdodC5hZGQodGhpcy5leWVQdXBpbFJpZ2h0KTtcblxuICAgIGxldCBleWVXaGl0ZUxlZnQgPSBuZXcgVEhSRUUuTWVzaChleWVXaGl0ZUdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgZXllV2hpdGVMZWZ0LnBvc2l0aW9uLnNldCgzLjc1LCAwLCAwKTtcbiAgICBleWVXaGl0ZUxlZnQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIGV5ZVdoaXRlTGVmdC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmV5ZUJsdWVMZWZ0ID0gbmV3IFRIUkVFLk1lc2goZXllQmx1ZUdlb20sIGV5ZU1hdCk7XG4gICAgdGhpcy5leWVCbHVlTGVmdC5wb3NpdGlvbi5zZXQoMCwgMCwgLjAxKTtcbiAgICB0aGlzLmV5ZUJsdWVMZWZ0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmV5ZUJsdWVMZWZ0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIGV5ZVdoaXRlTGVmdC5hZGQodGhpcy5leWVCbHVlTGVmdCk7XG5cbiAgICB0aGlzLmV5ZVB1cGlsTGVmdCA9IG5ldyBUSFJFRS5NZXNoKGV5ZVB1cGlsR2VvbSwgTWF0LmJsYWNrTWF0KTtcbiAgICB0aGlzLmV5ZVB1cGlsTGVmdC5wb3NpdGlvbi5zZXQoMCwgMCwgLjAyKTtcbiAgICB0aGlzLmV5ZVB1cGlsTGVmdC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5leWVQdXBpbExlZnQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5leWVCbHVlTGVmdC5hZGQodGhpcy5leWVQdXBpbExlZnQpO1xuXG4gICAgdGhpcy5leWVzLmFkZChleWVXaGl0ZVJpZ2h0LCBleWVXaGl0ZUxlZnQpO1xuICB9XG5cbiAgRXllQnJvd3MoKSB7XG4gICAgdGhpcy5leWVCcm93cyA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHRoaXMuZXllQnJvd3MucG9zaXRpb24uc2V0KDAsIDYsIDgpO1xuICAgIHRoaXMuaGVhZC5hZGQodGhpcy5leWVCcm93cyk7XG5cbiAgICBsZXQgZXllQnJvd0dlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoNCwgMSwgMSk7XG5cbiAgICB0aGlzLmV5ZUJyb3dSaWdodCA9IG5ldyBUSFJFRS5NZXNoKGV5ZUJyb3dHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIHRoaXMuZXllQnJvd1JpZ2h0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWihNYXRoLlBJIC8gNDUpKTtcbiAgICB0aGlzLmV5ZUJyb3dSaWdodC5wb3NpdGlvbi5zZXQoLTMuNzUsIDAsIDApO1xuICAgIHRoaXMuZXllQnJvd1JpZ2h0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmV5ZUJyb3dSaWdodC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmV5ZUJyb3dMZWZ0ID0gbmV3IFRIUkVFLk1lc2goZXllQnJvd0dlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgdGhpcy5leWVCcm93TGVmdC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooLU1hdGguUEkgLyA0NSkpO1xuICAgIHRoaXMuZXllQnJvd0xlZnQucG9zaXRpb24uc2V0KDMuNzUsIDAsIDApO1xuICAgIHRoaXMuZXllQnJvd0xlZnQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuZXllQnJvd0xlZnQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5leWVCcm93cy5hZGQodGhpcy5leWVCcm93UmlnaHQsIHRoaXMuZXllQnJvd0xlZnQpO1xuICB9XG5cbiAgSGF0KCkge1xuICAgIHRoaXMuaGF0ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgdGhpcy5oYXQucG9zaXRpb24uc2V0KC0wLjIsIDExLCAyLjQpO1xuICAgIHRoaXMuaGVhZC5hZGQodGhpcy5oYXQpO1xuXG4gICAgbGV0IGhhdE1hdCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5oYXQsIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG5cbiAgICBsZXQgYmFuZEdlb20gPSBuZXcgVEhSRUUuVG9ydXNHZW9tZXRyeSg5LCAyLCAxNiwgMTAwKTtcbiAgICBsZXQgYmlnQ29uZUdlb20gPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgxLCAxMSwgMTIsIDE1KTtcbiAgICBsZXQgc21hbGxDb25lR2VvbSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDAuOCwgMywgOSwgMzIpO1xuICAgIGxldCBoYXREaW5nbGVHZW9tID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDEuNSwgOCwgOCk7XG5cbiAgICB0aGlzLmJhbmQgPSBuZXcgVEhSRUUuTWVzaChiYW5kR2VvbSwgTWF0LnRlZXRoTWF0KTtcbiAgICB0aGlzLmJhbmQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25YKE1hdGguUEkgLyAyKSk7XG4gICAgdGhpcy5iYW5kLnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcbiAgICB0aGlzLmJhbmQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuYmFuZC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmJpZ0NvbmUgPSBuZXcgVEhSRUUuTWVzaChiaWdDb25lR2VvbSwgaGF0TWF0KTtcbiAgICB0aGlzLmJpZ0NvbmUucG9zaXRpb24uc2V0KDAsIDYsIDApO1xuICAgIHRoaXMuYmlnQ29uZS5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5iaWdDb25lLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuc21hbGxDb25lID0gbmV3IFRIUkVFLk1lc2goc21hbGxDb25lR2VvbSwgaGF0TWF0KTtcbiAgICB0aGlzLnNtYWxsQ29uZS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblgoTWF0aC5QSSAvIDIpKTtcbiAgICB0aGlzLnNtYWxsQ29uZS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblkoTWF0aC5QSSAvIDIpKTtcbiAgICB0aGlzLnNtYWxsQ29uZS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooTWF0aC5QSSAvIC04KSk7XG4gICAgdGhpcy5zbWFsbENvbmUucG9zaXRpb24uc2V0KDQsIDcuOCwgLTEpO1xuICAgIHRoaXMuc21hbGxDb25lLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLnNtYWxsQ29uZS5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmhhdERpbmdsZSA9IG5ldyBUSFJFRS5NZXNoKGhhdERpbmdsZUdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgdGhpcy5oYXREaW5nbGUucG9zaXRpb24uc2V0KDksIDUuNSwgLTEpO1xuICAgIHRoaXMuaGF0RGluZ2xlLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmhhdERpbmdsZS5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmhhdC5hZGQodGhpcy5iYW5kLCB0aGlzLmJpZ0NvbmUsIHRoaXMuc21hbGxDb25lLCB0aGlzLmhhdERpbmdsZSk7XG4gIH1cblxuICBGcmVja2xlcygpIHtcbiAgICB0aGlzLmZyZWNrbGVzID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgdGhpcy5mcmVja2xlcy5wb3NpdGlvbi5zZXQoMCwgMCwgOCk7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmZyZWNrbGVzKTtcblxuICAgIGxldCBmcmVja2xlc01hdCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmZyZWNrbGVzLCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuICAgIGxldCBmcmVja2xlc0dlb21NZXJnZWQgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcblxuICAgIGxldCBmcmVja2xlc0dlb20gPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSgwLjUsIDAuNSk7XG5cbiAgICBsZXQgZnJlY2tsZTEgPSBuZXcgVEhSRUUuTWVzaChmcmVja2xlc0dlb20sIGZyZWNrbGVzTWF0KTtcbiAgICBmcmVja2xlMS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigtNSwgMCwgMC4wMSkpO1xuICAgIGZyZWNrbGUxLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyZWNrbGVzR2VvbU1lcmdlZC5tZXJnZShmcmVja2xlMS5nZW9tZXRyeSwgZnJlY2tsZTEubWF0cml4KTtcblxuICAgIGxldCBmcmVja2xlMiA9IGZyZWNrbGUxLmNsb25lKCk7XG4gICAgZnJlY2tsZTIuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oLTAuNSwgLTEsIDApKTtcbiAgICBmcmVja2xlMi51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmVja2xlc0dlb21NZXJnZWQubWVyZ2UoZnJlY2tsZTIuZ2VvbWV0cnksIGZyZWNrbGUyLm1hdHJpeCk7XG5cbiAgICBsZXQgZnJlY2tsZTMgPSBmcmVja2xlMS5jbG9uZSgpO1xuICAgIGZyZWNrbGUzLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDEsIC0wLjUsIDApKTtcbiAgICBmcmVja2xlMy51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmVja2xlc0dlb21NZXJnZWQubWVyZ2UoZnJlY2tsZTMuZ2VvbWV0cnksIGZyZWNrbGUzLm1hdHJpeCk7XG5cbiAgICBsZXQgZnJlY2tsZTQgPSBmcmVja2xlMS5jbG9uZSgpO1xuICAgIGZyZWNrbGU0LnBvc2l0aW9uLnggPSAtZnJlY2tsZTEucG9zaXRpb24ueDtcbiAgICBmcmVja2xlNC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmVja2xlc0dlb21NZXJnZWQubWVyZ2UoZnJlY2tsZTQuZ2VvbWV0cnksIGZyZWNrbGU0Lm1hdHJpeCk7XG4gICAgbGV0IGZyZWNrbGU1ID0gZnJlY2tsZTIuY2xvbmUoKTtcbiAgICBmcmVja2xlNS5wb3NpdGlvbi54ID0gLWZyZWNrbGUyLnBvc2l0aW9uLng7XG4gICAgZnJlY2tsZTUudXBkYXRlTWF0cml4KCk7XG4gICAgZnJlY2tsZXNHZW9tTWVyZ2VkLm1lcmdlKGZyZWNrbGU1Lmdlb21ldHJ5LCBmcmVja2xlNS5tYXRyaXgpO1xuICAgIGxldCBmcmVja2xlNiA9IGZyZWNrbGUzLmNsb25lKCk7XG4gICAgZnJlY2tsZTYucG9zaXRpb24ueCA9IC1mcmVja2xlMy5wb3NpdGlvbi54O1xuICAgIGZyZWNrbGU2LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyZWNrbGVzR2VvbU1lcmdlZC5tZXJnZShmcmVja2xlNi5nZW9tZXRyeSwgZnJlY2tsZTYubWF0cml4KTtcblxuICAgIGxldCBmcmVja2xlZE1lcmdlZCA9IG5ldyBUSFJFRS5NZXNoKGZyZWNrbGVzR2VvbU1lcmdlZCwgZnJlY2tsZXNNYXQpO1xuICAgIGZyZWNrbGVkTWVyZ2VkLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBmcmVja2xlZE1lcmdlZC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmZyZWNrbGVzLmFkZChmcmVja2xlZE1lcmdlZCk7XG4gIH1cblxuICBGZWF0dXJlcygpIHtcbiAgICBsZXQgZWFyR2VvbSA9IG5ldyBUSFJFRS5Cb3hCdWZmZXJHZW9tZXRyeSgxLjUsIDMsIDEuNSk7XG4gICAgbGV0IHNraW5NYXQgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5za2luLCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuICAgIGxldCBlYXJSaWdodCA9IG5ldyBUSFJFRS5NZXNoKGVhckdlb20sIHNraW5NYXQpO1xuICAgIGVhclJpZ2h0LnBvc2l0aW9uLnNldCgtOC41LCAxLCAzKTtcbiAgICBlYXJSaWdodC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgZWFyUmlnaHQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgbGV0IGVhckxlZnQgPSBuZXcgVEhSRUUuTWVzaChlYXJHZW9tLCBza2luTWF0KTtcbiAgICBlYXJMZWZ0LnBvc2l0aW9uLnNldCg4LjUsIDEsIDMpO1xuICAgIGVhckxlZnQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIGVhckxlZnQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgbGV0IG5vc2VHZW9tID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMSwgMiwgNCwgNCk7XG4gICAgbGV0IG5vc2UgPSBuZXcgVEhSRUUuTWVzaChub3NlR2VvbSwgc2tpbk1hdCk7XG4gICAgbm9zZS5zY2FsZS5zZXQoLjc1LCAxLCAxLjMpO1xuICAgIG5vc2UucG9zaXRpb24uc2V0KDAsIDEsIDgpO1xuICAgIG5vc2UuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIG5vc2UucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5oZWFkLmFkZChlYXJSaWdodCwgZWFyTGVmdCwgbm9zZSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jbGFzc2VzL0hlYWQuanMiLCJpbXBvcnQgQ29sb3JzIGZyb20gJy4vY29sb3JzJztcbmNvbnN0IE1hdGVyaWFscyA9IHtcbiAgXCJ3aGl0ZU1hdFwiOiBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy53aGl0ZSwgZmxhdFNoYWRpbmc6IHRydWV9KSxcbiAgXCJ0ZWV0aE1hdFwiOiBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMudGVldGgsIGZsYXRTaGFkaW5nOiB0cnVlfSksXG4gIFwiYmxhY2tNYXRcIjogbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuYmxhY2ssIGZsYXRTaGFkaW5nOiB0cnVlfSksXG4gIFwibm9ybWFsTWF0XCI6IG5ldyBUSFJFRS5NZXNoTm9ybWFsTWF0ZXJpYWwoe30pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXRlcmlhbHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvb2JqZWN0cy9NYXRlcmlhbHMuanMiLCIoZnVuY3Rpb24oc2VsZikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgaWYgKHNlbGYuZmV0Y2gpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBzdXBwb3J0ID0ge1xuICAgIHNlYXJjaFBhcmFtczogJ1VSTFNlYXJjaFBhcmFtcycgaW4gc2VsZixcbiAgICBpdGVyYWJsZTogJ1N5bWJvbCcgaW4gc2VsZiAmJiAnaXRlcmF0b3InIGluIFN5bWJvbCxcbiAgICBibG9iOiAnRmlsZVJlYWRlcicgaW4gc2VsZiAmJiAnQmxvYicgaW4gc2VsZiAmJiAoZnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBuZXcgQmxvYigpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSkoKSxcbiAgICBmb3JtRGF0YTogJ0Zvcm1EYXRhJyBpbiBzZWxmLFxuICAgIGFycmF5QnVmZmVyOiAnQXJyYXlCdWZmZXInIGluIHNlbGZcbiAgfVxuXG4gIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyKSB7XG4gICAgdmFyIHZpZXdDbGFzc2VzID0gW1xuICAgICAgJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nXG4gICAgXVxuXG4gICAgdmFyIGlzRGF0YVZpZXcgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgRGF0YVZpZXcucHJvdG90eXBlLmlzUHJvdG90eXBlT2Yob2JqKVxuICAgIH1cblxuICAgIHZhciBpc0FycmF5QnVmZmVyVmlldyA9IEFycmF5QnVmZmVyLmlzVmlldyB8fCBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdmlld0NsYXNzZXMuaW5kZXhPZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSkgPiAtMVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWUobmFtZSkge1xuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWUgPSBTdHJpbmcobmFtZSlcbiAgICB9XG4gICAgaWYgKC9bXmEtejAtOVxcLSMkJSYnKisuXFxeX2B8fl0vaS50ZXN0KG5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGNoYXJhY3RlciBpbiBoZWFkZXIgZmllbGQgbmFtZScpXG4gICAgfVxuICAgIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8vIEJ1aWxkIGEgZGVzdHJ1Y3RpdmUgaXRlcmF0b3IgZm9yIHRoZSB2YWx1ZSBsaXN0XG4gIGZ1bmN0aW9uIGl0ZXJhdG9yRm9yKGl0ZW1zKSB7XG4gICAgdmFyIGl0ZXJhdG9yID0ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGl0ZW1zLnNoaWZ0KClcbiAgICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZXJhdG9yXG4gIH1cblxuICBmdW5jdGlvbiBIZWFkZXJzKGhlYWRlcnMpIHtcbiAgICB0aGlzLm1hcCA9IHt9XG5cbiAgICBpZiAoaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCB2YWx1ZSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGhlYWRlcnMpKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24oaGVhZGVyKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKGhlYWRlclswXSwgaGVhZGVyWzFdKVxuICAgICAgfSwgdGhpcylcbiAgICB9IGVsc2UgaWYgKGhlYWRlcnMpIHtcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCBoZWFkZXJzW25hbWVdKVxuICAgICAgfSwgdGhpcylcbiAgICB9XG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gICAgdmFsdWUgPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbiAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLm1hcFtuYW1lXVxuICAgIHRoaXMubWFwW25hbWVdID0gb2xkVmFsdWUgPyBvbGRWYWx1ZSsnLCcrdmFsdWUgOiB2YWx1ZVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGVbJ2RlbGV0ZSddID0gZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gICAgcmV0dXJuIHRoaXMuaGFzKG5hbWUpID8gdGhpcy5tYXBbbmFtZV0gOiBudWxsXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmhhc093blByb3BlcnR5KG5vcm1hbGl6ZU5hbWUobmFtZSkpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMubWFwKSB7XG4gICAgICBpZiAodGhpcy5tYXAuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzLm1hcFtuYW1lXSwgbmFtZSwgdGhpcylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChuYW1lKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7IGl0ZW1zLnB1c2godmFsdWUpIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2goW25hbWUsIHZhbHVlXSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgIEhlYWRlcnMucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzXG4gIH1cblxuICBmdW5jdGlvbiBjb25zdW1lZChib2R5KSB7XG4gICAgaWYgKGJvZHkuYm9keVVzZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKSlcbiAgICB9XG4gICAgYm9keS5ib2R5VXNlZCA9IHRydWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdClcbiAgICAgIH1cbiAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRCbG9iQXNBcnJheUJ1ZmZlcihibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRCbG9iQXNUZXh0KGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgICByZWFkZXIucmVhZEFzVGV4dChibG9iKVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQXJyYXlCdWZmZXJBc1RleHQoYnVmKSB7XG4gICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYpXG4gICAgdmFyIGNoYXJzID0gbmV3IEFycmF5KHZpZXcubGVuZ3RoKVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aWV3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGFyc1tpXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUodmlld1tpXSlcbiAgICB9XG4gICAgcmV0dXJuIGNoYXJzLmpvaW4oJycpXG4gIH1cblxuICBmdW5jdGlvbiBidWZmZXJDbG9uZShidWYpIHtcbiAgICBpZiAoYnVmLnNsaWNlKSB7XG4gICAgICByZXR1cm4gYnVmLnNsaWNlKDApXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmLmJ5dGVMZW5ndGgpXG4gICAgICB2aWV3LnNldChuZXcgVWludDhBcnJheShidWYpKVxuICAgICAgcmV0dXJuIHZpZXcuYnVmZmVyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gQm9keSgpIHtcbiAgICB0aGlzLmJvZHlVc2VkID0gZmFsc2VcblxuICAgIHRoaXMuX2luaXRCb2R5ID0gZnVuY3Rpb24oYm9keSkge1xuICAgICAgdGhpcy5fYm9keUluaXQgPSBib2R5XG4gICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSAnJ1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYmxvYiAmJiBCbG9iLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlCbG9iID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmZvcm1EYXRhICYmIEZvcm1EYXRhLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlGb3JtRGF0YSA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keS50b1N0cmluZygpXG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgc3VwcG9ydC5ibG9iICYmIGlzRGF0YVZpZXcoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keS5idWZmZXIpXG4gICAgICAgIC8vIElFIDEwLTExIGNhbid0IGhhbmRsZSBhIERhdGFWaWV3IGJvZHkuXG4gICAgICAgIHRoaXMuX2JvZHlJbml0ID0gbmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pXG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgKEFycmF5QnVmZmVyLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpIHx8IGlzQXJyYXlCdWZmZXJWaWV3KGJvZHkpKSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnN1cHBvcnRlZCBCb2R5SW5pdCB0eXBlJylcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSkge1xuICAgICAgICBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCcpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUJsb2IgJiYgdGhpcy5fYm9keUJsb2IudHlwZSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsIHRoaXMuX2JvZHlCbG9iLnR5cGUpXG4gICAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04JylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0LmJsb2IpIHtcbiAgICAgIHRoaXMuYmxvYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSkpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIGJsb2InKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlUZXh0XSkpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnN1bWVkKHRoaXMpIHx8IFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYmxvYigpLnRoZW4ocmVhZEJsb2JBc0FycmF5QnVmZmVyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50ZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgcmV0dXJuIHJlYWRCbG9iQXNUZXh0KHRoaXMuX2JvZHlCbG9iKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZWFkQXJyYXlCdWZmZXJBc1RleHQodGhpcy5fYm9keUFycmF5QnVmZmVyKSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyB0ZXh0JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keVRleHQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuZm9ybURhdGEpIHtcbiAgICAgIHRoaXMuZm9ybURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oZGVjb2RlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuanNvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oSlNPTi5wYXJzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gSFRUUCBtZXRob2RzIHdob3NlIGNhcGl0YWxpemF0aW9uIHNob3VsZCBiZSBub3JtYWxpemVkXG4gIHZhciBtZXRob2RzID0gWydERUxFVEUnLCAnR0VUJywgJ0hFQUQnLCAnT1BUSU9OUycsICdQT1NUJywgJ1BVVCddXG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTWV0aG9kKG1ldGhvZCkge1xuICAgIHZhciB1cGNhc2VkID0gbWV0aG9kLnRvVXBwZXJDYXNlKClcbiAgICByZXR1cm4gKG1ldGhvZHMuaW5kZXhPZih1cGNhc2VkKSA+IC0xKSA/IHVwY2FzZWQgOiBtZXRob2RcbiAgfVxuXG4gIGZ1bmN0aW9uIFJlcXVlc3QoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICAgIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5XG5cbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBSZXF1ZXN0KSB7XG4gICAgICBpZiAoaW5wdXQuYm9keVVzZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJylcbiAgICAgIH1cbiAgICAgIHRoaXMudXJsID0gaW5wdXQudXJsXG4gICAgICB0aGlzLmNyZWRlbnRpYWxzID0gaW5wdXQuY3JlZGVudGlhbHNcbiAgICAgIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKGlucHV0LmhlYWRlcnMpXG4gICAgICB9XG4gICAgICB0aGlzLm1ldGhvZCA9IGlucHV0Lm1ldGhvZFxuICAgICAgdGhpcy5tb2RlID0gaW5wdXQubW9kZVxuICAgICAgaWYgKCFib2R5ICYmIGlucHV0Ll9ib2R5SW5pdCAhPSBudWxsKSB7XG4gICAgICAgIGJvZHkgPSBpbnB1dC5fYm9keUluaXRcbiAgICAgICAgaW5wdXQuYm9keVVzZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXJsID0gU3RyaW5nKGlucHV0KVxuICAgIH1cblxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBvcHRpb25zLmNyZWRlbnRpYWxzIHx8IHRoaXMuY3JlZGVudGlhbHMgfHwgJ29taXQnXG4gICAgaWYgKG9wdGlvbnMuaGVhZGVycyB8fCAhdGhpcy5oZWFkZXJzKSB7XG4gICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gICAgfVxuICAgIHRoaXMubWV0aG9kID0gbm9ybWFsaXplTWV0aG9kKG9wdGlvbnMubWV0aG9kIHx8IHRoaXMubWV0aG9kIHx8ICdHRVQnKVxuICAgIHRoaXMubW9kZSA9IG9wdGlvbnMubW9kZSB8fCB0aGlzLm1vZGUgfHwgbnVsbFxuICAgIHRoaXMucmVmZXJyZXIgPSBudWxsXG5cbiAgICBpZiAoKHRoaXMubWV0aG9kID09PSAnR0VUJyB8fCB0aGlzLm1ldGhvZCA9PT0gJ0hFQUQnKSAmJiBib2R5KSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb2R5IG5vdCBhbGxvd2VkIGZvciBHRVQgb3IgSEVBRCByZXF1ZXN0cycpXG4gICAgfVxuICAgIHRoaXMuX2luaXRCb2R5KGJvZHkpXG4gIH1cblxuICBSZXF1ZXN0LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCh0aGlzLCB7IGJvZHk6IHRoaXMuX2JvZHlJbml0IH0pXG4gIH1cblxuICBmdW5jdGlvbiBkZWNvZGUoYm9keSkge1xuICAgIHZhciBmb3JtID0gbmV3IEZvcm1EYXRhKClcbiAgICBib2R5LnRyaW0oKS5zcGxpdCgnJicpLmZvckVhY2goZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGlmIChieXRlcykge1xuICAgICAgICB2YXIgc3BsaXQgPSBieXRlcy5zcGxpdCgnPScpXG4gICAgICAgIHZhciBuYW1lID0gc3BsaXQuc2hpZnQoKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICB2YXIgdmFsdWUgPSBzcGxpdC5qb2luKCc9JykucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgZm9ybS5hcHBlbmQoZGVjb2RlVVJJQ29tcG9uZW50KG5hbWUpLCBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGZvcm1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhyYXdIZWFkZXJzKSB7XG4gICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpXG4gICAgcmF3SGVhZGVycy5zcGxpdCgvXFxyP1xcbi8pLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xuICAgICAgdmFyIHBhcnRzID0gbGluZS5zcGxpdCgnOicpXG4gICAgICB2YXIga2V5ID0gcGFydHMuc2hpZnQoKS50cmltKClcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFydHMuam9pbignOicpLnRyaW0oKVxuICAgICAgICBoZWFkZXJzLmFwcGVuZChrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGhlYWRlcnNcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXF1ZXN0LnByb3RvdHlwZSlcblxuICBmdW5jdGlvbiBSZXNwb25zZShib2R5SW5pdCwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgfVxuXG4gICAgdGhpcy50eXBlID0gJ2RlZmF1bHQnXG4gICAgdGhpcy5zdGF0dXMgPSAnc3RhdHVzJyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXMgOiAyMDBcbiAgICB0aGlzLm9rID0gdGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgMzAwXG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gJ3N0YXR1c1RleHQnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1c1RleHQgOiAnT0snXG4gICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIHRoaXMudXJsID0gb3B0aW9ucy51cmwgfHwgJydcbiAgICB0aGlzLl9pbml0Qm9keShib2R5SW5pdClcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXNwb25zZS5wcm90b3R5cGUpXG5cbiAgUmVzcG9uc2UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZSh0aGlzLl9ib2R5SW5pdCwge1xuICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgIHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcbiAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHRoaXMuaGVhZGVycyksXG4gICAgICB1cmw6IHRoaXMudXJsXG4gICAgfSlcbiAgfVxuXG4gIFJlc3BvbnNlLmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IDAsIHN0YXR1c1RleHQ6ICcnfSlcbiAgICByZXNwb25zZS50eXBlID0gJ2Vycm9yJ1xuICAgIHJldHVybiByZXNwb25zZVxuICB9XG5cbiAgdmFyIHJlZGlyZWN0U3RhdHVzZXMgPSBbMzAxLCAzMDIsIDMwMywgMzA3LCAzMDhdXG5cbiAgUmVzcG9uc2UucmVkaXJlY3QgPSBmdW5jdGlvbih1cmwsIHN0YXR1cykge1xuICAgIGlmIChyZWRpcmVjdFN0YXR1c2VzLmluZGV4T2Yoc3RhdHVzKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHN0YXR1cyBjb2RlJylcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IHN0YXR1cywgaGVhZGVyczoge2xvY2F0aW9uOiB1cmx9fSlcbiAgfVxuXG4gIHNlbGYuSGVhZGVycyA9IEhlYWRlcnNcbiAgc2VsZi5SZXF1ZXN0ID0gUmVxdWVzdFxuICBzZWxmLlJlc3BvbnNlID0gUmVzcG9uc2VcblxuICBzZWxmLmZldGNoID0gZnVuY3Rpb24oaW5wdXQsIGluaXQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGlucHV0LCBpbml0KVxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG5cbiAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgIGhlYWRlcnM6IHBhcnNlSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkgfHwgJycpXG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy51cmwgPSAncmVzcG9uc2VVUkwnIGluIHhociA/IHhoci5yZXNwb25zZVVSTCA6IG9wdGlvbnMuaGVhZGVycy5nZXQoJ1gtUmVxdWVzdC1VUkwnKVxuICAgICAgICB2YXIgYm9keSA9ICdyZXNwb25zZScgaW4geGhyID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dFxuICAgICAgICByZXNvbHZlKG5ldyBSZXNwb25zZShib2R5LCBvcHRpb25zKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfVxuXG4gICAgICB4aHIub3BlbihyZXF1ZXN0Lm1ldGhvZCwgcmVxdWVzdC51cmwsIHRydWUpXG5cbiAgICAgIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnaW5jbHVkZScpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKCdyZXNwb25zZVR5cGUnIGluIHhociAmJiBzdXBwb3J0LmJsb2IpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJ1xuICAgICAgfVxuXG4gICAgICByZXF1ZXN0LmhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIHhoci5zZW5kKHR5cGVvZiByZXF1ZXN0Ll9ib2R5SW5pdCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcmVxdWVzdC5fYm9keUluaXQpXG4gICAgfSlcbiAgfVxuICBzZWxmLmZldGNoLnBvbHlmaWxsID0gdHJ1ZVxufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvd2hhdHdnLWZldGNoL2ZldGNoLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xuXG5jb25zdCB1cmwgPSBgL2FwaS9jYXJ0YDtcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gIGNyZWF0ZTogKHt0ZXh0LCBpZCwgbmFtZSwgYmxvYn0pID0+IHtcbiAgICBjb25zdCBtZXRob2QgPSBgUE9TVGA7XG4gICAgLy8gY29uc3QgbmV3RmlsZU5hbWUgPSBgJHtpZC5zcGxpdChgIGApLmpvaW4oYF9gKX1gO1xuICAgIGNvbnN0IGJvZHkgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBib2R5LmFwcGVuZChgdGV4dGAsIHRleHQpO1xuICAgIGJvZHkuYXBwZW5kKGBpZGAsIGlkKTtcbiAgICBib2R5LmFwcGVuZChgbmFtZWAsIG5hbWUpO1xuICAgIC8vIGJvZHkuYXBwZW5kKGBzb3VuZGAsIGJsb2IsIG5ld0ZpbGVOYW1lKTtcblxuICAgIHJldHVybiBmZXRjaCh1cmwsIHttZXRob2QsIGJvZHl9KVxuICAgICAgLnRoZW4ociA9PiByLmpzb24oKSk7XG4gIH0sXG5cbiAgcmVhZDogKCkgPT4ge1xuICAgIHJldHVybiBmZXRjaChgJHt1cmx9P2lzQWN0aXZlPXRydWVgKVxuICAgICAgLnRoZW4ociA9PiByLmpzb24oKSk7XG4gIH0sXG5cbiAgcmVhZE9uZTogaWQgPT4ge1xuICAgIGNvbnN0IG1ldGhvZCA9IGBHRVRgO1xuICAgIHJldHVybiBmZXRjaChgJHt1cmx9LyR7aWR9YCwge21ldGhvZH0pLnRoZW4ociA9PiByLmpzb24oKSk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbGliL2NhcnRBUEkuanMiLCJjb25zdCBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG5pbXBvcnQgZ2V0VXJsUGFyYW1ldGVyIGZyb20gJy4vb2JqZWN0cy9nZXRVcmxQYXJhbWV0ZXInO1xuaW1wb3J0IENhcnRBUEkgZnJvbSAnLi9saWIvY2FydEFQSSc7XG5pbXBvcnQgSGVhZCBmcm9tICcuL2NsYXNzZXMvSGVhZCc7XG5cbmxldCB0YXJnZXRJZCwgYXVkaW9DdHg7XG5jb25zdCBwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYXlfc2FudGFgKTtcbmNvbnN0ICRhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBhdWRpb2ApO1xuXG5sZXQgYXVkaW9Tb3VyY2VzID0gW10sXG4gICAgcGl0Y2hTaGlmdGVyUHJvY2Vzc29yO1xuXG5sZXQgYXVkaW9Tb3VyY2VJbmRleCA9IDAsXG4gICAgYXVkaW9WaXN1YWxpc2F0aW9uSW5kZXggPSAwLFxuICAgIHZhbGlkR3JhblNpemVzID0gWzI1NiwgNTEyLCAxMDI0LCAyMDQ4LCA0MDk2LCA4MTkyXSxcbiAgICBncmFpblNpemUgPSB2YWxpZEdyYW5TaXplc1sxXSxcbiAgICBwaXRjaFJhdGlvID0gMS4wLFxuICAgIG92ZXJsYXBSYXRpbyA9IDAuNTA7XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gIGF1ZGlvQ3R4ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICB0YXJnZXRJZCA9IGdldFVybFBhcmFtZXRlcihcImlkXCIpO1xuICBpZiAoIXRhcmdldElkKSB3aW5kb3cubG9jYXRpb24gPSBcImh0dHBzOi8vbG9jYWxob3N0OjgwODBcIjtcblxuICBDYXJ0QVBJLnJlYWRPbmUodGFyZ2V0SWQpLnRoZW4oZCA9PiB7XG4gICAgaWYgKGQuc3RhdHVzQ29kZSkgd2luZG93LmxvY2F0aW9uID0gXCJodHRwczovL2xvY2FsaG9zdDo4MDgwXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5hbWVgKS5pbm5lckhUTUwgPSBkLm5hbWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHNhbnRhX2F1ZGlvYCkuc3JjID0gYC4vdXBsb2Fkcy8ke2QuaWR9Lm9nZ2A7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+wqB7XG4gICAgICBjb25zdCBidWZmZXJMb2FkZXIgPSBuZXcgQnVmZmVyTG9hZGVyKFxuICAgICAgICBhdWRpb0N0eCwgW2AuL3VwbG9hZHMvJHtkLmlkfS5vZ2dgXSwgYnVmZmVyTGlzdCA9PiB7XG5cbiAgICAgICAgICBsZXQgbG9vcCA9IGZhbHNlO1xuICAgICAgICAgIGxldCBzb3VyY2U7XG5cbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcmVwZWF0YCkuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAgKCkgPT4ge1xuICAgICAgICAgICAgbG9vcCA9ICFsb29wO1xuICAgICAgICAgICAgc291cmNlLnN0b3AoKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHBpdGNoUmF0aW8gPSAyO1xuXG4gICAgICAgICAgJGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT4ge1xuICAgICAgICAgICAgc291cmNlID0gJyc7XG4gICAgICAgICAgICBzb3VyY2UgPSBhdWRpb0N0eC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcbiAgICAgICAgICAgIHNvdXJjZS5idWZmZXIgPSBidWZmZXJMaXN0WzBdO1xuXG4gICAgICAgICAgICAvLyBzb3VyY2UuY29ubmVjdChhdWRpb0N0eC5kZXN0aW5hdGlvbilcblxuICAgICAgICAgICAgc291cmNlLmNvbm5lY3QocGl0Y2hTaGlmdGVyUHJvY2Vzc29yKTtcbiAgICAgICAgICAgIHNvdXJjZS5sb29wID0gbG9vcDtcbiAgICAgICAgICAgIHNvdXJjZS5zdGFydCgpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIGJ1ZmZlckxvYWRlci5sb2FkKCk7XG4gICAgICBpbml0UHJvY2Vzc29yKCk7XG4gICAgICAvLyB0aGlzLmluaXRTbGlkZXJzKCk7XG5cbiAgICB9LCAxMDAwKTtcblxuICB9KTtcbn1cblxuY29uc3QgbGluZWFySW50ZXJwb2xhdGlvbiA9IChhLCBiLCB0KSA9PiB7XG4gIHJldHVybiBhICsgKGIgLSBhKSAqIHQ7XG59O1xuXG5jb25zdCBpbml0UHJvY2Vzc29yID0gKCkgPT4ge1xuXG5cblxuICBpZiAocGl0Y2hTaGlmdGVyUHJvY2Vzc29yKSB7XG4gICAgcGl0Y2hTaGlmdGVyUHJvY2Vzc29yLmRpc2Nvbm5lY3QoKTtcbiAgfVxuXG4gIGlmIChhdWRpb0N0eC5jcmVhdGVTY3JpcHRQcm9jZXNzb3IpIHtcbiAgICBwaXRjaFNoaWZ0ZXJQcm9jZXNzb3IgPSBhdWRpb0N0eC5jcmVhdGVTY3JpcHRQcm9jZXNzb3IoZ3JhaW5TaXplLCAxLCAxKTtcbiAgfSBlbHNlIGlmIChhdWRpb0N0eC5jcmVhdGVKYXZhU2NyaXB0Tm9kZSkge1xuICAgIHBpdGNoU2hpZnRlclByb2Nlc3NvciA9IGF1ZGlvQ3R4LmNyZWF0ZUphdmFTY3JpcHROb2RlKGdyYWluU2l6ZSwgMSwgMSk7XG4gIH1cblxuICBwaXRjaFNoaWZ0ZXJQcm9jZXNzb3IuYnVmZmVyID0gbmV3IEZsb2F0MzJBcnJheShncmFpblNpemUgKiAyKTtcbiAgcGl0Y2hTaGlmdGVyUHJvY2Vzc29yLmdyYWluV2luZG93ID0gaGFubldpbmRvdyhncmFpblNpemUpO1xuXG4gIHBpdGNoU2hpZnRlclByb2Nlc3Nvci5vbmF1ZGlvcHJvY2VzcyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICB2YXIgaW5wdXREYXRhID0gZXZlbnQuaW5wdXRCdWZmZXIuZ2V0Q2hhbm5lbERhdGEoMCk7XG4gICAgdmFyIG91dHB1dERhdGEgPSBldmVudC5vdXRwdXRCdWZmZXIuZ2V0Q2hhbm5lbERhdGEoMCk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgaW5wdXREYXRhLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIC8vIEFwcGx5IHRoZSB3aW5kb3cgdG8gdGhlIGlucHV0IGJ1ZmZlclxuICAgICAgaW5wdXREYXRhW2ldICo9IHRoaXMuZ3JhaW5XaW5kb3dbaV07XG5cbiAgICAgIC8vIFNoaWZ0IGhhbGYgb2YgdGhlIGJ1ZmZlclxuICAgICAgdGhpcy5idWZmZXJbaV0gPSB0aGlzLmJ1ZmZlcltpICsgZ3JhaW5TaXplXTtcblxuICAgICAgLy8gRW1wdHkgdGhlIGJ1ZmZlciB0YWlsXG4gICAgICB0aGlzLmJ1ZmZlcltpICsgZ3JhaW5TaXplXSA9IDAuMDtcbiAgICB9XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIHBpdGNoIHNoaWZ0ZWQgZ3JhaW4gcmUtc2FtcGxpbmcgYW5kIGxvb3BpbmcgdGhlIGlucHV0XG4gICAgdmFyIGdyYWluRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoZ3JhaW5TaXplICogMik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSAwLjA7IGkgPCBncmFpblNpemU7IGkrKywgaiArPSBwaXRjaFJhdGlvKSB7XG5cbiAgICAgIHZhciBpbmRleCA9IE1hdGguZmxvb3IoaikgJSBncmFpblNpemU7XG4gICAgICB2YXIgYSA9IGlucHV0RGF0YVtpbmRleF07XG4gICAgICB2YXIgYiA9IGlucHV0RGF0YVsoaW5kZXggKyAxKSAlIGdyYWluU2l6ZV07XG4gICAgICBncmFpbkRhdGFbaV0gKz0gbGluZWFySW50ZXJwb2xhdGlvbihhLCBiLCBqICUgMS4wKSAqIHRoaXMuZ3JhaW5XaW5kb3dbaV07XG4gICAgfVxuXG4gICAgLy8gQ29weSB0aGUgZ3JhaW4gbXVsdGlwbGUgdGltZXMgb3ZlcmxhcHBpbmcgaXRcbiAgICBmb3IgKGkgPSAwOyBpIDwgZ3JhaW5TaXplOyBpICs9IE1hdGgucm91bmQoZ3JhaW5TaXplICogKDEgLSBvdmVybGFwUmF0aW8pKSkge1xuICAgICAgZm9yIChqID0gMDsgaiA8PSBncmFpblNpemU7IGorKykge1xuICAgICAgICB0aGlzLmJ1ZmZlcltpICsgal0gKz0gZ3JhaW5EYXRhW2pdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE91dHB1dCB0aGUgZmlyc3QgaGFsZiBvZiB0aGUgYnVmZmVyXG4gICAgZm9yIChpID0gMDsgaSA8IGdyYWluU2l6ZTsgaSsrKSB7XG4gICAgICBvdXRwdXREYXRhW2ldID0gdGhpcy5idWZmZXJbaV07XG4gICAgfVxuICB9O1xuXG4gIHBpdGNoU2hpZnRlclByb2Nlc3Nvci5jb25uZWN0KGF1ZGlvQ3R4LmRlc3RpbmF0aW9uKTtcblxufTtcblxuXG5jb25zdCBoYW5uV2luZG93ID0gbGVuZ3RoID0+IHtcbiAgY29uc3Qgd2luZG93ID0gbmV3IEZsb2F0MzJBcnJheShsZW5ndGgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB3aW5kb3dbaV0gPSAwLjUgKiAoMSAtIE1hdGguY29zKDIgKiBNYXRoLlBJICogaSAvIChsZW5ndGggLSAxKSkpO1xuICB9XG4gIHJldHVybiB3aW5kb3c7XG59O1xuaW5pdCgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3NhbnRhU2NyaXB0LmpzIiwiY29uc3QgZ2V0VXJsUGFyYW1ldGVyID0gbmFtZSA9PiB7XG4gIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtdLywgJ1xcXFxbJykucmVwbGFjZSgvW1xcXV0vLCAnXFxcXF0nKTtcbiAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCdbXFxcXD8mXScgKyBuYW1lICsgJz0oW14mI10qKScpO1xuICBjb25zdCByZXN1bHRzID0gcmVnZXguZXhlYyhsb2NhdGlvbi5zZWFyY2gpO1xuICByZXR1cm4gcmVzdWx0cyA9PT0gbnVsbCA/IGZhbHNlIDogZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMV0ucmVwbGFjZSgvXFwrL2csICcgJykpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0VXJsUGFyYW1ldGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL29iamVjdHMvZ2V0VXJsUGFyYW1ldGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==