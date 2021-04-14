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
            .reciver(({ statusCode, statusText }) => {
               res.status(statusCode).json({ statusText });
            });
      },

      insertRouter() {}
   };
}

module.exports = Controllers;
