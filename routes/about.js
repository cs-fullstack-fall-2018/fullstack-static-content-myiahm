var express = require('express');
var router = express.Router();


router.get('/about', function (req,res,next) {
    res.redirect('https://www.linkedin.com/in/myiah-moore-6178574b/')
});
module.exports = router;
