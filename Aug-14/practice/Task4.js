var data = {
   name: "Geekster",
   city:"Gurugram",
   id:0101001,
    }
    console.log(data["city"])
    console.log(data.city);
    console.log("---------------");

    // in Oprator whith for loop
    // for(var key in data){
    //     console.log(key);
    // }


    for(var key in data){
        console.log(key,":",data[key]);
    }


    // name: "Geekster"
    // city: "Gurugram"