/**
 * Neste caso, as variáveis recebem valores aritméticos (simples), então,
 * não recebe o endereçamento da memória de onde a está se refereciando,
 * pois o Javascript faz uma cópia e coloca em uma outra parte da memória
 * e coloca b para refereciar essa parte.
 */
let a = 3
let b = a
b++
console.log(`a:${a}  |  b:${b}`)

/**
 * Neste caso, a estrutura é mais complexa, então, b recebe o endereço da memória 
 * onde a está referenciando. Então, b altera o mesmo objeto de a porque estão 
 * compartilhando do mesmo endereço de memória.
 */
a = {}
b = a
b.nome = 'Pedro'
console.log(a)
console.log(b)