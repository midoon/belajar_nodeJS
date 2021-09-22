const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
const app = express();

const port = 3000;

//gunakan ejs
app.set("view engine", "ejs");
// app.use(expressLayouts);

//thirdparty middleware
app.use(morgan("dev"));

//build-in middleware
app.use(express.static("public"));

//aplikastion level middleware
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

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
  res.render("contact", {
    // layout: "layouts/main-layout",
    title: "Halaman konotak",
  });
});

app.get("/product/:id", (req, res) => {
  res.send("product id : " + req.params.id + "<br> Category : " + req.query.category);
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
