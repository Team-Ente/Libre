import { EPub } from 'epub2';
import { parse } from "node-html-parser";

/**
 * @query {book_name} book
 * @query {chapter_id} chapter
 * get list of chapters of a book
 * list sent as json
 * all chapters including no title chapters
 */
export const getContents = async (req, res) => {

  // check for user authentication
  if(!req.user) {
    console.log("Not Authorized");
    return res.status(401).json({error: "User unauthenticated"});
  }

  const book = req.query.book;
  if(! req.query.chapter){  // book contents
    try {
      const epub = await EPub.createAsync("files/" + book + ".epub");
  
      // doesn't work for some reason
      // let retHTML = "";
      // epub.flow.forEach((ch)=> retHTML += `<a href="/read/`+ bookName + "/" + ch.id + `">` + (ch.title ? ch.title : '-') + `</a><br>`);
      // return res.send(retHTML);


      return res.status(200).json({
        'contents' : epub.toc,  // for sidebar navigation
        'pages': epub.flow  // for page navigation
      });  

    } catch (error) {
      return res.status(404).json({error: error});
    }
  } else { // chapter contents
    
    const chapter = req.query.chapter;
    try {
      const epub = await EPub.createAsync("files/" + book + ".epub");
      // get style as string from all the css files in the epub
  
      let stylesheet = '';
      const styles = Object.values(epub.manifest).filter(o => o["media-type"] === 'text/css');
      for(let i=0; i<styles.length; i++){
          const [cssBuffer, mimeType] = await epub.getFileAsync(styles[i].id);
          stylesheet += cssBuffer.toString('utf-8');
      }

      // get chapter from epub and parse
      const chapterString = await epub.getChapterAsync(chapter);
      const chapterElement = parse(chapterString);

      // replace all the image tag src with actual base64 buffer
      const images = chapterElement.getElementsByTagName('img');
      for(let i=0; i<images.length; i++) {
          const imgId = Object.values(epub.manifest).find(o => images[i].attrs.src.endsWith(o.href)).id;
          const [imageBuffer, mimeType] = await epub.getFileAsync(imgId);
          images[i].setAttribute("src", "data:" + mimeType + ";base64," + imageBuffer.toString('base64'));
      }

      // replace all anchor tags with text
      const links = chapterElement.getElementsByTagName('a');
      for(let i=0; i<links.length; i++) {
        const text = links[i].innerHTML;
        links[i].replaceWith(text);
      }

      const retHTML = `
      <!DOCTYPE html>
        <head>
          <style>
            ${stylesheet}
          </style>
        </head>
        <body>
          ${chapterElement.innerHTML}
        </body>
      </html>
      `;

      return res.status(200).json({'chapter' : retHTML });
      
      // return res.status(200).send(retHTML); // for debugging

    } catch (error) {
        return res.status(404).json({error: "Resource not found"});
    }

  }
  
};
