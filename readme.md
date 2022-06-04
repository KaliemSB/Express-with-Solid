# Requisitos não funcionais
A aplicação deve ser feita usando a seguinte stack.
- [x] Typescript
- [x] Express

# Requisitos funcionais
A aplicação deve ser capaz de realizar as seguintes tarefas.
- [x] Cadastrar um usuário.
- [x] Retornar um usuário pelo email.
- [X] Retornar todos os usuários.
- [X] Deletar um usuário pelo email.
- [X] Atualizar um usuário pelo email.

# Rotas
## GET /user
Retorna todos os usuários.
``` json
[
  {
    "name": "foo",
    "email": "bar@gmail.com",
    "password": "foobar"
  },
  {
    "name": "foo",
    "email": "bar@gmail.com",
    "password": "foobar"
  }
]
```

## GET /user/:email
Retorna um usuário pelo email.
``` json
{
  "name": "foo",
  "email": "bar@gmail.com",
  "password": "foobar"
}
```

## POST /user
Cria um usuário.

``` json
{
  "name": "foo",
  "email": "bar@gmail.com",
  "password": "foobar"
}
```

## DELETE /user/:email
Deleta um usuário pelo email.

## PUT /user/:email
Atualiza as informações de um usuário.

``` json
{
  "name": "foo",
  "email": "bar@gmail.com",
  "password": "foobar"
}
```