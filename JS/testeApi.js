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
// cadastrarAnimal({id:"", nome: "Bob",raca: "Pug", especie: "Cachorro", idade: 10})
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

/////////////////////////////////////////////////////////////////////////////////////////// INICIO PUT
// Pessoa
async function atualizaPessoa(body){
    let options = {
        method: "PUT",
        body: JSON.stringify(body),
        headers: header
    }
    try{
        const result = await fetch(`http://localhost:3000/pessoa/${body.id}`, options)
    }
    catch(error){
        return console.error(error)
    }
}

// Atualizando dados de uma pessoa
// atualizaPessoa({id: 6, nome: "Jonathan", cpf: 12345678905, idade: 30})
//     .then(() => {
//         console.log('atualização de dados de pessoa realizada com sucesso') 
//         buscarPessoas()
//     })
//     .catch(() => console.log('falha ao tualizar dados de pessoa'))


// Animal
async function atualizaAnimal(body){
    let options = {
        method: "PUT",
        body: JSON.stringify(body),
        headers: header
    }
    try{
        const result = await fetch(`http://localhost:3000/animal/${body.id}`, options)
    }
    catch(error){
        return console.error(error)
    }
}

// Atualizando dados de um animal
// atualizaAnimal({id: 6, nome: "Fred", raca: "Pug", especie: "Cachorro", idade: 10})
//     .then(() => {
//         console.log('atualização de dados do animal realizada com sucesso')
//         buscarAnimais()
//     })
//     .catch(() => console.log('falha ao atualizar dados do animal'))


// Inseto
async function atualizaInseto(body){
    let options = {
        method: "PUT",
        body: JSON.stringify(body),
        headers: header
    }
    try{
        const result = await fetch(`http://localhost:3000/inseto/${body.id}`, options)
    }
    catch(error){
        return console.error(error)
    }
}

// Atualizando dados de um inseto
// atualizaInseto({id:"5", tipo: "Borboleta", especie: "Azul", cor: "azul", tamanho: "5cm"})
//     .then(() => {
//         console.log('atualização de dados do inseto realizada com sucesso')
//         buscarInsetos()
//     })
//     .catch(() => console.log('falha ao atualizar dados do inseto'))





////////////////////////////////////////////////////////////////////////////////////////// FIM PUT

/////////////////////////////////////////////////////////////////////////////////////////////// INICIO DELETE
// Pessoa
async function deletaPessoa(body){
    let options = {
        method: "DELETE",
        body: JSON.stringify(body),
        headers: header
    }
    try{
        const result = await fetch(`http://localhost:3000/pessoa/${body.id}`, options)
    }
    catch(error){
        return console.log(error)
    }
}

// Deletando uma pessoa
// deletaPessoa({id: 6})
//     .then(() => { 
//         console.log('Pessoa deletada com sucesso')
//         buscarPessoas()
//     })
//     .catch(() => console.log('falha ao deletar esta pessoa'))


// Animal
async function deletaAnimal(body){
    let options = {
        method: "DELETE",
        body: JSON.stringify(body),
        headers: header
    }
    try{
        const result = await fetch(`http://localhost:3000/animal/${body.id}`, options)
    }
    catch(error){
        return console.log(error)
    }
}

// Deletando um animal
// deletaAnimal({id: 6})
//     .then(() => {
//         console.log('Animal deletado com sucesso')
//         buscarAnimais()
//     })
//     .catch(() => console.log('falha ao deletar este animal'))


// Inseto
async function deletaInseto(body){
    let options = {
        method: "DELETE",
        body: JSON.stringify(body),
        headers: header
    }
    try{
        const result = await fetch(`http://localhost:3000/inseto/${body.id}`, options)
    }
    catch(error){
        return console.log(error)
    }
}

// Deletando um inseto
// deletaInseto({id: 5})
//     .then(() => {
//         console.log('Inseto deletado com sucesso')
//         buscarInsetos()
//     })
//     .catch(() => console.log('falha ao deletar inseto'))

/////////////////////////////////////////////////////////////////////////////////////////// FIM DELETE