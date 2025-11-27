const fs = require('fs');
const path = require('path');

const uploadDirectory = path.join(__dirname, '../uploads');

exports.uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  res.status(200).json({ message: 'File uploaded successfully', filename: req.file.originalname });
};

exports.downloadFile = (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(uploadDirectory, filename);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: 'File not found' });
  }

  res.download(filePath, filename, (err) => {
    if (err) {
      console.error('Error downloading file:', err);
      return res.status(500).json({ message: 'Error downloading file' });
    }
  });
};

exports.deleteFile = (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(uploadDirectory, filename);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: 'File not found' });
  }

  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error deleting file:', err);
      return res.status(500).json({ message: 'Error deleting file' });
    }

    res.status(200).json({ message: 'File deleted successfully' });
  });
};