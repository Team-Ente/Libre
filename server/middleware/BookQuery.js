
import editJsonFile from 'edit-json-file';
import {
  getAllBooks, getBookAuthors, getBookGenre, getBooksBasedOnAuthor, getBooksBasedOnISBN, getBooksBasedOnTitle, getBooksBasedOnTopic, getBucketBooks, getCompletedBooks, getEditorsPickBooks,
  getLikeBooks, getReadingBooks, getRecentBooks, getTrendingBooks
} from "../controllers/Books.js";

/**
 * 
 * @param {book_table_entry} book 
 * @returns book metadata and cover
 * Gets entry from database table and opens the file to get metadata.
 * Opens Book Cover file, compresses and sends as base64 encoded string
 */
async function getBookData(book) {

  let file = editJsonFile("files/bookInfo.json");

  // get book info from database
  book.genre = await getBookGenre(book.id);
  book.authors = await getBookAuthors(book.id);

  book.metadata = file.get(book.title);
  if(!book.metadata) console.log(book.title);
  return book;
}

/**
* 
* @param {query_type} qType 
* @param {query_argument} qArg 
* @returns list of books matching criteria
* Get a list of books following query_type. If searching by string query_argument is a string
*/
async function getBookList(handle, qType, count, genre) {
  const books = await new Promise((resolve, reject) => {
    if (qType === "all") 
      resolve(getAllBooks(count, genre));
    else if (qType === "reading") 
      resolve(getReadingBooks(handle, count));
    else if (qType === "completed") 
      resolve(getCompletedBooks(handle, count));
    else if (qType === "bucket") 
      resolve(getBucketBooks(handle, count));
    else if (qType === "recent") 
      resolve(getRecentBooks(count));
    else if (qType === "trending") 
      resolve(getTrendingBooks(count));
    else if (qType === "editor") 
      resolve(getEditorsPickBooks(count));
    else if (qType === "search") 
      resolve(getLikeBooks(count, genre));
    else 
      reject(new Error("invalid request"));
  });
  return books;
}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns json containing book list
 */
export const query = async (req, res) => {

  if(!req.user) {
    console.log("Not Authorized");
    return res.status(401).json({error: "User unauthenticated"});
  }

  const handle = req.user.handle;
  const qType = req.params.qType;  // The type of query (list criteria)
  const count = req.query.count ? req.query.count : '10';  // The number of results returned
  const genre = req.query.genre ? req.query.genre.split(',') : []; // advanced search by filtering genre

  // Initialize empty return JSON
  let retJson = {
      "books": []
  };

  try {

      let books = await getBookList(handle, qType, count, genre); 
      for (const book of books) {
          const json = await getBookData(book);
          retJson["books"].push(json);
      }
      return res.status(200).send(retJson);    
      
  } catch (error) {
    console.log(error);
    return res.status(404).json({error: error});
  }
  
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns json containing book list
 */
 export const search = async (req, res) => {

  const keyword = req.query.query;  // The type of query (list criteria)
 
  // Initialize empty return JSON
  let retJson = {
      "books": []
  };

  try {

      let authorMatched = await getBooksBasedOnAuthor(keyword);
      let titleMatched = await getBooksBasedOnTitle(keyword);
      let isbnMatched = await getBooksBasedOnISBN(keyword);
      let topicMatched = await getBooksBasedOnTopic(keyword);

      var books = [...new Set([...authorMatched, ...titleMatched, ...isbnMatched, ...topicMatched])];
      
      // use map to store book id and index

      // var isChecked = new map(); // not working in nodejs

      // for(const book of books) {
      //   if(!isChecked.has(book.id)) {
      //     const json = await getBookData(book);
      //     retJson["books"].push(json);
      //     isChecked.set(book.id, true);
      //   }
      // }

      if(books.length === 0) {
        console.log("No books found");
      }
      

      for (const book of authorMatched) {
        console.log("Author Matched");
        console.log(book);
        //const json = await getBookData(book);
        //retJson["books"].push(json);
      }

      for (const book of titleMatched) {
        console.log("Title Matched");
        console.log(book);
        //const json = await getBookData(book);
        //retJson["books"].push(json);
      }

      for (const book of isbnMatched) {
        console.log("ISBN Matched");
        console.log(book);
        //const json = await getBookData(book);
        //retJson["books"].push(json);
      }
      
      for (const book of topicMatched) {
        console.log("Topic Matched");
        console.log(book);
        //const json = await getBookData(book);
        //retJson["books"].push(json);
      }

      for (const book of books) {

        const json = await getBookData(book);
        retJson["books"].push(json);
      }

      return res.status(200).send(retJson);    
      
  } catch (error) {
    console.log(error);
    return res.status(404).json({error: error});
  }
  
};
