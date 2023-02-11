// Variavel que guarda o Header para utilização nos metodos
let header = new Headers({
    'Content-type': 'application/json'
  })

////////////////////////////////////////////////////////////////////////////// INICIO GET 
// Pessoa
async function buscarPessoas(){
    const options = {
        method: 'GET',
        headers: header
    }
    try {
    const result = await fetch('http://localhost:3000/pessoa', options)
    .then(response => response.json())
    .then(result => console.log(result))
    }
    catch(error){ 
        return console.error(error)
    }
}

// Buscando as pessoas cadastradas
// buscarPessoas()
// .then(() => console.log("Busca de pessoas realizada com sucesso"))
// .catch(() => console.log("Falha ao buscar pessoas"))


// Animal
async function buscarAnimais(){
    const options = {
        method: 'GET',
        headers: header
    }
    try{
    const result = await fetch('http://localhost:3000/animal', options)
    .then(response => response.json())
    .then(result => console.error(result))
    }
    catch(error){ 
        return console.error(error)
    }
}

// Buscando os animais cadastrados
// buscarAnimais()
// .then(() => console.log("Busca de animais realizada com sucesso"))
// .catch(() => console.log("Falha ao buscar animais"))




// Inseto
async function buscarInsetos(){
    const options = {
        method: 'GET',
        headers: header
    }
    try{
    const result = await fetch('http://localhost:3000/inseto', options)
    .then(response => response.json())
    .then(result => console.error(result))
    }
    catch(error){ 
        return console.error(error)
    }
}

// Buscando os insetos cadastrados
// buscarInsetos()
// .then(() => console.log("Busca de insetos realizada com sucesso"))
// .catch(() => console.log("Falha ao buscar insetos"))

/////////////////////////////////////////////////////////////////////////// FIM GET

/////////////////////////////////////////////////////////////////////////////////// INICIO POST
// Pessoa
async function cadastrarPessoa(body){
    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: header
    }

    try{
    const result = await fetch('http://localhost:3000/pessoa', options)
    }
    catch(error){ 
        return console.error(error)
    }
}



// Cadastrando uma pessoa
// cadastrarPessoa({id:"", nome: "Robert", cpf: 12345678905, idade: 30})
//     .then(() => {
//         console.log('Pessoa cadastrada')
//         buscarPessoas()
//     })
//     .catch(() => console.log('falha ao cadastrar uma pessoa'))



// Animal
async function cadastrarAnimal(body){
    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: header
    }
    try{
    const result = await fetch('http://localhost:3000/animal', options)
    }
    catch(error ){
        return console.log(error)
    }
}

// Cadastrando um animal
// cadastrarAnimal({id:"", nome: "Leko",raca: "Pastor-alemão", especie: "Cachorro" idade: 9})
//     .then(() => {
//         console.log('Animal Cadastrado')
//         buscarAnimais()
//     })
//     .catch(() => console.log('falha ao cadastrar um animal'))



// Inseto
async function cadastrarInseto(body){
    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: header
    }
    try{
    const result = await fetch('http://localhost:3000/inseto', options)
    }
    catch(error ){
        return console.log(error)
    }
}

// Cadastrando um inseto
// cadastrarInseto({id:"", tipo: "Borboleta", especie: "Rabo-de-Andorinha", cor: "Branco", tamanho: "7cm"})
//     .then(() => {
//         console.log('Inseto Cadastrado')
//         buscarInsetos()
//     })
//     .catch(() => console.log('falha ao cadastrar um inseto'))

////////////////////////////////////////////////////////////////////////////////// FIM POST