const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.initializeDatabase = functions.https.onRequest((request, response) => {
  const initData = {
    isShow: 0,
    isRotate: 0,
    isPlayMusic: 0,
    rotateSpeed: 100,
    opacity: 1,
    color_r: 1,
    color_g: 1,
    color_b: 1,
  };
  const ref = admin.database().ref("status");
  ref
    .set(initData)
    .then((data) => {
      functions.logger.info("initializeDatabase 200");
      response.send("initializeDatabase 200!");
    })
    .catch((error) => {
      functions.logger.info("initializeDatabase 400");
      response.send("initializeDatabase 400!");
    });
});

//isShow
exports.changeIsShow = functions.https.onRequest((request, response) => {
  const ref = admin.database().ref("status");
  const param = request.query;
  ref
    .update({
      isShow: param.isShow,
    })
    .then((data) => {
      functions.logger.info(param);
      response.send("changeIsShow 200!" + param.isShow);
    })
    .catch((error) => {
      functions.logger.info("changeIsShow 400");
      response.send("changeIsShow 400!");
    });
});

//isRotate
exports.changeIsRotate = functions.https.onRequest((request, response) => {
  const ref = admin.database().ref("status");
  const param = request.query;
  ref
    .update({
      isRotate: param.isRotate,
    })
    .then((data) => {
      functions.logger.info(param);
      response.send("changeIsRotate 200!" + param.isRotate);
    })
    .catch((error) => {
      functions.logger.info("changeIsRotate 400");
      response.send("changeIsRotate 400!");
    });
});

//isPlayMusic
exports.changeIsPlayMusic = functions.https.onRequest((request, response) => {
  const ref = admin.database().ref("status");
  const param = request.query;
  ref
    .update({
      isPlayMusic: param.isPlayMusic,
    })
    .then((data) => {
      functions.logger.info(param);
      response.send("changeIsPlayMusic 200!" + param.isPlayMusic);
    })
    .catch((error) => {
      functions.logger.info("changeIsPlayMusic 400");
      response.send("changeIsPlayMusic 400!");
    });
});

// Opacity
exports.changeOpacity = functions.https.onRequest((request, response) => {
  const ref = admin.database().ref("status");
  const param = request.query;
  ref
    .update({
      opacity: param.opacity,
      isShow: 1,
    })
    .then((data) => {
      functions.logger.info(request.query);
      response.send("changeOpacity 200!" + param.opacity);
    })
    .catch((error) => {
      functions.logger.info("changeOpacity 400");
      response.send("changeOpacity 400!");
    });
});

// rotateSpeed
exports.changeRotateSpeed = functions.https.onRequest((request, response) => {
  const ref = admin.database().ref("status");
  const param = request.query;
  ref
    .update({
      rotateSpeed: param.speed,
      isRotate: 1,
    })
    .then((data) => {
      functions.logger.info(request.query);
      response.send("changeRotateSpeed 200!" + param.speed);
    })
    .catch((error) => {
      functions.logger.info("changeRotateSpeed 400");
      response.send("changeRotateSpeed 400!");
    });
});

// RandomOpacity
exports.changeRandomOpacity = functions.https.onRequest((request, response) => {
  const ref = admin.database().ref("status");

  ref
    .update({
      opacity: Math.random(),
    })
    .then((data) => {
      functions.logger.info(request.query);
      response.send("changeRandomOpacity 200!");
    })
    .catch((error) => {
      functions.logger.info("changeRandomOpacity 400");
      response.send("changeRandomOpacity 400!");
    });
});

// color
exports.changeColor = functions.https.onRequest((request, response) => {
  const ref = admin.database().ref("status");
  const param = request.query;

  ref
    .update({
      color_r: param.r,
      color_g: param.g,
      color_b: param.b,
    })
    .then((data) => {
      functions.logger.info("changeColor 200");
      response.send("changeColor 200!");
    })
    .catch((error) => {
      functions.logger.info("changeColor 400");
      response.send("changeColor 400!");
    });
});
