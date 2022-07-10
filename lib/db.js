var mysql = require('mysql');
var connection = mysql.createConnection({
	multipleStatements: true,
	host:'localhost',
	user:'root',
	password:'',
	database:'dbcip'
});

connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Conexion exitosa...! ');
	}
});

module.exports = connection;
