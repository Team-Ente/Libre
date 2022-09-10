import Express from "express";
import cookieParser from "cookie-parser";

import { register, login, verifyToken, logout } from "./middleware/Auth.js";
import {query} from "./middleware/BookQuery.js"
import { getContents } from "./middleware/BookRead.js";

const app = Express();

app.use(Express.urlencoded({ extended: false }));
app.use(cookieParser());

// book query
app.get("/books/:qType", verifyToken, query);

// read book
app.get("/read", verifyToken, getContents);

// user authentication
app.post('/register', register);

app.post('/login', verifyToken, login);

app.post('/logout', verifyToken, logout);


app.listen(3050, "localhost", () => {
    console.log("Server is running at http://localhost:3050");
});