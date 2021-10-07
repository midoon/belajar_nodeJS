const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { loadContact, findContact, addContact } = require("./utils/contacts.js");

const app = express();
const port = 3000;

//gunakan ejs
app.set("view engine", "ejs");
// app.use(expressLayouts);

//thirdparty middleware

//build-in middleware
app.use(express.static("public"));
app.use(express.urlencoded());

app.get("/", (req, res) => {
  // res.sendFile("./index.html", { root: __dirname });
  const mahasiswa = [
    {
      nama: "boki",
      email: "boki@gmail.com",
    },
    {
      nama: "joko",
      email: "joko@gmail.com",
    },
    {
      nama: "uass",
      email: "gass@gmail.com",
    },
  ];

  res.render("index", {
    nama: "harun",
    title: "halaman home",
    mahasiswa,
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    // layout: "layouts/main-layout",
    title: "Halaman about",
  });
});

app.get("/contact", (req, res) => {
  const contacts = loadContact();
  res.render("contact", {
    // layout: "layouts/main-layout",
    title: "Halaman kontak",
    contacts,
  });
});

//halaman form tambah data kontak
app.get("/contact/add", (req, res) => {
  res.render("add-contact", {
    title: "Form Tambah Data Contact",
  });
});

//proses data contak
app.post("/contact", (req, res) => {
  addContact(req.body);
  res.redirect("/contact");
});

//halaman detail kontak
app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama);
  res.render("detail", {
    // layout: "layouts/main-layout",
    title: "Halaman detail",
    contact,
  });
});

//harus dibawah app.get() sendiri
app.use((req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

console.log("hai");
