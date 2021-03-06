var express = require('express');
var router = express.Router();
var ejs = require('ejs')

/* GET home page. */
router.get('/', function(req, res, next) {
  ejs.render('index.ejs', { title: 'Express' });
});

module.exports = router;
