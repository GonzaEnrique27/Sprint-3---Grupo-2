var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/productCart', function(req, res) {
  res.render('./views/productCart');
});

module.exports = router;
