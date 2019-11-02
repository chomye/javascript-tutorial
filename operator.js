// this is for arithematic operators
// includes + - * / %

let num1 = 70;
let num2 = 4990;
let addition = num1 + num2;
console.log(addition);
let subtraction = num2 - num1;
console.log(subtraction);
let multiplication = num1 * num2;
console.log(multiplication);
let division = num2 / num1;
console.log(division);
let modulo = num1 % num2;
console.log(modulo);

// this is for the assignment operators
// include =

let name = "austin";

// this is the increment and decrement operator
// include ++ --


let eye = 1;
console.log(++eye);
//console.log(eye);
eye = 3;
console.log(--eye);
//console.log(eye);
let apple = 2;
console.log(apple++);
console.log(apple);
apple = 4;
console.log(apple--);
console.log(apple);


// this is the string operator
// include ""
// concatenation is a combination of strings and variable number with the opertor +

let foodNumber = 10;
let food = "i have" + foodNumber + "oranges";
console.log(food);

// this is for precedence operator

let result = 4 - (2 * 6 + 8);
console.log(result);

result = 3 - (5 * 8 + 4);
console.log(result);

//this is for the function invocation operator
function sumOfTwoNUmbers(num1,num2){
    let a = num1;
    let b = num2;
    let sum = a + b;
    console.log(sum);
}

sumOfTwoNUmbers(28,3);


//this for logical operators.
// AND(&&) OR(||)

// this is for member accesor operator
// symbol is (.)

let person = {
    name : "Chioma",
    height: " 5.3ft",
    sayPerson: ()=>{
        console.log(` My name is :${this.name} and my height is: ${this.height}`);
    }
}
let you = person.name;
person.sayPerson();

// this is for code block operator
// symbol {} calir brace
if(true){
    console.log('welcome');
}

// this is for array element operator
// symbol is []

