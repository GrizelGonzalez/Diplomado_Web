const reducer = (accumulator, currentValue) => accumulator + currentValue; // array function

const sum = (...params) => {
    let flattened = params.flat(Infinity);
    return flattened.reduce(reducer); // reduce need it a callback (an anonymous function or array function or named function)
}

console.log(sum(8, 2, [5,5]));


