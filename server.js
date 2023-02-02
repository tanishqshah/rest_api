
const express = require('express');
// require("dotenv")
const { Client } = require('pg');
const connectionString = 'postgres://postgres:Finserv@2023@localhost:5432/task2';
//"postgres://YourUserName:YourPassword@localhost:5432/YourDatabase";
const client = new Client({
    connectionString: connectionString
});
client.connect();
var app = express();
const cors = require('cors');
app.use(cors({
    origin: '*'
}));
app.set('port', process.env.PORT || 4000);


app.get('/', function (req, res, next) {
    
client.query("select * from EmpRecord" , function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
});


    
app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});
