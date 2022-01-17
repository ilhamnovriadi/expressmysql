import express from "express";

import {
  getMahasiswa,
  getMahasiswaById,
  createMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
} from "../controllers/Mahasiswa.js";

const router = express.Router();

router.get("/api/v1/mahasiswa", getMahasiswa);
router.get("/api/v1/mahasiswa/:id", getMahasiswaById);
router.post("/api/v1/mahasiswa", createMahasiswa);
router.put("/api/v1/mahasiswa/:id", updateMahasiswa);
router.delete("/api/v1/mahasiswa/:id", deleteMahasiswa);

export default router;
