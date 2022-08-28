const Express = require("express");
const EPub = require('epub2').EPub;
const app = Express();

const DbService = require('./DBService');

app.use(Express.urlencoded({ extended: false }));

/**
 * getBookData(book_name: string) -> json
 * 
 * Returns the metadata of the book in json format
 * 'cover' image is set as base64 encoding of the buffer
 * to read 'cover' use:
 * <img src="data:${mimeType};base64,${json['cover']}"/>
 * 
*/
async function getBookData(book) {
    const epub = await EPub.createAsync("files/" + book["title"] + ".epub")
    const [coverData, mimeType] = await epub.getFileAsync(epub.metadata.cover);
    var json = epub.metadata;
    json["cover"] = Buffer.from(coverData).toString('base64');
    json["mimeType"] = mimeType;
    return json;

    // for future purposes DO NOT DELETE... YOU WILL REGRET IT LATER
    // retJson[json.title] = `<div><h3>`+json["title"]+`</h3><p>`+json["creator"]+`</p>
    // <img src="data:${mimeType};base64,${json['cover']}"/></div>`;
}

/**
 * GET request in /books endpoint
 * use /books/`book_name` to get a specific book
 * sends the metadata of the books as response
 */
app.get("/books*", async (req, res) => {
    // For CORS error
    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials" : true 
    });

    const title = req.path.substring(7);
    if(title === ""){
        // get all books
        var books = await DbService.getAllBooks();
        var retJson = {
            "books": []
        };
        for (const book of books) {
            const json = await getBookData(book);
            retJson["books"].push(json);
        }

        res.send(retJson);        
    } else {
        // get all books containing `title` 
        var books = await DbService.getLikeBook(title);
        var retJson = {
            "books": []
        };
        for (const book of books) {
            const json = await getBookData(book);
            retJson["books"].push(json);
        }
        
        res.send(retJson);
    }
    
});

app.listen(3050, "localhost", () => {
    console.log("Server is running at http://localhost:3050");
});