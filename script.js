// task 1
class Account{login; email;
    constructor({login, email}){
        this.login = login;
        this.email = email;
    }
    getInfo(){
        return `Login: ${this.login}, Email: ${this.email}`;
    }
}

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

console.log(mango.getInfo()); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

console.log(poly.getInfo()); // Login: Poly, Email: poly@mail.com


// task 2
class User{name; age; followers;
    constructor({name, age, followers}){
        this.name = name;
        this.age = age;
        this.followers = followers;
    }
    getInfo(){
       return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
    }
}

const mango1 = new User({
    name: 'Mango',
    age: 2,
    followers: 20,
});
  
console.log(mango1.getInfo()); // User Mango is 2 years old and has 20 followers
  
const poly1 = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
});
  
console.log(poly1.getInfo()); // User Poly is 3 years old and has 17 followers

// task 3
class Storage{items;
    constructor(items){
        this.items = items;
    }

    getItems(){
        return this.items;
    }
    addItem(item){
        this.items.push(item);
    }
    removeItem(item){
        const index = this.items.indexOf(item);
        if(index !== -1){
            this.items.splice(index, 1);
        }
    }
}

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);
  
  const items = storage.getItems();
  console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem('Дроид');
  console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem('Пролонгер');
  console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

//  task 4
