// N1.
//  function deepClone(obj) {
//     return Object.entries(obj).reduce(function(acc, [key, value]){
//         if(typeof value === 'object') {
//            acc[key] = deepClone(value);
//         } else {
//             acc[key] = value;
//         }
//         return acc;
//     },{})
// }

// N2.

// function range(x, y) {
//     if(x + 1 >= y) {
//         return [];
//     } 
//     return [x + 1].concat(range(x + 1, y))
// }

// N3.

   // function sort(arr, x, y) {
   //  let result = [];
   //  let map = new Map();

   //  for(let elem of arr) {
   //    map.set(elem, (map.get(elem) || 0) + 1)
   //  }
   //  for(let i = x + 1; i <= y - 1; i++) {
   //    if(map.has(i)) {
   //       for(let j = 0; j < map.get(i); j++) {
   //          result.push(i)
   //       }
   //    }
   //  }
   //  return result
   // } 


