var express = require('express');
var router = express.Router();
var TokenService = require('../services/tokenService');

// POST /token
router.post('/', function(req, res) {
  var deviceId = req.body.device;
  // console.log("Device ID: " + deviceId);
  var identity = req.body.identity;
  // console.log("Identity: " + identity);

  var token = TokenService.generate(identity, deviceId)
  // console.log("Token: " + token);

  res.json({
    identity: identity,
    token: token.toJwt(),
  });
});


module.exports = router;
