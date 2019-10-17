var express = require('express');
var router = express.Router();

router.get('/list', function(req, res, next) {
  res.json({
    err: 0,
    data: [1,2]
  })
});
router.get('/detail', function(req, res, next) {
  res.json({
    err: 0,
    data: 'OK'
  })
});

module.exports = router;