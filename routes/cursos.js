var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

  /* GET lis cursos */
router.get('/', function(req, res, next) {
  res.render('cursos/list', { title: 'cursos' });
});

  /* GET lis cursos */
router.get('/listadd', function(req, res, next) {
    res.render('cursos/listadd', { title: 'cursos add' });
});

  /* GEt registrarse aun curso */
  router.get('/create', function(req, res, next) {
    res.render('cursos/create', { title: 'Registrarse' });
});
  
  /* GEt registrarse aun curso */
  router.get('/miscursos', function(req, res, next) {
    res.render('cursos/miscursos', { title: 'Mis Cursos' });
});


/* GET add cursos */
router.get('/add', function(req, res, next) {
  res.render('cursos/add', { title: 'cursos' });
});

module.exports = router;