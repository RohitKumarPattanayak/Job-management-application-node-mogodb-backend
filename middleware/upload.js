import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";
const imageStorage = multer.diskStorage({
  destination: "public/files",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + uuidv4() + path.extname(file.originalname));
  },
});

export const imageUpload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 10000000, // 10000000 Bytes = 10 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(pdf)$/)) {
      // upload only pdf
      return cb(new Error("Please upload a PDF file of size 10mb or less"));
    }
    cb(undefined, true);
  },
});
