var id = 100;  // Global scope

function fn(){
    console.log(id);
    var city = "Delhi"//  function scope

    // if(true){ // block scope
    //     let a = 100;
    // }
    // console.log(a)
    console.log(city)
}

function fn1(){
    console.log(id);
}
fn();
fn1();