const path = require('path');
const express = require('express');
const fileupload = require('express-fileupload');

const dotenv = require('dotenv');
const morgan = require('morgan');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const { connectDB } = require('./config/db');
const bodyParser = require('body-parser');

var route = require('./routes/web');

dotenv.config();

connectDB();
var cors = require('cors');

const app = express();

// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }
app.use(cors('*'))
app.use(express.json());
app.use(fileupload());
app.use(express.static('files'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api',route)

// app.use(notFound);
// app.use(errorHandler);

const PORT =  3333;

app.listen(
  PORT,
  console.log(`Server running in mode on port ${PORT}`)
);
