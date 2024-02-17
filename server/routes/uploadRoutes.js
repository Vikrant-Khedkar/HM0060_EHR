const express = require("express");
const router = express.Router();
const multer = require("multer")
const { uploadFile } = require("../controllers/uploadController");

const upload = multer({ dest: "./uploads/" });

router.post("/upload", upload.single("file"), (req, res) => {
    console.log("formData : ",req.body.formdata)
    uploadFile(req.file, req.body.filename, res);
  });
  
module.exports = router;
