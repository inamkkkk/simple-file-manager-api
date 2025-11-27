const express = require('express');
const fileController = require('../controllers/fileController');
const multer = require('multer');
const path = require('path');

const uploadDirectory = path.join(__dirname, '../uploads');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.post('/upload', upload.single('file'), fileController.uploadFile);
router.get('/download/:filename', fileController.downloadFile);
router.delete('/delete/:filename', fileController.deleteFile);

module.exports = router;