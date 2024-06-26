// N1.
// 	function func(num) {
//   if((num % 10) % 2 === 0) {
//   return false
//  }
//  num = Math.floor(num / 10)

//  if(num === 0){
//   return true
//  }
//  return func(num)
//  }
	

// N2. 

//   function func(arr) {
//   arr.sort((a, b) => a - b);

//   if (arr[0] >= 0) {
//     return arr[0];
//   } else if (arr.length === 0) {
//     return -1;
//   }

//   arr.shift();

//   return func(arr);
// }  


// N3.

// 	function func(arr, i = 0) {
    
//     if (i >= arr.length - 1) {
//         return -1;
//     }

//     if(arr[i] > arr[i + 1]) {
//         return i + 1
//     }
    
//     return func(arr, i + 1)
// }
	

// N4.
	
//     function func(arr, i = 0) {
//     let a = arr.pop()
//     if(i === arr.length) {
//         return arr
//     }

//     arr.unshift(a);

//     return func(arr, i + 1)
// }


// N5. 
	
// function func(arr, n) {
//     if(n === 0) {
//         return arr
//     }

//     arr.unshift(arr.pop());

//     return arr.slice(-n).concat(arr.slice(0, -n))
// }
	