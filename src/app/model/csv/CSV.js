const readline = require('readline');
const fs = require('fs');

const path = require('path');

function CSV(localFile) {
   
   const events = {
      'close-each': () => {}
   };

   const getFile = function() {
      const file = readline.createInterface({
         input: fs.createReadStream(localFile, { encoding: 'ascii' })
      });

      return file;
   };

   return {
      on(eventName, callback) {
         if (Object.keys(events).includes(eventName)) events[eventName] = callback;
      },

      eachLine(callback) {
         const file = getFile();
         
         file.on('line', line => {
            const data = line.split(',');
            callback(data);
         });

         file.on('close', () => events['close-each']())
      },

      list() {
         return new Promise(resover => {
            const file = getFile();
            const placeList = [];
   
            file.on('line', line => {
               line
                  .split(',')
                  .filter((_, index) => (index >= 0 && index < 2))
                  .forEach(el => {
                     if (!placeList.includes(el)) placeList.push(el);
                  });
            });
   
            file.on('close', () => resover(placeList));
         });
      },

      write(data, cb) {}, 
   };
}

// const local = path.join(__dirname, 'teste.csv');
// const file = CSV(local);

// file.on('close-each', () => console.log('finalizou o arquivo'));

// file.eachLine(data => console.log(data));
// file.list(console.log);

module.exports = CSV;