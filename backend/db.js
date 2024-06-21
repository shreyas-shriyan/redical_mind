const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '172.20.4.35',
    user: 'cron',
    password: '1234',
    database: 'asterisk'
})

connection.connect((err) =>{
    if(err){
        console.error('' + err.stack);
        return;
    }
    console.log('Connected to database as id ' + connection.threadId);
});

module.exports = connection;