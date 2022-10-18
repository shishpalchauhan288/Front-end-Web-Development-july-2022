class User {
    name = "kavir";
    city = "delhi";
    id = 101


    printId(){
        console.log(this.id);
    }

    printAllDetails(){
        console.log(this.id,  this.city, this.name);
    }
}

var obj1 = new User() // it is technique to create object based on class template
console.log(obj1.name)

obj1.printId();
console.log(obj1.name);