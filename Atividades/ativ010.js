// function esta_entre(numero, min, max, inclusivo=false){
//     [min, max] = min < max ? [min, max]:[max, min]
//     let status
//     if(inclusivo){
//         status = numero >= min && numero <= max
//     }
//     else {    
//         status = numero > min && numero < max
//     }
//     console.log(status)
//     // console.log({ min, max, inclusivo, numero, status })
// }
// esta_entre(10, 50, 100)
// esta_entre(16, 100, 160)
// esta_entre(3, 3, 150)
// esta_entre(3, 3, 150, true)

// esta_entre(6, 100, 5)

Number.prototype.entre = function(inicio, fim, inclusivo=true){
    [inicio, fim] = inicio > fim ? [fim, inicio] : [inicio, fim]
    return inclusivo ? this >= inicio && this <= fim : this > inicio && this < fim
}

let [num1, num2,num3] = [10, 16, 3]
console.log(num1.entre(50,100))
console.log(num2.entre(100,160))
console.log(num3.entre(3,150))
console.log(num3.entre(3,150, false))

