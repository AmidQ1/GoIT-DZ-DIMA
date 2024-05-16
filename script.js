// task 1
const user = {
    name: 'Dima',
    hobby: 'gaming',
    premium: true 
}

user.mood = "happy";
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