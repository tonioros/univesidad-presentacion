var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('student', { title: 'Bienvenido' });
});
router.get('/academicos', function(req, res, next) {
  res.render('academics', { title: 'Conocimiento academico' });
});

router.get('/general', function(req, res, next) {
  res.render('knowledge', { title: 'Conocimiento genera' });
});

router.get('/hobbies', function(req, res, next) {
  res.render('hobbies', { title: 'Hobbies' });
});

module.exports = router;
