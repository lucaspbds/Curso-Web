for(var i = 0; i <= 10; i++){
    console.log(`4 x ${i} = ${4*i}`)
}
console.log(i) //A variável i tem escopo global

for(let i = 0; i <= 10; i++){
    console.log(`4 x ${i} = ${4*i}`)
}
console.log(i) //A variável i tem escopo local, por isso dá erro