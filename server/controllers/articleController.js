const axios = require('axios');

const PostArticle = async (req, res) => {
  try {
    console.log('req.body', req.body);

    const url = `http://localhost:3334/api/generate_result`;

    const headers = {
      'Content-Type': 'application/json',
    };
    let similarity_res = []
    // console.log({ url });
    const similarity = await axios
      .post(url, {
        article: req.body.article,
        category: req.body.category ? req.body.category : 'CoronaVirus',
      })
      .then(res => {
        console.log(res.data);
        similarity_res = res.data.similarity_result;
      });

    // console.log({ similarity });

    return res.status(200).json({
      status: true,
      status_message: 'Success',
      result: similarity_res,
    });
  } catch (e) {
    console.log({ e });
  }
};

module.exports = {
  PostArticle: PostArticle,
};
