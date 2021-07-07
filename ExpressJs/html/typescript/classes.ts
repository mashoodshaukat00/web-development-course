class User {
   name:string;
   email:string;
   age:number;
   
   constructor(name:string, email:string, age:number){
    this.name = name;
    this.email = email;
    this.age = age;

    console.log('user created :' + this.name);
   }
}

let hafeez = new User('Muhammed Hafeez', 'hafeez@gmail.com',39 );
console.log(hafeez);
 let malik = new User('Malik', 'malik@gmail.com',40 );
 console.log(malik);
let afridi = new User('afridi', 'afridi@gmail.com',44 );
console.log(afridi);
console.log(hafeez.age);