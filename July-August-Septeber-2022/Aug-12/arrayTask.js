//WAF to Print all those object whose brand name is Apple
var products = [
    {
      brand: "Apple",
      price: 90000,
    },
    {
      brand: "Oppo",
      price: 50000,
    },
    {
      brand: "oneplus",
      price: 60000,
    },
    {
      brand: "Samsung",
      price: 90000,
    },
    {
      brand: "Apple",
      price: 50000,
    },
    {
      brand: "Apple",
      price: 60000,
    },
  ];

//   arr.forEach(function(element, index){
//     console.log(element+ brand + "Apple");
// })

function prinFunctionBrnad(){
    products.forEach(function(elem, indx){ // element = {element}
       if(elem.brand === "Apple"){
        console.log(elem);

       }
    });
}

prinFunctionBrnad();