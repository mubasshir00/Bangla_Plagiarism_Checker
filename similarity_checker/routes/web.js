const express = require('express');
const router = express.Router();
const GenerateSimilarityController = require('../controller/generate_similarity');
router.post(
  '/generate_result',
  GenerateSimilarityController.GenerateSimilarity
);
router.post('/jaccer_result',GenerateSimilarityController.GenerateJaccerdSimilarity)
module.exports = router;
