function fn(f){
    f("shishpal");
    console.log("I am main Function code")
    f("shish");
    f("chauhan");
}

fn(function(name){
    // console.log("I am callback function code");
    console.log(name);
});