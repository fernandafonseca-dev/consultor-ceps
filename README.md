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


## Como executar

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

- O servidor Express responde `GET /` com `public/pages/index.html`.  
- Os arquivos estáticos são servidos em `/assets` (`main.css` e `main.js`).  
- No navegador, o usuário digita um CEP e pressiona `Enter`.  
- O JavaScript remove todos os caracteres não numéricos (`replace(/\D/g, "")`).  
- Se o resultado não tiver 8 dígitos, exibe erro.  
- Se tiver 8 dígitos, exibe estado de carregamento e faz `fetch` no ViaCEP.  
- A interface mostra erro (`response.ok === false` ou `data.erro`) ou sucesso com os dados retornados.  
- Quando o input fica vazio, o resultado é limpo.  

---

## Explicação das funções do main.js

**Arquivo:** `public/assets/js/main.js`

### `showResult(message, type)`

- Atualiza `#result` com HTML (`innerHTML`).  
- Aplica classe CSS dinâmica:
  - `result error`
  - `result loading`
  - `result success`

---

### `handleCepSearch()`

**Fluxo implementado:**

1. Lê o valor do input e normaliza para apenas dígitos.  
2. Valida tamanho de 8 dígitos.  
3. Exibe `"Consultando CEP..."`.  
4. Faz GET `https://viacep.com.br/ws/{cep}/json/`.  
5. Se `response.ok` for falso, exibe `"Falha o serviço."`.  
6. Se `data.erro` vier verdadeiro, exibe `"CEP não encontrado."`.  
7. Caso contrário, exibe os dados retornados com sucesso.  
8. Quando o input fica vazio, o resultado é limpo.  

---

## Observações

- Certifique-se de que a porta definida no `.env` está disponível.  
- O projeto utiliza a API pública ViaCEP, portanto depende de conexão com a internet.  
- Nenhuma chave de API é necessária.  

