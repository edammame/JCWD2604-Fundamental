// == equal value (value compare)
// === equal value and data type 
// != not equal (value compare)
// !== not equal value and data type
// > bigger, left value bigger than right value comparison
// > smaller, left value smaller than right value comparison
// >= bigger or equal, same as line 8 or equal to value comparison
// <= smaller or equal, same as line 9 or equal to value comparison

let age = 18;
if (age >= 17) {
    console.log("boleh buat KTP")
} else {
    console.log("belum cukup umur")
}

if (1 == "1") console.log("valuenya sama");

if (1 === 1) console.log("value dan tipe datnya sama");

if (1 != "2") console.log("valuenya tidak sama");

if (1 !== "1") console.log("value atau tipe datanya tidak sama");

if ( 18 > "15") console.log("value sebelah kiri lebih besar dari yang kanan");

if ( 18 < "20") console.log("value asebelah kiri lebih kecil dari yang kanan");

//else if 
let grade = "A";

if (grade === "A") console.log("excellent result");
else if (grade === "B") console.log("great result");
else if (grade === "C") console.log("bad result");
else if (grade === "D") console.log("very bad result");
else if (grade === "F") console.log("Failed");
else console.log("invalid grade");

let brand = "toyota";

if (brand == "toyota") console.log("mobil toyota kijang")
else if (brand === "honda") console.log ("mobil honda civic")

if (brand == "nissan") console.log("mobil nissan gtr")
if (brand == "wuling") console.log("mobil wuling air ev")
if (brand != "mitsubisi") console.log("bukan mobil evo")


//nested if
let provinsi = "banten", 
    kota = "tanggerang";

if (provinsi == "banten") {
    if (kota == "tangerang selatan") console.log("welcome to tangsel");
    else if (kota == "tangerang") console.log("welcome to kota tangerang");
} else if (provinsi == "jakarta") {
    if (kota == "dki jakarta") console.log("welcome to dki jakarta");
    else if (kota == "jakarta selatan") console.log("welcome to jaksel");
}

if (provinsi == "banten" && kota == "tangerang selatan") 
    console.log("welcome to tangsel");
else if (provinsi == "banten" && kota == "tangerang")
    console.log("welcome to kota tangerang");
else if (provinsi == "jakarta" && kota == "dki jakarta")
    console.log("welcome to dki jakarta");
else if (provinsi =="jakarta" && kota == "jakarta selatan")
    console.log("welcome to jaksel");

if (provinsi == "banten" || kota == "tangerang selatan" || kota == "tangerang")
    console.log("banten atau tangerang selatan atau tangerang");
else if (
    provinsi == "jakarta" ||
    kota == "dki jakarta" ||
    kota == "jakarta selatan"
)
    console.log("jakarta atau dki jakarta atau jaksel");

//untuk sebuah kondisi dimana provinsi wajib banten dan kota wajib tangerang selatan atau tangerang
provinsi = "jakarta";
if (
    provinsi == "banten" &&
    (kota == "tangerang selatan" || kota == "tangerang")
)
    console.log("tangerang atau tangsel");

// logical operator
// && dalam 1 scope condition terdapat 2 atau lebih kondisi yang wajib dipenuhi seluruhnya
// || (or) dalam 1 score condition terdapat 2 atau lebih kondisi yang salah satunya wajib true
//! biasanya digunakan untuk menandakan bahwa hasil dari perbandingannya adalah false

if (!( 5 * 2 == 11)) console.log("5 x 2 adalah 10 bukan 11");

// truthy and falsy

if (4) console.log("5 adalah true");
if ("0") console.log("0 tidak true");
if (0) console.log("0 tidak true"); // tidak muncul
if ("") console.log("string kosong tidak true");
if (" ") console.log("spasi adalah true");
if (5 || 0) console.log("5 true, 0 false, muncul");
if (5 && 0) console.log("5 true, 0 false, tidak muncul");
if (5 && !0) console.log("muncul ga? muncul");
if (5 && !"") console.log("muncul ga?muncul");
if (0 || !"") console.log("muncul ? muncul");
if (0 && !"") console.log("muncul tidak? muncul"); //tidak muncul
if (true) console.log("ini boolean true");
if (true || false) console.log("true or false");
if (true && !false) console.log("true and false");
if (undefined) console.log("ini undifined"); //tidak muncul
if (!undefined) console.log("ini undifined");
if (null) console.log("ini null"); //tidak muncul
if (!null) console.log("ini null");

brand = "nissan";
if (brand) console.log("muncul bang");
if (5 * 2) console.log("muncul tidak");
if (10 % 2) console.log("muncul?"); //tidak muncul


let result = 0;
console.log(Boolean(result), "ini result");
console.log(Boolean("false")); //true
if (!result) {
    const number = "2";
    console.log(result + 2, "ini cuma proses");
    result + 2; // 2, result tetap 0
    if (result + 2 == 2) result++; // result = 1
    result++; // result = result + 1
    result += number;//result = "22"
    console.log(result);//"22"
}