const config = require("../config/config.js");

const { Sequelize, DataTypes, Op } = require("sequelize");
const sequelize = new Sequelize(
  config.DB_NAME,
  config.DB_USER,
  config.DB_PASS,
  {
    host: config.DB_HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    poll: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.Op = Op;
db.sequelize = sequelize;

db.books = require("./book.model.js")(sequelize, DataTypes);

module.exports = db;
