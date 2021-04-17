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
