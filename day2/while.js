let number = 1;

while (number <= 5) {
    console.log(number++);
}

number = 0;

while (true) {
    if (number === 5) break; //force stop

    console.log(++number, "ini menggunakan break")

}

number = 1;
while (number <= 5) {
    if (number === 4) {
        number++;
        continue; //code block dibawahnya akan diskip
    } else console.log(number++)
}

number = 1;
while (number <= 10) {
    if (number === 8) {
        number++;
        continue;
    } else console.log(number++);
}