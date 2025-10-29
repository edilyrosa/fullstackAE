//* 0. Operadores con igual precedencia (asociatividad)
let r0 = 10 - 5 - 2 
console.log(r0);//3

let z = 5
let r1 = ++z * 2 
console.log(r1);//12

//* 1.
let r2 = 5 + 3 * 2 ** 2 - 8 / 4;
// r2 = 5 + 3 * 4 - 2 
// r2 = 5 + 12 - 2 = 15
console.log(r2); //15


//TODO: HAZLO 💪🏽
let r3 = (10 + 5) * 2 ** 2 / 6 - 3;
//console.log(r3);


//TODO: HAZLO 💪🏽
let r4 = 20 - 5 * 2 + 8 / 2 ** 2;
//console.log(r4);

////TODO: HAZLO 💪🏽
let x = 10;
let r5 = ++x * 2 + x--; //* x-- === 11 en toda esta linea
//console.log(r5);

//TODO: HAZLO 💪🏽
let r6 = 2 ** 3 ** 2 //! (derecha a izquierda)
//console.log('Resultados: ', r0, r1, r2, r3, r4, r5, r6);


