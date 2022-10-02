//1) WAF and return arr so that it only contains elements that sum to the value of 10.
const arr = [2, 4, 5, 1, 7, 5, 2, 1];

//[4, 5, 1];
// [2,3,4,1];

function filtterArray(){
    //splice // shift
    // arr.shift();
    arr.splice(0, 2);
    arr.splice(1, 2);
    arr.splice(-2);
   console.log(arr);
   return arr;

}
console.log(filtterArray());



// output = [4,5,1] = 10 
//          [5,5] = 10
         