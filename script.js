const users = [
    { name: 'Moore Hensley', friends: ['Sheree Anthony', 'Sharlene Bush'], skills: ['ipsum', 'lorem'], balance: 2200 },
    { name: 'Sharlene Bush', friends: ['Briana Decker', 'Ross Vazquez'], skills: ['tempor', 'mollit', 'ipsum'], balance: 2200 },
    { name: 'Ross Vazquez', friends: [], skills: ['nulla', 'anim', 'proident'], balance: 5200 },
    { name: 'Elma Head', friends: ['Goldie Gentry', 'Sheree Anthony'], skills: ['adipisicing', 'irure', 'velit'], balance: 1800 },
    { name: 'Carey Barr', friends: ['Sheree Anthony', 'Sheree Anthony'], skills: ['veniam', 'commodo', 'culpa'], balance: 3116 },
    { name: 'Blackburn Dotson', friends: ['Moore Hensley', 'Ross Vazquez'], skills: ['elit', 'ex', 'culpa'], balance: 4300 },
    { name: 'Sheree Anthony', friends: ['Briana Decker', 'Goldie Gentry'], skills: ['lorem', 'veniam', 'culpa'], balance: 2100 }
];

// task 1
const calculateTotalBalance = users => {
    return users.reduce((total, user) => total + user.balance, 0);
};
  
console.log(calculateTotalBalance(users)); // 20916

// task 2
const getUsersWithFriend = (users, friendName) => {
    return users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);
};
  
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// task 3
const getNamesSortedByFriendsCount = users => {
    return users
        .slice()
        .sort((a, b) => b.friends.length - a.friends.length)
        .map(user => user.name)
  };
  
  console.log(getNamesSortedByFriendsCount(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// task 4
const getSortedUniqueSkills = users => {
    const allSkills = [];

    users.forEach(user => {
      user.skills.forEach(skill => {
        if (!allSkills.includes(skill)) {
          allSkills.push(skill);
        }
      });
    });
  
    return allSkills.sort();
};
  
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
  