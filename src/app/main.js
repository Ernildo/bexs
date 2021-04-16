// const { Interface } = require('./interface');

// const interface = Interface();

// interface.on('get', ({ origin, destination }) => {
//    return 'AAA-BBB';
// });

// const graph = Graph(['GRU', 'BRC', 'SCL', 'CDG', 'ORL']);

// graph.insertConnection('GRU','BRC',10);
// graph.insertConnection('BRC','SCL',5);
// graph.insertConnection('GRU','CDG',75);
// graph.insertConnection('GRU','SCL',20);
// graph.insertConnection('GRU','ORL',56);
// graph.insertConnection('ORL','CDG',5);
// graph.insertConnection('SCL','ORL',20);

// console.log(graph.bestRoute('GRU', 'CDG'));

const { Interface } = require('./interface');
const { Graph, CSV } = require('./model');


(async () => {
   try {
      const interface = Interface();
      const csv = CSV(interface.file);
      
      let placeList = await csv.list();
     
      const graph = Graph(placeList);
   
      csv.eachLine(line => {
         graph.insertConnection(line[0], line[1], parseInt(line[2]));
      }); 
      
      interface.on('get', ({origin, destination}) => {
         return graph.bestRoute(origin, destination); 
      });
   
   
   } catch (e) {
      console.log('Erro ao tentar prosseguir com a aplicação');
      console.log('error: ', e);
   
      process.kill();
   }
})(); 
