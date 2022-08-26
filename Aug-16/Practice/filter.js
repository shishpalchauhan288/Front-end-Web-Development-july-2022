var arr = [12, 13,34, 45, 32,23];

// print all the element of this array which are greater than 30

var result = arr.filter(function(element, index){
   
   return element < 30;
})
console.log(result);