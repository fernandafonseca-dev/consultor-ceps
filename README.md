# Consultor de CEPs

## Objetivo
Construir uma página com **HTML dinâmico + requisição HTTP** para consultar CEPs na API ViaCEP.

## Tecnologias utilizadas

* **Node.js**
* **Express**
* **dotenv**
* **HTML/CSS/JavaScript** (front-end)
* **API pública ViaCEP** ([https://viacep.com.br/ws/{cep}/json/](https://viacep.com.br/ws/{cep}/json/))

## Estrutura do projeto

```text
.
├── .env
├── server.js
├── package.json
└── public
    ├── assets
    │   ├── css/main.css
    │   └── js/main.js
    └── pages/index.html
```


##  Como executar

### Pré-requisitos

- Node.js 18+ (recomendado)  
- npm  

### Passos

1. Instale as dependências:

```bash
npm install
```

2. Defina a porta no arquivo .env:
```bash
PORT=3002
```

3. Execute em modo desenvolvimento (reinício automático):
 ```bash
npm run dev
```

4. Abra no navegador:
 ```bash
[npm run dev](http://localhost:3002)
```

## Fluxo geral da aplicação

1. O servidor Express responde GET / com public/pages/index.html.
2. Os arquivos estáticos são servidos em /assets (main.css e main.js).
3. No navegador, o usuário digita um CEP e pressiona Enter.
4. O JavaScript remove todos os caracteres não numéricos (replace(/\D/g, "")).
5. Se o resultado não tiver 8 dígitos, exibe erro.
6. Se tiver 8 dígitos, exibe estado de carregamento e faz fetch no ViaCEP.
7. A interface mostra erro (response.ok === false ou data.erro) ou sucesso com os dados retornados.
8. Quando o input fica vazio, o resultado é limpo.



