// function fib(n) {
//     let initialArray = [1,1];
//     if (n === 0){
//         return 0;
//     }
//     else{
//         for (let i = 2; i < n+1; i++){
//             initialArray.push(initialArray[i-2] + initialArray[i-1]);
//         }
//         return initialArray[n-1];
//     }
// }

//console.log(fib(8));

//further: optionally return a list
// function fibonacci (n, returnList){
//     let initialArray = [1,1];
//     for (let i = 2; i < n; i++){
//             initialArray.push(initialArray[i-2] + initialArray[i-1]);
//         }
//     if (returnList === true){
//         return initialArray;
//     }
//     else if (returnList === false){
//         return initialArray[n-1];
//     }
// }

// console.log(fibonacci(8, true));


//further: recursive algorithm
// function fibonacci(n) {
//     if (n === 1 || n === 2) return 1;

//     return fibonacci(n - 2) + fibonacci(n - 1);
// }
//if fibonacci (5) => return (fibonacci (3) + fibonacci (4)) => return( (fibonacci(1) + fibonacci(2)) + (fibonacci(2) + fibonacci(3))
// => return (2 + (fibonacci(2) + (fibonacci(1) + fibonacci(2)))) => return 5;
// console.log(fibonacci(5));


