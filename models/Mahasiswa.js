import { Sequelize } from "sequelize";
import db from "../config/db.config.js";
 
const { DataTypes } = Sequelize;
 
const Mahasiswa = db.define('mahasiswa', {
  nim: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false
  },
  umur: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fakultas: {
    type: DataTypes.STRING,
    allowNull: false
  },
  jeniskelamin: {
    type: DataTypes.STRING,
    allowNull: false
  }
},{
  freezeTableName: true
});
 
export default Mahasiswa;