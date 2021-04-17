const readline = require('readline');
const fs = require('fs');

const path = require('path');

function CSV(localFile) {
   
   const events = {
      'close-each': () => {},
      'close-write': () => {}
   };

   const getFileInput = function() {
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
         const file = getFileInput();
         
         file.on('line', line => {
            const data = line.split(',');
            callback(data);
         });

         file.on('close', () => events['close-each']())
      },

      list() {
         return new Promise(resover => {
            const file = getFileInput();
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

      write(data = []) {
         const route = `\n${data.join(',')}`;
         
         fs.appendFileSync(localFile, route, {encoding: 'ascii'});
         events['close-write'](data);
         
         return data;
      }, 
   };
}

module.exports = CSV;
