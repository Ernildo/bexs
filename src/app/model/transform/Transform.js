function Transform(inputLine) {
   
   const regexList = [
      /^[A-Z]{3,3}-[A-Z]{3,3}$/,
      /^[A-Z]{3,3}-[A-Z]{3,3}-[0-9]{1,}$/
   ];

   const keys = ['origin', 'destination', 'price'];

   const lineToObject = () => {
      return inputLine
         .split('-')
         .reduce((acc, el, index) => {
            const key = keys[index];
            acc[key] = el;
            return acc;
         }, {});
   }

   return {
      get test() {
         return regexList
            .map(el => el.test(inputLine))
            .includes(true);
      },

      get parse() {
         if (this.test) {
            return lineToObject();
         }
      }
   }
}

module.exports = Transform;
