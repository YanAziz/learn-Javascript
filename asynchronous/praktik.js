// rumusPhy -- Call Stack dengan rumus Phytagoras -- use python visualize (web)

// const perkalian = (x, y) => x * y;
// const akar = (x) => perkalian(x, x);
// const phytagoras = (a, b, c) => akar(a) + akar(b) === akar(c);
// phytagoras(3, 4, 5);

// -----------------------------------------------------------------------------------------------------

// example -- Javascript single thread

// const newTask = input.value; // get user input from task input
// sendToServerAndSaveIt(newTask); // maybe take a while
// input.value = ""; // will process after save data

console.log("Bakal muncul pertama");
setTimeout(() => {
  console.log("Ini udah masuk memory proses tapi dijalankan setelah 3 detik kedepan");
}, 3000);
console.log("Bakal muncul kedua");

// -----------------------------------------------------------------------------------------------------
