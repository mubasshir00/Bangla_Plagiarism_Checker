let source = ['রহমান', 'শামসুজ্জামানের', 'প্রতিবাদ'];
let target = ['সাংবাদিক', 'সাংবাদিক', 'রহমান'];
const sourceSet = new Set();
source.forEach(element => {
  sourceSet.add(element);
});

const targetSet = new Set();
target.forEach(element => {
  targetSet.add(element);
});

const intersection = new Set(
  [...sourceSet].filter(element => targetSet.has(element))
);

const union = new Set([...sourceSet, ...targetSet]);
const similarity = intersection.size / union.size;
console.log(similarity);
