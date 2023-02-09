const express = require('express');
const router = express.Router();
const ArticleController = require('../controllers/articleController');
const TrainedArticle = require('../controllers/trainedArticleController');

router.post('/post-article', ArticleController.PostArticle);
router.post('/trained_article', TrainedArticle.postTrainedArticle);

module.exports = router;