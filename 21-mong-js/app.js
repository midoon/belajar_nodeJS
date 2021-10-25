const { MongoClient, ObjectId } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const dbName = "test";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((error, client) => {
  if (error) {
    return console.log("koneksi gagal");
  }

  console.log("koneksi berhasil");

  //pilih database
  const db = client.db(dbName);

  //menambahkan 1 data ke collection mahasiswa
  //   db.collection("mahasiswa").insertOne(
  //     {
  //       nama: "marle",
  //       email: "marle@gmail.com",
  //     },
  //     (error, result) => {
  //       if (error) {
  //         return console.log("gagal tambah data");
  //       }

  //       console.log(result);
  //     }
  //   );

  //menambahkan lebih dari satu data
  //   db.collection("mahasiswa").insertMany(
  //     [
  //       {
  //         nama: "boss",
  //         email: "boss@gmail.com",
  //       },
  //       {
  //         nama: "moskii",
  //         email: "moski@gmail.com",
  //       },
  //     ],
  //     (err, result) => {
  //       if (err) {
  //         return console.log("gagal tambah");
  //       }

  //       console.log(result);
  //     }
  //   );

  //menampilkan semua data
  //   console.log(
  //     db
  //       .collection("mahasiswa")
  //       .find()
  //       .toArray((err, result) => {
  //         console.log(result);
  //       })
  //   );

  //mengubah data berdasarkan id
  db.collection("mahasiswa").updateOne(
    {
      //bisa juga dari nama

      //dari id
      _id: ObjectId("61722d5343933a801e33146a"),
    },
    {
      $set: {
        nama: "moskito",
      },
    }
  );

  updatePromise
    .then((resultl) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
