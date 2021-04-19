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

## 💡 Sobre

<br>
Esse sistema faz parte de uma avaliação de competência através de um teste prático admisional.
<br><br>

Seu objetivo é simular um aplicativo de viagem. Sendo assim, ele deve encontrar o melhor caminho possível entre dois lugares. Ou seja, o sistema lê um arquivo \*.csv que contém informações sobre diversas rotas, insere esses dados em um **grafo** (estrutura de dados), manipula essas informações utilizando como base o algorítmo de _dijkstra_ e devolve o trajeto que possui o menor preço.

<br>
Preferencialmente o arquivo com as rotas deve está contido na pasta raiz do projeto. Além disso, deve ser estruturado da seguinte forma:
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

O sistema foi escrito puramente em Javascript (ES6+) e é executado em cima da runtime NodeJs. Com excessão do _express_ para fazer a abstração das requsições na API REST, não foi utilizado nenhuma outra biblioteca externa aos módulos padrão.

<hr/>

## 🧰 Arquitetura

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

- O diretório **model** contém os arquivos que implementam as asbtrações de grafos, módulos de validações de string e afins.

### Paradigmas

A aplicação foi inteiramente desenvolvida em javascript. Sendo assim, tendo em vista o carater dinâmico intrínseco a linguagem, três paradigmas diferentes podem ser encontrados nos códigos fonte:

- **Orientação a Objetos**: Utilizado basicamente com funções fábrica.
- **Orientação a Eventos**: Utilizado na implementação de módulos que disparam algum evento sempre que algum gatilho for disparado.

### Observações

O conceito de IPC (_inter processessing comunication_) foi utilizado para faazer a aplicação principal (app) se comunicar com o servidor (api).

<hr/>

## ⚙️ Instalação

<br>
Para instalar o sistema realize os seguinte execute os seguites passos:
<br>
<br>

- Faça o clone do projeto com o comando:

```
git clone https://github.com/Ernildo/bexs.git
```

- Na pasta do projeto, execute o seguinte comando para baixar as depdências:

```
npm install
```
