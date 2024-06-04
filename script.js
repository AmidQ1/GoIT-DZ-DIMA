// task 1
class Account{
    this.login = login;
    this.email = email;
}

    console.log(`Login: ${this.login}, Email: ${this.email}`); // function

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com

// task 2


const mango1 = new User({
    name: 'Mango',
    age: 2,
    followers: 20,
});
  
mango1.getInfo(); // User Mango is 2 years old and has 20 followers
  
const poly1 = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
});
  
poly1.getInfo(); // User Poly is 3 years old and has 17 followers