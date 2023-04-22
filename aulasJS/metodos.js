const instrumento = {
    nome: 'Guitar',
    eCorda: true,
    quantidadeCordas: 6,
    cor:'Preta',

    som:function() {
        console.log('O som do violão é dó-ré-mí-fá-sol-lá-sí-dó')
    }
}

const pessoa = {
    meuNome:"Marcos Samuel",
    idade: 22,
    getNome() {
        console.log(`Olá, ${this.meuNome}`)
    },
    setNome(meuNovoNome) {
        this.meuNome = meuNovoNome

        console.log(meuNovoNome)
    },

    addAno() {
        this.idade+=1
        console.log(this.idade)
    }
}

pessoa.getNome()
pessoa.setNome('Samuka')
for(let i = 0; i <= 5; i++) {
    pessoa.addAno()
}
console.log(instrumento)
instrumento.som()