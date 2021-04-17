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

      interface.on('push', ({origin, destination, price}) => {
         return csv.write([origin, destination, parseInt(price)]);
      });

      csv.on('close-write', (data) => {
         graph.insertNode(data[0], data[1]);
         graph.insertConnection(...data);
      });
   
   } catch (e) {
      console.log('Erro ao tentar prosseguir com a aplicação');
      console.log('error: ', e);
   
      process.kill();
   }
})(); 
