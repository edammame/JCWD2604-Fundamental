const str = "JavaScript";

if (str === "JavaScript") console.log("javascript");
else console.log("not javascript");

console.log(str === "JavaScript" ? "javascript" : "not javascript");
//or
str === "JavaScript"
  ? console.log("javascript")
  : console.log("not javascript");
//tenary operator biasa digunakan untuk single steatment condition dengan if dan else

str === "JavaScript"
  ? console.log("javascript")
  : str === "fundamental"
  ? console.log("fundamental")
  : console.log("bukan javascript atau fundemental");

const provinsi = "banten";
const kota = provinsi == "banten" ? "tangerang selatan" : "bukan banten";
console.log(provinsi, kota);

provinsi == "banten" ? console.log("ini banten") : null;
const number = 8;
console.log(!(number % 2) ? "bilangan genap" : "ganjil");
//or
console.log(number % 2 == 0 ? "bilangan genap" : "ganjil");