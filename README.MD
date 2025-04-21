**Introdução**
---------------

Esta é uma API REST para servir uma plataforma de cursos de programação. 
Ela fornece uma interface para o front-end se comunicar com o banco de dados, permitindo a criação, leitura, atualização e exclusão de cursos e usuários.


**Funcionalidades**
-----------------

* **Processamento de requisições e respostas**: A API processa requisições HTTP e retorna respostas em formato JSON.
* **Comunicação com o banco de dados**: A API utiliza o Sequelize para se comunicar com o banco de dados, permitindo a criação, leitura, atualização e exclusão de dados.
* **Criação de páginas HTML para interface do usuário**: A API pode ser utilizada para criar páginas HTML para a interface do usuário, utilizando tecnologias como Express e Sequelize.

**Tecnologias Utilizadas**
-------------------------

* **Express**: Framework Node.js para criar aplicações web.
* **Sequelize**: ORM (Object-Relational Mapping) para se comunicar com o banco de dados.
* **SQLite**: Banco de dados utilizado para armazenar dados.
* **ESLint**: Ferramenta de análise de código para garantir a qualidade do código.
* **Nodemon**: Ferramenta de desenvolvimento para reiniciar a aplicação automaticamente após alterações no código.

**Instalação**
--------------

Para instalar a API, siga os passos abaixo:

1. Clone o repositório: `git clone git@github.com:mizaelZuza/Nodejs-ORM-sequelize.git`
2. Instale as dependências: `npm install`
3. Inicie a API: `npm run dev`

**Utilização**
--------------
Para utilizar a API, sugiro a utilização do Postman ou outro app de execução de requisições HTTP. 
Isso permitirá que você faça requisições HTTP de forma mais fácil e eficiente.

*Importação no Postman*
Para facilitar o uso da API, disponibilizei uma coleção com as rotas da API já configuradas no arquivo `./colecao_postman.json`. 
Você pode importar essa coleção no Postman ou outro app de execução de requisições HTTP seguindo os passos abaixo:

Abra o Postman e clique em "Importar" no menu superior esquerdo.
Selecione o arquivo `./colecao_postman.json` e clique em "Abrir".
A coleção será importada e você poderá começar a fazer requisições HTTP para as rotas da API.

*Benefícios da Importação*
A importação da coleção no Postman oferece vários benefícios, incluindo:

Acesso rápido e fácil às rotas da API.
Configuração pré-definida para as requisições HTTP.
Redução do tempo de configuração e teste.

**Desenvolvimento**
-----------------

Esta API foi desenvolvida como parte de um estudo em desenvolvimento backend com Node.js. Ela utiliza o padrão MVC e é escrita em JavaScript.

**Contribuição**
--------------

Se você deseja contribuir para a API, por favor, faça um fork do repositório e envie um pull request com suas alterações.


