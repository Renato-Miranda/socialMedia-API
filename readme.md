# SocialMedia-API

Este projeto é uma API RESTful para uma rede social fictícia chamada **Your Bubble**, desenvolvida como parte de um projeto Full Stack do curso Códigos do Amanhã (Resilia | Ebanx). 
A API foi construída utilizando Node.js com o framework Express, e integra com um banco de dados MongoDB através do Prisma ORM.

## Índice
- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Execução](#instalação-e-execução)
- [Entidades e Rotas](#entidades-e-rotas)
- [Documentação das Rotas](#documentação-das-rotas)
- [Testes](#testes)
- [Contribuidores](#contribuidores)
- [Licença](#licença)

## Sobre o Projeto

O projeto foi dividido em duas etapas:
1. **Módulo 4:** Foi desenvolvido o back-end, a API REST, que gerencia todas as entidades da rede social.
2. **Módulo 5:** Será desenvolvido o front-end, que consumirá as rotas da API criada no módulo 4.

## Tecnologias Utilizadas
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/pt-br/)
- [MongoDB](https://www.mongodb.com/pt-br)
- [Prisma ORM](https://www.prisma.io/)
- [JavaScript](https://www.javascript.com/)
- [Imsomnia](https://insomnia.rest/download)

## Dependencias do projeto

### Dependencies
- `@prisma/client` - ^5.3.1
- `express` - ^4.18.2

### DevDependencies
- `@faker-js/faker` - ^8.0.2
- `jest` - ^29.7.0
- `nodemon` - ^3.0.1
- `prisma` - ^5.3.1

## Instalação e Execução

1. Clone este repositório:
```sh
git clone https://github.com/Renato-Miranda/socialMedia-API
```

2. Navegue até o diretório do projeto:
```sh
cd socialMedia-API
```

3. Instale as dependências:
```sh
cd socialMedia-API
npm install
```

## Banco de Dados

O próximo passo é criar uma Cluster e uma conexão, para isso consulte a [documentação](https://www.mongodb.com/docs/atlas/) do Mongo DB, esse passo é importante para conseguirmos o DATABASE_URL para conseguir persistir os dados no banco de dados.

Para achar o DATABASE_URL você depois de criar o seu cluster, você irá clicar em "connect", e selecionar a opção "drivers"

E verá uma URL parecida com essa: 
Muda os campos nessários como "username", "password", "nome do cluster" e "nome do banco"
```bash
mongodb+srv://<username>:<password>@<nome-do-cluster>.easiezm.mongodb.net/<nome-do-banco>?retryWrites=true&w=majority
```

## Prisma

Agora é hora de configurar o prisma,  você deve configurar o arquivo .env com os dados do seu banco de dados, abaixo temos um exemplo, mas você também pode ver no arquivo .env.example
```env
DATABASE_URL=<url-de-conexão-database>
PORT=<porta>
```
Realizada a configuração do DATABASE_URL e a PORT desejada você deve criar as tabelas no seu database, execute o comando
```bash
npx prisma db push
```
Agora você deve gerar o client dele com o prisma client, para isso você vai rodar o comando
```bash
npx prisma generate
```

## Scripts da API

- `npm start` - Roda o servidor
- `npm run dev` - Roda a aplicação em modo de desenvolvedor
- `npm run test` - Roda os testes do Jest
- `npm run data` - Roda arquivo para inserir dados mockados para usuário

## Rodando servidor

1. Inicie o servidor:
```sh
npm start
```

## Inserir dados mockados de usuários

1. Inserir dados em usuários
```sh
npm run data
```

## Entidades e Rotas

### Entidades
1. Usuário
2. Post
3. Comentário
4. Curtido
5. Favorito
6. Feed

### Rotas
- **Usuário**
  - GET /usuarios
  - POST /usuarios
  - PUT /usuarios/:id
  - DELETE /usuarios/:id
  - GET /usuarios/:id
  - GET /usuario/:email

- **Comentário**
  - POST /comentario
  - GET /comentario
  - GET /comentario/:id
  - PUT /comentario/:id
  - DELETE /comentario/:id

- **Curtido**
  - POST /curtido
  - GET /curtido
  - GET /curtido/:id
  - PUT /curtido/:id
  - DELETE /curtido/:id

- **Favorito**
  - POST /favorito
  - GET /favorito
  - GET /favorito/:id
  - PUT /favorito/:id
  - DELETE /favorito/:id

- **Feed**
  - POST /feed
  - GET /feed
  - GET /feed/:id
  - PATCH /feed/:feedId/:postId
  - DELETE /feed/:id

- **Post**
  - POST /post
  - GET /post
  - GET /post/:id
  - PUT /post/:id
  - PATCH /post/:id
  - DELETE /post/:id

## Utilizando A API

Para utilizar a API e testar as rotas listadas acima você deve utilizar o Imsomnia. Abaixo temos um exemplo de como utilizar a rota usuário

#### Postar Usuário
Para postar um usuário
```http
  POST /usuarios
```
#### Arquivo json
Exemplo de arquivo JSON para enviar no corpo da requisição

```json
{
	"nomeUsuario": "pessoa_teste",
	"senha": "Testesenha11#",
	"email": "pessoa@email.com"
}
```

#### Resposta HTTP
```json
{
	"success": true,
	"message": "Usuário pessoa_teste inserido com sucesso",
	"data": {}
}
```

#### Buscar todos usuários
```http
GET /usuarios
```

#### Resposta (dados mockados)
```json
[
	{
		"id": "650a0ce410d66528a53d2108",
		"nomeUsuario": "Brice.Botsford34",
		"senha": "c_n3z8MdHkvd8aj",
		"email": "Clifton15@yahoo.com",
		"createAt": "2023-09-19T21:04:34.242Z",
		"updateAt": "2023-09-19T21:04:34.242Z"
	},
	{
		"id": "650a0ce410d66528a53d2109",
		"nomeUsuario": "Ines_Wintheiser6",
		"senha": "vgzSO5ZSKhVS4sr",
		"email": "Kevin_McClure29@yahoo.com",
		"createAt": "2023-09-19T21:04:34.242Z",
		"updateAt": "2023-09-19T21:04:34.242Z"
	},
	{
		"id": "650a0ce410d66528a53d210a",
		"nomeUsuario": "pessoa_teste",
		"senha": "Testesenha11#",
		"email": "pessoa@email.com",
		"createAt": "2023-09-19T21:04:34.242Z",
		"updateAt": "2023-09-19T21:04:34.242Z"
	}
]
```

#### Buscar usuário por id
```http
GET usuarios/3
```

#### Resposta (dados mockados)
```json
 {
		"id": "650a0ce410d66528a53d210a",
		"nomeUsuario": "pessoa_teste",
		"senha": "Testesenha11#",
		"email": "pessoa@email.com",
		"createAt": "2023-09-19T21:04:34.242Z",
		"updateAt": "2023-09-19T21:04:34.242Z"
	}
 ```

#### Buscar usuário por email
```http
GET usuarios/pessoa@email.com
```
```json
  {
		"id": "650a0ce410d66528a53d210a",
		"nomeUsuario": "pessoa_teste",
		"senha": "Testesenha11#",
		"email": "pessoa@email.com",
		"createAt": "2023-09-19T21:04:34.242Z",
		"updateAt": "2023-09-19T21:04:34.242Z"
	}
```

#### Resposta

 #### Fazer update de usuários
 ```http
 PUT usuarios/3
 ```

 #### Arquivo json
 Exemplo de arquivo JSON para enviar no corpo da requisição
 ```json
{
	"nomeUsuario": "pessoa_teste_update",
	"senha": "Testesenha22@",
	"email": "pessoa@email.com"
}
 ```

 #### Deletar um usuário por id
 ```http
 DELETE usuarios/3
 ```

## Contribuidores

| [<img src="https://media.licdn.com/dms/image/D4D03AQHZVl1b6y8P3w/profile-displayphoto-shrink_800_800/0/1692834551312?e=1700697600&v=beta&t=vxPlr4t3pQ5KC5a_NKrF-GSdfjIjV2dYqw_EC4u36u0" width="100" height="100" style="border-radius:50%;">](https://www.linkedin.com/in/iohancabral/) | [<img src="https://media.licdn.com/dms/image/D4D03AQHlIfcp35NIKA/profile-displayphoto-shrink_800_800/0/1695267265717?e=1700697600&v=beta&t=jKJJLxzgiEnkU6xq5aVSNf3NLB25wz2xtOfiNYcGsX4" width="100" height="100" style="border-radius:50%;">](https://www.linkedin.com/in/joaovictormotamachado/) |
|:---:|:---:|
| **Iohan Torres**<br>[GitHub](https://github.com/iohantc)<br>[LinkedIn](https://www.linkedin.com/in/iohancabral/) | **João Victor Machado**<br>[GitHub](https://github.com/Joa1zin)<br>[LinkedIn](https://www.linkedin.com/in/joaovictormotamachado/) |
| [<img src="https://media.licdn.com/dms/image/D4D03AQFbT2QD4LzKBw/profile-displayphoto-shrink_800_800/0/1693091706323?e=1700697600&v=beta&t=tUsIH1hI-plDzjgmtczDDmNfcQXThHFROMKjQ4yHcqc" width="100" height="100" style="border-radius:50%;">](https://www.linkedin.com/in/renato-miranda-185269258/) | [<img src="https://media.licdn.com/dms/image/D4D03AQH9XbcrzNdfCw/profile-displayphoto-shrink_800_800/0/1685712290502?e=1700697600&v=beta&t=ke3P0TBejht5cXNVBD9DLBZWqZ7nD17eloWjRV3ZYBA" width="100" height="100" style="border-radius:50%;">](https://www.linkedin.com/in/victormlmartins/) |
| **Renato Miranda**<br>[GitHub](https://github.com/Renato-Miranda)<br>[LinkedIn](https://www.linkedin.com/in/renato-miranda-185269258/) | **Victor Martins**<br>[GitHub](https://github.com/Vimlm)<br>[LinkedIn](https://www.linkedin.com/in/victormlmartins/) |

## Contribuição

Sinta-se à vontade para contribuir com o projeto. Qualquer feedback ou pull request será muito bem-vindo.

## Licença

Este projeto está sob a licença MIT.