const includes = function verifyKeyInObject(obj, ...keys) {
   
   return keys
      .map((key) => Object.keys(obj).includes(key))
      .reduce((status, currentStatus) => (status &= currentStatus));
};

const initListEdges = function returnObjectWithEdges(listNodes = []) {

   const listEdges = listNodes.reduce((obj, key) => {
      if (!includes(obj, key)) obj[key] = [];

      return obj; 
   }, {}); 

   return listEdges;
};

const getAtribute = function returnAtributesOf(object) {

   return {
      get key() {
         return Object.keys(object)[0];
      },

      get value() {
         return Object.values(object)[0];
      }
   }
};

const getMinor = function returnMiniorInObjects(listObject) {

   return listObject.reduce((currentNode, lastNode) => {
      const current = getAtribute(currentNode).value;
      const last = getAtribute(lastNode).value;

      return (current <= last) ? currentNode : lastNode;
   });
};

const visited = function checkObjectInList(list, object) {
   
   return list
      .map(obj => getAtribute(obj).key === getAtribute(object).key)
      .includes(true);
};

const hasDestination = function filterListThatHasDestination(list, destination) {
   
   return list.filter(obj => getAtribute(obj).key === destination);
};

const formattedList = function transformArrayOfObjectsInList(list) {
   
   const formatted = list.map(obj => getAtribute(obj).key);
   const total = list.reduce((acc, obj) => acc += getAtribute(obj).value, 0);
   
   formatted.push(total);

   return formatted;
};

const minorList = function getMinorList(list1, list2) {

   const valueList1 = list1[list1.length - 1];
   const valueList2 = list2[list2.length - 1];

   return (valueList1 <= valueList2) ? list1 : list2;
}; 

module.exports = {
   includes,
   initListEdges,
   getAtribute, 
   getMinor,
   visited,
   hasDestination,
   formattedList,
   minorList
};