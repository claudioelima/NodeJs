const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Configurando o body-parser para analisar dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/cadastro', (req, res) => {
    res.send('<html>'+
                '<head> <title>Cadastro</title> </head>'+
                '<body>'+
                '<h1>Cadastro</h1>'+
                    '<form method="POST" action="/cadastro">'+
                        '<label for="nome">Nome:</label> <input type="text" name="nome" id="nome"><br><br>'+
                        '<label for="email">Email:</label> <input type="email" name="email" id="email"><br><br>'+
                        '<label for="senha">Senha:</label> <input type="password" name="senha" id="senha"><br><br>'+
                        '<button type="submit">Cadastrar</button>'+
                    '</form>'+
                '</body>'+
             '</html>');
    });

    // Rota para receber os dados do formulário de cadastro
app.post('/cadastro', (req, res) => {
    const { nome, email, senha } = req.body;
   // res.send('<html> <head> <title>Cadastro realizado</title> </head> <body> <h1>Cadastro realizado com sucesso!</h1> <p>Nome: ${nome}</p> <p>Email: ${email}</p> <p>Senha: ${senha}</p> </body> </html> ');
    res.send(`Cliente ${nome} cadastrado com sucesso!`);
    });
    
    // Iniciando o servidor na porta 3000
    app.listen(80, () => {
    console.log('Servidor iniciado na porta 3000');
    });
