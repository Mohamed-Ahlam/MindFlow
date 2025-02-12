const mysql = require('mysql2')

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'foodie',
    database: 'Users'
})

/* 
this createConnection method is used to create a connection then export

then this connection will be inported to where we need to use it (inside our routes folder so our routes like GET can be connected to the database)

host = localhost bc we are logged into our local mysql server

*/