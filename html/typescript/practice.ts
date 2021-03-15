let num:number;
num = 11;
console.log(num);

let str:string;
str = "My script";
console.log(str);

let arr:string[];
arr = ["my", "name"];
console.log(arr);

let numarr:number[];
numarr = [1,2,3];
console.log(numarr);

let numarr1:number[];
numarr1 = [1,2,3,4,5,6,7,8];
console.log(numarr1);

let arr1:string[];
arr1 = ["Your", "fame"];
console.log(arr1);

let arr2:string[];
arr2 = ["its", "friday"];
console.log(arr2);

let arr3:string[];
arr3 = ["its", "sunday"];
console.log(arr3);

let arr4:string[];
arr4 = ["its", "saturday"];
console.log(arr4);

function myName(first:string, last:string):string{
    return first + " " + last;
}
console.log(myName("usman", "Ghani"));

function myNum(num1:number , num2:number):number{
    
    return num1 + num2;
}
console.log(myNum(14,10));

let sumsum = function(num1:any, num2:any):number{
    if(typeof num1 === "string"){
       num1 = parseInt(num1);
    }
    return num1 + num2;

}
console.log(sumsum("6",8));


let fruits:string;
fruits = "apple";
console.log(fruits);

function total(n1:number, n2:number):number{
    return n1*n2;
}
console.log(total(5,10));


let arrr:string[];
arrr = ["apple", "mango", "apricot", "banana","jordbaer"];
let arrr5 = arrr.slice(2,4); 
console.log(arrr5);












