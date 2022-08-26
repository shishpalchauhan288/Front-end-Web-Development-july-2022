//3) WAF  so that it returns true if the object passed to it contains Property key as Alan, Jeff, Sarah and Ryan 
//and returns false if it does not contain any one of the following keys or any different key

let users = {
 Alan: {
   age: 27,
   online: true,
 },
 Jeff: {
   age: 32,
   online: true,
 },
 Sarah: {
   age: 48,
   online: true,
 },
 Ryan: {
   age: 19,
   online: true,
 },
};





// console.log(users.Alan);

// var obj = {
//     name:"Geekster",
//     city: "Delhi",
// };

function matchKeys(usersObj) {
    var keysArray =[];
    var temp = [];
     keyArr =  Object.keys(usersObj)
    for (var key in usersObj )
    console.log(keysArray);
    // keysArray.push(key);

    keysArray.forEach(function(ele){
        if(ele=='Alan' || ele=='Jeff'|| ele=='Sarah' || ele=='Ryan' ){
            temp.push(true)
        }else{
            temp.push(false)
        }

    });
    return !temp.includes(false);
    console.log(matchKeys(keysArray));

}
matchKeys(users);