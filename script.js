// task 1
const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
}

// user.mood = "happy";
// user.hobby = 'skydiving';
// user.premium = false;

const {mood = "happy", hobby, premium} = user;

user.mood = mood;
user.hobby = 'skydiving';
user.premium = false;

for(let key of Object.keys(user)){
    console.log(`${key}: ${user[key]}`);
}

// task 2
const countProps = obj => Object.keys(obj).length;
console.log(countProps({x:42, y:32, z:52}));

// task 3
const findBestEmployee = employees => {
    let max = 0;
    let bestEmployee = "";
    for(const [name, time] of Object.entries(employees)){
        if (time > max) {
            max = time;
            bestEmployee = name;
        }
    }
    return bestEmployee;
}
console.log(
    findBestEmployee({
        a: 29,
        b: 35,
        c: 1,
        d: 99
    })
);

// task 4
const countTotalSalary = employees => {
    let total = 0;
    for (const salary of Object.values(employees)) {
      total += salary;
    }
    return total;
};
console.log(
    countTotalSalary({
        a: 290,
        b: 354,
        c: 15,
        d: 989
    })
);
// task 5
function getAllPropValues(arr, prop) {
    const values = [];
    for (const obj of arr) {
      if (prop in obj) {
        values.push(obj[prop]);
      }
    }
    return values;
}
const objects = [
    { name: 'А', age: 30 },
    { name: 'B', age: 25 },
    { name: 'C', age: 35 }
];
const [first, second, third] = objects;

console.log(first); 
console.log(second); 
console.log(third);

console.log(getAllPropValues(objects, 'age'));

// task 6
const calculateTotalPrice = (allProdcuts, productName) =>{
    let price = 0;
    for(const product of allProducts){
        if(product.name == productName){
            price += product.price * product.quatity;
        }
    }
    return price
}
console.log({name: "656", price: 2, quantity: 10})

// task 7
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
const account = {
    balance: 0,
    transactions: [],

    createTransaction(amount, type) {
      return {
        id: this.transactions.length + 1,
        type,
        amount
      };
    },

    deposit(amount) {
      const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
      this.transactions.push(transaction);
      this.balance += amount;
    },
  
    withdraw(amount) {
      if (amount > this.balance) {
        console.log('Недостатньо коштів для зняття такої суми.');
        return;
      }
      const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
      this.transactions.push(transaction);
      this.balance -= amount;
    },

    getBalance() {
      return this.balance;
    },
  
    getTransactionDetails(id) {
      return this.transactions.find(transaction => transaction.id === id);
    },

    getTransactionTotal(type) {
      return this.transactions
        .filter(transaction => transaction.type === type)
        .reduce((total, transaction) => total + transaction.amount, 0);
    },
  };
  
  account.deposit(1000);
  account.withdraw(500);
  account.deposit(200);
  account.withdraw(1500);
  
  console.log('Поточний баланс:', account.getBalance()); 
  console.log('Деталі транзакції з ID 1:', account.getTransactionDetails(1));
  console.log('Загальна сума депозитів:', account.getTransactionTotal(Transaction.DEPOSIT)); 
  console.log('Загальна сума зняття:', account.getTransactionTotal(Transaction.WITHDRAW));
  