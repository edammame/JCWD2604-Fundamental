//celcius to fahrenheit
let celcius = 60;
console.log((celcius * 9) / 5 + 32, "fahrenheit");

//odd or even number
let genap = 30;
console.log(genap % 2 ? "odd number" : "even number");

//prime or not prime number
number = 11;
let ber = true;
if (number == 1) ber = false;
for (let i = 2; i < 20; i++) {
  if (!(number % 2)) {
    ber = false;
    break;
  }
}
console.log(number, ber ? "bilangan prima" : "bukan bilangan prima");

//find the sum of the numbers 1 to N
number = 5;
let result = 0;
for (let i = 1; i <= number; i++) result += i;
console.log(result);

//factorial of a number
number = 4;
let rslt = 1;
for (let i = 1; i <= number; i++) rslt *= i;
console.log(rslt);

//the first N fibonacci numbers
number = 15;
let num1 = 1;
let num2 = 1;
result = 0;
for (let i = 2; i < number; i++) {
  let p = num2;
  result = num1 + num2;
  num2 = result;
  num1 = p;
}
console.log(result);
