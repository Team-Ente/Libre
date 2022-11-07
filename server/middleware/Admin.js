import multer from "multer";

const UPLOADS_FOLDER = "./files/";



const addBook = async (bookInfo, book) => {

  console.log(bookInfo);

  console.log(book);
  // const epub = await EPub.createAsync("files/" + book.originalname + ".epub")  // Expensive (>500ms / book)
  
  // const [coverData, mimeType] = await epub.getFileAsync(epub.metadata.cover);

  // const img = await Jimp.read(coverData);  // Expensive (>200ms / book)
  // const compressedCoverData = await img.resize(250,360).quality(80).getBufferAsync(mimeType); // Expensive (>500ms / book)

  // var json = epub.metadata;
  // json["cover"] = compressedCoverData.toString('base64');
  // json["mimeType"] = mimeType;

  // // append to bookInfo object
  // file.set(book.title,json);

  // file.save();

  return "0";
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOADS_FOLDER)
  },
  filename: async function (req, file, cb) {
    // add to database and set filename, pass filename through req
    const id = await addBook(req.body, file);
    cb(null, id)
  }
});

const upload = multer({
  dest: UPLOADS_FOLDER,
  limits: {
    fileSize: 209715200 // 200 MB
  },
  storage: storage,
  fileFilter: (req, file, cb) => {
    if(file.mimetype === 'application/epub+zip') {
      cb(null, true);
    } else {
      cb(new Error("Invalid File Format. Only Epub is accepted"), true);
    }
  }
}).single('ebook');

export const uploadBook = async (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      res.status(400).send(err.message);
    } else if (err) {
      // An unknown error occurred when uploading.
      res.status(400).send(err.message)
    }
    console.log("file upload successful");
    // update bookInfo.json file async
    res.send("Upload Successful");
  })
}