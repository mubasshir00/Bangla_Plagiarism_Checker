// const { checkSimilarity } = require('./cosine_similarity');

// var string1 = "তুরস্কে ভূমিকম্পের ধ্বংসস্তূপে অনুসন্ধান ও উদ্ধারকাজ শুরু করেছে বাংলাদেশের সম্মিলিত উদ্ধারকারী দল। এরই মধ্যে তুরস্কের আদিয়ামান শহরে ১৭ বছরের এক কিশোরীকে জীবিত এবং তিনজনের মৃতদেহ উদ্ধারের কথা জানিয়েছে ফায়ার সার্ভিস অ্যান্ড সিভিল ডিফেন্স। আজ শুক্রবার রাতে ফায়ার সার্ভিস ও সিভিল ডিফেন্স থেকে পাঠানো এক বার্তায় এ তথ্য জানানো হয়েছে।";
// var string2 = "তুরস্কে ভূমিকম্পের ধ্বংসস্তূপে অনুসন্ধান ও উদ্ধারকাজ শুরু করেছে বাংলাদেশের সম্মিলিত উদ্ধারকারী দল। এরই মধ্যে তুরস্কের আদিয়ামান শহরে ১৭ বছরের";

// console.log(checkSimilarity(string1,string2));

const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const { connectDB } = require('./config/db');

var route = require('./routes/web');

dotenv.config();

connectDB();
var cors = require('cors');

const app = express();


app.use(cors('*'));
app.use(express.json());

app.use('/api', route);

// app.use(notFound);
// app.use(errorHandler);

const PORT = 3334;

app.listen(PORT, console.log(`Server running in mode on port ${PORT}`));
