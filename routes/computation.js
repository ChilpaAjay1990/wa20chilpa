var express = require('express');
var router = express.Router();

var x ;


/* GET users listing. */
router.get('/', function (req, res, next) {
    
    x = 9;
    // res.send('hello');

    res.write('[Math.cbrt()] applied to ' + `${ [x]}` + ' is ' + `${[Math.cbrt(x)]}\n`);
    
    res.write('[Math.atan2()] applied to ' + `${ [x]}` + ' is ' + `${[Math.atan2(x)]}`);
    res.end();

});


module.exports = router;