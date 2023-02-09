const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const { connectDB } = require('./config/db');

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

app.use('/api',route)

// app.use(notFound);
// app.use(errorHandler);

const PORT =  3333;

app.listen(
  PORT,
  console.log(`Server running in mode on port ${PORT}`)
);
