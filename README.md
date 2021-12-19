<p align="center">
 <img width="100px" src="https://raw.githubusercontent.com/hebertcisco/eplacas/master/.github/images/favicon512x512.png" align="center" alt="E-Placas" />
 <h2 align="center">:package: 🚗 E-Placas</h2>
 <p align="center">App para consulta de placa veicular integrado aos sistemas do Sinesp Cidadão</p>
</p>

  <p align="center">
    <a href="https://github.com/hebertcisco/eplacas/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/hebertcisco/eplacas?style=flat&color=336791" />
    </a>
    <a href="https://github.com/hebertcisco/eplacas/pulls">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/hebertcisco/eplacas?style=flat&color=336791" />
    </a>
<a href="https://rapidapi.com/tecnobertinfo@gmail.com/api/eplacas/">
      <img alt="API Build" src="https://app.travis-ci.com/hebertcisco/eplacas-api.svg?token=szEd4h6zscKEu4AcaFRL&branch=master" />
    </a>
    <a href="https://circleci.com/gh/hebertcisco/eplacas">
      <img alt="CircleCI" src="https://circleci.com/gh/hebertcisco/eplacas.svg?style=svg" />
    </a>
 <a href="https://gitpod.io/#https://github.com/hebertcisco/eplacas">
      <img alt="Gitpod ready-to-code" src="https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod" />
    </a>
    <br />
    <br />
  <a href="https://github.com/hebertcisco/eplacas/issues/new/choose">Report Bug</a>
  <a href="https://github.com/hebertcisco/eplacas/issues/new/choose">Request Feature</a>
  </p>

<p align="center">Gostou o projeto? Por favor considere <a href="https://www.buymeacoffee.com/hebertcisco">ser um apoiador</a> e receba brindes exclusivos!</p>

<p align="center"><strong>App para consulta de placa veicular integrado aos sistemas do Sinesp Cidadão</strong>✨</p>

> #### [Download APK V1.0](https://github.com/hebertcisco/eplacas/releases/download/v1.0/app-release.apk)

## User Stories

-   [x] O usuário insere uma placa veícular e aperta pesquisar
-   [x] É retornado o resultado sobre a placa veicular
-   [ ] O usuário pode visualizar uma lista que contém o histórico de consultas

## Bonus features

-   [ ] O usuário pode verificar se a placa veicular é válida

## Useful links and resources

-   [Placas de identificação de veículos no Brasil](https://pt.wikipedia.org/wiki/Placas_de_identifica%C3%A7%C3%A3o_de_ve%C3%ADculos_no_Brasil)
-   [Tire dúvidas sobre as placas dos automóveis](http://g1.globo.com/Noticias/Carros/0,,MUL1184638-9658,00-TIRE+DUVIDAS+SOBRE+AS+PLACAS+DOS+AUTOMOVEIS.html)
-   [Font usada nas placas(mandatory)](http://www.k-type.com/fonts/mandatory/)

## Development environment

If you want to run the application in your local environment you will need to set the environment to react native.

> To configure the environment on your machine see the instructions on the react-native website.

[Setting up the development environment](https://reactnative.dev/docs/environment-setup)

### Clone the repository

```sh
git clone https://github.com/hebertcisco/eplacas

cd eplacas
```

## Important notes

Firebase was used in the project to catch errors and monitoring. You will need to create a project in the firebase console and configure the project.

[Console Firebase](https://console.firebase.google.com)

#### Remeber:

> Add `google-services.json` to root path, You can achieve this by creating a new project in firebase.

Assuming that you have [**Node 14 LTS**](https://nodejs.org/en/download/) or greater installed, you can use npm to install the dependencies:

```sh
npm install
```

This will start a development server for you.

```sh
npm start
```

## Running the application 🚚

> On another terminal you will have to run the command to open the app on your mobile device or emulator.

### Android

```sh
npm run android
```

### iOS

```sh
npm run ios
```

## CI Currently includes:

- circleci

# Portuguese api documentation

## Documentação E-Placas API

> Link para obter chaves da API: [https://eplacas.p.rapidapi.com/subscription](https://rapidapi.com/tecnobertinfo@gmail.com/api/eplacas/)

Essa é a documentação básica relacionada à API do E-Placas. Será descrito como a API funciona, como utilizar a mesma, e como utilizar os serviços disponíveis.

> **Este documento é um guia de uso da API.**

### Endpoints disponíveis

#### (/status) - Verificação de status da API
    GET /status HTTP/1.1
    Host: eplacas.p.rapidapi.com
    x-rapidapi-host: eplacas.p.rapidapi.com
    x-rapidapi-key: example-base64

#### (/consulta/list?limit=10) - Consulta as últimas placas cadastradas na minha base de dados
    GET /consulta/list?limit=10 HTTP/1.1
    Host: eplacas.p.rapidapi.com
    x-rapidapi-host: eplacas.p.rapidapi.com
    x-rapidapi-key: example-base64

#### (/consulta/{plate}) - Consulta uma placa específica
    GET /consulta/AAA1111 HTTP/1.1
    Host: eplacas.p.rapidapi.com
    x-rapidapi-host: eplacas.p.rapidapi.com
    x-rapidapi-key: example-base64
