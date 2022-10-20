// this backend developer sendData(){


function sendData(){
    var promise = new Promise(function(resolve, reject){
        if(true){
            resolve({name: "shishpal" })
        }else{
            reject("Failure respone");
        }
    });

    return promise;



}

var promiseObject = sendData()
promiseObject.then(function(SuccessResponse){
    console.log("I  received succes response")
}, function(){})