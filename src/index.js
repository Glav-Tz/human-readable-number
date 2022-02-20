module.exports = function toReadable (number) {
const arr20 = [" ", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const arr90 = [" ", " ", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

let copybook = ""

if (number === 0) {
    copybook = "zero"
}

if (number > 0 && number < 20) {
    copybook = (arr20[number]);
}

if (number >= 20 && number < 100) {    
    аrrNum = (number.toString().split('').map(Number))
    const firstMeaning = (аrrNum[0]);
    const secondMeaning = (аrrNum[1]);    
    copybook = `${arr90[firstMeaning]} ${arr20[secondMeaning]}`;
    copybook = copybook.trim()    
}

if (number >= 100 && number < 1000) {
    аrrNum = (number.toString().split('').map(Number));
    const strDozens = number.toString().slice(-2);
    const numDozens = Number(strDozens);
    const firstMeaning = (аrrNum[0]);    
    
        if  (numDozens > 0 && numDozens < 20) {
                 
            copybook = `${arr20[firstMeaning]} hundred ${arr20[numDozens]}`
            copybook = copybook.trim() 
            
        } else {
            const secondMeaning = (аrrNum[1]);
            const thirdMeaning = (аrrNum[2]);
            copybook = `${arr20[firstMeaning]} hundred ${arr90[secondMeaning]} ${arr20[thirdMeaning]}`;
            copybook = copybook.trim()
        }       
    }
   return copybook;
}
