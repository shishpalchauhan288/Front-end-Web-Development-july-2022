function fn(f){
    f("shishpal");
    console.log("I am Main Function code")
    f("kabir");
    f("sagar");
}

fn(function(name){
    console.log(name);
});