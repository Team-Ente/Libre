import db from "../config/Database.js";

export const getAllUsers = async(count) => {
  try {
    const response = await new Promise((resolve, reject) => {
        db.execute('SELECT * FROM `user` LIMIT ?', 
        [count], (err, results) => {
            if (err) reject(new Error(err.message));
            resolve(results);
        })
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export const getUser = async(emailOrHandle) => {
  try {
    const user = await new Promise((resolve, reject) => {
      db.execute('SELECT * FROM `user` WHERE `handle`=? OR `email`=?',
      [emailOrHandle, emailOrHandle],
      (err, results) => {
        if(err) reject (err.message);
        resolve(results);
      })
    });
    return user;
  } catch (error) {
    throw error;
  }
}

export const addUser = async(handle, email, firstName, lastName, password) => {
  try {
    const response = await new Promise((resolve, reject) => {
      db.execute(
        'INSERT INTO `user` (`handle`, `email`, `password`, `first_name`, `last_name`) VALUES (?, ?, ?, ?, ?)',
        [handle, email, password, firstName, lastName], 
        (err, results) => {
        if (err) {
            reject(err.message);
        }
        resolve(results);
      })
    });
    return response;
  } catch (error) {
    throw error;
  }
}

