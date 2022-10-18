function fn(f){
    console.log("I am main Function code")
}

fn(function(){
    console.log("I am callback function code");
})