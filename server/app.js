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
    json["cover"] = coverData.toString('base64');
    json["mimeType"] = mimeType;
    return json;
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
        else if (qType === "trending") 
            resolve(DbService.getTrendingBooks(qArg));
        else if (qType === "editor") 
            resolve(DbService.getEditorsPickBooks(qArg));
        else if (qType === "search") 
            resolve(DbService.getLikeBooks(qArg));
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

    try {
        let books = await getBookList(qType, qArg); 
        for (const book of books) {
            const json = await getBookData(book);
            retJson["books"].push(json);
        }
        return res.status(200).send(retJson);    
        
    } catch (error) {
        return res.status(404).send('invalid request');
    }
    
});

/**
 * get list of chapters of a book
 * list sent as json
 * all chapters including no title chapters
 */
app.get("/read/:bookName", async (req, res) => {
    // For CORS error
    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials" : true 
    });

    const bookName = req.params.bookName;
    try {
        const epub = await EPub.createAsync("files/" + bookName + ".epub");
    
        // let retHTML = "";
        // epub.flow.forEach((ch)=> retHTML += `<a href="/read/`+ bookName + "/" + ch.id + `">` + (ch.title ? ch.title : '-') + `</a><br>`);

        return res.status(200).send({'chapters' : epub.flow}); // all chapter including whose without title    

    } catch (error) {
        return res.status(404).send('Resource not found');
    }
    
});

/**
 * get a specific chapter of a book
 * replace all img tag sources
 * get stylesheet file
 * send as string
 */
app.get("/read/:bookName/:chapterId", async (req, res) => {
    // For CORS error
    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials" : true 
    });


    const bookName = req.params.bookName;
    const chapterId = req.params.chapterId;
    try {
        const epub = await EPub.createAsync("files/" + bookName + ".epub");
        // get style as string from all the css files in the epub
    
        let stylesheet = '';
        const styles = Object.values(epub.manifest).filter(o => o["media-type"] === 'text/css');
        for(let i=0; i<styles.length; i++){
            const [cssBuffer, mimeType] = await epub.getFileAsync(styles[i].id);
            stylesheet += cssBuffer.toString('utf-8');
        }

        // get chapter from epub and parse
        const chapter = await epub.getChapterAsync(chapterId);
        const chapterElement = parse(chapter);

        // replace all the image tag src with actual base64 buffer
        const images = chapterElement.getElementsByTagName('img');
        for(let i=0; i<images.length; i++) {
            const imgId = Object.values(epub.manifest).find(o => images[i].attrs.src.endsWith(o.href)).id;
            const [imageBuffer, mimeType] = await epub.getFileAsync(imgId);
            images[i].setAttribute("src", "data:" + mimeType + ";base64," + imageBuffer.toString('base64'));
        }

        return res.status(200).send({'chapter' : chapterElement.innerHTML, 'style' : stylesheet});

    } catch (error) {
        return res.status(404).send('Resource not found');
    }
    
});

app.listen(3050, "localhost", () => {
    console.log("Server is running at http://localhost:3050");
});