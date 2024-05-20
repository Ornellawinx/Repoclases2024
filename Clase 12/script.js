

/*
console.log(nombre_1)
console.log(nombre_2)
console.log(nombre_3)

{
    var nombre_1 = "pepe"
    {
        var nombre_3 = "juan"
    }
} */


let nombre = "maria"
console.log(nombre)

{   console.log(nombre)
    {
        let nombre = "juan"
        console.log(nombre)
    }
    console.log(nombre)
}

console.log(nombre)

/*
maria
pepe
juan
pepe
maria
*/