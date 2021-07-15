// [ DESCRIPCIÓN ]
// [ Destructuración de objetos y arreglos ]
// es una expresión de JavaScript que permite 
// DESEMPACAR valores de arreglos o propiedades de objetos en DISTINTAS VARIABLES.

const asGeekBasicData = {
    name: "Asperos Geek",
    socialMedia: {
        facebook: "https://www.facebook.com/AsperosGeek/",
        instagram: "https://www.instagram.com/asperos_geek/",
        twitter: "https://twitter.com/AsperosG/",
    },
    dateOfBirth: "27-nov-2020"
} 

// -------------------------------------------------------------------------------------------
// Desestructuración Arreglos - Ejemplo 1
// -------------------------------------------------------------------------------------------
console.log("----------------- Destructurar Arreglo - Ejemplo 1 ----------------------")
const numbers = [5, 10, 7, 3]
console.log(numbers)
const [x,y,z] = numbers
console.log("x:" + x)
console.log("y:" + y)
console.log("z:" + z)

// -------------------------------------------------------------------------------------------
// Desestructuración Arreglos [spread syntax] - Ejemplo 2
// -------------------------------------------------------------------------------------------
console.log("----------------- Destructurar Arreglo [spread syntax]- Ejemplo 2 ----------------------")
const people_with_better_grades = ['Maria', 'Mario', 'Sonia', 'Pedro', 'Veronica']
console.log(people_with_better_grades)
// asignación
let first, second, others
[first, second, ...others] = people_with_better_grades 
console.log(first)
console.log(second)
console.log(others)

// -------------------------------------------------------------------------------------------
// Desestructuración Arreglos [función] - Ejemplo 3
// -------------------------------------------------------------------------------------------
console.log("----------------- Destructurar Arreglo [función] - Ejemplo 3 ----------------------")
function returnNumbers(){
    return [4,7]
}

let num1, num2
[num1, num2] = returnNumbers()
console.log("num1: " + num1)
console.log("num2: " + num2)

// -------------------------------------------------------------------------------------------
// Desestructuración Arreglos [spread syntax - var const] - Ejemplo 4
// -------------------------------------------------------------------------------------------
console.log("----------------- Destructurar Arreglo [spread syntax - var const]- Ejemplo 4 ----------------------")
const [a1, a2, ...an] = numbers
console.log("a1: " + a1)
console.log("a2: " + a2)
console.log(an)

// -------------------------------------------------------------------------------------------
// Desestructuración Objetos - Ejemplo 1
// -------------------------------------------------------------------------------------------
console.log("----------------- Destructurar Objetos - Ejemplo 1 ----------------------")
function printChannelName(data){
    const { name } = data
    console.log(name) 
}
printChannelName(asGeekBasicData)

// -------------------------------------------------------------------------------------------
// Desestructuración Objetos [funcion] - Ejemplo 2
// -------------------------------------------------------------------------------------------
console.log("----------------- Destructurar Objetos [funcion] - Ejemplo 2 ----------------------")
function printSocialNetworks({ facebook, twitter, instagram }){
    console.log("Link de Facebook: " + facebook)
    console.log("Link de Twitter: " + twitter)
    console.log("Link de Instagram: " + instagram)
}
printSocialNetworks(asGeekBasicData.socialMedia)

// -------------------------------------------------------------------------------------------
// Desestructuración Objetos [spread syntax] - Ejemplo 3
// -------------------------------------------------------------------------------------------
console.log("----------------- Destructurar Objetos [spread syntax] - Ejemplo 3 ----------------------")
const { ...socialMedia } = asGeekBasicData.socialMedia
console.log(socialMedia)