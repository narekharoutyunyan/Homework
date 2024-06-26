// N1.
// 	function func(num){
//      if(num <= 1){
//        return 'no'
//      }

//     for(let i = 2; i < num; i++){
//         if(num % i === 0){
//             return 'no'
//         } 
//     }
//     return 'yes'
      
// }
	

// N2. 

//   function func(num){
//     if(num < 0){
//         num = -num;
//     }

//     let result = 0;

//     for(let i = 1; i <= num; i += 2){
//         result += (1 / i);
//     }

//     result -= 1;

//     return  result
      
// }



// N3.

// function func(arr){
//     let result = [];

//     arr.forEach(function(elem) {
//        result.push(elem.reduce(function(sum, elem){
//             return sum + elem;
//         }, 0))
//     });
//     return result;
// }
	

// N4.
	
// 	function func(row, column){
//     let result = [];
    
//     for(let i = 0; i < row; i++){
//         let roww = [];
//         for(let j = 0; j < column; j++){
//             if(i === 0 || i === row - 1){
//                 roww.push('*');
//             } else if (j === 0 || j === column - 1){
//                 roww.push('*')
//             } else{
//                 roww.push(' ')
//             }
//         }
//         result.push(roww)
//     }

//     return result;
// }


// N5. 
// 	function func(str){
//    let result = '';
   
//    for(let i = 0; i < str.length; i += 3){
    
//         let a = str.slice(i, i + 3);
        
//         if(a.length === 3){
//         result += a[1] + a[2] + a[0];
//         } else {
//             result += a;
//         }
//    }
//    return result;

// }


// N6.

	