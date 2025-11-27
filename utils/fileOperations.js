const fs = require('fs');

const createFile = (filePath, content) => {
  fs.writeFileSync(filePath, content);
};

const readFile = (filePath) => {
  return fs.readFileSync(filePath, 'utf-8');
};

module.exports = {
  createFile,
  readFile,
};