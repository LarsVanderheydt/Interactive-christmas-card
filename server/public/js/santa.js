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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDllY2ZlOGJiYmM4YmQ1MTRlYmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL29iamVjdHMvY29sb3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLWZldGNoL2ZldGNoLW5wbS1icm93c2VyaWZ5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL0hlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL29iamVjdHMvTWF0ZXJpYWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93aGF0d2ctZmV0Y2gvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xpYi9jYXJ0QVBJLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zYW50YVNjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvb2JqZWN0cy9nZXRVcmxQYXJhbWV0ZXIuanMiXSwibmFtZXMiOlsiQ29sb3JzIiwic2tpbiIsImZyZWNrbGVzIiwid2hpdGUiLCJnbGFzc2VzIiwidGVldGgiLCJibGFjayIsImV5ZSIsImhhdCIsImlzQmxpbmtpbmciLCJIZWFkIiwibWVzaCIsIlRIUkVFIiwiT2JqZWN0M0QiLCJoZWFkR2VvbSIsIkJveEJ1ZmZlckdlb21ldHJ5Iiwic2tpbk1hdCIsIk1lc2hMYW1iZXJ0TWF0ZXJpYWwiLCJjb2xvciIsImZsYXRTaGFkaW5nIiwiZXllTWF0IiwiTWVzaFBob25nTWF0ZXJpYWwiLCJoZWFkIiwiTWVzaCIsImNhc3RTaGFkb3ciLCJyZWNlaXZlU2hhZG93IiwiYWRkIiwiYmVhcmQiLCJwb3NpdGlvbiIsInkiLCJ6IiwiQmVhcmQiLCJHbGFzc2VzIiwiSGFpciIsIkV5ZXMiLCJFeWVCcm93cyIsIkhhdCIsIkZyZWNrbGVzIiwiRmVhdHVyZXMiLCJpZGxlIiwibm9ybWFsaXplIiwidiIsInZtaW4iLCJ2bWF4IiwidG1pbiIsInRtYXgiLCJudiIsIk1hdGgiLCJtYXgiLCJtaW4iLCJkdiIsInBjIiwiZHQiLCJ0diIsInNwZWVkIiwiZXllQmx1ZVJpZ2h0UG9zWCIsImV5ZUJsdWVMZWZ0UG9zWCIsImV5ZUJsdWVSaWdodFBvc1kiLCJleWVCbHVlTGVmdFBvc1kiLCJleWVCbHVlUmlnaHQiLCJ4IiwiZXllQmx1ZUxlZnQiLCJ4VGFyZ2V0IiwieVRhcmdldCIsImRpc3RhbmNlIiwicm90YXRpb24iLCJzaW4iLCJEYXRlIiwibm93IiwiUEkiLCJleWVCcm93UmlnaHQiLCJleWVCcm93TGVmdCIsImNvcyIsIm1vdXN0YWNoZSIsInVwZGF0ZUJvZHkiLCJiZWFyZEdlb21NZXJnZWQiLCJHZW9tZXRyeSIsImJlYXJkMUdlb20iLCJCb3hHZW9tZXRyeSIsImJlYXJkMSIsIk1hdCIsIndoaXRlTWF0IiwiYXBwbHlNYXRyaXgiLCJNYXRyaXg0IiwibWFrZVRyYW5zbGF0aW9uIiwidXBkYXRlTWF0cml4IiwibWVyZ2UiLCJnZW9tZXRyeSIsIm1hdHJpeCIsImJlYXJkMiIsInNjYWxlIiwiYmVhcmQzIiwiY2xvbmUiLCJiZWFyZDQiLCJiZWFyZDJHZW9tIiwidmVydGljZXMiLCJiZWFyZDUiLCJiZWFyZDNHZW9tIiwiYmVhcmQ2IiwiYmVhcmQ3IiwiYmVhcmQ4IiwiYmVhcmQ0R2VvbSIsImJlYXJkOSIsImJlYXJkNUdlb20iLCJiZWFyZDEwIiwiYmVhcmQxMSIsImJlYXJkTWVyZ2VkIiwibW91dGhHZW9tIiwibW91dGgiLCJibGFja01hdCIsInNldCIsInRlZXRoR2VvbSIsInRlZXRoTWF0IiwibW91c3RhY2hlR2VvbSIsImdsYXNzZXNNYXQiLCJmcmFtZUdlb21NZXJnZWQiLCJmcmFtZU91dGVyR2VvbSIsIkN5bGluZGVyR2VvbWV0cnkiLCJmcmFtZUlubmVyR2VvbSIsIm1ha2VSb3RhdGlvblgiLCJmcmFtZUJTUCIsIlRocmVlQlNQIiwiZnJhbWVDdXRCU1AiLCJmcmFtZWludGVyc2VjdGlvbkJTUCIsInN1YnRyYWN0IiwiZnJhbWVMZWZ0IiwidG9NZXNoIiwiZnJhbWVSaWdodCIsIm1ha2VSb3RhdGlvbloiLCJmcmFtZU1pZEdlb20iLCJmcmFtZU1pZCIsImZyYW1lRW5kR2VvbSIsImZyYW1lRW5kUmlnaHQiLCJmcmFtZUVuZExlZnQiLCJmcmFtZVNwb2tlR2VvbSIsImZyYW1lU3Bva2VSaWdodCIsImZyYW1lU3Bva2VMZWZ0IiwiZnJhbWVNZXJnZWQiLCJoYWlyIiwiaGFpckdlb21NZXJnZWQiLCJoYWlyRmxhdEdlb20iLCJoYWlyMSIsImhhaXIyIiwiaGFpcjMiLCJoYWlyNCIsImhhaXI2IiwiaGFpckZsYXRCYWNrR2VvbSIsImhhaXI1IiwiaGFpck1lcmdlZCIsImV5ZXMiLCJleWVXaGl0ZUdlb20iLCJQbGFuZUdlb21ldHJ5IiwiZXllV2hpdGVSaWdodCIsImV5ZUJsdWVHZW9tIiwiZXllUHVwaWxHZW9tIiwiZXllUHVwaWxSaWdodCIsImV5ZVdoaXRlTGVmdCIsImV5ZVB1cGlsTGVmdCIsImV5ZUJyb3dzIiwiZXllQnJvd0dlb20iLCJoYXRNYXQiLCJiYW5kR2VvbSIsIlRvcnVzR2VvbWV0cnkiLCJiaWdDb25lR2VvbSIsInNtYWxsQ29uZUdlb20iLCJoYXREaW5nbGVHZW9tIiwiU3BoZXJlR2VvbWV0cnkiLCJiYW5kIiwiYmlnQ29uZSIsInNtYWxsQ29uZSIsIm1ha2VSb3RhdGlvblkiLCJoYXREaW5nbGUiLCJmcmVja2xlc0dlb21NZXJnZWQiLCJmcmVja2xlc0dlb20iLCJmcmVja2xlc01hdCIsImZyZWNrbGUxIiwiZnJlY2tsZTIiLCJmcmVja2xlMyIsImZyZWNrbGU0IiwiZnJlY2tsZTUiLCJmcmVja2xlNiIsImZyZWNrbGVkTWVyZ2VkIiwiZWFyR2VvbSIsImVhclJpZ2h0IiwiZWFyTGVmdCIsIm5vc2VHZW9tIiwibm9zZSIsIk1hdGVyaWFscyIsImJyb3duIiwiTWVzaE5vcm1hbE1hdGVyaWFsIiwidXJsIiwiY3JlYXRlIiwidGV4dCIsImlkIiwibmFtZSIsImJsb2IiLCJtZXRob2QiLCJib2R5IiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmZXRjaCIsInRoZW4iLCJyIiwianNvbiIsInJlYWQiLCJyZWFkT25lIiwiQXVkaW9Db250ZXh0Iiwid2luZG93Iiwid2Via2l0QXVkaW9Db250ZXh0IiwidGFyZ2V0SWQiLCJhdWRpb0N0eCIsInBsYXkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiJGF1ZGlvIiwiYXVkaW9Tb3VyY2VzIiwicGl0Y2hTaGlmdGVyUHJvY2Vzc29yIiwiYXVkaW9Tb3VyY2VJbmRleCIsImF1ZGlvVmlzdWFsaXNhdGlvbkluZGV4IiwidmFsaWRHcmFuU2l6ZXMiLCJncmFpblNpemUiLCJwaXRjaFJhdGlvIiwib3ZlcmxhcFJhdGlvIiwiaW5pdCIsImdldFVybFBhcmFtZXRlciIsImxvY2F0aW9uIiwiQ2FydEFQSSIsImQiLCJzdGF0dXNDb2RlIiwiaW5uZXJIVE1MIiwic3JjIiwic2V0VGltZW91dCIsImJ1ZmZlckxvYWRlciIsIkJ1ZmZlckxvYWRlciIsImxvb3AiLCJzb3VyY2UiLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcCIsImNyZWF0ZUJ1ZmZlclNvdXJjZSIsImJ1ZmZlciIsImJ1ZmZlckxpc3QiLCJjb25uZWN0Iiwic3RhcnQiLCJsb2FkIiwiaW5pdFByb2Nlc3NvciIsImxpbmVhckludGVycG9sYXRpb24iLCJhIiwiYiIsInQiLCJkaXNjb25uZWN0IiwiY3JlYXRlU2NyaXB0UHJvY2Vzc29yIiwiY3JlYXRlSmF2YVNjcmlwdE5vZGUiLCJGbG9hdDMyQXJyYXkiLCJncmFpbldpbmRvdyIsImhhbm5XaW5kb3ciLCJvbmF1ZGlvcHJvY2VzcyIsImV2ZW50IiwiaW5wdXREYXRhIiwiaW5wdXRCdWZmZXIiLCJnZXRDaGFubmVsRGF0YSIsIm91dHB1dERhdGEiLCJvdXRwdXRCdWZmZXIiLCJpIiwibGVuZ3RoIiwiZ3JhaW5EYXRhIiwiaiIsImluZGV4IiwiZmxvb3IiLCJyb3VuZCIsImRlc3RpbmF0aW9uIiwicmVwbGFjZSIsInJlZ2V4IiwiUmVnRXhwIiwicmVzdWx0cyIsImV4ZWMiLCJzZWFyY2giLCJkZWNvZGVVUklDb21wb25lbnQiXSwi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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsdUJBQXVCO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsdUNBQXVDLDBCQUEwQjtBQUNqRTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLDBCQUEwQixlQUFlO0FBQ3hFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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SUMsTUFBSixDQUFXLFdBQVc5RSxJQUFYLEdBQWtCLFdBQTdCLENBQWQ7QUFDQSxNQUFNK0UsVUFBVUYsTUFBTUcsSUFBTixDQUFXakQsU0FBU2tELE1BQXBCLENBQWhCO0FBQ0EsU0FBT0YsWUFBWSxJQUFaLEdBQW1CLEtBQW5CLEdBQTJCRyxtQkFBbUJILFFBQVEsQ0FBUixFQUFXSCxPQUFYLENBQW1CLEtBQW5CLEVBQTBCLEdBQTFCLENBQW5CLENBQWxDO0FBQ0QsQ0FMRDs7QUFPQSx5REFBZTlDLGVBQWYsRSIsImZpbGUiOiJqcy9zYW50YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkOWVjZmU4YmJiYzhiZDUxNGViYSIsImNvbnN0IENvbG9ycyA9IHtcbiAgc2tpbjogMHhmZmUwYmQsXG4gIGZyZWNrbGVzOiAweGNmYmE5NixcbiAgd2hpdGU6IDB4ZTllYmVlLFxuICBnbGFzc2VzOiAweGY5YzQyMSxcbiAgdGVldGg6IDB4ZmZmZmZmLFxuICBibGFjazogMHgyZTJlMmUsXG4gIGV5ZTogMHg2Mjk1YTgsXG4gIGhhdDogMHg3MjAzMTRcbn07XG5leHBvcnQgZGVmYXVsdCBDb2xvcnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvb2JqZWN0cy9jb2xvcnMuanMiLCIvLyB0aGUgd2hhdHdnLWZldGNoIHBvbHlmaWxsIGluc3RhbGxzIHRoZSBmZXRjaCgpIGZ1bmN0aW9uXG4vLyBvbiB0aGUgZ2xvYmFsIG9iamVjdCAod2luZG93IG9yIHNlbGYpXG4vL1xuLy8gUmV0dXJuIHRoYXQgYXMgdGhlIGV4cG9ydCBmb3IgdXNlIGluIFdlYnBhY2ssIEJyb3dzZXJpZnkgZXRjLlxucmVxdWlyZSgnd2hhdHdnLWZldGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHNlbGYuZmV0Y2guYmluZChzZWxmKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtZmV0Y2gvZmV0Y2gtbnBtLWJyb3dzZXJpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgQ29sb3JzIGZyb20gJy4uL29iamVjdHMvY29sb3JzJztcbmltcG9ydCBNYXQgZnJvbSAnLi4vb2JqZWN0cy9NYXRlcmlhbHMnO1xuXG5sZXQgaXNCbGlua2luZyA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG5cbiAgICBsZXQgaGVhZEdlb20gPSBuZXcgVEhSRUUuQm94QnVmZmVyR2VvbWV0cnkoMTYsIDE2LCAxNik7XG4gICAgbGV0IHNraW5NYXQgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5za2luLCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuICAgIGxldCBleWVNYXQgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuZXllLCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuXG4gICAgdGhpcy5oZWFkID0gbmV3IFRIUkVFLk1lc2goaGVhZEdlb20sc2tpbk1hdCk7XG4gICAgdGhpcy5oZWFkLmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgIHRoaXMuaGVhZC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5tZXNoLmFkZCh0aGlzLmhlYWQpO1xuXG4gICAgdGhpcy5iZWFyZCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHRoaXMuYmVhcmQucG9zaXRpb24ueSA9IC03O1xuICAgIHRoaXMuYmVhcmQucG9zaXRpb24ueiA9IDAuNTtcbiAgICB0aGlzLmhlYWQuYWRkKHRoaXMuYmVhcmQpO1xuXG4gICAgdGhpcy5CZWFyZCgpO1xuICAgIHRoaXMuR2xhc3NlcygpO1xuICAgIHRoaXMuSGFpcigpO1xuICAgIHRoaXMuRXllcygpO1xuICAgIHRoaXMuRXllQnJvd3MoKTtcbiAgICB0aGlzLkhhdCgpO1xuICAgIHRoaXMuRnJlY2tsZXMoKTtcbiAgICB0aGlzLkZlYXR1cmVzKCk7XG4gICAgdGhpcy5pZGxlKCk7XG4gICAgdGhpcy5ub3JtYWxpemUoKTtcbiAgfVxuXG4gIG5vcm1hbGl6ZSh2LCB2bWluLCB2bWF4LCB0bWluLCB0bWF4KSB7XG4gICAgY29uc3QgbnYgPSBNYXRoLm1heChNYXRoLm1pbih2LCB2bWF4KSwgdm1pbik7XG4gICAgY29uc3QgZHYgPSB2bWF4IC0gdm1pbjtcbiAgICBjb25zdCBwYyA9IChudiAtIHZtaW4pIC8gZHY7XG4gICAgY29uc3QgZHQgPSB0bWF4IC0gdG1pbjtcbiAgICBjb25zdCB0diA9IHRtaW4gKyAocGMgKiBkdCk7XG4gICAgcmV0dXJuIHR2O1xuICB9XG5cbiAgdXBkYXRlQm9keShzcGVlZCwgZXllQmx1ZVJpZ2h0UG9zWCwgZXllQmx1ZUxlZnRQb3NYLCBleWVCbHVlUmlnaHRQb3NZLCBleWVCbHVlTGVmdFBvc1kpIHtcbiAgICAvL3RoaXMuZXllQmx1ZVJpZ2h0LnJvdGF0aW9uLnkgKz0gKGxpb24udEhlYWdSb3RZIC0gdGhpcy5leWVCbHVlUmlnaHQucm90YXRpb24ueSkgLyBzcGVlZDtcbiAgICAvL3RoaXMuZXllQmx1ZVJpZ2h0LnJvdGF0aW9uLnggKz0gKHRoaXMuZXllQmx1ZVJpZ2h0Um90WCAtIHRoaXMuZXllQmx1ZVJpZ2h0LnJvdGF0aW9uLngpIC8gc3BlZWQ7XG5cbiAgICB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi54ICs9IChleWVCbHVlUmlnaHRQb3NYIC0gdGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24ueCkgLyBzcGVlZDtcbiAgICB0aGlzLmV5ZUJsdWVMZWZ0LnBvc2l0aW9uLnggKz0gKGV5ZUJsdWVMZWZ0UG9zWCAtIHRoaXMuZXllQmx1ZUxlZnQucG9zaXRpb24ueCkgLyBzcGVlZDtcblxuICAgIHRoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLnkgKz0gKGV5ZUJsdWVSaWdodFBvc1kgLSB0aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi55KSAvIHNwZWVkO1xuICAgIHRoaXMuZXllQmx1ZUxlZnQucG9zaXRpb24ueSArPSAoZXllQmx1ZUxlZnRQb3NZIC0gdGhpcy5leWVCbHVlTGVmdC5wb3NpdGlvbi55KSAvIHNwZWVkO1xuXG4gICAgLy90aGlzLmV5ZUJsdWVSaWdodC5wb3NpdGlvbi55ICs9IE1hdGguc2luKHRoaXMuZXllQmx1ZVJpZ2h0UG9zWSAtIHRoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLnkpIC8gc3BlZWQ7XG4gICAgLy8gdGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24ueiArPSAodGhpcy5leWVCbHVlUmlnaHRQb3NaIC0gdGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24ueikgLyBzcGVlZDtcbiAgfVxuXG4gIGlkbGUoeFRhcmdldCA9IDAsIHlUYXJnZXQgPSAwKSB7XG5cbiAgICAvL2NvbnNvbGUubG9nKHhUYXJnZXQsIHlUYXJnZXQpO1xuICAgIC8vY29uc29sZS5sb2codGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24ueCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24ueSk7XG4gICAgbGV0IGRpc3RhbmNlID0gMTtcblxuICAgIHRoaXMuaGVhZC5yb3RhdGlvbi56ID0gTWF0aC5zaW4oRGF0ZS5ub3coKSAqIDAuMDA1KSAqIE1hdGguUEkgKiAwLjAwNTtcbiAgICB0aGlzLmhlYWQucm90YXRpb24ueCA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwNCkgKiBNYXRoLlBJICogMC4wMztcblxuICAgIC8vIHRoaXMuZXllQmx1ZUxlZnQucG9zaXRpb24ueCA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwMikgKiBkaXN0YW5jZSAvIDI7XG4gICAgLy8gdGhpcy5leWVCbHVlUmlnaHQucG9zaXRpb24ueCA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwMikgKiBkaXN0YW5jZSAvIDI7XG5cbiAgICBjb25zdCBleWVCbHVlUmlnaHRQb3NYID0gdGhpcy5ub3JtYWxpemUoeFRhcmdldCwgLTIwMCwgMjAwLCAtMC42LCAwLjYpO1xuXG4gICAgY29uc3QgZXllQmx1ZUxlZnRQb3NYID0gdGhpcy5ub3JtYWxpemUoeFRhcmdldCwgLTIwMCwgMjAwLCAtMC42LCAwLjYpO1xuXG4gICAgY29uc3QgZXllQmx1ZVJpZ2h0UG9zWSA9IHRoaXMubm9ybWFsaXplKHlUYXJnZXQsIC0yMDAsIDIwMCwgMC42LCAtMC42KTtcblxuICAgIGNvbnN0IGV5ZUJsdWVMZWZ0UG9zWSA9IHRoaXMubm9ybWFsaXplKHlUYXJnZXQsIC0yMDAsIDIwMCwgMC42LCAtMC42KTtcblxuICAgIC8vIHRoaXMuZXllQmx1ZVJpZ2h0Um90WSA9IHhUYXJnZXQsIC0yMCwgMjAsIC1NYXRoLlBJIC8gNCwgTWF0aC5QSSAvIDQ7XG4gICAgLy8gdGhpcy5leWVCbHVlUmlnaHRSb3RYID0geVRhcmdldCwgLTIwLCAyMCwgLU1hdGguUEkgLyA0LCBNYXRoLlBJIC8gNDtcbiAgICAvLyB0aGlzLmV5ZUJsdWVSaWdodFBvc1ggPSB4VGFyZ2V0LCAtMjAsIDIwLCA3MCwgLTcwO1xuICAgIC8vIHRoaXMuZXllQmx1ZVJpZ2h0UG9zWSA9IHlUYXJnZXQsIC0xNDAsIDI2MCwgMjAsIDEwMDtcbiAgICAvLyB0aGlzLmV5ZUJsdWVSaWdodFBvc1ogPSA3O1xuXG4gICAgdGhpcy5leWVCcm93UmlnaHQucG9zaXRpb24ueSA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwNCkgKiBkaXN0YW5jZSAvIDI7XG4gICAgdGhpcy5leWVCcm93TGVmdC5wb3NpdGlvbi55ID0gTWF0aC5jb3MoRGF0ZS5ub3coKSAqIDAuMDA0KSAqIGRpc3RhbmNlIC8gMjtcblxuICAgIC8vIHRoaXMuZXllQnJvd1JpZ2h0LnJvdGF0aW9uLnogPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDIpICogTWF0aC5QSSAqIDAuMDQ7XG4gICAgLy8gdGhpcy5leWVCcm93TGVmdC5yb3RhdGlvbi56ID0gTWF0aC5jb3MoRGF0ZS5ub3coKSAqIDAuMDAyKSAqIE1hdGguUEkgKiAwLjA0O1xuXG4gICAgLy90aGlzLmJlYXJkLm1vdXRoLnBvc2l0aW9uLnggPSBNYXRoLnNpbihEYXRlLm5vdygpICogMC4wMDIpICogZGlzdGFuY2UgLyAyO1xuXG4gICAgLy8gU05PUiBPTUhPT0ctT01MQUFHXG4gICAgdGhpcy5tb3VzdGFjaGUucG9zaXRpb24ueSA9IE1hdGguY29zKERhdGUubm93KCkgKiAwLjAxKSAqIGRpc3RhbmNlIC8gNDtcbiAgICAvLyBTTk9SIE9NSE9PRy1ST1RBVElFXG4gICAgdGhpcy5tb3VzdGFjaGUucm90YXRpb24ueiA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAxKSAqIE1hdGguUEkgKiAwLjAxO1xuXG4gICAgLy90aGlzLm1vdXRoLnNjYWxlLnggPSBNYXRoLmNvcyhEYXRlLm5vdygpICogMC4wMDQpICogZGlzdGFuY2UgLyAyO1xuXG4gICAgLy9TTkVMSEVJRCBIRUVOIEVOIFdFRVJcbiAgICB0aGlzLm1lc2gucm90YXRpb24ueSA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAwMikgKiBNYXRoLlBJICogMC4wNTtcbiAgICB0aGlzLnVwZGF0ZUJvZHkoMTAsIGV5ZUJsdWVSaWdodFBvc1gsIGV5ZUJsdWVMZWZ0UG9zWCwgZXllQmx1ZVJpZ2h0UG9zWSwgZXllQmx1ZUxlZnRQb3NZKTtcbiAgfVxuXG4gIEJlYXJkKCkge1xuXG4gICAgbGV0IGJlYXJkR2VvbU1lcmdlZCA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuXG4gICAgbGV0IGJlYXJkMUdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMiwgMTAsIDE2KTtcblxuICAgIGxldCBiZWFyZDEgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDFHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkMS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig5LCAwLCAwKSk7XG4gICAgYmVhcmQxLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDEuZ2VvbWV0cnksIGJlYXJkMS5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkMiA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkMUdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmQyLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDcsIC0yLCAyKSk7XG4gICAgYmVhcmQyLnNjYWxlLnogPSAwLjg7XG4gICAgYmVhcmQyLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDIuZ2VvbWV0cnksIGJlYXJkMi5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkMyA9IGJlYXJkMS5jbG9uZSgpO1xuICAgIGJlYXJkMy5wb3NpdGlvbi54ID0gLWJlYXJkMS5wb3NpdGlvbi54O1xuICAgIGJlYXJkMy51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQzLmdlb21ldHJ5LCBiZWFyZDMubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDQgPSBiZWFyZDIuY2xvbmUoKTtcbiAgICBiZWFyZDQucG9zaXRpb24ueCA9IC1iZWFyZDIucG9zaXRpb24ueDtcbiAgICBiZWFyZDQudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkNC5nZW9tZXRyeSwgYmVhcmQ0Lm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQyR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgzLCAxNCwgMTApO1xuICAgIGJlYXJkMkdlb20udmVydGljZXNbMl0ueiAtPSAyO1xuICAgIGJlYXJkMkdlb20udmVydGljZXNbN10ueiAtPSAyO1xuXG4gICAgbGV0IGJlYXJkNSA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkMkdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmQ1LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDUsIC01LCA0KSk7XG4gICAgYmVhcmQ1LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDUuZ2VvbWV0cnksIGJlYXJkNS5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkM0dlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMi41LCAxNCwgMTApO1xuICAgIGJlYXJkM0dlb20udmVydGljZXNbMl0ueiAtPSAyO1xuICAgIGJlYXJkM0dlb20udmVydGljZXNbN10ueiAtPSAyO1xuXG4gICAgbGV0IGJlYXJkNiA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkM0dlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmQ2LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDIuNSwgLTYsIDYpKTtcbiAgICBiZWFyZDYudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkNi5nZW9tZXRyeSwgYmVhcmQ2Lm1hdHJpeCk7XG5cbiAgICBsZXQgYmVhcmQ3ID0gYmVhcmQ1LmNsb25lKCk7XG4gICAgYmVhcmQ3LnBvc2l0aW9uLnggPSAtYmVhcmQ1LnBvc2l0aW9uLng7XG4gICAgYmVhcmQ3LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDcuZ2VvbWV0cnksIGJlYXJkNy5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkOCA9IGJlYXJkNi5jbG9uZSgpO1xuICAgIGJlYXJkOC5wb3NpdGlvbi54ID0gLWJlYXJkNi5wb3NpdGlvbi54O1xuICAgIGJlYXJkOC51cGRhdGVNYXRyaXgoKTtcbiAgICBiZWFyZEdlb21NZXJnZWQubWVyZ2UoYmVhcmQ4Lmdlb21ldHJ5LCBiZWFyZDgubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDRHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDIuNSwgMTQuNSwgMTApO1xuICAgIGJlYXJkNEdlb20udmVydGljZXNbMl0ueiAtPSAxO1xuICAgIGJlYXJkNEdlb20udmVydGljZXNbN10ueiAtPSAxO1xuXG4gICAgbGV0IGJlYXJkOSA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkNEdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgYmVhcmQ5LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDAsIC03LCA1Ljc1KSk7XG4gICAgYmVhcmQ5LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGJlYXJkR2VvbU1lcmdlZC5tZXJnZShiZWFyZDkuZ2VvbWV0cnksIGJlYXJkOS5tYXRyaXgpO1xuXG4gICAgbGV0IGJlYXJkNUdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoNCwgOCwgOCk7XG4gICAgbGV0IGJlYXJkMTAgPSBuZXcgVEhSRUUuTWVzaChiZWFyZDVHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGJlYXJkMTAuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oLTYsIC0xLCAtMikpO1xuICAgIGJlYXJkMTAudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkMTAuZ2VvbWV0cnksIGJlYXJkMTAubWF0cml4KTtcblxuICAgIGxldCBiZWFyZDExID0gbmV3IFRIUkVFLk1lc2goYmVhcmQ1R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBiZWFyZDExLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDAsIC01LCAtMikpO1xuICAgIGJlYXJkMTEudXBkYXRlTWF0cml4KCk7XG4gICAgYmVhcmRHZW9tTWVyZ2VkLm1lcmdlKGJlYXJkMTEuZ2VvbWV0cnksIGJlYXJkMTEubWF0cml4KTtcblxuICAgIGxldCBiZWFyZE1lcmdlZCA9IG5ldyBUSFJFRS5NZXNoKGJlYXJkR2VvbU1lcmdlZCwgTWF0LndoaXRlTWF0KTtcbiAgICBiZWFyZE1lcmdlZC5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICBiZWFyZE1lcmdlZC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcblxuICAgIGxldCBtb3V0aEdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTAsIDQsIDEpO1xuICAgIGxldCBtb3V0aCA9IG5ldyBUSFJFRS5NZXNoKG1vdXRoR2VvbSwgTWF0LmJsYWNrTWF0KTtcbiAgICBtb3V0aC5wb3NpdGlvbi5zZXQoMCwgMiwgOCk7XG4gICAgbW91dGguY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIG1vdXRoLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuXG4gICAgbGV0IHRlZXRoR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxMCwgMSwgMSk7XG4gICAgbGV0IHRlZXRoID0gbmV3IFRIUkVFLk1lc2godGVldGhHZW9tLCBNYXQudGVldGhNYXQpO1xuICAgIHRlZXRoLnBvc2l0aW9uLnNldCgwLCAwLjUsIDAuMSk7XG4gICAgdGVldGguY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRlZXRoLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuICAgIG1vdXRoLmFkZCh0ZWV0aClcblxuICAgIC8vIGxldCBzbWlsZUdlb20gPSBuZXcgVEhSRUUuVG9ydXNHZW9tZXRyeSg0LCAxLjUsIDIsIDYsIC1NYXRoLlBJKTtcbiAgICAvLyB0aGlzLnNtaWxlID0gbmV3IFRIUkVFLk1lc2goc21pbGVHZW9tLCBNYXQuYmxhY2tNYXQpO1xuICAgIC8vIHRoaXMuc21pbGUucG9zaXRpb24uc2V0KDAsIDIsIDEwKTtcbiAgICAvLyB0aGlzLnNtaWxlLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICAvLyB0aGlzLnNtaWxlLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuICAgIC8vXG4gICAgLy8gdGhpcy5iZWFyZC5hZGQoYmVhcmRNZXJnZWQsIG1vdXRoLCB0aGlzLnNtaWxlKTtcbiAgICB0aGlzLmJlYXJkLmFkZChiZWFyZE1lcmdlZCwgbW91dGgpO1xuXG4gICAgbGV0IG1vdXN0YWNoZUdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTQsIDMsIDMsIDMpO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbMF0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbMV0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbMl0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbM10ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbNF0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbNV0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbNl0ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbN10ueSAtPSAyO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbOF0ueCAtPSAxO1xuICAgIG1vdXN0YWNoZUdlb20udmVydGljZXNbOV0ueCArPSAxO1xuXG4gICAgbW91c3RhY2hlR2VvbS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigwLCA0LCAwKSk7XG4gICAgdGhpcy5tb3VzdGFjaGUgPSBuZXcgVEhSRUUuTWVzaChtb3VzdGFjaGVHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIHRoaXMubW91c3RhY2hlLmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgIHRoaXMubW91c3RhY2hlLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuXG4gICAgdGhpcy5tb3VzdGFjaGUucG9zaXRpb24uc2V0KDAsIDAsIDkpO1xuICAgIHRoaXMuYmVhcmQuYWRkKHRoaXMubW91c3RhY2hlKTtcbiAgfVxuXG4gIEdsYXNzZXMoKSB7XG4gICAgLy9HTEFTU0VTXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgdGhpcy5nbGFzc2VzID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgdGhpcy5nbGFzc2VzLnBvc2l0aW9uLnNldCgwLCAwLCA5KTtcbiAgICB0aGlzLmhlYWQuYWRkKHRoaXMuZ2xhc3Nlcyk7XG4gICAgbGV0IGdsYXNzZXNNYXQgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuZ2xhc3NlcywgZmxhdFNoYWRpbmc6IHRydWV9KTtcblxuXG4gICAgbGV0IGZyYW1lR2VvbU1lcmdlZCA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuXG4gICAgbGV0IGZyYW1lT3V0ZXJHZW9tID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMywgMywgMC41LCAzMilcbiAgICBsZXQgZnJhbWVJbm5lckdlb20gPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgyLjcsIDIuNywgMC41LCAzMilcblxuICAgIGZyYW1lT3V0ZXJHZW9tLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWCgtTWF0aC5QSSAvIDIpKTtcbiAgICBmcmFtZUlubmVyR2VvbS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblgoLU1hdGguUEkgLyAyKSk7XG5cbiAgICBsZXQgZnJhbWVCU1AgPSBuZXcgVGhyZWVCU1AoZnJhbWVPdXRlckdlb20pO1xuICAgIGxldCBmcmFtZUN1dEJTUCA9IG5ldyBUaHJlZUJTUChmcmFtZUlubmVyR2VvbSk7XG5cbiAgICBsZXQgZnJhbWVpbnRlcnNlY3Rpb25CU1AgPSBmcmFtZUJTUC5zdWJ0cmFjdChmcmFtZUN1dEJTUCk7XG4gICAgbGV0IGZyYW1lTGVmdCA9IGZyYW1laW50ZXJzZWN0aW9uQlNQLnRvTWVzaChnbGFzc2VzTWF0KTtcblxuICAgIGZyYW1lTGVmdC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig0LCAzLCAwKSk7XG4gICAgZnJhbWVMZWZ0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyYW1lR2VvbU1lcmdlZC5tZXJnZShmcmFtZUxlZnQuZ2VvbWV0cnksIGZyYW1lTGVmdC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lUmlnaHQgPSBmcmFtZUxlZnQuY2xvbmUoKTtcbiAgICBmcmFtZVJpZ2h0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWihNYXRoLlBJIC8gMzApKTtcbiAgICBmcmFtZVJpZ2h0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKC03LjUsIC0wLjI1LCAwKSk7XG4gICAgZnJhbWVSaWdodC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmFtZUdlb21NZXJnZWQubWVyZ2UoZnJhbWVSaWdodC5nZW9tZXRyeSwgZnJhbWVSaWdodC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lTWlkR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyLCAuMywgLjUpO1xuICAgIGxldCBmcmFtZU1pZCA9IG5ldyBUSFJFRS5NZXNoKGZyYW1lTWlkR2VvbSwgZ2xhc3Nlc01hdCk7XG4gICAgZnJhbWVNaWQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oMCwgMy4zLCAtMC4zKSk7XG4gICAgZnJhbWVNaWQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJhbWVHZW9tTWVyZ2VkLm1lcmdlKGZyYW1lTWlkLmdlb21ldHJ5LCBmcmFtZU1pZC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lRW5kR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLjUsIC41LCAxKTtcbiAgICBsZXQgZnJhbWVFbmRSaWdodCA9IG5ldyBUSFJFRS5NZXNoKGZyYW1lRW5kR2VvbSwgZ2xhc3Nlc01hdCk7XG4gICAgZnJhbWVFbmRSaWdodC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig3LjUsIDMsIDApKTtcbiAgICBmcmFtZUVuZFJpZ2h0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyYW1lR2VvbU1lcmdlZC5tZXJnZShmcmFtZUVuZFJpZ2h0Lmdlb21ldHJ5LCBmcmFtZUVuZFJpZ2h0Lm1hdHJpeCk7XG5cbiAgICBsZXQgZnJhbWVFbmRMZWZ0ID0gZnJhbWVFbmRSaWdodC5jbG9uZSgpO1xuICAgIGZyYW1lRW5kTGVmdC5wb3NpdGlvbi54ID0gLWZyYW1lRW5kUmlnaHQucG9zaXRpb24ueDtcbiAgICBmcmFtZUVuZExlZnQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJhbWVHZW9tTWVyZ2VkLm1lcmdlKGZyYW1lRW5kTGVmdC5nZW9tZXRyeSwgZnJhbWVFbmRMZWZ0Lm1hdHJpeCk7XG5cbiAgICBsZXQgZnJhbWVTcG9rZUdlb20gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMSwgMC41LCAxMik7XG4gICAgbGV0IGZyYW1lU3Bva2VSaWdodCA9IG5ldyBUSFJFRS5NZXNoKGZyYW1lU3Bva2VHZW9tLCBnbGFzc2VzTWF0KTtcbiAgICBmcmFtZVNwb2tlUmlnaHQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oOCwgMywgLTUuNSkpO1xuICAgIGZyYW1lU3Bva2VSaWdodC51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmFtZUdlb21NZXJnZWQubWVyZ2UoZnJhbWVTcG9rZVJpZ2h0Lmdlb21ldHJ5LCBmcmFtZVNwb2tlUmlnaHQubWF0cml4KTtcblxuICAgIGxldCBmcmFtZVNwb2tlTGVmdCA9IGZyYW1lU3Bva2VSaWdodC5jbG9uZSgpO1xuICAgIGZyYW1lU3Bva2VMZWZ0LnBvc2l0aW9uLnggPSAtZnJhbWVTcG9rZVJpZ2h0LnBvc2l0aW9uLng7XG4gICAgZnJhbWVTcG9rZUxlZnQudXBkYXRlTWF0cml4KCk7XG4gICAgZnJhbWVHZW9tTWVyZ2VkLm1lcmdlKGZyYW1lU3Bva2VMZWZ0Lmdlb21ldHJ5LCBmcmFtZVNwb2tlTGVmdC5tYXRyaXgpO1xuXG4gICAgbGV0IGZyYW1lTWVyZ2VkID0gbmV3IFRIUkVFLk1lc2goZnJhbWVHZW9tTWVyZ2VkLCBnbGFzc2VzTWF0KTtcbiAgICBmcmFtZU1lcmdlZC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgZnJhbWVNZXJnZWQucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG5cbiAgICB0aGlzLmdsYXNzZXMuYWRkKGZyYW1lTWVyZ2VkKTtcblxuICB9XG5cbiAgSGFpcigpIHtcbiAgICAvL0hBSVJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHRoaXMuaGFpciA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHRoaXMuaGFpci5wb3NpdGlvbi5zZXQoMCwgOSwgMCk7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmhhaXIpO1xuXG4gICAgbGV0IGhhaXJHZW9tTWVyZ2VkID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XG5cbiAgICBsZXQgaGFpckZsYXRHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEwLCAyLCAxOCk7XG5cbiAgICBsZXQgaGFpcjEgPSBuZXcgVEhSRUUuTWVzaChoYWlyRmxhdEdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgaGFpcjEuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKC1NYXRoLlBJIC8gNDApKTtcbiAgICBoYWlyMS5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigtNCwgLTAuNSwgMCkpO1xuICAgIGhhaXIxLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGhhaXJHZW9tTWVyZ2VkLm1lcmdlKGhhaXIxLmdlb21ldHJ5LCBoYWlyMS5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXIyID0gbmV3IFRIUkVFLk1lc2goaGFpckZsYXRHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGhhaXIyLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWigtTWF0aC5QSSAvIDEwKSk7XG4gICAgaGFpcjIuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oLTIsIDEsIDApKTtcbiAgICBoYWlyMi51cGRhdGVNYXRyaXgoKTtcbiAgICBoYWlyR2VvbU1lcmdlZC5tZXJnZShoYWlyMi5nZW9tZXRyeSwgaGFpcjIubWF0cml4KTtcblxuICAgIGxldCBoYWlyMyA9IG5ldyBUSFJFRS5NZXNoKGhhaXJGbGF0R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBoYWlyMy5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblooLU1hdGguUEkgLyA1KSk7XG4gICAgaGFpcjMuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oMiwgMSwgMCkpO1xuICAgIGhhaXIzLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGhhaXJHZW9tTWVyZ2VkLm1lcmdlKGhhaXIzLmdlb21ldHJ5LCBoYWlyMy5tYXRyaXgpO1xuXG4gICAgbGV0IGhhaXI0ID0gbmV3IFRIUkVFLk1lc2goaGFpckZsYXRHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGhhaXI0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWigtTWF0aC5QSSAvIDQpKTtcbiAgICBoYWlyNC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbig2LCAwLCAwKSk7XG4gICAgaGFpcjQudXBkYXRlTWF0cml4KCk7XG4gICAgaGFpckdlb21NZXJnZWQubWVyZ2UoaGFpcjQuZ2VvbWV0cnksIGhhaXI0Lm1hdHJpeCk7XG5cbiAgICBsZXQgaGFpcjYgPSBuZXcgVEhSRUUuTWVzaChoYWlyRmxhdEdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgaGFpcjYuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKC1NYXRoLlBJIC8gLTMpKTtcbiAgICBoYWlyNi5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigtNy43NSwgLS41LCAwKSk7XG4gICAgaGFpcjYudXBkYXRlTWF0cml4KCk7XG4gICAgaGFpckdlb21NZXJnZWQubWVyZ2UoaGFpcjYuZ2VvbWV0cnksIGhhaXI2Lm1hdHJpeCk7XG5cbiAgICBsZXQgaGFpckZsYXRCYWNrR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxOCwgNywgNik7XG4gICAgaGFpckZsYXRCYWNrR2VvbS52ZXJ0aWNlc1swXS54IC09IDE7XG4gICAgaGFpckZsYXRCYWNrR2VvbS52ZXJ0aWNlc1sxXS54IC09IDE7XG4gICAgaGFpckZsYXRCYWNrR2VvbS52ZXJ0aWNlc1s0XS54ICs9IDE7XG4gICAgaGFpckZsYXRCYWNrR2VvbS52ZXJ0aWNlc1s1XS54ICs9IDE7XG5cbiAgICBsZXQgaGFpcjUgPSBuZXcgVEhSRUUuTWVzaChoYWlyRmxhdEJhY2tHZW9tLCBNYXQud2hpdGVNYXQpO1xuICAgIGhhaXI1LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKDAsIC00LjUsIC02KSk7XG4gICAgaGFpcjUudXBkYXRlTWF0cml4KCk7XG4gICAgaGFpckdlb21NZXJnZWQubWVyZ2UoaGFpcjUuZ2VvbWV0cnksIGhhaXI1Lm1hdHJpeCk7XG5cbiAgICBsZXQgaGFpck1lcmdlZCA9IG5ldyBUSFJFRS5NZXNoKGhhaXJHZW9tTWVyZ2VkLCBNYXQud2hpdGVNYXQpO1xuICAgIGhhaXJNZXJnZWQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIGhhaXJNZXJnZWQucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG5cbiAgICB0aGlzLmhhaXIuYWRkKGhhaXJNZXJnZWQpO1xuXG4gIH1cblxuICBFeWVzKCkge1xuXG4gICAgdGhpcy5leWVzID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgdGhpcy5leWVzLnBvc2l0aW9uLnNldCgwLCAzLCA5KTtcbiAgICB0aGlzLmhlYWQuYWRkKHRoaXMuZXllcyk7XG5cbiAgICBsZXQgZXllV2hpdGVHZW9tID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMi41LCAyLjUpO1xuXG4gICAgbGV0IGV5ZVdoaXRlUmlnaHQgPSBuZXcgVEhSRUUuTWVzaChleWVXaGl0ZUdlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgZXllV2hpdGVSaWdodC5wb3NpdGlvbi5zZXQoLTMuNzUsIDAsIDApO1xuICAgIGV5ZVdoaXRlUmlnaHQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIGV5ZVdoaXRlUmlnaHQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgbGV0IGV5ZUJsdWVHZW9tID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMS41LCAxLjUpO1xuXG4gICAgbGV0IGV5ZU1hdCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5leWUsIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG5cbiAgICB0aGlzLmV5ZUJsdWVSaWdodCA9IG5ldyBUSFJFRS5NZXNoKGV5ZUJsdWVHZW9tLCBleWVNYXQpO1xuICAgIHRoaXMuZXllQmx1ZVJpZ2h0LnBvc2l0aW9uLnNldCgwLCAwLCAuMDEpO1xuICAgIHRoaXMuZXllQmx1ZVJpZ2h0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmV5ZUJsdWVSaWdodC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICBleWVXaGl0ZVJpZ2h0LmFkZCh0aGlzLmV5ZUJsdWVSaWdodCk7XG5cbiAgICBsZXQgZXllUHVwaWxHZW9tID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMSwgMSk7XG5cbiAgICB0aGlzLmV5ZVB1cGlsUmlnaHQgPSBuZXcgVEhSRUUuTWVzaChleWVQdXBpbEdlb20sIE1hdC5ibGFja01hdCk7XG4gICAgdGhpcy5leWVQdXBpbFJpZ2h0LnBvc2l0aW9uLnNldCgwLCAwLCAuMDIpO1xuICAgIHRoaXMuZXllUHVwaWxSaWdodC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5leWVQdXBpbFJpZ2h0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuZXllQmx1ZVJpZ2h0LmFkZCh0aGlzLmV5ZVB1cGlsUmlnaHQpO1xuXG4gICAgbGV0IGV5ZVdoaXRlTGVmdCA9IG5ldyBUSFJFRS5NZXNoKGV5ZVdoaXRlR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICBleWVXaGl0ZUxlZnQucG9zaXRpb24uc2V0KDMuNzUsIDAsIDApO1xuICAgIGV5ZVdoaXRlTGVmdC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgZXllV2hpdGVMZWZ0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuZXllQmx1ZUxlZnQgPSBuZXcgVEhSRUUuTWVzaChleWVCbHVlR2VvbSwgZXllTWF0KTtcbiAgICB0aGlzLmV5ZUJsdWVMZWZ0LnBvc2l0aW9uLnNldCgwLCAwLCAuMDEpO1xuICAgIHRoaXMuZXllQmx1ZUxlZnQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuZXllQmx1ZUxlZnQucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgZXllV2hpdGVMZWZ0LmFkZCh0aGlzLmV5ZUJsdWVMZWZ0KTtcblxuICAgIHRoaXMuZXllUHVwaWxMZWZ0ID0gbmV3IFRIUkVFLk1lc2goZXllUHVwaWxHZW9tLCBNYXQuYmxhY2tNYXQpO1xuICAgIHRoaXMuZXllUHVwaWxMZWZ0LnBvc2l0aW9uLnNldCgwLCAwLCAuMDIpO1xuICAgIHRoaXMuZXllUHVwaWxMZWZ0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmV5ZVB1cGlsTGVmdC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmV5ZUJsdWVMZWZ0LmFkZCh0aGlzLmV5ZVB1cGlsTGVmdCk7XG5cbiAgICB0aGlzLmV5ZXMuYWRkKGV5ZVdoaXRlUmlnaHQsIGV5ZVdoaXRlTGVmdCk7XG4gIH1cblxuICBFeWVCcm93cygpIHtcbiAgICB0aGlzLmV5ZUJyb3dzID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgdGhpcy5leWVCcm93cy5wb3NpdGlvbi5zZXQoMCwgNiwgOCk7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmV5ZUJyb3dzKTtcblxuICAgIGxldCBleWVCcm93R2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSg0LCAxLCAxKTtcblxuICAgIHRoaXMuZXllQnJvd1JpZ2h0ID0gbmV3IFRIUkVFLk1lc2goZXllQnJvd0dlb20sIE1hdC53aGl0ZU1hdCk7XG4gICAgdGhpcy5leWVCcm93UmlnaHQuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25aKE1hdGguUEkgLyA0NSkpO1xuICAgIHRoaXMuZXllQnJvd1JpZ2h0LnBvc2l0aW9uLnNldCgtMy43NSwgMCwgMCk7XG4gICAgdGhpcy5leWVCcm93UmlnaHQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuZXllQnJvd1JpZ2h0LnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuZXllQnJvd0xlZnQgPSBuZXcgVEhSRUUuTWVzaChleWVCcm93R2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICB0aGlzLmV5ZUJyb3dMZWZ0LmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWigtTWF0aC5QSSAvIDQ1KSk7XG4gICAgdGhpcy5leWVCcm93TGVmdC5wb3NpdGlvbi5zZXQoMy43NSwgMCwgMCk7XG4gICAgdGhpcy5leWVCcm93TGVmdC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5leWVCcm93TGVmdC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmV5ZUJyb3dzLmFkZCh0aGlzLmV5ZUJyb3dSaWdodCwgdGhpcy5leWVCcm93TGVmdCk7XG4gIH1cblxuICBIYXQoKSB7XG4gICAgdGhpcy5oYXQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmhhdC5wb3NpdGlvbi5zZXQoLTAuMiwgMTEsIDIuNCk7XG4gICAgdGhpcy5oZWFkLmFkZCh0aGlzLmhhdCk7XG4gICAgbGV0IGhhdE1hdCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5oYXQsIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG5cblxuICAgIGxldCBiYW5kR2VvbSA9IG5ldyBUSFJFRS5Ub3J1c0dlb21ldHJ5KDksIDIsIDE2LCAxMDApO1xuICAgIGxldCBiaWdDb25lR2VvbSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDEsIDExLCAxMiwgMTUpO1xuICAgIGxldCBzbWFsbENvbmVHZW9tID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMC44LCAzLCA5LCAzMik7XG4gICAgbGV0IGhhdERpbmdsZUdlb20gPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMS41LCA4LCA4KTtcblxuICAgIHRoaXMuYmFuZCA9IG5ldyBUSFJFRS5NZXNoKGJhbmRHZW9tLCBNYXQudGVldGhNYXQpO1xuICAgIHRoaXMuYmFuZC5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VSb3RhdGlvblgoTWF0aC5QSSAvIDIpKTtcbiAgICB0aGlzLmJhbmQucG9zaXRpb24uc2V0KDAsIDAsIDApO1xuICAgIHRoaXMuYmFuZC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgdGhpcy5iYW5kLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuYmlnQ29uZSA9IG5ldyBUSFJFRS5NZXNoKGJpZ0NvbmVHZW9tLCBoYXRNYXQpO1xuICAgIHRoaXMuYmlnQ29uZS5wb3NpdGlvbi5zZXQoMCwgNiwgMCk7XG4gICAgdGhpcy5iaWdDb25lLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICB0aGlzLmJpZ0NvbmUucmVjZWl2ZVNoYWRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5zbWFsbENvbmUgPSBuZXcgVEhSRUUuTWVzaChzbWFsbENvbmVHZW9tLCBoYXRNYXQpO1xuICAgIHRoaXMuc21hbGxDb25lLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWChNYXRoLlBJIC8gMikpO1xuICAgIHRoaXMuc21hbGxDb25lLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWShNYXRoLlBJIC8gMikpO1xuICAgIHRoaXMuc21hbGxDb25lLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVJvdGF0aW9uWihNYXRoLlBJIC8gLTgpKTtcbiAgICB0aGlzLnNtYWxsQ29uZS5wb3NpdGlvbi5zZXQoNCwgNy44LCAtMSk7XG4gICAgdGhpcy5zbWFsbENvbmUuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuc21hbGxDb25lLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuaGF0RGluZ2xlID0gbmV3IFRIUkVFLk1lc2goaGF0RGluZ2xlR2VvbSwgTWF0LndoaXRlTWF0KTtcbiAgICB0aGlzLmhhdERpbmdsZS5wb3NpdGlvbi5zZXQoOSwgNS41LCAtMSk7XG4gICAgdGhpcy5oYXREaW5nbGUuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIHRoaXMuaGF0RGluZ2xlLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuaGF0LmFkZCh0aGlzLmJhbmQsIHRoaXMuYmlnQ29uZSwgdGhpcy5zbWFsbENvbmUsIHRoaXMuaGF0RGluZ2xlKTtcbiAgfVxuXG4gIEZyZWNrbGVzKCkge1xuICAgIHRoaXMuZnJlY2tsZXMgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmZyZWNrbGVzLnBvc2l0aW9uLnNldCgwLCAwLCA4KTtcbiAgICB0aGlzLmhlYWQuYWRkKHRoaXMuZnJlY2tsZXMpO1xuXG4gICAgbGV0IGZyZWNrbGVzR2VvbU1lcmdlZCA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuXG4gICAgbGV0IGZyZWNrbGVzR2VvbSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDAuNSwgMC41KTtcbiAgICBsZXQgZnJlY2tsZXNNYXQgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5mcmVja2xlcywgZmxhdFNoYWRpbmc6IHRydWV9KTtcblxuICAgIGxldCBmcmVja2xlMSA9IG5ldyBUSFJFRS5NZXNoKGZyZWNrbGVzR2VvbSwgZnJlY2tsZXNNYXQpO1xuICAgIGZyZWNrbGUxLmFwcGx5TWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKC01LCAwLCAwLjAxKSk7XG4gICAgZnJlY2tsZTEudXBkYXRlTWF0cml4KCk7XG4gICAgZnJlY2tsZXNHZW9tTWVyZ2VkLm1lcmdlKGZyZWNrbGUxLmdlb21ldHJ5LCBmcmVja2xlMS5tYXRyaXgpO1xuXG4gICAgbGV0IGZyZWNrbGUyID0gZnJlY2tsZTEuY2xvbmUoKTtcbiAgICBmcmVja2xlMi5hcHBseU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbigtMC41LCAtMSwgMCkpO1xuICAgIGZyZWNrbGUyLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyZWNrbGVzR2VvbU1lcmdlZC5tZXJnZShmcmVja2xlMi5nZW9tZXRyeSwgZnJlY2tsZTIubWF0cml4KTtcblxuICAgIGxldCBmcmVja2xlMyA9IGZyZWNrbGUxLmNsb25lKCk7XG4gICAgZnJlY2tsZTMuYXBwbHlNYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oMSwgLTAuNSwgMCkpO1xuICAgIGZyZWNrbGUzLnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyZWNrbGVzR2VvbU1lcmdlZC5tZXJnZShmcmVja2xlMy5nZW9tZXRyeSwgZnJlY2tsZTMubWF0cml4KTtcblxuICAgIGxldCBmcmVja2xlNCA9IGZyZWNrbGUxLmNsb25lKCk7XG4gICAgZnJlY2tsZTQucG9zaXRpb24ueCA9IC1mcmVja2xlMS5wb3NpdGlvbi54O1xuICAgIGZyZWNrbGU0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIGZyZWNrbGVzR2VvbU1lcmdlZC5tZXJnZShmcmVja2xlNC5nZW9tZXRyeSwgZnJlY2tsZTQubWF0cml4KTtcbiAgICBsZXQgZnJlY2tsZTUgPSBmcmVja2xlMi5jbG9uZSgpO1xuICAgIGZyZWNrbGU1LnBvc2l0aW9uLnggPSAtZnJlY2tsZTIucG9zaXRpb24ueDtcbiAgICBmcmVja2xlNS51cGRhdGVNYXRyaXgoKTtcbiAgICBmcmVja2xlc0dlb21NZXJnZWQubWVyZ2UoZnJlY2tsZTUuZ2VvbWV0cnksIGZyZWNrbGU1Lm1hdHJpeCk7XG4gICAgbGV0IGZyZWNrbGU2ID0gZnJlY2tsZTMuY2xvbmUoKTtcbiAgICBmcmVja2xlNi5wb3NpdGlvbi54ID0gLWZyZWNrbGUzLnBvc2l0aW9uLng7XG4gICAgZnJlY2tsZTYudXBkYXRlTWF0cml4KCk7XG4gICAgZnJlY2tsZXNHZW9tTWVyZ2VkLm1lcmdlKGZyZWNrbGU2Lmdlb21ldHJ5LCBmcmVja2xlNi5tYXRyaXgpO1xuXG4gICAgbGV0IGZyZWNrbGVkTWVyZ2VkID0gbmV3IFRIUkVFLk1lc2goZnJlY2tsZXNHZW9tTWVyZ2VkLCBmcmVja2xlc01hdCk7XG4gICAgZnJlY2tsZWRNZXJnZWQuY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgIGZyZWNrbGVkTWVyZ2VkLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuZnJlY2tsZXMuYWRkKGZyZWNrbGVkTWVyZ2VkKTtcbiAgfVxuXG4gIEZlYXR1cmVzKCkge1xuICAgIGxldCBlYXJHZW9tID0gbmV3IFRIUkVFLkJveEJ1ZmZlckdlb21ldHJ5KDEuNSwgMywgMS41KTtcbiAgICBsZXQgc2tpbk1hdCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogQ29sb3JzLnNraW4sIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG4gICAgbGV0IGVhclJpZ2h0ID0gbmV3IFRIUkVFLk1lc2goZWFyR2VvbSwgc2tpbk1hdCk7XG4gICAgZWFyUmlnaHQucG9zaXRpb24uc2V0KC04LjUsIDEsIDMpO1xuICAgIGVhclJpZ2h0LmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICBlYXJSaWdodC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICBsZXQgZWFyTGVmdCA9IG5ldyBUSFJFRS5NZXNoKGVhckdlb20sIHNraW5NYXQpO1xuICAgIGVhckxlZnQucG9zaXRpb24uc2V0KDguNSwgMSwgMyk7XG4gICAgZWFyTGVmdC5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgZWFyTGVmdC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICBsZXQgbm9zZUdlb20gPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgxLCAyLCA0LCA0KTtcbiAgICBsZXQgbm9zZSA9IG5ldyBUSFJFRS5NZXNoKG5vc2VHZW9tLCBza2luTWF0KTtcbiAgICBub3NlLnNjYWxlLnNldCguNzUsIDEsIDEuMyk7XG4gICAgbm9zZS5wb3NpdGlvbi5zZXQoMCwgMSwgOCk7XG4gICAgbm9zZS5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgbm9zZS5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmhlYWQuYWRkKGVhclJpZ2h0LCBlYXJMZWZ0LCBub3NlKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzZXMvSGVhZC5qcyIsImltcG9ydCBDb2xvcnMgZnJvbSAnLi9jb2xvcnMnO1xuLy8gbGV0IHNraW5NYXQgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5za2luLCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuLy8gbGV0IGZyZWNrbGVzTWF0ID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuZnJlY2tsZXMsIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG4vLyBsZXQgYXVidXJuTWF0ID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuYXVidXJuLCBmbGF0U2hhZGluZzogdHJ1ZX0pO1xuLy8gbGV0IGJyb3duTWF0ID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuYnJvd24sIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG4vLyBsZXQgYmxhY2tNYXQgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5ibGFjaywgZmxhdFNoYWRpbmc6IHRydWV9KTtcbi8vIGxldCB3aGl0ZU1hdCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy53aGl0ZSwgZmxhdFNoYWRpbmc6IHRydWV9KTtcbi8vIGxldCBleWVzTWF0ID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmV5ZXMsIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG4vLyBsZXQgYmVpZ2VNYXQgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuYmVpZ2UsIGZsYXRTaGFkaW5nOiB0cnVlfSk7XG4vLyBsZXQgbm9ybWFsTWF0ID0gbmV3IFRIUkVFLk1lc2hOb3JtYWxNYXRlcmlhbCh7fSk7XG5jb25zdCBNYXRlcmlhbHMgPSB7XG4gIC8vXCJza2luTWF0XCI6IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogQ29sb3JzLnNraW4sIGZsYXRTaGFkaW5nOiB0cnVlfSksXG4gIC8vXCJmcmVja2xlc01hdFwiOiBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy5mcmVja2xlcywgZmxhdFNoYWRpbmc6IHRydWV9KSxcbiAgXCJ3aGl0ZU1hdFwiOiBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IENvbG9ycy53aGl0ZSwgZmxhdFNoYWRpbmc6IHRydWV9KSxcbiAgLy9cImdsYXNzZXNNYXRcIjogbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuZ2xhc3NlcywgZmxhdFNoYWRpbmc6IHRydWV9KSxcbiAgXCJ0ZWV0aE1hdFwiOiBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMudGVldGgsIGZsYXRTaGFkaW5nOiB0cnVlfSksXG4gIFwiYnJvd25NYXRcIjogbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuYnJvd24sIGZsYXRTaGFkaW5nOiB0cnVlfSksXG4gIFwiYmxhY2tNYXRcIjogbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuYmxhY2ssIGZsYXRTaGFkaW5nOiB0cnVlfSksXG4gIC8vXCJleWVNYXRcIjogbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjogQ29sb3JzLmV5ZSwgZmxhdFNoYWRpbmc6IHRydWV9KSxcbiAgLy9cImhhdE1hdFwiOiBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOiBDb2xvcnMuaGF0LCBmbGF0U2hhZGluZzogdHJ1ZX0pLFxuICBcIm5vcm1hbE1hdFwiOiBuZXcgVEhSRUUuTWVzaE5vcm1hbE1hdGVyaWFsKHt9KVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWF0ZXJpYWxzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL29iamVjdHMvTWF0ZXJpYWxzLmpzIiwiKGZ1bmN0aW9uKHNlbGYpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGlmIChzZWxmLmZldGNoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgc3VwcG9ydCA9IHtcbiAgICBzZWFyY2hQYXJhbXM6ICdVUkxTZWFyY2hQYXJhbXMnIGluIHNlbGYsXG4gICAgaXRlcmFibGU6ICdTeW1ib2wnIGluIHNlbGYgJiYgJ2l0ZXJhdG9yJyBpbiBTeW1ib2wsXG4gICAgYmxvYjogJ0ZpbGVSZWFkZXInIGluIHNlbGYgJiYgJ0Jsb2InIGluIHNlbGYgJiYgKGZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbmV3IEJsb2IoKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pKCksXG4gICAgZm9ybURhdGE6ICdGb3JtRGF0YScgaW4gc2VsZixcbiAgICBhcnJheUJ1ZmZlcjogJ0FycmF5QnVmZmVyJyBpbiBzZWxmXG4gIH1cblxuICBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlcikge1xuICAgIHZhciB2aWV3Q2xhc3NlcyA9IFtcbiAgICAgICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDY0QXJyYXldJ1xuICAgIF1cblxuICAgIHZhciBpc0RhdGFWaWV3ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIERhdGFWaWV3LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKG9iailcbiAgICB9XG5cbiAgICB2YXIgaXNBcnJheUJ1ZmZlclZpZXcgPSBBcnJheUJ1ZmZlci5pc1ZpZXcgfHwgZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHZpZXdDbGFzc2VzLmluZGV4T2YoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikpID4gLTFcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVOYW1lKG5hbWUpIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lID0gU3RyaW5nKG5hbWUpXG4gICAgfVxuICAgIGlmICgvW15hLXowLTlcXC0jJCUmJyorLlxcXl9gfH5dL2kudGVzdChuYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjaGFyYWN0ZXIgaW4gaGVhZGVyIGZpZWxkIG5hbWUnKVxuICAgIH1cbiAgICByZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpXG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvLyBCdWlsZCBhIGRlc3RydWN0aXZlIGl0ZXJhdG9yIGZvciB0aGUgdmFsdWUgbGlzdFxuICBmdW5jdGlvbiBpdGVyYXRvckZvcihpdGVtcykge1xuICAgIHZhciBpdGVyYXRvciA9IHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpXG4gICAgICAgIHJldHVybiB7ZG9uZTogdmFsdWUgPT09IHVuZGVmaW5lZCwgdmFsdWU6IHZhbHVlfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvclxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpdGVyYXRvclxuICB9XG5cbiAgZnVuY3Rpb24gSGVhZGVycyhoZWFkZXJzKSB7XG4gICAgdGhpcy5tYXAgPSB7fVxuXG4gICAgaWYgKGhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgdmFsdWUpXG4gICAgICB9LCB0aGlzKVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShoZWFkZXJzKSkge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhlYWRlcikge1xuICAgICAgICB0aGlzLmFwcGVuZChoZWFkZXJbMF0sIGhlYWRlclsxXSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfSBlbHNlIGlmIChoZWFkZXJzKSB7XG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgaGVhZGVyc1tuYW1lXSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICAgIHZhbHVlID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG4gICAgdmFyIG9sZFZhbHVlID0gdGhpcy5tYXBbbmFtZV1cbiAgICB0aGlzLm1hcFtuYW1lXSA9IG9sZFZhbHVlID8gb2xkVmFsdWUrJywnK3ZhbHVlIDogdmFsdWVcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlWydkZWxldGUnXSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICAgIHJldHVybiB0aGlzLmhhcyhuYW1lKSA/IHRoaXMubWFwW25hbWVdIDogbnVsbFxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShub3JtYWxpemVOYW1lKG5hbWUpKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLm1hcCkge1xuICAgICAgaWYgKHRoaXMubWFwLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdGhpcy5tYXBbbmFtZV0sIG5hbWUsIHRoaXMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2gobmFtZSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkgeyBpdGVtcy5wdXNoKHZhbHVlKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICBIZWFkZXJzLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gSGVhZGVycy5wcm90b3R5cGUuZW50cmllc1xuICB9XG5cbiAgZnVuY3Rpb24gY29uc3VtZWQoYm9keSkge1xuICAgIGlmIChib2R5LmJvZHlVc2VkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJykpXG4gICAgfVxuICAgIGJvZHkuYm9keVVzZWQgPSB0cnVlXG4gIH1cblxuICBmdW5jdGlvbiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpXG4gICAgICB9XG4gICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QocmVhZGVyLmVycm9yKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzQXJyYXlCdWZmZXIoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzVGV4dChibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoYmxvYilcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEFycmF5QnVmZmVyQXNUZXh0KGJ1Zikge1xuICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgIHZhciBjaGFycyA9IG5ldyBBcnJheSh2aWV3Lmxlbmd0aClcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgICAgY2hhcnNbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHZpZXdbaV0pXG4gICAgfVxuICAgIHJldHVybiBjaGFycy5qb2luKCcnKVxuICB9XG5cbiAgZnVuY3Rpb24gYnVmZmVyQ2xvbmUoYnVmKSB7XG4gICAgaWYgKGJ1Zi5zbGljZSkge1xuICAgICAgcmV0dXJuIGJ1Zi5zbGljZSgwKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zi5ieXRlTGVuZ3RoKVxuICAgICAgdmlldy5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmKSlcbiAgICAgIHJldHVybiB2aWV3LmJ1ZmZlclxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEJvZHkoKSB7XG4gICAgdGhpcy5ib2R5VXNlZCA9IGZhbHNlXG5cbiAgICB0aGlzLl9pbml0Qm9keSA9IGZ1bmN0aW9uKGJvZHkpIHtcbiAgICAgIHRoaXMuX2JvZHlJbml0ID0gYm9keVxuICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gJydcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmJsb2IgJiYgQmxvYi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QmxvYiA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5mb3JtRGF0YSAmJiBGb3JtRGF0YS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5Rm9ybURhdGEgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkudG9TdHJpbmcoKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIHN1cHBvcnQuYmxvYiAmJiBpc0RhdGFWaWV3KGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkuYnVmZmVyKVxuICAgICAgICAvLyBJRSAxMC0xMSBjYW4ndCBoYW5kbGUgYSBEYXRhVmlldyBib2R5LlxuICAgICAgICB0aGlzLl9ib2R5SW5pdCA9IG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIChBcnJheUJ1ZmZlci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSB8fCBpc0FycmF5QnVmZmVyVmlldyhib2R5KSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5zdXBwb3J0ZWQgQm9keUluaXQgdHlwZScpXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlCbG9iICYmIHRoaXMuX2JvZHlCbG9iLnR5cGUpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCB0aGlzLl9ib2R5QmxvYi50eXBlKVxuICAgICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5ibG9iKSB7XG4gICAgICB0aGlzLmJsb2IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlCbG9iKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyBibG9iJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5VGV4dF0pKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBjb25zdW1lZCh0aGlzKSB8fCBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUFycmF5QnVmZmVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmJsb2IoKS50aGVuKHJlYWRCbG9iQXNBcnJheUJ1ZmZlcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgIHJldHVybiByZWFkQmxvYkFzVGV4dCh0aGlzLl9ib2R5QmxvYilcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVhZEFycmF5QnVmZmVyQXNUZXh0KHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgdGV4dCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlUZXh0KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0LmZvcm1EYXRhKSB7XG4gICAgICB0aGlzLmZvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmpzb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKEpTT04ucGFyc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8vIEhUVFAgbWV0aG9kcyB3aG9zZSBjYXBpdGFsaXphdGlvbiBzaG91bGQgYmUgbm9ybWFsaXplZFxuICB2YXIgbWV0aG9kcyA9IFsnREVMRVRFJywgJ0dFVCcsICdIRUFEJywgJ09QVElPTlMnLCAnUE9TVCcsICdQVVQnXVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU1ldGhvZChtZXRob2QpIHtcbiAgICB2YXIgdXBjYXNlZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpXG4gICAgcmV0dXJuIChtZXRob2RzLmluZGV4T2YodXBjYXNlZCkgPiAtMSkgPyB1cGNhc2VkIDogbWV0aG9kXG4gIH1cblxuICBmdW5jdGlvbiBSZXF1ZXN0KGlucHV0LCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keVxuXG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgICAgaWYgKGlucHV0LmJvZHlVc2VkKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpXG4gICAgICB9XG4gICAgICB0aGlzLnVybCA9IGlucHV0LnVybFxuICAgICAgdGhpcy5jcmVkZW50aWFscyA9IGlucHV0LmNyZWRlbnRpYWxzXG4gICAgICBpZiAoIW9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbnB1dC5oZWFkZXJzKVxuICAgICAgfVxuICAgICAgdGhpcy5tZXRob2QgPSBpbnB1dC5tZXRob2RcbiAgICAgIHRoaXMubW9kZSA9IGlucHV0Lm1vZGVcbiAgICAgIGlmICghYm9keSAmJiBpbnB1dC5fYm9keUluaXQgIT0gbnVsbCkge1xuICAgICAgICBib2R5ID0gaW5wdXQuX2JvZHlJbml0XG4gICAgICAgIGlucHV0LmJvZHlVc2VkID0gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVybCA9IFN0cmluZyhpbnB1dClcbiAgICB9XG5cbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscyB8fCB0aGlzLmNyZWRlbnRpYWxzIHx8ICdvbWl0J1xuICAgIGlmIChvcHRpb25zLmhlYWRlcnMgfHwgIXRoaXMuaGVhZGVycykge1xuICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIH1cbiAgICB0aGlzLm1ldGhvZCA9IG5vcm1hbGl6ZU1ldGhvZChvcHRpb25zLm1ldGhvZCB8fCB0aGlzLm1ldGhvZCB8fCAnR0VUJylcbiAgICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGxcbiAgICB0aGlzLnJlZmVycmVyID0gbnVsbFxuXG4gICAgaWYgKCh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykgJiYgYm9keSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9keSBub3QgYWxsb3dlZCBmb3IgR0VUIG9yIEhFQUQgcmVxdWVzdHMnKVxuICAgIH1cbiAgICB0aGlzLl9pbml0Qm9keShib2R5KVxuICB9XG5cbiAgUmVxdWVzdC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QodGhpcywgeyBib2R5OiB0aGlzLl9ib2R5SW5pdCB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZGVjb2RlKGJvZHkpIHtcbiAgICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgYm9keS50cmltKCkuc3BsaXQoJyYnKS5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBpZiAoYnl0ZXMpIHtcbiAgICAgICAgdmFyIHNwbGl0ID0gYnl0ZXMuc3BsaXQoJz0nKVxuICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIGZvcm0uYXBwZW5kKGRlY29kZVVSSUNvbXBvbmVudChuYW1lKSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUhlYWRlcnMocmF3SGVhZGVycykge1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKVxuICAgIHJhd0hlYWRlcnMuc3BsaXQoL1xccj9cXG4vKS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJzonKVxuICAgICAgdmFyIGtleSA9IHBhcnRzLnNoaWZ0KCkudHJpbSgpXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzonKS50cmltKClcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoa2V5LCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBoZWFkZXJzXG4gIH1cblxuICBCb2R5LmNhbGwoUmVxdWVzdC5wcm90b3R5cGUpXG5cbiAgZnVuY3Rpb24gUmVzcG9uc2UoYm9keUluaXQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgIH1cblxuICAgIHRoaXMudHlwZSA9ICdkZWZhdWx0J1xuICAgIHRoaXMuc3RhdHVzID0gJ3N0YXR1cycgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzIDogMjAwXG4gICAgdGhpcy5vayA9IHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMFxuICAgIHRoaXMuc3RhdHVzVGV4dCA9ICdzdGF0dXNUZXh0JyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXNUZXh0IDogJ09LJ1xuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgICB0aGlzLnVybCA9IG9wdGlvbnMudXJsIHx8ICcnXG4gICAgdGhpcy5faW5pdEJvZHkoYm9keUluaXQpXG4gIH1cblxuICBCb2R5LmNhbGwoUmVzcG9uc2UucHJvdG90eXBlKVxuXG4gIFJlc3BvbnNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UodGhpcy5fYm9keUluaXQsIHtcbiAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICBzdGF0dXNUZXh0OiB0aGlzLnN0YXR1c1RleHQsXG4gICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgICAgdXJsOiB0aGlzLnVybFxuICAgIH0pXG4gIH1cblxuICBSZXNwb25zZS5lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXNwb25zZSA9IG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiAwLCBzdGF0dXNUZXh0OiAnJ30pXG4gICAgcmVzcG9uc2UudHlwZSA9ICdlcnJvcidcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxuXG4gIHZhciByZWRpcmVjdFN0YXR1c2VzID0gWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XVxuXG4gIFJlc3BvbnNlLnJlZGlyZWN0ID0gZnVuY3Rpb24odXJsLCBzdGF0dXMpIHtcbiAgICBpZiAocmVkaXJlY3RTdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzdGF0dXMgY29kZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiBzdGF0dXMsIGhlYWRlcnM6IHtsb2NhdGlvbjogdXJsfX0pXG4gIH1cblxuICBzZWxmLkhlYWRlcnMgPSBIZWFkZXJzXG4gIHNlbGYuUmVxdWVzdCA9IFJlcXVlc3RcbiAgc2VsZi5SZXNwb25zZSA9IFJlc3BvbnNlXG5cbiAgc2VsZi5mZXRjaCA9IGZ1bmN0aW9uKGlucHV0LCBpbml0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChpbnB1dCwgaW5pdClcbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8ICcnKVxuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMudXJsID0gJ3Jlc3BvbnNlVVJMJyBpbiB4aHIgPyB4aHIucmVzcG9uc2VVUkwgOiBvcHRpb25zLmhlYWRlcnMuZ2V0KCdYLVJlcXVlc3QtVVJMJylcbiAgICAgICAgdmFyIGJvZHkgPSAncmVzcG9uc2UnIGluIHhociA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHRcbiAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoYm9keSwgb3B0aW9ucykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9wZW4ocmVxdWVzdC5tZXRob2QsIHJlcXVlc3QudXJsLCB0cnVlKVxuXG4gICAgICBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gJ2luY2x1ZGUnKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmICgncmVzcG9uc2VUeXBlJyBpbiB4aHIgJiYgc3VwcG9ydC5ibG9iKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYidcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB4aHIuc2VuZCh0eXBlb2YgcmVxdWVzdC5fYm9keUluaXQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHJlcXVlc3QuX2JvZHlJbml0KVxuICAgIH0pXG4gIH1cbiAgc2VsZi5mZXRjaC5wb2x5ZmlsbCA9IHRydWVcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3doYXR3Zy1mZXRjaC9mZXRjaC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcblxuY29uc3QgdXJsID0gYC9hcGkvY2FydGA7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICBjcmVhdGU6ICh7dGV4dCwgaWQsIG5hbWUsIGJsb2J9KSA9PiB7XG4gICAgY29uc3QgbWV0aG9kID0gYFBPU1RgO1xuICAgIC8vIGNvbnN0IG5ld0ZpbGVOYW1lID0gYCR7aWQuc3BsaXQoYCBgKS5qb2luKGBfYCl9YDtcbiAgICBjb25zdCBib2R5ID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgYm9keS5hcHBlbmQoYHRleHRgLCB0ZXh0KTtcbiAgICBib2R5LmFwcGVuZChgaWRgLCBpZCk7XG4gICAgYm9keS5hcHBlbmQoYG5hbWVgLCBuYW1lKTtcbiAgICAvLyBib2R5LmFwcGVuZChgc291bmRgLCBibG9iLCBuZXdGaWxlTmFtZSk7XG5cbiAgICByZXR1cm4gZmV0Y2godXJsLCB7bWV0aG9kLCBib2R5fSlcbiAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpO1xuICB9LFxuXG4gIHJlYWQ6ICgpID0+IHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dXJsfT9pc0FjdGl2ZT10cnVlYClcbiAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpO1xuICB9LFxuXG4gIHJlYWRPbmU6IGlkID0+IHtcbiAgICBjb25zdCBtZXRob2QgPSBgR0VUYDtcbiAgICByZXR1cm4gZmV0Y2goYCR7dXJsfS8ke2lkfWAsIHttZXRob2R9KS50aGVuKHIgPT4gci5qc29uKCkpO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2xpYi9jYXJ0QVBJLmpzIiwiY29uc3QgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuaW1wb3J0IGdldFVybFBhcmFtZXRlciBmcm9tICcuL29iamVjdHMvZ2V0VXJsUGFyYW1ldGVyJztcbmltcG9ydCBDYXJ0QVBJIGZyb20gJy4vbGliL2NhcnRBUEknO1xuaW1wb3J0IEhlYWQgZnJvbSAnLi9jbGFzc2VzL0hlYWQnO1xuXG5sZXQgdGFyZ2V0SWQsIGF1ZGlvQ3R4O1xuY29uc3QgcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGF5X3NhbnRhYCk7XG5jb25zdCAkYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYXVkaW9gKTtcblxubGV0IGF1ZGlvU291cmNlcyA9IFtdLFxuICAgIHBpdGNoU2hpZnRlclByb2Nlc3NvcjtcblxubGV0IGF1ZGlvU291cmNlSW5kZXggPSAwLFxuICAgIGF1ZGlvVmlzdWFsaXNhdGlvbkluZGV4ID0gMCxcbiAgICB2YWxpZEdyYW5TaXplcyA9IFsyNTYsIDUxMiwgMTAyNCwgMjA0OCwgNDA5NiwgODE5Ml0sXG4gICAgZ3JhaW5TaXplID0gdmFsaWRHcmFuU2l6ZXNbMV0sXG4gICAgcGl0Y2hSYXRpbyA9IDEuMCxcbiAgICBvdmVybGFwUmF0aW8gPSAwLjUwO1xuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICBhdWRpb0N0eCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgdGFyZ2V0SWQgPSBnZXRVcmxQYXJhbWV0ZXIoXCJpZFwiKTtcbiAgaWYgKCF0YXJnZXRJZCkgd2luZG93LmxvY2F0aW9uID0gXCJodHRwczovL2xvY2FsaG9zdDo4MDgwXCI7XG5cbiAgQ2FydEFQSS5yZWFkT25lKHRhcmdldElkKS50aGVuKGQgPT4ge1xuICAgIGlmIChkLnN0YXR1c0NvZGUpIHdpbmRvdy5sb2NhdGlvbiA9IFwiaHR0cHM6Ly9sb2NhbGhvc3Q6ODA4MFwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBuYW1lYCkuaW5uZXJIVE1MID0gZC5uYW1lO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzYW50YV9hdWRpb2ApLnNyYyA9IGAuL3VwbG9hZHMvJHtkLmlkfS5vZ2dgO1xuXG5cblxuICAgIHNldFRpbWVvdXQoKCkgPT7CoHtcbiAgICAgIGNvbnN0IGJ1ZmZlckxvYWRlciA9IG5ldyBCdWZmZXJMb2FkZXIoXG4gICAgICAgIGF1ZGlvQ3R4LCBbYC4vdXBsb2Fkcy8ke2QuaWR9Lm9nZ2BdLCBidWZmZXJMaXN0ID0+IHtcblxuICAgICAgICAgIGxldCBsb29wID0gZmFsc2U7XG4gICAgICAgICAgbGV0IHNvdXJjZTtcblxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByZXBlYXRgKS5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsICAoKSA9PiB7XG4gICAgICAgICAgICBsb29wID0gIWxvb3A7XG4gICAgICAgICAgICBzb3VyY2Uuc3RvcCgpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcGl0Y2hSYXRpbyA9IDI7XG5cbiAgICAgICAgICAkYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoKSA9PiB7XG4gICAgICAgICAgICBzb3VyY2UgPSAnJztcbiAgICAgICAgICAgIHNvdXJjZSA9IGF1ZGlvQ3R4LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgICAgICAgICAgc291cmNlLmJ1ZmZlciA9IGJ1ZmZlckxpc3RbMF07XG5cbiAgICAgICAgICAgIC8vIHNvdXJjZS5jb25uZWN0KGF1ZGlvQ3R4LmRlc3RpbmF0aW9uKVxuXG4gICAgICAgICAgICBzb3VyY2UuY29ubmVjdChwaXRjaFNoaWZ0ZXJQcm9jZXNzb3IpO1xuICAgICAgICAgICAgc291cmNlLmxvb3AgPSBsb29wO1xuICAgICAgICAgICAgc291cmNlLnN0YXJ0KCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgYnVmZmVyTG9hZGVyLmxvYWQoKTtcbiAgICAgIGluaXRQcm9jZXNzb3IoKTtcbiAgICAgIC8vIHRoaXMuaW5pdFNsaWRlcnMoKTtcblxuICAgIH0sIDEwMDApO1xuXG4gIH0pO1xufVxuXG5jb25zdCBsaW5lYXJJbnRlcnBvbGF0aW9uID0gKGEsIGIsIHQpID0+IHtcbiAgcmV0dXJuIGEgKyAoYiAtIGEpICogdDtcbn07XG5cbmNvbnN0IGluaXRQcm9jZXNzb3IgPSAoKSA9PiB7XG5cblxuXG4gIGlmIChwaXRjaFNoaWZ0ZXJQcm9jZXNzb3IpIHtcbiAgICBwaXRjaFNoaWZ0ZXJQcm9jZXNzb3IuZGlzY29ubmVjdCgpO1xuICB9XG5cbiAgaWYgKGF1ZGlvQ3R4LmNyZWF0ZVNjcmlwdFByb2Nlc3Nvcikge1xuICAgIHBpdGNoU2hpZnRlclByb2Nlc3NvciA9IGF1ZGlvQ3R4LmNyZWF0ZVNjcmlwdFByb2Nlc3NvcihncmFpblNpemUsIDEsIDEpO1xuICB9IGVsc2UgaWYgKGF1ZGlvQ3R4LmNyZWF0ZUphdmFTY3JpcHROb2RlKSB7XG4gICAgcGl0Y2hTaGlmdGVyUHJvY2Vzc29yID0gYXVkaW9DdHguY3JlYXRlSmF2YVNjcmlwdE5vZGUoZ3JhaW5TaXplLCAxLCAxKTtcbiAgfVxuXG4gIHBpdGNoU2hpZnRlclByb2Nlc3Nvci5idWZmZXIgPSBuZXcgRmxvYXQzMkFycmF5KGdyYWluU2l6ZSAqIDIpO1xuICBwaXRjaFNoaWZ0ZXJQcm9jZXNzb3IuZ3JhaW5XaW5kb3cgPSBoYW5uV2luZG93KGdyYWluU2l6ZSk7XG5cbiAgcGl0Y2hTaGlmdGVyUHJvY2Vzc29yLm9uYXVkaW9wcm9jZXNzID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgIHZhciBpbnB1dERhdGEgPSBldmVudC5pbnB1dEJ1ZmZlci5nZXRDaGFubmVsRGF0YSgwKTtcbiAgICB2YXIgb3V0cHV0RGF0YSA9IGV2ZW50Lm91dHB1dEJ1ZmZlci5nZXRDaGFubmVsRGF0YSgwKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBpbnB1dERhdGEubGVuZ3RoOyBpKyspIHtcblxuICAgICAgLy8gQXBwbHkgdGhlIHdpbmRvdyB0byB0aGUgaW5wdXQgYnVmZmVyXG4gICAgICBpbnB1dERhdGFbaV0gKj0gdGhpcy5ncmFpbldpbmRvd1tpXTtcblxuICAgICAgLy8gU2hpZnQgaGFsZiBvZiB0aGUgYnVmZmVyXG4gICAgICB0aGlzLmJ1ZmZlcltpXSA9IHRoaXMuYnVmZmVyW2kgKyBncmFpblNpemVdO1xuXG4gICAgICAvLyBFbXB0eSB0aGUgYnVmZmVyIHRhaWxcbiAgICAgIHRoaXMuYnVmZmVyW2kgKyBncmFpblNpemVdID0gMC4wO1xuICAgIH1cblxuICAgIC8vIENhbGN1bGF0ZSB0aGUgcGl0Y2ggc2hpZnRlZCBncmFpbiByZS1zYW1wbGluZyBhbmQgbG9vcGluZyB0aGUgaW5wdXRcbiAgICB2YXIgZ3JhaW5EYXRhID0gbmV3IEZsb2F0MzJBcnJheShncmFpblNpemUgKiAyKTtcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IDAuMDsgaSA8IGdyYWluU2l6ZTsgaSsrLCBqICs9IHBpdGNoUmF0aW8pIHtcblxuICAgICAgdmFyIGluZGV4ID0gTWF0aC5mbG9vcihqKSAlIGdyYWluU2l6ZTtcbiAgICAgIHZhciBhID0gaW5wdXREYXRhW2luZGV4XTtcbiAgICAgIHZhciBiID0gaW5wdXREYXRhWyhpbmRleCArIDEpICUgZ3JhaW5TaXplXTtcbiAgICAgIGdyYWluRGF0YVtpXSArPSBsaW5lYXJJbnRlcnBvbGF0aW9uKGEsIGIsIGogJSAxLjApICogdGhpcy5ncmFpbldpbmRvd1tpXTtcbiAgICB9XG5cbiAgICAvLyBDb3B5IHRoZSBncmFpbiBtdWx0aXBsZSB0aW1lcyBvdmVybGFwcGluZyBpdFxuICAgIGZvciAoaSA9IDA7IGkgPCBncmFpblNpemU7IGkgKz0gTWF0aC5yb3VuZChncmFpblNpemUgKiAoMSAtIG92ZXJsYXBSYXRpbykpKSB7XG4gICAgICBmb3IgKGogPSAwOyBqIDw9IGdyYWluU2l6ZTsgaisrKSB7XG4gICAgICAgIHRoaXMuYnVmZmVyW2kgKyBqXSArPSBncmFpbkRhdGFbal07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gT3V0cHV0IHRoZSBmaXJzdCBoYWxmIG9mIHRoZSBidWZmZXJcbiAgICBmb3IgKGkgPSAwOyBpIDwgZ3JhaW5TaXplOyBpKyspIHtcbiAgICAgIG91dHB1dERhdGFbaV0gPSB0aGlzLmJ1ZmZlcltpXTtcbiAgICB9XG4gIH07XG5cbiAgcGl0Y2hTaGlmdGVyUHJvY2Vzc29yLmNvbm5lY3QoYXVkaW9DdHguZGVzdGluYXRpb24pO1xuXG59O1xuXG5cbmNvbnN0IGhhbm5XaW5kb3cgPSBsZW5ndGggPT4ge1xuICBjb25zdCB3aW5kb3cgPSBuZXcgRmxvYXQzMkFycmF5KGxlbmd0aCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHdpbmRvd1tpXSA9IDAuNSAqICgxIC0gTWF0aC5jb3MoMiAqIE1hdGguUEkgKiBpIC8gKGxlbmd0aCAtIDEpKSk7XG4gIH1cbiAgcmV0dXJuIHdpbmRvdztcbn07XG5pbml0KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvc2FudGFTY3JpcHQuanMiLCJjb25zdCBnZXRVcmxQYXJhbWV0ZXIgPSBuYW1lID0+IHtcbiAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW10vLCAnXFxcXFsnKS5yZXBsYWNlKC9bXFxdXS8sICdcXFxcXScpO1xuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJ1tcXFxcPyZdJyArIG5hbWUgKyAnPShbXiYjXSopJyk7XG4gIGNvbnN0IHJlc3VsdHMgPSByZWdleC5leGVjKGxvY2F0aW9uLnNlYXJjaCk7XG4gIHJldHVybiByZXN1bHRzID09PSBudWxsID8gZmFsc2UgOiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1sxXS5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRVcmxQYXJhbWV0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvb2JqZWN0cy9nZXRVcmxQYXJhbWV0ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9