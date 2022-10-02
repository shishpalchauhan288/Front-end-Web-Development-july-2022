// function expression
// let x = function(x, y) {
//     return x * y;
//  }

//  console.log(x);


 // function expression using arrow function


 let greet = () => console.log('Hello');
greet(); // Hello

let greet2 = x => console.log(x);
greet2('Hello'); // Hello 

let age = 5;

let welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');

welcome(); // Baby