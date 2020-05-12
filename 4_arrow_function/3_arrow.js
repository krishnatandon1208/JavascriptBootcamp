//WAP to describe what implicit return is and how we can implement the same

const nums = [1, 2, 3, 4, 5];

const doubles = nums.map(function(t) {
    return t * t;
});
console.log(doubles);

const triples = nums.map(t => {
    return t * t * t;
});
console.log(triples);

const quads = nums.map(t => (Math.pow(t, 4)));
console.log(quads);