var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test',
    port: '3306'
});

connection.connect()

connection.query('SELECT * from product', function (err, rows, fields) {
    if (err) throw err

    console.log('The solution is: ', rows)
})

connection.end()
