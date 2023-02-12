const express = require('express');
const router = express.Router();
const GenerateSimilarityController = require('../controller/generate_similarity');
router.post(
  '/generate_result',
  GenerateSimilarityController.GenerateSimilarity
);
module.exports = router;
