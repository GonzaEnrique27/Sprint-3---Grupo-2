var express = require('express');
var router = express.Router();
let controller = require('../controllers/productsController')

/* GET home page. */
router.get('/productCart', controller.productCart);

module.exports = router;
