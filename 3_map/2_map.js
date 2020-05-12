//Given an array of numbers, check if the number is even or odd. Also, print the number using the object.

const numberList = [12, 13, 14, 15, 16];

const newNumberList = numberList.map(function(n) {
    return {
        num: n,
        isEven : n % 2 === 0
    }
});

console.log(numberList);
console.log(newNumberList);