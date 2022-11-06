import db from "../config/Database.js";

export const getAllBooks = async (count, genre) => { // done
    try {
        const response = await new Promise((resolve, reject) => {
            db.execute('SELECT * FROM  `book` LIMIT ?', 
            [count], (err, results) => {
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

export const getReadingBooks = async (handle, count) => { // done
    try {
        const response = await new Promise((resolve, reject) => {
            db.execute('SELECT * FROM  `book` INNER JOIN (SELECT book_id FROM  `reading` WHERE ? = `reading`.handle) as V2 ON `book`.id = V2.book_id', 
            [handle], (err, results) => {
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

export const  getCompletedBooks = async (handle, count) => {
    try {
        const response = await new Promise((resolve, reject) => {
            db.execute('SELECT * FROM `book` INNER JOIN (SELECT book_id FROM `reading` WHERE `reading`.progress > 98) AS V2 ON `book`.id = V2.book_id LIMIT 2', 
            [count], (err, results) => {
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

export const getBucketBooks = async (handle, count) => { // done
    try {
        const response = await new Promise((resolve, reject) => {
            db.execute('SELECT * FROM  `book` INNER JOIN (SELECT book_id FROM  `wishlist` WHERE ? = `wishlist`.handle) as V2 ON `book`.id = V2.book_id', 
            [handle, count], (err, results) => {
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

export const getRecentBooks = async (count) => { // done
    try {
        const response = await new Promise((resolve, reject) => {
            db.execute('SELECT * FROM  `book` ORDER BY `book`.added_on ASC LIMIT ?', 
            [count], (err, results) => {
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

export const getTrendingBooks = async (count) => { // done
    try {
        const response = await new Promise((resolve, reject) => {
            db.execute('SELECT * FROM  `book` INNER JOIN (SELECT book_id FROM  `reading` GROUP BY book_id ORDER BY COUNT(*) DESC LIMIT ?) AS V2 ON `book`.id = V2.book_id',
            [count], (err, results) => {
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
            db.execute('SELECT * FROM  `book` LIMIT ?', 
            [count], (err, results) => {
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
            db.execute('SELECT * FROM  `book` WHERE `title` LIKE ?', 
            ['%'+title+'%'], (err, results) => {
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


export const addNewBook = async (book) => {
    try {
        const response = await new Promise((resolve, reject) => {
            db.execute('INSERT INTO  `book` (`title`, `added_on`, `rating`, `language`, `publisher`, `isbn`, `publishing_year`, `edition`) VALUES (?, ?, ?, ? , ? , ? , ?, ?)', 
            ['%'+title+'%'], (err, results) => {
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

export const getBookInfo = async (title) => {
    try {
        const response = await new Promise((resolve, reject) => {
            db.execute('SELECT * FROM  `book` WHERE `title` = ?', 
            ['%'+title+'%'], (err, results) => {
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