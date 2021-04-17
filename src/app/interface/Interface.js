const Terminal = require('./Terminal');
const Server = require('./Server');
const { Transform } = require('../model');

const path = require('path');
const fs = require('fs');

function Interface() {

   const events = {
      push: () => {},
      get:  () => {}
   };

   const method = (line, type, callback) => {
      const trasnsform = Transform(line); 

      if (trasnsform.test) {
         const response = events[type](trasnsform.parse);
         callback(response);
      } else {
         callback(null);
      }
   }

   const terminal = Terminal({
      printDefault: 'please enter the route: ',
      
      read(line) {
         method(line, 'get', (res) => {
            const msgError = 'Syntax error';

            const msg = (res) ? `best route: ${Transform().output(res).terminal}` : msgError;
            
            terminal.print(msg);
         });
      }
   });

   const server = Server({
      request({ type, content }) {
         method(content, type, (res) => {
            
            const msg = {
               statusCode: res ? 200 : 400,
               data: res || 'error'
            };
            
            server.response(msg);
         });
      }
   });

   return {
      on(eventName, callback) {
         if (Object.keys(events).includes(eventName)) events[eventName] = callback;
      },

      get file() {
         const nameFile = path.join(__dirname, `../${process.argv[2]}`);

         if (!nameFile) throw new Error('arquivo não informado');

         if (fs.existsSync(nameFile)) return nameFile; 
         
         throw new Error('impossível localizar o arquivo'); 
      }
   };
}

module.exports = Interface;
