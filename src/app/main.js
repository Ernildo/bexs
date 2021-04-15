const { Interface } = require('./controller');

const interface = Interface();

interface.on('get', ({ origin, destination }) => {
   return 'AAA-BBB';
});