//Divisão exata
const divisao = (dividendo, divisor) => {
    console.log(`${dividendo} / ${divisor} = ${Math.trunc(dividendo/divisor)} (Resto=${dividendo%divisor})`)
}
divisao(5,2)
