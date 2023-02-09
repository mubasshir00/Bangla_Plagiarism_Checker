const PostArticle = (req, res) => {
  try {
    console.log(req.body);
   return res.status(200).json({
     status: true,
     status_message: 'The',
   });
  } catch (e) {
    console.log({ e });
  }
};

module.exports={
    PostArticle:PostArticle
}