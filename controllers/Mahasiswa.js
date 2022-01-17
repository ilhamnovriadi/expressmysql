import Mahasiswa from "../models/Mahasiswa.js";

// Tambah Mahasiswa
export const createMahasiswa = async (req, res) => {
  try {
    await Mahasiswa.create(req.body);
    res.json({
      message: "Mahasiswa berhasil ditambahkan",
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: "Mahasiswa gagal ditambahkan",
    });
  }
};

// Semua Mahasiswa
export const getMahasiswa = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findAll();
    if (mahasiswa.length === 0) {
      res
        .status(404)
        .send({ status: "error", message: "Data mahasiswa belum tersedia" });
    } else {
      res.send(mahasiswa);
    }
  } catch (err) {
    console.log(err);
  }
};

// Mahasiswa by Id
export const getMahasiswaById = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!mahasiswa) {
      res
        .status(404)
        .send({ status: "error", message: "Data mahasiswa tidak ditemukan" });
    } else {
      res.send(mahasiswa);
    }
  } catch (err) {
    console.log(err);
  }
};

// Sunting Mahasiswa
export const updateMahasiswa = async (req, res) => {
  try {
    await Mahasiswa.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Data mahasiswa berhasil disunting",
    });
  } catch (err) {
    console.log(err);
  }
};

// Hapus Mahasiswa
export const deleteMahasiswa = async (req, res) => {
  try {
    await Mahasiswa.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Data mahasiswa dihapus",
    });
  } catch (err) {
    console.log(err);
  }
};
