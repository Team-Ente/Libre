import mysql from "mysql2";

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "8664",
    database: "librebeta",
});

db.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    // console.log('db ' + connection.state);
});

export default db;