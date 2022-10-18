var  student = {
    name: "vaish",
    id: 101,
    city: "Mumbai",
    marks: [80, 90, 100, 75,95],

};

console.log(student.marks[3]);



var product = [{
    brand: "Apple",
    model: "Iphone 12",
    price: 90000,
}, 
{
    brand: "Oppo",
    model: "Oppo Reno",
    price: 22000,
}, 
{
    brand: "Vivo",
    model: "Vivo A21",
    price: 20000,
},
 {
    brand: "Samsung",
    model: "Samsung Galaxy Fold",
    price: 70000,
 },
];




switch(product[1].brand){
    case "Apple":
        console.log(product[0])
        // console.log(product[3])
        break;
        case "Vivo":
            console.log(product[2])
            break;
            case 'Samsung':
            console.log(product[3])
            break;
            case 'Oppo':
            console.log(product[1])

            default:
            console.log("No case is matched");


}