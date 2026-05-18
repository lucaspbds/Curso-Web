function random_number({min=0, max=100}={}){ 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = {min: 1, max:5}
console.log(random_number(obj))
console.log(random_number({}))
console.log(random_number())