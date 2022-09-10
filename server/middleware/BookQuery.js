import { EPub } from 'epub2';
import Jimp from 'jimp';

import  {
    getAllBooks, 
    getRecentBooks, 
    getReadingBooks, 
    getTrendingBooks, 
    getEditorsPickBooks, 
    getLikeBooks, 
    getCompletedBooks, 
    getBucketBooks
} from "../controllers/Books.js";

/**
 * 
 * @param {book_table_entry} book 
 * @returns book metadata and cover
 * Gets entry from database table and opens the file to get metadata.
 * Opens Book Cover file, compresses and sends as base64 encoded string
 */
async function getBookData(book) {
  const epub = await EPub.createAsync("files/" + book.title + ".epub")
  const [coverData, mimeType] = await epub.getFileAsync(epub.metadata.cover);

  const img = await Jimp.read(coverData);
  const compressedCoverData = await img.resize(250,360).quality(50).getBufferAsync(mimeType);

  var json = epub.metadata;
  json["cover"] = compressedCoverData.toString('base64');
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
async function getBookList(qType, count, genre) {
  const books = await new Promise((resolve, reject) => {
      if (qType === "all") 
          resolve(getAllBooks(count, genre));
      else if (qType === "recent") 
          resolve(getRecentBooks(count));
      else if (qType === "reading") 
          resolve(getReadingBooks(count));
      else if (qType === "trending") 
          resolve(getTrendingBooks(count));
      else if (qType === "editor") 
          resolve(getEditorsPickBooks(count));
      else if (qType === "search") 
          resolve(getLikeBooks(count, genre));
      else if (qType === "completed") 
          resolve(getCompletedBooks(count));
      else if (qType === "bucket") 
          resolve(getBucketBooks(count));
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
  // For CORS error
  res.set({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials" : true 
  });

  const qType = req.params.qType;  // The type of query (list criteria)
  const count = req.query.count ? req.query.count : '10';  // The number of results returned
  const genre = req.query.genre ? req.query.genre.split(',') : []; // advanced search by filtering genre

  // Initialize empty return JSON
  let retJson = {
      "books": []
  };

  try {
      let books = await getBookList(qType, count, genre); 
      for (const book of books) {
          const json = await getBookData(book);
          retJson["books"].push(json);
      }
      return res.status(200).send(retJson);    
      
  } catch (error) {
      return res.status(404).send('invalid request');
  }
  
};
