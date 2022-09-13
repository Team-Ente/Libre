import mysql from "mysql2";
import * as dotenv from "dotenv";
dotenv.config();

var db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    console.log('db authorized: ' + db.authorized);
});

export default db;