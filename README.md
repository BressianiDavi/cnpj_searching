# Desafio Técnico, processo seletivo da WeDecode - CNPJ search 
Este projeto é implantado automaticamente na Vercel através de CI/CD: https://cnpj-searching.vercel.app/#/

#
O cnpj searching foi criado com o intuito de realizar o desafio técnico proposto pela empresa WeDecode durante o processo de seleção.
# 
Este projeto foi iniciado com o VueJS e suas ferramentas, sendo o Vuetify para as estilizações e o Vue Router para controle de rotas, além do uso da lib V-Mask para mascarar os campos de texto.
# 
As informações foram retiradas da API Receita WS: receitaws.com.br
#
Para a leitura das informações, devido a política de navegação, não foi possível requisita-las diretamente do servidor da receitaWS, por isso foi necessário a utilização da lib JsonP, que é uma forma de comunicação com o servidor através de um callBack, executando uma função e devolvendo a resposta sendo ela um erro ou um dado.
#
Todas as informações foram garantidas através de verificações com o JavaScript, exibindo todos os erros caso alguma informação não seja exibida e evitando requisições desnecessárias na API quando as informações são inválidas.
#
Foi utilizada a função do sessionStorage para criação de um sistema de cache, evitando assim requições repetidas e economizando recursos do servidor. e o localStorage para a criação de um histórico.
Também foi utilizado o localStorage para criar um sistema de histórico, guardando assim as informações sobre as requisições feitas anteriormente, podendo assim voltar nelas apenas clicando e carregando essa informação do cache.
#
Foi feito o uso da biblioteca date-fns para formatação da data para pt-BR.

#

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
