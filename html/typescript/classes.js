var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('user created :' + this.name);
    }
    return User;
}());
var hafeez = new User('Muhammed Hafeez', 'hafeez@gmail.com', 39);
console.log(hafeez);
var malik = new User('Malik', 'malik@gmail.com', 40);
console.log(malik);
var afridi = new User('afridi', 'afridi@gmail.com', 44);
console.log(afridi);
console.log(hafeez.age);
