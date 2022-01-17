import express from "express";
import cors from "cors";
import db from "./config/db.config.js";
import Router from "./routes/routes.js";
 
const app = express();
app.use(express.json());
app.use(cors());
 
try {
    await db.authenticate();
    console.log('Koneksi Database Tersambung');
} catch (error) {
    console.error('Gagal Menyambung ke Database:', error);
}
 
app.use(Router);
 
app.listen(8080, () => console.log('Server Berjalan di http://localhost:8080'));