var student = {
    data:[
        {
            name:{
                first:"rahul",
                last:"jaiswal"
            },
            location:{
                India:{
                    State:[{
                        name: "MH",
                    city:[{
                        name:"Nagpur", //pune
                        area:{
                            sector:"1"
                        }
                    }]
                }]
                }
            }
        },
        {},
        {},
    ],


info:{
    college:"xyz",
    uni:"xyz",
}
}
student.data[0].location.India.State[0].city.name = "Pune";
console.log(student.data[0].location.India.State[0].city.name);

console.log(student.data[0].location.India.State[0].city[0].area.sector);


// print the sector value