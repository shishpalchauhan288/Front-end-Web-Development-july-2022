var arr = [10, 20, 30, 40, 50, 60]

// []

var newAr = arr.map(function(element,index){
    return element  * 10;
})

// console.log(newAr);

var empDetails = [
    { 
        id: "E1",
        name: "kabir",
        city: "ddn",
   },
    {
        id: "E2",
        name: "sakshi",
        city: "kpv",
    },
    {
        id: "E3",
        name: "rohit",
        city: "dli",
    },
    {
        id: "E4",
        name: "vishal",
        city: "hyd",
    },

    {
        id: "E5",
        name: "bhushan",
        city: "mum",
    },
    {
        id: "E6",
        name: "sashi",
        city: "bglr",
    },
    
]

var empIds = empDetails.map(function(ele, index){
    return {id:ele.id, name:ele.name, city:ele.city};
});

console.log(empIds);
    

