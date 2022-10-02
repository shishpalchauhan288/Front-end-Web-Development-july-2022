//It is also used to check certian condition on each and every element
var arr = [10,20,30,40,50];

var result = arr.some(function(element){
   return element > 15;
});

console.log(result);