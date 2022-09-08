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
    const user = await new Promise((resolve, reject) => {
      db.execute(
        'SELECT * FROM `user` WHERE `email` = ? OR `handle` = ?',
        [emailOrHandle, emailOrHandle], 
        (err, results) => {
        if (err) {
            reject(err.message);
        }
        resolve(results);
      });
    }).catch((err) => {
        return {error: err};
    });

    // User not found case
    if(user.length === 0) return {error: "User not found"};

    // Compare user password
    const match = await bcrypt.compare(password, user[0].password);
    if(!match) return {error: "Wrong Password"};

    // const handle = user[0].handle;
    const email = user[0].email;
    // const firstName = user[0].first_name;
    // const lastName = user[0].last_name;

    user[0].accessToken = jwt.sign({email}, "thisIsAnAccessTokenSecret69Loser!",{
        expiresIn: '15m'
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
            const email = payload.email;

            const user = await new Promise((resolve, reject) => {
                db.execute(
                    'SELECT * FROM `user` WHERE `email` = ?',
                    [email], 
                    (err, results) => {
                    if (err) {
                        reject(err.message);
                    }
                    resolve(results);
                });
            }).catch((err) => {
                res.status(400).json(err);
            });

            // User not found case
            if(user.length === 0) return res.status(400).json("User not found");
            else {
                console.log('Token Verified');
                return res.json(user[0]);
            }
        } catch (error) {
            console.log(error);
            next();
        }
    }
    next();
}

export const Logout = async(req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if(!refreshToken) return res.sendStatus(204);
  const user = await Users.findAll({
      where:{
          refresh_token: refreshToken
      }
  });
  if(!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await Users.update({refresh_token: null},{
      where:{
          id: userId
      }
  });
  res.clearCookie('refreshToken');
  return res.sendStatus(200);
}