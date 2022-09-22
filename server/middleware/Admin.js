import multer from "multer";

const UPLOADS_FOLDER = "./files/";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOADS_FOLDER)
  },
  filename: function (req, file, cb) {
    // add to database and set filename, pass filename through req
    cb(null, file.originalname)
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