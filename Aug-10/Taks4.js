var data = {
    name: "Geekster",
    city: "Gurugram",
};

console.log(data.city)
console.log(data["city"]);


for (var key in data) {
    console.log(key, ":", data[key]);
}