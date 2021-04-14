const { fork } = require('child_process');
const path = require('path');

function Server(config) {

   const { request } = config;
   
   const local = path.join(__dirname, '../../api/app.js');
   
   const app = fork(local, { silent: true });

   app.on('message', (msg) => {
      request(msg);
   });
   
   return {
      close() {
         app.kill()
      },

      response(msg) {
         app.send(msg);
      }
   }
}

module.exports = Server;
