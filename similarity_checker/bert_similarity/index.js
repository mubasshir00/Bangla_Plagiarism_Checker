const tf = require('@tensorflow/tfjs-node');
const transformers = require('@tensorflow-models/universal-sentence-encoder');

// Load the Bangla BERT model
async function loadModel() {
  const model = await transformers.load();
  return model;
}

const bertSimilarity = async (text1, text2) => {
  try {
    const similarity = await textSimilarity(text1,text2);
    return similarity
  } catch (e) {
    console.log({ e });
  }
};

async function textSimilarity(text1, text2) {
  const model = await loadModel();

  // Embed the texts using the model
  const embeddings = await model.embed([text1, text2]);

  // Calculate the cosine similarity between the embeddings
  const similarity = await tf.tidy(
    () => tf.matMul(embeddings, embeddings.transpose()).arraySync()[0][1]
  );

  return Math.random(similarity * 100);
}

module.exports ={
  bertSimilarity:bertSimilarity
}