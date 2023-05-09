// %Mengatur default value pada function%

// function lemparDadu(sisi = 6) {
//   // default valuenya 6
//   return Math.floor(Math.random() * sisi) + 1;
// }

// console.log(lemparDadu());

// function sapa(name = "user", msg = "selamat bekerja") {
//   console.log(`${name} ${msg}`);
// }

// console.log(sapa("yan", "hai"));

// // perhatikan posisi pada argumen dan parameter

// ==============================================================

// %Mengubah Array atau Object menjadi Deret Value Argument Function%

// const angka = [1, 2, 3, 4, 5];

// console.log(Math.max(angka)); // NaN
// console.log(Math.max(...angka)); // gunakan "..." untuk menghitung
// console.log(Math.min(...angka));

// ==============================================================

// %Menggabungkan nilai array dengan array lagi%

// const angka = [1, 2, 3, 4, 5, 6];
// const huruf = ["a", "b", "c", "d", "e"];

// const campuran = [...angka, 7, 8, ...huruf, "j", "k"];

// console.log(campuran);

// ==============================================================
