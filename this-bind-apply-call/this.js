const pessoa = {
    nome: "Ana",
    email: "a@email.com",
    imprimeNome: function(){
      console.log(`${pessoa.nome}`)
    }
}
pessoa.imprimeNome() //Ana

//Exemplo de uma forma mais prática, com o uso do 'this' e desacoplando o método do objeto para que possa ser usada em objetos diferentes 

// THIS
function imprimeNomeEmail(){
    console.log(`nome: ${this.nome}, email ${this.email}`)
}

const pessoa1 = {
    nome: 'Be',
    email: 'be@gmail.com',
    imprimeInfo: imprimeNomeEmail
}

const pessoa2 = {
    nome: "vitor",
    email: "vitor@email.com",
    imprimeInfo: imprimeNomeEmail
}

pessoa1.imprimeInfo()
pessoa2.imprimeInfo()

function Pessoa(nome, email){
    this.nome = nome
    this.email = email
    this.imprimeNomeEmail = function(){
        console.log(`nome: ${this.nome}, email: ${this.email}`)
    }
}

const pessoa3 = new Pessoa('Theo', 'theo@gmail.com')
const pessoa4 = new Pessoa('joao', 'joao@gmail.com')

pessoa3.imprimeNomeEmail()
// nome: Theo, email: theo@gmail.com
pessoa4.imprimeNomeEmail()
// nome: joao, email: joao@gmail.com