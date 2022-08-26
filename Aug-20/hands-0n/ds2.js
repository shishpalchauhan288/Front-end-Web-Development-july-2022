// The user object contains three keys. The data key contains five keys, 
// one of which contains an array of friends. From this, you can see how flexible 
// objects are as data structures.
// WAF so that it takes a user object and adds the name of the 
// friend argument to the array stored in friends Propert and returns that Friends Property Value.


let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};