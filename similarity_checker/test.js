var jaccard = require('jaccard-similarity-sentences');

var sentence1 = 'This is one sentence.';
var sentence2 = 'This is another sentence.';

var measure = jaccard.jaccardSimilarity(sentence1, sentence2);

console.log(measure);
