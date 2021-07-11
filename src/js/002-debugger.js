function randomNumberInARange(min, max){
    return Math.round(Math.random() * (max - min) + min)
}

function tripeNumber(number){
    return number*3
}

function sumNumbers(num1, num2){
    debugger
    return num1 + num2
}

function addNumbersSeveralTimes(number, nTimes){
    let sum = 0
    for(let i = 0; i < nTimes; i++){
        sum = sum + number
    }
    console.log("La suma final es: " + sum)
}

console.log("--------------------- DEBUGGER SUM -----------------")
const sum = sumNumbers(randomNumberInARange(10, 50), 5)
console.log("La suma de los números es: " + sum)
console.log("--------------------- DEBUGGER FOR -----------------")
addNumbersSeveralTimes(5, 10)