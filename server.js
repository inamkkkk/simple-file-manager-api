const express = require('express');
const fileRoutes = require('./routes/fileRoutes');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', fileRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});