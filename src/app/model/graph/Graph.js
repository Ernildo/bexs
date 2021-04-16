const {
   includes,
   initListEdges,
   getAtribute, 
   getMinor,
   visited,
   hasDestination,
   formattedList,
   minorList
} = require('./utility');

function Graph(listNodes = []) {
    
   const listEdges = initListEdges(listNodes);

   const findWay = function(node, destination) {
      
      const way = [node];
      let proceed = true;
      
      let currentNode = getAtribute(node);
      let length = listEdges[currentNode.key].length;
      let nextNode;

      while (proceed) {
         if (length > 0) {
            nextNode = getMinor(listEdges[currentNode.key]);
         
            if (!visited(way, nextNode)) {
               way.push(nextNode);
         
               if (getAtribute(nextNode).key !== destination) {
                  currentNode = getAtribute(nextNode);
                  length = listEdges[currentNode.key].length;
               
               } else proceed = false;

            } else proceed = false; 

         } else proceed = false;
      }

      return way;
   };

   const bestWay = function(routes, origin, destination) {
      
      const best = routes
         .filter(way => hasDestination(way, destination))
         .map(formattedList)
         .reduce(minorList);
   
      return (best.length ? [origin].concat(best) : []);
   }

   return {
      insertConnection(origin, destination, value) {
         
         if (includes(listEdges, origin, destination)) {
            const connection = {};
            connection[destination] = value;

            listEdges[origin].push(connection);
         }
      },

      bestRoute(origin, destination) {
         
         const routes = [];
         
         for (node of listEdges[origin]) {
            const way = findWay(node, destination); 
            routes.push(way); 
         }

         return bestWay(routes, origin, destination); 
      }
   };
}

module.exports = Graph;
