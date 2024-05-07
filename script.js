// task 1
const message = () => {
    alert('Hello World!');
};

message()

// task 2
const randomMessage = prompt("число від 1 до 100");
const randomNumber = Math.floor(Math.random() * 100) + 1;
if (randomMessage == randomNumber) {
    alert("You win!");
} else {
    alert("You lose!");
}
console.log("Your: ", randomMessage, "Random: ", randomNumber);

// task 3
// const howClick = 0;

// const click = ('click', () => {
//     clickCount++;
//     alert(`Кількість кліків: ${clickCount}`);
// });

// Sorry, I don`t see that.

//  task 4

const applyCallbackToEachElement =(arr, callback) =>{
    const result = []; 
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i])); 
    }
    return result;
}
const arr = [1,2,3,4,5];
const sqrtCallback = num => num * num;

const result = applyCallbackToEachElement(arr, sqrtCallback);
console.log(result);

// task 5

const calcDiscountPrice = (price, discount, callback) => {
    const discountedPrice = price - (price * discount / 100); 
    callback(discountedPrice);
}

const showDiscountPrice = (discountedPrice) => console.log(`Discounted price: ${discountedPrice}`); ;
calcDiscountPrice(100,10,showDiscountPrice);