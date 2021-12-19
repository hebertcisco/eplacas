# E-Placas API Documentation

## Introduction

Essa é a documentação básica relacionada à API do E-Placas. Será descrito como a API funciona, como utilizar a mesma, e como utilizar os serviços disponíveis.

> **Este documento é um guia de uso da API.**

### Endpoints disponíveis

#### [/status] - Verificação de status da API
    GET /status HTTP/1.1
    Host: eplacas.p.rapidapi.com
    x-rapidapi-host: eplacas.p.rapidapi.com
    x-rapidapi-key: example-base64

#### [/consulta/list?limit=10] - Consulta as últimas placas cadastradas na minha base de dados
    GET /consulta/list?limit=10 HTTP/1.1
    Host: eplacas.p.rapidapi.com
    x-rapidapi-host: eplacas.p.rapidapi.com
    x-rapidapi-key: example-base64

#### [/consulta/{plate}] - Consulta uma placa específica
    GET /consulta/AAA1111 HTTP/1.1
    Host: eplacas.p.rapidapi.com
    x-rapidapi-host: eplacas.p.rapidapi.com
    x-rapidapi-key: example-base64
