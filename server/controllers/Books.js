import db from "../config/Database.js";

    /**
     * 
     * @returns list of all book paths
     * 
     */
export const getAllBooks = async (count, genre) => { // done
    try {
        const response = await new Promise((resolve, reject) => {
            db.execute('SELECT * FROM `book` LIMIT ?', 
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
            db.execute('SELECT * FROM `book` WHERE `book`.title IN (SELECT title FROM  `reading` WHERE ? = `reading`.handle)', 
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
            db.execute('SELECT * FROM `book` LIMIT ?', 
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
            db.execute('SELECT title FROM `wishlist` WHERE `wishlist`.handle = ? LIMIT ? ', 
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
            db.execute('SELECT title FROM `book` ORDER BY `book`.added_on ASC LIMIT ?', 
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
            db.execute('SELECT title FROM `reading` GROUP BY title ORDER BY COUNT(*) DESC LIMIT ?',
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
            db.execute('SELECT * FROM `book` LIMIT ?', 
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
            db.execute('SELECT * FROM `book` WHERE `title` LIKE ?', 
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


export const addNewBook = async (title) => {
    try {
        const response = await new Promise((resolve, reject) => {
            db.execute('SELECT * FROM `book` WHERE `title` LIKE ?', 
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