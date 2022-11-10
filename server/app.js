import Express from "express";
import cookieParser from "cookie-parser";
import fileupload from "express-fileupload";
import * as dotenv from "dotenv";
dotenv.config();

import { register, login, verifyToken, logout } from "./middleware/Auth.js";
import {query} from "./middleware/BookQuery.js"
import { getContents } from "./middleware/BookRead.js";
import { bypassCORS } from "./middleware/Setup.js";
import { uploadBook } from "./middleware/Admin.js";


import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { addNewBook } from "./controllers/Books.js";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = Express();

app.use(Express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(fileupload());

// book query
app.get("/books/:qType", bypassCORS, verifyToken, query);

// read book
app.get("/read", bypassCORS, verifyToken, getContents);

// user authentication
app.post('/register', bypassCORS, register);

app.post('/login', bypassCORS, verifyToken, login);

app.post('/logout', bypassCORS, verifyToken, logout);

// book upload
app.post('/upload', async (req, res) => {
    if(req.files === null) {
        return res.status(400).json({ msg: "No file uploaded" });
    }


    // check for duplicate in database
    // const response = await addNewBook(req.body);
    // console.log(response);

    const file = req.files.ebook;
    file.mv(`${__dirname}/files/${file.name}`, err => {
        if(err) {
            console.log(error);
            return res.status(500).send(error);
        }

        res.json("success");
    })
});


app.listen(process.env.PORT, process.env.HOST, () => {
    console.log("Server is running");
});