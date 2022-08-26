var product = [
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
        name: "T-shirt",
        category:"MensClothings",
        price: 10000,
    },

    {
        name: "Mobile ",
        category:"Electronics",
        price: 20000,
    },

    {
        name: "Gold Chain",
        category:"jewelery",
        price: 40000,
    },
];

// WAF to print all the electronics data usinng filter

var electronicData = product.filter(function(element, index){
   return element.category === "Electronics";

})

console.log(electronicData);