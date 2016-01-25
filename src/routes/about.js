var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.locals.path = 'about';
  res.render('about', { title: 'About' });
});

module.exports = router;
