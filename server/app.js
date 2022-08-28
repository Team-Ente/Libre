const Express = require("express");
const EPub = require('epub2').EPub;
const app = Express();

const DbService = require('./DBService');

app.use(Express.urlencoded({ extended: false }));


async function getBookData(book) {
    const epub = await EPub.createAsync("files/" + book["title"] + ".epub")
    const [coverData, mimeType] = await epub.getFileAsync(epub.metadata.cover);
    var json = epub.metadata;
    json["cover"] = Buffer.from(coverData).toString('base64');
    return json;

    // for future purposes DO NOT DELETE... YOU WILL REGRET IT LATER
    // retJson[json.title] = `<div><h3>`+json["title"]+`</h3><p>`+json["creator"]+`</p>
    // <img src="data:${mimeType};base64,${json['cover']}"/></div>`;
}

app.get("/books*", async (req, res) => {
    const title = req.path.substring(7);
    console.log(title);
    if(title === ""){
        var books = await DbService.getAllBooks();
        var retJson = [];
        for (const book of books) {
            const json = await getBookData(book);
            retJson.push(json);
        }

        console.log("done");
        res.send(retJson);        
    } else {
        var books = await DbService.getOneBook(title);
        var retJson = [];
        for (const book of books) {
            const json = await getBookData(book);
            retJson.push(json);
        }
        
        console.log("done");
        res.send(retJson);
    }
    
});

app.listen(3050, "localhost", () => {
    console.log("Server is running at http://localhost:3050");
});