// //core module
// //file system
const fs = require("fs");

// //menuliskan String ke ffile (synchrounous)

// //mencari file test.txt jika ada, jika tidak bikin file baru
// fs.writeFileSync("test.txt", "Hello world secara sinkronus");

// //jika menggunkaan url folder dan folder tidak ada maka tidak akan jalan
// // fs.writeFileSync("data/test.txt", "Hello world secara sinkronus");

// //tampung error
// try {
//   fs.writeFileSync("data/test.txt", "Hello world secara sinkronus");
// } catch (e) {
//   console.log(e);
// }

// //menuliskan String ke file asinkronus
// fs.writeFile("data/test.txt", "Hello world secara asinkronus", (e) => {
//   console.log(e);
// });

// //membaca isi file sinkronus
// const data = fs.readFileSync("data/test.txt", "utf-8");
// console.log(data);

// //membaca file asinkronus
// fs.readFile("data/test.txt", "utf-8", (e, data) => {
//   if (e) throw e;
//   console.log(data);
// });

//core module: Readline
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("Masukkan nama mu! ", (nama) => {
//   //lakukan apapun
//   console.log(`terima kasih ${nama}`);
//   rl.close();
// });

//question di dalam question
//simpan di data/contacs.json
rl.question("masukkan nama: ", (nama) => {
  rl.question("masukkan no hp: ", (noHp) => {
    const contact = {
      nama,
      noHp,
    };

    const file = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(file);

    contacts.push(contact);

    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

    console.log("terimakasih telah input data");

    rl.close();
  });
});
