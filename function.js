// syntax
// function namaFungsi() {
// lakukan proses
// }

// function lemparDadu() {
//   console.log(Math.floor(Math.random() * 6) + 1);
// }

// lemparDadu();

// ==============================================================

// function greet(name) { // name merupakan parameter
//   console.log(`Hi, ${name}`);
// }

// greet("Jason"); // jason merupakan argument

// // paramrter/argument merupakan inputan

// function jumlahkan(a, b) {
//   const total = a + b;
//   console.log(total);
// }

// function jumlahkanLagi(a = 0, b = 0) {
//     const total = a + b;
//     console.log(total);
//   }

// jumlahkan(3);
// jumlahkanLagi(2);

// ==============================================================

// konsep return
// mengakhiri proses dalam statement return dan menampilkan nilai yang didefinisikan

// function penjumlahan(a = 0, b = 0, c = 0) {
//   const total = a + b + c;
//   return total;
// //   console.log('selesai') // tidak akan dijalankan karena return sudah mengakhiri program
// }

// function penjumlahanLagi(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return 'bukan angka';
//     }
//     return a + b;
// }

// ==============================================================

// // konsep scope
// visibilitas variabel
// --> variabel let dengan value "Javascript" memiliki nilai yang lebih besar daripada "Python"

// let programming = "Javascript";

// function learn() {
//   let programming = "Python";
//   console.log(programming);
// }

// learn();

// console.log(programming);

// let tinggi = 8;
// if (tinggi > 5) {
//   let lebar = 10;
//   console.log(lebar);
// }

// console.log(tinggi);

// var > let / const
// var tidak memiliki blocking scope dan sangat general, tidak direkomendasikan menggunakan var

// ==============================================================

// // konsep lexical scope

// function lamarKerja() {
//   const jabatan = "programmer";

//   function orangDalam() {
//     function lebihDalam() {
//       let kenalan = `Orang dalam bisa masukkan ${jabatan}`;
//       console.log(kenalan);
//     }
//     lebihDalam();
//   }
//   orangDalam();
// }

// lamarKerja();

// ==============================================================

// function expression

// function perpangkatan(nilai) {
//   return nilai * nilai;
// }

// let hasil = perpangkatan();

// console.log(perpangkatan(2));

// const hasilPerpangkatan = function (nilai) {
//   return nilai * nilai;
// };

// console.log(hasilPerpangkatan(4));
