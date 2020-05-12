//From the given array of strings, return another array such that all the string char are separated by dots.

const stringList = ["asap", "ttly", "omg", "rofl"];

const newStringList = stringList.map(function(s) {
    return s.toUpperCase().split("").join(".");
});

console.log(newStringList);