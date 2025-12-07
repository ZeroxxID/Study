console.log("=== LATIHAN PENJAGA ZOOTOPIA === \n");
const member = [{name: "Judy Hopps", range: 3} , {name: "Nick Wilde", range: 2}];
let totalRange = {
    "Judy Hopps": 0 , 
    "Nick Wilde": 0
};
const days = 5; 

console.log("Jarak lari per hari:");
console.log(`${member[0].name}: ${member[0].range} km`);
console.log(`${member[1].name}: ${member[1].range} km \n`);

for (let day = 1; day <= days; day++) {
    console.log(`Hari ${day}:`);
    console.log(`- ${member[0].name} lari ${member[0].range} km`);
    console.log(`- ${member[1].name} lari ${member[1].range} km \n`);
    
    totalRange["Judy Hopps"] += member[0].range;
    totalRange["Nick Wilde"] += member[1].range;
}

console.log("=== TOTAL JARAK SELAMA 5 HARI ===");
console.log(`${member[0].name}: ${totalRange["Judy Hopps"]} km`);
console.log(`${member[1].name}: ${totalRange["Nick Wilde"]} km`);
