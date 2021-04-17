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

      insertRouter() {}
   };
}

module.exports = Controllers;
