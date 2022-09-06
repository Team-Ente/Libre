import db from "../config/Database.js";

    /**
     * 
     * @returns list of all book paths
     * 
     */
export const getAllBooks = async (count, genre) => {
    try {
        const response = await new Promise((resolve, reject) => {
            const query = "SELECT * FROM book LIMIT " + count + ";";

            db.execute(query, (err, results) => {
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

export const getReadingBooks = async (count) => {
    try {
        const response = await new Promise((resolve, reject) => {
            const query = "SELECT * FROM book LIMIT " + count + ";";

            db.execute(query, (err, results) => {
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

export const getRecentBooks = async (count) => {
    try {
        const response = await new Promise((resolve, reject) => {
            const query = "SELECT * FROM book LIMIT " + count + ";";

            db.execute(query, (err, results) => {
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

export const getTrendingBooks = async (count) => {
    try {
        const response = await new Promise((resolve, reject) => {
            const query = "SELECT * FROM book LIMIT " + count + ";";

            db.execute(query, (err, results) => {
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

export const getEditorsPickBooks = async (count) => {
    try {
        const response = await new Promise((resolve, reject) => {
            const query = "SELECT * FROM book LIMIT " + count + ";";

            db.execute(query, (err, results) => {
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

export const  getCompletedBooks = async (count) => {
    try {
        const response = await new Promise((resolve, reject) => {
            const query = "SELECT * FROM book LIMIT " + count + ";";

            db.execute(query, (err, results) => {
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

export const getBucketBooks = async (count) => {
    try {
        const response = await new Promise((resolve, reject) => {
            const query = "SELECT * FROM book LIMIT " + count + ";";

            db.execute(query, (err, results) => {
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

/**
 * 
 * @param {string} title 
 * @returns array of strings
 * get all books containing `title`
 */
export const getLikeBooks = async (title, genre) => {
    try {
        const response = await new Promise((resolve, reject) => {
            const query = "SELECT * FROM `book` WHERE `title` LIKE '%" + title + "%';";
            db.query(
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


