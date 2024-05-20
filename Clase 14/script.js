let nombre = "pepe"

/*
alert(nombre)
alert(nombre)
alert(nombre)
*/


/*
for(let iteracion = 1; iteracion <= 3; iteracion = iteracion + 1){
    console.log("me ejecuto"+iterador)
}
*/

let sumatoria = 0
for(let iterador = 1; iterador <= 3; iterador = iterador + 1){
    let numero = prompt('ingrese un numero')
    numero = Number(numero)
    sumatoria = sumatoria + numero 
}

alert('Rsultado: ' + sumatoria)