var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Unknown Nights' });
});
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Unknown Nights' });
});
/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Unknown Nights - About' });
});
/* GET play page. */
router.get('/play', function(req, res, next) {
  res.render('play', { title: 'Unknown Nights alpha' });
});
module.exports = router;
