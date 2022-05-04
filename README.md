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
  <br />
    <br />
 <a href="https://gitpod.io/#https://github.com/hebertcisco/eplacas">
      <img alt="Gitpod ready-to-code" src="https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod" />
    </a>
  <a href="https://www.android.com/intl/pt-BR_br/">
      <img alt="Android_Studio-3DDC84" src="https://img.shields.io/badge/Android_Studio-3DDC84?style=flat&logo=android-studio&logoColor=white" />
    </a>
  <a href="https://www.jetbrains.com/webstorm/">
      <img alt="WebStorm" src="https://img.shields.io/badge/WebStorm-000000?style=flat&logo=WebStorm&logoColor=white" />
    </a>
 <br />
    <br />
 <a href="https://reactnative.dev/">
      <img alt="React_Native" src="https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB" />
    </a>
  <a href="https://www.android.com/intl/pt-BR_br/">
      <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-323330?style=flat&logo=javascript&logoColor=F7DF1E" />
    </a>
  <a href="https://www.jetbrains.com/webstorm/">
      <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC??style=flat&logo=typescript&logoColor=white" />
    </a>
    <br />
    <br />
  <a href="https://github.com/hebertcisco/eplacas/issues/new/choose">Report Bug</a>
  <a href="https://github.com/hebertcisco/eplacas/issues/new/choose">Request Feature</a>
  </p>
<h3 align="center">Systems on which it has been tested:</h3>
 <p align="center">
  <a href="https://www.android.com/intl/pt-BR_br/">
      <img alt="Android-3DDC84" src="https://img.shields.io/badge/Android-3DDC84?style=flat&logo=android&logoColor=white" />
    </a>
  </p>
<p align="center">Gostou o projeto? Por favor considere <a href="https://www.buymeacoffee.com/hebertcisco">ser um apoiador</a>!</p>

<p align="center"><strong>App para consulta de placa veicular integrado aos sistemas do Sinesp Cidadão</strong>✨</p>

> #### [Download on Google Play Store](https://play.google.com/store/apps/details?id=com.eplacas)

## User Stories

-   [x] O usuário insere uma placa veícular e aperta pesquisar
-   [x] É retornado o resultado sobre a placa veicular
-   [x] O usuário pode visualizar uma lista que contém o histórico de consultas

## Bonus features

-   [x] O usuário pode verificar se a placa veicular é válida

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

> Link para obter chaves da API: [https://eplacas.p.rapidapi.com/subscription](https://api-placas.hotbrains.com.br/subscription)

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

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](issues).

## Show your support

Give a ⭐️ if this project helped you!

Or buy me a coffee 🙌🏾

<a href="https://www.buymeacoffee.com/hebertcisco">
    <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=hebertcisco&button_colour=FFDD00&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" />
</a>

## 📝 License

Copyright © 2022 [Hebert F Barros](https://github.com/hebertcisco).<br />
This project is [MIT](LICENSE) licensed.
