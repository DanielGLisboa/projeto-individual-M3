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