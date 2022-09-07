/* ------------------------------ TASK 5 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis:
1. funkcija "filterDogOwers" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins "users", kurie turi augintinį.
2. funkcija "filterAdults" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins masyvą su "users", kurie yra pilnamečiai.
-------------------------------------------------------------------------- */

const users = [
  { id: "1", name: "John Smith", age: 20, hasDog: true },
  { id: "2", name: "Ann Smith", age: 24, hasDog: false },
  { id: "3", name: "Tom Jones", age: 31, hasDog: true },
  { id: "4", name: "Rose Peterson", age: 17, hasDog: false },
  { id: "5", name: "Alex John", age: 25, hasDog: true },
  { id: "6", name: "Ronald Jones", age: 63, hasDog: true },
  { id: "7", name: "Elton Smith", age: 16, hasDog: true },
  { id: "8", name: "Simon Peterson", age: 30, hasDog: false },
  { id: "9", name: "Daniel Cane", age: 51, hasDog: true },
];

// creating empty arrays
const usersHaveDogs = [];
const grownUps = [];

// ---------------
function filterDogOwners(data) {
  data.forEach((element) => {
    if (element.hasDog === true) {
      usersHaveDogs.push(element);
    } else {
      console.log("Neturi: " + element);
    }
  });
  console.log(usersHaveDogs);
}

// calling method
filterDogOwners(users);

// ---------------
function filterAdults(data) {
  data.forEach((element) => {
    if (element.age >= 18) {
      grownUps.push(element);
    }
  });
  console.log(grownUps);
}

// calling method
filterAdults(users);
