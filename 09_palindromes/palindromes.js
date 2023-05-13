const palindromes = function (string) {
    let splitString = string.toLowerCase().replace(/[^a-z]/g,"").split("");
    return splitString.join("") == splitString.reverse().join("");
};
console.log(palindromes("ZZZZ car, a man, a maracaz."));
// Do not edit below this line
module.exports = palindromes;
