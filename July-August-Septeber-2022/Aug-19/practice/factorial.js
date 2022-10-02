// find the Factorial of Given Number and if you 0 then return 1

function findFact(num){
    
   if(num === 0){
    num = 1

   }else{
    for(var i = num; i > 1;  i--){
      num =  (i -1) * num;

    }



   }
   return num;


}
console.log(findFact(0));

// 5 = 5 * 4 * 3 *2 *1
// 3 = 3 * 2 * 1