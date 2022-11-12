import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { addNewBook } from "../controllers/Books.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const UPLOADS_FOLDER = `${__dirname}/../files`;

export const uploadBook = async (req, res) => {
    if(req.files === null) {
        return res.status(400).json({ msg: "No file uploaded" });
    }


    // check for duplicate in database
    // const response = await addNewBook(req.body);
    // console.log(response);

    const file = req.files.ebook;
    file.mv(`${UPLOADS_FOLDER}/${file.name}`, err => {
        if(err) {
            console.log(err);
            return res.status(500).send(err);
        }

        res.json("success");
    })
}
