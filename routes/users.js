/*Student name : Raghuveer Kumar Pendyala(301178112),
Subject :COMP229-web application development
Date : 5 feb 2022 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
