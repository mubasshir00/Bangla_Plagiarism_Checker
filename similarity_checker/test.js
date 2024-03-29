const tf = require('@tensorflow/tfjs-node');
const transformers = require('@tensorflow-models/universal-sentence-encoder');

// Load the Bangla BERT model
async function loadModel() {
  const model = await transformers.load();
  return model;
}

// Define a function to calculate text similarity
async function textSimilarity(text1, text2) {
  const model = await loadModel();

  // Embed the texts using the model
  const embeddings = await model.embed([text1, text2]);

  // Calculate the cosine similarity between the embeddings
  const similarity = await tf.tidy(
    () => tf.matMul(embeddings, embeddings.transpose()).arraySync()[0][1]
  );

  return similarity;
}

// Example usage
const text1 = 'আমার  বাংলা';
const text2 = 'তোমার সোনার বাংলা';
textSimilarity(text1, text2).then(similarity => console.log(similarity));
