const express = require('express');

const app = express();

app.use(express.json());

function envia() {
   
   let cb = () => {};
   process.on('message', msg => {
      cb(msg);      
   })

   return {
      set(fnc) {
         cb = fnc;
      }
   }
}

const t = envia()

app.get('/best_route/:route', (req, res) => {
   const { route } = req.params;
   process.send(route);
   t.set((msg) => {
      res.send(msg);
   })
});

app.listen(3000);