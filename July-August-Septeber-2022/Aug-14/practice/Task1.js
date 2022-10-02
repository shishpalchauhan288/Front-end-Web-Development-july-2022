// 3 users Informations 
// 5 Properties 

var Details = [{
    name:{
        first:"s1",
        last:"L1"
    },
    location:{
        city:"Delhi",
        state: "NCR"

    }
}, 
{
    name:{
        first:"Arti",
        last:"singh"
    },
    location:{
        city:"Dehradun",
        state: "uk"

    }
},
 {
    name:{
        first:"Rajat",
        last:"panwar"
    },
    location:{
        city:"kashipur",
        state: "Bihar"

    }
 }]
 Details[2].location.state = "HP";
 console.log(Details[1].location.city)
 console.log(Details[2].location.state)
 console.log(Details[2].location)

 // print city of second user
 // change state of third user and print it
 // print all the location details of first user