var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.locals.path = 'index';
  res.render('index', { title: 'Home' });
});

module.exports = router;
