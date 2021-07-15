// [ DESCRIPCIÓN ]
// [ sintaxis extendida ]
// permite a un elemento iterable tal como un arreglo o cadena 
// ser expandido en lugares donde cero o más argumentos (para llamadas de  función) 
// o elementos (para Array literales) son esperados, o a un objeto ser expandido 
// en lugares donde cero o más pares de valores clave (para literales Tipo Objeto) son esperados.

// --------------------------------------------------------------------------
// Sintáxis Spread
// --------------------------------------------------------------------------
console.log("----------------- Sintáxis Spread ----------------------")
function sumNumbers(x,y,z,a){
 return x+y+z+a
}

const numbers = [5, 10, 7, 3]
console.log(sumNumbers(numbers[0], numbers[1], numbers[2], numbers[3]))
console.log(sumNumbers(...numbers))
// --------------------------------------------------------------------------
// Copiar arreglos
// --------------------------------------------------------------------------
console.log("----------------- Copiar arreglos ----------------------")
let otherNumbers = numbers.slice()
otherNumbers.push(5)
console.log(otherNumbers)

let otherNumbers_2 = [...numbers, 5]
console.log(otherNumbers_2)



// --------------------------------------------------------------------------
// Concatenar arreglos
// --------------------------------------------------------------------------
console.log("----------------- Concatenar arreglos ----------------------")
let animals_and_plants = ["Leon", "Perro", "Oveja"]
let animals_and_plants_2 = ["Leon", "Perro", "Oveja"]
const plants = ["Girasol", "Orquideas"]

animals_and_plants = animals_and_plants.concat(plants)
console.log(animals_and_plants)
console.log([...animals_and_plants_2, ...plants])

// --------------------------------------------------------------------------
// Spread en literales tipo Objeto
// --------------------------------------------------------------------------
console.log("----------------- Spread en literales tipo Objeto ----------------------")
// DATOS DE PRUEBA
const asGeekBasicData = {
    name: "Asperos Geek",
    socialMedia: {
        facebook: "https://www.facebook.com/AsperosGeek/",
        instagram: "https://www.instagram.com/asperos_geek/",
        twitter: "https://twitter.com/AsperosG/",
    },
    dateOfBirth: "27-nov-2020"
} 

const asGeekOtherData = {
    description: "Aprendamos Juntos!!",
    country: "Colombia"
}

const asGeekPlayList = {
    javascript: { 
        list_1: "Conocimientos utiles en Javascript",
        list_2: "Javascript con Api Rest Python"
    },
    excel: {
        list_1: "Tips en excel",
        list_2: "Funciones en excel",
        list_3: "Como resolver examen de entrevista de trabajo en Excel"
    }
}

console.log("asGeekPlayList", asGeekBasicData)
console.log("asGeekOtherData", asGeekOtherData)
console.log("asGeekPlayList", asGeekPlayList)
console.log("----------------- Spread en literales tipo Objeto => USO ----------------------")
const asGeekTotalData = {...asGeekBasicData, ...asGeekOtherData, playList: {...asGeekPlayList}}
console.log(asGeekTotalData)