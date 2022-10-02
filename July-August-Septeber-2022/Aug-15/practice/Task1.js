// var product = [

//     {
//     brand:"Apple",
//     price:90000,
//    },

//    {
//     brand:"Oppo",
//     price:15000,
//    },
//    {
//     brand:"vivo",
//     price:20000,
//    },

//    {
//     brand:"real me",
//     price:25000,
//    },

//    {
//     brand:"motorola",
//     price:18000,
//    },

//    {
//     brand:"samsung",
//     price:50000,
//    },
// ];

// console.log(product);

// WAF to print brand details, if that brand is present inside the array. 
//if it is not present print
// brand is not available 

// var arr = [10, 20, 30, 40, 50, 60, 70, 10, 80 , 10];

// console.log(arr.indexOf(10));

// console.log(arr.lastIndexOf(10));

// using indexof can we find a certain element present in array or not 
//

var arr = ["Apple", "oppo", "oneplus", "Micromax"]

function findElement(elementName){
   

    if(arr.includes(elementName)){
        console.log("present");

    }else{
        console.log("not present");
    }
    

}

findElement("apple");
findElement("Apple");
findElement("shishpal");




