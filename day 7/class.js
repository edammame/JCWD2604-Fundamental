/** @format */

//class declaration
class User {
  greeting() {
    console.log("Hello world");
  }
}

//class expression
const User2 = class {
  greeting() {
    console.log("hello world");
  }
};

const user1 = new User();
const user2 = new User();
const user3 = new User();
const user4 = new User();
const user5 = new User();

user1.greeting();
user2.greeting();
user3.greeting();
user4.greeting();
user5.greeting();

const arr = new Array(1, 2, 3, 4);
console.log(arr);

class Car {
  constructor(brand, model, price) {
    this.brand = brand;
    this.modal = model;
    this.price = price;
  }
}

const bmw = new Car("bmw", "m135i", 800000000);
const toyota = new Car("toyota", "supra", 1000000000);

console.log(bmw);
console.log(toyota);

const bmw1 = {
  brand: "bmw",
  model: "sadsad",
  price: 1232131,
};

const toyota1 = {
  brand: "toyota",
  model: "asjd;sad",
  price: 192039120,
};

class Student {
  alamat = "jkt";
  constructor(name, id, kelas) {
    this.name = name;
    this.id = id;
    this.kelas = kelas;
    this.kota = "dki jkt";
  }
}

const students = [
  new Student("udin", 1, "JCWD"),
  new Student("ujang", 2, "JCWD"),
  new Student("dudu", 3, "JCDS"),
];

console.log(students);
students.map((val) => console.log(val.name));

students[0].age = 100;
students[1].age = 50;
students[0].name = "ayam";
// students[0].kelas = [students[0].kelas, "JCDS"].join(" ");
students[0].kelas = students[0].kelas + " " + "JCDS";

console.log(students);

const naruto = new Student("naruto", 100, "JCWD");
// naruto.name = "sasuke;"

class Customer {
  #email; // ini private prop
  constructor(name, email) {
    this.name = name; //ini public
    this.#email = email;
  }

  getEmail() {
    return this.#email; //boleh access
  }
}

const udin = new Customer("udin", "udin@mail.com");
console.log(udin.getEmail());

class Order {
  #total = 0;
  #cart = [];

  addToCart(product) {
    if (product instanceof Product) this.#cart.push(product);
    else console.log("bukan product");
  }

  #hitung() {
    this.#total = this.#cart.reduce((sum, curr) => sum + curr.price, 0);
  }
  showCart() {
    return this.#cart;
  }
  getTotal() {
    this.#hitung();
    return this.#total;
  }
}
class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
}

class Buku extends Product {
  constructor(name, price, halaman, penulis, penerbit) {
    super(name, price, "buku");
    this.halaman = halaman;
    this.penulis = penulis;
    this.penerbit = penerbit;
  }
}

const botolAir = new Product("botol air", 10000);
const kotakMakan = new Product("kotak makan", 15000);
const sendok = new Product("sendok", 4000);

const belanja = new Order();
// belanja.cart tidak bisa diakses karena private
belanja.addToCart(new Product("air", 3000));
belanja.addToCart(new Product("chiki", 5000));
belanja.addToCart(sendok);
belanja.addToCart(botolAir);
belanja.addToCart(sendok);
belanja.addToCart("hello");
belanja.cart = [new Product("chiki", 5000)];
console.log(belanja.showCart());
console.log(belanja.getTotal());

// const a = [10, 9, 8];
// a.reduce((prev, curr, i) => {
//   console.log(prev);
//   console.log(i);
//   return prev + curr;
// }, 0);

//getter setter
class Data {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
  get fullname() {
    //read only
    return this.fname + " " + this.lname;
  }
  set fullname(values) {
    const split = values.split(" "); // "ayam goreng" => ["ayam","goreng"]
    this.fname = split[0]; // "ayam"
    this.lname = split[1]; //"goreng"
  }
}
const data = new Data("uding", "ujang");
data.fullname;
console.log(data.fullname);
data.fullname = "ayam goreng";
console.log(data.fullname);
console.log(data.fname);

class DB {
  static #connection = "";
  static abc = 123;

  static #initializeConnection() {
    const random = Math.ceil(Math.random() * 100);
    DB.#connection = `new Database connection ${random}`;
  }

  hello() {
    console.log("ini bukan static");
  }

  static getConnection() {
    if (!DB.#connection) DB.#initializeConnection();

    return DB.#connection;
  }
}

//db.connection = ""
console.log(DB.getConnection()); //db.connection = " new database connection 56"

console.log(DB.getConnection()); //db.connection = " new database connection 56"

const obj = new DB();
obj.hello();
// DB.hello();

// DB.getConnection
// obj.getConnection()
// obj.getConnection(); -- static tidak diakses dari instancenya tapi dari classnya
