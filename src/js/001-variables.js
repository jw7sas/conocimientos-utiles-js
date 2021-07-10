// const
// let
// var

function printIncrement_let(increment){
    let number = 10
    if(true){
        let number = 10 + increment // Variable va a depender de su alcance que es a un SCOPE mas reducido
        console.log(number)
    }
    console.log(number)
    // for(let i = 0)
    // SCOPE reducido
}

function printIncrement_var(increment){
    var number = 10
    if(true){
        var number = 10 + increment // SCOPE global
        console.log(number)
    }
    console.log(number)
    // global
}

var global_var = "global_Var"
let global_let = "global_let"
const global_const = "global_const"
function globalVariable(){
    console.log(this)
    console.log(this.global_var)
    console.log(this.global_let)
    console.log(this.global_const)
}

function variableConst(increment){
    const movie = {
        title: "Interestelar",
        category: "ciencia ficción -  aventura",
    }
    movie["recommended"] = true
    console.log(movie)
    const number = 10
    console.log(number)
    number = number + increment
    console.log(number)
    // Objetos
    // HTML DOM
    // parametros 
}

console.log(" ----------------- variable LET -----------------")
printIncrement_let(5)
console.log(" ----------------- variable VAR -----------------")
printIncrement_var(5)
console.log(" ----------------- global variables -----------------")
globalVariable()
console.log(" ----------------- variable CONST -----------------")
variableConst(5)