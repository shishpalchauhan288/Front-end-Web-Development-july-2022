// Remove duplicate elements from array using reduce

var arr = [10,20, 30, 10,50, 90,90, 100, 20,30, 40,20,30,10,100,10];

//reduce
var newValue = arr.reduce(function(initialValue, element){
    if(initialValue.indexOf(element)== -1){
        initialValue.push(element)

    }
    return initialValue;

}, []);
console.log(newValue.reverse());




// output = [10, 20,30, 50, 90,100]

// let newUniArr = [...new Set(arr)];

// console.log(newUniArr);
