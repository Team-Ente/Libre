import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../config/Database.js";

const saltRounds = 10;

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
    console.log(error);
    throw error;
  }
}

// TODO: fix

export const register = async(handle, email, firstName, lastName, password) => {
  try {
    const hashPassword = bcrypt.hashSync(password, saltRounds);
    const response = await new Promise((resolve, reject) => {
      db.execute(
        'INSERT INTO `user` (`handle`, `email`, `password`, `first_name`, `last_name`) VALUES (?, ?, ?, ?, ?)',
        [handle, email, hashPassword, firstName, lastName], 
        (err, results) => {
        if (err) {
            reject(err.message);
        }
        resolve(results);
      })
    });

    if(response) return response;
    else return {"msg":"Invalid entry"}
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const login = async(emailOrHandle, password) => {
  try {
    const user = await getUser(emailOrHandle);
    if(!user) {
      console.log("undefined");
      return {error: "Undefined"}
    }
    // User not found case
    if(user.length === 0) return {error: "User not found"};

    // Compare user password
    const match = await bcrypt.compare(password, user[0].password);
    if(!match) return {error: "Wrong Password"};

    const handle = user[0].handle;

    user[0].accessToken = jwt.sign({handle}, "thisIsAnAccessTokenSecret69Loser!",{
        expiresIn: '1d'
    });
    // const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET,{
    //     expiresIn: '1d'
    // });
    //   await Users.update({refresh_token: refreshToken},{
    //       where:{
    //           id: userId
    //       }
    //   });

    return user[0];
  } catch (error) {
    console.log(error);
      throw error;
  }
}

export const verifyToken = async(req, res, next) => {
  const accessToken = req.cookies['access_token'];
  if(accessToken) {
    try {
      const payload = jwt.verify(accessToken, "thisIsAnAccessTokenSecret69Loser!");
      const handle = payload.handle;

      const user = await getUser(handle);

      if(user.length != 0) {
          console.log('Token Verified');
          req.user = user[0];
      }
    } catch (error) {
        console.log(error);
    }
  }
  next();
}

export const logout = async(req, res) => {
  let msg;  
  if(req.user) {
    msg = "User logged out successfully.";
    res.clearCookie('access_token');
  } else {
    msg = "No user logged in";
  }
  res.json({
    message: msg
  });
}