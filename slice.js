let fullName = 'AbuMdNayeemKhan';
let nickName = fullName.slice(5, 11); // take my nick name from full name
console.log(nickName);
const para = "I am a good person. I like eating.";
console.log(para.split(' ')); // devide every word
console.log(para.split()); // create an array
console.log(para.split('')); // create an array by using every single word to a chareeckter
console.log(para.split('a')); // devide by a 
let cousings = 'Nayeem, Zioun, Tisha, Rafi, Rohan, Sohan';
console.log(cousings.split(','));
let myArray = ['Nayeem', 'Zioun', 'Tisha', 'Rafi', 'Rohan', 'Sohan'];
let joinArray = myArray.join('|');
console.log(joinArray);