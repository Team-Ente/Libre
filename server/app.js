const Express = require("express");

const app = Express();

app.use(Express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(3050, "localhost", () => {
    console.log("Server is running on port 3050");
});