let carro = {
    cor:'Branco',
    portas: 4
}
console.log(carro)
console.log(typeof carro)

let pessoa = {
    nome: 'Marcos Samuel'
}

console.log(pessoa)

if (carro.portas === 4) {
    console.log(`O carro de cor ${carro['cor']} tem ${carro.portas} portas`)
}

// Propriedades
console.log(carro['cor'])
console.log(pessoa.nome)

let nomePessoa = pessoa['nome']

console.log(nomePessoa.length)

// Tipos de dados
let maquina = {
    material: 'Aço inox',
    equipamentos: ['motor', 'freio', 'esteira', 'cilindro'],
    vaiMontada:false,
    numeroDeMotores:1
}

console.log(maquina)
console.log(maquina.material)

maquina.equipamentos.forEach((items)=>{
    console.log(items)
})


let escritor = {
    nome: 'Ziraldo',
    "possui obras":true,
}

console.log(escritor.nome)
console.log(escritor['possui obras'])