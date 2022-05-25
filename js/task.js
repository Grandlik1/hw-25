'use strict'
function sumNum() {
    let x = 0
    const sum = (number) =>  x += number ;
    return sum;
}
const closuresFun = sumNum()
console.log(closuresFun(3))
console.log(closuresFun(4))
console.log(closuresFun(5))
