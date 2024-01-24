var express = require('express');
var router = express.Router();

var user = require('../conrtroller/usercontroller')

/* GET home page. */
router.post('/register',user.signup)
router.get('/',user.getdata)

module.exports = router;
