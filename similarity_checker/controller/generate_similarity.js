const { TrainedData } = require('../model/trained_data_model');
const {checkSimilarity} = require('./../cosine_similarity/index')
const GenerateSimilarity = async (req, res) => {
  try {
    const find_related_article = await TrainedData.find({category:req.body.category});
    // console.log({ find_related_article });
    let similarity_result = []

    let given_article = req.body.article;
    let givenArticleToSentence = [];
    let tempIndex = 0;
    let tempIndexArray = [];
    tempIndexArray.push(0);
    for(let i=0;i<given_article.length;i++){
      if (given_article[i] == '।') {
        tempIndexArray.push(i);
      }
    }
    for(let j=0;j<tempIndexArray.length-1;j++){
      givenArticleToSentence.push(
        given_article.substring(tempIndexArray[j], tempIndexArray[j + 1])
      );
    }

    for (let i = 0; i < find_related_article.length; i++) {
      for(let j=0;j<givenArticleToSentence.length;j++){
        
        let checkSimilarity_res = await checkSimilarity(
          JSON.stringify(find_related_article[i].article),
          JSON.stringify(givenArticleToSentence[j])
        );
        let new_obj = {
          givenSentence: givenArticleToSentence[j],
          article: find_related_article[i].article,
          Source: find_related_article[i].Source,
          Source_link: find_related_article[i].Source_link,
          similarity_percentage: checkSimilarity_res,
        };
        similarity_result.push(new_obj);
      }
    }
    // for (let i = 0; i < find_related_article.length; i++) {
    //   let checkSimilarity_res = await checkSimilarity(
    //     JSON.stringify(find_related_article[i].article),
    //     JSON.stringify(req.body.article)
    //   );
    //   let new_obj = {
    //     article: find_related_article[i].article,
    //     Source: find_related_article[i].Source,
    //     Source_link: find_related_article[i].Source_link,
    //     similarity_percentage: checkSimilarity_res,
    //   };
    //   similarity_result.push(new_obj);
    // }
    // console.log({ similarity_result });
    return res.status(200).json({
      status: true,
      similarity_result: similarity_result,
      orginalText: given_article,
    });
  } catch (e) {
    console.log({ e });
  }
};

module.exports = {
  GenerateSimilarity: GenerateSimilarity,
};
