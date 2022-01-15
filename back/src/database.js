const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hotel_db'
});

mysqlConnection.connect((err)=> {
    if(err) {
        console.log(err)
    }else {
        console.log('Connected to database');
    }
});

module.exports = mysqlConnection;


