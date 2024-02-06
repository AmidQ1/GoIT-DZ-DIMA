// task 1

const age = 16;
console.log("Мені  " + age + " років.");

// task 2

const name = "Dima";
console.log("I`m " + name);

// task 3 

const isStudent = true;
console.log("Student? " + isStudent);

// task 4

const myString = "Життя - це ігра, і тільки від тебе залежить, на яку кінцівку ти її закінчиш!";
console.log("Моя любима цитата: " + myString);

// task 5

let myNumber =  8;
myNumber+=10;
console.log("myNumber: " + myNumber)

// task 6

const myNull = null;
console.log("myNull: " + myNull)

// task 7

const userName = prompt("Будь ласка, введіть своє ім'я");
alert("Hi " + userName)

// task 8

const conone = confirm("Натисніть ОК, якщо ви погоджуєтесь: ");
if (conone){
    alert ("Дякую за підтвердження!");
}
else{
    alert ("Дію відмінено!")
}

// task 9
alert("УВАГА! Дія небезпечна!");
const contwo = confirm("Натисніть ОК, якщо ви погоджуєтесь: ");
if (contwo){
    alert ("Дякую за підтвердження!");
}
else{
    alert ("Дію відмінено!")
}