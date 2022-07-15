var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

  /* GET lis pagos */
  router.get('/', function(req, res, next) {
    res.render('pagos/list', { title: 'pagos' });
  });

  /* GET add pagos */
  router.get('/add', function(req, res, next) {
    res.render('pagos/add', { title: 'pagos' });
  });
  
   /* GET add pagos */
   router.get('/listvl', function(req, res, next) {
    res.render('pagos/listvl', { title: 'pagos' });
  });
  module.exports = router;