let a = 7;
let b = 94;

console.log('Antes da troca:');
console.log('A: ' + a);
console.log('B: ' + b);
console.log('-=-=-=-=-=-=-=-');
let c = a;
a = b;
b = c;
/**
 * Pode fazer assim também: [a, b] = [b,a]
*/
console.log('Depois da troca:');
console.log('A: ' + a);
console.log ('B: ' + b);