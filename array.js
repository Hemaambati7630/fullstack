
let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(fruit => console.log(fruit));  

fruits.push("Mango"); 
 fruits.forEach(fruit => console.log(fruit));  

fruits.pop(); 
 fruits.forEach(fruit => console.log(fruit));

fruits.shift(); 
fruits.forEach(fruit => console.log(fruit));

fruits.unshift("Grapes"); 
 fruits.forEach(fruit => console.log(fruit));

let numbers = [1, 2, 3, 4, 5];
let squared = numbers.map(num => num * num); // [1, 4, 9, 16, 25]
squared.forEach(sno => console.log(sno));