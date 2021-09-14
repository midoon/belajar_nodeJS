const yargs = require("yargs");
const contact = require("./contact");

yargs
  .command({
    command: "add",
    describe: "Menambahkan kontak baru",
    builder: {
      nama: {
        describe: "Nama Lengkap",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "email",
        demandOption: false,
        type: "string",
      },
      noHp: {
        describe: "noHP",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      const contacts = {
        nama: argv.nama,
        email: argv.email,
        noHp: argv.noHp,
      };
      contact.simpanContact(contacts.nama, contacts.email, contacts.noHp);
    },
  })
  .demandCommand();

//menampilkan list
yargs.command({
  command: "list",
  describe: "Menampilkan semua nama dan noHP",
  handler() {
    contact.listContact();
  },
});

//menampilkan detail
yargs.command({
  command: "detail",
  describe: "Menampilkan Detail (key: nama)",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contact.detailCOntact(argv.nama);
  },
});

//menghapus kotak berdasarkan nama
yargs.command({
  command: "delete",
  describe: "Menghapus kontak (key: nama)",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contact.deleteCOntact(argv.nama);
  },
});

yargs.parse();
