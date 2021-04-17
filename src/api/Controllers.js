const IPC = require('./IPC');

function Controllers() {

   const processParent = IPC();

   return {
      bestRouter(req, res) {
         const { route } = req.params;
         
         const info = {
            type: 'get',
            content: route 
         }; 

         processParent
            .send(info)
            .reciver(({ statusCode, data }) => {
               res.status(statusCode).json({ data });
            });
      },

      insertRouter(req, res) {
         const { route } = req.body;

         const info = {
            type: 'push',
            content: route
         };

         processParent
            .send(info)
            .reciver(({ statusCode, data }) => {
               res.status(statusCode).json({ data });
            })
      }
   };
}

module.exports = Controllers;
