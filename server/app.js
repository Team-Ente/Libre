import Express from "express";
import cookieParser from "cookie-parser";
import multer from "multer";

import { register, login, verifyToken, logout } from "./middleware/Auth.js";
import {query} from "./middleware/BookQuery.js"
import { getContents } from "./middleware/BookRead.js";
import { bypassCORS } from "./middleware/Setup.js";
import { uploadBook } from "./middleware/Admin.js";


const app = Express();

app.use(Express.urlencoded({ extended: false }));
app.use(cookieParser());

// book query
app.get("/books/:qType", bypassCORS, verifyToken, query);

// read book
app.get("/read", bypassCORS, verifyToken, getContents);

// user authentication
app.post('/register', bypassCORS, register);

app.post('/login', bypassCORS, verifyToken, login);

app.post('/logout', bypassCORS, verifyToken, logout);

// book upload
app.post('/upload', uploadBook, (req, res) => {
    res.send("success");
});


app.listen(3050, "localhost", () => {
    console.log("Server is running at http://localhost:3050");
});