// external import
const express = require('express');
const router = express.Router();

//internal import
const {getLogin} = require('./../comtroller/loginController');


router.get('/',getLogin);

module.exports=router;