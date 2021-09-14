const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");

//membuat folder data
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

//membuat file contact json jikka belum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const loadCOntact = () => {
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);
  return contacts;
};

const simpanContact = (nama, email, noHp) => {
  const contact = {
    nama,
    email,
    noHp,
  };

  // const file = fs.readFileSync("data/contacts.json", "utf-8");
  // const contacts = JSON.parse(file);

  const contacts = loadCOntact();

  //cek duplikat nomor
  const duplikat = contacts.find((contact) => contact.noHp === noHp);
  if (duplikat) {
    console.log(chalk.red.inverse.bold("Nomor sudah terdaftar gunakan nomor lain"));
    return false;
  }

  //cek nomor id
  if (!validator.isMobilePhone(noHp, "id-ID")) {
    console.log(chalk.red.inverse.bold("Nomor Hp tidak valid"));
    return false;
  }

  //cek email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold("Email tidak valid"));
      return false;
    }
  }

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

  console.log("terimakasih telah input data");
};

//list contact
const listContact = () => {
  const contacts = loadCOntact();
  console.log(chalk.cyan.inverse.bold("Daftar Kontak"));
  contacts.forEach((contact, i) => {
    console.log(`${i + 1} . ${contact.nama} - ${contact.noHp}`);
  });
};

//detail
const detailCOntact = (nama) => {
  const contacts = loadCOntact();

  const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());

  if (!contact) {
    console.log(chalk.red.inverse.bold(`${nama} tidiak ditemukan`));
    return false;
  }

  console.log(chalk.cyan.inverse.bold(contact.nama));
  console.log(chalk.cyan.inverse.bold(contact.noHp));

  if (contact.email) {
    console.log(chalk.cyan.inverse.bold(contact.email));
  }
};

const deleteCOntact = (nama) => {
  const contacts = loadCOntact();

  const newContact = contacts.filter((contact) => contact.nama.toLowerCase() !== nama.toLowerCase());

  if (contacts.length === newContact.length) {
    console.log(chalk.red.inverse.bold(`${nama} tidiak ditemukan`));
  }

  fs.writeFileSync("data/contacts.json", JSON.stringify(newContact));

  console.log("Berhasil Menghapus");
};

module.exports = { simpanContact, listContact, detailCOntact, deleteCOntact };
