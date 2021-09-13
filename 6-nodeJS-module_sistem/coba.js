function cetakNama(nama) {
  return `nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
  nama: "max",
  umur: 20,
  cetakMhs() {
    return `halo nama say ${this.nama} dan saya ${this.umur} tahun`;
  },
};

class Orang {
  constructor() {
    console.log("objek orang telalh dibuat");
  }
}

//eksport sebagai method
//modoule.export.namaVar = properti
// module.exports.cetakNama = cetakNama;

// //modoule.export.namaVar = properti
// module.exports.PI = PI;

// module.exports.mahasiswa = mahasiswa;

// module.exports.Orang = Orang;

// module.exports = {
//   cetakNama: cetakNama,
//   PI: PI,
//   mahasiswa: mahasiswa,
//   Orang: Orang,
// };

//eksport module notasi es6
module.exports = {
  cetakNama,
  PI,
  mahasiswa,
  Orang,
};
