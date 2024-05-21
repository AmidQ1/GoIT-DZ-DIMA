// task 1
const getUserNames = users => {
    return users.map(user => user[name], user[surname])
};

const users = [
    { name: 'Moore', surname: 'Hensley' },
    { name: 'Sharlene', surname: 'Bush' },
    { name: 'Ross', surname: 'Vazquez' },
    { name: 'Elma', surname: 'Head' },
    { name: 'Carey', surname: 'Barr' },
    { name: 'Blackburn', surname: 'Dotson' },
    { name: 'Sheree', surname: 'Anthony' },
]

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]