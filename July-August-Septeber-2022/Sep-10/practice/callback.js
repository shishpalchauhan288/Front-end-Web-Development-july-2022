function fn(f) {
    f("chauhan");
    console.log("I am Main Function code");
    f("chauhan");
    f("sinhg");
}
fn(function (name){
    console.log(name);
})