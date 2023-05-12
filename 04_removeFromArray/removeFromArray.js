let removeFromArray = (arr, ...args) => {
    return arr.filter((item) => {
        return !args.includes(item)
    })
}

console.log(removeFromArray([1,2,3], 1, 2));
// Do not edit below this line
module.exports = removeFromArray;
