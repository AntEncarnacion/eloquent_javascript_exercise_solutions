let arr = [[2, 5, 1, 2], [true, "asdaf", 1243], [false, "asdasd", 1, 3, 2, 1]];

let flattened = arr.reduce((a, b) => a.concat(b));

console.log(flattened);