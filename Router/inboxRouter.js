const express = require('express');
const router = express.Router();

//internal import
const {getInbox} = require('./../comtroller/inboxController');


router.get('/',getInbox);

module.exports=router;