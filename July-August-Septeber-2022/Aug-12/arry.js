var student = {
    name: "Vaish",
    city: "Mumbai",
    marks: [90, 90, 80, 75, 95],
};
console.log(student.marks)

var product = [
{
    brand: "Apple",
    modek: "I phone 12",
    price: 90000,
},
{
    brand: "vivo",
    model: "vivo A21",
    price: 9000,
},
{
    brand:"samsung",
    model: "Samsung Galsxy fold",
    price:70000,
},
{
    brand: "Apple",
    model: "Iphone 13 pro",
    price: 80000,
},

];

var a = 2;

switch(product[a].brand){
    case 'Apple':
    console.log(product[0])
    console.log(product[3])
          
    break;
    case 'vivo':
        console.log(product[1])

        break;
    case 'samsung':
        console.log(product[2])

        break;
    case 'oppo':
        console.log(product[3])
        break;

        default:
            console.log("No case is  matched")
        

}

// console.log(product[2].price);