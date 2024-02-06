// task 1

var age = 16;
console.log("Мені  " + age + " років.");

// task 2

var name = "Dima";
console.log("I`m " + name);

// task 3 

var isStudent = true;
console.log("Student? " + isStudent);

// task 4

var myString = "Життя - це ігра, і тільки від тебе залежить, на яку кінцівку ти її закінчиш!";
console.log("Моя любима цитата: " + myString);

// task 5

var myNumber =  8;
myNumber+=10;
console.log("myNumber: " + myNumber)

// task 6

var myNull = null;
console.log("myNull: " + myNull)

// task 7

var userName = prompt("Будь ласка, введіть своє ім'я");
alert("Hi " + userName)

// task 8

var conone = confirm("Натисніть ОК, якщо ви погоджуєтесь: ");
if (conone){
    alert ("Дякую за підтвердження!");
}
else{
    alert ("Дію відмінено!")
}

// task 9
alert("УВАГА! Дія небезпечна!");
var contwo = confirm("Натисніть ОК, якщо ви погоджуєтесь: ");
if (contwo){
    alert ("Дякую за підтвердження!");
}
else{
    alert ("Дію відмінено!")
}