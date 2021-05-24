const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');

connectDB();

const app = express();
const port = 5000;
const apiRouter = require('./db');

app.use(express.json());
app.use('/api', apiRouter);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});