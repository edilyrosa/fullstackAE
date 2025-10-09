//*Numericos
let enteros = 12
let decimales = 12.12
let negativo = -40
// let notacionCs = 2.5E6
let notacionCs = 2.5e6
let noNumerico = NaN //No es un numero
console.log('Los valores numericos son:', enteros, decimales, negativo, notacionCs);

//*String
let nombre = "Edily"
let nombre1 = 'Edily'
let nombre2 = `Edily`
let nombre3 = `Edily
la Profe`
 console.log('Los nomnbres', nombre, nombre1, nombre2, nombre3);
 
//*Boolianos
let esVeredadero = true
console.log(esVeredadero); //true
let esFalso = false
esVeredadero = false
console.log(esVeredadero); //false
// ..........
esVeredadero = 0
console.log(esVeredadero);//0

// estaAutorizado = false
// estaAutorizado = clave === 1234 & userName =='@edly'
// if(estaAutorizado){
//     // *entonces podra mirar todas las vistas de la app
// }
// alert('NO ESTAS AUTORIZADO PARA VER')

//*Undefined: la declare, pero no la defino, no esta definida!
let passw //ReferenceError: clave is not defined
//passw = 1234
esTrue =  passw === 1234
console.log('es o no es', esTrue);
console.log('🚩',typeof passw);


//* null
arrayProducto = null
if(arrayProducto === null){
    // no se pinta nada en la tabla
}



//*TIPO DE DATOS ESTUCTURALES
//* Objetos == Dict
let persona = {
    nombre: 'Edily',
    peso:55.12,
    pasatiempos: ['bailar', 'salir de compras', 'ir al cine'],
    profesion:'multi',
    activo:true,
    saludar: function(){
        return 'Hola soy Edily'
    }
}
//Acced
console.log(persona.nombre); //Edily
persona.nombre = 'Rosa'
console.log(persona.nombre); //Rosa
console.log(persona.saludar()); //Hola soy Edily
console.log(persona.pasatiempos); // [ 'bailar', 'salir de compras', 'ir al cine' ]
console.log(persona.pasatiempos[1]); // salir de compras


//*Array == list
let sabores = ['melon', 'chocolate', 'mantecado']
console.log(sabores[0]);//melon
console.log(sabores.length);//3
console.log(sabores[0].length);//5

//*Funciones
function sumar(a, b){
    return a+b;
}
console.log('sumar(10, 10) =', sumar(10, 10)); //sumar(10, 10) = 20

let multiplicar = function(a, b){
    return a*b;
}
console.log('multiplicar(10, 10) =', multiplicar(10, 10)); //multiplicar(10, 10) = 100

let dividir1 = (a, b) => {
    return a/b 
}
let dividir2 = (a, b) => a/b 
console.log('dividir1(10, 10) =', dividir1(10, 10)); //ividir1(10, 10) = 1
console.log('dividir2(10, 10) =', dividir2(10, 10)); //ividir2(10, 10) = 1

