var product = [
   
    {
        brand:"Apple",
        price:"100000",

    },

    {
        brand:"samsung",
        price:"90000",

    },

    {
        brand:"Apple",
        price:"90000",

    },

    {
        brand:"lava",
        price:"12000",

    },

    {
        brand:"xolo",
        price:"18000",

    },

    {
        brand:"Apple",
        price:"80000",

    },
    

]

function printAppleBrand(){
    product.forEach(function(element,index){
        // console.log(element, index);
        if(element.brand==="Apple"){
            console.log(element);

        }
    });
}
printAppleBrand();

// write a function  to print those elements which are greater than 50

var studentsMarks = [40, 50,60,79,21,95,35, 95,05,12];
// WAF to Print all those elements whichare less than 50
// WAF toprint all those elements which are in between 30 and 80
// WAF to PRINT all those element whose pricr is less then greater then 50000
