// console.log("halo dunia");
// const nama = "harun";
// const cetakNama = (nama) => `Hi, nama saya ${nama}`;
// console.log(cetakNama("brofist"));

//memanggil file lain
// require("./coba.js");

// const fs = require("fs"); //core module
// const cetakNama = require("./coba"); //lokal module
// const mooment = require("moment"); //third party module

const coba = require("./coba");

console.log(coba.cetakNama("joko"), coba.PI, coba.mahasiswa.cetakMhs());

new coba.Orang();
