<h1 align="center">
<img src="https://user-images.githubusercontent.com/60453269/208093725-a62bf280-5ca5-42f5-b4ca-7fdbef2c4212.png">
</h1>

<br/>

# 🏆 Objetivo

<p>
  O objetivo da criação desse projeto é ter uma arquitetura de software simples, eficiente e padrão para se usar no Back-end. Geralmente os projetos de Back-end sempre têm as mesmas pastas e estrutura, sendo assim criei uma pasta para agilizar o processo inicial de criação, padronizando as pastas e importando as principais tecnologias no Back-end, como TypeScript, Jest e alguma conexão com banco de dados.
</p>

<br/>

# 🗂 Estrutura do Projeto 

- src : Pasta principal onde fica toda esturutura.
- business: As regras de negocios de todo cistema aqui fica a estrutura logica do back-end.
- controller: Controle de tudo que entra e sai do back-end aqui é onde chega os dados e sai os dados.
- database: Controle dos bancos de dados aqui é onde fica a conecção direta de algum banco de dado.
- errors: Retorno de uma mensagem com o error, funções pre programada de erros comuns.
- models: Todos Types de todo o projeto.
- router: Controle de rota da url.
- services: Serviçõs esterno que esta sendo importado e usado. 

- tests: Pasta principal onde fica toda esturutura.
- mocks: Testes com dados constantes pre programados

<br/> 

![image](https://user-images.githubusercontent.com/60453269/208092766-fe07a854-2533-4436-a794-7122db96ddd1.png)

<br/> 

# 🎣 Todas importações 
<br/> 

## `typescript` 

```Bash
npm i -D typescript @types/node
```
<br/> 

## `express, cors, dotenv, knex, uuid, jsonwebtoken, bcryptjs ` 

```Bash
npm i -D @types/express @types/cors @types/knex @types/uuid @types/jsonwebtoken @types/bcryptjs @types/jest
```
<br/> 

## `jest e ts-jest` 

```Bash
npm i -D ts-node-dev jest ts-jest
```
<br/> 


<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=65&section=footer"/>
</p>
