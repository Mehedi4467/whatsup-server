const express = require('express');
const router = express.Router();

//internal import
const {getUser} = require('./../comtroller/userController');


router.get('/',getUser);

module.exports=router;