const Express = require("express");
const EPub = require('epub2').EPub;
const app = Express();

const DbService = require('./DBService');

app.use(Express.urlencoded({ extended: false }));

var results = DbService.getAllBooks();

app.get("/books/*", (req, res) => {
    console.log(req["url"]);
    results.then((books) => {
        EPub.createAsync("files/" + books[1]["title"])
        .then(function (epub)
        {
            epub.getFile(epub.metadata.cover, (err, coverData, mimeType) => {
                var json = epub.metadata;
                json["cover"] = Buffer.from(coverData).toString('base64');
                res.send(`<div><h3>`+json["title"]+`</h3><p>`+json["creator"]+`</p>
                        <img src="data:${mimeType};base64,${json['cover']}"/></div>`);
                // res.send(json);
            });
        })
        .catch(function (err)
        {
            console.log("ERROR\n-----");
            throw err;
        });
    })
    
});

app.listen(3050, "localhost", () => {
    console.log("Server is running at http://localhost:3050");
});