import Express from "express";
import cookieParser from "cookie-parser";

import { register, login, verifyToken, logout } from "./middleware/Auth.js";
import {query} from "./middleware/BookQuery.js"
import { getContents } from "./middleware/BookRead.js";
import { bypassCORS } from "./middleware/Setup.js";

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


app.listen(3050, "localhost", () => {
    console.log("Server is running at http://localhost:3050");
});