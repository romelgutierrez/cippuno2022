var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

  /* GET lis cursos */
router.get('/', function(req, res, next) {
  res.render('cursos/list', { title: 'cursos' });
});
/* GET add cursos */
router.get('/add', function(req, res, next) {
  res.render('cursos/add', { title: 'cursos' });
});

module.exports = router;