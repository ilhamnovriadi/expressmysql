import { Sequelize } from "sequelize";

const db = new Sequelize('ilhamnovriadi', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;