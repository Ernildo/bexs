const { Terminal, Server } = require('../view');
const { Transform } = require('../model');

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
            const msgSuccess = `the best route is: ${res}`;
            const msgError = 'Syntax error';

            const msg = (res) ? msgSuccess : msgError;
            
            terminal.print(msg);
         });
      }
   });

   const server = Server({
      request({ type, content }) {
         method(content, type, (res) => {
            
            const msg = {
               statusCode: res ? 200 : 400,
               statusText: res || 'error'
            };

            server.response(msg);
         });
      }
   });

   return {
      on(eventName, callback) {
         if (Object.keys(events).includes(eventName)) events[eventName] = callback;
      }
   };
}

module.exports = Interface;
