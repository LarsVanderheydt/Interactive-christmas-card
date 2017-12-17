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
        from = _ref.from,
        blob = _ref.blob,
        to = _ref.to,
        audioSettings = _ref.audioSettings,
        headColors = _ref.headColors;

    var method = 'POST';
    // const newFileName = `${id.split(` `).join(`_`)}`;
    var body = new FormData();
    body.append('text', text);
    body.append('id', id);
    body.append('from', from);
    body.append('to', to);
    body.append('audioSettings', audioSettings);
    body.append('headColors', headColors);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_handleSantaAudio__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_santaPageScene__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_getUrlParameter__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_cartAPI__ = __webpack_require__(6);
var AudioContext = window.AudioContext || window.webkitAudioContext;





var targetId = void 0,
    audioCtx = void 0;

var init = function init() {

  particlesJS.load('particles-js', '../assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
  });

  targetId = Object(__WEBPACK_IMPORTED_MODULE_2__objects_getUrlParameter__["a" /* default */])("id");
  if (!targetId) window.location = "https://localhost:8080";

  __WEBPACK_IMPORTED_MODULE_3__lib_cartAPI__["a" /* default */].readOne(targetId).then(function (d) {
    if (d.statusCode) window.location = "https://localhost:8080";
    document.getElementById('from').innerHTML = 'from: ' + d.from;
    document.getElementById('to').innerHTML = 'to: ' + d.to;

    Object(__WEBPACK_IMPORTED_MODULE_0__objects_handleSantaAudio__["a" /* default */])(d);
    Object(__WEBPACK_IMPORTED_MODULE_1__objects_santaPageScene__["a" /* default */])(d);
  });
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

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_cartAPI__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_Head__ = __webpack_require__(3);
var AudioContext = window.AudioContext || window.webkitAudioContext;



var targetId = void 0,
    audioCtx = void 0;
var play = document.getElementById('play_santa');
var $audio = document.getElementById('audio');

var pitchShifterProcessor = void 0;

var grainSize = 512,
    pitchRatio = 1.0,
    overlapRatio = 0.50;

var handleSantaAudio = function handleSantaAudio(cart) {
  audioCtx = new AudioContext();

  var audioSettings = JSON.parse(cart.audioSettings);
  // document.getElementById(`santa_audio`).src = `./uploads/${d.id}.ogg`;

  setTimeout(function () {
    var bufferLoader = new BufferLoader(audioCtx, ['./uploads/' + cart.id + '.ogg'], function (bufferList) {

      var loop = false;
      var source = void 0;

      document.getElementById('repeat').addEventListener('click', function () {
        loop = !loop;
        source.stop();
      });

      pitchRatio = audioSettings.pitch;
      overlapRatio = audioSettings.overlap;

      $audio.addEventListener('click', function () {
        source = '';
        source = audioCtx.createBufferSource();
        source.buffer = bufferList[0];

        // source.connect(audioCtx.destination)
        source.loop = loop;
        source.connect(pitchShifterProcessor);
        source.start();
      });
    });

    bufferLoader.load();
    initProcessor();
  }, 1000);
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

/* harmony default export */ __webpack_exports__["a"] = (handleSantaAudio);

/***/ }),
/* 29 */,
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_Head__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_cartAPI__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__colors__ = __webpack_require__(0);




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
    windowHalfX = void 0,
    windowHalfY = void 0;

var mousePos = { x: 0, y: 0 };

var santaScene = function santaScene(data) {
  createScene();
  createLights();

  var headColors = JSON.parse(data.headColors);
  setColors(headColors);

  head = new __WEBPACK_IMPORTED_MODULE_0__classes_Head__["a" /* default */](); // show and handle head
  scene.add(head.mesh);
  loop();
};

