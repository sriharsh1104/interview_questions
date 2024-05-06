console.log(0.1 + 0.2);
console.log((0.1 + 0.2) == 0.3);

function equalornot(number1,number2) {
    return Math.abs(number1 - number2) < Number.EPSILON;
}
console.log(equalornot(0.1 + 0.2 , 0.3))