var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');


// display books page
router.get('/', function(req, res, next) {
  dbConn.query('SELECT *FROM usuario',function(err,rows)     {

      if(err) {
          req.flash('error', err);
          // render to views/books/index.ejs
          res.render('users/list',{data:''});   
          console.log(rows);
      } else {
          // render to views/books/index.ejs
          res.locals.idu=req.session.idu;
          res.locals.user=req.session.user;
          res.locals.email=req.session.email;

          res.render('users/list',{data:rows});
      }
  });
});



/* GET users listing. */
// router.get('/users', function(req, res, next) {
//   res.render('users/list', { title: 'usuario' });
// });

/* GET home re. */
router.get('/registrarUser', function(req, res, next) {
  res.render('users/registrarUser', { title: 'Registrar colegiado' });
});



// registrar usuario

router.post('/registrarUser', function(req, res, next) {    

  let nombre = req.body.nombre;
  let correo = req.body.correo;
  let usuario = req.body.usuario;
  let password = req.body.password;
  let estado = req.body.estado;
  let id_rol = req.body.id_rol;
  let errors = false;

  // if(name.length === 0 || author.length === 0) {
  //     errors = true;

  //     // set flash message
  //     req.flash('error', "Please enter name and author");
  //     // render to add.ejs with flash message
  //     res.render('books/add', {
  //         name: name,
  //         author: author
  //     })
  // }

  // if no error
  if(!errors) {

      var form_data = {
          nombre: nombre,
          correo: correo,
          usuario: usuario,
          password: password,
          estado: estado,
          id_rol: id_rol
      }
      
      // insert query
      dbConn.query('INSERT INTO usuario SET ?', form_data, function(err, result) {
          //if(err) throw err
          if (err) {
              req.flash('error', err)
               
              // render to add.ejs
              res.render('users/registrarUser', {
              
                  nombre: form_data.nombre,
                  correo: form_data.correo,
                  usuario: form_data.correo,
                  password: form_data.password,
                  estado: form_data.estado,
                  id_rol: form_data.id_rol                   
              })
          } else {                
              req.flash('success', 'resgistrado successfully added');
              res.redirect('/');
          }
      })
  }
})


// delete user
router.get('/delete/(:id_usuario)', function(req, res, next) {

  let id_usuario = req.params.id_usuario;
   
  dbConn.query('DELETE FROM usuario WHERE id_usuario = ' + id_usuario, function(err, result) {
      //if(err) throw err
      if (err) {
          // set flash message
          req.flash('error', err)
          // redirect to books page
          res.redirect('/users')
      } else {
          // set flash message
          req.flash('success', 'El usuario ha sido eliminado! ID = ' + id_usuario)
          // redirect to books page
          res.redirect('/users')
      }
  })
})

module.exports = router;
