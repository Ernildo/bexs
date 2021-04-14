function IPC() {

   let callback = () => {}
   
   process.on('message', (msg) => {
      callback(msg);
   });

   return {
      send(msg) {
         process.send(msg);

         return {
            reciver(cb) {
               callback = cb;
            }            
         }
      }
   }
}

module.exports = IPC;
