**Configurar um projeto com TypeScript**

1\.Crie um diretório para o seu projeto e navegue até ele no terminal:

2\. Execute o comando **npm init** para criar um arquivo package.json. Siga as instruções para configurar seu projeto.

3\. Instale o TypeScript e o ts-node (um interpretador TypeScript para Node.js) globalmente ou localmente, dependendo de suas preferências:

Globalmente:

**npm install -g typescript ts-node**

Localmente (recomendado para projetos individuais):

**npm install --save-dev typescript ts-node**

4\. Inicialize o TypeScript no seu projeto:

**tsc --init**

Isso criará um arquivo **tsconfig.json** no seu projeto.

**Criando primeiro código TypeScript**

Vamos criar um arquivo **app.ts** na raiz de nosso projeto com seguinte código:

let idade: number = 15;

let nome: string = 'Paula';

console.log(`nome: ${nome}, idade: ${idade}`);

Depois de criar um arquivo TypeScript com a extensão ".ts" e, em seguida, usar o comando tsc para compilá-lo em JavaScript:

**tsc app.ts**

O tsc é o executável do TypeScript, que irá gerar o código JavaScript de acordo com as configurações que colocamos nos parâmetros do arquivo tsconfig.json

Podemos testar e executar o código JavaScript gerado, vamos usar o comando

node app.js

O resultado será:

nome: Paula, idade: 15






**Criando Rotas em Node.js com TypeScript**

Primeiro, você precisa ter o Node.js instalado em seu sistema. Em seguida, crie um novo diretório para o seu projeto e execute **npm init** para iniciar um novo projeto npm. Depois, instale as dependências necessárias usando **npm install express @types/express typescript.**

Inicialize o TypeScript no seu projeto:

**tsc --init**

Isso criará um arquivo **tsconfig.json** no seu projeto.

Aqui está um exemplo usando rota e template engine. Para usar o EJS é preciso instalar o EJS

**npm install ejs –save**

Arquivo server.ts

![https://github.com/claudioelima/NodeJs/blob/main/FIG01.png}

Descrição gerada automaticamente](Aspose.Words.f0cf83ef-a4ed-40a0-a369-59b4914db45c.001.png)



Aqui está um exemplo de como seria a estrutura do projeto:

![Fundo preto com letras brancas

Descrição gerada automaticamente](Aspose.Words.f0cf83ef-a4ed-40a0-a369-59b4914db45c.002.png)





Aqui está o código para **src/routes.ts**, onde definiremos nossas rotas:

![Texto

Descrição gerada automaticamente](Aspose.Words.f0cf83ef-a4ed-40a0-a369-59b4914db45c.003.png)

**Usando EJS**

![Texto

Descrição gerada automaticamente](Aspose.Words.f0cf83ef-a4ed-40a0-a369-59b4914db45c.004.png)

Agora, vamos criar o arquivo **src/server.ts** para configurar o servidor e usar as rotas definidas:

![Texto

Descrição gerada automaticamente](Aspose.Words.f0cf83ef-a4ed-40a0-a369-59b4914db45c.005.png)

**Usando EJS** 

![Texto

Descrição gerada automaticamente](Aspose.Words.f0cf83ef-a4ed-40a0-a369-59b4914db45c.006.png)

Execute o aplicativo usando o comando: **ts-node server.ts**
