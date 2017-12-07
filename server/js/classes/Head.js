import Colors from '../objects/colors';
import Mat from '../objects/Materials';

let isBlinking = false;

export default class Head {
  constructor() {
    this.mesh = new THREE.Object3D();

    let headGeom = new THREE.BoxBufferGeometry(16, 16, 16);
    this.head = new THREE.Mesh(headGeom, Mat.skinMat);
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

    let beard1 = new THREE.Mesh(beard1Geom, Mat.whiteMat);
    beard1.applyMatrix(new THREE.Matrix4().makeTranslation(9, 0, 0));
    beard1.updateMatrix();
    beardGeomMerged.merge(beard1.geometry, beard1.matrix);

    let beard2 = new THREE.Mesh(beard1Geom, Mat.whiteMat);
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

    let beard5 = new THREE.Mesh(beard2Geom, Mat.whiteMat);
    beard5.applyMatrix(new THREE.Matrix4().makeTranslation(5, -5, 5.5));
    beard5.updateMatrix();
    beardGeomMerged.merge(beard5.geometry, beard5.matrix);

    let beard3Geom = new THREE.BoxGeometry(3, 14, 10);
    beard3Geom.vertices[2].z -= 2;
    beard3Geom.vertices[7].z -= 2;

    let beard6 = new THREE.Mesh(beard3Geom, Mat.whiteMat);
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
    let beard9 = new THREE.Mesh(beard4Geom, Mat.whiteMat);
    beard9.applyMatrix(new THREE.Matrix4().makeTranslation(0, -6.25, 5.75));
    beard9.updateMatrix();
    beardGeomMerged.merge(beard9.geometry, beard9.matrix);

    let beard5Geom = new THREE.BoxGeometry(4, 8, 8);
    let beard10 = new THREE.Mesh(beard5Geom, Mat.whiteMat);
    beard10.applyMatrix(new THREE.Matrix4().makeTranslation(-6, -1, -2));
    beard10.updateMatrix();
    beardGeomMerged.merge(beard10.geometry, beard10.matrix);

    let beard11 = new THREE.Mesh(beard5Geom, Mat.whiteMat);
    beard11.applyMatrix(new THREE.Matrix4().makeTranslation(6, -1, -2));
    beard11.updateMatrix();
    beardGeomMerged.merge(beard11.geometry, beard11.matrix);

    let beardMerged = new THREE.Mesh(beardGeomMerged, Mat.whiteMat);
    beardMerged.castShadow = true;
    beardMerged.receiveShadow = true;

    let mouthGeom = new THREE.BoxGeometry(10, 4, 1);
    let mouth = new THREE.Mesh(mouthGeom, Mat.blackMat);
    mouth.position.set(0, 2, 8);
    mouth.castShadow = false;
    mouth.receiveShadow = true;

    let teethGeom = new THREE.BoxGeometry(10, 1, 1);
    let teeth = new THREE.Mesh(teethGeom, Mat.teethMat);
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
    this.moustache = new THREE.Mesh(moustacheGeom, Mat.whiteMat);
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
    let frameLeft = frameintersectionBSP.toMesh(Mat.blackMat);

    frameLeft.applyMatrix( new THREE.Matrix4().makeTranslation(4, 3, 0));
    frameLeft.updateMatrix();
    frameGeomMerged.merge(frameLeft.geometry, frameLeft.matrix);

    let frameRight = frameLeft.clone();
    frameRight.applyMatrix(new THREE.Matrix4().makeRotationZ(Math.PI/30));
    frameRight.applyMatrix( new THREE.Matrix4().makeTranslation(-7.5, -0.25, 0));
    frameRight.updateMatrix();
    frameGeomMerged.merge(frameRight.geometry, frameRight.matrix);

    let frameMidGeom = new THREE.BoxGeometry(3,1,1);
    let frameMid = new THREE.Mesh(frameMidGeom, Mat.blackMat);
    frameMid.applyMatrix( new THREE.Matrix4().makeTranslation(0, 3, 0));
    frameMid.updateMatrix();
    frameGeomMerged.merge(frameMid.geometry, frameMid.matrix);

    let frameEndGeom = new THREE.BoxGeometry(1.5,1,1);
    let frameEndRight = new THREE.Mesh(frameEndGeom, Mat.blackMat);
    frameEndRight.applyMatrix( new THREE.Matrix4().makeTranslation(7.5, 3, 0));
    frameEndRight.updateMatrix();
    frameGeomMerged.merge(frameEndRight.geometry, frameEndRight.matrix);

    let frameEndLeft = frameEndRight.clone();
    frameEndLeft.position.x = -frameEndRight.position.x;
    frameEndLeft.updateMatrix();
    frameGeomMerged.merge(frameEndLeft.geometry, frameEndLeft.matrix);

    let frameSpokeGeom = new THREE.BoxGeometry(1,1,12);
    let frameSpokeRight = new THREE.Mesh(frameSpokeGeom, Mat.blackMat);
    frameSpokeRight.applyMatrix( new THREE.Matrix4().makeTranslation(8, 3, -5.5));
    frameSpokeRight.updateMatrix();
    frameGeomMerged.merge(frameSpokeRight.geometry, frameSpokeRight.matrix);

    let frameSpokeLeft = frameSpokeRight.clone();
    frameSpokeLeft.position.x = -frameSpokeRight.position.x;
    frameSpokeLeft.updateMatrix();
    frameGeomMerged.merge(frameSpokeLeft.geometry, frameSpokeLeft.matrix);

    let frameMerged = new THREE.Mesh(frameGeomMerged, Mat.blackMat);
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

    let hair1 = new THREE.Mesh(hairFlatGeom, Mat.whiteMat);
    hair1.applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI / 40));
    hair1.applyMatrix(new THREE.Matrix4().makeTranslation(-4, -0.5, 0));
    hair1.updateMatrix();
    hairGeomMerged.merge(hair1.geometry, hair1.matrix);

    let hair2 = new THREE.Mesh(hairFlatGeom, Mat.whiteMat);
    hair2.applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI / 10));
    hair2.applyMatrix(new THREE.Matrix4().makeTranslation(-2, 1, 0));
    hair2.updateMatrix();
    hairGeomMerged.merge(hair2.geometry, hair2.matrix);

    let hair3 = new THREE.Mesh(hairFlatGeom, Mat.whiteMat);
    hair3.applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI / 5));
    hair3.applyMatrix(new THREE.Matrix4().makeTranslation(2, 1, 0));
    hair3.updateMatrix();
    hairGeomMerged.merge(hair3.geometry, hair3.matrix);

    let hair4 = new THREE.Mesh(hairFlatGeom, Mat.whiteMat);
    hair4.applyMatrix(new THREE.Matrix4().makeRotationZ(-Math.PI / 4));
    hair4.applyMatrix(new THREE.Matrix4().makeTranslation(6, 0, 0));
    hair4.updateMatrix();
    hairGeomMerged.merge(hair4.geometry, hair4.matrix);

    let hairFlatBackGeom = new THREE.BoxGeometry(18, 7, 6);
    hairFlatBackGeom.vertices[0].x -= 1;
    hairFlatBackGeom.vertices[1].x -= 1;
    hairFlatBackGeom.vertices[4].x += 1;
    hairFlatBackGeom.vertices[5].x += 1;

    let hair5 = new THREE.Mesh(hairFlatBackGeom, Mat.whiteMat);
    hair5.applyMatrix(new THREE.Matrix4().makeTranslation(0, -4.5, -6));
    hair5.updateMatrix();
    hairGeomMerged.merge(hair5.geometry, hair5.matrix);

    let hairTuftGeom = new THREE.CylinderGeometry(1, 1.5, 10, 4);

    let hairTuft1 = new THREE.Mesh(hairTuftGeom, Mat.whiteMat);
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

    let hairTuft2 = new THREE.Mesh(hairTuftGeom, Mat.whiteMat);
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

    let hairTuft3 = new THREE.Mesh(hairTuftGeom, Mat.whiteMat);
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

    let hairMerged = new THREE.Mesh(hairGeomMerged, Mat.whiteMat);
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

    let eyeWhiteRight = new THREE.Mesh(eyeWhiteGeom, Mat.whiteMat);
    eyeWhiteRight.position.set(-3.75, 0, 0);
    eyeWhiteRight.castShadow = false;
    eyeWhiteRight.receiveShadow = false;

    let eyeBlueGeom = new THREE.PlaneGeometry(1.5, 1.5);

    this.eyeBlueRight = new THREE.Mesh(eyeBlueGeom, Mat.blueMat);
    this.eyeBlueRight.position.set(0, 0, .01);
    this.eyeBlueRight.castShadow = false;
    this.eyeBlueRight.receiveShadow = false;

    eyeWhiteRight.add(this.eyeBlueRight);

    let eyePupilGeom = new THREE.PlaneGeometry(1, 1);

    this.eyePupilRight = new THREE.Mesh(eyePupilGeom, Mat.blackMat);
    this.eyePupilRight.position.set(0, 0, .02);
    this.eyePupilRight.castShadow = false;
    this.eyePupilRight.receiveShadow = false;

    this.eyeBlueRight.add(this.eyePupilRight);

    let eyeWhiteLeft = new THREE.Mesh(eyeWhiteGeom, Mat.whiteMat);
    eyeWhiteLeft.position.set(3.75, 0, 0);
    eyeWhiteLeft.castShadow = false;
    eyeWhiteLeft.receiveShadow = false;

    this.eyeBlueLeft = new THREE.Mesh(eyeBlueGeom, Mat.blueMat);
    this.eyeBlueLeft.position.set(0, 0, .01);
    this.eyeBlueLeft.castShadow = false;
    this.eyeBlueLeft.receiveShadow = false;

    eyeWhiteLeft.add(this.eyeBlueLeft);

    this.eyePupilLeft = new THREE.Mesh(eyePupilGeom, Mat.blackMat);
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

    this.eyeBrowRight = new THREE.Mesh(eyeBrowGeom, Mat.whiteMat);
    this.eyeBrowRight.applyMatrix(new THREE.Matrix4().makeRotationZ(Math.PI / 45));
    this.eyeBrowRight.position.set(-3.75, 0, 0);
    this.eyeBrowRight.castShadow = false;
    this.eyeBrowRight.receiveShadow = false;

    this.eyeBrowLeft = new THREE.Mesh(eyeBrowGeom, Mat.whiteMat);
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

    let freckle1 = new THREE.Mesh(frecklesGeom, Mat.brownMat);
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

    let freckledMerged = new THREE.Mesh(frecklesGeomMerged, Mat.brownMat);
    freckledMerged.castShadow = false;
    freckledMerged.receiveShadow = false;

    this.freckles.add(freckledMerged);
  }

  Features() {
    //Features - Nose and Ears
    ////////////////////////////////////

    let earGeom = new THREE.BoxBufferGeometry(1.5, 3, 1.5);
    let earRight = new THREE.Mesh(earGeom, Mat.skin2Mat);
    earRight.position.set(-8.5, 1, 0);
    earRight.castShadow = true;
    earRight.receiveShadow = false;

    let earLeft = new THREE.Mesh(earGeom, Mat.skin2Mat);
    earLeft.position.set(8.5, 1, 0);
    earLeft.castShadow = true;
    earLeft.receiveShadow = false;

    let noseGeom = new THREE.CylinderGeometry(1, 2, 4, 4);
    let nose = new THREE.Mesh(noseGeom, Mat.skin2Mat);
    nose.scale.set(.75, 1, 1.3);
    nose.position.set(0, 1, 8);
    nose.castShadow = true;
    nose.receiveShadow = false;

    this.head.add(earRight, earLeft, nose);
  }
}
