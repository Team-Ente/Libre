const Express = require("express");
const EPub = require('epub2').EPub;
const parse = require('node-html-parser').parse;
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
 * 
 * @param {query_type} qType 
 * @param {query_argument} qArg 
 * @returns list of books matching criteria
 * Get a list of books following query_type. If searching by string query_argument is a string
 */
async function getBookList(qType, qArg) {
    const books = await new Promise((resolve, reject) => {
        if (qType === "all") 
            resolve(DbService.getAllBooks(qArg));
        else if (qType === "recent") 
            resolve(DbService.getRecentBooks(qArg));
        else if (qType === "reading") 
            resolve(DbService.getReadingBooks(qArg));
        else if (qType === "trending") 
            resolve(DbService.getTrendingBooks(qArg));
        else if (qType === "editor") 
            resolve(DbService.getEditorsPickBooks(qArg));
        else if (qType === "search") 
            resolve(DbService.getLikeBooks(qArg));
        else if (qType === "completed") 
            resolve(DbService.getCompletedBooks(qArg));
        else if (qType === "bucket") 
            resolve(DbService.getBucketBooks(qArg));
        else 
            reject(new Error("invalid request"));
    });
    return books;
}


/**
 * GET request in /books endpoint
 * use /books/`book_name` to get a specific book
 * sends the metadata of the books as response
 */
app.get("/books/:qType/:qArg", async (req, res) => {
    // For CORS error
    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials" : true 
    });

    const qType = req.params.qType;  // The type of query (list criteria)
    const qArg = req.params.qArg;  // The second argument of query (query_amount or query_string)
 
    // Initialize empty return JSON
    let retJson = {
        "books": []
    };

    let books = await getBookList(qType, qArg); 
    for (const book of books) {
        const json = await getBookData(book);
        retJson["books"].push(json);
    }
    res.send(retJson);
});

/**
 * get list of chapters of a book
 * The list is rendered from the server
 */
app.get("/read/:bookName", async (req, res) => {
    
    const bookName = req.params.bookName;

    let retHTML = "";

    const epub = await EPub.createAsync("files/" + bookName + ".epub")
    epub.flow.forEach((ch)=> retHTML += ch.title ? `<a href="/read/`+ bookName + "/" + ch.id + `">` + ch.title + `</a><br>` : '');

    res.send(retHTML);

});

/**
 * get a specific chapter of a book
 * The chapter is rendered from the server
 */
app.get("/read/:bookName/:chapterId", async (req, res) => {
    
    const bookName = req.params.bookName;
    const chapterId = req.params.chapterId;

    const epub = await EPub.createAsync("files/" + bookName + ".epub")
    const chapter = await epub.getChapterAsync(chapterId);
    
    const chapterElement = parse(chapter);

    const images = chapterElement.getElementsByTagName('img');

    for(let i=0; i<images.length; i++) {
        const imgId = Object.values(epub.manifest).find(o => images[i].attrs.src.endsWith(o.href)).id;
        const [imageBuffer, mimeType] = await epub.getFileAsync(imgId);
        images[i].setAttribute("src", "data:" + mimeType + ";base64," + imageBuffer.toString('base64'));
    }
    
    res.send(chapterElement.innerHTML);
});

app.listen(3050, "localhost", () => {
    console.log("Server is running at http://localhost:3050");
});