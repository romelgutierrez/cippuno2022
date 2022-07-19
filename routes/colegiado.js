var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

/* GET detalles pagos. */
router.get('/perfil', function(req, res, next) {
    res.render('colegiado/perfil', { title: ' mi perfil' });
});
 
  
module.exports = router;
