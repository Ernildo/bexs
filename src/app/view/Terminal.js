const readline = require('readline');

function Terminal(config) {

   const { printDefault, read } = config;

   const scan = readline.createInterface({
      input: process.stdin,
      output: process.stdout
   });
   
   const getLine = () => {
      scan.question(printDefault, (answar) => {
         const line = answar.toString('utf8');
         read(line);
         scan.pause();
      });
   }
   
   scan.on('pause', () => {
      getLine();
   });
   
   getLine();

   return {
      print(msg) {
         console.log(msg);
      }
   };
}

module.exports = Terminal;
