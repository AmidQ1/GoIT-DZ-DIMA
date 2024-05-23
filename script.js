// task 1
const getUserNames = users => {
    return users.map(user => user.name + " " + user.surname);
};

const users = [
    { name: 'Moore', surname: 'Hensley', eyeColor: 'blue', gender: 'male', isActive: false, email: 'moorehensley@index.com', age: 37 },
    { name: 'Sharlene', surname: 'Bush', eyeColor: 'blue', gender: 'female', isActive: true, email: 'sharlenebush@tubesys.com', age: 34 },
    { name: 'Ross', surname: 'Vazquez', eyeColor: 'green', gender: 'male', isActive: false, email: 'rossvazquez@xinware.com', age: 24 },
    { name: 'Elma', surname: 'Head', eyeColor: 'green', gender: 'female', isActive: true, email: 'elmahead@omatom.com', age: 29 },
    { name: 'Carey', surname: 'Barr', eyeColor: 'blue', gender: 'male', isActive: true, email: 'careybarr@nurali.com', age: 27 },
    { name: 'Blackburn', surname: 'Dotson', eyeColor: 'brown', gender: 'male', isActive: false, email: 'blackburndotson@furnigeer.com', age: 38 },
    { name: 'Sheree', surname: 'Anthony', eyeColor: 'brown', gender: 'female', isActive: true, email: 'shereeanthony@kog.com', age: 39 },
]

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// task 2
const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => user.eyeColor === 'blue');
};
  
console.log(getUsersWithEyeColor(users, 'blue')); 
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

// task 3
const getUsersWithGender = (users, gender) => {
    return users.filter(user => user.gender === 'male');
};
  
console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]