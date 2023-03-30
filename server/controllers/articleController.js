const axios = require('axios');
const fs = require('fs');
const PdfParse = require('pdf-parse');
const PDFExtract = require('pdf.js-extract').PDFExtract;
const pdfExtract = new PDFExtract();
const PostArticle = async (req, res) => {
  try {
    console.log('req.body', req.body);

    const url = `http://localhost:3334/api/generate_result`;

    const headers = {
      'Content-Type': 'application/json',
    };
    let similarity_res = [];
    let bertsimilarity_res = [];

    // console.log({ url });
    const similarity = await axios
      .post(url, {
        article: req.body.article,
        category: req.body.category ? req.body.category : 'sports',
      })
      .then(res => {
        console.log(res.data);
        similarity_res = res.data.similarity_result;
        bertsimilarity_res = res.data.bertSimilarity_result;
      });

    // console.log({ similarity });
    console.log({ bertsimilarity_res });

    return res.status(200).json({
      status: true,
      status_message: 'Successssssss',
      result: similarity_res,
      bert_result : bertsimilarity_res
    });
  } catch (e) {
    console.log({ e });
  }
};

const fileUpload =async (req, res) => {
  try {
    const newPath = __dirname + "/files/";
    const file = req.files.file;
    const fileName = file.name;

    file.mv(`${newPath}${fileName}`,(err)=>{
      if(err){
        console.log({err});
      } else {
        console.log('FIle Uploaded');
      }
    })
    
  
    let readFile = fs.readFileSync(__dirname + `/files/${fileName}`);
    let  pdfExtract = await  PdfParse(readFile);
    console.log(pdfExtract.text);


    const url = `http://localhost:3334/api/generate_result`;

    const headers = {
      'Content-Type': 'application/json',
    };
    let similarity_res = [];
    let bertsimilarity_res = [] ;
    // console.log({ url });
    const similarity = await axios
      .post(url, {
        article: JSON.stringify(pdfExtract.text),
        category: req.body.category ? req.body.category : 'sports',
      })
      .then(res => {
        console.log({res});
        similarity_res = res.data.similarity_result;
        bertsimilarity_res = res.data.bert_similarity_result;
      });

      return res.status(200).json({
        status: true,
        status_message: 'Successssss',
        result: similarity_res,
      });
   
  } catch (e) {
    console.log({ e });
  }
};

module.exports = {
  PostArticle: PostArticle,
  fileUpload: fileUpload,
};
