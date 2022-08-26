// var arr = [11,12, 13, 23, 32, 14, 24, 44]
// //[20, 30, 40, 50]
//  var result = arr.map(function(element,index){
//     return element + 10;

// })
// console.log(result)


var empDetails  = [
    {
        id: 101,
        name: "E1",
        city: "Dehradun",

    },
    {
        id: 102,
        name: "E2",
        city: "Mohali",
    },
    {
        id: 103,
        name: "E3",
        city: "Delhi",
    },
    {
        id: 101,
        name: "E4",
        city: "Hydrabad",
    },
    {
        id: 101,
        name: "E5",
        city: "Bangluru",
    },

];

 var result = empDetails.map(function(elemnet, index){

    return {id: elemnet.id, name: elemnet.name};
})
console.log(result);