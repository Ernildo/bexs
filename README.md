<h1 align="center" style="font-weight: 600;"> Rota de Viagem </h1>

<p align="center">
   Aplicação que encontra o melhor caminho entre dois lugares a partir de um arquivo *.csv contendo as rotas (origem e destino) e seus respectivos preços.
</p>
<br/>
<p align="center">
   <img src="https://img.shields.io/static/v1?style=for-the-badge&message=1.0.0&label=version&color=blue"/>

   <img src="https://img.shields.io/static/v1?style=for-the-badge&message=MIT&label=licence&color=green"/>

   <img src="https://img.shields.io/static/v1?style=for-the-badge&message=7.5.4&label=NPM&color=red"/>

   <img src="https://img.shields.io/static/v1?style=for-the-badge&message=14.15.1&label=node&color=#27ae60"/>

   <img src="https://img.shields.io/static/v1?style=for-the-badge&message=^es6&label=js&color=yellow"/>
</p>

<h4 align="center"> 
	✅  Rota de Viagem 🏆 Finalizado!  ✅
</h4>

<br>

<p align="center">
 <a href="#sobre">Sobre</a> •
 <a href="#arquitetura">Arquitetura</a> • 
 <a href="#instalacao">Instalação</a> • 
 <a href="#como_usar">Como Usar</a> • 
</p>

<br>

<h2>
   💡 <a id="sobre">Sobre</a>
</h2>

<br>
Esse sistema faz parte de uma avaliação de competência através de um teste prático admissional.
<br><br>

Seu objetivo é simular um aplicativo de viagem. Sendo assim, ele deve encontrar o melhor caminho possível entre dois lugares. Ou seja, o sistema lê um arquivo \*.csv que contém informações sobre diversas rotas, insere esses dados em um **grafo** (estrutura de dados), manipula essas informações utilizando como base o algoritmo de _dijkstra_ e devolve o trajeto que possui o menor preço.

<br>
Obrigatoriamente o arquivo com as rotas deve estar contido na pasta raiz do projeto. Além disso, deve ser estruturado da seguinte forma:
<br>

```csv
<origem>,<destino>,<preço>
```

Um exemplo pode ser visto a seguir:

```csv
GRU,BRC,10
BRC,SCL,5
GRU,CDG,75
GRU,SCL,20
GRU,ORL,56
ORL,CDG,5
SCL,ORL,20
```

#### Observações

O sistema foi escrito puramente em Javascript (ES6+) e é executado em cima da runtime NodeJs. Com exceção do _express_ para fazer a abstração das requisições na API REST, não foi utilizado nenhuma outra biblioteca externa aos módulos padrão.

<hr/>

<h2>
   🧰 <a id="arquitetura"> Arquitetura </a>
</h2>

<br>

A estruturação do projeto se dá em duas esferas: **diretórios** e **paradigmas**.

### Estrutura de diretórios

A estrutura de diretórios principal segue o seguinte padrão:

```
src
|--api
|--app
```

- A pasta **api** contém os arquivos necessários para executar o servidor que irá suportar a API REST
- A pasta **app** contém os arquivos da aplicação principal.

A pasta **app** possui a seguinte árvore de diretórios:

```
app
|--inteface
|--model
|--main.js
```

- O diretório **interface** contém os arquivos que implementam a interface entre o usuário e a máquina. Portanto é aqui que são implementados as abstrações tanto do Terminal quanto do Servidor por meio da API REST.

- O diretório **model** contém os arquivos que implementam as abstrações de grafos, módulos de validações de string e afins.

### Paradigmas

A aplicação foi inteiramente desenvolvida em javascript. Sendo assim, tendo em vista o caráter dinâmico intrínseco à linguagem, três paradigmas diferentes podem ser encontrados nos códigos fonte:

- **Orientação a Objetos**: Utilizado basicamente com funções fábrica.
- **Orientação a Eventos**: Utilizado na implementação de módulos que disparam algum evento sempre que algum gatilho for disparado.

### Observações

O conceito de IPC (_inter processessing comunication_) foi utilizado para fazer a aplicação principal (app) se comunicar com o servidor (api).

<hr/>

<h2>
   ⚙️ <a id="instalacao">Instalação</a>
</h2>

<br>
Para instalar o sistema realize os seguinte execute os seguintes passos:
<br>
<br>

- Faça o clone do projeto com o comando:

```
git clone https://github.com/Ernildo/bexs.git
```

- Na pasta do projeto, execute o seguinte comando para baixar as dependências:

```
npm install
```

<hr>

<h2>
   ⚒️ <a id="como_usar">Como Usar</a>
</h2>

<br>

Após a instalação, entre no diretório raiz do projeto e insira o arquivo .csv que contém as rotas.
<br>

- Antes:

```
bexs
|--src
|--.gitignore
|--README.md
|--package-lock.json
|--package.json
```

- Despois:

```
bexs
|--src
|--.gitignore
|--README.md
|--package-lock.json
|--package.json
|--<seu_arquivo_de_rotas>.csv
```

### Executando a aplicação

<br>

Ao executar a aplicação, o usuário poderá se comunicar com o sistema por duas formas: **Console do terminal** e/ou **API REST**

<br>

Para executar a aplicação, na pasta do projeto, digite o seguinte comando:

```npm
npm start <nome_do_arquivo_de_rotas>.csv
```

Ao digitar o comando anterior, o sistema irá ocupar o terminal com a interface de console. Toda via, o servidor com suporte a API estará rodando em background e já poderá receber requests imediatamente.

#### INTERAGINDO PELO CONSOLE

<br>

A interação pelo console do terminal possibilitará ao usuário apenas vizualizar a melhor rota. Para isso, o usuário deve informar um input no padrão "DE-PARA".

Exemplo:

```
$please enter the route: GRU-CGD
$best route: GRU - BRC - SCL - ORL - CDG > $40

$please enter the route: BRC-CDG
$best route: BRC - ORL > $30

$please enter the route: AAA-BBB
$best route: route unavailable

$please enter the route: qualquer outra coisa
$syntax error

$please enter the route:
```

<br>

#### INTERAGINDO PELA API REST

<br>

Para testar a api, recomenda-se o uso de alguma ferramenta de suporte a requisições como o **Postman** ou **Insomnia**

<br>

Documentação da API

<br>

OBS: Para testar a aplicação rodando em uma máquina local, o **Endpoint** padrão é: `http://localhost:3000`

<br>

- Para consultar o melhor caminho:

|    Rota     | Método HTTP | Parâmeto | Formato do parâmetro | Resposta |      Exemplo de Resposta       |       Exemplo       |
| :---------: | :---------: | :------: | :------------------: | :------: | :----------------------------: | :-----------------: |
| /best_route |     GET     |   SIM    |       /DE-PARA       |   JSON   | `{ data: ['AAA', 'BBB', 10] }` | /best_route/AAA-BBB |

<br>

- Para inserir um novo itinerário:

|     Rota      | Método HTTP | Tipo do Corpo da Requisição | Formato do Corpo da Requisição | Tipo de Resposta |      Exemplo de Resposta       |
| :-----------: | :---------: | :-------------------------: | :----------------------------: | :--------------: | :----------------------------: |
| /insert_route |    POST     |            JSON             |  `{ "route": "AAA-BBB-10" }`   |       JSON       | `{ data: ['AAA', 'BBB', 10] }` |
