const { Terminal, Server } = require('../view');
const { Transform } = require('../model');

function Interface() {

   const events = {
      'get': () => {},
      'push': () => {}
   };

   const terminal = Terminal({
      printDefault: 'please enter the route: ',
      
      read(line) {
         const trasnsform = Transform(line);
         
         if (trasnsform.test) {
            const response = events.get(trasnsform.parse);
            terminal.print(`the best route is: ${response}`);
         } else {
            terminal.print('syntax error');
         }
      }
   });

   const server = Server({
      request(msg) {
         const trasnsform = Transform(msg);

         if (trasnsform.test) {
            const res = events.get(trasnsform.parse);
            server.response(res);
         } else {
            server.response('error');
         }
      }
   })

   return {
      on(eventName, callback) {
         if (Object.keys(events).includes(eventName)) events[eventName] = callback;
      }
   }
}

module.exports = Interface;