let upperText = "Bangla";
let lowerText = "bangla";

if(upperText === lowerText){
    console.log("they are same");
} else {
    console.log("they are not  same");
}

const school = 'Mohesh Pur High School';

console.log(school); //normal print
console.log(school.toUpperCase()); //convert to upper case
console.log(school.toLowerCase()); //convert to lower case

const drink = 'water';
const drink2 = '   water ';
if(drink.trim() === drink2.trim()){  //convert to without andy extra space
    console.log("both are same");
} else {
    console.log("both are not same");
}