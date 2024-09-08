# Teste Jack Experts

Esta é a minha solução para o teste Jack Experts

## Sumário

- [Visão Geral](#visão-geral)
  - [O teste](#o-teste)
  - [Capturas de tela](#capturas-de-tela)
- [Meu processo](#meu-processo)
  - [Ferramentas utilizadas](#ferramentas-utilizadas)
  - [Como rodar](#como-rodar)
  - [Detalhes da solução](#detalhes-da-solução)
  - [Fontes e conteúdos consultados durante o desenvolvimento](#fontes-e-conteúdos-consultados-durante-o-desenvolvimento)
- [Autor](#autor)

## Visão Geral

### O teste

Usuários devem poder:

- **Cadastro de Usuário.** O usuário deve ser capaz de se cadastrar com e-mail e senha. 
	- Implementar validação básica para e-mail e senha.
- **Autenticação.** Apenas usuários autenticados devem ter acesso às funcionalidades de gerenciamento de tarefas.
	- Implementar login e logout de usuários utilizando JWT (JSON Web Token). 
- **Gerenciamento de Tarefas.** 
	- Listar todas as tarefas do usuário autenticado. 
	- Adicionar novas tarefas com um título e uma descrição. 
	- Marcar tarefas como concluídas. 
	- Editar o título e a descrição de uma tarefa. Excluir uma tarefa.
- **Interface de Usuário.** A interface deve ser intuitiva e responsiva. Implementar a interface utilizando React. Utilizar hooks do React para gerenciar estado e efeitos colaterais.

### Capturas de tela

Algumas capturas de tela da aplicação em funcionamento mostrando a responsividade nas telas de login e tela principal:

![Login versão mobile](https://i.imgur.com/gBlSyzv.png)
![Login versão desktop](https://i.imgur.com/52GQWo8.png)
![Página principal versão mobile](https://i.imgur.com/759iuyx.png)
![Página principal versão desktop](https://i.imgur.com/acBeui7.png)

## Meu processo

### Ferramentas utilizadas

- Banco de dados:
    -   Container docker rodando MySQL.
- Back-end:
    - Node.js com Typescript.
    - Express.js.
    - Autentição JWT.
    - Prisma ORM.
    - bcrypt para salvar a senha de maneira segura no banco de dados.
- Front-end:
    - React.js com Typescript.
    - Tailwind CSS.

### Como rodar

Para rodar este projeto localmente é necessário:

- [Node.js](https://nodejs.org/pt/download/package-manager) e npm ou qualquer outro gerenciador de pacotes.
- [Docker](https://docs.docker.com/engine/install/)

#### Passo a passo:

1) Clone ou faça download deste repositório:

```bash
git clone git@github.com:igormath/jack-experts-challenge.git
```
2) Baixe a última versão da imagem Docker do MySQL:

```bash
docker pull mysql
```

3) Crie um container com o seguinte código (com uma senha segura no lugar de <YOUR_PASSWORD>):

```bash
docker run -p 3306:3306 --name mysql_jack_experts -e MYSQL_ROOT_PASSWORD=<YOUR_PASSWORD> -d mysql
```

4) Agora, entre na pasta `server` do repositório clonado e instale as dependências necessárias com o comando:
```bash
npm install
```

5) Crie um arquivo .env nessa pasta contendo as variáveis **DATABASE_URL**, contendo URL de conexão com o banco de dados MYSQL containerizado e **JWT_KEY**, onde ficará guardada em segurança a chave do JWT.

6) Por fim, rode o Back-end com o comando:
```bash
npm run dev
```

7) Em uma nova instância do terminal, vá até a pasta `client` e instale todas as dependências com o comando:
```bash
npm install
```

8) Finalmente rode o Front-end da aplicação a partir do comando:
```bash
npm run dev
```

### Detalhes da solução

#### Diagrama Entidade Relacionamento do banco de dados:

![Esquema da arquitetura utilizada na API](https://i.imgur.com/BQstjAL.png)

Um User pode possuir zero ou várias Task, enquanto que uma Task só possui um, e apenas um, User.

#### Arquitetura utilizada no desenvolvimento da API:

![Esquema da arquitetura utilizada na API](https://i.imgur.com/wiaOoxB.png)

Construí um middleware que utiliza JWT para validar operações em todas as rotas relacionadas a Task. Nas operações envolvendo as rotas de User, o JWT não foi utilizado no endpoint de criação do usuário, pois não é possível autenticar um usuário que ainda não existe, e na rota de recuperação do User, uma vez que essa rota é mais utilizada internamente na aplicação.

### Fontes e conteúdos consultados durante o desenvolvimento

- [O que é API? REST e RESTful? | Mayk Brito](https://www.youtube.com/watch?v=ghTrp1x_1As&list=WL&index=30)
- [Criando Container MySQL no Docker | Tutorial (Linux e Windows)](https://www.youtube.com/watch?v=XP-O4VqqDCg&list=LL&index=12)
- [Best practices for REST API design](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/)
- [Prisma docs](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-mysql)
- [Criando API completa com NODEJS + TypeScript e MongoDB #backaofront 01](https://www.youtube.com/watch?v=XuTfN_84rcU&list=LL&index=5)
- [Create Custom Modal in React with Tailwind CSS | Modal in NextJS with Tailwind](https://www.youtube.com/watch?v=nwJK-jo91vA&list=LL&index=2)
- [API com Node.js - Passo 12 - Login + JWT Token](https://www.youtube.com/watch?v=A-c643zCW7E)
- [How to implement JWT Authentication Using Node, Express, TypeScript ?](https://dev.to/cristain/how-to-implement-jwt-authentication-using-node-express-typescript-app-2023-2c5o)

## Autor

- Github - [igormath](https://github.com/igormath/)
- Email - [Igor Matheus](matheus.igor.p@gmail.com)