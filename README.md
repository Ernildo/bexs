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
<br/>

## 💡 Sobre

Esse sistema faz parte de uma avaliação de competência através de um teste prático admisional.

Seu objetivo é simular um aplicativo de viagem. Sendo assim, ele deve encontrar o melhor caminho possível entre dois lugares. Ou seja, o sistema lê um arquivo \*.csv que contém informações sobre diversas rotas, insere esses dados em um **grafo** (estrutura de dados), manipula essas informações utilizando como base o algorítmo de _dijkstra_ e devolve o trajeto que possui o menor preço.

Preferencialmente o arquivo com as rotas deve está contido na pasta raiz do projeto. Além disso, deve ser estruturado da seguinte forma:<br/>

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

### Observações

O sistema foi escrito puramente em Javascript (ES6+) e é executado em cima da runtime NodeJs. Com excessão do _express_ para fazer a abstração das requsições na API REST, não foi utilizado nenhuma outra biblioteca externa aos módulos padrão.
