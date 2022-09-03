let nome 
let idade 

console.log(typeof nome, typeof idade)
//porque não atribui valor, então ela diz undefined

nome = prompt('Qual seu nome?')
idade = prompt('Qual sua idade')
console.log(typeof nome, typeof idade)
//agora elas aparecem porque atribui valor a elas. e se tornaram strings.

console.log(`Olá ${nome}, voce tem ${idade} anos `)
