// task 1
const bankAccount = {
    ownerName: "Dima",
    accountNumber: "111111111",
    balance: 10000,
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposit successful. Balance: ${this.balance}`);
    },
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawal successful. Balance: ${this.balance}`);
        } else {
            console.log("Insufficient funds");
        }
    }
};

bankAccount.withdraw(2500);

// task 2
const weather = {
    temperature: 5, 
    humidity: 60,
    windSpeed: 10,
    isTemperatureBelowZero() {
        return this.temperature < 0;
    }
};
const temperatureMessage = weather.isTemperatureBelowZero()?"Temperature is below 0 degrees Celsius":"Temperature is 0 degrees Celsius or above";
console.log(temperatureMessage);


//  task 3
const user = {
    name: "",
    email: "",
    password: "",
    login(email, password) {
        if (email === this.email && password === this.password) {
            console.log("Login successful");
        } else {
            console.log("Incorrect email or password");
        }
    }
};

user.email = "user@example.com";
user.password = "password";
user.login("user@example.com", "password"); 
user.login("user@example.com", "incorrectPassword");

// task 4
const movie = {
    title: "asdfgh",
    director: "sdfghasd",
    year: 2010,
    rating: 9.8,
    isRatingAboveEight() {
        return this.rating > 8;
    }
};

console.log(`Title: ${movie.title}`);
console.log(`Director: ${movie.director}`);
console.log(`Year: ${movie.year}`);
console.log(`Rating: ${movie.rating}`);

if (movie.isRatingAboveEight()) {
    console.log("%cAAAAAAAAAAAAAAAAAAAAAAAAAAAA", "color: green");
} else {
    console.log("%cBBBBBBBBBBBBBBBBBBBBBBBBBBBB", "color: black");
}

movie.rating = 7.8;

console.log(`Title: ${movie.title}`);
console.log(`Director: ${movie.director}`);
console.log(`Year: ${movie.year}`);
console.log(`Rating: ${movie.rating}`);

if (movie.isRatingAboveEight()) {
    console.log("%cAAAAAAAAAAAAAAAAAAAAAA", "color: green");
} else {
    console.log("%cBBBBBBBBBBBBBBBBBBBBBB", "color: black");
}