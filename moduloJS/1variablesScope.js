
{ 
    //Scope local
    var nombreVar = 'Rosa' //!var solo respetaria, scope de funciones
    let nombreLet = 'Rosa'   //! LLAMADO DESDE FUERA: ReferenceError: nombreLet is not defined
    const nombreConst = 'Rosa'
}

console.log('valor de la ss variables', nombreVar ); //Scope Gl


//!❌ No usaremos var por ser insegura e inestable.
//*✅Usaremos LET y CONST
//& var, let y const son palabrasclave para saber que es variable y que es constante
let soyElNombreDeLaVariable = 10
soyElNombreDeLaVariable = 11 //lo que si puedo es RE-ASIGNAR✅
// let soyElNombreDeLaVariable = 13 //esto e4s una RE-DECLARACION❌

const PI = 3.14
PI = 3.3 //!TypeError: Assignment to constant variable.
console.log(PI);
// resultado = radio * PI **2 //PODEMOS USARLO COMO OPERARIO!✅

