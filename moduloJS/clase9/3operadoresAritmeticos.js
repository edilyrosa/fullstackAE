//* Operadores Aritmeticos: + Suma, - Resta, * Multiplicación, / División, 
//* % Módulo o sobrantre, ++ Incremento, -- Decremento.

//* ══════════════════════════════════════════
//* ENTRADA: Numbers → SALIDA: Number
//* ══════════════════════════════════════════
let sum = 10 + 5    //15
let res = 5 - 10    //-5
let mult = 10 * 2   //20
let pow = 10 ** 2   //100
let div = 10 / 2    //5
let inf = 10 / 0    //Infinity
let mod_1 = 10%5    //0
let mod_par = 6%2    //0
let mod_inpar = 5%2    //0
let mod_2 = 10%3    //1

console.log(sum, res, mult, pow, div, inf, mod_1, mod_2); // 15 20 100 5 Infinity 0 1
console.log(mod_par, mod_inpar); //0 1

//& invremento y decremento
mod_par++
console.log(mod_par); //1
mod_par--
console.log(mod_par); //0

//* ══════════════════════════════════════════
//* CASO ESPECIAL: El operador + (suma)
//* ══════════════════════════════════════════
// Si AMBOS son números → suma matemática
// Si al menos 1 es string →  Concatenacion.
let sum1 = 10 + 5    // TTD NUM 15
let conc = "10" + 5    //TDD STR 105
let conc1 = "hola" + 5    //TDD STR hola5
console.log(sum1, conc, conc1);



//* ══════════════════════════════════════════
//* RESTO DE OPERADORES: Convierten a Number: lo determinante es qu sean numeros aunq tu TDD sea str
//* ══════════════════════════════════════════

let queEs2 = "3" - 5    // TDD Num -2
let queEs3 = "3" * 5    // TDD Num 15 → y las demas opera aritmeticas, siempre y cuando el str sea un numero
let queEs4 = "3" * '-10'    // TDD Num 15 → y las demas opera aritmeticas, siempre y cuando el str sea un numero
let queEs5 = "3" * '10'    // TDD Num 15 → y las demas opera aritmeticas, siempre y cuando el str sea un numero
let queEs6 = "3" * 'p10'    //NaN
console.log(queEs2);     //-2
console.log(queEs3);    //15
console.log(queEs4);    //30
console.log(queEs5);    //-30
console.log(queEs6);    //-30


//* ══════════════════════════════════════════
//* CASOS CON NaN (Not a Number)
//* ══════════════════════════════════════════

let queEs = "hola" - 5      //NaN
queEs6 = "3" * 'p10'        //NaN
let queEs7 = NaN + 5        // NaN
let queEs8 = "NaN" + 5      // Conc
console.log(queEs7, queEs8); //NaN NaN5



//* ══════════════════════════════════════════
//* OPERACIONES CON undefined Y null
//* ══════════════════════════════════════════

let queEs9 = 5 + undefined
console.log('und', queEs9); //NaN

let queEs10 = 5 + null
console.log('null que esc edily', queEs10); //5

//* ══════════════════════════════════════════
//* OPERACIONES CON boolean
//* ══════════════════════════════════════════
let boo = false + 10 // 10
let boo1 = true + 10 // 11
console.log(boo, boo1); //10 11
 let cero = false * 5 
console.log(cero);

