const mysql = require('mysql2');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "libre",
});

connection.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    // console.log('db ' + connection.state);
});

class DbService {

    static async getAllBooks() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM book_info;";

                connection.execute(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            // console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    static async getOneBook(title) {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM `book_info` WHERE `title` = '" + title + "';";
                connection.query(
                    query, 
                    (err, results) => {
                        if (err) reject(new Error(err.message));
                        resolve(results);
                })
            });
            // console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }




    // async insertNewName(name) {
    //     try {
    //         const dateAdded = new Date();
    //         const insertId = await new Promise((resolve, reject) => {
    //             const query = "INSERT INTO names (name, date_added) VALUES (?,?);";

    //             connection.query(query, [name, dateAdded] , (err, result) => {
    //                 if (err) reject(new Error(err.message));
    //                 resolve(result.insertId);
    //             })
    //         });
    //         return {
    //             id : insertId,
    //             name : name,
    //             dateAdded : dateAdded
    //         };
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // async deleteRowById(id) {
    //     try {
    //         id = parseInt(id, 10); 
    //         const response = await new Promise((resolve, reject) => {
    //             const query = "DELETE FROM names WHERE id = ?";
    
    //             connection.query(query, [id] , (err, result) => {
    //                 if (err) reject(new Error(err.message));
    //                 resolve(result.affectedRows);
    //             })
    //         });
    
    //         return response === 1 ? true : false;
    //     } catch (error) {
    //         console.log(error);
    //         return false;
    //     }
    // }

    // async updateNameById(id, name) {
    //     try {
    //         id = parseInt(id, 10); 
    //         const response = await new Promise((resolve, reject) => {
    //             const query = "UPDATE names SET name = ? WHERE id = ?";
    
    //             connection.query(query, [name, id] , (err, result) => {
    //                 if (err) reject(new Error(err.message));
    //                 resolve(result.affectedRows);
    //             })
    //         });
    
    //         return response === 1 ? true : false;
    //     } catch (error) {
    //         console.log(error);
    //         return false;
    //     }
    // }

    // async searchByName(name) {
    //     try {
    //         const response = await new Promise((resolve, reject) => {
    //             const query = "SELECT * FROM names WHERE name = ?;";

    //             connection.query(query, [name], (err, results) => {
    //                 if (err) reject(new Error(err.message));
    //                 resolve(results);
    //             })
    //         });

    //         return response;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
}

module.exports = DbService;


