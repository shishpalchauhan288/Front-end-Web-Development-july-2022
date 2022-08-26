var products = [
    {
      name: "Laptop",
      category: "Electronics",
      price: 50000,
    },
    {
      name: "Gold Ring",
      category: "Jewelery",
      price: 90000,
    },
    {
      name: "TShirt",
      category: "MensClothing",
      price: 10000,
    },
    {
      name: "Mobile",
      category: "Electronics",
      price: 20000,
    },
    {
      name: "Gold Chain",
      category: "Jewelery",
      price: 40000,
    },
  ];
  
  //WAF to print all Electronics Data using filter
//   var newArray = arr.filter(function(element, index){
//     return  element < 50;
//   })
//   console.log(newArray);

var electronicData = products.filter(function(ele,index){
   return ele.category = "Electronics"
})

console.log(electronicData);