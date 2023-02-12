# projeto-individual-M3
Este é um projeto do curso de WebDev Resilia.

### Tema: SERES VIVOS

**Simulando uma API REST com JSON-Server para aplicação das operações de CRUD.                                           
Inicialmente este projeto conta com 3 rotas: Pessoa, Animal e Inseto.**


## Documentação

### Passos para iniciar o servidor do projeto

CLONE O PROJETO:

https:
```bash
  https://github.com/DanielGLisboa/projeto-individual-M3.git
```

ssh:
```bash
  git@github.com:DanielGLisboa/projeto-individual-M3.git
```



ENTRE NO DIRETÓRIO "projeto-individual-M3":

```bash
  cd projeto-individual-M3
```

INSTALE AS DEPENDÊNCIAS:

```bash
  npm install json-server --save-dev
```

ENTRE NA PASTA JS E INICIE O SERVIDOR:
```bash
  cd JS
```

```bash
  node startJsonServer.js 
```

##
### Realizando os processos de CRUD (CRATE, READ, UPDATE, DELETE):
O projeto dispõe de um arquivo contendo as funções com os métodos GET(read), POST(create), PUT(update) e DELETE.
Assim como as funções, o arquivo contém as chamadas para cada uma delas.

**OBS.:** Para acompanhar melhor o funcionamento do projeto você deverá executar uma chamada de função por vez.                 
Visto que as chamadas estão comentadas, você deverá seguir o exemplo abaixo:


Chamada para a função de buscar pessoas (GET/READ) - comentada
![image](https://user-images.githubusercontent.com/56852114/218332418-bf0ed907-9c0d-4bba-a1d1-0a97f59fa141.png)

Retire o comentário:                                                    
![image](https://user-images.githubusercontent.com/56852114/218332426-86de81d3-82c0-4452-bee4-02218bcdc1de.png)

Abra um novo terminal na pasta "projeto-individual-M3" e execute os comandos:
```bash
  cd JS
```
```bash
  node testeApi.js
```

![image](https://user-images.githubusercontent.com/56852114/218332961-5f72a98c-d2c7-4df6-813a-d53d4901d031.png)


Após a execução, comente a chamada novamente para utilizar as outras chamadas:
![image](https://user-images.githubusercontent.com/56852114/218332418-bf0ed907-9c0d-4bba-a1d1-0a97f59fa141.png)


## 
### Caso já esteja familiarizado com as plataformas postman ou insomnia, você também pode utilizá-las para realizar estes processos.
#### Postman: https://www.postman.com/
**OBS**.: Como se trata de uma aplicação que roda localmente, você deve utilizar o Desktop Agent do postman.

#### Insomnia: https://insomnia.rest/


##

### Rotas

#### - Pessoa
URL: http://localhost:3000/pessoa


#### - Animal
URL: http://localhost:3000/animal

#### - Inseto
URL: http://localhost:3000/inseto

##

![Badge Concluído](http://img.shields.io/static/v1?label=STATUS&message=CONCLUÍDO&color=GREEN&style=for-the-badge)