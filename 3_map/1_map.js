//Using map method, print the capitilized form of the items in the array.

const texts = ["rofl", "lol", "omg", "ttyl"];

const caps = texts.map(function(t) {
    return t.toUpperCase();
});

console.log(texts);
console.log(caps);