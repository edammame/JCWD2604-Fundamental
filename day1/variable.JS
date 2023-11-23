let message;
console.log("ini message", message);
message = null;
message = "hi"; // declare variable message

let msg = "hi"; // assign variable message

console.log(message);

console.log("helo");

//let
let variable1 = "hello"; //declare and assign
variable1 = "hullo"; //re-assign
// let variable 1 = "hello"; tidak bisa re-declare
console.log(variable1);

var variable2 = "hompipa"; //declare and assign
variable2 = "himpopa"; // re-assign
var variable2 = "hampipo"; //re-declare

const variable3 = "huhuhuh";
// variable3 = "hihi"; // tidak bisa re-assign
// const variable3 = "hoho";
console.log(variable3);

// by default var
variable4 = "ayam";
variable4 = "sapi";
var variable4 = "burung";

console.log(variable4);
let user = "ini user";

//naming variable
let letters = "ini letters";
let letters1 = "ini letters + number";
// let 2letters = "diawali dengan number" tidak boleh menggunakan angka sebelum letters
let _letters = "ini symbol + letter";
let $letters = "ini symbol + letter";
let _21 = "ini symbol + letter";
let Letters = "ini Letters";
console.log(letters, letters1, _letters);

//tipe tipe  data
const string = "ini string"; //string
const number = 1; //number
const bignit = 6789054432n; //bignit
const Null = null; //null
let noAssign; //undefined
const boolean = true; // boolean
console.log(string, number, bignit, Null, noAssign, boolean);

const objectUser = {
  id: 1,
  username: "udin",
  password: "password",
  fname: "udin sedunia",
};

const arrBuku = ["komik a", "komik b", "komik c"];

console.log(string, number, bignit, Null, noAssign, boolean);
console.log(objectUser.fname);
console.log(arrBuku[0]);

const angka = Infinity;
const angka2 = Number.MAX_VALUE;
console.log(angka2);
console.log(angka);

//template literal
const double = "ini buah 'stroberi'";
const single = 'ini buah "stroberi"';
const literal = `ini buah "stoberi",'anggur'`;

const aku = "aku";
const makan = "makan";
const ketoprak = "ketoprak";

const kalimat = aku + " " + makan + " " + ketoprak;
const kalimat2 = `${aku} ${makan} ${ketoprak}`;

console.log(kalimat);
console.log(kalimat2);

console.log(double);
