const express = require("express"); // Coloca função express() nan variável express
const app = express(); // Colocar const express na variável app

app.get('/', function(req, res){ // Abre uma rota
    res.send('Hello, World!'); // Resposta da rota
});

app.get('/sobre/:nome/:cargo/:idade', function(req, res){ // Abre uma rota com alguns parâmetros
    res.send(
        '<h1>Seja bem vindo ' + req.params.nome + '<h1/>' + // Busca o parâmetro
        '<h2>Seu cargo é ' + req.params.cargo + '<h1/>' + // parâmetro através do
        '<h2>Sua idade é ' + req.params.idade + '<h1/>' // req e cria um texto
    );
});

app.listen(5051, function(){ // Cria servidor na porta 5051
    console.log("Servidor criado no porta 5051") // Envia uma mensagem avisando que o servidor foi criado
});