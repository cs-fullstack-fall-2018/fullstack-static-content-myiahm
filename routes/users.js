var express = require('express');
var router = express.Router();
var path = require('path');


/* GET users listing. */
    router.get('/', function (req,res,next) {
        res.sendFile(path.join(__dirname + '/../public/elements.html'));
    });

module.exports = router;
