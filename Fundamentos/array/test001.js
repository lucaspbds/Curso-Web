let notas = [5.9, 4.3, 5.1, 2]
console.log(notas[0], notas[4])
notas[10] = 9

console.log(notas.pop())
console.log(notas.length)
console.log(notas)

delete notas[2]
console.log(notas)

dicionario = {nota1: 5.9, notas2: 10}
notas.push(dicionario)
console.log(notas)

console.log(typeof dicionario)
console.log(typeof notas)