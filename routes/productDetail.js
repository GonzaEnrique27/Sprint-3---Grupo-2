var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/productDetail', function(req, res) {
  res.render('/views/productDetail.ejs');
});

module.exports = router;
