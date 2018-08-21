// Problem: 1
// write a function named stringy that takes a size and returns a string of alternating '1s' and '0s'. the string should 
// start with a 1. a string with size 6 should return :'101010'. with size 4 should return : '1010'. with size 12 should 
// return : '101010101010'. The size will always be positive and will only use whole numbers.

function stringy(number){
    var arr= '';
    
    for(var i=1;i<=number;i++){
    arr += i % 2;
   }
    return arr;   
  }
  console.log(stringy(4));                //returns 1010
  console.log(stringy(6))                 //returns 101010
  console.log(stringy(10))                 //returns 1010101010



// Problem: 2
// Given a non-negative integer, return an array containing a list of independent digits in reverse order. 
// Example: 348597 => [7,9,5,8,4,3]

// function reverse(num)
// {
//     var str= String(num);                 // converts the value of an object to a string and storing it in a variable str
    
//     var reversed = str.split('').reverse().map(Number);        // map() is going to create a new array for each reversed element
    
//     return reversed;

// }
// console.log(reverse(234567));                //returns 765432
// console.log(reverse(980765));               //returns 567089



// Problem: 3

// var arr = [];                   // Initialize array!
// arr[0] = 0;
// arr[1] = 1;
// for(var i=2; i<=20; i++)
// {
//     // Next arr number = previous + one before previous
//     arr[i] = arr[i-2] + arr[i-1];
//     console.log(arr[i]);
// }


// Problem: 4

// function checkCoupon(exprd) {
//     if (Date.parse(exprd) > Date.now()) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(checkCoupon("July 24, 2016"));
// console.log(checkCoupon("Aug 18, 2018"));


// Problem: 5

// function validateEmail(input){

//     // ([a-z]\w+) states first part must be a letter first, then can accept numbers and the "+" indicates it can be any length
//      // @ is hardcoded into the variable value
//     let reg = /^([a-z]\w+)@([a-z\d\-]+).[a-z]+$/i            //i keeps it case insensative

//     // test() executes a search for a match between a regular expression and a specified string. Returns true or false.
//     if (reg.test(input)) {
//         return true;
//     }
//         return false;

// }

// console.log(validateEmail('tarana3121gmail.com'));
// console.log(validateEmail('tarana3121@gmail.com'));
