//* 0. Operadores con igual precedencia (asociatividad)
let r0 = 10 - 5 - 2 

//* 1.
let r1 = 5 + 3 * 2 ** 2 - 8 / 4;


//* 2.
let r2 = (10 + 5) * 2 ** 2 / 6 - 3;


//* 3.
let r3 = 20 - 5 * 2 + 8 / 2 ** 2;


//* 4.
let r4 = 2 ** 3 ** 2 // 512 (derecha a izquierda)
// 2 ** (3 ** 2)  →  2 ** 9 = 512
console.log('Resultados: ', r0, r1, r2, r3, r4);


