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
// console.log("3")
const getUsersWithGender = (users, gender) => {
  return users
      .filter(user => user.gender === 'male')
      .map(user => `${user.name} ${user.surname}`);
};
  
console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// task 4
const getInactiveUsers = users => {
    return users.filter(user => !user.isActive);
};
  
console.log(getInactiveUsers(users));
// [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]

// task 5
const getUserWithEmail = (users, email) => {
    return users.find(user => user.email === email);
};
  
console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
// {об'єкт користувача Sheree Anthony}
  
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
// {об'єкт користувача Elma Head}

// task 6
const getUsersWithAge = (users, min, max) => {
    return users.filter(user => user.age >= min && user.age <= max);
};
  
console.log(getUsersWithAge(users, 20, 30));
// [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]
  
console.log(getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]
  