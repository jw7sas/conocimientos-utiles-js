// -----------------------------------------------------
// DATOS DE PRUEBA
// -----------------------------------------------------
const sale_1 = {
    id: 1,
    product: "Galleta Oreo",
    units: 3,
    price: 5000
}

const sale_2 = {
    id: 2,
    product: "Chocolatina Jumbo",
    units: 1,
    price: 3000
}

const minPrice = 10000

// -----------------------------------------------------
// funcion normal
// -----------------------------------------------------
function validateMinPrice_normal(sale){
    if((sale.price * sale.units) <= minPrice){
        return "DISPONIBLE"
    }
    return "NO DISPONIBLE"
}

// -----------------------------------------------------
// funcion normal en variable
// -----------------------------------------------------
const validateMinPrice_in_variable = function(sale){
    return ((sale.price * sale.units) <= minPrice) ? "DISPONIBLE" : "NO DISPONIBLE"
}
// -----------------------------------------------------
// arrow function - largo
// -----------------------------------------------------
const validateMinPrice_arrow_normal = sale => {
    // mas validaciones {}
    return ((sale.price * sale.units) <= minPrice) ? "DISPONIBLE" : "NO DISPONIBLE"
}
// -----------------------------------------------------
// arrow function
// -----------------------------------------------------
const validateMinPrice_arrow = sale => ((sale.price * sale.units) <= minPrice) ? "DISPONIBLE" : "NO DISPONIBLE"


// ****************************************
//  ######## validar funciones #########
// ****************************************
console.log(validateMinPrice_arrow(sale_1))
// ----------------------------------------------------- 
// verificar numero par o impar - arrow function
// -----------------------------------------------------
const checkNumberOddOrEven = number => (number % 2 == 0 ) ? "Par" : "Impar"
// ****************************************
//  ######## validar funcion par #########
// ****************************************
console.log(checkNumberOddOrEven(5))
console.log(checkNumberOddOrEven(4))


// ----------------------------------------------------- 
// operación de suma - arrow function
// -----------------------------------------------------
const sumNumbers = (num1, num2) => num1 + num2
// ****************************************
//  ######## validar funcion suma #########
// ****************************************
console.log(sumNumbers(4, 5))

// -----------------------------------------------------
// funciones para métodos de JS [reduce, map, filter]
// -----------------------------------------------------
const numbers = [4,5,6,7,8,9,10]
const getEvenNumbersInArray = numbers.filter(n => n % 2 == 0)
// *******************************************
//  ######## validar funcion filter #########
// *******************************************
console.log(getEvenNumbersInArray)
