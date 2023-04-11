// let source = ['রহমান', 'শামসুজ্জামানের', 'প্রতিবাদ'];
// let target = ['সাংবাদিক', 'সাংবাদিক', 'রহমান'];
// const sourceSet = new Set();
// source.forEach(element => {
//   sourceSet.add(element);
// });

// const targetSet = new Set();
// target.forEach(element => {
//   targetSet.add(element);
// });

// const intersection = new Set(
//   [...sourceSet].filter(element => targetSet.has(element))
// );

// const union = new Set([...sourceSet, ...targetSet]);
// const similarity = intersection.size / union.size;
// console.log(similarity);

const jaccerdSimiarity = async (string1,string2) =>{
  try{
    let source = string1.split(' ');
    let target = string2.split(' ');
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
    return Math.round(similarity * 100);
  } catch(e){
    console.log({e});
  }
}
module.exports = {
  jaccerdSimiarity:jaccerdSimiarity
}