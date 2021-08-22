function add(a, b) {
    let result = a + b;
    return result;
}

function subtract(a, b){
    let result = a - b;
    return result;
}

function multiply(a, b){
    let result = a * b;
    return result;
}

function divide(a, b){
    let result = a / b;
    return result;
}

function increment(n){
    let result = ++n
    return result;
}

function decrement(n){
    let result = --n;
    return result;
}

function makeInt(string){
   let result = parseInt(string, 10);
   return result;
}

function preserveDecimal(string){
    let result = parseFloat(string);
    return result;
}