console.log("=====[Tiket Masuk Zoo]=====")
let dataVisitors = [{name: "July", age: 4}, {name: "Joko", age: 35}, {name: "Sela", age: 65}, {name: "Zell", age: 10}];

const ticketPrice = 50000;

for (let i in dataVisitors) {
    let currentName = dataVisitors[i].name;
    let currentAge = dataVisitors[i].age;
    let price;

    if (currentAge < 5) {
        price = "Free"; 
    } else if (currentAge <= 12) {
        price = ticketPrice * 0.5;
    } else if (currentAge > 50) {
        price = ticketPrice * 0.7;
    } else {
        price = ticketPrice;
    }
    console.log("======================");
    console.log("Nama:", currentName);
    console.log("Umur:", currentAge, "tahun");
    console.log("Harga:", price);
    console.log("======================");
}
