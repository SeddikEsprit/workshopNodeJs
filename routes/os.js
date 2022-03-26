var express = require('express');
var router = express.Router();
var os = require("os")

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({
        hostname: os.hostname(),
        type: os.type(),
        platform: os.platform(),

    });
});
    router.get('/cpus', function (req, res, next) {
        res.json({

            cpus: os.cpus(),
        });
    });
router.get('/cpus/:id', function (req, res, next) {
   res.json({
       cpus: os.cpus()[req.params.id],
   })
  // res.send(req.params.id)
});

    module.exports = router;
