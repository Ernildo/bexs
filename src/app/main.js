const { Interface } = require('./interface');

const interface = Interface();

interface.on('get', ({ origin, destination }) => {
   return 'AAA-BBB';
});

// const graph = Graph(['GRU', 'BRC', 'SCL', 'CDG', 'ORL']);

// graph.insertConnection('GRU','BRC',10);
// graph.insertConnection('BRC','SCL',5);
// graph.insertConnection('GRU','CDG',75);
// graph.insertConnection('GRU','SCL',20);
// graph.insertConnection('GRU','ORL',56);
// graph.insertConnection('ORL','CDG',5);
// graph.insertConnection('SCL','ORL',20);

// console.log(graph.bestRoute('GRU', 'CDG'));