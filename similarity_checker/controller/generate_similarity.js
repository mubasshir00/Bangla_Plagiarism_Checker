const { TrainedData } = require('../model/trained_data_model');
const {checkSimilarity} = require('./../cosine_similarity/index')
const GenerateSimilarity = async (req, res) => {
  try {
    console.log('req.body', req.body);
    const find_related_article = await TrainedData.find({category:req.body.category});
    // console.log({ find_related_article });
    let similarity_result = []
    
    for (let i = 0; i < find_related_article.length; i++) {
      let checkSimilarity_res = await checkSimilarity(
        JSON.stringify(find_related_article[i].article),
        JSON.stringify(req.body.article)
      );
      let new_obj = {
        article: find_related_article[i].article,
        Source: find_related_article[i].Source,
        Source_link: find_related_article[i].Source_link,
        similarity_percentage: checkSimilarity_res,
      };
      similarity_result.push(new_obj);
    }
    // console.log({ similarity_result });
    return res.status(200).json({
      status: true,
      similarity_result: similarity_result,
    });
  } catch (e) {
    console.log({ e });
  }
};

module.exports = {
  GenerateSimilarity: GenerateSimilarity,
};
