const { TrainedData } = require("../model/trained_data_model");

const postTrainedArticle = async (req,res) =>{
    try{
        console.log(req.body);
        const new_trained_article = new TrainedData(req.body);
        const create_trained_data = await new_trained_article.save();

        return res.status(200).json({
          status: true,
          status_message: 'Trained Data Added',
        });

    } catch(e){
        console.log({e});
    }
}

module.exports = {
  postTrainedArticle: postTrainedArticle,
};