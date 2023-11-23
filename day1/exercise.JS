// write a code to find area of rectangle.
const rectanglewidth = 6;
const rectanglelength = 10;
const area = rectanglewidth * rectanglelength;
console.log(area);

// write a code to find perimeter of rectangle.
const width = 6;
const lenght = 10;
const perimeter = width * 2 + lenght * 2;
console.log(perimeter);

//write a code to find diameter, circumference and area of a circle.
//diameter
let c = 5;
c *= 2;
console.log(c);

//circumference
let circumference = 2 * Math.PI * 5;
console.log(circumference);

//area
let Circlearea = Math.PI * 5 * 5;
console.log(Circlearea);

//write a code to find angles of triangle if two angles are given.
const a = 80;
const b = 65;
console.log(180 - a - b);

//write a code to get difference between dates in days.
const date1 = new Date("2022-01-20");
const date2 = new Date("2022-01-22");
console.log(date2 - date1);

//write a code to convert days to years, months and days.
const days = 400;
const year = Math.floor(400 / 365);
const month = Math.floor((400 % 365) / 30);
console.log((400 % 365) % 30);

const day = (400 % 365) % 30;
console.log(`${year} year, ${month} month, ${days} days`);
