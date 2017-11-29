{
  const Colors = {
    red: 0xf25346,
    white: 0xf4dea8,
    brown: 0x59332e,
    pink: 0xF5986E,

    brownDark: 0x23190f,
    blue: 0x68ffd1
  };

  let scene,
    camera,
    controls,
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane,
    shadowLight,
    backLight,
    light,
    renderer,
    container;

  let HEIGHT,
    WIDTH,
    windowHalfX,
    windowHalfY,
    mousePos = { x: 0, y: 0};
    dist = 0;

  let floor, lion, fan,
    isBlowing = false;

  let sky;

  const init = () => {
    createScene();
    createLights();
    createLion();
    createFan();
    createFloor();
    createSky();
    loop();

  };

  const createScene = () => {
    // Get the width and the height of the screen,
    // use them to set up the aspect ratio of the camera
    // and the size of the renderer.
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;

    // Create the scene
    scene = new THREE.Scene();

    // Add a fog effect to the scene; same color as the
    // background color used in the style sheet
    //scene.fog = new THREE.Fog(0xd3d4e5, 100, 950);

    // Create the camera
    aspectRatio = WIDTH / HEIGHT;
    fieldOfView = 60;
    nearPlane = 1;
    farPlane = 2000;
    camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
    camera.position.z = 800;
    camera.position.y = 200;
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // Set the position of the camera
    //camera.position.set(0, 0, 800);

    // Create the renderer
    renderer = new THREE.WebGLRenderer({
      // Allow transparency to show the gradient background
      // we defined in the CSS
      alpha: true,

      // Activate the anti-aliasing; this is less performant,
      // but, as our project is low-poly based, it should be fine :)
      antialias: true
    });

  renderer.setPixelRatio(window.devicePixelRatio);


    // Define the size of the renderer; in this case,
    // it will fill the entire screen
    renderer.setSize(WIDTH, HEIGHT);

    // Enable shadow rendering
    renderer.shadowMap.enabled = true;

    // Add the DOM element of the renderer to the
    // container we created in the HTML
    container = document.getElementById('world');
    container.appendChild(renderer.domElement);

    // Listen to the screen: if the user resizes it
    // we have to update the camera and the renderer size
    windowHalfX = WIDTH / 2;
    windowHalfY = HEIGHT / 2;
    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', handleMouseMove, false);
    document.addEventListener('mousedown', handleMouseDown, false);
    document.addEventListener('mouseup', handleMouseUp, false);
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchend', handleTouchEnd, false);
    document.addEventListener('touchmove', handleTouchMove, false);
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

  const handleMouseMove = e => {
    // const tx = -1 + (event.clientX / WIDTH) *2;
    // let ty = 1 - (event.clientY / HEIGHT)*2;
    // mousePos = {
    //   x: tx,
    //   y: ty
    // };
    mousePos = {
      x: event.clientX,
      y: event.clientY
    };
        console.log(mousePos);
  }

  const handleMouseDown = e => {
    isBlowing = true;
  }

  const handleMouseUp = e => {
    isBlowing = false;
  }

  const handleTouchStart = e => {
    if (event.touches.length > 1) {
      event.preventDefault();
      mousePos = {
        x: event.touches[0].pageX,
        y: event.touches[0].pageY
      };
      isBlowing = true;
    }
  }

  const handleTouchEnd = e => {
    mousePos = {
      x: windowHalfX,
      y: windowHalfY
    };
    isBlowing = false;
  }

  const handleTouchMove = e => {
    if (event.touches.length == 1) {
      event.preventDefault();
      mousePos = {
        x: event.touches[0].pageX,
        y: event.touches[0].pageY
      };
    }
  }

  const normalize = (v, vmin, vmax, tmin, tmax) => {

    const nv = Math.max(Math.min(v, vmax), vmin);
    const dv = vmax - vmin;
    const pc = (nv - vmin) / dv;
    const dt = tmax - tmin;
    const tv = tmin + (pc * dt);
    return tv;

  }

  const handleWindowResize = e => {
    // update height and width of the renderer and the camera
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
  }

  const createLights = () => {
    // A hemisphere light is a gradient colored light;
    // the first parameter is the sky color, the second parameter is the ground color,
    // the third parameter is the intensity of the light
    light = new THREE.HemisphereLight(0xffffff, 0xffffff, .5)

    // A directional light shines from a specific direction.
    // It acts like the sun, that means that all the rays produced are parallel.
    shadowLight = new THREE.DirectionalLight(0xffffff, .9);

    // Set the direction of the light
    shadowLight.position.set(200, 200, 200);
    shadowLight.castShadow = true;
    shadowLight.shadowDarkness = .2;

    // define the visible area of the projected shadow
    backLight = new THREE.DirectionalLight(0xffffff, .4);
    backLight.position.set(-100, 200, 50);
    backLight.shadowDarkness = .1;
    backLight.castShadow = true;

    // define the resolution of the shadow; the higher the better,
    // but also the more expensive and less performant
      shadowLight.shadow.mapSize.width = 2048;
      shadowLight.shadow.mapSize.height = 2048;

    // to activate the lights, just add them to the scene
    scene.add(light);
    scene.add(shadowLight);
    scene.add(backLight);
    // ambientLight = new THREE.AmbientLight(0xdc8874, .3);
    // scene.add(ambientLight);
  }
  //
  // class Sea {
  //   constructor() {
  //     const geom = new THREE.CylinderGeometry(600, 600, 800, 40, 10);
  //     geom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2));
  //
  //     // important: by merging vertices we ensure the continuity of the waves
  //     geom.mergeVertices();
  //
  //     // get the vertices
  //     let l = geom.vertices.length;
  //
  //     // create an array to store new data associated to each vertex
  //     this.waves = [];
  //
  //     for (let i = 0; i < l; i++) {
  //       // get each vertex
  //       let v = geom.vertices[i];
  //
  //       // store some data associated to it
  //       this.waves.push({
  //         y: v.y, x: v.x, z: v.z,
  //         // a random angle
  //         ang: Math.random() * Math.PI * 2,
  //         // a random distance
  //         amp: 5 + Math.random() * 15,
  //         // a random speed between 0.016 and 0.048 radians / frame
  //         speed: 0.016 + Math.random() * 0.032
  //       });
  //     };
  //     const mat = new THREE.MeshPhongMaterial({color: Colors.blue, transparent: true, opacity: .8, MeshPhongMaterial: true});
  //
  //     this.mesh = new THREE.Mesh(geom, mat);
  //     this.mesh.receiveShadow = true;
  //   }
  // }

  const createFloor = () => {
    floor = new THREE.Mesh(new THREE.PlaneBufferGeometry(1000, 500), new THREE.MeshBasicMaterial({
      color: 0xebe5e7

    }));
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -100;
    floor.receiveShadow = true;
    scene.add(floor);
  }


  class Cloud {
    constructor() {
      // Create an empty container that will hold the different parts of the cloud
      this.mesh = new THREE.Object3D();

      // create a cube geometry;
      // this shape will be duplicated to create the cloud
      const geom = new THREE.BoxGeometry(20, 20, 20);

      // create a material; a simple white material will do the trick
      const mat = new THREE.MeshPhongMaterial({color: Colors.white});

      // duplicate the geometry a random number of times
      const nBlocs = 3 + Math.floor(Math.random() * 3);
      for (let i = 0; i < nBlocs; i++) {

        // create the mesh by cloning the geometry
        let m = new THREE.Mesh(geom, mat);

        // set the position and the rotation of each cube randomly
        m.position.x = i * 15;
        m.position.y = Math.random() * 10;
        m.position.z = Math.random() * 10;
        m.rotation.z = Math.random() * Math.PI * 2;
        m.rotation.y = Math.random() * Math.PI * 2;

        // set the size of the cube randomly
        const s = .1 + Math.random() * .9;
        m.scale.set(s, s, s);

        // allow each cube to cast and to receive shadows
        m.castShadow = true;
        m.receiveShadow = true;

        // add the cube to the container we first created
        this.mesh.add(m);
      }
    }
  }

  class Sky {
    constructor() {
      // Create an empty container
      this.mesh = new THREE.Object3D();

      // choose a number of clouds to be scattered in the sky
      this.nClouds = 20;

      // To distribute the clouds consistently,
      // we need to place them according to a uniform angle
      let stepAngle = Math.PI * 2 / this.nClouds;

      // create the clouds
      for (let i = 0; i < this.nClouds; i++) {
        let c = new Cloud();

        // set the rotation and the position of each cloud;
        // for that we use a bit of trigonometry
        let a = stepAngle * i; // this is the final angle of the cloud
        let h = 950 + Math.random() * 400; // this is the distance between the center of the axis and the cloud itself

        // Trigonometry!!! I hope you remember what you've learned in Math :)
        // in case you don't:
        // we are simply converting polar coordinates (angle, distance) into Cartesian coordinates (x, y)
        c.mesh.position.y = Math.sin(a) * h;
        c.mesh.position.x = Math.cos(a) * h;

        // rotate the cloud according to its position
        c.mesh.rotation.z = a + Math.PI / 2;

        // for a better result, we position the clouds
        // at random depths inside of the scene
        c.mesh.position.z = -400 - Math.random() * 400;

        // we also set a random scale for each cloud
        let s = 1 + Math.random() * 2;
        c.mesh.scale.set(s, s, s);

        // do not forget to add the mesh of each cloud in the scene
        this.mesh.add(c.mesh);
      }
    }
  }

  const createSky = () => {
    sky = new Sky();
    sky.mesh.position.y = -900;
    scene.add(sky.mesh);
  }

  // class Pilot {
  //   constructor() {
  //     this.mesh = new THREE.Object3D();
  //     this.mesh.name = "pilot";
  //
  //     // angleHairs is a property used to animate the hair later
  //     this.angleHairs = 0;
  //
  //     // Body of the pilot
  //     const bodyGeom = new THREE.BoxGeometry(15, 15, 15);
  //     const bodyMat = new THREE.MeshPhongMaterial({color: Colors.brown, shading: THREE.FlatShading});
  //     const body = new THREE.Mesh(bodyGeom, bodyMat);
  //     body.position.set(2, -12, 0);
  //     this.mesh.add(body);
  //
  //     // Face of the pilot
  //     const faceGeom = new THREE.BoxGeometry(10, 10, 10);
  //     const faceMat = new THREE.MeshLambertMaterial({color: Colors.pink});
  //     const face = new THREE.Mesh(faceGeom, faceMat);
  //     this.mesh.add(face);
  //
  //     // Hair element
  //     const hairGeom = new THREE.BoxGeometry(4, 4, 4);
  //     const hairMat = new THREE.MeshLambertMaterial({color: Colors.brown});
  //     const hair = new THREE.Mesh(hairGeom, hairMat);
  //     // Align the shape of the hair to its bottom boundary, that will make it easier to scale.
  //     hair.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 2, 0));
  //
  //     // create a container for the hair
  //     const hairs = new THREE.Object3D();
  //
  //     // create a container for the hairs at the top
  //     // of the head (the ones that will be animated)
  //     this.hairsTop = new THREE.Object3D();
  //
  //     // create the hairs at the top of the head
  //     // and position them on a 3 x 4 grid
  //     for (let i = 0; i < 12; i++) {
  //       let h = hair.clone();
  //       let col = i % 3;
  //       let row = Math.floor(i / 3);
  //       let startPosZ = -4;
  //       let startPosX = -4;
  //       h.position.set(startPosX + row * 4, 0, startPosZ + col * 4);
  //       this.hairsTop.add(h);
  //     }
  //     hairs.add(this.hairsTop);
  //
  //     // create the hairs at the side of the face
  //     const hairSideGeom = new THREE.BoxGeometry(12, 4, 2);
  //     hairSideGeom.applyMatrix(new THREE.Matrix4().makeTranslation(-6, 0, 0));
  //     const hairSideR = new THREE.Mesh(hairSideGeom, hairMat);
  //     const hairSideL = hairSideR.clone();
  //     hairSideR.position.set(8, -2, 6);
  //     hairSideL.position.set(8, -2, -6);
  //     hairs.add(hairSideR);
  //     hairs.add(hairSideL);
  //
  //     // create the hairs at the back of the head
  //     const hairBackGeom = new THREE.BoxGeometry(2, 8, 10);
  //     const hairBack = new THREE.Mesh(hairBackGeom, hairMat);
  //     hairBack.position.set(-1, -4, 0)
  //     hairs.add(hairBack);
  //     hairs.position.set(-5, 5, 0);
  //
  //     this.mesh.add(hairs);
  //
  //     const glassGeom = new THREE.BoxGeometry(5, 5, 5);
  //     const glassMat = new THREE.MeshLambertMaterial({color: Colors.brown});
  //     const glassR = new THREE.Mesh(glassGeom, glassMat);
  //     glassR.position.set(6, 0, 3);
  //     const glassL = glassR.clone();
  //     glassL.position.z = -glassR.position.z
  //
  //     const glassAGeom = new THREE.BoxGeometry(11, 1, 11);
  //     const glassA = new THREE.Mesh(glassAGeom, glassMat);
  //     this.mesh.add(glassR);
  //     this.mesh.add(glassL);
  //     this.mesh.add(glassA);
  //
  //     const earGeom = new THREE.BoxGeometry(2, 3, 2);
  //     const earL = new THREE.Mesh(earGeom, faceMat);
  //     earL.position.set(0, 0, -6);
  //     const earR = earL.clone();
  //     earR.position.set(0, 0, 6);
  //     this.mesh.add(earL);
  //     this.mesh.add(earR);
  //   }
  //   updateHairs() {
  //     // get the hair
  //     const hairs = this.hairsTop.children;
  //
  //     // update them according to the angle angleHairs
  //     let l = hairs.length;
  //     for (let i = 0; i < l; i++) {
  //       let h = hairs[i];
  //       // each hair element will scale on cyclical basis between 75% and 100% of its original size
  //       h.scale.y = .75 + Math.cos(this.angleHairs + i / 3) * .25;
  //     }
  //     // increment the angle for the next frame
  //     this.angleHairs += 0.16;
  //   }
  // }

  class Fan {
    constructor() {
    console.log("infan");
    this.isBlowing = false;
    this.speed = 0;
    this.acc = 0;
    this.redMat = new THREE.MeshPhongMaterial({
      color: 0xad3525,
      FlatShading: THREE.FlatShading
    });
    this.greyMat = new THREE.MeshPhongMaterial({
      color: 0x653f4c,
      shading: THREE.FlatShading
    });

    this.yellowMat = new THREE.MeshPhongMaterial({
      color: 0xfdd276,
      shading: THREE.FlatShading
    });

    let coreGeom = new THREE.BoxGeometry(10, 10, 20);
    let sphereGeom = new THREE.BoxGeometry(10, 10, 3);
    let propGeom = new THREE.BoxGeometry(10, 30, 2);
    propGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 25, 0));

    this.core = new THREE.Mesh(coreGeom, this.greyMat);

    // propellers
    let prop1 = new THREE.Mesh(propGeom, this.redMat);
    prop1.position.z = 15;
    let prop2 = prop1.clone();
    prop2.rotation.z = Math.PI / 2;
    let prop3 = prop1.clone();
    prop3.rotation.z = Math.PI;
    let prop4 = prop1.clone();
    prop4.rotation.z = -Math.PI / 2;

    this.sphere = new THREE.Mesh(sphereGeom, this.yellowMat);
    this.sphere.position.z = 15;

    this.propeller = new THREE.Group();
    this.propeller.add(prop1);
    this.propeller.add(prop2);
    this.propeller.add(prop3);
    this.propeller.add(prop4);

    this.threegroup = new THREE.Group();
    this.threegroup.add(this.core);
    this.threegroup.add(this.propeller);
    this.threegroup.add(this.sphere);
  }
}

  const createFan = () => {
    fan = new Fan();
    fan.threegroup.position.z = 350;
    scene.add(fan.threegroup);
  }

  const updateFan = (xTarget, yTarget) =>{

    fan.threegroup.lookAt(new THREE.Vector3(0, 80, 60));
    let targetY = normalize(mousePos.y, 200, 200, -250, 250);
    let targetX = normalize(mousePos.x, -200, 200, 250, -250);

    fan.threegroup.position.x += (fan.tPosX - fan.threegroup.position.x) / 10;
    fan.threegroup.position.y += (fan.tPosY - fan.threegroup.position.y) / 10;

    this.targetSpeed = (this.isBlowing) ? .3 : .01;
    if (this.isBlowing && this.speed < .5) {
      this.acc += .001;
      this.speed += this.acc;
    } else if (!this.isBlowing) {
      this.acc = 0;
      this.speed *= .98;
    }
    //this.threegroup.rotation.z += fan.speed;
  }



  class Lion {
    constructor() {
      this.windTime = 0;
      this.bodyInitPositions = [];
      this.maneParts = [];
      this.threegroup = new THREE.Group();
      this.yellowMat = new THREE.MeshPhongMaterial({
        color: 0xfdd276,
        shading: THREE.FlatShading
      });
      this.redMat = new THREE.MeshPhongMaterial({
        color: 0xad3525,
        shading: THREE.FlatShading
      });

      this.pinkMat = new THREE.MeshPhongMaterial({
        color: 0xe55d2b,
        shading: THREE.FlatShading
      });

      this.whiteMat = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        shading: THREE.FlatShading
      });

      this.purpleMat = new THREE.MeshPhongMaterial({
        color: 0x451954,
        shading: THREE.FlatShading
      });

      this.greyMat = new THREE.MeshPhongMaterial({
        color: 0x653f4c,
        shading: THREE.FlatShading
      });

      this.blackMat = new THREE.MeshPhongMaterial({
        color: 0x302925,
        shading: THREE.FlatShading
      });


      let bodyGeom = new THREE.CylinderGeometry(30, 80, 140, 4);
      let maneGeom = new THREE.BoxGeometry(40, 40, 15);
      let faceGeom = new THREE.BoxGeometry(80, 80, 80);
      let spotGeom = new THREE.BoxGeometry(4, 4, 4);
      let mustacheGeom = new THREE.BoxGeometry(30, 2, 1);
      mustacheGeom.applyMatrix(new THREE.Matrix4().makeTranslation(15, 0, 0));

      let earGeom = new THREE.BoxGeometry(20, 20, 20);
      let noseGeom = new THREE.BoxGeometry(40, 40, 20);
      let eyeGeom = new THREE.BoxGeometry(5, 30, 30);
      let irisGeom = new THREE.BoxGeometry(4, 10, 10);
      let mouthGeom = new THREE.BoxGeometry(20, 20, 10);
      let smileGeom = new THREE.TorusGeometry(12, 4, 2, 10, Math.PI);
      let lipsGeom = new THREE.BoxGeometry(40, 15, 20);
      let kneeGeom = new THREE.BoxGeometry(25, 80, 80);
      kneeGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 50, 0));
      let footGeom = new THREE.BoxGeometry(40, 20, 20);

      // body
      this.body = new THREE.Mesh(bodyGeom, this.yellowMat);
      this.body.position.z = -60;
      this.body.position.y = -30;
      this.bodyVertices = [0, 1, 2, 3, 4, 10];

      // for (let i = 0; i < this.bodyVertices.length; i++) {
      //   let tv = this.body.geometry.vertices[this.bodyVertices[i]];
      //   tv.z = 70;
      //   //tv.x = 0;
      //   this.bodyInitPositions.push({
      //     x: tv.x,
      //     y: tv.y,
      //     z: tv.z
      //   });
      // }

      // knee
      this.leftKnee = new THREE.Mesh(kneeGeom, this.yellowMat);
      this.leftKnee.position.x = 65;
      this.leftKnee.position.z = -20;
      this.leftKnee.position.y = -110;
      this.leftKnee.rotation.z = -.3;

      this.rightKnee = new THREE.Mesh(kneeGeom, this.yellowMat);
      this.rightKnee.position.x = -65;
      this.rightKnee.position.z = -20;
      this.rightKnee.position.y = -110;
      this.rightKnee.rotation.z = .3;

      // feet
      this.backLeftFoot = new THREE.Mesh(footGeom, this.yellowMat);
      this.backLeftFoot.position.z = 30;
      this.backLeftFoot.position.x = 75;
      this.backLeftFoot.position.y = -90;

      this.backRightFoot = new THREE.Mesh(footGeom, this.yellowMat);
      this.backRightFoot.position.z = 30;
      this.backRightFoot.position.x = -75;
      this.backRightFoot.position.y = -90;

      this.frontRightFoot = new THREE.Mesh(footGeom, this.yellowMat);
      this.frontRightFoot.position.z = 40;
      this.frontRightFoot.position.x = -22;
      this.frontRightFoot.position.y = -90;

      this.frontLeftFoot = new THREE.Mesh(footGeom, this.yellowMat);
      this.frontLeftFoot.position.z = 40;
      this.frontLeftFoot.position.x = 22;
      this.frontLeftFoot.position.y = -90;

      // mane

      this.mane = new THREE.Group();

      for (let j = 0; j < 4; j++) {
        for (let k = 0; k < 4; k++) {
          let manePart = new THREE.Mesh(maneGeom, this.redMat);
          manePart.position.x = (j * 40) - 60;
          manePart.position.y = (k * 40) - 60;

          let amp;
          let zOffset;
          let periodOffset = Math.random() * Math.PI * 2;
          let angleOffsetY, angleOffsetX;
          let angleAmpY, angleAmpX;
          let xInit, yInit;


          if ((j == 0 && k == 0) || (j == 0 && k == 3) || (j == 3 && k == 0) || (j == 3 && k == 3)) {
            amp = -10 - Math.floor(Math.random() * 5);
            zOffset = -5;
          } else if (j == 0 || k == 0 || j == 3 || k == 3) {
            amp = -5 - Math.floor(Math.random() * 5);
            zOffset = 0;
          } else {
            amp = 0;
            zOffset = 0;
          }

          this.maneParts.push({
            mesh: manePart,
            amp: amp,
            zOffset: zOffset,
            periodOffset: periodOffset,
            xInit: manePart.position.x,
            yInit: manePart.position.y
          });
          this.mane.add(manePart);
        }
      }

      this.mane.position.y = -10;
      this.mane.position.z = 80;
      //this.mane.rotation.z = Math.PI/4;

      // face
      this.face = new THREE.Mesh(faceGeom, this.yellowMat);
      this.face.position.z = 135;

      // Mustaches

      this.mustaches = [];

      this.mustache1 = new THREE.Mesh(mustacheGeom, this.greyMat);
      this.mustache1.position.x = 30;
      this.mustache1.position.y = -5;
      this.mustache1.position.z = 175;
      this.mustache2 = this.mustache1.clone();
      this.mustache2.position.x = 35;
      this.mustache2.position.y = -12;
      this.mustache3 = this.mustache1.clone();
      this.mustache3.position.y = -19;
      this.mustache3.position.x = 30;
      this.mustache4 = this.mustache1.clone();
      this.mustache4.rotation.z = Math.PI;
      this.mustache4.position.x = -30;
      this.mustache5 = new THREE.Mesh(mustacheGeom, this.blackMat);
      this.mustache5 = this.mustache2.clone();
      this.mustache5.rotation.z = Math.PI;
      this.mustache5.position.x = -35;
      this.mustache6 = new THREE.Mesh(mustacheGeom, this.blackMat);
      this.mustache6 = this.mustache3.clone();
      this.mustache6.rotation.z = Math.PI;
      this.mustache6.position.x = -30;

      this.mustaches.push(this.mustache1);
      this.mustaches.push(this.mustache2);
      this.mustaches.push(this.mustache3);
      this.mustaches.push(this.mustache4);
      this.mustaches.push(this.mustache5);
      this.mustaches.push(this.mustache6);

      // spots
      this.spot1 = new THREE.Mesh(spotGeom, this.redMat);
      this.spot1.position.x = 39;
      this.spot1.position.z = 150;

      this.spot2 = this.spot1.clone();
      this.spot2.position.z = 160;
      this.spot2.position.y = -10;

      this.spot3 = this.spot1.clone();
      this.spot3.position.z = 140;
      this.spot3.position.y = -15;

      this.spot4 = this.spot1.clone();
      this.spot4.position.z = 150;
      this.spot4.position.y = -20;

      this.spot5 = this.spot1.clone();
      this.spot5.position.x = -39;
      this.spot6 = this.spot2.clone();
      this.spot6.position.x = -39;
      this.spot7 = this.spot3.clone();
      this.spot7.position.x = -39;
      this.spot8 = this.spot4.clone();
      this.spot8.position.x = -39;

      // eyes
      this.leftEye = new THREE.Mesh(eyeGeom, this.whiteMat);
      this.leftEye.position.x = 40;
      this.leftEye.position.z = 120;
      this.leftEye.position.y = 25;

      this.rightEye = new THREE.Mesh(eyeGeom, this.whiteMat);
      this.rightEye.position.x = -40;
      this.rightEye.position.z = 120;
      this.rightEye.position.y = 25;

      // iris
      this.leftIris = new THREE.Mesh(irisGeom, this.purpleMat);
      this.leftIris.position.x = 42;
      this.leftIris.position.z = 120;
      this.leftIris.position.y = 25;

      this.rightIris = new THREE.Mesh(irisGeom, this.purpleMat);
      this.rightIris.position.x = -42;
      this.rightIris.position.z = 120;
      this.rightIris.position.y = 25;

      // mouth
      this.mouth = new THREE.Mesh(mouthGeom, this.blackMat);
      this.mouth.position.z = 171;
      this.mouth.position.y = -30;
      this.mouth.scale.set(.5, .5, 1);

      // smile
      this.smile = new THREE.Mesh(smileGeom, this.greyMat);
      this.smile.position.z = 173;
      this.smile.position.y = -15;
      this.smile.rotation.z = -Math.PI;

      // lips
      this.lips = new THREE.Mesh(lipsGeom, this.yellowMat);
      this.lips.position.z = 165;
      this.lips.position.y = -45;


      // ear
      this.rightEar = new THREE.Mesh(earGeom, this.yellowMat);
      this.rightEar.position.x = -50;
      this.rightEar.position.y = 50;
      this.rightEar.position.z = 105;

      this.leftEar = new THREE.Mesh(earGeom, this.yellowMat);
      this.leftEar.position.x = 50;
      this.leftEar.position.y = 50;
      this.leftEar.position.z = 105;

      // nose
      this.nose = new THREE.Mesh(noseGeom, this.greyMat);
      this.nose.position.z = 170;
      this.nose.position.y = 25;

      // head
      this.head = new THREE.Group();
      this.head.add(this.face);
      this.head.add(this.mane);
      this.head.add(this.rightEar);
      this.head.add(this.leftEar);
      this.head.add(this.nose);
      this.head.add(this.leftEye);
      this.head.add(this.rightEye);
      this.head.add(this.leftIris);
      this.head.add(this.rightIris);
      this.head.add(this.mouth);
      this.head.add(this.smile);
      this.head.add(this.lips);
      this.head.add(this.spot1);
      this.head.add(this.spot2);
      this.head.add(this.spot3);
      this.head.add(this.spot4);
      this.head.add(this.spot5);
      this.head.add(this.spot6);
      this.head.add(this.spot7);
      this.head.add(this.spot8);
      this.head.add(this.mustache1);
      this.head.add(this.mustache2);
      this.head.add(this.mustache3);
      this.head.add(this.mustache4);
      this.head.add(this.mustache5);
      this.head.add(this.mustache6);


      this.head.position.y = 60;

      this.threegroup.add(this.body);
      this.threegroup.add(this.head);
      this.threegroup.add(this.leftKnee);
      this.threegroup.add(this.rightKnee);
      this.threegroup.add(this.backLeftFoot);
      this.threegroup.add(this.backRightFoot);
      this.threegroup.add(this.frontRightFoot);
      this.threegroup.add(this.frontLeftFoot);

      this.threegroup.traverse(function(object) {
        if (object instanceof THREE.Mesh) {
          object.castShadow = true;
          object.receiveShadow = true;
        }
      });
    }
  };

  const createLion = () => {
    lion = new Lion();
    scene.add(lion.threegroup);
  }

  const updateBody = (speed) => {
      lion.head.rotation.y += (lion.tHeagRotY - lion.head.rotation.y) / speed;
      lion.head.rotation.x += (lion.tHeadRotX - lion.head.rotation.x) / speed;
      lion.head.position.x += (lion.tHeadPosX - lion.head.position.x) / speed;
      lion.head.position.y += (lion.tHeadPosY - lion.head.position.y) / speed;
      lion.head.position.z += (lion.tHeadPosZ - lion.head.position.z) / speed;

      lion.leftEye.scale.y += (lion.tEyeScale - lion.leftEye.scale.y) / (speed * 2);
      lion.rightEye.scale.y = lion.leftEye.scale.y;

      lion.leftIris.scale.y += (lion.tIrisYScale - lion.leftIris.scale.y) / (speed * 2);
      lion.rightIris.scale.y = lion.leftIris.scale.y;

      lion.leftIris.scale.z += (lion.tIrisZScale - lion.leftIris.scale.z) / (speed * 2);
      lion.rightIris.scale.z = lion.leftIris.scale.z;

      lion.leftIris.position.y += (lion.tIrisPosY - lion.leftIris.position.y) / speed;
      lion.rightIris.position.y = lion.leftIris.position.y;
      lion.leftIris.position.z += (lion.tLeftIrisPosZ - lion.leftIris.position.z) / speed;
      lion.rightIris.position.z += (lion.tRightIrisPosZ - lion.rightIris.position.z) / speed;

      lion.rightKnee.rotation.z += (lion.tRightKneeRotZ - lion.rightKnee.rotation.z) / speed;
      lion.leftKnee.rotation.z += (lion.tLeftKneeRotZ - lion.leftKnee.rotation.z) / speed;

      lion.lips.position.x += (lion.tLipsPosX - lion.lips.position.x) / speed;
      lion.lips.position.y += (lion.tLipsPosY - lion.lips.position.y) / speed;
      lion.smile.position.x += (lion.tSmilePosX - lion.smile.position.x) / speed;
      lion.mouth.position.z += (lion.tMouthPosZ - lion.mouth.position.z) / speed;
      lion.smile.position.z += (lion.tSmilePosZ - lion.smile.position.z) / speed;
      lion.smile.position.y += (lion.tSmilePosY - lion.smile.position.y) / speed;
      lion.smile.rotation.z += (lion.tSmileRotZ - lion.smile.rotation.z) / speed;
  }



  // const updatePlane = () => {
  //   let targetY = normalize(mousePos.y, -.75, .75, 25, 175);
  //   let targetX = normalize(mousePos.x, -.75, .75, -100, 100);
  //
  //   // Move the plane at each frame by adding a fraction of the remaining distance
  //   airplane.mesh.position.y += (targetY - airplane.mesh.position.y) * 0.1;
  //
  //   // Rotate the plane proportionally to the remaining distance
  //   airplane.mesh.rotation.z = (targetY - airplane.mesh.position.y) * 0.0128;
  //   airplane.mesh.rotation.x = (airplane.mesh.position.y - targetY) * 0.0064;
  //
  //   airplane.propeller.rotation.x += 0.3;
  // }

  const look = (xTarget, yTarget) => {
    lion.tHeagRotY = normalize(xTarget, -200, 200, -Math.PI / 4, Math.PI / 4);
    lion.tHeadRotX = normalize(yTarget, -200, 200, -Math.PI / 4, Math.PI / 4);
    lion.tHeadPosX = normalize(xTarget, -200, 200, 70, -70);
    lion.tHeadPosY = normalize(yTarget, -140, 260, 20, 100);
    lion.tHeadPosZ = 0;


    lion.tEyeScale = 1;
    lion.tIrisYScale = 1;
    lion.tIrisZScale = 1;
    lion.tIrisPosY = normalize(yTarget, -200, 200, 35, 15);
    lion.tLeftIrisPosZ = normalize(xTarget, -200, 200, 130, 110);
    lion.tRightIrisPosZ = normalize(xTarget, -200, 200, 110, 130);

    lion.tLipsPosX = 0;
    lion.tLipsPosY = -45;

    lion.tSmilePosX = 0;
    lion.tMouthPosZ = 174;
    lion.tSmilePosZ = 173;
    lion.tSmilePosY = -15;
    lion.tSmileRotZ = -Math.PI;

    lion.tRightKneeRotZ = normalize(xTarget, -200, 200, .3 - Math.PI / 8, .3 + Math.PI / 8);
    lion.tLeftKneeRotZ = normalize(xTarget, -200, 200, -.3 - Math.PI / 8, -.3 + Math.PI / 8)


    updateBody(10);

    lion.mane.rotation.y = 0;
    lion.mane.rotation.x = 0;

    for (let i = 0; i < lion.maneParts.length; i++) {
      let m = lion.maneParts[i].mesh;
      m.position.z = 0;
      m.rotation.y = 0;
    }

    for (let i = 0; i < lion.mustaches.length; i++) {
      let m = lion.mustaches[i];
      m.rotation.y = 0;
    }


    for (let i = 0; i < lion.bodyVertices.length; i++) {
      let tvInit = lion.bodyInitPositions[i];
      const tv = lion.body.geometry.vertices[lion.bodyVertices[i]];
      // tv.x = tvInit.x + lion.head.position.x;
    }
    lion.body.geometry.verticesNeedUpdate = true;
  }

  const cool = (xTarget, yTarget) => {
    lion.tHeagRotY = normalize(xTarget, -200, 200, Math.PI / 4, -Math.PI / 4);
    lion.tHeadRotX = normalize(yTarget, -200, 200, Math.PI / 4, -Math.PI / 4);
    lion.tHeadPosX = normalize(xTarget, -200, 200, -70, 70);
    lion.tHeadPosY = normalize(yTarget, -140, 260, 100, 20);
    lion.tHeadPosZ = 100;

    lion.tEyeScale = 0.1;
    lion.tIrisYScale = 0.1;
    lion.tIrisZScale = 3;

    lion.tIrisPosY = 20;
    lion.tLeftIrisPosZ = 120;
    lion.tRightIrisPosZ = 120;

    lion.tLipsPosX = normalize(xTarget, -200, 200, -15, 15);
    lion.tLipsPosY = normalize(yTarget, -200, 200, -45, -40);

    lion.tMouthPosZ = 168;
    lion.tSmilePosX = normalize(xTarget, -200, 200, -15, 15);
    lion.tSmilePosY = normalize(yTarget, -200, 200, -20, -8);
    lion.tSmilePosZ = 176;
    lion.tSmileRotZ = normalize(xTarget, -200, 200, -Math.PI - .3, -Math.PI + .3);

    lion.tRightKneeRotZ = normalize(xTarget, -200, 200, .3 + Math.PI / 8, .3 - Math.PI / 8);
    lion.tLeftKneeRotZ = normalize(xTarget, -200, 200, -.3 + Math.PI / 8, -.3 - Math.PI / 8);

    updateBody(10);

    lion.mane.rotation.y = -.8 * lion.head.rotation.y;
    lion.mane.rotation.x = -.8 * lion.head.rotation.x;

    let dt = 20000 / (xTarget * xTarget + yTarget * yTarget);
    dt = Math.max(Math.min(dt, 1), .5);
    lion.windTime += dt;

    for (let i = 0; i < lion.maneParts.length; i++) {
      let m = lion.maneParts[i].mesh;
      let amp = lion.maneParts[i].amp;
      let zOffset = lion.maneParts[i].zOffset;
      let periodOffset = lion.maneParts[i].periodOffset;

      m.position.z = zOffset + Math.cos(lion.windTime + periodOffset) * amp * dt * 2;
    }

    lion.leftEar.rotation.x = Math.cos(lion.windTime) * Math.PI / 16 * dt;
    lion.rightEar.rotation.x = -Math.cos(lion.windTime) * Math.PI / 16 * dt;


    for (let i = 0; i < lion.mustaches.length; i++) {
      let m = lion.mustaches[i];
      let amp = (i < 3) ? -Math.PI / 8 : Math.PI / 8;
      m.rotation.y = amp + Math.cos(lion.windTime + i) * dt * amp;
    };

    // for (let i = 0; i < lion.bodyVertices.length; i++) {
    //   let tvInit = lion.bodyInitPositions[i];
    //   let tv = lion.body.geometry.vertices[lion.bodyVertices[i]];
    //   tv.x = tvInit.x + lion.head.position.x;
    // }
    lion.body.geometry.verticesNeedUpdate = true;
  }

  const loop = () => {

    //console.log(windowHalfX);
    //console.log(mousePos);
    let xTarget = (mousePos.x - windowHalfX);
    let yTarget = (mousePos.y - windowHalfY);
    console.log(xTarget, yTarget);

    //fan.isBlowing = isBlowing;
    updateFan(xTarget, yTarget);
    if (isBlowing) {
      //console.log("COOL");
      cool(xTarget, yTarget);
    } else {
      //console.log("LOOK");
      look(xTarget, yTarget);
    }
    sky.mesh.rotation.z += .001;

    renderer.render(scene, camera);

    requestAnimationFrame(loop);
  }

  init();
}
