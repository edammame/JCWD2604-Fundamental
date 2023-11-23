//looping

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

for (let i = 1; i <= 100; i++) {
    console.log(i); 
}

//statement pertama declare variable i = 1
//statement kedua cek kondisi apakah i = 10
//apbila statement kedua true? maka jalankan code block
//selesai menjalankan code block, baca statement ketiga
//statement ketiga dijalankan, biasanya akan mengubah nilai dari 1
//selesai statement ketiga, baca statement kedua lagi
//sampai pada saat kondisi di statement kedua tidak terpenuhi, maka looping berhenti

for (let i = 5; i > 0; i--) {
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    i % 2 != 0 ? console.log(`${i} ganjil`) : null;
}


const tinggi = 5;
for (let i = 0; i < tinggi; i++) {
    // i = 0, 1, 2, 3, 4
    let star = "";
    for (let j = 0; j <= i; j++) {
        // 0 <= 0
        star += "*"; // "*"
    }
    console.log(star, "bintang"); // *, **, ***, ****, *****
}