var setColors = function setColors(headColors) {
  __WEBPACK_IMPORTED_MODULE_2__colors__["a" /* default */].skin = headColors.skin;
  __WEBPACK_IMPORTED_MODULE_2__colors__["a" /* default */].freckles = headColors.freckles;
  __WEBPACK_IMPORTED_MODULE_2__colors__["a" /* default */].eye = headColors.eye;
  __WEBPACK_IMPORTED_MODULE_2__colors__["a" /* default */].glasses = headColors.glasses;
  __WEBPACK_IMPORTED_MODULE_2__colors__["a" /* default */].hat = headColors.hat;
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

var loop = function loop() {
  blinkLoop();
  //head.dizzy();
  var xTarget = mousePos.x - windowHalfX;
  var yTarget = mousePos.y - windowHalfY;

  head.idle(xTarget, yTarget);
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
};

/* harmony default export */ __webpack_exports__["a"] = (santaScene);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDkxZTIwYWQzZWNkYTI1NDhkOTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL29iamVjdHMvY29sb3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLWZldGNoL2ZldGNoLW5wbS1icm93c2VyaWZ5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL0hlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL29iamVjdHMvTWF0ZXJpYWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93aGF0d2ctZmV0Y2gvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xpYi9jYXJ0QVBJLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zYW50YVNjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvb2JqZWN0cy9nZXRVcmxQYXJhbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL29iamVjdHMvaGFuZGxlU2FudGFBdWRpby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvb2JqZWN0cy9zYW50YVBhZ2VTY2VuZS5qcyJdLCJuYW1lcyI6WyJDb2xvcnMiLCJza2luIiwiZnJlY2tsZXMiLCJ3aGl0ZSIsImdsYXNzZXMiLCJ0ZWV0aCIsImJsYWNrIiwiZXllIiwiaGF0IiwiaXNCbGlua2luZyIsIkhlYWQiLCJtZXNoIiwiVEhSRUUiLCJPYmplY3QzRCIsImhlYWRHZW9tIiwiQm94QnVmZmVyR2VvbWV0cnkiLCJza2luTWF0IiwiTWVzaExhbWJlcnRNYXRlcmlhbCIsImNvbG9yIiwiZmxhdFNoYWRpbmciLCJleWVNYXQiLCJNZXNoUGhvbmdNYXRlcmlhbCIsImhlYWQiLCJNZXNoIiwiY2FzdFNoYWRvdyIsInJlY2VpdmVTaGFkb3ciLCJhZGQiLCJiZWFyZCIsInBvc2l0aW9uIiwieSIsInoiLCJCZWFyZCIsIkdsYXNzZXMiLCJIYWlyIiwiRXllcyIsIkV5ZUJyb3dzIiwiSGF0IiwiRnJlY2tsZXMiLCJGZWF0dXJlcyIsImlkbGUiLCJub3JtYWxpemUiLCJ2Iiwidm1pbiIsInZtYXgiLCJ0bWluIiwidG1heCIsIm52IiwiTWF0aCIsIm1heCIsIm1pbiIsImR2IiwicGMiLCJkdCIsInR2Iiwic3BlZWQiLCJleWVCbHVlUmlnaHRQb3NYIiwiZXllQmx1ZUxlZnRQb3NYIiwiZXllQmx1ZVJpZ2h0UG9zWSIsImV5ZUJsdWVMZWZ0UG9zWSIsImV5ZUJyb3dSaWdodFBvc1kiLCJleWVCcm93TGVmdFBvc1kiLCJleWVCbHVlUmlnaHQiLCJ4IiwiZXllQmx1ZUxlZnQiLCJleWVCcm93UmlnaHQiLCJleWVCcm93TGVmdCIsInhUYXJnZXQiLCJ5VGFyZ2V0IiwiZGlzdGFuY2UiLCJyb3RhdGlvbiIsInNpbiIsIkRhdGUiLCJub3ciLCJQSSIsIm1vdXN0YWNoZSIsImNvcyIsInVwZGF0ZUJvZHkiLCJiZWFyZEdlb21NZXJnZWQiLCJHZW9tZXRyeSIsImJlYXJkMUdlb20iLCJCb3hHZW9tZXRyeSIsImJlYXJkMSIsIk1hdCIsIndoaXRlTWF0IiwiYXBwbHlNYXRyaXgiLCJNYXRyaXg0IiwibWFrZVRyYW5zbGF0aW9uIiwidXBkYXRlTWF0cml4IiwibWVyZ2UiLCJnZW9tZXRyeSIsIm1hdHJpeCIsImJlYXJkMiIsInNjYWxlIiwiYmVhcmQzIiwiY2xvbmUiLCJiZWFyZDQiLCJiZWFyZDJHZW9tIiwidmVydGljZXMiLCJiZWFyZDUiLCJiZWFyZDNHZW9tIiwiYmVhcmQ2IiwiYmVhcmQ3IiwiYmVhcmQ4IiwiYmVhcmQ0R2VvbSIsImJlYXJkOSIsImJlYXJkNUdlb20iLCJiZWFyZDEwIiwiYmVhcmQxMSIsImJlYXJkTWVyZ2VkIiwibW91dGhHZW9tIiwibW91dGgiLCJibGFja01hdCIsInNldCIsInRlZXRoR2VvbSIsInRlZXRoTWF0IiwibW91c3RhY2hlR2VvbSIsImdsYXNzZXNNYXQiLCJmcmFtZUdlb21NZXJnZWQiLCJmcmFtZU91dGVyR2VvbSIsIkN5bGluZGVyR2VvbWV0cnkiLCJmcmFtZUlubmVyR2VvbSIsIm1ha2VSb3RhdGlvblgiLCJmcmFtZUJTUCIsIlRocmVlQlNQIiwiZnJhbWVDdXRCU1AiLCJmcmFtZWludGVyc2VjdGlvbkJTUCIsInN1YnRyYWN0IiwiZnJhbWVMZWZ0IiwidG9NZXNoIiwiZnJhbWVSaWdodCIsIm1ha2VSb3RhdGlvbloiLCJmcmFtZU1pZEdlb20iLCJmcmFtZU1pZCIsImZyYW1lRW5kR2VvbSIsImZyYW1lRW5kUmlnaHQiLCJmcmFtZUVuZExlZnQiLCJmcmFtZVNwb2tlR2VvbSIsImZyYW1lU3Bva2VSaWdodCIsImZyYW1lU3Bva2VMZWZ0IiwiZnJhbWVNZXJnZWQiLCJoYWlyIiwiaGFpckdlb21NZXJnZWQiLCJoYWlyRmxhdEdlb20iLCJoYWlyMSIsImhhaXIyIiwiaGFpcjMiLCJoYWlyNCIsImhhaXI2IiwiaGFpckZsYXRCYWNrR2VvbSIsImhhaXI1IiwiaGFpck1lcmdlZCIsImV5ZXMiLCJleWVXaGl0ZUdlb20iLCJQbGFuZUdlb21ldHJ5IiwiZXllV2hpdGVSaWdodCIsImV5ZUJsdWVHZW9tIiwiZXllUHVwaWxHZW9tIiwiZXllUHVwaWxSaWdodCIsImV5ZVdoaXRlTGVmdCIsImV5ZVB1cGlsTGVmdCIsImV5ZUJyb3dzIiwiZXllQnJvd0dlb20iLCJoYXRNYXQiLCJiYW5kR2VvbSIsIlRvcnVzR2VvbWV0cnkiLCJiaWdDb25lR2VvbSIsInNtYWxsQ29uZUdlb20iLCJoYXREaW5nbGVHZW9tIiwiU3BoZXJlR2VvbWV0cnkiLCJiYW5kIiwiYmlnQ29uZSIsInNtYWxsQ29uZSIsIm1ha2VSb3RhdGlvblkiLCJoYXREaW5nbGUiLCJmcmVja2xlc01hdCIsImZyZWNrbGVzR2VvbU1lcmdlZCIsImZyZWNrbGVzR2VvbSIsImZyZWNrbGUxIiwiZnJlY2tsZTIiLCJmcmVja2xlMyIsImZyZWNrbGU0IiwiZnJlY2tsZTUiLCJmcmVja2xlNiIsImZyZWNrbGVkTWVyZ2VkIiwiZWFyR2VvbSIsImVhclJpZ2h0IiwiZWFyTGVmdCIsIm5vc2VHZW9tIiwibm9zZSIsIk1hdGVyaWFscyIsIk1lc2hOb3JtYWxNYXRlcmlhbCIsInVybCIsImNyZWF0ZSIsInRleHQiLCJpZCIsImZyb20iLCJibG9iIiwidG8iLCJhdWRpb1NldHRpbmdzIiwiaGVhZENvbG9ycyIsIm1ldGhvZCIsImJvZHkiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZldGNoIiwidGhlbiIsInIiLCJqc29uIiwicmVhZCIsInJlYWRPbmUiLCJBdWRpb0NvbnRleHQiLCJ3aW5kb3ciLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJ0YXJnZXRJZCIsImF1ZGlvQ3R4IiwiaW5pdCIsInBhcnRpY2xlc0pTIiwibG9hZCIsImNvbnNvbGUiLCJsb2ciLCJnZXRVcmxQYXJhbWV0ZXIiLCJsb2NhdGlvbiIsIkNhcnRBUEkiLCJkIiwic3RhdHVzQ29kZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJoYW5kbGVTYW50YUF1ZGlvIiwic2FudGFTY2VuZSIsIm5hbWUiLCJyZXBsYWNlIiwicmVnZXgiLCJSZWdFeHAiLCJyZXN1bHRzIiwiZXhlYyIsInNlYXJjaCIsImRlY29kZVVSSUNvbXBvbmVudCIsInBsYXkiLCIkYXVkaW8iLCJwaXRjaFNoaWZ0ZXJQcm9jZXNzb3IiLCJncmFpblNpemUiLCJwaXRjaFJhdGlvIiwib3ZlcmxhcFJhdGlvIiwiSlNPTiIsInBhcnNlIiwiY2FydCIsInNldFRpbWVvdXQiLCJidWZmZXJMb2FkZXIiLCJCdWZmZXJMb2FkZXIiLCJsb29wIiwic291cmNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3AiLCJwaXRjaCIsIm92ZXJsYXAiLCJjcmVhdGVCdWZmZXJTb3VyY2UiLCJidWZmZXIiLCJidWZmZXJMaXN0IiwiY29ubmVjdCIsInN0YXJ0IiwiaW5pdFByb2Nlc3NvciIsImxpbmVhckludGVycG9sYXRpb24iLCJhIiwiYiIsInQiLCJkaXNjb25uZWN0IiwiY3JlYXRlU2NyaXB0UHJvY2Vzc29yIiwiY3JlYXRlSmF2YVNjcmlwdE5vZGUiLCJGbG9hdDMyQXJyYXkiLCJncmFpbldpbmRvdyIsImhhbm5XaW5kb3ciLCJvbmF1ZGlvcHJvY2VzcyIsImV2ZW50IiwiaW5wdXREYXRhIiwiaW5wdXRCdWZmZXIiLCJnZXRDaGFubmVsRGF0YSIsIm91dHB1dERhdGEiLCJvdXRwdXRCdWZmZXIiLCJpIiwibGVuZ3RoIiwiZ3JhaW5EYXRhIiwiaiIsImluZGV4IiwiZmxvb3IiLCJyb3VuZCIsImRlc3RpbmF0aW9uIiwic2NlbmUiLCJjYW1lcmEiLCJmaWVsZE9mVmlldyIsImFzcGVjdFJhdGlvIiwibmVhclBsYW5lIiwiZmFyUGxhbmUiLCJIRUlHSFQiLCJXSURUSCIsImdsb2JhbExpZ2h0Iiwic2hhZG93TGlnaHQiLCJiYWNrTGlnaHQiLCJsaWdodCIsInJlbmRlcmVyIiwiY29udGFpbmVyIiwibG9hZGVkIiwid2luZG93SGFsZlgiLCJ3aW5kb3dIYWxmWSIsIm1vdXNlUG9zIiwiY3JlYXRlU2NlbmUiLCJjcmVhdGVMaWdodHMiLCJkYXRhIiwic2V0Q29sb3JzIiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwiU2NlbmUiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIldlYkdMUmVuZGVyZXIiLCJhbHBoYSIsImFudGlhbGlhcyIsInNldFBpeGVsUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwic2V0U2l6ZSIsInNoYWRvd01hcCIsImVuYWJsZWQiLCJ0eXBlIiwiUENGU29mdFNoYWRvd01hcCIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsIm9uV2luZG93UmVzaXplIiwiaGFuZGxlTW91c2VNb3ZlIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImNsaWVudFgiLCJjbGllbnRZIiwibG9hZGVyTWFuYWdlciIsIkxvYWRpbmdNYW5hZ2VyIiwiaGFuZGxlV2luZG93UmVzaXplIiwiaXNNb2JpbGUiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiSGVtaXNwaGVyZUxpZ2h0IiwiRGlyZWN0aW9uYWxMaWdodCIsInNoYWRvdyIsIm1hcFNpemUiLCJ3aWR0aCIsImhlaWdodCIsIkFtYmllbnRMaWdodCIsImJsaW5rTG9vcCIsInJhbmRvbSIsImJsaW5rIiwiVHdlZW5NYXgiLCJ5b3lvIiwicmVwZWF0Iiwib25Db21wbGV0ZSIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQSxJQUFNQSxTQUFTO0FBQ2JDLFFBQU0sUUFETztBQUViQyxZQUFVLFFBRkc7QUFHYkMsU0FBTyxRQUhNO0FBSWJDLFdBQVMsUUFKSTtBQUtiQyxTQUFPLFFBTE07QUFNYkMsU0FBTyxRQU5NO0FBT2JDLE9BQUssUUFQUTtBQVFiQyxPQUFLO0FBUlEsQ0FBZjtBQVVBLHlEQUFlUixNQUFmLEU7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTs7QUFFQSxJQUFJUyxhQUFhLEtBQWpCOztJQUVxQkMsSTtBQUNuQixrQkFBYztBQUFBOztBQUNaLFNBQUtDLElBQUwsR0FBWSxJQUFJQyxNQUFNQyxRQUFWLEVBQVo7O0FBRUEsUUFBSUMsV0FBVyxJQUFJRixNQUFNRyxpQkFBVixDQUE0QixFQUE1QixFQUFnQyxFQUFoQyxFQUFvQyxFQUFwQyxDQUFmO0FBQ0EsUUFBSUMsVUFBVSxJQUFJSixNQUFNSyxtQkFBVixDQUE4QixFQUFDQyxP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QXRCLEVBQTZCLEdBQTdCLEVBQWtDO0FBQ2hDL0QsT0FBRyxDQUQ2QjtBQUVoQ2dVLFVBQU0sSUFGMEI7QUFHaENDLFlBQVEsQ0FId0I7QUFJaENDLGdCQUFZLHNCQUFXO0FBQ3JCdFYsbUJBQWEsS0FBYjtBQUNEO0FBTitCLEdBQWxDO0FBUUQsQ0FWRDs7QUFZQSxJQUFNaVAsT0FBTyxTQUFQQSxJQUFPLEdBQU07QUFDakIrRjtBQUNBO0FBQ0EsTUFBSXZSLFVBQVc4TyxTQUFTbFAsQ0FBVCxHQUFhZ1AsV0FBNUI7QUFDQSxNQUFJM08sVUFBVzZPLFNBQVNuUixDQUFULEdBQWFrUixXQUE1Qjs7QUFFQXpSLE9BQUtpQixJQUFMLENBQVUyQixPQUFWLEVBQW1CQyxPQUFuQjtBQUNBd08sV0FBU3FELE1BQVQsQ0FBZ0JqRSxLQUFoQixFQUF1QkMsTUFBdkI7QUFDQWlFLHdCQUFzQnZHLElBQXRCO0FBQ0QsQ0FURDs7QUFXQSx5REFBZXJCLFVBQWYsRSIsImZpbGUiOiJqcy9zYW50YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkOTFlMjBhZDNlY2RhMjU0OGQ5MCIsImNvbnN0IENvbG9ycyA9IHtcbiAgc2tpbjogMHhmZmUwYmQsXG4gIGZyZWNrbGVzOiAweGNmYmE5NixcbiAgd2hpdGU6IDB4ZTllYmVlLFxuICBnbGFzc2VzOiAweGY5YzQyMSxcbiAgdGVldGg6IDB4ZmZmZmZmLFxuICBibGFjazogMHgyZTJlMmUsXG4gIGV5ZTogMHg2Mjk1YTgsXG4gIGhhdDogMHg3MjAzMTRcbn07XG5leHBvcnQgZGVmYXVsdCBDb2xvcnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvb2JqZWN0cy9jb2xvcnMuanMiLCIvLyB0aGUgd2hhdHdnLWZldGNoIHBvbHlmaWxsIGluc3RhbGxzIHRoZSBmZXRjaCgpIGZ1bmN0aW9uXG4vLyBvbiB0aGUgZ2xvYmFsIG9iamVjdCAod2luZG93IG9yIHNlbGYpXG4vL1xuLy8gUmV0dXJuIHRoYXQgYXMgdGhlIGV4cG9ydCBmb3IgdXNlIGluIFdlYnBhY2ssIEJyb3dzZXJpZnkgZXRjLlxucmVxdWlyZSgnd2hhdHdnLWZldGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHNlbGYuZmV0Y2guYmluZChzZWxmKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtZmV0Y2gvZmV0Y2gtbnBtLWJyb3dzZXJpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgQ29sb3JzIGZyb20gJy4uL29iamVjdHMvY29sb3JzJztcbmltcG9ydCBNYXQgZnJvbSAnLi4vb2JqZWN0cy9NYXRlcmlhbHMnO1xuXG5sZXQgaXNCbGlua2luZyA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG5cbiAgICBsZXQgaGVhZEdlb20gPSBuZXcgVEhSRUUuQm94QnVmZmVyR2VvbWV0cnkoMTYsIDE2LCAxNik7XG4gICAgbGV0IHNraW5NYXQgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5za2luLCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuICAgIGxldCBleWVNYXQgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuZXllLCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuXG4gICAgdGhpcy5oZWFkID0gbmV3IFRIUkVFLk1lc2goaGVhZEdlb20sc2tpbk1hdCk7XG4gICAgdGhpcy5oZWFkLmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgIHRoaXMuaGVhZC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5tZXNoLmFkZCh0aGlzLmhlYWQpO1xuXG4gICAgdGhpcy5iZWFyZCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHRoaXMuYmVhcmQucG9zaXRpb24ueSA9IC03O1xuICAgIHRoaXMuYmVhcmQucG9zaXRpb24ueiA9IDAuNTtcbiAgICB0aGlzLmhlYWQuYWRkKHRoaXMuYmVhcmQpO1xuXG4gICAgdGhpcy5CZWFyZCgpO1xuICAgIHRoaXMuR2xhc3NlcygpO1xuICAgIHRoaXMuSGFpcigpO1xuICAgIHRoaXMuRXllcygpO1xuICAgIHRoaXMuRXllQnJvd3MoKTtcbiAgICB0aGlzLkhhdCgpO1xuICAgIHRoaXMuRnJlY2tsZXMoKTtcbiAgICB0aGlzLkZlYXR1cmVzKCk7XG4gICAgdGhpcy5pZGxlKCk7XG4gICAgdGhpcy5ub3JtYWxpemUoKTtcbiAgfVxuXG4gIG5vcm1hbGl6ZSh2LCB2bWluLCB2bWF4LCB0bWluLCB0bWF4KSB7XG4gICAgY29uc3QgbnYgPSBNYXRoLm1heChNYXRoLm1pbih2LCB2bWF4KSwgdm1pbik7XG4gICAgY29uc3QgZHYgPSB2bWF4IC0gdm1pbjtcbiAgICBjb25zdCBwYyA9IChudiAtIHZtaW4pIC8gZHY7XG4gICAgY29uc3QgZHQgPSB0bWF4IC0gdG1pbjtcbiAgICBjb25zdCB0diA9IHRtaW4gKyAocGMgKiBkdCk7XG4gICAgcmV0dXJuIHR2O1xuICB9XG5cbiAgdXBkYXRlQm9keShzcGVlZCwgZXllQmx1ZVJpZ2h0UG9zWCwgZXllQmx1ZUxlZnRQb3NYLCBleWVCbHVlUmlnaHRQb3NZLCBleWVCbHVlTGVmdFBvc1ksIGV5ZUJyb3dSaWdodFBvc1ksIGV5ZUJyb3dMZWZ0UG9zWSkge1xuICAgIHRoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLnggKz0gKGV5ZUJsdWVSaWdodFBvc1ggLSB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi54KSAvIHNwZWVkO1xuICAgIHRoaXMuZXllQmx1ZUxlZnQucG9zaXRpb24ueCArPSAoZXllQmx1ZUxlZnRQb3NYIC0gdGhpcy5leWVCbHVlTGVmdC5wb3NpdGlvbi54KSAvIHNwZWVkO1xuXG4gICAgdGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24ueSArPSAoZXllQmx1ZVJpZ2h0UG9zWSAtIHRoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLnkpIC8gc3BlZWQ7XG4gICAgdGhpcy5leWVCbHVlTGVmdC5wb3NpdGlvbi55ICs9IChleWVCbHVlTGVmdFBvc1kgLSB0aGlzLmV5ZUJsdWVMZWZ0LnBvc2l0aW9uLnkpIC8gc3BlZWQ7XG5cbiAgICB0aGlzLmV5ZUJyb3dSaWdodC5wb3NpdGlvbi55ICs9IChleWVCcm93UmlnaHRQb3NZIC0gdGhpcy5leWVCcm93UmlnaHQucG9zaXRpb24ueSkgLyBzcGVlZDtcbiAgICB0aGlzLmV5ZUJyb3dMZWZ0LnBvc2l0aW9uLnkgKz0gKGV5ZUJyb3dMZWZ0UG9zWSAtIHRoaXMuZXllQnJvd0xlZnQucG9zaXRpb24ueSkgLyBzcGVlZDtcbiAgfVxuXG4gIGlkbGUoeFRhcmdldCA9IDAsIHlUYXJnZXQgPSAwKSB7XG4gICAgbGV0IGRpc3RhbmNlID0gMTtcblxuICAgIHRoaXMuaGVhZC5yb3RhdGlvbi56ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDA1KSAqIE1hdGguUEkgKiAwLjAwNTtcbiAgICB0aGlzLmhlYWQucm90YXRpb24ueCA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwNCkgKiBNYXRoLlBJICogMC4wMztcblxuICAgIGNvbnN0IGV5ZUJsdWVSaWdodFBvc1ggPSB0aGlzLm5vcm1hbGl6ZSh4VGFyZ2V0LCAtMjAwLCAyMDAsIC0wLjYsIDAuNik7XG4gICAgY29uc3QgZXllQmx1ZUxlZnRQb3NYID0gdGhpcy5ub3JtYWxpemUoeFRhcmdldCwgLTIwMCwgMjAwLCAtMC42LCAwLjYpO1xuXG4gICAgY29uc3QgZXllQmx1ZVJpZ2h0UG9zWSA9IHRoaXMubm9ybWFsaXplKHlUYXJnZXQsIC0yMDAsIDIwMCwgMC42LCAtMC42KTtcbiAgICBjb25zdCBleWVCbHVlTGVmdFBvc1kgPSB0aGlzLm5vcm1hbGl6ZSh5VGFyZ2V0LCAtMjAwLCAyMDAsIDAuNiwgLTAuNik7XG5cbiAgICBjb25zdCBleWVCcm93UmlnaHRQb3NZID0gdGhpcy5ub3JtYWxpemUoeFRhcmdldCwgLTIwMCwgMjAwLCAtMSwgMC44KTtcbiAgICBjb25zdCBleWVCcm93TGVmdFBvc1kgPSB0aGlzLm5vcm1hbGl6ZSh4VGFyZ2V0LCAtMjAwLCAyMDAsIC0xLCAwLjgpO1xuXG4gICAgdGhpcy5tb3VzdGFjaGUucG9zaXRpb24ueSA9IE1hdGguY29zKERhdGUubm93KCkgKiAwLjAxKSAqIGRpc3RhbmNlIC8gNDtcbiAgICB0aGlzLm1vdXN0YWNoZS5yb3RhdGlvbi56ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDEpICogTWF0aC5QSSAqIDAuMDE7XG5cbiAgICB0aGlzLm1lc2gucm90YXRpb24ueSA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwMikgKiBNYXRoLlBJICogMC4wNTtcbiAgICB0aGlzLnVwZGF0ZUJvZHkoMTAsIGV5ZUJsdWVSaWdodFBvc1gsIGV5ZUJsdWVMZWZ0UG9zWCwgZXllQmx1ZVJpZ2h0UG9zWSwgZXllQmx1ZUxlZnRQb3NZLCBleWVCcm93UmlnaHRQb3NZLCBleWVCcm93TGVmdFBvc1kpO1xuICB9XG5cbiAgQmVhcmQoKSB7XG4gICAgbGV0IGJlYXJkR2VvbU1lcmdlZCA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuXG4gICAgbGV0IGJlYXJkMUdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMiwgMTAsIDE2KTtcblxuICAgIGxldCBiZWFyZDEgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDFHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkMS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig5LCAwLCAwKSk7XG4gICAgYmVhcmQxLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDEuZ2VvbWV0cnksIGJlYXJkMS5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkMiA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkMUdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmQyLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDcsIC0yLCAyKSk7XG4gICAgYmVhcmQyLnNjYWxlLnogPSAwLjg7XG4gICAgYmVhcmQyLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDIuZ2VvbWV0cnksIGJlYXJkMi5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkMyA9IGJlYXJkMS5jbG9uZSgpO1xuICAgIGJlYXJkMy5wb3NpdGlvbi54ID0gLWJlYXJkMS5wb3NpdGlvbi54O1xuICAgIGJlYXJkMy51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQzLmdlb21ldHJ5LCBiZWFyZDMubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDQgPSBiZWFyZDIuY2xvbmUoKTtcbiAgICBiZWFyZDQucG9zaXRpb24ueCA9IC1iZWFyZDIucG9zaXRpb24ueDtcbiAgICBiZWFyZDQudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkNC5nZW9tZXRyeSwgYmVhcmQ0Lm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQyR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgzLCAxNCwgMTApO1xuICAgIGJlYXJkMkdlb20udmVydGljZXNbMl0ueiAtPSAyO1xuICAgIGJlYXJkMkdlb20udmVydGljZXNbN10ueiAtPSAyO1xuXG4gICAgbGV0IGJlYXJkNSA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkMkdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmQ1LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDUsIC01LCA0KSk7XG4gICAgYmVhcmQ1LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDUuZ2VvbWV0cnksIGJlYXJkNS5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkM0dlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMi41LCAxNCwgMTApO1xuICAgIGJlYXJkM0dlb20udmVydGljZXNbMl0ueiAtPSAyO1xuICAgIGJlYXJkM0dlb20udmVydGljZXNbN10ueiAtPSAyO1xuXG4gICAgbGV0IGJlYXJkNiA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkM0dlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmQ2LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDIuNSwgLTYsIDYpKTtcbiAgICBiZWFyZDYudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkNi5nZW9tZXRyeSwgYmVhcmQ2Lm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQ3ID0gYmVhcmQ1LmNsb25lKCk7XG4gICAgYmVhcmQ3LnBvc2l0aW9uLnggPSAtYmVhcmQ1LnBvc2l0aW9uLng7XG4gICAgYmVhcmQ3LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDcuZ2VvbWV0cnksIGJlYXJkNy5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkOCA9IGJlYXJkNi5jbG9uZSgpO1xuICAgIGJlYXJkOC5wb3NpdGlvbi54ID0gLWJlYXJkNi5wb3NpdGlvbi54O1xuICAgIGJlYXJkOC51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQ4Lmdlb21ldHJ5LCBiZWFyZDgubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDRHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDIuNSwgMTQuNSwgMTApO1xuICAgIGJlYXJkNEdlb20udmVydGljZXNbMl0ueiAtPSAxO1xuICAgIGJlYXJkNEdlb20udmVydGljZXNbN10ueiAtPSAxO1xuXG4gICAgbGV0IGJlYXJkOSA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkNEdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmQ5LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDAsIC03LCA1Ljc1KSk7XG4gICAgYmVhcmQ5LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDkuZ2VvbWV0cnksIGJlYXJkOS5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkNUdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoNCwgOCwgOCk7XG4gICAgbGV0IGJlYXJkMTAgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDVHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkMTAuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oLTYsIC0xLCAtMikpO1xuICAgIGJlYXJkMTAudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkMTAuZ2VvbWV0cnksIGJlYXJkMTAubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDExID0gbmV3IFRIUkVFLk1lc2goYmVhcmQ1R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBiZWFyZDExLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDAsIC01LCAtMikpO1xuICAgIGJlYXJkMTEudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkMTEuZ2VvbWV0cnksIGJlYXJkMTEubWF0cml4KTtcblxuICAgIGxldCBiZWFyZE1lcmdlZCA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkR2VvbU1lcmdlZCwgTWF0LndoaXRlTWF0KTtcbiAgICBiZWFyZE1lcmdlZC5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICBiZWFyZE1lcmdlZC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcblxuICAgIGxldCBtb3V0aEdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTAsIDQsIDEpO1xuICAgIGxldCBtb3V0aCA9IG5ldyBUSFJFRS5NZXNoKG1vdXRoR2VvbSwgTWF0LmJsYWNrTWF0KTtcbiAgICBtb3V0aC5wb3NpdGlvbi5zZXQoMCwgMiwgOCk7XG4gICAgbW91dGguY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIG1vdXRoLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuXG4gICAgbGV0IHRlZXRoR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxMCwgMSwgMSk7XG4gICAgbGV0IHRlZXRoID0gbmV3IFRIUkVFLk1lc2godGVldGhHZW9tLCBNYXQudGVldGhNYXQpO1xuICAgIHRlZXRoLnBvc2l0aW9uLnNldCgwLCAwLjUsIDAuMSk7XG4gICAgdGVldGguY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRlZXRoLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuICAgIG1vdXRoLmFkZCh0ZWV0aClcblxuICAgIHRoaXMuYmVhcmQuYWRkKGJlYXJkTWVyZ2VkLCBtb3V0aCk7XG5cbiAgICBsZXQgbW91c3RhY2hlR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxNCwgMywgMywgMyk7XG4gICAgbW91c3RhY2hlR2VvbS52ZXJ0aWNlc1swXS55IC09IDI7XG4gICAgbW91c3RhY2hlR2VvbS52ZXJ0aWNlc1sxXS55IC09IDI7XG4gICAgbW91c3RhY2hlR2VvbS52ZXJ0aWNlc1syXS55IC09IDI7XG4gICAgbW91c3RhY2hlR2VvbS52ZXJ0aWNlc1szXS55IC09IDI7XG4gICAgbW91c3RhY2hlR2VvbS52ZXJ0aWNlc1s0XS55IC09IDI7XG4gICAgbW91c3RhY2hlR2VvbS52ZXJ0aWNlc1s1XS55IC09IDI7XG4gICAgbW91c3RhY2hlR2VvbS52ZXJ0aWNlc1s2XS55IC09IDI7XG4gICAgbW91c3RhY2hlR2VvbS52ZXJ0aWNlc1s3XS55IC09IDI7XG4gICAgbW91c3RhY2hlR2VvbS52ZXJ0aWNlc1s4XS54IC09IDE7XG4gICAgbW91c3RhY2hlR2VvbS52ZXJ0aWNlc1s5XS54ICs9IDE7XG5cbiAgICBtb3VzdGFjaGVHZW9tLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDAsIDQsIDApKTtcbiAgICB0aGlzLm1vdXN0YWNoZSA9IG5ldyBUSFJFRS5NZXNoKG1vdXN0YWNoZUdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgdGhpcy5tb3VzdGFjaGUuY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgdGhpcy5tb3VzdGFjaGUucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG5cbiAgICB0aGlzLm1vdXN0YWNoZS5wb3NpdGlvbi5zZXQoMCwgMCwgOSk7XG4gICAgdGhpcy5iZWFyZC5hZGQodGhpcy5tb3VzdGFjaGUpO1xuICB9XG5cbiAgR2xhc3NlcygpIHtcblxuICAgIHRoaXMuZ2xhc3NlcyA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHRoaXMuZ2xhc3Nlcy5wb3NpdGlvbi5zZXQoMCwgMCwgOSk7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmdsYXNzZXMpO1xuICAgIGxldCBnbGFzc2VzTWF0ID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmdsYXNzZXMsIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG5cbiAgICBsZXQgZnJhbWVHZW9tTWVyZ2VkID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XG5cbiAgICBsZXQgZnJhbWVPdXRlckdlb20gPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgzLCAzLCAwLjUsIDMyKVxuICAgIGxldCBmcmFtZUlubmVyR2VvbSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDIuNywgMi43LCAwLjUsIDMyKVxuXG4gICAgZnJhbWVPdXRlckdlb20uYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25YKC1NYXRoLlBJIC8gMikpO1xuICAgIGZyYW1lSW5uZXJHZW9tLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWCgtTWF0aC5QSSAvIDIpKTtcblxuICAgIGxldCBmcmFtZUJTUCA9IG5ldyBUaHJlZUJTUChmcmFtZU91dGVyR2VvbSk7XG4gICAgbGV0IGZyYW1lQ3V0QlNQID0gbmV3IFRocmVlQlNQKGZyYW1lSW5uZXJHZW9tKTtcblxuICAgIGxldCBmcmFtZWludGVyc2VjdGlvbkJTUCA9IGZyYW1lQlNQLnN1YnRyYWN0KGZyYW1lQ3V0QlNQKTtcbiAgICBsZXQgZnJhbWVMZWZ0ID0gZnJhbWVpbnRlcnNlY3Rpb25CU1AudG9NZXNoKGdsYXNzZXNNYXQpO1xuXG4gICAgZnJhbWVMZWZ0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDQsIDMsIDApKTtcbiAgICBmcmFtZUxlZnQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJhbWVHZW9tTWVyZ2VkLm1lcmdlKGZyYW1lTGVmdC5nZW9tZXRyeSwgZnJhbWVMZWZ0Lm1hdHJpeCk7XG5cbiAgICBsZXQgZnJhbWVSaWdodCA9IGZyYW1lTGVmdC5jbG9uZSgpO1xuICAgIGZyYW1lUmlnaHQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKE1hdGguUEkgLyAzMCkpO1xuICAgIGZyYW1lUmlnaHQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oLTcuNSwgLTAuMjUsIDApKTtcbiAgICBmcmFtZVJpZ2h0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyYW1lR2VvbU1lcmdlZC5tZXJnZShmcmFtZVJpZ2h0Lmdlb21ldHJ5LCBmcmFtZVJpZ2h0Lm1hdHJpeCk7XG5cbiAgICBsZXQgZnJhbWVNaWRHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDIsIC4zLCAuNSk7XG4gICAgbGV0IGZyYW1lTWlkID0gbmV3IFRIUkVFLk1lc2goZnJhbWVNaWRHZW9tLCBnbGFzc2VzTWF0KTtcbiAgICBmcmFtZU1pZC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigwLCAzLjMsIC0wLjMpKTtcbiAgICBmcmFtZU1pZC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmFtZUdlb21NZXJnZWQubWVyZ2UoZnJhbWVNaWQuZ2VvbWV0cnksIGZyYW1lTWlkLm1hdHJpeCk7XG5cbiAgICBsZXQgZnJhbWVFbmRHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEuNSwgLjUsIDEpO1xuICAgIGxldCBmcmFtZUVuZFJpZ2h0ID0gbmV3IFRIUkVFLk1lc2goZnJhbWVFbmRHZW9tLCBnbGFzc2VzTWF0KTtcbiAgICBmcmFtZUVuZFJpZ2h0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDcuNSwgMywgMCkpO1xuICAgIGZyYW1lRW5kUmlnaHQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJhbWVHZW9tTWVyZ2VkLm1lcmdlKGZyYW1lRW5kUmlnaHQuZ2VvbWV0cnksIGZyYW1lRW5kUmlnaHQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZUVuZExlZnQgPSBmcmFtZUVuZFJpZ2h0LmNsb25lKCk7XG4gICAgZnJhbWVFbmRMZWZ0LnBvc2l0aW9uLnggPSAtZnJhbWVFbmRSaWdodC5wb3NpdGlvbi54O1xuICAgIGZyYW1lRW5kTGVmdC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmFtZUdlb21NZXJnZWQubWVyZ2UoZnJhbWVFbmRMZWZ0Lmdlb21ldHJ5LCBmcmFtZUVuZExlZnQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZVNwb2tlR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLCAwLjUsIDEyKTtcbiAgICBsZXQgZnJhbWVTcG9rZVJpZ2h0ID0gbmV3IFRIUkVFLk1lc2goZnJhbWVTcG9rZUdlb20sIGdsYXNzZXNNYXQpO1xuICAgIGZyYW1lU3Bva2VSaWdodC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig4LCAzLCAtNS41KSk7XG4gICAgZnJhbWVTcG9rZVJpZ2h0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyYW1lR2VvbU1lcmdlZC5tZXJnZShmcmFtZVNwb2tlUmlnaHQuZ2VvbWV0cnksIGZyYW1lU3Bva2VSaWdodC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lU3Bva2VMZWZ0ID0gZnJhbWVTcG9rZVJpZ2h0LmNsb25lKCk7XG4gICAgZnJhbWVTcG9rZUxlZnQucG9zaXRpb24ueCA9IC1mcmFtZVNwb2tlUmlnaHQucG9zaXRpb24ueDtcbiAgICBmcmFtZVNwb2tlTGVmdC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmFtZUdlb21NZXJnZWQubWVyZ2UoZnJhbWVTcG9rZUxlZnQuZ2VvbWV0cnksIGZyYW1lU3Bva2VMZWZ0Lm1hdHJpeCk7XG5cbiAgICBsZXQgZnJhbWVNZXJnZWQgPSBuZXcgVEhSRUUuTWVzaChmcmFtZUdlb21NZXJnZWQsIGdsYXNzZXNNYXQpO1xuICAgIGZyYW1lTWVyZ2VkLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBmcmFtZU1lcmdlZC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcblxuICAgIHRoaXMuZ2xhc3Nlcy5hZGQoZnJhbWVNZXJnZWQpO1xuXG4gIH1cblxuICBIYWlyKCkge1xuXG4gICAgdGhpcy5oYWlyID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgdGhpcy5oYWlyLnBvc2l0aW9uLnNldCgwLCA5LCAwKTtcbiAgICB0aGlzLmhlYWQuYWRkKHRoaXMuaGFpcik7XG5cbiAgICBsZXQgaGFpckdlb21NZXJnZWQgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcblxuICAgIGxldCBoYWlyRmxhdEdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTAsIDIsIDE4KTtcblxuICAgIGxldCBoYWlyMSA9IG5ldyBUSFJFRS5NZXNoKGhhaXJGbGF0R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyMS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooLU1hdGguUEkgLyA0MCkpO1xuICAgIGhhaXIxLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKC00LCAtMC41LCAwKSk7XG4gICAgaGFpcjEudXBkYXRlTWF0cml4KCk7XG4gICAgaGFpckdlb21NZXJnZWQubWVyZ2UoaGFpcjEuZ2VvbWV0cnksIGhhaXIxLm1hdHJpeCk7XG5cbiAgICBsZXQgaGFpcjIgPSBuZXcgVEhSRUUuTWVzaChoYWlyRmxhdEdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgaGFpcjIuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKC1NYXRoLlBJIC8gMTApKTtcbiAgICBoYWlyMi5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigtMiwgMSwgMCkpO1xuICAgIGhhaXIyLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGhhaXJHZW9tTWVyZ2VkLm1lcmdlKGhhaXIyLmdlb21ldHJ5LCBoYWlyMi5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXIzID0gbmV3IFRIUkVFLk1lc2goaGFpckZsYXRHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGhhaXIzLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWigtTWF0aC5QSSAvIDUpKTtcbiAgICBoYWlyMy5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigyLCAxLCAwKSk7XG4gICAgaGFpcjMudXBkYXRlTWF0cml4KCk7XG4gICAgaGFpckdlb21NZXJnZWQubWVyZ2UoaGFpcjMuZ2VvbWV0cnksIGhhaXIzLm1hdHJpeCk7XG5cbiAgICBsZXQgaGFpcjQgPSBuZXcgVEhSRUUuTWVzaChoYWlyRmxhdEdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgaGFpcjQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKC1NYXRoLlBJIC8gNCkpO1xuICAgIGhhaXI0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDYsIDAsIDApKTtcbiAgICBoYWlyNC51cGRhdGVNYXRyaXgoKTtcbiAgICBoYWlyR2VvbU1lcmdlZC5tZXJnZShoYWlyNC5nZW9tZXRyeSwgaGFpcjQubWF0cml4KTtcblxuICAgIGxldCBoYWlyNiA9IG5ldyBUSFJFRS5NZXNoKGhhaXJGbGF0R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyNi5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooLU1hdGguUEkgLyAtMykpO1xuICAgIGhhaXI2LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKC03Ljc1LCAtLjUsIDApKTtcbiAgICBoYWlyNi51cGRhdGVNYXRyaXgoKTtcbiAgICBoYWlyR2VvbU1lcmdlZC5tZXJnZShoYWlyNi5nZW9tZXRyeSwgaGFpcjYubWF0cml4KTtcblxuICAgIGxldCBoYWlyRmxhdEJhY2tHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDE4LCA3LCA2KTtcbiAgICBoYWlyRmxhdEJhY2tHZW9tLnZlcnRpY2VzWzBdLnggLT0gMTtcbiAgICBoYWlyRmxhdEJhY2tHZW9tLnZlcnRpY2VzWzFdLnggLT0gMTtcbiAgICBoYWlyRmxhdEJhY2tHZW9tLnZlcnRpY2VzWzRdLnggKz0gMTtcbiAgICBoYWlyRmxhdEJhY2tHZW9tLnZlcnRpY2VzWzVdLnggKz0gMTtcblxuICAgIGxldCBoYWlyNSA9IG5ldyBUSFJFRS5NZXNoKGhhaXJGbGF0QmFja0dlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgaGFpcjUuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oMCwgLTQuNSwgLTYpKTtcbiAgICBoYWlyNS51cGRhdGVNYXRyaXgoKTtcbiAgICBoYWlyR2VvbU1lcmdlZC5tZXJnZShoYWlyNS5nZW9tZXRyeSwgaGFpcjUubWF0cml4KTtcblxuICAgIGxldCBoYWlyTWVyZ2VkID0gbmV3IFRIUkVFLk1lc2goaGFpckdlb21NZXJnZWQsIE1hdC53aGl0ZU1hdCk7XG4gICAgaGFpck1lcmdlZC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgaGFpck1lcmdlZC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcblxuICAgIHRoaXMuaGFpci5hZGQoaGFpck1lcmdlZCk7XG5cbiAgfVxuXG4gIEV5ZXMoKSB7XG5cbiAgICB0aGlzLmV5ZXMgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmV5ZXMucG9zaXRpb24uc2V0KDAsIDMsIDkpO1xuICAgIHRoaXMuaGVhZC5hZGQodGhpcy5leWVzKTtcblxuICAgIGxldCBleWVXaGl0ZUdlb20gPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSgyLjUsIDIuNSk7XG5cbiAgICBsZXQgZXllV2hpdGVSaWdodCA9IG5ldyBUSFJFRS5NZXNoKGV5ZVdoaXRlR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBleWVXaGl0ZVJpZ2h0LnBvc2l0aW9uLnNldCgtMy43NSwgMCwgMCk7XG4gICAgZXllV2hpdGVSaWdodC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgZXllV2hpdGVSaWdodC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICBsZXQgZXllQmx1ZUdlb20gPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSgxLjUsIDEuNSk7XG5cbiAgICBsZXQgZXllTWF0ID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmV5ZSwgZmxhdFNoYWRpbmc6IHRydWV9KTtcblxuICAgIHRoaXMuZXllQmx1ZVJpZ2h0ID0gbmV3IFRIUkVFLk1lc2goZXllQmx1ZUdlb20sIGV5ZU1hdCk7XG4gICAgdGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24uc2V0KDAsIDAsIC4wMSk7XG4gICAgdGhpcy5leWVCbHVlUmlnaHQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuZXllQmx1ZVJpZ2h0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIGV5ZVdoaXRlUmlnaHQuYWRkKHRoaXMuZXllQmx1ZVJpZ2h0KTtcblxuICAgIGxldCBleWVQdXBpbEdlb20gPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSgxLCAxKTtcblxuICAgIHRoaXMuZXllUHVwaWxSaWdodCA9IG5ldyBUSFJFRS5NZXNoKGV5ZVB1cGlsR2VvbSwgTWF0LmJsYWNrTWF0KTtcbiAgICB0aGlzLmV5ZVB1cGlsUmlnaHQucG9zaXRpb24uc2V0KDAsIDAsIC4wMik7XG4gICAgdGhpcy5leWVQdXBpbFJpZ2h0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmV5ZVB1cGlsUmlnaHQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5leWVCbHVlUmlnaHQuYWRkKHRoaXMuZXllUHVwaWxSaWdodCk7XG5cbiAgICBsZXQgZXllV2hpdGVMZWZ0ID0gbmV3IFRIUkVFLk1lc2goZXllV2hpdGVHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGV5ZVdoaXRlTGVmdC5wb3NpdGlvbi5zZXQoMy43NSwgMCwgMCk7XG4gICAgZXllV2hpdGVMZWZ0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBleWVXaGl0ZUxlZnQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5leWVCbHVlTGVmdCA9IG5ldyBUSFJFRS5NZXNoKGV5ZUJsdWVHZW9tLCBleWVNYXQpO1xuICAgIHRoaXMuZXllQmx1ZUxlZnQucG9zaXRpb24uc2V0KDAsIDAsIC4wMSk7XG4gICAgdGhpcy5leWVCbHVlTGVmdC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5leWVCbHVlTGVmdC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICBleWVXaGl0ZUxlZnQuYWRkKHRoaXMuZXllQmx1ZUxlZnQpO1xuXG4gICAgdGhpcy5leWVQdXBpbExlZnQgPSBuZXcgVEhSRUUuTWVzaChleWVQdXBpbEdlb20sIE1hdC5ibGFja01hdCk7XG4gICAgdGhpcy5leWVQdXBpbExlZnQucG9zaXRpb24uc2V0KDAsIDAsIC4wMik7XG4gICAgdGhpcy5leWVQdXBpbExlZnQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuZXllUHVwaWxMZWZ0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuZXllQmx1ZUxlZnQuYWRkKHRoaXMuZXllUHVwaWxMZWZ0KTtcblxuICAgIHRoaXMuZXllcy5hZGQoZXllV2hpdGVSaWdodCwgZXllV2hpdGVMZWZ0KTtcbiAgfVxuXG4gIEV5ZUJyb3dzKCkge1xuICAgIHRoaXMuZXllQnJvd3MgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmV5ZUJyb3dzLnBvc2l0aW9uLnNldCgwLCA2LCA4KTtcbiAgICB0aGlzLmhlYWQuYWRkKHRoaXMuZXllQnJvd3MpO1xuXG4gICAgbGV0IGV5ZUJyb3dHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDQsIDEsIDEpO1xuXG4gICAgdGhpcy5leWVCcm93UmlnaHQgPSBuZXcgVEhSRUUuTWVzaChleWVCcm93R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICB0aGlzLmV5ZUJyb3dSaWdodC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooTWF0aC5QSSAvIDQ1KSk7XG4gICAgdGhpcy5leWVCcm93UmlnaHQucG9zaXRpb24uc2V0KC0zLjc1LCAwLCAwKTtcbiAgICB0aGlzLmV5ZUJyb3dSaWdodC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5leWVCcm93UmlnaHQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5leWVCcm93TGVmdCA9IG5ldyBUSFJFRS5NZXNoKGV5ZUJyb3dHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIHRoaXMuZXllQnJvd0xlZnQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKC1NYXRoLlBJIC8gNDUpKTtcbiAgICB0aGlzLmV5ZUJyb3dMZWZ0LnBvc2l0aW9uLnNldCgzLjc1LCAwLCAwKTtcbiAgICB0aGlzLmV5ZUJyb3dMZWZ0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmV5ZUJyb3dMZWZ0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuZXllQnJvd3MuYWRkKHRoaXMuZXllQnJvd1JpZ2h0LCB0aGlzLmV5ZUJyb3dMZWZ0KTtcbiAgfVxuXG4gIEhhdCgpIHtcbiAgICB0aGlzLmhhdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHRoaXMuaGF0LnBvc2l0aW9uLnNldCgtMC4yLCAxMSwgMi40KTtcbiAgICB0aGlzLmhlYWQuYWRkKHRoaXMuaGF0KTtcblxuICAgIGxldCBoYXRNYXQgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuaGF0LCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuXG4gICAgbGV0IGJhbmRHZW9tID0gbmV3IFRIUkVFLlRvcnVzR2VvbWV0cnkoOSwgMiwgMTYsIDEwMCk7XG4gICAgbGV0IGJpZ0NvbmVHZW9tID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMSwgMTEsIDEyLCAxNSk7XG4gICAgbGV0IHNtYWxsQ29uZUdlb20gPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgwLjgsIDMsIDksIDMyKTtcbiAgICBsZXQgaGF0RGluZ2xlR2VvbSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxLjUsIDgsIDgpO1xuXG4gICAgdGhpcy5iYW5kID0gbmV3IFRIUkVFLk1lc2goYmFuZEdlb20sIE1hdC50ZWV0aE1hdCk7XG4gICAgdGhpcy5iYW5kLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWChNYXRoLlBJIC8gMikpO1xuICAgIHRoaXMuYmFuZC5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XG4gICAgdGhpcy5iYW5kLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmJhbmQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5iaWdDb25lID0gbmV3IFRIUkVFLk1lc2goYmlnQ29uZUdlb20sIGhhdE1hdCk7XG4gICAgdGhpcy5iaWdDb25lLnBvc2l0aW9uLnNldCgwLCA2LCAwKTtcbiAgICB0aGlzLmJpZ0NvbmUuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuYmlnQ29uZS5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLnNtYWxsQ29uZSA9IG5ldyBUSFJFRS5NZXNoKHNtYWxsQ29uZUdlb20sIGhhdE1hdCk7XG4gICAgdGhpcy5zbWFsbENvbmUuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25YKE1hdGguUEkgLyAyKSk7XG4gICAgdGhpcy5zbWFsbENvbmUuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25ZKE1hdGguUEkgLyAyKSk7XG4gICAgdGhpcy5zbWFsbENvbmUuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKE1hdGguUEkgLyAtOCkpO1xuICAgIHRoaXMuc21hbGxDb25lLnBvc2l0aW9uLnNldCg0LCA3LjgsIC0xKTtcbiAgICB0aGlzLnNtYWxsQ29uZS5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5zbWFsbENvbmUucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5oYXREaW5nbGUgPSBuZXcgVEhSRUUuTWVzaChoYXREaW5nbGVHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIHRoaXMuaGF0RGluZ2xlLnBvc2l0aW9uLnNldCg5LCA1LjUsIC0xKTtcbiAgICB0aGlzLmhhdERpbmdsZS5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5oYXREaW5nbGUucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5oYXQuYWRkKHRoaXMuYmFuZCwgdGhpcy5iaWdDb25lLCB0aGlzLnNtYWxsQ29uZSwgdGhpcy5oYXREaW5nbGUpO1xuICB9XG5cbiAgRnJlY2tsZXMoKSB7XG4gICAgdGhpcy5mcmVja2xlcyA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHRoaXMuZnJlY2tsZXMucG9zaXRpb24uc2V0KDAsIDAsIDgpO1xuICAgIHRoaXMuaGVhZC5hZGQodGhpcy5mcmVja2xlcyk7XG5cbiAgICBsZXQgZnJlY2tsZXNNYXQgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5mcmVja2xlcywgZmxhdFNoYWRpbmc6IHRydWV9KTtcbiAgICBsZXQgZnJlY2tsZXNHZW9tTWVyZ2VkID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XG5cbiAgICBsZXQgZnJlY2tsZXNHZW9tID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMC41LCAwLjUpO1xuXG4gICAgbGV0IGZyZWNrbGUxID0gbmV3IFRIUkVFLk1lc2goZnJlY2tsZXNHZW9tLCBmcmVja2xlc01hdCk7XG4gICAgZnJlY2tsZTEuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oLTUsIDAsIDAuMDEpKTtcbiAgICBmcmVja2xlMS51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmVja2xlc0dlb21NZXJnZWQubWVyZ2UoZnJlY2tsZTEuZ2VvbWV0cnksIGZyZWNrbGUxLm1hdHJpeCk7XG5cbiAgICBsZXQgZnJlY2tsZTIgPSBmcmVja2xlMS5jbG9uZSgpO1xuICAgIGZyZWNrbGUyLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKC0wLjUsIC0xLCAwKSk7XG4gICAgZnJlY2tsZTIudXBkYXRlTWF0cml4KCk7XG4gICAgZnJlY2tsZXNHZW9tTWVyZ2VkLm1lcmdlKGZyZWNrbGUyLmdlb21ldHJ5LCBmcmVja2xlMi5tYXRyaXgpO1xuXG4gICAgbGV0IGZyZWNrbGUzID0gZnJlY2tsZTEuY2xvbmUoKTtcbiAgICBmcmVja2xlMy5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigxLCAtMC41LCAwKSk7XG4gICAgZnJlY2tsZTMudXBkYXRlTWF0cml4KCk7XG4gICAgZnJlY2tsZXNHZW9tTWVyZ2VkLm1lcmdlKGZyZWNrbGUzLmdlb21ldHJ5LCBmcmVja2xlMy5tYXRyaXgpO1xuXG4gICAgbGV0IGZyZWNrbGU0ID0gZnJlY2tsZTEuY2xvbmUoKTtcbiAgICBmcmVja2xlNC5wb3NpdGlvbi54ID0gLWZyZWNrbGUxLnBvc2l0aW9uLng7XG4gICAgZnJlY2tsZTQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJlY2tsZXNHZW9tTWVyZ2VkLm1lcmdlKGZyZWNrbGU0Lmdlb21ldHJ5LCBmcmVja2xlNC5tYXRyaXgpO1xuICAgIGxldCBmcmVja2xlNSA9IGZyZWNrbGUyLmNsb25lKCk7XG4gICAgZnJlY2tsZTUucG9zaXRpb24ueCA9IC1mcmVja2xlMi5wb3NpdGlvbi54O1xuICAgIGZyZWNrbGU1LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyZWNrbGVzR2VvbU1lcmdlZC5tZXJnZShmcmVja2xlNS5nZW9tZXRyeSwgZnJlY2tsZTUubWF0cml4KTtcbiAgICBsZXQgZnJlY2tsZTYgPSBmcmVja2xlMy5jbG9uZSgpO1xuICAgIGZyZWNrbGU2LnBvc2l0aW9uLnggPSAtZnJlY2tsZTMucG9zaXRpb24ueDtcbiAgICBmcmVja2xlNi51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmVja2xlc0dlb21NZXJnZWQubWVyZ2UoZnJlY2tsZTYuZ2VvbWV0cnksIGZyZWNrbGU2Lm1hdHJpeCk7XG5cbiAgICBsZXQgZnJlY2tsZWRNZXJnZWQgPSBuZXcgVEhSRUUuTWVzaChmcmVja2xlc0dlb21NZXJnZWQsIGZyZWNrbGVzTWF0KTtcbiAgICBmcmVja2xlZE1lcmdlZC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgZnJlY2tsZWRNZXJnZWQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5mcmVja2xlcy5hZGQoZnJlY2tsZWRNZXJnZWQpO1xuICB9XG5cbiAgRmVhdHVyZXMoKSB7XG4gICAgbGV0IGVhckdlb20gPSBuZXcgVEhSRUUuQm94QnVmZmVyR2VvbWV0cnkoMS41LCAzLCAxLjUpO1xuICAgIGxldCBza2luTWF0ID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuc2tpbiwgZmxhdFNoYWRpbmc6IHRydWV9KTtcbiAgICBsZXQgZWFyUmlnaHQgPSBuZXcgVEhSRUUuTWVzaChlYXJHZW9tLCBza2luTWF0KTtcbiAgICBlYXJSaWdodC5wb3NpdGlvbi5zZXQoLTguNSwgMSwgMyk7XG4gICAgZWFyUmlnaHQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIGVhclJpZ2h0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIGxldCBlYXJMZWZ0ID0gbmV3IFRIUkVFLk1lc2goZWFyR2VvbSwgc2tpbk1hdCk7XG4gICAgZWFyTGVmdC5wb3NpdGlvbi5zZXQoOC41LCAxLCAzKTtcbiAgICBlYXJMZWZ0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBlYXJMZWZ0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIGxldCBub3NlR2VvbSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDEsIDIsIDQsIDQpO1xuICAgIGxldCBub3NlID0gbmV3IFRIUkVFLk1lc2gobm9zZUdlb20sIHNraW5NYXQpO1xuICAgIG5vc2Uuc2NhbGUuc2V0KC43NSwgMSwgMS4zKTtcbiAgICBub3NlLnBvc2l0aW9uLnNldCgwLCAxLCA4KTtcbiAgICBub3NlLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBub3NlLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuaGVhZC5hZGQoZWFyUmlnaHQsIGVhckxlZnQsIG5vc2UpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY2xhc3Nlcy9IZWFkLmpzIiwiaW1wb3J0IENvbG9ycyBmcm9tICcuL2NvbG9ycyc7XG5jb25zdCBNYXRlcmlhbHMgPSB7XG4gIFwid2hpdGVNYXRcIjogbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMud2hpdGUsIGZsYXRTaGFkaW5nOiB0cnVlfSksXG4gIFwidGVldGhNYXRcIjogbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjogQ29sb3JzLnRlZXRoLCBmbGF0U2hhZGluZzogdHJ1ZX0pLFxuICBcImJsYWNrTWF0XCI6IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmJsYWNrLCBmbGF0U2hhZGluZzogdHJ1ZX0pLFxuICBcIm5vcm1hbE1hdFwiOiBuZXcgVEhSRUUuTWVzaE5vcm1hbE1hdGVyaWFsKHt9KVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWF0ZXJpYWxzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL29iamVjdHMvTWF0ZXJpYWxzLmpzIiwiKGZ1bmN0aW9uKHNlbGYpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGlmIChzZWxmLmZldGNoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgc3VwcG9ydCA9IHtcbiAgICBzZWFyY2hQYXJhbXM6ICdVUkxTZWFyY2hQYXJhbXMnIGluIHNlbGYsXG4gICAgaXRlcmFibGU6ICdTeW1ib2wnIGluIHNlbGYgJiYgJ2l0ZXJhdG9yJyBpbiBTeW1ib2wsXG4gICAgYmxvYjogJ0ZpbGVSZWFkZXInIGluIHNlbGYgJiYgJ0Jsb2InIGluIHNlbGYgJiYgKGZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbmV3IEJsb2IoKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pKCksXG4gICAgZm9ybURhdGE6ICdGb3JtRGF0YScgaW4gc2VsZixcbiAgICBhcnJheUJ1ZmZlcjogJ0FycmF5QnVmZmVyJyBpbiBzZWxmXG4gIH1cblxuICBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlcikge1xuICAgIHZhciB2aWV3Q2xhc3NlcyA9IFtcbiAgICAgICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDY0QXJyYXldJ1xuICAgIF1cblxuICAgIHZhciBpc0RhdGFWaWV3ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIERhdGFWaWV3LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKG9iailcbiAgICB9XG5cbiAgICB2YXIgaXNBcnJheUJ1ZmZlclZpZXcgPSBBcnJheUJ1ZmZlci5pc1ZpZXcgfHwgZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHZpZXdDbGFzc2VzLmluZGV4T2YoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikpID4gLTFcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVOYW1lKG5hbWUpIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lID0gU3RyaW5nKG5hbWUpXG4gICAgfVxuICAgIGlmICgvW15hLXowLTlcXC0jJCUmJyorLlxcXl9gfH5dL2kudGVzdChuYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjaGFyYWN0ZXIgaW4gaGVhZGVyIGZpZWxkIG5hbWUnKVxuICAgIH1cbiAgICByZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpXG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvLyBCdWlsZCBhIGRlc3RydWN0aXZlIGl0ZXJhdG9yIGZvciB0aGUgdmFsdWUgbGlzdFxuICBmdW5jdGlvbiBpdGVyYXRvckZvcihpdGVtcykge1xuICAgIHZhciBpdGVyYXRvciA9IHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpXG4gICAgICAgIHJldHVybiB7ZG9uZTogdmFsdWUgPT09IHVuZGVmaW5lZCwgdmFsdWU6IHZhbHVlfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvclxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpdGVyYXRvclxuICB9XG5cbiAgZnVuY3Rpb24gSGVhZGVycyhoZWFkZXJzKSB7XG4gICAgdGhpcy5tYXAgPSB7fVxuXG4gICAgaWYgKGhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgdmFsdWUpXG4gICAgICB9LCB0aGlzKVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShoZWFkZXJzKSkge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhlYWRlcikge1xuICAgICAgICB0aGlzLmFwcGVuZChoZWFkZXJbMF0sIGhlYWRlclsxXSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfSBlbHNlIGlmIChoZWFkZXJzKSB7XG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgaGVhZGVyc1tuYW1lXSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICAgIHZhbHVlID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG4gICAgdmFyIG9sZFZhbHVlID0gdGhpcy5tYXBbbmFtZV1cbiAgICB0aGlzLm1hcFtuYW1lXSA9IG9sZFZhbHVlID8gb2xkVmFsdWUrJywnK3ZhbHVlIDogdmFsdWVcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlWydkZWxldGUnXSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICAgIHJldHVybiB0aGlzLmhhcyhuYW1lKSA/IHRoaXMubWFwW25hbWVdIDogbnVsbFxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShub3JtYWxpemVOYW1lKG5hbWUpKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLm1hcCkge1xuICAgICAgaWYgKHRoaXMubWFwLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdGhpcy5tYXBbbmFtZV0sIG5hbWUsIHRoaXMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2gobmFtZSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkgeyBpdGVtcy5wdXNoKHZhbHVlKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICBIZWFkZXJzLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gSGVhZGVycy5wcm90b3R5cGUuZW50cmllc1xuICB9XG5cbiAgZnVuY3Rpb24gY29uc3VtZWQoYm9keSkge1xuICAgIGlmIChib2R5LmJvZHlVc2VkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJykpXG4gICAgfVxuICAgIGJvZHkuYm9keVVzZWQgPSB0cnVlXG4gIH1cblxuICBmdW5jdGlvbiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpXG4gICAgICB9XG4gICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QocmVhZGVyLmVycm9yKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzQXJyYXlCdWZmZXIoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzVGV4dChibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoYmxvYilcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEFycmF5QnVmZmVyQXNUZXh0KGJ1Zikge1xuICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgIHZhciBjaGFycyA9IG5ldyBBcnJheSh2aWV3Lmxlbmd0aClcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgICAgY2hhcnNbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHZpZXdbaV0pXG4gICAgfVxuICAgIHJldHVybiBjaGFycy5qb2luKCcnKVxuICB9XG5cbiAgZnVuY3Rpb24gYnVmZmVyQ2xvbmUoYnVmKSB7XG4gICAgaWYgKGJ1Zi5zbGljZSkge1xuICAgICAgcmV0dXJuIGJ1Zi5zbGljZSgwKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zi5ieXRlTGVuZ3RoKVxuICAgICAgdmlldy5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmKSlcbiAgICAgIHJldHVybiB2aWV3LmJ1ZmZlclxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEJvZHkoKSB7XG4gICAgdGhpcy5ib2R5VXNlZCA9IGZhbHNlXG5cbiAgICB0aGlzLl9pbml0Qm9keSA9IGZ1bmN0aW9uKGJvZHkpIHtcbiAgICAgIHRoaXMuX2JvZHlJbml0ID0gYm9keVxuICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gJydcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmJsb2IgJiYgQmxvYi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QmxvYiA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5mb3JtRGF0YSAmJiBGb3JtRGF0YS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5Rm9ybURhdGEgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkudG9TdHJpbmcoKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIHN1cHBvcnQuYmxvYiAmJiBpc0RhdGFWaWV3KGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkuYnVmZmVyKVxuICAgICAgICAvLyBJRSAxMC0xMSBjYW4ndCBoYW5kbGUgYSBEYXRhVmlldyBib2R5LlxuICAgICAgICB0aGlzLl9ib2R5SW5pdCA9IG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIChBcnJheUJ1ZmZlci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSB8fCBpc0FycmF5QnVmZmVyVmlldyhib2R5KSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5zdXBwb3J0ZWQgQm9keUluaXQgdHlwZScpXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlCbG9iICYmIHRoaXMuX2JvZHlCbG9iLnR5cGUpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCB0aGlzLl9ib2R5QmxvYi50eXBlKVxuICAgICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5ibG9iKSB7XG4gICAgICB0aGlzLmJsb2IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlCbG9iKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyBibG9iJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5VGV4dF0pKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBjb25zdW1lZCh0aGlzKSB8fCBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUFycmF5QnVmZmVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmJsb2IoKS50aGVuKHJlYWRCbG9iQXNBcnJheUJ1ZmZlcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgIHJldHVybiByZWFkQmxvYkFzVGV4dCh0aGlzLl9ib2R5QmxvYilcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVhZEFycmF5QnVmZmVyQXNUZXh0KHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgdGV4dCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlUZXh0KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0LmZvcm1EYXRhKSB7XG4gICAgICB0aGlzLmZvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmpzb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKEpTT04ucGFyc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8vIEhUVFAgbWV0aG9kcyB3aG9zZSBjYXBpdGFsaXphdGlvbiBzaG91bGQgYmUgbm9ybWFsaXplZFxuICB2YXIgbWV0aG9kcyA9IFsnREVMRVRFJywgJ0dFVCcsICdIRUFEJywgJ09QVElPTlMnLCAnUE9TVCcsICdQVVQnXVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU1ldGhvZChtZXRob2QpIHtcbiAgICB2YXIgdXBjYXNlZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpXG4gICAgcmV0dXJuIChtZXRob2RzLmluZGV4T2YodXBjYXNlZCkgPiAtMSkgPyB1cGNhc2VkIDogbWV0aG9kXG4gIH1cblxuICBmdW5jdGlvbiBSZXF1ZXN0KGlucHV0LCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keVxuXG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgICAgaWYgKGlucHV0LmJvZHlVc2VkKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpXG4gICAgICB9XG4gICAgICB0aGlzLnVybCA9IGlucHV0LnVybFxuICAgICAgdGhpcy5jcmVkZW50aWFscyA9IGlucHV0LmNyZWRlbnRpYWxzXG4gICAgICBpZiAoIW9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbnB1dC5oZWFkZXJzKVxuICAgICAgfVxuICAgICAgdGhpcy5tZXRob2QgPSBpbnB1dC5tZXRob2RcbiAgICAgIHRoaXMubW9kZSA9IGlucHV0Lm1vZGVcbiAgICAgIGlmICghYm9keSAmJiBpbnB1dC5fYm9keUluaXQgIT0gbnVsbCkge1xuICAgICAgICBib2R5ID0gaW5wdXQuX2JvZHlJbml0XG4gICAgICAgIGlucHV0LmJvZHlVc2VkID0gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVybCA9IFN0cmluZyhpbnB1dClcbiAgICB9XG5cbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscyB8fCB0aGlzLmNyZWRlbnRpYWxzIHx8ICdvbWl0J1xuICAgIGlmIChvcHRpb25zLmhlYWRlcnMgfHwgIXRoaXMuaGVhZGVycykge1xuICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIH1cbiAgICB0aGlzLm1ldGhvZCA9IG5vcm1hbGl6ZU1ldGhvZChvcHRpb25zLm1ldGhvZCB8fCB0aGlzLm1ldGhvZCB8fCAnR0VUJylcbiAgICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGxcbiAgICB0aGlzLnJlZmVycmVyID0gbnVsbFxuXG4gICAgaWYgKCh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykgJiYgYm9keSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9keSBub3QgYWxsb3dlZCBmb3IgR0VUIG9yIEhFQUQgcmVxdWVzdHMnKVxuICAgIH1cbiAgICB0aGlzLl9pbml0Qm9keShib2R5KVxuICB9XG5cbiAgUmVxdWVzdC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QodGhpcywgeyBib2R5OiB0aGlzLl9ib2R5SW5pdCB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZGVjb2RlKGJvZHkpIHtcbiAgICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgYm9keS50cmltKCkuc3BsaXQoJyYnKS5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBpZiAoYnl0ZXMpIHtcbiAgICAgICAgdmFyIHNwbGl0ID0gYnl0ZXMuc3BsaXQoJz0nKVxuICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIGZvcm0uYXBwZW5kKGRlY29kZVVSSUNvbXBvbmVudChuYW1lKSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUhlYWRlcnMocmF3SGVhZGVycykge1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKVxuICAgIHJhd0hlYWRlcnMuc3BsaXQoL1xccj9cXG4vKS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJzonKVxuICAgICAgdmFyIGtleSA9IHBhcnRzLnNoaWZ0KCkudHJpbSgpXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzonKS50cmltKClcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoa2V5LCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBoZWFkZXJzXG4gIH1cblxuICBCb2R5LmNhbGwoUmVxdWVzdC5wcm90b3R5cGUpXG5cbiAgZnVuY3Rpb24gUmVzcG9uc2UoYm9keUluaXQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgIH1cblxuICAgIHRoaXMudHlwZSA9ICdkZWZhdWx0J1xuICAgIHRoaXMuc3RhdHVzID0gJ3N0YXR1cycgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzIDogMjAwXG4gICAgdGhpcy5vayA9IHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMFxuICAgIHRoaXMuc3RhdHVzVGV4dCA9ICdzdGF0dXNUZXh0JyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXNUZXh0IDogJ09LJ1xuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgICB0aGlzLnVybCA9IG9wdGlvbnMudXJsIHx8ICcnXG4gICAgdGhpcy5faW5pdEJvZHkoYm9keUluaXQpXG4gIH1cblxuICBCb2R5LmNhbGwoUmVzcG9uc2UucHJvdG90eXBlKVxuXG4gIFJlc3BvbnNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UodGhpcy5fYm9keUluaXQsIHtcbiAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICBzdGF0dXNUZXh0OiB0aGlzLnN0YXR1c1RleHQsXG4gICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgICAgdXJsOiB0aGlzLnVybFxuICAgIH0pXG4gIH1cblxuICBSZXNwb25zZS5lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXNwb25zZSA9IG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiAwLCBzdGF0dXNUZXh0OiAnJ30pXG4gICAgcmVzcG9uc2UudHlwZSA9ICdlcnJvcidcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxuXG4gIHZhciByZWRpcmVjdFN0YXR1c2VzID0gWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XVxuXG4gIFJlc3BvbnNlLnJlZGlyZWN0ID0gZnVuY3Rpb24odXJsLCBzdGF0dXMpIHtcbiAgICBpZiAocmVkaXJlY3RTdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzdGF0dXMgY29kZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiBzdGF0dXMsIGhlYWRlcnM6IHtsb2NhdGlvbjogdXJsfX0pXG4gIH1cblxuICBzZWxmLkhlYWRlcnMgPSBIZWFkZXJzXG4gIHNlbGYuUmVxdWVzdCA9IFJlcXVlc3RcbiAgc2VsZi5SZXNwb25zZSA9IFJlc3BvbnNlXG5cbiAgc2VsZi5mZXRjaCA9IGZ1bmN0aW9uKGlucHV0LCBpbml0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChpbnB1dCwgaW5pdClcbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8ICcnKVxuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMudXJsID0gJ3Jlc3BvbnNlVVJMJyBpbiB4aHIgPyB4aHIucmVzcG9uc2VVUkwgOiBvcHRpb25zLmhlYWRlcnMuZ2V0KCdYLVJlcXVlc3QtVVJMJylcbiAgICAgICAgdmFyIGJvZHkgPSAncmVzcG9uc2UnIGluIHhociA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHRcbiAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoYm9keSwgb3B0aW9ucykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9wZW4ocmVxdWVzdC5tZXRob2QsIHJlcXVlc3QudXJsLCB0cnVlKVxuXG4gICAgICBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gJ2luY2x1ZGUnKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmICgncmVzcG9uc2VUeXBlJyBpbiB4aHIgJiYgc3VwcG9ydC5ibG9iKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYidcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB4aHIuc2VuZCh0eXBlb2YgcmVxdWVzdC5fYm9keUluaXQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHJlcXVlc3QuX2JvZHlJbml0KVxuICAgIH0pXG4gIH1cbiAgc2VsZi5mZXRjaC5wb2x5ZmlsbCA9IHRydWVcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3doYXR3Zy1mZXRjaC9mZXRjaC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcblxuY29uc3QgdXJsID0gYC9hcGkvY2FydGA7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICBjcmVhdGU6ICh7dGV4dCwgaWQsIGZyb20sIGJsb2IsIHRvLCBhdWRpb1NldHRpbmdzLCBoZWFkQ29sb3JzfSkgPT4ge1xuICAgIGNvbnN0IG1ldGhvZCA9IGBQT1NUYDtcbiAgICAvLyBjb25zdCBuZXdGaWxlTmFtZSA9IGAke2lkLnNwbGl0KGAgYCkuam9pbihgX2ApfWA7XG4gICAgY29uc3QgYm9keSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGJvZHkuYXBwZW5kKGB0ZXh0YCwgdGV4dCk7XG4gICAgYm9keS5hcHBlbmQoYGlkYCwgaWQpO1xuICAgIGJvZHkuYXBwZW5kKGBmcm9tYCwgZnJvbSk7XG4gICAgYm9keS5hcHBlbmQoYHRvYCwgdG8pO1xuICAgIGJvZHkuYXBwZW5kKGBhdWRpb1NldHRpbmdzYCwgYXVkaW9TZXR0aW5ncyk7XG4gICAgYm9keS5hcHBlbmQoYGhlYWRDb2xvcnNgLCBoZWFkQ29sb3JzKTtcblxuICAgIHJldHVybiBmZXRjaCh1cmwsIHttZXRob2QsIGJvZHl9KVxuICAgICAgLnRoZW4ociA9PiByLmpzb24oKSk7XG4gIH0sXG5cbiAgcmVhZDogKCkgPT4ge1xuICAgIHJldHVybiBmZXRjaChgJHt1cmx9P2lzQWN0aXZlPXRydWVgKVxuICAgICAgLnRoZW4ociA9PiByLmpzb24oKSk7XG4gIH0sXG5cbiAgcmVhZE9uZTogaWQgPT4ge1xuICAgIGNvbnN0IG1ldGhvZCA9IGBHRVRgO1xuICAgIHJldHVybiBmZXRjaChgJHt1cmx9LyR7aWR9YCwge21ldGhvZH0pLnRoZW4ociA9PiByLmpzb24oKSk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbGliL2NhcnRBUEkuanMiLCJjb25zdCBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG5pbXBvcnQgaGFuZGxlU2FudGFBdWRpbyBmcm9tICcuL29iamVjdHMvaGFuZGxlU2FudGFBdWRpbyc7XG5pbXBvcnQgc2FudGFTY2VuZSBmcm9tICcuL29iamVjdHMvc2FudGFQYWdlU2NlbmUnO1xuaW1wb3J0IGdldFVybFBhcmFtZXRlciBmcm9tICcuL29iamVjdHMvZ2V0VXJsUGFyYW1ldGVyJztcbmltcG9ydCBDYXJ0QVBJIGZyb20gJy4vbGliL2NhcnRBUEknO1xuXG5sZXQgdGFyZ2V0SWQsIGF1ZGlvQ3R4O1xuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuXG4gIHBhcnRpY2xlc0pTLmxvYWQoJ3BhcnRpY2xlcy1qcycsICcuLi9hc3NldHMvcGFydGljbGVzLmpzb24nLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2NhbGxiYWNrIC0gcGFydGljbGVzLmpzIGNvbmZpZyBsb2FkZWQnKTtcbiAgfSk7XG5cbiAgdGFyZ2V0SWQgPSBnZXRVcmxQYXJhbWV0ZXIoXCJpZFwiKTtcbiAgaWYgKCF0YXJnZXRJZCkgd2luZG93LmxvY2F0aW9uID0gXCJodHRwczovL2xvY2FsaG9zdDo4MDgwXCI7XG5cbiAgQ2FydEFQSS5yZWFkT25lKHRhcmdldElkKS50aGVuKGQgPT4ge1xuICAgIGlmIChkLnN0YXR1c0NvZGUpIHdpbmRvdy5sb2NhdGlvbiA9IFwiaHR0cHM6Ly9sb2NhbGhvc3Q6ODA4MFwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBmcm9tYCkuaW5uZXJIVE1MID0gYGZyb206ICR7ZC5mcm9tfWA7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRvYCkuaW5uZXJIVE1MID0gYHRvOiAke2QudG99YDtcblxuICAgIGhhbmRsZVNhbnRhQXVkaW8oZCk7XG4gICAgc2FudGFTY2VuZShkKTtcbiAgfSk7XG5cbn1cblxuaW5pdCgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3NhbnRhU2NyaXB0LmpzIiwiY29uc3QgZ2V0VXJsUGFyYW1ldGVyID0gbmFtZSA9PiB7XG4gIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtdLywgJ1xcXFxbJykucmVwbGFjZSgvW1xcXV0vLCAnXFxcXF0nKTtcbiAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCdbXFxcXD8mXScgKyBuYW1lICsgJz0oW14mI10qKScpO1xuICBjb25zdCByZXN1bHRzID0gcmVnZXguZXhlYyhsb2NhdGlvbi5zZWFyY2gpO1xuICByZXR1cm4gcmVzdWx0cyA9PT0gbnVsbCA/IGZhbHNlIDogZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMV0ucmVwbGFjZSgvXFwrL2csICcgJykpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0VXJsUGFyYW1ldGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL29iamVjdHMvZ2V0VXJsUGFyYW1ldGVyLmpzIiwiY29uc3QgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuaW1wb3J0IENhcnRBUEkgZnJvbSAnLi4vbGliL2NhcnRBUEknO1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vY2xhc3Nlcy9IZWFkJztcblxubGV0IHRhcmdldElkLCBhdWRpb0N0eDtcbmNvbnN0IHBsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxheV9zYW50YWApO1xuY29uc3QgJGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGF1ZGlvYCk7XG5cbmxldCBwaXRjaFNoaWZ0ZXJQcm9jZXNzb3I7XG5cbmxldCBncmFpblNpemUgPSA1MTIsXG4gICAgcGl0Y2hSYXRpbyA9IDEuMCxcbiAgICBvdmVybGFwUmF0aW8gPSAwLjUwO1xuXG5jb25zdCBoYW5kbGVTYW50YUF1ZGlvID0gY2FydCA9PiB7XG4gIGF1ZGlvQ3R4ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuXG4gIGNvbnN0IGF1ZGlvU2V0dGluZ3MgPSBKU09OLnBhcnNlKGNhcnQuYXVkaW9TZXR0aW5ncyk7XG4gIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzYW50YV9hdWRpb2ApLnNyYyA9IGAuL3VwbG9hZHMvJHtkLmlkfS5vZ2dgO1xuXG4gIHNldFRpbWVvdXQoKCkgPT7CoHtcbiAgICBjb25zdCBidWZmZXJMb2FkZXIgPSBuZXcgQnVmZmVyTG9hZGVyKFxuICAgICAgYXVkaW9DdHgsIFtgLi91cGxvYWRzLyR7Y2FydC5pZH0ub2dnYF0sIGJ1ZmZlckxpc3QgPT4ge1xuXG4gICAgICAgIGxldCBsb29wID0gZmFsc2U7XG4gICAgICAgIGxldCBzb3VyY2U7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHJlcGVhdGApLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgICgpID0+IHtcbiAgICAgICAgICBsb29wID0gIWxvb3A7XG4gICAgICAgICAgc291cmNlLnN0b3AoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcGl0Y2hSYXRpbyA9IGF1ZGlvU2V0dGluZ3MucGl0Y2g7XG4gICAgICAgIG92ZXJsYXBSYXRpbyA9IGF1ZGlvU2V0dGluZ3Mub3ZlcmxhcDtcblxuICAgICAgICAkYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoKSA9PiB7XG4gICAgICAgICAgc291cmNlID0gJyc7XG4gICAgICAgICAgc291cmNlID0gYXVkaW9DdHguY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgICAgICAgc291cmNlLmJ1ZmZlciA9IGJ1ZmZlckxpc3RbMF07XG5cbiAgICAgICAgICAvLyBzb3VyY2UuY29ubmVjdChhdWRpb0N0eC5kZXN0aW5hdGlvbilcbiAgICAgICAgICBzb3VyY2UubG9vcCA9IGxvb3A7XG4gICAgICAgICAgc291cmNlLmNvbm5lY3QocGl0Y2hTaGlmdGVyUHJvY2Vzc29yKTtcbiAgICAgICAgICBzb3VyY2Uuc3RhcnQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH1cbiAgICApO1xuXG4gICAgYnVmZmVyTG9hZGVyLmxvYWQoKTtcbiAgICBpbml0UHJvY2Vzc29yKCk7XG5cbiAgfSwgMTAwMCk7XG59XG5cbmNvbnN0IGxpbmVhckludGVycG9sYXRpb24gPSAoYSwgYiwgdCkgPT4ge1xuICByZXR1cm4gYSArIChiIC0gYSkgKiB0O1xufTtcblxuY29uc3QgaW5pdFByb2Nlc3NvciA9ICgpID0+IHtcblxuICBpZiAocGl0Y2hTaGlmdGVyUHJvY2Vzc29yKSB7XG4gICAgcGl0Y2hTaGlmdGVyUHJvY2Vzc29yLmRpc2Nvbm5lY3QoKTtcbiAgfVxuXG4gIGlmIChhdWRpb0N0eC5jcmVhdGVTY3JpcHRQcm9jZXNzb3IpIHtcbiAgICBwaXRjaFNoaWZ0ZXJQcm9jZXNzb3IgPSBhdWRpb0N0eC5jcmVhdGVTY3JpcHRQcm9jZXNzb3IoZ3JhaW5TaXplLCAxLCAxKTtcbiAgfSBlbHNlIGlmIChhdWRpb0N0eC5jcmVhdGVKYXZhU2NyaXB0Tm9kZSkge1xuICAgIHBpdGNoU2hpZnRlclByb2Nlc3NvciA9IGF1ZGlvQ3R4LmNyZWF0ZUphdmFTY3JpcHROb2RlKGdyYWluU2l6ZSwgMSwgMSk7XG4gIH1cblxuICBwaXRjaFNoaWZ0ZXJQcm9jZXNzb3IuYnVmZmVyID0gbmV3IEZsb2F0MzJBcnJheShncmFpblNpemUgKiAyKTtcbiAgcGl0Y2hTaGlmdGVyUHJvY2Vzc29yLmdyYWluV2luZG93ID0gaGFubldpbmRvdyhncmFpblNpemUpO1xuXG4gIHBpdGNoU2hpZnRlclByb2Nlc3Nvci5vbmF1ZGlvcHJvY2VzcyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICB2YXIgaW5wdXREYXRhID0gZXZlbnQuaW5wdXRCdWZmZXIuZ2V0Q2hhbm5lbERhdGEoMCk7XG4gICAgdmFyIG91dHB1dERhdGEgPSBldmVudC5vdXRwdXRCdWZmZXIuZ2V0Q2hhbm5lbERhdGEoMCk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgaW5wdXREYXRhLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIC8vIEFwcGx5IHRoZSB3aW5kb3cgdG8gdGhlIGlucHV0IGJ1ZmZlclxuICAgICAgaW5wdXREYXRhW2ldICo9IHRoaXMuZ3JhaW5XaW5kb3dbaV07XG5cbiAgICAgIC8vIFNoaWZ0IGhhbGYgb2YgdGhlIGJ1ZmZlclxuICAgICAgdGhpcy5idWZmZXJbaV0gPSB0aGlzLmJ1ZmZlcltpICsgZ3JhaW5TaXplXTtcblxuICAgICAgLy8gRW1wdHkgdGhlIGJ1ZmZlciB0YWlsXG4gICAgICB0aGlzLmJ1ZmZlcltpICsgZ3JhaW5TaXplXSA9IDAuMDtcbiAgICB9XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIHBpdGNoIHNoaWZ0ZWQgZ3JhaW4gcmUtc2FtcGxpbmcgYW5kIGxvb3BpbmcgdGhlIGlucHV0XG4gICAgdmFyIGdyYWluRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoZ3JhaW5TaXplICogMik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSAwLjA7IGkgPCBncmFpblNpemU7IGkrKywgaiArPSBwaXRjaFJhdGlvKSB7XG5cbiAgICAgIHZhciBpbmRleCA9IE1hdGguZmxvb3IoaikgJSBncmFpblNpemU7XG4gICAgICB2YXIgYSA9IGlucHV0RGF0YVtpbmRleF07XG4gICAgICB2YXIgYiA9IGlucHV0RGF0YVsoaW5kZXggKyAxKSAlIGdyYWluU2l6ZV07XG4gICAgICBncmFpbkRhdGFbaV0gKz0gbGluZWFySW50ZXJwb2xhdGlvbihhLCBiLCBqICUgMS4wKSAqIHRoaXMuZ3JhaW5XaW5kb3dbaV07XG4gICAgfVxuXG4gICAgLy8gQ29weSB0aGUgZ3JhaW4gbXVsdGlwbGUgdGltZXMgb3ZlcmxhcHBpbmcgaXRcbiAgICBmb3IgKGkgPSAwOyBpIDwgZ3JhaW5TaXplOyBpICs9IE1hdGgucm91bmQoZ3JhaW5TaXplICogKDEgLSBvdmVybGFwUmF0aW8pKSkge1xuICAgICAgZm9yIChqID0gMDsgaiA8PSBncmFpblNpemU7IGorKykge1xuICAgICAgICB0aGlzLmJ1ZmZlcltpICsgal0gKz0gZ3JhaW5EYXRhW2pdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE91dHB1dCB0aGUgZmlyc3QgaGFsZiBvZiB0aGUgYnVmZmVyXG4gICAgZm9yIChpID0gMDsgaSA8IGdyYWluU2l6ZTsgaSsrKSB7XG4gICAgICBvdXRwdXREYXRhW2ldID0gdGhpcy5idWZmZXJbaV07XG4gICAgfVxuICB9O1xuXG4gIHBpdGNoU2hpZnRlclByb2Nlc3Nvci5jb25uZWN0KGF1ZGlvQ3R4LmRlc3RpbmF0aW9uKTtcblxufTtcblxuY29uc3QgaGFubldpbmRvdyA9IGxlbmd0aCA9PiB7XG4gIGNvbnN0IHdpbmRvdyA9IG5ldyBGbG9hdDMyQXJyYXkobGVuZ3RoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgd2luZG93W2ldID0gMC41ICogKDEgLSBNYXRoLmNvcygyICogTWF0aC5QSSAqIGkgLyAobGVuZ3RoIC0gMSkpKTtcbiAgfVxuICByZXR1cm4gd2luZG93O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlU2FudGFBdWRpbztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9vYmplY3RzL2hhbmRsZVNhbnRhQXVkaW8uanMiLCJpbXBvcnQgSGVhZCBmcm9tICcuLi9jbGFzc2VzL0hlYWQnO1xuaW1wb3J0IENhcnRBUEkgZnJvbSAnLi4vbGliL2NhcnRBUEknO1xuaW1wb3J0IENvbG9ycyBmcm9tICcuL2NvbG9ycyc7XG5cbmxldCBzY2VuZSwgY2FtZXJhLCBmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIG5lYXJQbGFuZSwgZmFyUGxhbmUsIEhFSUdIVCwgV0lEVEg7XG5sZXQgZ2xvYmFsTGlnaHQsIHNoYWRvd0xpZ2h0LCBiYWNrTGlnaHQsIGxpZ2h0LCByZW5kZXJlciwgY29udGFpbmVyLCBsb2FkZWQ7XG5sZXQgaGVhZCwgd2luZG93SGFsZlgsIHdpbmRvd0hhbGZZO1xuXG5sZXQgbW91c2VQb3MgPSB7IHg6IDAsIHk6IDB9O1xuXG5jb25zdCBzYW50YVNjZW5lID0gZGF0YSA9PiB7XG4gIGNyZWF0ZVNjZW5lKCk7XG4gIGNyZWF0ZUxpZ2h0cygpO1xuXG4gIGNvbnN0IGhlYWRDb2xvcnMgPSBKU09OLnBhcnNlKGRhdGEuaGVhZENvbG9ycyk7XG4gIHNldENvbG9ycyhoZWFkQ29sb3JzKTtcblxuICBoZWFkID0gbmV3IEhlYWQoKTsgLy8gc2hvdyBhbmQgaGFuZGxlIGhlYWRcbiAgc2NlbmUuYWRkKGhlYWQubWVzaCk7XG4gIGxvb3AoKTtcbn1cblxuY29uc3Qgc2V0Q29sb3JzID0gKGhlYWRDb2xvcnMpID0+IHtcbiAgQ29sb3JzLnNraW4gPSBoZWFkQ29sb3JzLnNraW47XG4gIENvbG9ycy5mcmVja2xlcyA9IGhlYWRDb2xvcnMuZnJlY2tsZXM7XG4gIENvbG9ycy5leWUgPSBoZWFkQ29sb3JzLmV5ZTtcbiAgQ29sb3JzLmdsYXNzZXMgPSBoZWFkQ29sb3JzLmdsYXNzZXM7XG4gIENvbG9ycy5oYXQgPSBoZWFkQ29sb3JzLmhhdDtcbn1cblxuY29uc3QgY3JlYXRlU2NlbmUgPSAoKSA9PiB7O1xuICBIRUlHSFQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIFdJRFRIID0gd2luZG93LmlubmVyV2lkdGggLzEuNjc7XG4gIHdpbmRvd0hhbGZYID0gV0lEVEggLyAyO1xuICB3aW5kb3dIYWxmWSA9IEhFSUdIVCAvIDI7XG5cbiAgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgYXNwZWN0UmF0aW8gPSBXSURUSCAvIEhFSUdIVDtcbiAgZmllbGRPZlZpZXcgPSA1MDtcbiAgbmVhclBsYW5lID0gMTtcbiAgZmFyUGxhbmUgPSAyMDAwO1xuXG4gIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIG5lYXJQbGFuZSwgZmFyUGxhbmUpO1xuICBjYW1lcmEucG9zaXRpb24ueCA9IDA7XG4gIGNhbWVyYS5wb3NpdGlvbi56ID0gNzA7XG4gIGNhbWVyYS5wb3NpdGlvbi55ID0gLTU7XG5cbiAgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7YWxwaGE6IHRydWUsIGFudGlhbGlhczogdHJ1ZX0pO1xuICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvPyB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbzogMSlcbiAgcmVuZGVyZXIuc2V0U2l6ZShXSURUSCwgSEVJR0hUKTtcbiAgcmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlO1xuICByZW5kZXJlci5zaGFkb3dNYXAudHlwZSA9IFRIUkVFLlBDRlNvZnRTaGFkb3dNYXA7XG5cbiAgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uV2luZG93UmVzaXplLCBmYWxzZSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSwgZmFsc2UpO1xufVxuXG5jb25zdCBvbldpbmRvd1Jlc2l6ZSA9ICgpID0+IHtcbiAgSEVJR0hUID0gd2luZG93LmlubmVySGVpZ2h0O1xuICBXSURUSCA9IHdpbmRvdy5pbm5lcldpZHRoICAvIDEuNjc7XG4gIHdpbmRvd0hhbGZYID0gV0lEVEggLyAyO1xuICB3aW5kb3dIYWxmWSA9IEhFSUdIVCAvIDI7XG4gIHJlbmRlcmVyLnNldFNpemUoV0lEVEgsIEhFSUdIVCk7XG4gIGNhbWVyYS5hc3BlY3QgPSBXSURUSCAvIEhFSUdIVDtcbiAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbn1cblxuY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gZSA9PiB7XG4gIG1vdXNlUG9zID0ge1xuICAgIHg6IGV2ZW50LmNsaWVudFgsXG4gICAgeTogZXZlbnQuY2xpZW50WVxuICB9O1xufVxuXG5sZXQgbG9hZGVyTWFuYWdlciA9IG5ldyBUSFJFRS5Mb2FkaW5nTWFuYWdlcigpO1xuXG5jb25zdCBoYW5kbGVXaW5kb3dSZXNpemUgPSBlID0+IHtcbiAgSEVJR0hUID0gd2luZG93LmlubmVySGVpZ2h0O1xuICBXSURUSCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICByZW5kZXJlci5zZXRTaXplKFdJRFRILCBIRUlHSFQpO1xuICBjYW1lcmEuYXNwZWN0ID0gV0lEVEggLyBIRUlHSFQ7XG4gIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG59XG5cbmxldCBpc01vYmlsZSA9IC9pUGhvbmV8QW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbmNvbnN0IGNyZWF0ZUxpZ2h0cyA9ICgpID0+IHtcblxuICBnbG9iYWxMaWdodCA9IG5ldyBUSFJFRS5IZW1pc3BoZXJlTGlnaHQoMHhmZmZmZmYsIDB4NTU1NTU1LCAuOSk7XG5cbiAgc2hhZG93TGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZiwgLjMpO1xuICBzaGFkb3dMaWdodC5wb3NpdGlvbi5zZXQoMTAwLCAyNTAsIDE3NSk7XG4gIHNoYWRvd0xpZ2h0LmNhc3RTaGFkb3cgPSB0cnVlO1xuXG4gIGJhY2tMaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmLCAuMik7XG4gIGJhY2tMaWdodC5wb3NpdGlvbi5zZXQoLTEwMCwgMjAwLCAxNTApO1xuICBiYWNrTGlnaHQuY2FzdFNoYWRvdyA9IHRydWU7XG5cbiAgaWYgKGlzTW9iaWxlKSBzaGFkb3dMaWdodC5zaGFkb3cubWFwU2l6ZS53aWR0aCA9IHNoYWRvd0xpZ2h0LnNoYWRvdy5tYXBTaXplLmhlaWdodCA9IDEwMjQ7XG4gIGlmICghaXNNb2JpbGUpIHNoYWRvd0xpZ2h0LnNoYWRvdy5tYXBTaXplLndpZHRoID0gc2hhZG93TGlnaHQuc2hhZG93Lm1hcFNpemUuaGVpZ2h0ID0gMjA0ODtcblxuICBzY2VuZS5hZGQoZ2xvYmFsTGlnaHQpO1xuICBzY2VuZS5hZGQoc2hhZG93TGlnaHQpO1xuICBzY2VuZS5hZGQoYmFja0xpZ2h0KTtcbiAgc2NlbmUuYWRkKCBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KCAweGVhZGVhZCwgMC4xICkpO1xufVxuXG5cbmxldCBpc0JsaW5raW5nID0gZmFsc2U7XG5jb25zdCBibGlua0xvb3AgPSAoKSA9PiB7XG4gIGlzQmxpbmtpbmcgPSBmYWxzZTtcblxuICBpZiAoKCFpc0JsaW5raW5nKSAmJiAoTWF0aC5yYW5kb20oKSA+IDAuOTkpKSB7XG4gICAgaXNCbGlua2luZyA9IHRydWU7XG4gICAgYmxpbmsoKTtcbiAgfVxufVxuXG5jb25zdCBibGluayA9ICgpID0+IHtcbiAgaGVhZC5leWVzLnNjYWxlLnkgPSAxO1xuICBUd2Vlbk1heC50byhoZWFkLmV5ZXMuc2NhbGUsIC4wNywge1xuICAgIHk6IDAsXG4gICAgeW95bzogdHJ1ZSxcbiAgICByZXBlYXQ6IDEsXG4gICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICBpc0JsaW5raW5nID0gZmFsc2U7XG4gICAgfVxuICB9KTtcbn1cblxuY29uc3QgbG9vcCA9ICgpID0+IHtcbiAgYmxpbmtMb29wKCk7XG4gIC8vaGVhZC5kaXp6eSgpO1xuICBsZXQgeFRhcmdldCA9IChtb3VzZVBvcy54IC0gd2luZG93SGFsZlgpO1xuICBsZXQgeVRhcmdldCA9IChtb3VzZVBvcy55IC0gd2luZG93SGFsZlkpO1xuXG4gIGhlYWQuaWRsZSh4VGFyZ2V0LCB5VGFyZ2V0KTtcbiAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNhbnRhU2NlbmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvb2JqZWN0cy9zYW50YVBhZ2VTY2VuZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=