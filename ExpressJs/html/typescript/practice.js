var num;
num = 11;
console.log(num);
var str;
str = "My script";
console.log(str);
var arr;
arr = ["my", "name"];
console.log(arr);
var numarr;
numarr = [1, 2, 3];
console.log(numarr);
var numarr1;
numarr1 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numarr1);
var arr1;
arr1 = ["Your", "fame"];
console.log(arr1);
var arr2;
arr2 = ["its", "friday"];
console.log(arr2);
var arr3;
arr3 = ["its", "sunday"];
console.log(arr3);
var arr4;
arr4 = ["its", "saturday"];
console.log(arr4);
function myName(first, last) {
    return first + " " + last;
}
console.log(myName("usman", "Ghani"));
function myNum(num1, num2) {
    return num1 + num2;
}
console.log(myNum(14, 10));
var sumsum = function (num1, num2) {
    if (typeof num1 === "string") {
        num1 = parseInt(num1);
    }
    return num1 + num2;
};
console.log(sumsum("6", 8));
var fruits;
fruits = "apple";
console.log(fruits);
function total(n1, n2) {
    return n1 * n2;
}
console.log(total(5, 10));
var arrr;
arrr = ["apple", "mango", "apricot", "banana", "jordbaer"];
var arrr5 = arrr.slice(2, 4);
console.log(arrr5);
//# sourceMappingURL=practice.js.map