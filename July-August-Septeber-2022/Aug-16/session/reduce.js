

//  var newValue = reduse.reduce(function(element, index){

//     console.log(element , index)

//      return element + index;

// },0
// );

// console.log(newValue);

var reduse = [11,12,23,32,22,33,43,34];

var newValue= reduse.reduce(function(initialValue, element){
    // console.log(initialValue, element);
    return initialValue + element;
});
console.log(newValue);