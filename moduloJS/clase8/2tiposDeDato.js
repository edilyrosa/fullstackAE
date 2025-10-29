//*Numericos
let enteros = 12
let decimales = 12.12
let negativo = -40
// let notacionCs = 2.5E6
let notacionCs = 2.5e6 //2500000
let noNumerico = NaN //No es un numero
console.log('Los valores numericos son:', enteros, decimales, negativo, notacionCs);
 console.log( typeof negativo); //number
 console.log( typeof 40); //number
 



//*String
let nombre = "Edily"
let nombre1 = 'Edily'
let nombre2 = `Edily`
let nombre3 = `Edily
la Profe`
 console.log('Los nomnbres', nombre, nombre1, nombre2, nombre3);
  console.log( typeof nombre1); //string
//   if(typeof input_1 === 'string') {
//     //le damos acc
//   }

 
//*Boolianos
let esVeredadero = true
 console.log( 'esVeredadero', typeof esVeredadero); // boolean
console.log(esVeredadero); //true
let esFalso = false
esVeredadero = false
console.log(esVeredadero); //false
// ..........
esVeredadero = 0
console.log(esVeredadero);//0
console.log( 'esVeredadero', typeof esVeredadero); //number







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
console.log('🚩',typeof passw); //*  🚩 undefined
 console.log(typeof  passw); //undefined




//* null
arrayProducto = null
// if(arrayProducto === null){
//     // no se pinta nada en la tabla
// }

 console.log(typeof  arrayProducto);  //🫨 object
 console.log(typeof  null);           //🫨 object
console.log(typeof 1/0);              //NaN
console.log(NaN === 1/0);              //false
console.log(NaN === NaN);              //false



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
let dividir3 = (a, b) =>  a/b 


let dividir2 = (a, b) => a/b 
console.log('dividir1(10, 10) =', dividir1(10, 10)); //ividir1(10, 10) = 1
console.log('dividir2(10, 10) =', dividir2(10, 10)); //ividir2(10, 10) = 1


console.log( 'que tipo es el array sabores', typeof sabores); //que tipo es el arry sabores object
console.log( 'que instancia es el array sabores', sabores instanceof Array); // que instancia es el array sabores true

console.log( 'que instancia es dividir1', dividir1 instanceof Array); // que instancia es dividir1 false
console.log( 'que instancia es dividir1', dividir1 instanceof Function); // que instancia es dividir1 true































// //  TODO: Comrpobar el TDD
// console.log(typeof 42);         //*number
// console.log(typeof notacionCs); //*number
// //  TODO: Comrpobar el TDD

// //  TODO: Comrpobar el TDD
// console.log(typeof  nombre);     //*tring       
// console.log(typeof '123');      //*string
// //  TODO: Comrpobar el TDD






// //  TODO: Comrpobar el TDD
// console.log(typeof false);     //* boolean    
// console.log(typeof esFalso);   //* boolean    
// //  TODO: Comrpobar el TDD



// //  TODO: Comrpobar el TDD
// console.log(typeof null);            //* 🫨object  error.. hay memes
// console.log(typeof arrayProducto);   //* 🫨object    
// console.log(typeof 1/0);             //! NaN
// console.log(typeof 1/0 == NaN);     //! 🫨false
// console.log(NaN === NaN);            //! 🫨false
// console.log(typeof NaN);             //! 🫨number
// console.log(0 == '');                //! 🫨true, pq es un false
// //  TODO: Comrpobar el TDD




// //  TODO: Comrpobar el TDD
// console.log(typeof []);                          //* object  
// console.log('Sabores es: ', typeof sabores);     //* object   
// console.log('Persona es: ', typeof persona);     //* object   
// console.log('La Func Sumar es: ', typeof  sumar);//& function   

// // ? 📚🎒instanceof verifica si un objeto es una instancia de una clase o constructor.
// console.log('Sabores es una instancia de Array?: ', sabores instanceof Array );                      //&  true   
// console.log('Sabores es una instancia de Object?: ', sabores instanceof Object );                    //*  true  

// console.log('La Func Sumar() una instancia de Function?: ', sumar instanceof Function );              //&  true  
// console.log('La Func Sumar() instancia de Object?: ', sumar instanceof Object );                      //*  true  
// console.log('Que instancia es un number?: 🚩🤔', 33 instanceof Number );                             //*  false  
// console.log('Que instancia es un number con constructor? 🚩🤔: ', new Number(33) instanceof Number );//*  true  
// //  TODO: Comrpobar el TDD


