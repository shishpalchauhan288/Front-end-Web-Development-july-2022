// WAF so that it returns an array containing all the keys of Properties in the object.
let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
//   function matchKeys(users) {
//     var keysArray =[];
//     var temp = [];
//      keyArr =  Object.keys(users)
//     for (var key in users )
//     console.log(keysArray);

//   }
//   matchKeys(users);

// function getObjectKeys(users){
//     var keys = []

//     keys = Object.keys(users)
//     return keys;
// }

function getKeys(user){
    var keyOfObject = [];
    for (var key in users){
        keyOfObject.push(key);

    }
    return keyOfObject;

}

console.log(getKeys);
// console.log(getObjectKeys(users));
  
    
    //o/p: ["Alan","Jeff","Sarah","Ryan"]


    