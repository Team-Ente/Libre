import { EPub } from 'epub2';
import parse from "node-html-parser";

/**
 * get list of chapters of a book
 * list sent as json
 * all chapters including no title chapters
 */
export const getContents = async (req, res) => {
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

      return res.status(200).json({'contents' : epub.flow}); // all chapter including whose without title    

  } catch (error) {
      return res.status(404).json({error: 'Resource not found'});
  }
  
};

/**
* get a specific chapter of a book
* replace all img tag sources
* get stylesheet file
* send as string
*/
export const readChapter = async (req, res) => {
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

      return res.status(200).json({'chapter' : chapterElement.innerHTML, 'style' : stylesheet});

  } catch (error) {
      return res.status(404).json({error: 'Resource not found'});
  }
  
};