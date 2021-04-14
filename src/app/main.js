const { Interface } = require('./controller'); 

const interface = Interface();

interface.on('get', () => {
   return 'AAA-BBB';
});