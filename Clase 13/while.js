
/* 
Principio DRY: dont repeat yourself= no te REPITAS 
*/



/*
Solicitar un nombre a un usuario, si el nombre es 'pepe' seguir solicitando el nombre
cuando sea distinto de pepe, decir, 'ese nombre no lo conozco' */

let nombre = prompt('ingrese su nombre')

/*while(nombre === 'pepe'){
    nombre = prompt('ingresa devuelta un nombre')
}
alert*/

while(!nombre){
    alert('ERROR dato no valido')
    nombre = prompt("ingresa nuevamente el valor")
}
alert('dato correcto')

