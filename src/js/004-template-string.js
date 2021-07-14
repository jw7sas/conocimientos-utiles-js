// DATOS DE PRUEBA
const sale = {
    id: 1,
    invoiceNumber: 145485,
    productCode: 34562,
    productName: "Galleta Oreo",
    units: 3,
    price: 5000
}

// Arrow function -> base del contenido del div
const baseDivContent = sale => {
    return `<h1>AS.Geek - Venta N.${sale.invoiceNumber}</h1>
            <hr>
          <h3>Producto N.${sale.productCode}</h3>
          <p>La venta para el producto [${sale.productName}] con ${sale.units} Unidadades 
          y un precio de $${sale.price}, tiene un valor Total de $${sale.units*sale.price}</p>`
}

// Método para llena la descripción de una elemento
function fillDescription(sale){
    const $divContent = document.getElementById("divContent") 
    $divContent.innerHTML = baseDivContent(sale)
}

// Función para imprimir una suma
function printSum(num1, num2){
    const response = `La suma de ${num1} + ${num2} es igual a: ${(num1+ num2)}` 
    console.log(response)
}

// Ejecución
fillDescription(sale)
printSum(4, 5)