
/* var connString = 'mysql://marbecod:8P:07cYT4Vgbq.@localhost/mdb?charset=utf8_general_ci&timezone=-0700';
var conn = mysql.createConnection(connString);
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'marbecod',
    password : '8P:07cYT4Vgbq.',
    database : 'marbecod_vipot',
  }
});

var data = knex('Transaction').select('*').then(data => {return data})
console.log(data); */

var mysql = require('mysql');
 
console.log('Get connection ...');
var connString = 'mysql://marbecod:8P:07cYT4Vgbq.@localhost/mdb?charset=utf8_general_ci&timezone=-0700';
var conn = mysql.createConnection(connString);
/* 
var conn = mysql.createConnection({
  database: 'mytestdb',
  host: "localhost",
  user: "root",
  password: "12345"
}); */
 
conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});