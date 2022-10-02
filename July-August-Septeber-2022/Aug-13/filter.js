var arr = [10, 20, 50,90, 50, 30];
// print the all the element of this array which are greater than 30

 var newArray = arr.filter(function(element, index){
  return  element < 50;
})
console.log(newArray);
